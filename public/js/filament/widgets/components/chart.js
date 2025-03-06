function Ft() {}
var Do = (function () {
    let i = 0
    return function () {
        return i++
    }
})()
function P(i) {
    return i === null || typeof i > 'u'
}
function B(i) {
    if (Array.isArray && Array.isArray(i)) return !0
    let t = Object.prototype.toString.call(i)
    return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
}
function F(i) {
    return i !== null && Object.prototype.toString.call(i) === '[object Object]'
}
var q = (i) => (typeof i == 'number' || i instanceof Number) && isFinite(+i)
function ft(i, t) {
    return q(i) ? i : t
}
function E(i, t) {
    return typeof i > 'u' ? t : i
}
var Eo = (i, t) =>
        typeof i == 'string' && i.endsWith('%') ? parseFloat(i) / 100 : i / t,
    En = (i, t) =>
        typeof i == 'string' && i.endsWith('%') ? (parseFloat(i) / 100) * t : +i
function $(i, t, e) {
    if (i && typeof i.call == 'function') return i.apply(e, t)
}
function V(i, t, e, s) {
    let n, r, o
    if (B(i))
        if (((r = i.length), s)) for (n = r - 1; n >= 0; n--) t.call(e, i[n], n)
        else for (n = 0; n < r; n++) t.call(e, i[n], n)
    else if (F(i))
        for (o = Object.keys(i), r = o.length, n = 0; n < r; n++)
            t.call(e, i[o[n]], o[n])
}
function _i(i, t) {
    let e, s, n, r
    if (!i || !t || i.length !== t.length) return !1
    for (e = 0, s = i.length; e < s; ++e)
        if (
            ((n = i[e]),
            (r = t[e]),
            n.datasetIndex !== r.datasetIndex || n.index !== r.index)
        )
            return !1
    return !0
}
function Ss(i) {
    if (B(i)) return i.map(Ss)
    if (F(i)) {
        let t = Object.create(null),
            e = Object.keys(i),
            s = e.length,
            n = 0
        for (; n < s; ++n) t[e[n]] = Ss(i[e[n]])
        return t
    }
    return i
}
function Io(i) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(i) === -1
}
function Dc(i, t, e, s) {
    if (!Io(i)) return
    let n = t[i],
        r = e[i]
    F(n) && F(r) ? Ce(n, r, s) : (t[i] = Ss(r))
}
function Ce(i, t, e) {
    let s = B(t) ? t : [t],
        n = s.length
    if (!F(i)) return i
    e = e || {}
    let r = e.merger || Dc
    for (let o = 0; o < n; ++o) {
        if (((t = s[o]), !F(t))) continue
        let a = Object.keys(t)
        for (let l = 0, c = a.length; l < c; ++l) r(a[l], i, t, e)
    }
    return i
}
function Le(i, t) {
    return Ce(i, t, { merger: Ec })
}
function Ec(i, t, e) {
    if (!Io(i)) return
    let s = t[i],
        n = e[i]
    F(s) && F(n)
        ? Le(s, n)
        : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Ss(n))
}
var mo = { '': (i) => i, x: (i) => i.x, y: (i) => i.y }
function Vt(i, t) {
    return (mo[t] || (mo[t] = Ic(t)))(i)
}
function Ic(i) {
    let t = Cc(i)
    return (e) => {
        for (let s of t) {
            if (s === '') break
            e = e && e[s]
        }
        return e
    }
}
function Cc(i) {
    let t = i.split('.'),
        e = [],
        s = ''
    for (let n of t)
        (s += n),
            s.endsWith('\\')
                ? (s = s.slice(0, -1) + '.')
                : (e.push(s), (s = ''))
    return e
}
function vs(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}
var dt = (i) => typeof i < 'u',
    zt = (i) => typeof i == 'function',
    In = (i, t) => {
        if (i.size !== t.size) return !1
        for (let e of i) if (!t.has(e)) return !1
        return !0
    }
function Co(i) {
    return (
        i.type === 'mouseup' || i.type === 'click' || i.type === 'contextmenu'
    )
}
var j = Math.PI,
    H = 2 * j,
    Fc = H + j,
    ks = Number.POSITIVE_INFINITY,
    Ac = j / 180,
    U = j / 2,
    pi = j / 4,
    go = (j * 2) / 3,
    mt = Math.log10,
    Mt = Math.sign
function Cn(i) {
    let t = Math.round(i)
    i = Pe(i, t, i / 1e3) ? t : i
    let e = Math.pow(10, Math.floor(mt(i))),
        s = i / e
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e
}
function Fo(i) {
    let t = [],
        e = Math.sqrt(i),
        s
    for (s = 1; s < e; s++) i % s === 0 && (t.push(s), t.push(i / s))
    return e === (e | 0) && t.push(e), t.sort((n, r) => n - r).pop(), t
}
function ge(i) {
    return !isNaN(parseFloat(i)) && isFinite(i)
}
function Pe(i, t, e) {
    return Math.abs(i - t) < e
}
function Ao(i, t) {
    let e = Math.round(i)
    return e - t <= i && e + t >= i
}
function Fn(i, t, e) {
    let s, n, r
    for (s = 0, n = i.length; s < n; s++)
        (r = i[s][e]),
            isNaN(r) ||
                ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)))
}
function _t(i) {
    return i * (j / 180)
}
function Os(i) {
    return i * (180 / j)
}
function An(i) {
    if (!q(i)) return
    let t = 1,
        e = 0
    for (; Math.round(i * t) / t !== i; ) (t *= 10), e++
    return e
}
function Ln(i, t) {
    let e = t.x - i.x,
        s = t.y - i.y,
        n = Math.sqrt(e * e + s * s),
        r = Math.atan2(s, e)
    return r < -0.5 * j && (r += H), { angle: r, distance: n }
}
function Ms(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2))
}
function Lc(i, t) {
    return ((i - t + Fc) % H) - j
}
function ct(i) {
    return ((i % H) + H) % H
}
function Ne(i, t, e, s) {
    let n = ct(i),
        r = ct(t),
        o = ct(e),
        a = ct(r - n),
        l = ct(o - n),
        c = ct(n - r),
        h = ct(n - o)
    return n === r || n === o || (s && r === o) || (a > l && c < h)
}
function tt(i, t, e) {
    return Math.max(t, Math.min(e, i))
}
function Lo(i) {
    return tt(i, -32768, 32767)
}
function At(i, t, e, s = 1e-6) {
    return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s
}
function Ds(i, t, e) {
    e = e || ((o) => i[o] < t)
    let s = i.length - 1,
        n = 0,
        r
    for (; s - n > 1; ) (r = (n + s) >> 1), e(r) ? (n = r) : (s = r)
    return { lo: n, hi: s }
}
var Ct = (i, t, e, s) => Ds(i, e, s ? (n) => i[n][t] <= e : (n) => i[n][t] < e),
    Po = (i, t, e) => Ds(i, e, (s) => i[s][t] >= e)
function No(i, t, e) {
    let s = 0,
        n = i.length
    for (; s < n && i[s] < t; ) s++
    for (; n > s && i[n - 1] > e; ) n--
    return s > 0 || n < i.length ? i.slice(s, n) : i
}
var Ro = ['push', 'pop', 'shift', 'splice', 'unshift']
function Wo(i, t) {
    if (i._chartjs) {
        i._chartjs.listeners.push(t)
        return
    }
    Object.defineProperty(i, '_chartjs', {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [t] },
    }),
        Ro.forEach((e) => {
            let s = '_onData' + vs(e),
                n = i[e]
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !1,
                value(...r) {
                    let o = n.apply(this, r)
                    return (
                        i._chartjs.listeners.forEach((a) => {
                            typeof a[s] == 'function' && a[s](...r)
                        }),
                        o
                    )
                },
            })
        })
}
function Pn(i, t) {
    let e = i._chartjs
    if (!e) return
    let s = e.listeners,
        n = s.indexOf(t)
    n !== -1 && s.splice(n, 1),
        !(s.length > 0) &&
            (Ro.forEach((r) => {
                delete i[r]
            }),
            delete i._chartjs)
}
function Nn(i) {
    let t = new Set(),
        e,
        s
    for (e = 0, s = i.length; e < s; ++e) t.add(i[e])
    return t.size === s ? i : Array.from(t)
}
var Rn = (function () {
    return typeof window > 'u'
        ? function (i) {
              return i()
          }
        : window.requestAnimationFrame
})()
function Wn(i, t, e) {
    let s = e || ((o) => Array.prototype.slice.call(o)),
        n = !1,
        r = []
    return function (...o) {
        ;(r = s(o)),
            n ||
                ((n = !0),
                Rn.call(window, () => {
                    ;(n = !1), i.apply(t, r)
                }))
    }
}
function zo(i, t) {
    let e
    return function (...s) {
        return (
            t ? (clearTimeout(e), (e = setTimeout(i, t, s))) : i.apply(this, s),
            t
        )
    }
}
var Es = (i) => (i === 'start' ? 'left' : i === 'end' ? 'right' : 'center'),
    nt = (i, t, e) => (i === 'start' ? t : i === 'end' ? e : (t + e) / 2),
    Vo = (i, t, e, s) =>
        i === (s ? 'left' : 'right') ? e : i === 'center' ? (t + e) / 2 : t
function zn(i, t, e) {
    let s = t.length,
        n = 0,
        r = s
    if (i._sorted) {
        let { iScale: o, _parsed: a } = i,
            l = o.axis,
            { min: c, max: h, minDefined: u, maxDefined: d } = o.getUserBounds()
        u &&
            (n = tt(
                Math.min(
                    Ct(a, o.axis, c).lo,
                    e ? s : Ct(t, l, o.getPixelForValue(c)).lo,
                ),
                0,
                s - 1,
            )),
            d
                ? (r =
                      tt(
                          Math.max(
                              Ct(a, o.axis, h, !0).hi + 1,
                              e
                                  ? 0
                                  : Ct(t, l, o.getPixelForValue(h), !0).hi + 1,
                          ),
                          n,
                          s,
                      ) - n)
                : (r = s - n)
    }
    return { start: n, count: r }
}
function Vn(i) {
    let { xScale: t, yScale: e, _scaleRanges: s } = i,
        n = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max }
    if (!s) return (i._scaleRanges = n), !0
    let r =
        s.xmin !== t.min ||
        s.xmax !== t.max ||
        s.ymin !== e.min ||
        s.ymax !== e.max
    return Object.assign(s, n), r
}
var ys = (i) => i === 0 || i === 1,
    po = (i, t, e) =>
        -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * H) / e)),
    yo = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * H) / e) + 1,
    Ie = {
        linear: (i) => i,
        easeInQuad: (i) => i * i,
        easeOutQuad: (i) => -i * (i - 2),
        easeInOutQuad: (i) =>
            (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
        easeInCubic: (i) => i * i * i,
        easeOutCubic: (i) => (i -= 1) * i * i + 1,
        easeInOutCubic: (i) =>
            (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
        easeInQuart: (i) => i * i * i * i,
        easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
        easeInOutQuart: (i) =>
            (i /= 0.5) < 1
                ? 0.5 * i * i * i * i
                : -0.5 * ((i -= 2) * i * i * i - 2),
        easeInQuint: (i) => i * i * i * i * i,
        easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
        easeInOutQuint: (i) =>
            (i /= 0.5) < 1
                ? 0.5 * i * i * i * i * i
                : 0.5 * ((i -= 2) * i * i * i * i + 2),
        easeInSine: (i) => -Math.cos(i * U) + 1,
        easeOutSine: (i) => Math.sin(i * U),
        easeInOutSine: (i) => -0.5 * (Math.cos(j * i) - 1),
        easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
        easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
        easeInOutExpo: (i) =>
            ys(i)
                ? i
                : i < 0.5
                  ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
                  : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
        easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
        easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
        easeInOutCirc: (i) =>
            (i /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - i * i) - 1)
                : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
        easeInElastic: (i) => (ys(i) ? i : po(i, 0.075, 0.3)),
        easeOutElastic: (i) => (ys(i) ? i : yo(i, 0.075, 0.3)),
        easeInOutElastic(i) {
            return ys(i)
                ? i
                : i < 0.5
                  ? 0.5 * po(i * 2, 0.1125, 0.45)
                  : 0.5 + 0.5 * yo(i * 2 - 1, 0.1125, 0.45)
        },
        easeInBack(i) {
            return i * i * ((1.70158 + 1) * i - 1.70158)
        },
        easeOutBack(i) {
            return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1
        },
        easeInOutBack(i) {
            let t = 1.70158
            return (i /= 0.5) < 1
                ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t))
                : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2)
        },
        easeInBounce: (i) => 1 - Ie.easeOutBounce(1 - i),
        easeOutBounce(i) {
            return i < 1 / 2.75
                ? 7.5625 * i * i
                : i < 2 / 2.75
                  ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
                  : i < 2.5 / 2.75
                    ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
                    : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375
        },
        easeInOutBounce: (i) =>
            i < 0.5
                ? Ie.easeInBounce(i * 2) * 0.5
                : Ie.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
    }
function wi(i) {
    return (i + 0.5) | 0
}
var Gt = (i, t, e) => Math.max(Math.min(i, e), t)
function yi(i) {
    return Gt(wi(i * 2.55), 0, 255)
}
function Xt(i) {
    return Gt(wi(i * 255), 0, 255)
}
function Wt(i) {
    return Gt(wi(i / 2.55) / 100, 0, 1)
}
function bo(i) {
    return Gt(wi(i * 100), 0, 100)
}
var xt = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    },
    vn = [...'0123456789ABCDEF'],
    Pc = (i) => vn[i & 15],
    Nc = (i) => vn[(i & 240) >> 4] + vn[i & 15],
    bs = (i) => (i & 240) >> 4 === (i & 15),
    Rc = (i) => bs(i.r) && bs(i.g) && bs(i.b) && bs(i.a)
function Wc(i) {
    var t = i.length,
        e
    return (
        i[0] === '#' &&
            (t === 4 || t === 5
                ? (e = {
                      r: 255 & (xt[i[1]] * 17),
                      g: 255 & (xt[i[2]] * 17),
                      b: 255 & (xt[i[3]] * 17),
                      a: t === 5 ? xt[i[4]] * 17 : 255,
                  })
                : (t === 7 || t === 9) &&
                  (e = {
                      r: (xt[i[1]] << 4) | xt[i[2]],
                      g: (xt[i[3]] << 4) | xt[i[4]],
                      b: (xt[i[5]] << 4) | xt[i[6]],
                      a: t === 9 ? (xt[i[7]] << 4) | xt[i[8]] : 255,
                  })),
        e
    )
}
var zc = (i, t) => (i < 255 ? t(i) : '')
function Vc(i) {
    var t = Rc(i) ? Pc : Nc
    return i ? '#' + t(i.r) + t(i.g) + t(i.b) + zc(i.a, t) : void 0
}
var Hc =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function Ho(i, t, e) {
    let s = t * Math.min(e, 1 - e),
        n = (r, o = (r + i / 30) % 12) =>
            e - s * Math.max(Math.min(o - 3, 9 - o, 1), -1)
    return [n(0), n(8), n(4)]
}
function Bc(i, t, e) {
    let s = (n, r = (n + i / 60) % 6) =>
        e - e * t * Math.max(Math.min(r, 4 - r, 1), 0)
    return [s(5), s(3), s(1)]
}
function $c(i, t, e) {
    let s = Ho(i, 1, 0.5),
        n
    for (
        t + e > 1 && ((n = 1 / (t + e)), (t *= n), (e *= n)), n = 0;
        n < 3;
        n++
    )
        (s[n] *= 1 - t - e), (s[n] += t)
    return s
}
function jc(i, t, e, s, n) {
    return i === n
        ? (t - e) / s + (t < e ? 6 : 0)
        : t === n
          ? (e - i) / s + 2
          : (i - t) / s + 4
}
function Hn(i) {
    let e = i.r / 255,
        s = i.g / 255,
        n = i.b / 255,
        r = Math.max(e, s, n),
        o = Math.min(e, s, n),
        a = (r + o) / 2,
        l,
        c,
        h
    return (
        r !== o &&
            ((h = r - o),
            (c = a > 0.5 ? h / (2 - r - o) : h / (r + o)),
            (l = jc(e, s, n, h, r)),
            (l = l * 60 + 0.5)),
        [l | 0, c || 0, a]
    )
}
function Bn(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Xt)
}
function $n(i, t, e) {
    return Bn(Ho, i, t, e)
}
function Uc(i, t, e) {
    return Bn($c, i, t, e)
}
function Yc(i, t, e) {
    return Bn(Bc, i, t, e)
}
function Bo(i) {
    return ((i % 360) + 360) % 360
}
function Zc(i) {
    let t = Hc.exec(i),
        e = 255,
        s
    if (!t) return
    t[5] !== s && (e = t[6] ? yi(+t[5]) : Xt(+t[5]))
    let n = Bo(+t[2]),
        r = +t[3] / 100,
        o = +t[4] / 100
    return (
        t[1] === 'hwb'
            ? (s = Uc(n, r, o))
            : t[1] === 'hsv'
              ? (s = Yc(n, r, o))
              : (s = $n(n, r, o)),
        { r: s[0], g: s[1], b: s[2], a: e }
    )
}
function qc(i, t) {
    var e = Hn(i)
    ;(e[0] = Bo(e[0] + t)),
        (e = $n(e)),
        (i.r = e[0]),
        (i.g = e[1]),
        (i.b = e[2])
}
function Gc(i) {
    if (!i) return
    let t = Hn(i),
        e = t[0],
        s = bo(t[1]),
        n = bo(t[2])
    return i.a < 255
        ? `hsla(${e}, ${s}%, ${n}%, ${Wt(i.a)})`
        : `hsl(${e}, ${s}%, ${n}%)`
}
var xo = {
        x: 'dark',
        Z: 'light',
        Y: 're',
        X: 'blu',
        W: 'gr',
        V: 'medium',
        U: 'slate',
        A: 'ee',
        T: 'ol',
        S: 'or',
        B: 'ra',
        C: 'lateg',
        D: 'ights',
        R: 'in',
        Q: 'turquois',
        E: 'hi',
        P: 'ro',
        O: 'al',
        N: 'le',
        M: 'de',
        L: 'yello',
        F: 'en',
        K: 'ch',
        G: 'arks',
        H: 'ea',
        I: 'ightg',
        J: 'wh',
    },
    _o = {
        OiceXe: 'f0f8ff',
        antiquewEte: 'faebd7',
        aqua: 'ffff',
        aquamarRe: '7fffd4',
        azuY: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '0',
        blanKedOmond: 'ffebcd',
        Xe: 'ff',
        XeviTet: '8a2be2',
        bPwn: 'a52a2a',
        burlywood: 'deb887',
        caMtXe: '5f9ea0',
        KartYuse: '7fff00',
        KocTate: 'd2691e',
        cSO: 'ff7f50',
        cSnflowerXe: '6495ed',
        cSnsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: 'ffff',
        xXe: '8b',
        xcyan: '8b8b',
        xgTMnPd: 'b8860b',
        xWay: 'a9a9a9',
        xgYF: '6400',
        xgYy: 'a9a9a9',
        xkhaki: 'bdb76b',
        xmagFta: '8b008b',
        xTivegYF: '556b2f',
        xSange: 'ff8c00',
        xScEd: '9932cc',
        xYd: '8b0000',
        xsOmon: 'e9967a',
        xsHgYF: '8fbc8f',
        xUXe: '483d8b',
        xUWay: '2f4f4f',
        xUgYy: '2f4f4f',
        xQe: 'ced1',
        xviTet: '9400d3',
        dAppRk: 'ff1493',
        dApskyXe: 'bfff',
        dimWay: '696969',
        dimgYy: '696969',
        dodgerXe: '1e90ff',
        fiYbrick: 'b22222',
        flSOwEte: 'fffaf0',
        foYstWAn: '228b22',
        fuKsia: 'ff00ff',
        gaRsbSo: 'dcdcdc',
        ghostwEte: 'f8f8ff',
        gTd: 'ffd700',
        gTMnPd: 'daa520',
        Way: '808080',
        gYF: '8000',
        gYFLw: 'adff2f',
        gYy: '808080',
        honeyMw: 'f0fff0',
        hotpRk: 'ff69b4',
        RdianYd: 'cd5c5c',
        Rdigo: '4b0082',
        ivSy: 'fffff0',
        khaki: 'f0e68c',
        lavFMr: 'e6e6fa',
        lavFMrXsh: 'fff0f5',
        lawngYF: '7cfc00',
        NmoncEffon: 'fffacd',
        ZXe: 'add8e6',
        ZcSO: 'f08080',
        Zcyan: 'e0ffff',
        ZgTMnPdLw: 'fafad2',
        ZWay: 'd3d3d3',
        ZgYF: '90ee90',
        ZgYy: 'd3d3d3',
        ZpRk: 'ffb6c1',
        ZsOmon: 'ffa07a',
        ZsHgYF: '20b2aa',
        ZskyXe: '87cefa',
        ZUWay: '778899',
        ZUgYy: '778899',
        ZstAlXe: 'b0c4de',
        ZLw: 'ffffe0',
        lime: 'ff00',
        limegYF: '32cd32',
        lRF: 'faf0e6',
        magFta: 'ff00ff',
        maPon: '800000',
        VaquamarRe: '66cdaa',
        VXe: 'cd',
        VScEd: 'ba55d3',
        VpurpN: '9370db',
        VsHgYF: '3cb371',
        VUXe: '7b68ee',
        VsprRggYF: 'fa9a',
        VQe: '48d1cc',
        VviTetYd: 'c71585',
        midnightXe: '191970',
        mRtcYam: 'f5fffa',
        mistyPse: 'ffe4e1',
        moccasR: 'ffe4b5',
        navajowEte: 'ffdead',
        navy: '80',
        Tdlace: 'fdf5e6',
        Tive: '808000',
        TivedBb: '6b8e23',
        Sange: 'ffa500',
        SangeYd: 'ff4500',
        ScEd: 'da70d6',
        pOegTMnPd: 'eee8aa',
        pOegYF: '98fb98',
        pOeQe: 'afeeee',
        pOeviTetYd: 'db7093',
        papayawEp: 'ffefd5',
        pHKpuff: 'ffdab9',
        peru: 'cd853f',
        pRk: 'ffc0cb',
        plum: 'dda0dd',
        powMrXe: 'b0e0e6',
        purpN: '800080',
        YbeccapurpN: '663399',
        Yd: 'ff0000',
        Psybrown: 'bc8f8f',
        PyOXe: '4169e1',
        saddNbPwn: '8b4513',
        sOmon: 'fa8072',
        sandybPwn: 'f4a460',
        sHgYF: '2e8b57',
        sHshell: 'fff5ee',
        siFna: 'a0522d',
        silver: 'c0c0c0',
        skyXe: '87ceeb',
        UXe: '6a5acd',
        UWay: '708090',
        UgYy: '708090',
        snow: 'fffafa',
        sprRggYF: 'ff7f',
        stAlXe: '4682b4',
        tan: 'd2b48c',
        teO: '8080',
        tEstN: 'd8bfd8',
        tomato: 'ff6347',
        Qe: '40e0d0',
        viTet: 'ee82ee',
        JHt: 'f5deb3',
        wEte: 'ffffff',
        wEtesmoke: 'f5f5f5',
        Lw: 'ffff00',
        LwgYF: '9acd32',
    }
function Xc() {
    let i = {},
        t = Object.keys(_o),
        e = Object.keys(xo),
        s,
        n,
        r,
        o,
        a
    for (s = 0; s < t.length; s++) {
        for (o = a = t[s], n = 0; n < e.length; n++)
            (r = e[n]), (a = a.replace(r, xo[r]))
        ;(r = parseInt(_o[o], 16)),
            (i[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255])
    }
    return i
}
var xs
function Kc(i) {
    xs || ((xs = Xc()), (xs.transparent = [0, 0, 0, 0]))
    let t = xs[i.toLowerCase()]
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
var Jc =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function Qc(i) {
    let t = Jc.exec(i),
        e = 255,
        s,
        n,
        r
    if (t) {
        if (t[7] !== s) {
            let o = +t[7]
            e = t[8] ? yi(o) : Gt(o * 255, 0, 255)
        }
        return (
            (s = +t[1]),
            (n = +t[3]),
            (r = +t[5]),
            (s = 255 & (t[2] ? yi(s) : Gt(s, 0, 255))),
            (n = 255 & (t[4] ? yi(n) : Gt(n, 0, 255))),
            (r = 255 & (t[6] ? yi(r) : Gt(r, 0, 255))),
            { r: s, g: n, b: r, a: e }
        )
    }
}
function th(i) {
    return (
        i &&
        (i.a < 255
            ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Wt(i.a)})`
            : `rgb(${i.r}, ${i.g}, ${i.b})`)
    )
}
var Sn = (i) =>
        i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
    Ee = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4))
function eh(i, t, e) {
    let s = Ee(Wt(i.r)),
        n = Ee(Wt(i.g)),
        r = Ee(Wt(i.b))
    return {
        r: Xt(Sn(s + e * (Ee(Wt(t.r)) - s))),
        g: Xt(Sn(n + e * (Ee(Wt(t.g)) - n))),
        b: Xt(Sn(r + e * (Ee(Wt(t.b)) - r))),
        a: i.a + e * (t.a - i.a),
    }
}
function _s(i, t, e) {
    if (i) {
        let s = Hn(i)
        ;(s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1))),
            (s = $n(s)),
            (i.r = s[0]),
            (i.g = s[1]),
            (i.b = s[2])
    }
}
function $o(i, t) {
    return i && Object.assign(t || {}, i)
}
function wo(i) {
    var t = { r: 0, g: 0, b: 0, a: 255 }
    return (
        Array.isArray(i)
            ? i.length >= 3 &&
              ((t = { r: i[0], g: i[1], b: i[2], a: 255 }),
              i.length > 3 && (t.a = Xt(i[3])))
            : ((t = $o(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Xt(t.a))),
        t
    )
}
function ih(i) {
    return i.charAt(0) === 'r' ? Qc(i) : Zc(i)
}
var On = class i {
    constructor(t) {
        if (t instanceof i) return t
        let e = typeof t,
            s
        e === 'object'
            ? (s = wo(t))
            : e === 'string' && (s = Wc(t) || Kc(t) || ih(t)),
            (this._rgb = s),
            (this._valid = !!s)
    }
    get valid() {
        return this._valid
    }
    get rgb() {
        var t = $o(this._rgb)
        return t && (t.a = Wt(t.a)), t
    }
    set rgb(t) {
        this._rgb = wo(t)
    }
    rgbString() {
        return this._valid ? th(this._rgb) : void 0
    }
    hexString() {
        return this._valid ? Vc(this._rgb) : void 0
    }
    hslString() {
        return this._valid ? Gc(this._rgb) : void 0
    }
    mix(t, e) {
        if (t) {
            let s = this.rgb,
                n = t.rgb,
                r,
                o = e === r ? 0.5 : e,
                a = 2 * o - 1,
                l = s.a - n.a,
                c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2
            ;(r = 1 - c),
                (s.r = 255 & (c * s.r + r * n.r + 0.5)),
                (s.g = 255 & (c * s.g + r * n.g + 0.5)),
                (s.b = 255 & (c * s.b + r * n.b + 0.5)),
                (s.a = o * s.a + (1 - o) * n.a),
                (this.rgb = s)
        }
        return this
    }
    interpolate(t, e) {
        return t && (this._rgb = eh(this._rgb, t._rgb, e)), this
    }
    clone() {
        return new i(this.rgb)
    }
    alpha(t) {
        return (this._rgb.a = Xt(t)), this
    }
    clearer(t) {
        let e = this._rgb
        return (e.a *= 1 - t), this
    }
    greyscale() {
        let t = this._rgb,
            e = wi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
        return (t.r = t.g = t.b = e), this
    }
    opaquer(t) {
        let e = this._rgb
        return (e.a *= 1 + t), this
    }
    negate() {
        let t = this._rgb
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
    }
    lighten(t) {
        return _s(this._rgb, 2, t), this
    }
    darken(t) {
        return _s(this._rgb, 2, -t), this
    }
    saturate(t) {
        return _s(this._rgb, 1, t), this
    }
    desaturate(t) {
        return _s(this._rgb, 1, -t), this
    }
    rotate(t) {
        return qc(this._rgb, t), this
    }
}
function jo(i) {
    return new On(i)
}
function Uo(i) {
    if (i && typeof i == 'object') {
        let t = i.toString()
        return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
    }
    return !1
}
function jn(i) {
    return Uo(i) ? i : jo(i)
}
function kn(i) {
    return Uo(i) ? i : jo(i).saturate(0.5).darken(0.1).hexString()
}
var Kt = Object.create(null),
    Is = Object.create(null)
function bi(i, t) {
    if (!t) return i
    let e = t.split('.')
    for (let s = 0, n = e.length; s < n; ++s) {
        let r = e[s]
        i = i[r] || (i[r] = Object.create(null))
    }
    return i
}
function Mn(i, t, e) {
    return typeof t == 'string' ? Ce(bi(i, t), e) : Ce(bi(i, ''), t)
}
var Dn = class {
        constructor(t) {
            ;(this.animation = void 0),
                (this.backgroundColor = 'rgba(0,0,0,0.1)'),
                (this.borderColor = 'rgba(0,0,0,0.1)'),
                (this.color = '#666'),
                (this.datasets = {}),
                (this.devicePixelRatio = (e) =>
                    e.chart.platform.getDevicePixelRatio()),
                (this.elements = {}),
                (this.events = [
                    'mousemove',
                    'mouseout',
                    'click',
                    'touchstart',
                    'touchmove',
                ]),
                (this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: 'normal',
                    lineHeight: 1.2,
                    weight: null,
                }),
                (this.hover = {}),
                (this.hoverBackgroundColor = (e, s) => kn(s.backgroundColor)),
                (this.hoverBorderColor = (e, s) => kn(s.borderColor)),
                (this.hoverColor = (e, s) => kn(s.color)),
                (this.indexAxis = 'x'),
                (this.interaction = {
                    mode: 'nearest',
                    intersect: !0,
                    includeInvisible: !1,
                }),
                (this.maintainAspectRatio = !0),
                (this.onHover = null),
                (this.onClick = null),
                (this.parsing = !0),
                (this.plugins = {}),
                (this.responsive = !0),
                (this.scale = void 0),
                (this.scales = {}),
                (this.showLine = !0),
                (this.drawActiveElementsOnTop = !0),
                this.describe(t)
        }
        set(t, e) {
            return Mn(this, t, e)
        }
        get(t) {
            return bi(this, t)
        }
        describe(t, e) {
            return Mn(Is, t, e)
        }
        override(t, e) {
            return Mn(Kt, t, e)
        }
        route(t, e, s, n) {
            let r = bi(this, t),
                o = bi(this, s),
                a = '_' + e
            Object.defineProperties(r, {
                [a]: { value: r[e], writable: !0 },
                [e]: {
                    enumerable: !0,
                    get() {
                        let l = this[a],
                            c = o[n]
                        return F(l) ? Object.assign({}, c, l) : E(l, c)
                    },
                    set(l) {
                        this[a] = l
                    },
                },
            })
        }
    },
    A = new Dn({
        _scriptable: (i) => !i.startsWith('on'),
        _indexable: (i) => i !== 'events',
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
    })
function sh(i) {
    return !i || P(i.size) || P(i.family)
        ? null
        : (i.style ? i.style + ' ' : '') +
              (i.weight ? i.weight + ' ' : '') +
              i.size +
              'px ' +
              i.family
}
function xi(i, t, e, s, n) {
    let r = t[n]
    return (
        r || ((r = t[n] = i.measureText(n).width), e.push(n)),
        r > s && (s = r),
        s
    )
}
function Yo(i, t, e, s) {
    s = s || {}
    let n = (s.data = s.data || {}),
        r = (s.garbageCollect = s.garbageCollect || [])
    s.font !== t &&
        ((n = s.data = {}), (r = s.garbageCollect = []), (s.font = t)),
        i.save(),
        (i.font = t)
    let o = 0,
        a = e.length,
        l,
        c,
        h,
        u,
        d
    for (l = 0; l < a; l++)
        if (((u = e[l]), u != null && B(u) !== !0)) o = xi(i, n, r, o, u)
        else if (B(u))
            for (c = 0, h = u.length; c < h; c++)
                (d = u[c]), d != null && !B(d) && (o = xi(i, n, r, o, d))
    i.restore()
    let f = r.length / 2
    if (f > e.length) {
        for (l = 0; l < f; l++) delete n[r[l]]
        r.splice(0, f)
    }
    return o
}
function Jt(i, t, e) {
    let s = i.currentDevicePixelRatio,
        n = e !== 0 ? Math.max(e / 2, 0.5) : 0
    return Math.round((t - n) * s) / s + n
}
function Un(i, t) {
    ;(t = t || i.getContext('2d')),
        t.save(),
        t.resetTransform(),
        t.clearRect(0, 0, i.width, i.height),
        t.restore()
}
function Cs(i, t, e, s) {
    Yn(i, t, e, s, null)
}
function Yn(i, t, e, s, n) {
    let r,
        o,
        a,
        l,
        c,
        h,
        u = t.pointStyle,
        d = t.rotation,
        f = t.radius,
        m = (d || 0) * Ac
    if (
        u &&
        typeof u == 'object' &&
        ((r = u.toString()),
        r === '[object HTMLImageElement]' || r === '[object HTMLCanvasElement]')
    ) {
        i.save(),
            i.translate(e, s),
            i.rotate(m),
            i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
            i.restore()
        return
    }
    if (!(isNaN(f) || f <= 0)) {
        switch ((i.beginPath(), u)) {
            default:
                n ? i.ellipse(e, s, n / 2, f, 0, 0, H) : i.arc(e, s, f, 0, H),
                    i.closePath()
                break
            case 'triangle':
                i.moveTo(e + Math.sin(m) * f, s - Math.cos(m) * f),
                    (m += go),
                    i.lineTo(e + Math.sin(m) * f, s - Math.cos(m) * f),
                    (m += go),
                    i.lineTo(e + Math.sin(m) * f, s - Math.cos(m) * f),
                    i.closePath()
                break
            case 'rectRounded':
                ;(c = f * 0.516),
                    (l = f - c),
                    (o = Math.cos(m + pi) * l),
                    (a = Math.sin(m + pi) * l),
                    i.arc(e - o, s - a, c, m - j, m - U),
                    i.arc(e + a, s - o, c, m - U, m),
                    i.arc(e + o, s + a, c, m, m + U),
                    i.arc(e - a, s + o, c, m + U, m + j),
                    i.closePath()
                break
            case 'rect':
                if (!d) {
                    ;(l = Math.SQRT1_2 * f),
                        (h = n ? n / 2 : l),
                        i.rect(e - h, s - l, 2 * h, 2 * l)
                    break
                }
                m += pi
            case 'rectRot':
                ;(o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    i.moveTo(e - o, s - a),
                    i.lineTo(e + a, s - o),
                    i.lineTo(e + o, s + a),
                    i.lineTo(e - a, s + o),
                    i.closePath()
                break
            case 'crossRot':
                m += pi
            case 'cross':
                ;(o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    i.moveTo(e - o, s - a),
                    i.lineTo(e + o, s + a),
                    i.moveTo(e + a, s - o),
                    i.lineTo(e - a, s + o)
                break
            case 'star':
                ;(o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    i.moveTo(e - o, s - a),
                    i.lineTo(e + o, s + a),
                    i.moveTo(e + a, s - o),
                    i.lineTo(e - a, s + o),
                    (m += pi),
                    (o = Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    i.moveTo(e - o, s - a),
                    i.lineTo(e + o, s + a),
                    i.moveTo(e + a, s - o),
                    i.lineTo(e - a, s + o)
                break
            case 'line':
                ;(o = n ? n / 2 : Math.cos(m) * f),
                    (a = Math.sin(m) * f),
                    i.moveTo(e - o, s - a),
                    i.lineTo(e + o, s + a)
                break
            case 'dash':
                i.moveTo(e, s),
                    i.lineTo(e + Math.cos(m) * f, s + Math.sin(m) * f)
                break
        }
        i.fill(), t.borderWidth > 0 && i.stroke()
    }
}
function Fe(i, t, e) {
    return (
        (e = e || 0.5),
        !t ||
            (i &&
                i.x > t.left - e &&
                i.x < t.right + e &&
                i.y > t.top - e &&
                i.y < t.bottom + e)
    )
}
function Si(i, t) {
    i.save(),
        i.beginPath(),
        i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
        i.clip()
}
function ki(i) {
    i.restore()
}
function Zo(i, t, e, s, n) {
    if (!t) return i.lineTo(e.x, e.y)
    if (n === 'middle') {
        let r = (t.x + e.x) / 2
        i.lineTo(r, t.y), i.lineTo(r, e.y)
    } else (n === 'after') != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y)
    i.lineTo(e.x, e.y)
}
function qo(i, t, e, s) {
    if (!t) return i.lineTo(e.x, e.y)
    i.bezierCurveTo(
        s ? t.cp1x : t.cp2x,
        s ? t.cp1y : t.cp2y,
        s ? e.cp2x : e.cp1x,
        s ? e.cp2y : e.cp1y,
        e.x,
        e.y,
    )
}
function Qt(i, t, e, s, n, r = {}) {
    let o = B(t) ? t : [t],
        a = r.strokeWidth > 0 && r.strokeColor !== '',
        l,
        c
    for (i.save(), i.font = n.string, nh(i, r), l = 0; l < o.length; ++l)
        (c = o[l]),
            a &&
                (r.strokeColor && (i.strokeStyle = r.strokeColor),
                P(r.strokeWidth) || (i.lineWidth = r.strokeWidth),
                i.strokeText(c, e, s, r.maxWidth)),
            i.fillText(c, e, s, r.maxWidth),
            rh(i, e, s, c, r),
            (s += n.lineHeight)
    i.restore()
}
function nh(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]),
        P(t.rotation) || i.rotate(t.rotation),
        t.color && (i.fillStyle = t.color),
        t.textAlign && (i.textAlign = t.textAlign),
        t.textBaseline && (i.textBaseline = t.textBaseline)
}
function rh(i, t, e, s, n) {
    if (n.strikethrough || n.underline) {
        let r = i.measureText(s),
            o = t - r.actualBoundingBoxLeft,
            a = t + r.actualBoundingBoxRight,
            l = e - r.actualBoundingBoxAscent,
            c = e + r.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c
        ;(i.strokeStyle = i.fillStyle),
            i.beginPath(),
            (i.lineWidth = n.decorationWidth || 2),
            i.moveTo(o, h),
            i.lineTo(a, h),
            i.stroke()
    }
}
function Re(i, t) {
    let { x: e, y: s, w: n, h: r, radius: o } = t
    i.arc(e + o.topLeft, s + o.topLeft, o.topLeft, -U, j, !0),
        i.lineTo(e, s + r - o.bottomLeft),
        i.arc(e + o.bottomLeft, s + r - o.bottomLeft, o.bottomLeft, j, U, !0),
        i.lineTo(e + n - o.bottomRight, s + r),
        i.arc(
            e + n - o.bottomRight,
            s + r - o.bottomRight,
            o.bottomRight,
            U,
            0,
            !0,
        ),
        i.lineTo(e + n, s + o.topRight),
        i.arc(e + n - o.topRight, s + o.topRight, o.topRight, 0, -U, !0),
        i.lineTo(e + o.topLeft, s)
}
var oh = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
    ah = new RegExp(
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
    )
function lh(i, t) {
    let e = ('' + i).match(oh)
    if (!e || e[1] === 'normal') return t * 1.2
    switch (((i = +e[2]), e[3])) {
        case 'px':
            return i
        case '%':
            i /= 100
            break
    }
    return t * i
}
var ch = (i) => +i || 0
function Fs(i, t) {
    let e = {},
        s = F(t),
        n = s ? Object.keys(t) : t,
        r = F(i) ? (s ? (o) => E(i[o], i[t[o]]) : (o) => i[o]) : () => i
    for (let o of n) e[o] = ch(r(o))
    return e
}
function Zn(i) {
    return Fs(i, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
}
function te(i) {
    return Fs(i, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
function rt(i) {
    let t = Zn(i)
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
}
function Q(i, t) {
    ;(i = i || {}), (t = t || A.font)
    let e = E(i.size, t.size)
    typeof e == 'string' && (e = parseInt(e, 10))
    let s = E(i.style, t.style)
    s &&
        !('' + s).match(ah) &&
        (console.warn('Invalid font style specified: "' + s + '"'), (s = ''))
    let n = {
        family: E(i.family, t.family),
        lineHeight: lh(E(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: E(i.weight, t.weight),
        string: '',
    }
    return (n.string = sh(n)), n
}
function We(i, t, e, s) {
    let n = !0,
        r,
        o,
        a
    for (r = 0, o = i.length; r < o; ++r)
        if (
            ((a = i[r]),
            a !== void 0 &&
                (t !== void 0 &&
                    typeof a == 'function' &&
                    ((a = a(t)), (n = !1)),
                e !== void 0 && B(a) && ((a = a[e % a.length]), (n = !1)),
                a !== void 0))
        )
            return s && !n && (s.cacheable = !1), a
}
function Go(i, t, e) {
    let { min: s, max: n } = i,
        r = En(t, (n - s) / 2),
        o = (a, l) => (e && a === 0 ? 0 : a + l)
    return { min: o(s, -Math.abs(r)), max: o(n, r) }
}
function Ht(i, t) {
    return Object.assign(Object.create(i), t)
}
function As(i, t = [''], e = i, s, n = () => i[0]) {
    dt(s) || (s = Jo('_fallback', i))
    let r = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: !0,
        _scopes: i,
        _rootScopes: e,
        _fallback: s,
        _getTarget: n,
        override: (o) => As([o, ...i], t, e, s),
    }
    return new Proxy(r, {
        deleteProperty(o, a) {
            return delete o[a], delete o._keys, delete i[0][a], !0
        },
        get(o, a) {
            return Xo(o, a, () => yh(a, t, i, o))
        },
        getOwnPropertyDescriptor(o, a) {
            return Reflect.getOwnPropertyDescriptor(o._scopes[0], a)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(i[0])
        },
        has(o, a) {
            return ko(o).includes(a)
        },
        ownKeys(o) {
            return ko(o)
        },
        set(o, a, l) {
            let c = o._storage || (o._storage = n())
            return (o[a] = c[a] = l), delete o._keys, !0
        },
    })
}
function me(i, t, e, s) {
    let n = {
        _cacheable: !1,
        _proxy: i,
        _context: t,
        _subProxy: e,
        _stack: new Set(),
        _descriptors: qn(i, s),
        setContext: (r) => me(i, r, e, s),
        override: (r) => me(i.override(r), t, e, s),
    }
    return new Proxy(n, {
        deleteProperty(r, o) {
            return delete r[o], delete i[o], !0
        },
        get(r, o, a) {
            return Xo(r, o, () => uh(r, o, a))
        },
        getOwnPropertyDescriptor(r, o) {
            return r._descriptors.allKeys
                ? Reflect.has(i, o)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(i, o)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(i)
        },
        has(r, o) {
            return Reflect.has(i, o)
        },
        ownKeys() {
            return Reflect.ownKeys(i)
        },
        set(r, o, a) {
            return (i[o] = a), delete r[o], !0
        },
    })
}
function qn(i, t = { scriptable: !0, indexable: !0 }) {
    let {
        _scriptable: e = t.scriptable,
        _indexable: s = t.indexable,
        _allKeys: n = t.allKeys,
    } = i
    return {
        allKeys: n,
        scriptable: e,
        indexable: s,
        isScriptable: zt(e) ? e : () => e,
        isIndexable: zt(s) ? s : () => s,
    }
}
var hh = (i, t) => (i ? i + vs(t) : t),
    Gn = (i, t) =>
        F(t) &&
        i !== 'adapters' &&
        (Object.getPrototypeOf(t) === null || t.constructor === Object)
function Xo(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t]
    let s = e()
    return (i[t] = s), s
}
function uh(i, t, e) {
    let { _proxy: s, _context: n, _subProxy: r, _descriptors: o } = i,
        a = s[t]
    return (
        zt(a) && o.isScriptable(t) && (a = dh(t, a, i, e)),
        B(a) && a.length && (a = fh(t, a, i, o.isIndexable)),
        Gn(t, a) && (a = me(a, n, r && r[t], o)),
        a
    )
}
function dh(i, t, e, s) {
    let { _proxy: n, _context: r, _subProxy: o, _stack: a } = e
    if (a.has(i))
        throw new Error(
            'Recursion detected: ' + Array.from(a).join('->') + '->' + i,
        )
    return (
        a.add(i),
        (t = t(r, o || s)),
        a.delete(i),
        Gn(i, t) && (t = Xn(n._scopes, n, i, t)),
        t
    )
}
function fh(i, t, e, s) {
    let { _proxy: n, _context: r, _subProxy: o, _descriptors: a } = e
    if (dt(r.index) && s(i)) t = t[r.index % t.length]
    else if (F(t[0])) {
        let l = t,
            c = n._scopes.filter((h) => h !== l)
        t = []
        for (let h of l) {
            let u = Xn(c, n, i, h)
            t.push(me(u, r, o && o[i], a))
        }
    }
    return t
}
function Ko(i, t, e) {
    return zt(i) ? i(t, e) : i
}
var mh = (i, t) => (i === !0 ? t : typeof i == 'string' ? Vt(t, i) : void 0)
function gh(i, t, e, s, n) {
    for (let r of t) {
        let o = mh(e, r)
        if (o) {
            i.add(o)
            let a = Ko(o._fallback, e, n)
            if (dt(a) && a !== e && a !== s) return a
        } else if (o === !1 && dt(s) && e !== s) return null
    }
    return !1
}
function Xn(i, t, e, s) {
    let n = t._rootScopes,
        r = Ko(t._fallback, e, s),
        o = [...i, ...n],
        a = new Set()
    a.add(s)
    let l = So(a, o, e, r || e, s)
    return l === null ||
        (dt(r) && r !== e && ((l = So(a, o, r, l, s)), l === null))
        ? !1
        : As(Array.from(a), [''], n, r, () => ph(t, e, s))
}
function So(i, t, e, s, n) {
    for (; e; ) e = gh(i, t, e, s, n)
    return e
}
function ph(i, t, e) {
    let s = i._getTarget()
    t in s || (s[t] = {})
    let n = s[t]
    return B(n) && F(e) ? e : n
}
function yh(i, t, e, s) {
    let n
    for (let r of t)
        if (((n = Jo(hh(r, i), e)), dt(n))) return Gn(i, n) ? Xn(e, s, i, n) : n
}
function Jo(i, t) {
    for (let e of t) {
        if (!e) continue
        let s = e[i]
        if (dt(s)) return s
    }
}
function ko(i) {
    let t = i._keys
    return t || (t = i._keys = bh(i._scopes)), t
}
function bh(i) {
    let t = new Set()
    for (let e of i)
        for (let s of Object.keys(e).filter((n) => !n.startsWith('_'))) t.add(s)
    return Array.from(t)
}
function Kn(i, t, e, s) {
    let { iScale: n } = i,
        { key: r = 'r' } = this._parsing,
        o = new Array(s),
        a,
        l,
        c,
        h
    for (a = 0, l = s; a < l; ++a)
        (c = a + e), (h = t[c]), (o[a] = { r: n.parse(Vt(h, r), c) })
    return o
}
var xh = Number.EPSILON || 1e-14,
    Ae = (i, t) => t < i.length && !i[t].skip && i[t],
    Qo = (i) => (i === 'x' ? 'y' : 'x')
function _h(i, t, e, s) {
    let n = i.skip ? t : i,
        r = t,
        o = e.skip ? t : e,
        a = Ms(r, n),
        l = Ms(o, r),
        c = a / (a + l),
        h = l / (a + l)
    ;(c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h)
    let u = s * c,
        d = s * h
    return {
        previous: { x: r.x - u * (o.x - n.x), y: r.y - u * (o.y - n.y) },
        next: { x: r.x + d * (o.x - n.x), y: r.y + d * (o.y - n.y) },
    }
}
function wh(i, t, e) {
    let s = i.length,
        n,
        r,
        o,
        a,
        l,
        c = Ae(i, 0)
    for (let h = 0; h < s - 1; ++h)
        if (((l = c), (c = Ae(i, h + 1)), !(!l || !c))) {
            if (Pe(t[h], 0, xh)) {
                e[h] = e[h + 1] = 0
                continue
            }
            ;(n = e[h] / t[h]),
                (r = e[h + 1] / t[h]),
                (a = Math.pow(n, 2) + Math.pow(r, 2)),
                !(a <= 9) &&
                    ((o = 3 / Math.sqrt(a)),
                    (e[h] = n * o * t[h]),
                    (e[h + 1] = r * o * t[h]))
        }
}
function Sh(i, t, e = 'x') {
    let s = Qo(e),
        n = i.length,
        r,
        o,
        a,
        l = Ae(i, 0)
    for (let c = 0; c < n; ++c) {
        if (((o = a), (a = l), (l = Ae(i, c + 1)), !a)) continue
        let h = a[e],
            u = a[s]
        o &&
            ((r = (h - o[e]) / 3),
            (a[`cp1${e}`] = h - r),
            (a[`cp1${s}`] = u - r * t[c])),
            l &&
                ((r = (l[e] - h) / 3),
                (a[`cp2${e}`] = h + r),
                (a[`cp2${s}`] = u + r * t[c]))
    }
}
function kh(i, t = 'x') {
    let e = Qo(t),
        s = i.length,
        n = Array(s).fill(0),
        r = Array(s),
        o,
        a,
        l,
        c = Ae(i, 0)
    for (o = 0; o < s; ++o)
        if (((a = l), (l = c), (c = Ae(i, o + 1)), !!l)) {
            if (c) {
                let h = c[t] - l[t]
                n[o] = h !== 0 ? (c[e] - l[e]) / h : 0
            }
            r[o] = a
                ? c
                    ? Mt(n[o - 1]) !== Mt(n[o])
                        ? 0
                        : (n[o - 1] + n[o]) / 2
                    : n[o - 1]
                : n[o]
        }
    wh(i, n, r), Sh(i, r, t)
}
function ws(i, t, e) {
    return Math.max(Math.min(i, e), t)
}
function Mh(i, t) {
    let e,
        s,
        n,
        r,
        o,
        a = Fe(i[0], t)
    for (e = 0, s = i.length; e < s; ++e)
        (o = r),
            (r = a),
            (a = e < s - 1 && Fe(i[e + 1], t)),
            r &&
                ((n = i[e]),
                o &&
                    ((n.cp1x = ws(n.cp1x, t.left, t.right)),
                    (n.cp1y = ws(n.cp1y, t.top, t.bottom))),
                a &&
                    ((n.cp2x = ws(n.cp2x, t.left, t.right)),
                    (n.cp2y = ws(n.cp2y, t.top, t.bottom))))
}
function ta(i, t, e, s, n) {
    let r, o, a, l
    if (
        (t.spanGaps && (i = i.filter((c) => !c.skip)),
        t.cubicInterpolationMode === 'monotone')
    )
        kh(i, n)
    else {
        let c = s ? i[i.length - 1] : i[0]
        for (r = 0, o = i.length; r < o; ++r)
            (a = i[r]),
                (l = _h(
                    c,
                    a,
                    i[Math.min(r + 1, o - (s ? 0 : 1)) % o],
                    t.tension,
                )),
                (a.cp1x = l.previous.x),
                (a.cp1y = l.previous.y),
                (a.cp2x = l.next.x),
                (a.cp2y = l.next.y),
                (c = a)
    }
    t.capBezierPoints && Mh(i, e)
}
function Jn() {
    return typeof window < 'u' && typeof document < 'u'
}
function Ls(i) {
    let t = i.parentNode
    return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t
}
function Ts(i, t, e) {
    let s
    return (
        typeof i == 'string'
            ? ((s = parseInt(i, 10)),
              i.indexOf('%') !== -1 && (s = (s / 100) * t.parentNode[e]))
            : (s = i),
        s
    )
}
var Ps = (i) => window.getComputedStyle(i, null)
function Th(i, t) {
    return Ps(i).getPropertyValue(t)
}
var vh = ['top', 'right', 'bottom', 'left']
function fe(i, t, e) {
    let s = {}
    e = e ? '-' + e : ''
    for (let n = 0; n < 4; n++) {
        let r = vh[n]
        s[r] = parseFloat(i[t + '-' + r + e]) || 0
    }
    return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s
}
var Oh = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot)
function Dh(i, t) {
    let e = i.touches,
        s = e && e.length ? e[0] : i,
        { offsetX: n, offsetY: r } = s,
        o = !1,
        a,
        l
    if (Oh(n, r, i.target)) (a = n), (l = r)
    else {
        let c = t.getBoundingClientRect()
        ;(a = s.clientX - c.left), (l = s.clientY - c.top), (o = !0)
    }
    return { x: a, y: l, box: o }
}
function ee(i, t) {
    if ('native' in i) return i
    let { canvas: e, currentDevicePixelRatio: s } = t,
        n = Ps(e),
        r = n.boxSizing === 'border-box',
        o = fe(n, 'padding'),
        a = fe(n, 'border', 'width'),
        { x: l, y: c, box: h } = Dh(i, e),
        u = o.left + (h && a.left),
        d = o.top + (h && a.top),
        { width: f, height: m } = t
    return (
        r && ((f -= o.width + a.width), (m -= o.height + a.height)),
        {
            x: Math.round((((l - u) / f) * e.width) / s),
            y: Math.round((((c - d) / m) * e.height) / s),
        }
    )
}
function Eh(i, t, e) {
    let s, n
    if (t === void 0 || e === void 0) {
        let r = Ls(i)
        if (!r) (t = i.clientWidth), (e = i.clientHeight)
        else {
            let o = r.getBoundingClientRect(),
                a = Ps(r),
                l = fe(a, 'border', 'width'),
                c = fe(a, 'padding')
            ;(t = o.width - c.width - l.width),
                (e = o.height - c.height - l.height),
                (s = Ts(a.maxWidth, r, 'clientWidth')),
                (n = Ts(a.maxHeight, r, 'clientHeight'))
        }
    }
    return { width: t, height: e, maxWidth: s || ks, maxHeight: n || ks }
}
var Tn = (i) => Math.round(i * 10) / 10
function ea(i, t, e, s) {
    let n = Ps(i),
        r = fe(n, 'margin'),
        o = Ts(n.maxWidth, i, 'clientWidth') || ks,
        a = Ts(n.maxHeight, i, 'clientHeight') || ks,
        l = Eh(i, t, e),
        { width: c, height: h } = l
    if (n.boxSizing === 'content-box') {
        let u = fe(n, 'border', 'width'),
            d = fe(n, 'padding')
        ;(c -= d.width + u.width), (h -= d.height + u.height)
    }
    return (
        (c = Math.max(0, c - r.width)),
        (h = Math.max(0, s ? Math.floor(c / s) : h - r.height)),
        (c = Tn(Math.min(c, o, l.maxWidth))),
        (h = Tn(Math.min(h, a, l.maxHeight))),
        c && !h && (h = Tn(c / 2)),
        { width: c, height: h }
    )
}
function Qn(i, t, e) {
    let s = t || 1,
        n = Math.floor(i.height * s),
        r = Math.floor(i.width * s)
    ;(i.height = n / s), (i.width = r / s)
    let o = i.canvas
    return (
        o.style &&
            (e || (!o.style.height && !o.style.width)) &&
            ((o.style.height = `${i.height}px`),
            (o.style.width = `${i.width}px`)),
        i.currentDevicePixelRatio !== s || o.height !== n || o.width !== r
            ? ((i.currentDevicePixelRatio = s),
              (o.height = n),
              (o.width = r),
              i.ctx.setTransform(s, 0, 0, s, 0, 0),
              !0)
            : !1
    )
}
var ia = (function () {
    let i = !1
    try {
        let t = {
            get passive() {
                return (i = !0), !1
            },
        }
        window.addEventListener('test', null, t),
            window.removeEventListener('test', null, t)
    } catch {}
    return i
})()
function tr(i, t) {
    let e = Th(i, t),
        s = e && e.match(/^(\d+)(\.\d+)?px$/)
    return s ? +s[1] : void 0
}
function qt(i, t, e, s) {
    return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }
}
function sa(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y:
            s === 'middle'
                ? e < 0.5
                    ? i.y
                    : t.y
                : s === 'after'
                  ? e < 1
                      ? i.y
                      : t.y
                  : e > 0
                    ? t.y
                    : i.y,
    }
}
function na(i, t, e, s) {
    let n = { x: i.cp2x, y: i.cp2y },
        r = { x: t.cp1x, y: t.cp1y },
        o = qt(i, n, e),
        a = qt(n, r, e),
        l = qt(r, t, e),
        c = qt(o, a, e),
        h = qt(a, l, e)
    return qt(c, h, e)
}
var Mo = new Map()
function Ih(i, t) {
    t = t || {}
    let e = i + JSON.stringify(t),
        s = Mo.get(e)
    return s || ((s = new Intl.NumberFormat(i, t)), Mo.set(e, s)), s
}
function ze(i, t, e) {
    return Ih(t, e).format(i)
}
var Ch = function (i, t) {
        return {
            x(e) {
                return i + i + t - e
            },
            setWidth(e) {
                t = e
            },
            textAlign(e) {
                return e === 'center' ? e : e === 'right' ? 'left' : 'right'
            },
            xPlus(e, s) {
                return e - s
            },
            leftForLtr(e, s) {
                return e - s
            },
        }
    },
    Fh = function () {
        return {
            x(i) {
                return i
            },
            setWidth(i) {},
            textAlign(i) {
                return i
            },
            xPlus(i, t) {
                return i + t
            },
            leftForLtr(i, t) {
                return i
            },
        }
    }
function pe(i, t, e) {
    return i ? Ch(t, e) : Fh()
}
function er(i, t) {
    let e, s
    ;(t === 'ltr' || t === 'rtl') &&
        ((e = i.canvas.style),
        (s = [
            e.getPropertyValue('direction'),
            e.getPropertyPriority('direction'),
        ]),
        e.setProperty('direction', t, 'important'),
        (i.prevTextDirection = s))
}
function ir(i, t) {
    t !== void 0 &&
        (delete i.prevTextDirection,
        i.canvas.style.setProperty('direction', t[0], t[1]))
}
function ra(i) {
    return i === 'angle'
        ? { between: Ne, compare: Lc, normalize: ct }
        : { between: At, compare: (t, e) => t - e, normalize: (t) => t }
}
function To({ start: i, end: t, count: e, loop: s, style: n }) {
    return {
        start: i % e,
        end: t % e,
        loop: s && (t - i + 1) % e === 0,
        style: n,
    }
}
function Ah(i, t, e) {
    let { property: s, start: n, end: r } = e,
        { between: o, normalize: a } = ra(s),
        l = t.length,
        { start: c, end: h, loop: u } = i,
        d,
        f
    if (u) {
        for (
            c += l, h += l, d = 0, f = l;
            d < f && o(a(t[c % l][s]), n, r);
            ++d
        )
            c--, h--
        ;(c %= l), (h %= l)
    }
    return h < c && (h += l), { start: c, end: h, loop: u, style: i.style }
}
function sr(i, t, e) {
    if (!e) return [i]
    let { property: s, start: n, end: r } = e,
        o = t.length,
        { compare: a, between: l, normalize: c } = ra(s),
        { start: h, end: u, loop: d, style: f } = Ah(i, t, e),
        m = [],
        g = !1,
        p = null,
        y,
        b,
        _,
        w = () => l(n, _, y) && a(n, _) !== 0,
        x = () => a(r, y) === 0 || l(r, _, y),
        S = () => g || w(),
        k = () => !g || x()
    for (let v = h, T = h; v <= u; ++v)
        (b = t[v % o]),
            !b.skip &&
                ((y = c(b[s])),
                y !== _ &&
                    ((g = l(y, n, r)),
                    p === null && S() && (p = a(y, n) === 0 ? v : T),
                    p !== null &&
                        k() &&
                        (m.push(
                            To({
                                start: p,
                                end: v,
                                loop: d,
                                count: o,
                                style: f,
                            }),
                        ),
                        (p = null)),
                    (T = v),
                    (_ = y)))
    return (
        p !== null &&
            m.push(To({ start: p, end: u, loop: d, count: o, style: f })),
        m
    )
}
function nr(i, t) {
    let e = [],
        s = i.segments
    for (let n = 0; n < s.length; n++) {
        let r = sr(s[n], i.points, t)
        r.length && e.push(...r)
    }
    return e
}
function Lh(i, t, e, s) {
    let n = 0,
        r = t - 1
    if (e && !s) for (; n < t && !i[n].skip; ) n++
    for (; n < t && i[n].skip; ) n++
    for (n %= t, e && (r += n); r > n && i[r % t].skip; ) r--
    return (r %= t), { start: n, end: r }
}
function Ph(i, t, e, s) {
    let n = i.length,
        r = [],
        o = t,
        a = i[t],
        l
    for (l = t + 1; l <= e; ++l) {
        let c = i[l % n]
        c.skip || c.stop
            ? a.skip ||
              ((s = !1),
              r.push({ start: t % n, end: (l - 1) % n, loop: s }),
              (t = o = c.stop ? l : null))
            : ((o = l), a.skip && (t = l)),
            (a = c)
    }
    return o !== null && r.push({ start: t % n, end: o % n, loop: s }), r
}
function oa(i, t) {
    let e = i.points,
        s = i.options.spanGaps,
        n = e.length
    if (!n) return []
    let r = !!i._loop,
        { start: o, end: a } = Lh(e, n, r, s)
    if (s === !0) return vo(i, [{ start: o, end: a, loop: r }], e, t)
    let l = a < o ? a + n : a,
        c = !!i._fullLoop && o === 0 && a === n - 1
    return vo(i, Ph(e, o, l, c), e, t)
}
function vo(i, t, e, s) {
    return !s || !s.setContext || !e ? t : Nh(i, t, e, s)
}
function Nh(i, t, e, s) {
    let n = i._chart.getContext(),
        r = Oo(i.options),
        {
            _datasetIndex: o,
            options: { spanGaps: a },
        } = i,
        l = e.length,
        c = [],
        h = r,
        u = t[0].start,
        d = u
    function f(m, g, p, y) {
        let b = a ? -1 : 1
        if (m !== g) {
            for (m += l; e[m % l].skip; ) m -= b
            for (; e[g % l].skip; ) g += b
            m % l !== g % l &&
                (c.push({ start: m % l, end: g % l, loop: p, style: y }),
                (h = y),
                (u = g % l))
        }
    }
    for (let m of t) {
        u = a ? u : m.start
        let g = e[u % l],
            p
        for (d = u + 1; d <= m.end; d++) {
            let y = e[d % l]
            ;(p = Oo(
                s.setContext(
                    Ht(n, {
                        type: 'segment',
                        p0: g,
                        p1: y,
                        p0DataIndex: (d - 1) % l,
                        p1DataIndex: d % l,
                        datasetIndex: o,
                    }),
                ),
            )),
                Rh(p, h) && f(u, d - 1, m.loop, h),
                (g = y),
                (h = p)
        }
        u < d - 1 && f(u, d - 1, m.loop, h)
    }
    return c
}
function Oo(i) {
    return {
        backgroundColor: i.backgroundColor,
        borderCapStyle: i.borderCapStyle,
        borderDash: i.borderDash,
        borderDashOffset: i.borderDashOffset,
        borderJoinStyle: i.borderJoinStyle,
        borderWidth: i.borderWidth,
        borderColor: i.borderColor,
    }
}
function Rh(i, t) {
    return t && JSON.stringify(i) !== JSON.stringify(t)
}
var mr = class {
        constructor() {
            ;(this._request = null),
                (this._charts = new Map()),
                (this._running = !1),
                (this._lastDate = void 0)
        }
        _notify(t, e, s, n) {
            let r = e.listeners[n],
                o = e.duration
            r.forEach((a) =>
                a({
                    chart: t,
                    initial: e.initial,
                    numSteps: o,
                    currentStep: Math.min(s - e.start, o),
                }),
            )
        }
        _refresh() {
            this._request ||
                ((this._running = !0),
                (this._request = Rn.call(window, () => {
                    this._update(),
                        (this._request = null),
                        this._running && this._refresh()
                })))
        }
        _update(t = Date.now()) {
            let e = 0
            this._charts.forEach((s, n) => {
                if (!s.running || !s.items.length) return
                let r = s.items,
                    o = r.length - 1,
                    a = !1,
                    l
                for (; o >= 0; --o)
                    (l = r[o]),
                        l._active
                            ? (l._total > s.duration && (s.duration = l._total),
                              l.tick(t),
                              (a = !0))
                            : ((r[o] = r[r.length - 1]), r.pop())
                a && (n.draw(), this._notify(n, s, t, 'progress')),
                    r.length ||
                        ((s.running = !1),
                        this._notify(n, s, t, 'complete'),
                        (s.initial = !1)),
                    (e += r.length)
            }),
                (this._lastDate = t),
                e === 0 && (this._running = !1)
        }
        _getAnims(t) {
            let e = this._charts,
                s = e.get(t)
            return (
                s ||
                    ((s = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: { complete: [], progress: [] },
                    }),
                    e.set(t, s)),
                s
            )
        }
        listen(t, e, s) {
            this._getAnims(t).listeners[e].push(s)
        }
        add(t, e) {
            !e || !e.length || this._getAnims(t).items.push(...e)
        }
        has(t) {
            return this._getAnims(t).items.length > 0
        }
        start(t) {
            let e = this._charts.get(t)
            e &&
                ((e.running = !0),
                (e.start = Date.now()),
                (e.duration = e.items.reduce(
                    (s, n) => Math.max(s, n._duration),
                    0,
                )),
                this._refresh())
        }
        running(t) {
            if (!this._running) return !1
            let e = this._charts.get(t)
            return !(!e || !e.running || !e.items.length)
        }
        stop(t) {
            let e = this._charts.get(t)
            if (!e || !e.items.length) return
            let s = e.items,
                n = s.length - 1
            for (; n >= 0; --n) s[n].cancel()
            ;(e.items = []), this._notify(t, e, Date.now(), 'complete')
        }
        remove(t) {
            return this._charts.delete(t)
        }
    },
    Bt = new mr(),
    aa = 'transparent',
    Wh = {
        boolean(i, t, e) {
            return e > 0.5 ? t : i
        },
        color(i, t, e) {
            let s = jn(i || aa),
                n = s.valid && jn(t || aa)
            return n && n.valid ? n.mix(s, e).hexString() : t
        },
        number(i, t, e) {
            return i + (t - i) * e
        },
    },
    gr = class {
        constructor(t, e, s, n) {
            let r = e[s]
            n = We([t.to, n, r, t.from])
            let o = We([t.from, r, n])
            ;(this._active = !0),
                (this._fn = t.fn || Wh[t.type || typeof o]),
                (this._easing = Ie[t.easing] || Ie.linear),
                (this._start = Math.floor(Date.now() + (t.delay || 0))),
                (this._duration = this._total = Math.floor(t.duration)),
                (this._loop = !!t.loop),
                (this._target = e),
                (this._prop = s),
                (this._from = o),
                (this._to = n),
                (this._promises = void 0)
        }
        active() {
            return this._active
        }
        update(t, e, s) {
            if (this._active) {
                this._notify(!1)
                let n = this._target[this._prop],
                    r = s - this._start,
                    o = this._duration - r
                ;(this._start = s),
                    (this._duration = Math.floor(Math.max(o, t.duration))),
                    (this._total += r),
                    (this._loop = !!t.loop),
                    (this._to = We([t.to, e, n, t.from])),
                    (this._from = We([t.from, n, e]))
            }
        }
        cancel() {
            this._active &&
                (this.tick(Date.now()), (this._active = !1), this._notify(!1))
        }
        tick(t) {
            let e = t - this._start,
                s = this._duration,
                n = this._prop,
                r = this._from,
                o = this._loop,
                a = this._to,
                l
            if (((this._active = r !== a && (o || e < s)), !this._active)) {
                ;(this._target[n] = a), this._notify(!0)
                return
            }
            if (e < 0) {
                this._target[n] = r
                return
            }
            ;(l = (e / s) % 2),
                (l = o && l > 1 ? 2 - l : l),
                (l = this._easing(Math.min(1, Math.max(0, l)))),
                (this._target[n] = this._fn(r, a, l))
        }
        wait() {
            let t = this._promises || (this._promises = [])
            return new Promise((e, s) => {
                t.push({ res: e, rej: s })
            })
        }
        _notify(t) {
            let e = t ? 'res' : 'rej',
                s = this._promises || []
            for (let n = 0; n < s.length; n++) s[n][e]()
        }
    },
    zh = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    Vh = ['color', 'borderColor', 'backgroundColor']
A.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
})
var Hh = Object.keys(A.animation)
A.describe('animation', {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (i) => i !== 'onProgress' && i !== 'onComplete' && i !== 'fn',
})
A.set('animations', {
    colors: { type: 'color', properties: Vh },
    numbers: { type: 'number', properties: zh },
})
A.describe('animations', { _fallback: 'animation' })
A.set('transitions', {
    active: { animation: { duration: 400 } },
    resize: { animation: { duration: 0 } },
    show: {
        animations: {
            colors: { from: 'transparent' },
            visible: { type: 'boolean', duration: 0 },
        },
    },
    hide: {
        animations: {
            colors: { to: 'transparent' },
            visible: { type: 'boolean', easing: 'linear', fn: (i) => i | 0 },
        },
    },
})
var $s = class {
    constructor(t, e) {
        ;(this._chart = t), (this._properties = new Map()), this.configure(e)
    }
    configure(t) {
        if (!F(t)) return
        let e = this._properties
        Object.getOwnPropertyNames(t).forEach((s) => {
            let n = t[s]
            if (!F(n)) return
            let r = {}
            for (let o of Hh) r[o] = n[o]
            ;((B(n.properties) && n.properties) || [s]).forEach((o) => {
                ;(o === s || !e.has(o)) && e.set(o, r)
            })
        })
    }
    _animateOptions(t, e) {
        let s = e.options,
            n = $h(t, s)
        if (!n) return []
        let r = this._createAnimations(n, s)
        return (
            s.$shared &&
                Bh(t.options.$animations, s).then(
                    () => {
                        t.options = s
                    },
                    () => {},
                ),
            r
        )
    }
    _createAnimations(t, e) {
        let s = this._properties,
            n = [],
            r = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            a = Date.now(),
            l
        for (l = o.length - 1; l >= 0; --l) {
            let c = o[l]
            if (c.charAt(0) === '$') continue
            if (c === 'options') {
                n.push(...this._animateOptions(t, e))
                continue
            }
            let h = e[c],
                u = r[c],
                d = s.get(c)
            if (u)
                if (d && u.active()) {
                    u.update(d, h, a)
                    continue
                } else u.cancel()
            if (!d || !d.duration) {
                t[c] = h
                continue
            }
            ;(r[c] = u = new gr(d, t, c, h)), n.push(u)
        }
        return n
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e)
            return
        }
        let s = this._createAnimations(t, e)
        if (s.length) return Bt.add(this._chart, s), !0
    }
}
function Bh(i, t) {
    let e = [],
        s = Object.keys(t)
    for (let n = 0; n < s.length; n++) {
        let r = i[s[n]]
        r && r.active() && e.push(r.wait())
    }
    return Promise.all(e)
}
function $h(i, t) {
    if (!t) return
    let e = i.options
    if (!e) {
        i.options = t
        return
    }
    return (
        e.$shared &&
            (i.options = e =
                Object.assign({}, e, { $shared: !1, $animations: {} })),
        e
    )
}
function la(i, t) {
    let e = (i && i.options) || {},
        s = e.reverse,
        n = e.min === void 0 ? t : 0,
        r = e.max === void 0 ? t : 0
    return { start: s ? r : n, end: s ? n : r }
}
function jh(i, t, e) {
    if (e === !1) return !1
    let s = la(i, e),
        n = la(t, e)
    return { top: n.end, right: s.end, bottom: n.start, left: s.start }
}
function Uh(i) {
    let t, e, s, n
    return (
        F(i)
            ? ((t = i.top), (e = i.right), (s = i.bottom), (n = i.left))
            : (t = e = s = n = i),
        { top: t, right: e, bottom: s, left: n, disabled: i === !1 }
    )
}
function Ja(i, t) {
    let e = [],
        s = i._getSortedDatasetMetas(t),
        n,
        r
    for (n = 0, r = s.length; n < r; ++n) e.push(s[n].index)
    return e
}
function ca(i, t, e, s = {}) {
    let n = i.keys,
        r = s.mode === 'single',
        o,
        a,
        l,
        c
    if (t !== null) {
        for (o = 0, a = n.length; o < a; ++o) {
            if (((l = +n[o]), l === e)) {
                if (s.all) continue
                break
            }
            ;(c = i.values[l]),
                q(c) && (r || t === 0 || Mt(t) === Mt(c)) && (t += c)
        }
        return t
    }
}
function Yh(i) {
    let t = Object.keys(i),
        e = new Array(t.length),
        s,
        n,
        r
    for (s = 0, n = t.length; s < n; ++s) (r = t[s]), (e[s] = { x: r, y: i[r] })
    return e
}
function ha(i, t) {
    let e = i && i.options.stacked
    return e || (e === void 0 && t.stack !== void 0)
}
function Zh(i, t, e) {
    return `${i.id}.${t.id}.${e.stack || e.type}`
}
function qh(i) {
    let { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds()
    return {
        min: s ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY,
    }
}
function Gh(i, t, e) {
    let s = i[t] || (i[t] = {})
    return s[e] || (s[e] = {})
}
function ua(i, t, e, s) {
    for (let n of t.getMatchingVisibleMetas(s).reverse()) {
        let r = i[n.index]
        if ((e && r > 0) || (!e && r < 0)) return n.index
    }
    return null
}
function da(i, t) {
    let { chart: e, _cachedMeta: s } = i,
        n = e._stacks || (e._stacks = {}),
        { iScale: r, vScale: o, index: a } = s,
        l = r.axis,
        c = o.axis,
        h = Zh(r, o, s),
        u = t.length,
        d
    for (let f = 0; f < u; ++f) {
        let m = t[f],
            { [l]: g, [c]: p } = m,
            y = m._stacks || (m._stacks = {})
        ;(d = y[c] = Gh(n, h, g)),
            (d[a] = p),
            (d._top = ua(d, o, !0, s.type)),
            (d._bottom = ua(d, o, !1, s.type))
    }
}
function rr(i, t) {
    let e = i.scales
    return Object.keys(e)
        .filter((s) => e[s].axis === t)
        .shift()
}
function Xh(i, t) {
    return Ht(i, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: 'default',
        type: 'dataset',
    })
}
function Kh(i, t, e) {
    return Ht(i, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: 'default',
        type: 'data',
    })
}
function Mi(i, t) {
    let e = i.controller.index,
        s = i.vScale && i.vScale.axis
    if (s) {
        t = t || i._parsed
        for (let n of t) {
            let r = n._stacks
            if (!r || r[s] === void 0 || r[s][e] === void 0) return
            delete r[s][e]
        }
    }
}
var or = (i) => i === 'reset' || i === 'none',
    fa = (i, t) => (t ? i : Object.assign({}, i)),
    Jh = (i, t, e) =>
        i && !t.hidden && t._stacked && { keys: Ja(e, !0), values: null },
    gt = class {
        constructor(t, e) {
            ;(this.chart = t),
                (this._ctx = t.ctx),
                (this.index = e),
                (this._cachedDataOpts = {}),
                (this._cachedMeta = this.getMeta()),
                (this._type = this._cachedMeta.type),
                (this.options = void 0),
                (this._parsing = !1),
                (this._data = void 0),
                (this._objectData = void 0),
                (this._sharedOptions = void 0),
                (this._drawStart = void 0),
                (this._drawCount = void 0),
                (this.enableOptionSharing = !1),
                (this.supportsDecimation = !1),
                (this.$context = void 0),
                (this._syncList = []),
                this.initialize()
        }
        initialize() {
            let t = this._cachedMeta
            this.configure(),
                this.linkScales(),
                (t._stacked = ha(t.vScale, t)),
                this.addElements()
        }
        updateIndex(t) {
            this.index !== t && Mi(this._cachedMeta), (this.index = t)
        }
        linkScales() {
            let t = this.chart,
                e = this._cachedMeta,
                s = this.getDataset(),
                n = (u, d, f, m) => (u === 'x' ? d : u === 'r' ? m : f),
                r = (e.xAxisID = E(s.xAxisID, rr(t, 'x'))),
                o = (e.yAxisID = E(s.yAxisID, rr(t, 'y'))),
                a = (e.rAxisID = E(s.rAxisID, rr(t, 'r'))),
                l = e.indexAxis,
                c = (e.iAxisID = n(l, r, o, a)),
                h = (e.vAxisID = n(l, o, r, a))
            ;(e.xScale = this.getScaleForId(r)),
                (e.yScale = this.getScaleForId(o)),
                (e.rScale = this.getScaleForId(a)),
                (e.iScale = this.getScaleForId(c)),
                (e.vScale = this.getScaleForId(h))
        }
        getDataset() {
            return this.chart.data.datasets[this.index]
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t) {
            return this.chart.scales[t]
        }
        _getOtherScale(t) {
            let e = this._cachedMeta
            return t === e.iScale ? e.vScale : e.iScale
        }
        reset() {
            this._update('reset')
        }
        _destroy() {
            let t = this._cachedMeta
            this._data && Pn(this._data, this), t._stacked && Mi(t)
        }
        _dataCheck() {
            let t = this.getDataset(),
                e = t.data || (t.data = []),
                s = this._data
            if (F(e)) this._data = Yh(e)
            else if (s !== e) {
                if (s) {
                    Pn(s, this)
                    let n = this._cachedMeta
                    Mi(n), (n._parsed = [])
                }
                e && Object.isExtensible(e) && Wo(e, this),
                    (this._syncList = []),
                    (this._data = e)
            }
        }
        addElements() {
            let t = this._cachedMeta
            this._dataCheck(),
                this.datasetElementType &&
                    (t.dataset = new this.datasetElementType())
        }
        buildOrUpdateElements(t) {
            let e = this._cachedMeta,
                s = this.getDataset(),
                n = !1
            this._dataCheck()
            let r = e._stacked
            ;(e._stacked = ha(e.vScale, e)),
                e.stack !== s.stack && ((n = !0), Mi(e), (e.stack = s.stack)),
                this._resyncElements(t),
                (n || r !== e._stacked) && da(this, e._parsed)
        }
        configure() {
            let t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                s = t.getOptionScopes(this.getDataset(), e, !0)
            ;(this.options = t.createResolver(s, this.getContext())),
                (this._parsing = this.options.parsing),
                (this._cachedDataOpts = {})
        }
        parse(t, e) {
            let { _cachedMeta: s, _data: n } = this,
                { iScale: r, _stacked: o } = s,
                a = r.axis,
                l = t === 0 && e === n.length ? !0 : s._sorted,
                c = t > 0 && s._parsed[t - 1],
                h,
                u,
                d
            if (this._parsing === !1) (s._parsed = n), (s._sorted = !0), (d = n)
            else {
                B(n[t])
                    ? (d = this.parseArrayData(s, n, t, e))
                    : F(n[t])
                      ? (d = this.parseObjectData(s, n, t, e))
                      : (d = this.parsePrimitiveData(s, n, t, e))
                let f = () => u[a] === null || (c && u[a] < c[a])
                for (h = 0; h < e; ++h)
                    (s._parsed[h + t] = u = d[h]),
                        l && (f() && (l = !1), (c = u))
                s._sorted = l
            }
            o && da(this, d)
        }
        parsePrimitiveData(t, e, s, n) {
            let { iScale: r, vScale: o } = t,
                a = r.axis,
                l = o.axis,
                c = r.getLabels(),
                h = r === o,
                u = new Array(n),
                d,
                f,
                m
            for (d = 0, f = n; d < f; ++d)
                (m = d + s),
                    (u[d] = {
                        [a]: h || r.parse(c[m], m),
                        [l]: o.parse(e[m], m),
                    })
            return u
        }
        parseArrayData(t, e, s, n) {
            let { xScale: r, yScale: o } = t,
                a = new Array(n),
                l,
                c,
                h,
                u
            for (l = 0, c = n; l < c; ++l)
                (h = l + s),
                    (u = e[h]),
                    (a[l] = { x: r.parse(u[0], h), y: o.parse(u[1], h) })
            return a
        }
        parseObjectData(t, e, s, n) {
            let { xScale: r, yScale: o } = t,
                { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
                c = new Array(n),
                h,
                u,
                d,
                f
            for (h = 0, u = n; h < u; ++h)
                (d = h + s),
                    (f = e[d]),
                    (c[h] = {
                        x: r.parse(Vt(f, a), d),
                        y: o.parse(Vt(f, l), d),
                    })
            return c
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t]
        }
        getDataElement(t) {
            return this._cachedMeta.data[t]
        }
        applyStack(t, e, s) {
            let n = this.chart,
                r = this._cachedMeta,
                o = e[t.axis],
                a = { keys: Ja(n, !0), values: e._stacks[t.axis] }
            return ca(a, o, r.index, { mode: s })
        }
        updateRangeFromParsed(t, e, s, n) {
            let r = s[e.axis],
                o = r === null ? NaN : r,
                a = n && s._stacks[e.axis]
            n && a && ((n.values = a), (o = ca(n, r, this._cachedMeta.index))),
                (t.min = Math.min(t.min, o)),
                (t.max = Math.max(t.max, o))
        }
        getMinMax(t, e) {
            let s = this._cachedMeta,
                n = s._parsed,
                r = s._sorted && t === s.iScale,
                o = n.length,
                a = this._getOtherScale(t),
                l = Jh(e, s, this.chart),
                c = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                },
                { min: h, max: u } = qh(a),
                d,
                f
            function m() {
                f = n[d]
                let g = f[a.axis]
                return !q(f[t.axis]) || h > g || u < g
            }
            for (
                d = 0;
                d < o && !(!m() && (this.updateRangeFromParsed(c, t, f, l), r));
                ++d
            );
            if (r) {
                for (d = o - 1; d >= 0; --d)
                    if (!m()) {
                        this.updateRangeFromParsed(c, t, f, l)
                        break
                    }
            }
            return c
        }
        getAllParsedValues(t) {
            let e = this._cachedMeta._parsed,
                s = [],
                n,
                r,
                o
            for (n = 0, r = e.length; n < r; ++n)
                (o = e[n][t.axis]), q(o) && s.push(o)
            return s
        }
        getMaxOverflow() {
            return !1
        }
        getLabelAndValue(t) {
            let e = this._cachedMeta,
                s = e.iScale,
                n = e.vScale,
                r = this.getParsed(t)
            return {
                label: s ? '' + s.getLabelForValue(r[s.axis]) : '',
                value: n ? '' + n.getLabelForValue(r[n.axis]) : '',
            }
        }
        _update(t) {
            let e = this._cachedMeta
            this.update(t || 'default'),
                (e._clip = Uh(
                    E(
                        this.options.clip,
                        jh(e.xScale, e.yScale, this.getMaxOverflow()),
                    ),
                ))
        }
        update(t) {}
        draw() {
            let t = this._ctx,
                e = this.chart,
                s = this._cachedMeta,
                n = s.data || [],
                r = e.chartArea,
                o = [],
                a = this._drawStart || 0,
                l = this._drawCount || n.length - a,
                c = this.options.drawActiveElementsOnTop,
                h
            for (
                s.dataset && s.dataset.draw(t, r, a, l), h = a;
                h < a + l;
                ++h
            ) {
                let u = n[h]
                u.hidden || (u.active && c ? o.push(u) : u.draw(t, r))
            }
            for (h = 0; h < o.length; ++h) o[h].draw(t, r)
        }
        getStyle(t, e) {
            let s = e ? 'active' : 'default'
            return t === void 0 && this._cachedMeta.dataset
                ? this.resolveDatasetElementOptions(s)
                : this.resolveDataElementOptions(t || 0, s)
        }
        getContext(t, e, s) {
            let n = this.getDataset(),
                r
            if (t >= 0 && t < this._cachedMeta.data.length) {
                let o = this._cachedMeta.data[t]
                ;(r = o.$context || (o.$context = Kh(this.getContext(), t, o))),
                    (r.parsed = this.getParsed(t)),
                    (r.raw = n.data[t]),
                    (r.index = r.dataIndex = t)
            } else
                (r =
                    this.$context ||
                    (this.$context = Xh(this.chart.getContext(), this.index))),
                    (r.dataset = n),
                    (r.index = r.datasetIndex = this.index)
            return (r.active = !!e), (r.mode = s), r
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
        }
        _resolveElementOptions(t, e = 'default', s) {
            let n = e === 'active',
                r = this._cachedDataOpts,
                o = t + '-' + e,
                a = r[o],
                l = this.enableOptionSharing && dt(s)
            if (a) return fa(a, l)
            let c = this.chart.config,
                h = c.datasetElementScopeKeys(this._type, t),
                u = n ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
                d = c.getOptionScopes(this.getDataset(), h),
                f = Object.keys(A.elements[t]),
                m = () => this.getContext(s, n),
                g = c.resolveNamedOptions(d, f, m, u)
            return (
                g.$shared &&
                    ((g.$shared = l), (r[o] = Object.freeze(fa(g, l)))),
                g
            )
        }
        _resolveAnimations(t, e, s) {
            let n = this.chart,
                r = this._cachedDataOpts,
                o = `animation-${e}`,
                a = r[o]
            if (a) return a
            let l
            if (n.options.animation !== !1) {
                let h = this.chart.config,
                    u = h.datasetAnimationScopeKeys(this._type, e),
                    d = h.getOptionScopes(this.getDataset(), u)
                l = h.createResolver(d, this.getContext(t, s, e))
            }
            let c = new $s(n, l && l.animations)
            return l && l._cacheable && (r[o] = Object.freeze(c)), c
        }
        getSharedOptions(t) {
            if (t.$shared)
                return (
                    this._sharedOptions ||
                    (this._sharedOptions = Object.assign({}, t))
                )
        }
        includeOptions(t, e) {
            return !e || or(t) || this.chart._animationsDisabled
        }
        _getSharedOptions(t, e) {
            let s = this.resolveDataElementOptions(t, e),
                n = this._sharedOptions,
                r = this.getSharedOptions(s),
                o = this.includeOptions(e, r) || r !== n
            return (
                this.updateSharedOptions(r, e, s),
                { sharedOptions: r, includeOptions: o }
            )
        }
        updateElement(t, e, s, n) {
            or(n)
                ? Object.assign(t, s)
                : this._resolveAnimations(e, n).update(t, s)
        }
        updateSharedOptions(t, e, s) {
            t && !or(e) && this._resolveAnimations(void 0, e).update(t, s)
        }
        _setStyle(t, e, s, n) {
            t.active = n
            let r = this.getStyle(e, n)
            this._resolveAnimations(e, s, n).update(t, {
                options: (!n && this.getSharedOptions(r)) || r,
            })
        }
        removeHoverStyle(t, e, s) {
            this._setStyle(t, s, 'active', !1)
        }
        setHoverStyle(t, e, s) {
            this._setStyle(t, s, 'active', !0)
        }
        _removeDatasetHoverStyle() {
            let t = this._cachedMeta.dataset
            t && this._setStyle(t, void 0, 'active', !1)
        }
        _setDatasetHoverStyle() {
            let t = this._cachedMeta.dataset
            t && this._setStyle(t, void 0, 'active', !0)
        }
        _resyncElements(t) {
            let e = this._data,
                s = this._cachedMeta.data
            for (let [a, l, c] of this._syncList) this[a](l, c)
            this._syncList = []
            let n = s.length,
                r = e.length,
                o = Math.min(r, n)
            o && this.parse(0, o),
                r > n
                    ? this._insertElements(n, r - n, t)
                    : r < n && this._removeElements(r, n - r)
        }
        _insertElements(t, e, s = !0) {
            let n = this._cachedMeta,
                r = n.data,
                o = t + e,
                a,
                l = (c) => {
                    for (c.length += e, a = c.length - 1; a >= o; a--)
                        c[a] = c[a - e]
                }
            for (l(r), a = t; a < o; ++a) r[a] = new this.dataElementType()
            this._parsing && l(n._parsed),
                this.parse(t, e),
                s && this.updateElements(r, t, e, 'reset')
        }
        updateElements(t, e, s, n) {}
        _removeElements(t, e) {
            let s = this._cachedMeta
            if (this._parsing) {
                let n = s._parsed.splice(t, e)
                s._stacked && Mi(s, n)
            }
            s.data.splice(t, e)
        }
        _sync(t) {
            if (this._parsing) this._syncList.push(t)
            else {
                let [e, s, n] = t
                this[e](s, n)
            }
            this.chart._dataChanges.push([this.index, ...t])
        }
        _onDataPush() {
            let t = arguments.length
            this._sync([
                '_insertElements',
                this.getDataset().data.length - t,
                t,
            ])
        }
        _onDataPop() {
            this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
        }
        _onDataShift() {
            this._sync(['_removeElements', 0, 1])
        }
        _onDataSplice(t, e) {
            e && this._sync(['_removeElements', t, e])
            let s = arguments.length - 2
            s && this._sync(['_insertElements', t, s])
        }
        _onDataUnshift() {
            this._sync(['_insertElements', 0, arguments.length])
        }
    }
gt.defaults = {}
gt.prototype.datasetElementType = null
gt.prototype.dataElementType = null
function Qh(i, t) {
    if (!i._cache.$bar) {
        let e = i.getMatchingVisibleMetas(t),
            s = []
        for (let n = 0, r = e.length; n < r; n++)
            s = s.concat(e[n].controller.getAllParsedValues(i))
        i._cache.$bar = Nn(s.sort((n, r) => n - r))
    }
    return i._cache.$bar
}
function tu(i) {
    let t = i.iScale,
        e = Qh(t, i.type),
        s = t._length,
        n,
        r,
        o,
        a,
        l = () => {
            o === 32767 ||
                o === -32768 ||
                (dt(a) && (s = Math.min(s, Math.abs(o - a) || s)), (a = o))
        }
    for (n = 0, r = e.length; n < r; ++n) (o = t.getPixelForValue(e[n])), l()
    for (a = void 0, n = 0, r = t.ticks.length; n < r; ++n)
        (o = t.getPixelForTick(n)), l()
    return s
}
function eu(i, t, e, s) {
    let n = e.barThickness,
        r,
        o
    return (
        P(n)
            ? ((r = t.min * e.categoryPercentage), (o = e.barPercentage))
            : ((r = n * s), (o = 1)),
        { chunk: r / s, ratio: o, start: t.pixels[i] - r / 2 }
    )
}
function iu(i, t, e, s) {
    let n = t.pixels,
        r = n[i],
        o = i > 0 ? n[i - 1] : null,
        a = i < n.length - 1 ? n[i + 1] : null,
        l = e.categoryPercentage
    o === null && (o = r - (a === null ? t.end - t.start : a - r)),
        a === null && (a = r + r - o)
    let c = r - ((r - Math.min(o, a)) / 2) * l
    return {
        chunk: ((Math.abs(a - o) / 2) * l) / s,
        ratio: e.barPercentage,
        start: c,
    }
}
function su(i, t, e, s) {
    let n = e.parse(i[0], s),
        r = e.parse(i[1], s),
        o = Math.min(n, r),
        a = Math.max(n, r),
        l = o,
        c = a
    Math.abs(o) > Math.abs(a) && ((l = a), (c = o)),
        (t[e.axis] = c),
        (t._custom = {
            barStart: l,
            barEnd: c,
            start: n,
            end: r,
            min: o,
            max: a,
        })
}
function Qa(i, t, e, s) {
    return B(i) ? su(i, t, e, s) : (t[e.axis] = e.parse(i, s)), t
}
function ma(i, t, e, s) {
    let n = i.iScale,
        r = i.vScale,
        o = n.getLabels(),
        a = n === r,
        l = [],
        c,
        h,
        u,
        d
    for (c = e, h = e + s; c < h; ++c)
        (d = t[c]),
            (u = {}),
            (u[n.axis] = a || n.parse(o[c], c)),
            l.push(Qa(d, u, r, c))
    return l
}
function ar(i) {
    return i && i.barStart !== void 0 && i.barEnd !== void 0
}
function nu(i, t, e) {
    return i !== 0 ? Mt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1)
}
function ru(i) {
    let t, e, s, n, r
    return (
        i.horizontal
            ? ((t = i.base > i.x), (e = 'left'), (s = 'right'))
            : ((t = i.base < i.y), (e = 'bottom'), (s = 'top')),
        t ? ((n = 'end'), (r = 'start')) : ((n = 'start'), (r = 'end')),
        { start: e, end: s, reverse: t, top: n, bottom: r }
    )
}
function ou(i, t, e, s) {
    let n = t.borderSkipped,
        r = {}
    if (!n) {
        i.borderSkipped = r
        return
    }
    if (n === !0) {
        i.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 }
        return
    }
    let { start: o, end: a, reverse: l, top: c, bottom: h } = ru(i)
    n === 'middle' &&
        e &&
        ((i.enableBorderRadius = !0),
        (e._top || 0) === s
            ? (n = c)
            : (e._bottom || 0) === s
              ? (n = h)
              : ((r[ga(h, o, a, l)] = !0), (n = c))),
        (r[ga(n, o, a, l)] = !0),
        (i.borderSkipped = r)
}
function ga(i, t, e, s) {
    return s ? ((i = au(i, t, e)), (i = pa(i, e, t))) : (i = pa(i, t, e)), i
}
function au(i, t, e) {
    return i === t ? e : i === e ? t : i
}
function pa(i, t, e) {
    return i === 'start' ? t : i === 'end' ? e : i
}
function lu(i, { inflateAmount: t }, e) {
    i.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t
}
var Be = class extends gt {
    parsePrimitiveData(t, e, s, n) {
        return ma(t, e, s, n)
    }
    parseArrayData(t, e, s, n) {
        return ma(t, e, s, n)
    }
    parseObjectData(t, e, s, n) {
        let { iScale: r, vScale: o } = t,
            { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
            c = r.axis === 'x' ? a : l,
            h = o.axis === 'x' ? a : l,
            u = [],
            d,
            f,
            m,
            g
        for (d = s, f = s + n; d < f; ++d)
            (g = e[d]),
                (m = {}),
                (m[r.axis] = r.parse(Vt(g, c), d)),
                u.push(Qa(Vt(g, h), m, o, d))
        return u
    }
    updateRangeFromParsed(t, e, s, n) {
        super.updateRangeFromParsed(t, e, s, n)
        let r = s._custom
        r &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)))
    }
    getMaxOverflow() {
        return 0
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            { iScale: s, vScale: n } = e,
            r = this.getParsed(t),
            o = r._custom,
            a = ar(o)
                ? '[' + o.start + ', ' + o.end + ']'
                : '' + n.getLabelForValue(r[n.axis])
        return { label: '' + s.getLabelForValue(r[s.axis]), value: a }
    }
    initialize() {
        ;(this.enableOptionSharing = !0), super.initialize()
        let t = this._cachedMeta
        t.stack = this.getDataset().stack
    }
    update(t) {
        let e = this._cachedMeta
        this.updateElements(e.data, 0, e.data.length, t)
    }
    updateElements(t, e, s, n) {
        let r = n === 'reset',
            {
                index: o,
                _cachedMeta: { vScale: a },
            } = this,
            l = a.getBasePixel(),
            c = a.isHorizontal(),
            h = this._getRuler(),
            { sharedOptions: u, includeOptions: d } = this._getSharedOptions(
                e,
                n,
            )
        for (let f = e; f < e + s; f++) {
            let m = this.getParsed(f),
                g =
                    r || P(m[a.axis])
                        ? { base: l, head: l }
                        : this._calculateBarValuePixels(f),
                p = this._calculateBarIndexPixels(f, h),
                y = (m._stacks || {})[a.axis],
                b = {
                    horizontal: c,
                    base: g.base,
                    enableBorderRadius:
                        !y || ar(m._custom) || o === y._top || o === y._bottom,
                    x: c ? g.head : p.center,
                    y: c ? p.center : g.head,
                    height: c ? p.size : Math.abs(g.size),
                    width: c ? Math.abs(g.size) : p.size,
                }
            d &&
                (b.options =
                    u ||
                    this.resolveDataElementOptions(
                        f,
                        t[f].active ? 'active' : n,
                    ))
            let _ = b.options || t[f].options
            ou(b, _, y, o), lu(b, _, h.ratio), this.updateElement(t[f], f, b, n)
        }
    }
    _getStacks(t, e) {
        let { iScale: s } = this._cachedMeta,
            n = s
                .getMatchingVisibleMetas(this._type)
                .filter((l) => l.controller.options.grouped),
            r = s.options.stacked,
            o = [],
            a = (l) => {
                let c = l.controller.getParsed(e),
                    h = c && c[l.vScale.axis]
                if (P(h) || isNaN(h)) return !0
            }
        for (let l of n)
            if (
                !(e !== void 0 && a(l)) &&
                ((r === !1 ||
                    o.indexOf(l.stack) === -1 ||
                    (r === void 0 && l.stack === void 0)) &&
                    o.push(l.stack),
                l.index === t)
            )
                break
        return o.length || o.push(void 0), o
    }
    _getStackCount(t) {
        return this._getStacks(void 0, t).length
    }
    _getStackIndex(t, e, s) {
        let n = this._getStacks(t, s),
            r = e !== void 0 ? n.indexOf(e) : -1
        return r === -1 ? n.length - 1 : r
    }
    _getRuler() {
        let t = this.options,
            e = this._cachedMeta,
            s = e.iScale,
            n = [],
            r,
            o
        for (r = 0, o = e.data.length; r < o; ++r)
            n.push(s.getPixelForValue(this.getParsed(r)[s.axis], r))
        let a = t.barThickness
        return {
            min: a || tu(e),
            pixels: n,
            start: s._startPixel,
            end: s._endPixel,
            stackCount: this._getStackCount(),
            scale: s,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
        }
    }
    _calculateBarValuePixels(t) {
        let {
                _cachedMeta: { vScale: e, _stacked: s },
                options: { base: n, minBarLength: r },
            } = this,
            o = n || 0,
            a = this.getParsed(t),
            l = a._custom,
            c = ar(l),
            h = a[e.axis],
            u = 0,
            d = s ? this.applyStack(e, a, s) : h,
            f,
            m
        d !== h && ((u = d - h), (d = h)),
            c &&
                ((h = l.barStart),
                (d = l.barEnd - l.barStart),
                h !== 0 && Mt(h) !== Mt(l.barEnd) && (u = 0),
                (u += h))
        let g = !P(n) && !c ? n : u,
            p = e.getPixelForValue(g)
        if (
            (this.chart.getDataVisibility(t)
                ? (f = e.getPixelForValue(u + d))
                : (f = p),
            (m = f - p),
            Math.abs(m) < r)
        ) {
            ;(m = nu(m, e, o) * r), h === o && (p -= m / 2)
            let y = e.getPixelForDecimal(0),
                b = e.getPixelForDecimal(1),
                _ = Math.min(y, b),
                w = Math.max(y, b)
            ;(p = Math.max(Math.min(p, w), _)), (f = p + m)
        }
        if (p === e.getPixelForValue(o)) {
            let y = (Mt(m) * e.getLineWidthForValue(o)) / 2
            ;(p += y), (m -= y)
        }
        return { size: m, base: p, head: f, center: f + m / 2 }
    }
    _calculateBarIndexPixels(t, e) {
        let s = e.scale,
            n = this.options,
            r = n.skipNull,
            o = E(n.maxBarThickness, 1 / 0),
            a,
            l
        if (e.grouped) {
            let c = r ? this._getStackCount(t) : e.stackCount,
                h = n.barThickness === 'flex' ? iu(t, e, n, c) : eu(t, e, n, c),
                u = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    r ? t : void 0,
                )
            ;(a = h.start + h.chunk * u + h.chunk / 2),
                (l = Math.min(o, h.chunk * h.ratio))
        } else
            (a = s.getPixelForValue(this.getParsed(t)[s.axis], t)),
                (l = Math.min(o, e.min * e.ratio))
        return { base: a - l / 2, head: a + l / 2, center: a, size: l }
    }
    draw() {
        let t = this._cachedMeta,
            e = t.vScale,
            s = t.data,
            n = s.length,
            r = 0
        for (; r < n; ++r)
            this.getParsed(r)[e.axis] !== null && s[r].draw(this._ctx)
    }
}
Be.id = 'bar'
Be.defaults = {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
        numbers: {
            type: 'number',
            properties: ['x', 'y', 'base', 'width', 'height'],
        },
    },
}
Be.overrides = {
    scales: {
        _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
        _value_: { type: 'linear', beginAtZero: !0 },
    },
}
var $e = class extends gt {
    initialize() {
        ;(this.enableOptionSharing = !0), super.initialize()
    }
    parsePrimitiveData(t, e, s, n) {
        let r = super.parsePrimitiveData(t, e, s, n)
        for (let o = 0; o < r.length; o++)
            r[o]._custom = this.resolveDataElementOptions(o + s).radius
        return r
    }
    parseArrayData(t, e, s, n) {
        let r = super.parseArrayData(t, e, s, n)
        for (let o = 0; o < r.length; o++) {
            let a = e[s + o]
            r[o]._custom = E(a[2], this.resolveDataElementOptions(o + s).radius)
        }
        return r
    }
    parseObjectData(t, e, s, n) {
        let r = super.parseObjectData(t, e, s, n)
        for (let o = 0; o < r.length; o++) {
            let a = e[s + o]
            r[o]._custom = E(
                a && a.r && +a.r,
                this.resolveDataElementOptions(o + s).radius,
            )
        }
        return r
    }
    getMaxOverflow() {
        let t = this._cachedMeta.data,
            e = 0
        for (let s = t.length - 1; s >= 0; --s)
            e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2)
        return e > 0 && e
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            { xScale: s, yScale: n } = e,
            r = this.getParsed(t),
            o = s.getLabelForValue(r.x),
            a = n.getLabelForValue(r.y),
            l = r._custom
        return {
            label: e.label,
            value: '(' + o + ', ' + a + (l ? ', ' + l : '') + ')',
        }
    }
    update(t) {
        let e = this._cachedMeta.data
        this.updateElements(e, 0, e.length, t)
    }
    updateElements(t, e, s, n) {
        let r = n === 'reset',
            { iScale: o, vScale: a } = this._cachedMeta,
            { sharedOptions: l, includeOptions: c } = this._getSharedOptions(
                e,
                n,
            ),
            h = o.axis,
            u = a.axis
        for (let d = e; d < e + s; d++) {
            let f = t[d],
                m = !r && this.getParsed(d),
                g = {},
                p = (g[h] = r
                    ? o.getPixelForDecimal(0.5)
                    : o.getPixelForValue(m[h])),
                y = (g[u] = r ? a.getBasePixel() : a.getPixelForValue(m[u]))
            ;(g.skip = isNaN(p) || isNaN(y)),
                c &&
                    ((g.options =
                        l ||
                        this.resolveDataElementOptions(
                            d,
                            f.active ? 'active' : n,
                        )),
                    r && (g.options.radius = 0)),
                this.updateElement(f, d, g, n)
        }
    }
    resolveDataElementOptions(t, e) {
        let s = this.getParsed(t),
            n = super.resolveDataElementOptions(t, e)
        n.$shared && (n = Object.assign({}, n, { $shared: !1 }))
        let r = n.radius
        return (
            e !== 'active' && (n.radius = 0),
            (n.radius += E(s && s._custom, r)),
            n
        )
    }
}
$e.id = 'bubble'
$e.defaults = {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: {
        numbers: {
            type: 'number',
            properties: ['x', 'y', 'borderWidth', 'radius'],
        },
    },
}
$e.overrides = {
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
    plugins: {
        tooltip: {
            callbacks: {
                title() {
                    return ''
                },
            },
        },
    },
}
function cu(i, t, e) {
    let s = 1,
        n = 1,
        r = 0,
        o = 0
    if (t < H) {
        let a = i,
            l = a + t,
            c = Math.cos(a),
            h = Math.sin(a),
            u = Math.cos(l),
            d = Math.sin(l),
            f = (_, w, x) =>
                Ne(_, a, l, !0) ? 1 : Math.max(w, w * e, x, x * e),
            m = (_, w, x) =>
                Ne(_, a, l, !0) ? -1 : Math.min(w, w * e, x, x * e),
            g = f(0, c, u),
            p = f(U, h, d),
            y = m(j, c, u),
            b = m(j + U, h, d)
        ;(s = (g - y) / 2),
            (n = (p - b) / 2),
            (r = -(g + y) / 2),
            (o = -(p + b) / 2)
    }
    return { ratioX: s, ratioY: n, offsetX: r, offsetY: o }
}
var ne = class extends gt {
    constructor(t, e) {
        super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0)
    }
    linkScales() {}
    parse(t, e) {
        let s = this.getDataset().data,
            n = this._cachedMeta
        if (this._parsing === !1) n._parsed = s
        else {
            let r = (l) => +s[l]
            if (F(s[t])) {
                let { key: l = 'value' } = this._parsing
                r = (c) => +Vt(s[c], l)
            }
            let o, a
            for (o = t, a = t + e; o < a; ++o) n._parsed[o] = r(o)
        }
    }
    _getRotation() {
        return _t(this.options.rotation - 90)
    }
    _getCircumference() {
        return _t(this.options.circumference)
    }
    _getRotationExtents() {
        let t = H,
            e = -H
        for (let s = 0; s < this.chart.data.datasets.length; ++s)
            if (this.chart.isDatasetVisible(s)) {
                let n = this.chart.getDatasetMeta(s).controller,
                    r = n._getRotation(),
                    o = n._getCircumference()
                ;(t = Math.min(t, r)), (e = Math.max(e, r + o))
            }
        return { rotation: t, circumference: e - t }
    }
    update(t) {
        let e = this.chart,
            { chartArea: s } = e,
            n = this._cachedMeta,
            r = n.data,
            o =
                this.getMaxBorderWidth() +
                this.getMaxOffset(r) +
                this.options.spacing,
            a = Math.max((Math.min(s.width, s.height) - o) / 2, 0),
            l = Math.min(Eo(this.options.cutout, a), 1),
            c = this._getRingWeight(this.index),
            { circumference: h, rotation: u } = this._getRotationExtents(),
            { ratioX: d, ratioY: f, offsetX: m, offsetY: g } = cu(u, h, l),
            p = (s.width - o) / d,
            y = (s.height - o) / f,
            b = Math.max(Math.min(p, y) / 2, 0),
            _ = En(this.options.radius, b),
            w = Math.max(_ * l, 0),
            x = (_ - w) / this._getVisibleDatasetWeightTotal()
        ;(this.offsetX = m * _),
            (this.offsetY = g * _),
            (n.total = this.calculateTotal()),
            (this.outerRadius = _ - x * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - x * c, 0)),
            this.updateElements(r, 0, r.length, t)
    }
    _circumference(t, e) {
        let s = this.options,
            n = this._cachedMeta,
            r = this._getCircumference()
        return (e && s.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            n._parsed[t] === null ||
            n.data[t].hidden
            ? 0
            : this.calculateCircumference((n._parsed[t] * r) / H)
    }
    updateElements(t, e, s, n) {
        let r = n === 'reset',
            o = this.chart,
            a = o.chartArea,
            c = o.options.animation,
            h = (a.left + a.right) / 2,
            u = (a.top + a.bottom) / 2,
            d = r && c.animateScale,
            f = d ? 0 : this.innerRadius,
            m = d ? 0 : this.outerRadius,
            { sharedOptions: g, includeOptions: p } = this._getSharedOptions(
                e,
                n,
            ),
            y = this._getRotation(),
            b
        for (b = 0; b < e; ++b) y += this._circumference(b, r)
        for (b = e; b < e + s; ++b) {
            let _ = this._circumference(b, r),
                w = t[b],
                x = {
                    x: h + this.offsetX,
                    y: u + this.offsetY,
                    startAngle: y,
                    endAngle: y + _,
                    circumference: _,
                    outerRadius: m,
                    innerRadius: f,
                }
            p &&
                (x.options =
                    g ||
                    this.resolveDataElementOptions(b, w.active ? 'active' : n)),
                (y += _),
                this.updateElement(w, b, x, n)
        }
    }
    calculateTotal() {
        let t = this._cachedMeta,
            e = t.data,
            s = 0,
            n
        for (n = 0; n < e.length; n++) {
            let r = t._parsed[n]
            r !== null &&
                !isNaN(r) &&
                this.chart.getDataVisibility(n) &&
                !e[n].hidden &&
                (s += Math.abs(r))
        }
        return s
    }
    calculateCircumference(t) {
        let e = this._cachedMeta.total
        return e > 0 && !isNaN(t) ? H * (Math.abs(t) / e) : 0
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            s = this.chart,
            n = s.data.labels || [],
            r = ze(e._parsed[t], s.options.locale)
        return { label: n[t] || '', value: r }
    }
    getMaxBorderWidth(t) {
        let e = 0,
            s = this.chart,
            n,
            r,
            o,
            a,
            l
        if (!t) {
            for (n = 0, r = s.data.datasets.length; n < r; ++n)
                if (s.isDatasetVisible(n)) {
                    ;(o = s.getDatasetMeta(n)), (t = o.data), (a = o.controller)
                    break
                }
        }
        if (!t) return 0
        for (n = 0, r = t.length; n < r; ++n)
            (l = a.resolveDataElementOptions(n)),
                l.borderAlign !== 'inner' &&
                    (e = Math.max(
                        e,
                        l.borderWidth || 0,
                        l.hoverBorderWidth || 0,
                    ))
        return e
    }
    getMaxOffset(t) {
        let e = 0
        for (let s = 0, n = t.length; s < n; ++s) {
            let r = this.resolveDataElementOptions(s)
            e = Math.max(e, r.offset || 0, r.hoverOffset || 0)
        }
        return e
    }
    _getRingWeightOffset(t) {
        let e = 0
        for (let s = 0; s < t; ++s)
            this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s))
        return e
    }
    _getRingWeight(t) {
        return Math.max(E(this.chart.data.datasets[t].weight, 1), 0)
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
    }
}
ne.id = 'doughnut'
ne.defaults = {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
        numbers: {
            type: 'number',
            properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
            ],
        },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
}
ne.descriptors = {
    _scriptable: (i) => i !== 'spacing',
    _indexable: (i) => i !== 'spacing',
}
ne.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(i) {
                    let t = i.data
                    if (t.labels.length && t.datasets.length) {
                        let {
                            labels: { pointStyle: e },
                        } = i.legend.options
                        return t.labels.map((s, n) => {
                            let o = i.getDatasetMeta(0).controller.getStyle(n)
                            return {
                                text: s,
                                fillStyle: o.backgroundColor,
                                strokeStyle: o.borderColor,
                                lineWidth: o.borderWidth,
                                pointStyle: e,
                                hidden: !i.getDataVisibility(n),
                                index: n,
                            }
                        })
                    }
                    return []
                },
            },
            onClick(i, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update()
            },
        },
        tooltip: {
            callbacks: {
                title() {
                    return ''
                },
                label(i) {
                    let t = i.label,
                        e = ': ' + i.formattedValue
                    return B(t) ? ((t = t.slice()), (t[0] += e)) : (t += e), t
                },
            },
        },
    },
}
var je = class extends gt {
    initialize() {
        ;(this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize()
    }
    update(t) {
        let e = this._cachedMeta,
            { dataset: s, data: n = [], _dataset: r } = e,
            o = this.chart._animationsDisabled,
            { start: a, count: l } = zn(e, n, o)
        ;(this._drawStart = a),
            (this._drawCount = l),
            Vn(e) && ((a = 0), (l = n.length)),
            (s._chart = this.chart),
            (s._datasetIndex = this.index),
            (s._decimated = !!r._decimated),
            (s.points = n)
        let c = this.resolveDatasetElementOptions(t)
        this.options.showLine || (c.borderWidth = 0),
            (c.segment = this.options.segment),
            this.updateElement(s, void 0, { animated: !o, options: c }, t),
            this.updateElements(n, a, l, t)
    }
    updateElements(t, e, s, n) {
        let r = n === 'reset',
            {
                iScale: o,
                vScale: a,
                _stacked: l,
                _dataset: c,
            } = this._cachedMeta,
            { sharedOptions: h, includeOptions: u } = this._getSharedOptions(
                e,
                n,
            ),
            d = o.axis,
            f = a.axis,
            { spanGaps: m, segment: g } = this.options,
            p = ge(m) ? m : Number.POSITIVE_INFINITY,
            y = this.chart._animationsDisabled || r || n === 'none',
            b = e > 0 && this.getParsed(e - 1)
        for (let _ = e; _ < e + s; ++_) {
            let w = t[_],
                x = this.getParsed(_),
                S = y ? w : {},
                k = P(x[f]),
                v = (S[d] = o.getPixelForValue(x[d], _)),
                T = (S[f] =
                    r || k
                        ? a.getBasePixel()
                        : a.getPixelForValue(
                              l ? this.applyStack(a, x, l) : x[f],
                              _,
                          ))
            ;(S.skip = isNaN(v) || isNaN(T) || k),
                (S.stop = _ > 0 && Math.abs(x[d] - b[d]) > p),
                g && ((S.parsed = x), (S.raw = c.data[_])),
                u &&
                    (S.options =
                        h ||
                        this.resolveDataElementOptions(
                            _,
                            w.active ? 'active' : n,
                        )),
                y || this.updateElement(w, _, S, n),
                (b = x)
        }
    }
    getMaxOverflow() {
        let t = this._cachedMeta,
            e = t.dataset,
            s = (e.options && e.options.borderWidth) || 0,
            n = t.data || []
        if (!n.length) return s
        let r = n[0].size(this.resolveDataElementOptions(0)),
            o = n[n.length - 1].size(
                this.resolveDataElementOptions(n.length - 1),
            )
        return Math.max(s, r, o) / 2
    }
    draw() {
        let t = this._cachedMeta
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw()
    }
}
je.id = 'line'
je.defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
}
je.overrides = {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
}
var Ue = class extends gt {
    constructor(t, e) {
        super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0)
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta,
            s = this.chart,
            n = s.data.labels || [],
            r = ze(e._parsed[t].r, s.options.locale)
        return { label: n[t] || '', value: r }
    }
    parseObjectData(t, e, s, n) {
        return Kn.bind(this)(t, e, s, n)
    }
    update(t) {
        let e = this._cachedMeta.data
        this._updateRadius(), this.updateElements(e, 0, e.length, t)
    }
    getMinMax() {
        let t = this._cachedMeta,
            e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
        return (
            t.data.forEach((s, n) => {
                let r = this.getParsed(n).r
                !isNaN(r) &&
                    this.chart.getDataVisibility(n) &&
                    (r < e.min && (e.min = r), r > e.max && (e.max = r))
            }),
            e
        )
    }
    _updateRadius() {
        let t = this.chart,
            e = t.chartArea,
            s = t.options,
            n = Math.min(e.right - e.left, e.bottom - e.top),
            r = Math.max(n / 2, 0),
            o = Math.max(
                s.cutoutPercentage ? (r / 100) * s.cutoutPercentage : 1,
                0,
            ),
            a = (r - o) / t.getVisibleDatasetCount()
        ;(this.outerRadius = r - a * this.index),
            (this.innerRadius = this.outerRadius - a)
    }
    updateElements(t, e, s, n) {
        let r = n === 'reset',
            o = this.chart,
            l = o.options.animation,
            c = this._cachedMeta.rScale,
            h = c.xCenter,
            u = c.yCenter,
            d = c.getIndexAngle(0) - 0.5 * j,
            f = d,
            m,
            g = 360 / this.countVisibleElements()
        for (m = 0; m < e; ++m) f += this._computeAngle(m, n, g)
        for (m = e; m < e + s; m++) {
            let p = t[m],
                y = f,
                b = f + this._computeAngle(m, n, g),
                _ = o.getDataVisibility(m)
                    ? c.getDistanceFromCenterForValue(this.getParsed(m).r)
                    : 0
            ;(f = b),
                r && (l.animateScale && (_ = 0), l.animateRotate && (y = b = d))
            let w = {
                x: h,
                y: u,
                innerRadius: 0,
                outerRadius: _,
                startAngle: y,
                endAngle: b,
                options: this.resolveDataElementOptions(
                    m,
                    p.active ? 'active' : n,
                ),
            }
            this.updateElement(p, m, w, n)
        }
    }
    countVisibleElements() {
        let t = this._cachedMeta,
            e = 0
        return (
            t.data.forEach((s, n) => {
                !isNaN(this.getParsed(n).r) &&
                    this.chart.getDataVisibility(n) &&
                    e++
            }),
            e
        )
    }
    _computeAngle(t, e, s) {
        return this.chart.getDataVisibility(t)
            ? _t(this.resolveDataElementOptions(t, e).angle || s)
            : 0
    }
}
Ue.id = 'polarArea'
Ue.defaults = {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
        numbers: {
            type: 'number',
            properties: [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
            ],
        },
    },
    indexAxis: 'r',
    startAngle: 0,
}
Ue.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(i) {
                    let t = i.data
                    if (t.labels.length && t.datasets.length) {
                        let {
                            labels: { pointStyle: e },
                        } = i.legend.options
                        return t.labels.map((s, n) => {
                            let o = i.getDatasetMeta(0).controller.getStyle(n)
                            return {
                                text: s,
                                fillStyle: o.backgroundColor,
                                strokeStyle: o.borderColor,
                                lineWidth: o.borderWidth,
                                pointStyle: e,
                                hidden: !i.getDataVisibility(n),
                                index: n,
                            }
                        })
                    }
                    return []
                },
            },
            onClick(i, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update()
            },
        },
        tooltip: {
            callbacks: {
                title() {
                    return ''
                },
                label(i) {
                    return (
                        i.chart.data.labels[i.dataIndex] +
                        ': ' +
                        i.formattedValue
                    )
                },
            },
        },
    },
    scales: {
        r: {
            type: 'radialLinear',
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
        },
    },
}
var Ci = class extends ne {}
Ci.id = 'pie'
Ci.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' }
var Ye = class extends gt {
    getLabelAndValue(t) {
        let e = this._cachedMeta.vScale,
            s = this.getParsed(t)
        return {
            label: e.getLabels()[t],
            value: '' + e.getLabelForValue(s[e.axis]),
        }
    }
    parseObjectData(t, e, s, n) {
        return Kn.bind(this)(t, e, s, n)
    }
    update(t) {
        let e = this._cachedMeta,
            s = e.dataset,
            n = e.data || [],
            r = e.iScale.getLabels()
        if (((s.points = n), t !== 'resize')) {
            let o = this.resolveDatasetElementOptions(t)
            this.options.showLine || (o.borderWidth = 0)
            let a = { _loop: !0, _fullLoop: r.length === n.length, options: o }
            this.updateElement(s, void 0, a, t)
        }
        this.updateElements(n, 0, n.length, t)
    }
    updateElements(t, e, s, n) {
        let r = this._cachedMeta.rScale,
            o = n === 'reset'
        for (let a = e; a < e + s; a++) {
            let l = t[a],
                c = this.resolveDataElementOptions(a, l.active ? 'active' : n),
                h = r.getPointPositionForValue(a, this.getParsed(a).r),
                u = o ? r.xCenter : h.x,
                d = o ? r.yCenter : h.y,
                f = {
                    x: u,
                    y: d,
                    angle: h.angle,
                    skip: isNaN(u) || isNaN(d),
                    options: c,
                }
            this.updateElement(l, a, f, n)
        }
    }
}
Ye.id = 'radar'
Ye.defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
}
Ye.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } }
var pt = class {
    constructor() {
        ;(this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0)
    }
    tooltipPosition(t) {
        let { x: e, y: s } = this.getProps(['x', 'y'], t)
        return { x: e, y: s }
    }
    hasValue() {
        return ge(this.x) && ge(this.y)
    }
    getProps(t, e) {
        let s = this.$animations
        if (!e || !s) return this
        let n = {}
        return (
            t.forEach((r) => {
                n[r] = s[r] && s[r].active() ? s[r]._to : this[r]
            }),
            n
        )
    }
}
pt.defaults = {}
pt.defaultRoutes = void 0
var tl = {
    values(i) {
        return B(i) ? i : '' + i
    },
    numeric(i, t, e) {
        if (i === 0) return '0'
        let s = this.chart.options.locale,
            n,
            r = i
        if (e.length > 1) {
            let c = Math.max(
                Math.abs(e[0].value),
                Math.abs(e[e.length - 1].value),
            )
            ;(c < 1e-4 || c > 1e15) && (n = 'scientific'), (r = hu(i, e))
        }
        let o = mt(Math.abs(r)),
            a = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
            l = {
                notation: n,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
            }
        return Object.assign(l, this.options.ticks.format), ze(i, s, l)
    },
    logarithmic(i, t, e) {
        if (i === 0) return '0'
        let s = i / Math.pow(10, Math.floor(mt(i)))
        return s === 1 || s === 2 || s === 5
            ? tl.numeric.call(this, i, t, e)
            : ''
    },
}
function hu(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e
}
var Gs = { formatters: tl }
A.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    grace: 0,
    grid: {
        display: !0,
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (i, t) => t.lineWidth,
        tickColor: (i, t) => t.color,
        offset: !1,
        borderDash: [],
        borderDashOffset: 0,
        borderWidth: 1,
    },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: '',
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Gs.formatters.values,
        minor: {},
        major: {},
        align: 'center',
        crossAlign: 'near',
        showLabelBackdrop: !1,
        backdropColor: 'rgba(255, 255, 255, 0.75)',
        backdropPadding: 2,
    },
})
A.route('scale.ticks', 'color', '', 'color')
A.route('scale.grid', 'color', '', 'borderColor')
A.route('scale.grid', 'borderColor', '', 'borderColor')
A.route('scale.title', 'color', '', 'color')
A.describe('scale', {
    _fallback: !1,
    _scriptable: (i) =>
        !i.startsWith('before') &&
        !i.startsWith('after') &&
        i !== 'callback' &&
        i !== 'parser',
    _indexable: (i) => i !== 'borderDash' && i !== 'tickBorderDash',
})
A.describe('scales', { _fallback: 'scale' })
A.describe('scale.ticks', {
    _scriptable: (i) => i !== 'backdropPadding' && i !== 'callback',
    _indexable: (i) => i !== 'backdropPadding',
})
function uu(i, t) {
    let e = i.options.ticks,
        s = e.maxTicksLimit || du(i),
        n = e.major.enabled ? mu(t) : [],
        r = n.length,
        o = n[0],
        a = n[r - 1],
        l = []
    if (r > s) return gu(t, l, n, r / s), l
    let c = fu(n, t, s)
    if (r > 0) {
        let h,
            u,
            d = r > 1 ? Math.round((a - o) / (r - 1)) : null
        for (Ns(t, l, c, P(d) ? 0 : o - d, o), h = 0, u = r - 1; h < u; h++)
            Ns(t, l, c, n[h], n[h + 1])
        return Ns(t, l, c, a, P(d) ? t.length : a + d), l
    }
    return Ns(t, l, c), l
}
function du(i) {
    let t = i.options.offset,
        e = i._tickSize(),
        s = i._length / e + (t ? 0 : 1),
        n = i._maxLength / e
    return Math.floor(Math.min(s, n))
}
function fu(i, t, e) {
    let s = pu(i),
        n = t.length / e
    if (!s) return Math.max(n, 1)
    let r = Fo(s)
    for (let o = 0, a = r.length - 1; o < a; o++) {
        let l = r[o]
        if (l > n) return l
    }
    return Math.max(n, 1)
}
function mu(i) {
    let t = [],
        e,
        s
    for (e = 0, s = i.length; e < s; e++) i[e].major && t.push(e)
    return t
}
function gu(i, t, e, s) {
    let n = 0,
        r = e[0],
        o
    for (s = Math.ceil(s), o = 0; o < i.length; o++)
        o === r && (t.push(i[o]), n++, (r = e[n * s]))
}
function Ns(i, t, e, s, n) {
    let r = E(s, 0),
        o = Math.min(E(n, i.length), i.length),
        a = 0,
        l,
        c,
        h
    for (
        e = Math.ceil(e),
            n && ((l = n - s), (e = l / Math.floor(l / e))),
            h = r;
        h < 0;

    )
        a++, (h = Math.round(r + a * e))
    for (c = Math.max(r, 0); c < o; c++)
        c === h && (t.push(i[c]), a++, (h = Math.round(r + a * e)))
}
function pu(i) {
    let t = i.length,
        e,
        s
    if (t < 2) return !1
    for (s = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== s) return !1
    return s
}
var yu = (i) => (i === 'left' ? 'right' : i === 'right' ? 'left' : i),
    ya = (i, t, e) => (t === 'top' || t === 'left' ? i[t] + e : i[t] - e)
function ba(i, t) {
    let e = [],
        s = i.length / t,
        n = i.length,
        r = 0
    for (; r < n; r += s) e.push(i[Math.floor(r)])
    return e
}
function bu(i, t, e) {
    let s = i.ticks.length,
        n = Math.min(t, s - 1),
        r = i._startPixel,
        o = i._endPixel,
        a = 1e-6,
        l = i.getPixelForTick(n),
        c
    if (
        !(
            e &&
            (s === 1
                ? (c = Math.max(l - r, o - l))
                : t === 0
                  ? (c = (i.getPixelForTick(1) - l) / 2)
                  : (c = (l - i.getPixelForTick(n - 1)) / 2),
            (l += n < t ? c : -c),
            l < r - a || l > o + a)
        )
    )
        return l
}
function xu(i, t) {
    V(i, (e) => {
        let s = e.gc,
            n = s.length / 2,
            r
        if (n > t) {
            for (r = 0; r < n; ++r) delete e.data[s[r]]
            s.splice(0, n)
        }
    })
}
function Ti(i) {
    return i.drawTicks ? i.tickLength : 0
}
function xa(i, t) {
    if (!i.display) return 0
    let e = Q(i.font, t),
        s = rt(i.padding)
    return (B(i.text) ? i.text.length : 1) * e.lineHeight + s.height
}
function _u(i, t) {
    return Ht(i, { scale: t, type: 'scale' })
}
function wu(i, t, e) {
    return Ht(i, { tick: e, index: t, type: 'tick' })
}
function Su(i, t, e) {
    let s = Es(i)
    return ((e && t !== 'right') || (!e && t === 'right')) && (s = yu(s)), s
}
function ku(i, t, e, s) {
    let { top: n, left: r, bottom: o, right: a, chart: l } = i,
        { chartArea: c, scales: h } = l,
        u = 0,
        d,
        f,
        m,
        g = o - n,
        p = a - r
    if (i.isHorizontal()) {
        if (((f = nt(s, r, a)), F(e))) {
            let y = Object.keys(e)[0],
                b = e[y]
            m = h[y].getPixelForValue(b) + g - t
        } else
            e === 'center'
                ? (m = (c.bottom + c.top) / 2 + g - t)
                : (m = ya(i, e, t))
        d = a - r
    } else {
        if (F(e)) {
            let y = Object.keys(e)[0],
                b = e[y]
            f = h[y].getPixelForValue(b) - p + t
        } else
            e === 'center'
                ? (f = (c.left + c.right) / 2 - p + t)
                : (f = ya(i, e, t))
        ;(m = nt(s, o, n)), (u = e === 'left' ? -U : U)
    }
    return { titleX: f, titleY: m, maxWidth: d, rotation: u }
}
var be = class i extends pt {
        constructor(t) {
            super(),
                (this.id = t.id),
                (this.type = t.type),
                (this.options = void 0),
                (this.ctx = t.ctx),
                (this.chart = t.chart),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.width = void 0),
                (this.height = void 0),
                (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                (this.maxWidth = void 0),
                (this.maxHeight = void 0),
                (this.paddingTop = void 0),
                (this.paddingBottom = void 0),
                (this.paddingLeft = void 0),
                (this.paddingRight = void 0),
                (this.axis = void 0),
                (this.labelRotation = void 0),
                (this.min = void 0),
                (this.max = void 0),
                (this._range = void 0),
                (this.ticks = []),
                (this._gridLineItems = null),
                (this._labelItems = null),
                (this._labelSizes = null),
                (this._length = 0),
                (this._maxLength = 0),
                (this._longestTextCache = {}),
                (this._startPixel = void 0),
                (this._endPixel = void 0),
                (this._reversePixels = !1),
                (this._userMax = void 0),
                (this._userMin = void 0),
                (this._suggestedMax = void 0),
                (this._suggestedMin = void 0),
                (this._ticksLength = 0),
                (this._borderValue = 0),
                (this._cache = {}),
                (this._dataLimitsCached = !1),
                (this.$context = void 0)
        }
        init(t) {
            ;(this.options = t.setContext(this.getContext())),
                (this.axis = t.axis),
                (this._userMin = this.parse(t.min)),
                (this._userMax = this.parse(t.max)),
                (this._suggestedMin = this.parse(t.suggestedMin)),
                (this._suggestedMax = this.parse(t.suggestedMax))
        }
        parse(t, e) {
            return t
        }
        getUserBounds() {
            let {
                _userMin: t,
                _userMax: e,
                _suggestedMin: s,
                _suggestedMax: n,
            } = this
            return (
                (t = ft(t, Number.POSITIVE_INFINITY)),
                (e = ft(e, Number.NEGATIVE_INFINITY)),
                (s = ft(s, Number.POSITIVE_INFINITY)),
                (n = ft(n, Number.NEGATIVE_INFINITY)),
                {
                    min: ft(t, s),
                    max: ft(e, n),
                    minDefined: q(t),
                    maxDefined: q(e),
                }
            )
        }
        getMinMax(t) {
            let {
                    min: e,
                    max: s,
                    minDefined: n,
                    maxDefined: r,
                } = this.getUserBounds(),
                o
            if (n && r) return { min: e, max: s }
            let a = this.getMatchingVisibleMetas()
            for (let l = 0, c = a.length; l < c; ++l)
                (o = a[l].controller.getMinMax(this, t)),
                    n || (e = Math.min(e, o.min)),
                    r || (s = Math.max(s, o.max))
            return (
                (e = r && e > s ? s : e),
                (s = n && e > s ? e : s),
                { min: ft(e, ft(s, e)), max: ft(s, ft(e, s)) }
            )
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
            }
        }
        getTicks() {
            return this.ticks
        }
        getLabels() {
            let t = this.chart.data
            return (
                this.options.labels ||
                (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                t.labels ||
                []
            )
        }
        beforeLayout() {
            ;(this._cache = {}), (this._dataLimitsCached = !1)
        }
        beforeUpdate() {
            $(this.options.beforeUpdate, [this])
        }
        update(t, e, s) {
            let { beginAtZero: n, grace: r, ticks: o } = this.options,
                a = o.sampleSize
            this.beforeUpdate(),
                (this.maxWidth = t),
                (this.maxHeight = e),
                (this._margins = s =
                    Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
                (this.ticks = null),
                (this._labelSizes = null),
                (this._gridLineItems = null),
                (this._labelItems = null),
                this.beforeSetDimensions(),
                this.setDimensions(),
                this.afterSetDimensions(),
                (this._maxLength = this.isHorizontal()
                    ? this.width + s.left + s.right
                    : this.height + s.top + s.bottom),
                this._dataLimitsCached ||
                    (this.beforeDataLimits(),
                    this.determineDataLimits(),
                    this.afterDataLimits(),
                    (this._range = Go(this, r, n)),
                    (this._dataLimitsCached = !0)),
                this.beforeBuildTicks(),
                (this.ticks = this.buildTicks() || []),
                this.afterBuildTicks()
            let l = a < this.ticks.length
            this._convertTicksToLabels(l ? ba(this.ticks, a) : this.ticks),
                this.configure(),
                this.beforeCalculateLabelRotation(),
                this.calculateLabelRotation(),
                this.afterCalculateLabelRotation(),
                o.display &&
                    (o.autoSkip || o.source === 'auto') &&
                    ((this.ticks = uu(this, this.ticks)),
                    (this._labelSizes = null),
                    this.afterAutoSkip()),
                l && this._convertTicksToLabels(this.ticks),
                this.beforeFit(),
                this.fit(),
                this.afterFit(),
                this.afterUpdate()
        }
        configure() {
            let t = this.options.reverse,
                e,
                s
            this.isHorizontal()
                ? ((e = this.left), (s = this.right))
                : ((e = this.top), (s = this.bottom), (t = !t)),
                (this._startPixel = e),
                (this._endPixel = s),
                (this._reversePixels = t),
                (this._length = s - e),
                (this._alignToPixels = this.options.alignToPixels)
        }
        afterUpdate() {
            $(this.options.afterUpdate, [this])
        }
        beforeSetDimensions() {
            $(this.options.beforeSetDimensions, [this])
        }
        setDimensions() {
            this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = 0),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = 0),
                  (this.bottom = this.height)),
                (this.paddingLeft = 0),
                (this.paddingTop = 0),
                (this.paddingRight = 0),
                (this.paddingBottom = 0)
        }
        afterSetDimensions() {
            $(this.options.afterSetDimensions, [this])
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()),
                $(this.options[t], [this])
        }
        beforeDataLimits() {
            this._callHooks('beforeDataLimits')
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks('afterDataLimits')
        }
        beforeBuildTicks() {
            this._callHooks('beforeBuildTicks')
        }
        buildTicks() {
            return []
        }
        afterBuildTicks() {
            this._callHooks('afterBuildTicks')
        }
        beforeTickToLabelConversion() {
            $(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
            let e = this.options.ticks,
                s,
                n,
                r
            for (s = 0, n = t.length; s < n; s++)
                (r = t[s]), (r.label = $(e.callback, [r.value, s, t], this))
        }
        afterTickToLabelConversion() {
            $(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
            $(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
            let t = this.options,
                e = t.ticks,
                s = this.ticks.length,
                n = e.minRotation || 0,
                r = e.maxRotation,
                o = n,
                a,
                l,
                c
            if (
                !this._isVisible() ||
                !e.display ||
                n >= r ||
                s <= 1 ||
                !this.isHorizontal()
            ) {
                this.labelRotation = n
                return
            }
            let h = this._getLabelSizes(),
                u = h.widest.width,
                d = h.highest.height,
                f = tt(this.chart.width - u, 0, this.maxWidth)
            ;(a = t.offset ? this.maxWidth / s : f / (s - 1)),
                u + 6 > a &&
                    ((a = f / (s - (t.offset ? 0.5 : 1))),
                    (l =
                        this.maxHeight -
                        Ti(t.grid) -
                        e.padding -
                        xa(t.title, this.chart.options.font)),
                    (c = Math.sqrt(u * u + d * d)),
                    (o = Os(
                        Math.min(
                            Math.asin(tt((h.highest.height + 6) / a, -1, 1)),
                            Math.asin(tt(l / c, -1, 1)) -
                                Math.asin(tt(d / c, -1, 1)),
                        ),
                    )),
                    (o = Math.max(n, Math.min(r, o)))),
                (this.labelRotation = o)
        }
        afterCalculateLabelRotation() {
            $(this.options.afterCalculateLabelRotation, [this])
        }
        afterAutoSkip() {}
        beforeFit() {
            $(this.options.beforeFit, [this])
        }
        fit() {
            let t = { width: 0, height: 0 },
                {
                    chart: e,
                    options: { ticks: s, title: n, grid: r },
                } = this,
                o = this._isVisible(),
                a = this.isHorizontal()
            if (o) {
                let l = xa(n, e.options.font)
                if (
                    (a
                        ? ((t.width = this.maxWidth), (t.height = Ti(r) + l))
                        : ((t.height = this.maxHeight), (t.width = Ti(r) + l)),
                    s.display && this.ticks.length)
                ) {
                    let {
                            first: c,
                            last: h,
                            widest: u,
                            highest: d,
                        } = this._getLabelSizes(),
                        f = s.padding * 2,
                        m = _t(this.labelRotation),
                        g = Math.cos(m),
                        p = Math.sin(m)
                    if (a) {
                        let y = s.mirror ? 0 : p * u.width + g * d.height
                        t.height = Math.min(this.maxHeight, t.height + y + f)
                    } else {
                        let y = s.mirror ? 0 : g * u.width + p * d.height
                        t.width = Math.min(this.maxWidth, t.width + y + f)
                    }
                    this._calculatePadding(c, h, p, g)
                }
            }
            this._handleMargins(),
                a
                    ? ((this.width = this._length =
                          e.width - this._margins.left - this._margins.right),
                      (this.height = t.height))
                    : ((this.width = t.width),
                      (this.height = this._length =
                          e.height - this._margins.top - this._margins.bottom))
        }
        _calculatePadding(t, e, s, n) {
            let {
                    ticks: { align: r, padding: o },
                    position: a,
                } = this.options,
                l = this.labelRotation !== 0,
                c = a !== 'top' && this.axis === 'x'
            if (this.isHorizontal()) {
                let h = this.getPixelForTick(0) - this.left,
                    u =
                        this.right -
                        this.getPixelForTick(this.ticks.length - 1),
                    d = 0,
                    f = 0
                l
                    ? c
                        ? ((d = n * t.width), (f = s * e.height))
                        : ((d = s * t.height), (f = n * e.width))
                    : r === 'start'
                      ? (f = e.width)
                      : r === 'end'
                        ? (d = t.width)
                        : r !== 'inner' &&
                          ((d = t.width / 2), (f = e.width / 2)),
                    (this.paddingLeft = Math.max(
                        ((d - h + o) * this.width) / (this.width - h),
                        0,
                    )),
                    (this.paddingRight = Math.max(
                        ((f - u + o) * this.width) / (this.width - u),
                        0,
                    ))
            } else {
                let h = e.height / 2,
                    u = t.height / 2
                r === 'start'
                    ? ((h = 0), (u = t.height))
                    : r === 'end' && ((h = e.height), (u = 0)),
                    (this.paddingTop = h + o),
                    (this.paddingBottom = u + o)
            }
        }
        _handleMargins() {
            this._margins &&
                ((this._margins.left = Math.max(
                    this.paddingLeft,
                    this._margins.left,
                )),
                (this._margins.top = Math.max(
                    this.paddingTop,
                    this._margins.top,
                )),
                (this._margins.right = Math.max(
                    this.paddingRight,
                    this._margins.right,
                )),
                (this._margins.bottom = Math.max(
                    this.paddingBottom,
                    this._margins.bottom,
                )))
        }
        afterFit() {
            $(this.options.afterFit, [this])
        }
        isHorizontal() {
            let { axis: t, position: e } = this.options
            return e === 'top' || e === 'bottom' || t === 'x'
        }
        isFullSize() {
            return this.options.fullSize
        }
        _convertTicksToLabels(t) {
            this.beforeTickToLabelConversion(), this.generateTickLabels(t)
            let e, s
            for (e = 0, s = t.length; e < s; e++)
                P(t[e].label) && (t.splice(e, 1), s--, e--)
            this.afterTickToLabelConversion()
        }
        _getLabelSizes() {
            let t = this._labelSizes
            if (!t) {
                let e = this.options.ticks.sampleSize,
                    s = this.ticks
                e < s.length && (s = ba(s, e)),
                    (this._labelSizes = t =
                        this._computeLabelSizes(s, s.length))
            }
            return t
        }
        _computeLabelSizes(t, e) {
            let { ctx: s, _longestTextCache: n } = this,
                r = [],
                o = [],
                a = 0,
                l = 0,
                c,
                h,
                u,
                d,
                f,
                m,
                g,
                p,
                y,
                b,
                _
            for (c = 0; c < e; ++c) {
                if (
                    ((d = t[c].label),
                    (f = this._resolveTickFontOptions(c)),
                    (s.font = m = f.string),
                    (g = n[m] = n[m] || { data: {}, gc: [] }),
                    (p = f.lineHeight),
                    (y = b = 0),
                    !P(d) && !B(d))
                )
                    (y = xi(s, g.data, g.gc, y, d)), (b = p)
                else if (B(d))
                    for (h = 0, u = d.length; h < u; ++h)
                        (_ = d[h]),
                            !P(_) &&
                                !B(_) &&
                                ((y = xi(s, g.data, g.gc, y, _)), (b += p))
                r.push(y), o.push(b), (a = Math.max(y, a)), (l = Math.max(b, l))
            }
            xu(n, e)
            let w = r.indexOf(a),
                x = o.indexOf(l),
                S = (k) => ({ width: r[k] || 0, height: o[k] || 0 })
            return {
                first: S(0),
                last: S(e - 1),
                widest: S(w),
                highest: S(x),
                widths: r,
                heights: o,
            }
        }
        getLabelForValue(t) {
            return t
        }
        getPixelForValue(t, e) {
            return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            let e = this.ticks
            return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t)
            let e = this._startPixel + t * this._length
            return Lo(this._alignToPixels ? Jt(this.chart, e, 0) : e)
        }
        getDecimalForPixel(t) {
            let e = (t - this._startPixel) / this._length
            return this._reversePixels ? 1 - e : e
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
            let { min: t, max: e } = this
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t) {
            let e = this.ticks || []
            if (t >= 0 && t < e.length) {
                let s = e[t]
                return s.$context || (s.$context = wu(this.getContext(), t, s))
            }
            return (
                this.$context ||
                (this.$context = _u(this.chart.getContext(), this))
            )
        }
        _tickSize() {
            let t = this.options.ticks,
                e = _t(this.labelRotation),
                s = Math.abs(Math.cos(e)),
                n = Math.abs(Math.sin(e)),
                r = this._getLabelSizes(),
                o = t.autoSkipPadding || 0,
                a = r ? r.widest.width + o : 0,
                l = r ? r.highest.height + o : 0
            return this.isHorizontal()
                ? l * s > a * n
                    ? a / s
                    : l / n
                : l * n < a * s
                  ? l / s
                  : a / n
        }
        _isVisible() {
            let t = this.options.display
            return t !== 'auto'
                ? !!t
                : this.getMatchingVisibleMetas().length > 0
        }
        _computeGridLineItems(t) {
            let e = this.axis,
                s = this.chart,
                n = this.options,
                { grid: r, position: o } = n,
                a = r.offset,
                l = this.isHorizontal(),
                h = this.ticks.length + (a ? 1 : 0),
                u = Ti(r),
                d = [],
                f = r.setContext(this.getContext()),
                m = f.drawBorder ? f.borderWidth : 0,
                g = m / 2,
                p = function (D) {
                    return Jt(s, D, m)
                },
                y,
                b,
                _,
                w,
                x,
                S,
                k,
                v,
                T,
                C,
                N,
                L
            if (o === 'top')
                (y = p(this.bottom)),
                    (S = this.bottom - u),
                    (v = y - g),
                    (C = p(t.top) + g),
                    (L = t.bottom)
            else if (o === 'bottom')
                (y = p(this.top)),
                    (C = t.top),
                    (L = p(t.bottom) - g),
                    (S = y + g),
                    (v = this.top + u)
            else if (o === 'left')
                (y = p(this.right)),
                    (x = this.right - u),
                    (k = y - g),
                    (T = p(t.left) + g),
                    (N = t.right)
            else if (o === 'right')
                (y = p(this.left)),
                    (T = t.left),
                    (N = p(t.right) - g),
                    (x = y + g),
                    (k = this.left + u)
            else if (e === 'x') {
                if (o === 'center') y = p((t.top + t.bottom) / 2 + 0.5)
                else if (F(o)) {
                    let D = Object.keys(o)[0],
                        J = o[D]
                    y = p(this.chart.scales[D].getPixelForValue(J))
                }
                ;(C = t.top), (L = t.bottom), (S = y + g), (v = S + u)
            } else if (e === 'y') {
                if (o === 'center') y = p((t.left + t.right) / 2)
                else if (F(o)) {
                    let D = Object.keys(o)[0],
                        J = o[D]
                    y = p(this.chart.scales[D].getPixelForValue(J))
                }
                ;(x = y - g), (k = x - u), (T = t.left), (N = t.right)
            }
            let K = E(n.ticks.maxTicksLimit, h),
                lt = Math.max(1, Math.ceil(h / K))
            for (b = 0; b < h; b += lt) {
                let D = r.setContext(this.getContext(b)),
                    J = D.lineWidth,
                    X = D.color,
                    de = D.borderDash || [],
                    bn = D.borderDashOffset,
                    Oe = D.tickWidth,
                    ps = D.tickColor,
                    De = D.tickBorderDash || [],
                    gi = D.tickBorderDashOffset
                ;(_ = bu(this, b, a)),
                    _ !== void 0 &&
                        ((w = Jt(s, _, J)),
                        l ? (x = k = T = N = w) : (S = v = C = L = w),
                        d.push({
                            tx1: x,
                            ty1: S,
                            tx2: k,
                            ty2: v,
                            x1: T,
                            y1: C,
                            x2: N,
                            y2: L,
                            width: J,
                            color: X,
                            borderDash: de,
                            borderDashOffset: bn,
                            tickWidth: Oe,
                            tickColor: ps,
                            tickBorderDash: De,
                            tickBorderDashOffset: gi,
                        }))
            }
            return (this._ticksLength = h), (this._borderValue = y), d
        }
        _computeLabelItems(t) {
            let e = this.axis,
                s = this.options,
                { position: n, ticks: r } = s,
                o = this.isHorizontal(),
                a = this.ticks,
                { align: l, crossAlign: c, padding: h, mirror: u } = r,
                d = Ti(s.grid),
                f = d + h,
                m = u ? -h : f,
                g = -_t(this.labelRotation),
                p = [],
                y,
                b,
                _,
                w,
                x,
                S,
                k,
                v,
                T,
                C,
                N,
                L,
                K = 'middle'
            if (n === 'top')
                (S = this.bottom - m), (k = this._getXAxisLabelAlignment())
            else if (n === 'bottom')
                (S = this.top + m), (k = this._getXAxisLabelAlignment())
            else if (n === 'left') {
                let D = this._getYAxisLabelAlignment(d)
                ;(k = D.textAlign), (x = D.x)
            } else if (n === 'right') {
                let D = this._getYAxisLabelAlignment(d)
                ;(k = D.textAlign), (x = D.x)
            } else if (e === 'x') {
                if (n === 'center') S = (t.top + t.bottom) / 2 + f
                else if (F(n)) {
                    let D = Object.keys(n)[0],
                        J = n[D]
                    S = this.chart.scales[D].getPixelForValue(J) + f
                }
                k = this._getXAxisLabelAlignment()
            } else if (e === 'y') {
                if (n === 'center') x = (t.left + t.right) / 2 - f
                else if (F(n)) {
                    let D = Object.keys(n)[0],
                        J = n[D]
                    x = this.chart.scales[D].getPixelForValue(J)
                }
                k = this._getYAxisLabelAlignment(d).textAlign
            }
            e === 'y' &&
                (l === 'start' ? (K = 'top') : l === 'end' && (K = 'bottom'))
            let lt = this._getLabelSizes()
            for (y = 0, b = a.length; y < b; ++y) {
                ;(_ = a[y]), (w = _.label)
                let D = r.setContext(this.getContext(y))
                ;(v = this.getPixelForTick(y) + r.labelOffset),
                    (T = this._resolveTickFontOptions(y)),
                    (C = T.lineHeight),
                    (N = B(w) ? w.length : 1)
                let J = N / 2,
                    X = D.color,
                    de = D.textStrokeColor,
                    bn = D.textStrokeWidth,
                    Oe = k
                o
                    ? ((x = v),
                      k === 'inner' &&
                          (y === b - 1
                              ? (Oe = this.options.reverse ? 'left' : 'right')
                              : y === 0
                                ? (Oe = this.options.reverse ? 'right' : 'left')
                                : (Oe = 'center')),
                      n === 'top'
                          ? c === 'near' || g !== 0
                              ? (L = -N * C + C / 2)
                              : c === 'center'
                                ? (L = -lt.highest.height / 2 - J * C + C)
                                : (L = -lt.highest.height + C / 2)
                          : c === 'near' || g !== 0
                            ? (L = C / 2)
                            : c === 'center'
                              ? (L = lt.highest.height / 2 - J * C)
                              : (L = lt.highest.height - N * C),
                      u && (L *= -1))
                    : ((S = v), (L = ((1 - N) * C) / 2))
                let ps
                if (D.showLabelBackdrop) {
                    let De = rt(D.backdropPadding),
                        gi = lt.heights[y],
                        xn = lt.widths[y],
                        _n = S + L - De.top,
                        wn = x - De.left
                    switch (K) {
                        case 'middle':
                            _n -= gi / 2
                            break
                        case 'bottom':
                            _n -= gi
                            break
                    }
                    switch (k) {
                        case 'center':
                            wn -= xn / 2
                            break
                        case 'right':
                            wn -= xn
                            break
                    }
                    ps = {
                        left: wn,
                        top: _n,
                        width: xn + De.width,
                        height: gi + De.height,
                        color: D.backdropColor,
                    }
                }
                p.push({
                    rotation: g,
                    label: w,
                    font: T,
                    color: X,
                    strokeColor: de,
                    strokeWidth: bn,
                    textOffset: L,
                    textAlign: Oe,
                    textBaseline: K,
                    translation: [x, S],
                    backdrop: ps,
                })
            }
            return p
        }
        _getXAxisLabelAlignment() {
            let { position: t, ticks: e } = this.options
            if (-_t(this.labelRotation)) return t === 'top' ? 'left' : 'right'
            let n = 'center'
            return (
                e.align === 'start'
                    ? (n = 'left')
                    : e.align === 'end'
                      ? (n = 'right')
                      : e.align === 'inner' && (n = 'inner'),
                n
            )
        }
        _getYAxisLabelAlignment(t) {
            let {
                    position: e,
                    ticks: { crossAlign: s, mirror: n, padding: r },
                } = this.options,
                o = this._getLabelSizes(),
                a = t + r,
                l = o.widest.width,
                c,
                h
            return (
                e === 'left'
                    ? n
                        ? ((h = this.right + r),
                          s === 'near'
                              ? (c = 'left')
                              : s === 'center'
                                ? ((c = 'center'), (h += l / 2))
                                : ((c = 'right'), (h += l)))
                        : ((h = this.right - a),
                          s === 'near'
                              ? (c = 'right')
                              : s === 'center'
                                ? ((c = 'center'), (h -= l / 2))
                                : ((c = 'left'), (h = this.left)))
                    : e === 'right'
                      ? n
                          ? ((h = this.left + r),
                            s === 'near'
                                ? (c = 'right')
                                : s === 'center'
                                  ? ((c = 'center'), (h -= l / 2))
                                  : ((c = 'left'), (h -= l)))
                          : ((h = this.left + a),
                            s === 'near'
                                ? (c = 'left')
                                : s === 'center'
                                  ? ((c = 'center'), (h += l / 2))
                                  : ((c = 'right'), (h = this.right)))
                      : (c = 'right'),
                { textAlign: c, x: h }
            )
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror) return
            let t = this.chart,
                e = this.options.position
            if (e === 'left' || e === 'right')
                return {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right,
                }
            if (e === 'top' || e === 'bottom')
                return {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width,
                }
        }
        drawBackground() {
            let {
                ctx: t,
                options: { backgroundColor: e },
                left: s,
                top: n,
                width: r,
                height: o,
            } = this
            e &&
                (t.save(),
                (t.fillStyle = e),
                t.fillRect(s, n, r, o),
                t.restore())
        }
        getLineWidthForValue(t) {
            let e = this.options.grid
            if (!this._isVisible() || !e.display) return 0
            let n = this.ticks.findIndex((r) => r.value === t)
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
        }
        drawGrid(t) {
            let e = this.options.grid,
                s = this.ctx,
                n =
                    this._gridLineItems ||
                    (this._gridLineItems = this._computeGridLineItems(t)),
                r,
                o,
                a = (l, c, h) => {
                    !h.width ||
                        !h.color ||
                        (s.save(),
                        (s.lineWidth = h.width),
                        (s.strokeStyle = h.color),
                        s.setLineDash(h.borderDash || []),
                        (s.lineDashOffset = h.borderDashOffset),
                        s.beginPath(),
                        s.moveTo(l.x, l.y),
                        s.lineTo(c.x, c.y),
                        s.stroke(),
                        s.restore())
                }
            if (e.display)
                for (r = 0, o = n.length; r < o; ++r) {
                    let l = n[r]
                    e.drawOnChartArea &&
                        a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
                        e.drawTicks &&
                            a(
                                { x: l.tx1, y: l.ty1 },
                                { x: l.tx2, y: l.ty2 },
                                {
                                    color: l.tickColor,
                                    width: l.tickWidth,
                                    borderDash: l.tickBorderDash,
                                    borderDashOffset: l.tickBorderDashOffset,
                                },
                            )
                }
        }
        drawBorder() {
            let {
                    chart: t,
                    ctx: e,
                    options: { grid: s },
                } = this,
                n = s.setContext(this.getContext()),
                r = s.drawBorder ? n.borderWidth : 0
            if (!r) return
            let o = s.setContext(this.getContext(0)).lineWidth,
                a = this._borderValue,
                l,
                c,
                h,
                u
            this.isHorizontal()
                ? ((l = Jt(t, this.left, r) - r / 2),
                  (c = Jt(t, this.right, o) + o / 2),
                  (h = u = a))
                : ((h = Jt(t, this.top, r) - r / 2),
                  (u = Jt(t, this.bottom, o) + o / 2),
                  (l = c = a)),
                e.save(),
                (e.lineWidth = n.borderWidth),
                (e.strokeStyle = n.borderColor),
                e.beginPath(),
                e.moveTo(l, h),
                e.lineTo(c, u),
                e.stroke(),
                e.restore()
        }
        drawLabels(t) {
            if (!this.options.ticks.display) return
            let s = this.ctx,
                n = this._computeLabelArea()
            n && Si(s, n)
            let r =
                    this._labelItems ||
                    (this._labelItems = this._computeLabelItems(t)),
                o,
                a
            for (o = 0, a = r.length; o < a; ++o) {
                let l = r[o],
                    c = l.font,
                    h = l.label
                l.backdrop &&
                    ((s.fillStyle = l.backdrop.color),
                    s.fillRect(
                        l.backdrop.left,
                        l.backdrop.top,
                        l.backdrop.width,
                        l.backdrop.height,
                    ))
                let u = l.textOffset
                Qt(s, h, 0, u, c, l)
            }
            n && ki(s)
        }
        drawTitle() {
            let {
                ctx: t,
                options: { position: e, title: s, reverse: n },
            } = this
            if (!s.display) return
            let r = Q(s.font),
                o = rt(s.padding),
                a = s.align,
                l = r.lineHeight / 2
            e === 'bottom' || e === 'center' || F(e)
                ? ((l += o.bottom),
                  B(s.text) && (l += r.lineHeight * (s.text.length - 1)))
                : (l += o.top)
            let {
                titleX: c,
                titleY: h,
                maxWidth: u,
                rotation: d,
            } = ku(this, l, e, a)
            Qt(t, s.text, 0, 0, r, {
                color: s.color,
                maxWidth: u,
                rotation: d,
                textAlign: Su(a, e, n),
                textBaseline: 'middle',
                translation: [c, h],
            })
        }
        draw(t) {
            this._isVisible() &&
                (this.drawBackground(),
                this.drawGrid(t),
                this.drawBorder(),
                this.drawTitle(),
                this.drawLabels(t))
        }
        _layers() {
            let t = this.options,
                e = (t.ticks && t.ticks.z) || 0,
                s = E(t.grid && t.grid.z, -1)
            return !this._isVisible() || this.draw !== i.prototype.draw
                ? [
                      {
                          z: e,
                          draw: (n) => {
                              this.draw(n)
                          },
                      },
                  ]
                : [
                      {
                          z: s,
                          draw: (n) => {
                              this.drawBackground(),
                                  this.drawGrid(n),
                                  this.drawTitle()
                          },
                      },
                      {
                          z: s + 1,
                          draw: () => {
                              this.drawBorder()
                          },
                      },
                      {
                          z: e,
                          draw: (n) => {
                              this.drawLabels(n)
                          },
                      },
                  ]
        }
        getMatchingVisibleMetas(t) {
            let e = this.chart.getSortedVisibleDatasetMetas(),
                s = this.axis + 'AxisID',
                n = [],
                r,
                o
            for (r = 0, o = e.length; r < o; ++r) {
                let a = e[r]
                a[s] === this.id && (!t || a.type === t) && n.push(a)
            }
            return n
        }
        _resolveTickFontOptions(t) {
            let e = this.options.ticks.setContext(this.getContext(t))
            return Q(e.font)
        }
        _maxDigits() {
            let t = this._resolveTickFontOptions(0).lineHeight
            return (this.isHorizontal() ? this.width : this.height) / t
        }
    },
    He = class {
        constructor(t, e, s) {
            ;(this.type = t),
                (this.scope = e),
                (this.override = s),
                (this.items = Object.create(null))
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(
                this.type.prototype,
                t.prototype,
            )
        }
        register(t) {
            let e = Object.getPrototypeOf(t),
                s
            vu(e) && (s = this.register(e))
            let n = this.items,
                r = t.id,
                o = this.scope + '.' + r
            if (!r) throw new Error('class does not have id: ' + t)
            return (
                r in n ||
                    ((n[r] = t),
                    Mu(t, o, s),
                    this.override && A.override(t.id, t.overrides)),
                o
            )
        }
        get(t) {
            return this.items[t]
        }
        unregister(t) {
            let e = this.items,
                s = t.id,
                n = this.scope
            s in e && delete e[s],
                n &&
                    s in A[n] &&
                    (delete A[n][s], this.override && delete Kt[s])
        }
    }
function Mu(i, t, e) {
    let s = Ce(Object.create(null), [e ? A.get(e) : {}, A.get(t), i.defaults])
    A.set(t, s),
        i.defaultRoutes && Tu(t, i.defaultRoutes),
        i.descriptors && A.describe(t, i.descriptors)
}
function Tu(i, t) {
    Object.keys(t).forEach((e) => {
        let s = e.split('.'),
            n = s.pop(),
            r = [i].concat(s).join('.'),
            o = t[e].split('.'),
            a = o.pop(),
            l = o.join('.')
        A.route(r, n, l, a)
    })
}
function vu(i) {
    return 'id' in i && 'defaults' in i
}
var pr = class {
        constructor() {
            ;(this.controllers = new He(gt, 'datasets', !0)),
                (this.elements = new He(pt, 'elements')),
                (this.plugins = new He(Object, 'plugins')),
                (this.scales = new He(be, 'scales')),
                (this._typedRegistries = [
                    this.controllers,
                    this.scales,
                    this.elements,
                ])
        }
        add(...t) {
            this._each('register', t)
        }
        remove(...t) {
            this._each('unregister', t)
        }
        addControllers(...t) {
            this._each('register', t, this.controllers)
        }
        addElements(...t) {
            this._each('register', t, this.elements)
        }
        addPlugins(...t) {
            this._each('register', t, this.plugins)
        }
        addScales(...t) {
            this._each('register', t, this.scales)
        }
        getController(t) {
            return this._get(t, this.controllers, 'controller')
        }
        getElement(t) {
            return this._get(t, this.elements, 'element')
        }
        getPlugin(t) {
            return this._get(t, this.plugins, 'plugin')
        }
        getScale(t) {
            return this._get(t, this.scales, 'scale')
        }
        removeControllers(...t) {
            this._each('unregister', t, this.controllers)
        }
        removeElements(...t) {
            this._each('unregister', t, this.elements)
        }
        removePlugins(...t) {
            this._each('unregister', t, this.plugins)
        }
        removeScales(...t) {
            this._each('unregister', t, this.scales)
        }
        _each(t, e, s) {
            ;[...e].forEach((n) => {
                let r = s || this._getRegistryForType(n)
                s || r.isForType(n) || (r === this.plugins && n.id)
                    ? this._exec(t, r, n)
                    : V(n, (o) => {
                          let a = s || this._getRegistryForType(o)
                          this._exec(t, a, o)
                      })
            })
        }
        _exec(t, e, s) {
            let n = vs(t)
            $(s['before' + n], [], s), e[t](s), $(s['after' + n], [], s)
        }
        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                let s = this._typedRegistries[e]
                if (s.isForType(t)) return s
            }
            return this.plugins
        }
        _get(t, e, s) {
            let n = e.get(t)
            if (n === void 0)
                throw new Error('"' + t + '" is not a registered ' + s + '.')
            return n
        }
    },
    Pt = new pr(),
    Ze = class extends gt {
        update(t) {
            let e = this._cachedMeta,
                { data: s = [] } = e,
                n = this.chart._animationsDisabled,
                { start: r, count: o } = zn(e, s, n)
            if (
                ((this._drawStart = r),
                (this._drawCount = o),
                Vn(e) && ((r = 0), (o = s.length)),
                this.options.showLine)
            ) {
                let { dataset: a, _dataset: l } = e
                ;(a._chart = this.chart),
                    (a._datasetIndex = this.index),
                    (a._decimated = !!l._decimated),
                    (a.points = s)
                let c = this.resolveDatasetElementOptions(t)
                ;(c.segment = this.options.segment),
                    this.updateElement(
                        a,
                        void 0,
                        { animated: !n, options: c },
                        t,
                    )
            }
            this.updateElements(s, r, o, t)
        }
        addElements() {
            let { showLine: t } = this.options
            !this.datasetElementType &&
                t &&
                (this.datasetElementType = Pt.getElement('line')),
                super.addElements()
        }
        updateElements(t, e, s, n) {
            let r = n === 'reset',
                {
                    iScale: o,
                    vScale: a,
                    _stacked: l,
                    _dataset: c,
                } = this._cachedMeta,
                h = this.resolveDataElementOptions(e, n),
                u = this.getSharedOptions(h),
                d = this.includeOptions(n, u),
                f = o.axis,
                m = a.axis,
                { spanGaps: g, segment: p } = this.options,
                y = ge(g) ? g : Number.POSITIVE_INFINITY,
                b = this.chart._animationsDisabled || r || n === 'none',
                _ = e > 0 && this.getParsed(e - 1)
            for (let w = e; w < e + s; ++w) {
                let x = t[w],
                    S = this.getParsed(w),
                    k = b ? x : {},
                    v = P(S[m]),
                    T = (k[f] = o.getPixelForValue(S[f], w)),
                    C = (k[m] =
                        r || v
                            ? a.getBasePixel()
                            : a.getPixelForValue(
                                  l ? this.applyStack(a, S, l) : S[m],
                                  w,
                              ))
                ;(k.skip = isNaN(T) || isNaN(C) || v),
                    (k.stop = w > 0 && Math.abs(S[f] - _[f]) > y),
                    p && ((k.parsed = S), (k.raw = c.data[w])),
                    d &&
                        (k.options =
                            u ||
                            this.resolveDataElementOptions(
                                w,
                                x.active ? 'active' : n,
                            )),
                    b || this.updateElement(x, w, k, n),
                    (_ = S)
            }
            this.updateSharedOptions(u, n, h)
        }
        getMaxOverflow() {
            let t = this._cachedMeta,
                e = t.data || []
            if (!this.options.showLine) {
                let a = 0
                for (let l = e.length - 1; l >= 0; --l)
                    a = Math.max(
                        a,
                        e[l].size(this.resolveDataElementOptions(l)) / 2,
                    )
                return a > 0 && a
            }
            let s = t.dataset,
                n = (s.options && s.options.borderWidth) || 0
            if (!e.length) return n
            let r = e[0].size(this.resolveDataElementOptions(0)),
                o = e[e.length - 1].size(
                    this.resolveDataElementOptions(e.length - 1),
                )
            return Math.max(n, r, o) / 2
        }
    }
Ze.id = 'scatter'
Ze.defaults = {
    datasetElementType: !1,
    dataElementType: 'point',
    showLine: !1,
    fill: !1,
}
Ze.overrides = {
    interaction: { mode: 'point' },
    plugins: {
        tooltip: {
            callbacks: {
                title() {
                    return ''
                },
                label(i) {
                    return '(' + i.label + ', ' + i.formattedValue + ')'
                },
            },
        },
    },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
}
var Ou = Object.freeze({
    __proto__: null,
    BarController: Be,
    BubbleController: $e,
    DoughnutController: ne,
    LineController: je,
    PolarAreaController: Ue,
    PieController: Ci,
    RadarController: Ye,
    ScatterController: Ze,
})
function ye() {
    throw new Error(
        'This method is not implemented: Check that a complete date adapter is provided.',
    )
}
var Fi = class {
    constructor(t) {
        this.options = t || {}
    }
    init(t) {}
    formats() {
        return ye()
    }
    parse(t, e) {
        return ye()
    }
    format(t, e) {
        return ye()
    }
    add(t, e, s) {
        return ye()
    }
    diff(t, e, s) {
        return ye()
    }
    startOf(t, e, s) {
        return ye()
    }
    endOf(t, e) {
        return ye()
    }
}
Fi.override = function (i) {
    Object.assign(Fi.prototype, i)
}
var Or = { _date: Fi }
function Du(i, t, e, s) {
    let { controller: n, data: r, _sorted: o } = i,
        a = n._cachedMeta.iScale
    if (a && t === a.axis && t !== 'r' && o && r.length) {
        let l = a._reversePixels ? Po : Ct
        if (s) {
            if (n._sharedOptions) {
                let c = r[0],
                    h = typeof c.getRange == 'function' && c.getRange(t)
                if (h) {
                    let u = l(r, t, e - h),
                        d = l(r, t, e + h)
                    return { lo: u.lo, hi: d.hi }
                }
            }
        } else return l(r, t, e)
    }
    return { lo: 0, hi: r.length - 1 }
}
function zi(i, t, e, s, n) {
    let r = i.getSortedVisibleDatasetMetas(),
        o = e[t]
    for (let a = 0, l = r.length; a < l; ++a) {
        let { index: c, data: h } = r[a],
            { lo: u, hi: d } = Du(r[a], t, o, n)
        for (let f = u; f <= d; ++f) {
            let m = h[f]
            m.skip || s(m, c, f)
        }
    }
}
function Eu(i) {
    let t = i.indexOf('x') !== -1,
        e = i.indexOf('y') !== -1
    return function (s, n) {
        let r = t ? Math.abs(s.x - n.x) : 0,
            o = e ? Math.abs(s.y - n.y) : 0
        return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
    }
}
function lr(i, t, e, s, n) {
    let r = []
    return (
        (!n && !i.isPointInArea(t)) ||
            zi(
                i,
                e,
                t,
                function (a, l, c) {
                    ;(!n && !Fe(a, i.chartArea, 0)) ||
                        (a.inRange(t.x, t.y, s) &&
                            r.push({ element: a, datasetIndex: l, index: c }))
                },
                !0,
            ),
        r
    )
}
function Iu(i, t, e, s) {
    let n = []
    function r(o, a, l) {
        let { startAngle: c, endAngle: h } = o.getProps(
                ['startAngle', 'endAngle'],
                s,
            ),
            { angle: u } = Ln(o, { x: t.x, y: t.y })
        Ne(u, c, h) && n.push({ element: o, datasetIndex: a, index: l })
    }
    return zi(i, e, t, r), n
}
function Cu(i, t, e, s, n, r) {
    let o = [],
        a = Eu(e),
        l = Number.POSITIVE_INFINITY
    function c(h, u, d) {
        let f = h.inRange(t.x, t.y, n)
        if (s && !f) return
        let m = h.getCenterPoint(n)
        if (!(!!r || i.isPointInArea(m)) && !f) return
        let p = a(t, m)
        p < l
            ? ((o = [{ element: h, datasetIndex: u, index: d }]), (l = p))
            : p === l && o.push({ element: h, datasetIndex: u, index: d })
    }
    return zi(i, e, t, c), o
}
function cr(i, t, e, s, n, r) {
    return !r && !i.isPointInArea(t)
        ? []
        : e === 'r' && !s
          ? Iu(i, t, e, n)
          : Cu(i, t, e, s, n, r)
}
function _a(i, t, e, s, n) {
    let r = [],
        o = e === 'x' ? 'inXRange' : 'inYRange',
        a = !1
    return (
        zi(i, e, t, (l, c, h) => {
            l[o](t[e], n) &&
                (r.push({ element: l, datasetIndex: c, index: h }),
                (a = a || l.inRange(t.x, t.y, n)))
        }),
        s && !a ? [] : r
    )
}
var Fu = {
        evaluateInteractionItems: zi,
        modes: {
            index(i, t, e, s) {
                let n = ee(t, i),
                    r = e.axis || 'x',
                    o = e.includeInvisible || !1,
                    a = e.intersect ? lr(i, n, r, s, o) : cr(i, n, r, !1, s, o),
                    l = []
                return a.length
                    ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
                          let h = a[0].index,
                              u = c.data[h]
                          u &&
                              !u.skip &&
                              l.push({
                                  element: u,
                                  datasetIndex: c.index,
                                  index: h,
                              })
                      }),
                      l)
                    : []
            },
            dataset(i, t, e, s) {
                let n = ee(t, i),
                    r = e.axis || 'xy',
                    o = e.includeInvisible || !1,
                    a = e.intersect ? lr(i, n, r, s, o) : cr(i, n, r, !1, s, o)
                if (a.length > 0) {
                    let l = a[0].datasetIndex,
                        c = i.getDatasetMeta(l).data
                    a = []
                    for (let h = 0; h < c.length; ++h)
                        a.push({ element: c[h], datasetIndex: l, index: h })
                }
                return a
            },
            point(i, t, e, s) {
                let n = ee(t, i),
                    r = e.axis || 'xy',
                    o = e.includeInvisible || !1
                return lr(i, n, r, s, o)
            },
            nearest(i, t, e, s) {
                let n = ee(t, i),
                    r = e.axis || 'xy',
                    o = e.includeInvisible || !1
                return cr(i, n, r, e.intersect, s, o)
            },
            x(i, t, e, s) {
                let n = ee(t, i)
                return _a(i, n, 'x', e.intersect, s)
            },
            y(i, t, e, s) {
                let n = ee(t, i)
                return _a(i, n, 'y', e.intersect, s)
            },
        },
    },
    el = ['left', 'top', 'right', 'bottom']
function vi(i, t) {
    return i.filter((e) => e.pos === t)
}
function wa(i, t) {
    return i.filter((e) => el.indexOf(e.pos) === -1 && e.box.axis === t)
}
function Oi(i, t) {
    return i.sort((e, s) => {
        let n = t ? s : e,
            r = t ? e : s
        return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
    })
}
function Au(i) {
    let t = [],
        e,
        s,
        n,
        r,
        o,
        a
    for (e = 0, s = (i || []).length; e < s; ++e)
        (n = i[e]),
            ({
                position: r,
                options: { stack: o, stackWeight: a = 1 },
            } = n),
            t.push({
                index: e,
                box: n,
                pos: r,
                horizontal: n.isHorizontal(),
                weight: n.weight,
                stack: o && r + o,
                stackWeight: a,
            })
    return t
}
function Lu(i) {
    let t = {}
    for (let e of i) {
        let { stack: s, pos: n, stackWeight: r } = e
        if (!s || !el.includes(n)) continue
        let o = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 })
        o.count++, (o.weight += r)
    }
    return t
}
function Pu(i, t) {
    let e = Lu(i),
        { vBoxMaxWidth: s, hBoxMaxHeight: n } = t,
        r,
        o,
        a
    for (r = 0, o = i.length; r < o; ++r) {
        a = i[r]
        let { fullSize: l } = a.box,
            c = e[a.stack],
            h = c && a.stackWeight / c.weight
        a.horizontal
            ? ((a.width = h ? h * s : l && t.availableWidth), (a.height = n))
            : ((a.width = s), (a.height = h ? h * n : l && t.availableHeight))
    }
    return e
}
function Nu(i) {
    let t = Au(i),
        e = Oi(
            t.filter((c) => c.box.fullSize),
            !0,
        ),
        s = Oi(vi(t, 'left'), !0),
        n = Oi(vi(t, 'right')),
        r = Oi(vi(t, 'top'), !0),
        o = Oi(vi(t, 'bottom')),
        a = wa(t, 'x'),
        l = wa(t, 'y')
    return {
        fullSize: e,
        leftAndTop: s.concat(r),
        rightAndBottom: n.concat(l).concat(o).concat(a),
        chartArea: vi(t, 'chartArea'),
        vertical: s.concat(n).concat(l),
        horizontal: r.concat(o).concat(a),
    }
}
function Sa(i, t, e, s) {
    return Math.max(i[e], t[e]) + Math.max(i[s], t[s])
}
function il(i, t) {
    ;(i.top = Math.max(i.top, t.top)),
        (i.left = Math.max(i.left, t.left)),
        (i.bottom = Math.max(i.bottom, t.bottom)),
        (i.right = Math.max(i.right, t.right))
}
function Ru(i, t, e, s) {
    let { pos: n, box: r } = e,
        o = i.maxPadding
    if (!F(n)) {
        e.size && (i[n] -= e.size)
        let u = s[e.stack] || { size: 0, count: 1 }
        ;(u.size = Math.max(u.size, e.horizontal ? r.height : r.width)),
            (e.size = u.size / u.count),
            (i[n] += e.size)
    }
    r.getPadding && il(o, r.getPadding())
    let a = Math.max(0, t.outerWidth - Sa(o, i, 'left', 'right')),
        l = Math.max(0, t.outerHeight - Sa(o, i, 'top', 'bottom')),
        c = a !== i.w,
        h = l !== i.h
    return (
        (i.w = a),
        (i.h = l),
        e.horizontal ? { same: c, other: h } : { same: h, other: c }
    )
}
function Wu(i) {
    let t = i.maxPadding
    function e(s) {
        let n = Math.max(t[s] - i[s], 0)
        return (i[s] += n), n
    }
    ;(i.y += e('top')), (i.x += e('left')), e('right'), e('bottom')
}
function zu(i, t) {
    let e = t.maxPadding
    function s(n) {
        let r = { left: 0, top: 0, right: 0, bottom: 0 }
        return (
            n.forEach((o) => {
                r[o] = Math.max(t[o], e[o])
            }),
            r
        )
    }
    return s(i ? ['left', 'right'] : ['top', 'bottom'])
}
function Ei(i, t, e, s) {
    let n = [],
        r,
        o,
        a,
        l,
        c,
        h
    for (r = 0, o = i.length, c = 0; r < o; ++r) {
        ;(a = i[r]),
            (l = a.box),
            l.update(a.width || t.w, a.height || t.h, zu(a.horizontal, t))
        let { same: u, other: d } = Ru(t, e, a, s)
        ;(c |= u && n.length), (h = h || d), l.fullSize || n.push(a)
    }
    return (c && Ei(n, t, e, s)) || h
}
function Rs(i, t, e, s, n) {
    ;(i.top = e),
        (i.left = t),
        (i.right = t + s),
        (i.bottom = e + n),
        (i.width = s),
        (i.height = n)
}
function ka(i, t, e, s) {
    let n = e.padding,
        { x: r, y: o } = t
    for (let a of i) {
        let l = a.box,
            c = s[a.stack] || { count: 1, placed: 0, weight: 1 },
            h = a.stackWeight / c.weight || 1
        if (a.horizontal) {
            let u = t.w * h,
                d = c.size || l.height
            dt(c.start) && (o = c.start),
                l.fullSize
                    ? Rs(l, n.left, o, e.outerWidth - n.right - n.left, d)
                    : Rs(l, t.left + c.placed, o, u, d),
                (c.start = o),
                (c.placed += u),
                (o = l.bottom)
        } else {
            let u = t.h * h,
                d = c.size || l.width
            dt(c.start) && (r = c.start),
                l.fullSize
                    ? Rs(l, r, n.top, d, e.outerHeight - n.bottom - n.top)
                    : Rs(l, r, t.top + c.placed, d, u),
                (c.start = r),
                (c.placed += u),
                (r = l.right)
        }
    }
    ;(t.x = r), (t.y = o)
}
A.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
})
var ot = {
        addBox(i, t) {
            i.boxes || (i.boxes = []),
                (t.fullSize = t.fullSize || !1),
                (t.position = t.position || 'top'),
                (t.weight = t.weight || 0),
                (t._layers =
                    t._layers ||
                    function () {
                        return [
                            {
                                z: 0,
                                draw(e) {
                                    t.draw(e)
                                },
                            },
                        ]
                    }),
                i.boxes.push(t)
        },
        removeBox(i, t) {
            let e = i.boxes ? i.boxes.indexOf(t) : -1
            e !== -1 && i.boxes.splice(e, 1)
        },
        configure(i, t, e) {
            ;(t.fullSize = e.fullSize),
                (t.position = e.position),
                (t.weight = e.weight)
        },
        update(i, t, e, s) {
            if (!i) return
            let n = rt(i.options.layout.padding),
                r = Math.max(t - n.width, 0),
                o = Math.max(e - n.height, 0),
                a = Nu(i.boxes),
                l = a.vertical,
                c = a.horizontal
            V(i.boxes, (g) => {
                typeof g.beforeLayout == 'function' && g.beforeLayout()
            })
            let h =
                    l.reduce(
                        (g, p) =>
                            p.box.options && p.box.options.display === !1
                                ? g
                                : g + 1,
                        0,
                    ) || 1,
                u = Object.freeze({
                    outerWidth: t,
                    outerHeight: e,
                    padding: n,
                    availableWidth: r,
                    availableHeight: o,
                    vBoxMaxWidth: r / 2 / h,
                    hBoxMaxHeight: o / 2,
                }),
                d = Object.assign({}, n)
            il(d, rt(s))
            let f = Object.assign(
                    { maxPadding: d, w: r, h: o, x: n.left, y: n.top },
                    n,
                ),
                m = Pu(l.concat(c), u)
            Ei(a.fullSize, f, u, m),
                Ei(l, f, u, m),
                Ei(c, f, u, m) && Ei(l, f, u, m),
                Wu(f),
                ka(a.leftAndTop, f, u, m),
                (f.x += f.w),
                (f.y += f.h),
                ka(a.rightAndBottom, f, u, m),
                (i.chartArea = {
                    left: f.left,
                    top: f.top,
                    right: f.left + f.w,
                    bottom: f.top + f.h,
                    height: f.h,
                    width: f.w,
                }),
                V(a.chartArea, (g) => {
                    let p = g.box
                    Object.assign(p, i.chartArea),
                        p.update(f.w, f.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        })
                })
        },
    },
    js = class {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1
        }
        addEventListener(t, e, s) {}
        removeEventListener(t, e, s) {}
        getDevicePixelRatio() {
            return 1
        }
        getMaximumSize(t, e, s, n) {
            return (
                (e = Math.max(0, e || t.width)),
                (s = s || t.height),
                { width: e, height: Math.max(0, n ? Math.floor(e / n) : s) }
            )
        }
        isAttached(t) {
            return !0
        }
        updateConfig(t) {}
    },
    yr = class extends js {
        acquireContext(t) {
            return (t && t.getContext && t.getContext('2d')) || null
        }
        updateConfig(t) {
            t.options.animation = !1
        }
    },
    Bs = '$chartjs',
    Vu = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout',
    },
    Ma = (i) => i === null || i === ''
function Hu(i, t) {
    let e = i.style,
        s = i.getAttribute('height'),
        n = i.getAttribute('width')
    if (
        ((i[Bs] = {
            initial: {
                height: s,
                width: n,
                style: { display: e.display, height: e.height, width: e.width },
            },
        }),
        (e.display = e.display || 'block'),
        (e.boxSizing = e.boxSizing || 'border-box'),
        Ma(n))
    ) {
        let r = tr(i, 'width')
        r !== void 0 && (i.width = r)
    }
    if (Ma(s))
        if (i.style.height === '') i.height = i.width / (t || 2)
        else {
            let r = tr(i, 'height')
            r !== void 0 && (i.height = r)
        }
    return i
}
var sl = ia ? { passive: !0 } : !1
function Bu(i, t, e) {
    i.addEventListener(t, e, sl)
}
function $u(i, t, e) {
    i.canvas.removeEventListener(t, e, sl)
}
function ju(i, t) {
    let e = Vu[i.type] || i.type,
        { x: s, y: n } = ee(i, t)
    return {
        type: e,
        chart: t,
        native: i,
        x: s !== void 0 ? s : null,
        y: n !== void 0 ? n : null,
    }
}
function Us(i, t) {
    for (let e of i) if (e === t || e.contains(t)) return !0
}
function Uu(i, t, e) {
    let s = i.canvas,
        n = new MutationObserver((r) => {
            let o = !1
            for (let a of r)
                (o = o || Us(a.addedNodes, s)),
                    (o = o && !Us(a.removedNodes, s))
            o && e()
        })
    return n.observe(document, { childList: !0, subtree: !0 }), n
}
function Yu(i, t, e) {
    let s = i.canvas,
        n = new MutationObserver((r) => {
            let o = !1
            for (let a of r)
                (o = o || Us(a.removedNodes, s)),
                    (o = o && !Us(a.addedNodes, s))
            o && e()
        })
    return n.observe(document, { childList: !0, subtree: !0 }), n
}
var Ai = new Map(),
    Ta = 0
function nl() {
    let i = window.devicePixelRatio
    i !== Ta &&
        ((Ta = i),
        Ai.forEach((t, e) => {
            e.currentDevicePixelRatio !== i && t()
        }))
}
function Zu(i, t) {
    Ai.size || window.addEventListener('resize', nl), Ai.set(i, t)
}
function qu(i) {
    Ai.delete(i), Ai.size || window.removeEventListener('resize', nl)
}
function Gu(i, t, e) {
    let s = i.canvas,
        n = s && Ls(s)
    if (!n) return
    let r = Wn((a, l) => {
            let c = n.clientWidth
            e(a, l), c < n.clientWidth && e()
        }, window),
        o = new ResizeObserver((a) => {
            let l = a[0],
                c = l.contentRect.width,
                h = l.contentRect.height
            ;(c === 0 && h === 0) || r(c, h)
        })
    return o.observe(n), Zu(i, r), o
}
function hr(i, t, e) {
    e && e.disconnect(), t === 'resize' && qu(i)
}
function Xu(i, t, e) {
    let s = i.canvas,
        n = Wn(
            (r) => {
                i.ctx !== null && e(ju(r, i))
            },
            i,
            (r) => {
                let o = r[0]
                return [o, o.offsetX, o.offsetY]
            },
        )
    return Bu(s, t, n), n
}
var br = class extends js {
    acquireContext(t, e) {
        let s = t && t.getContext && t.getContext('2d')
        return s && s.canvas === t ? (Hu(t, e), s) : null
    }
    releaseContext(t) {
        let e = t.canvas
        if (!e[Bs]) return !1
        let s = e[Bs].initial
        ;['height', 'width'].forEach((r) => {
            let o = s[r]
            P(o) ? e.removeAttribute(r) : e.setAttribute(r, o)
        })
        let n = s.style || {}
        return (
            Object.keys(n).forEach((r) => {
                e.style[r] = n[r]
            }),
            (e.width = e.width),
            delete e[Bs],
            !0
        )
    }
    addEventListener(t, e, s) {
        this.removeEventListener(t, e)
        let n = t.$proxies || (t.$proxies = {}),
            o = { attach: Uu, detach: Yu, resize: Gu }[e] || Xu
        n[e] = o(t, e, s)
    }
    removeEventListener(t, e) {
        let s = t.$proxies || (t.$proxies = {}),
            n = s[e]
        if (!n) return
        ;(({ attach: hr, detach: hr, resize: hr })[e] || $u)(t, e, n),
            (s[e] = void 0)
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio
    }
    getMaximumSize(t, e, s, n) {
        return ea(t, e, s, n)
    }
    isAttached(t) {
        let e = Ls(t)
        return !!(e && e.isConnected)
    }
}
function Ku(i) {
    return !Jn() ||
        (typeof OffscreenCanvas < 'u' && i instanceof OffscreenCanvas)
        ? yr
        : br
}
var xr = class {
    constructor() {
        this._init = []
    }
    notify(t, e, s, n) {
        e === 'beforeInit' &&
            ((this._init = this._createDescriptors(t, !0)),
            this._notify(this._init, t, 'install'))
        let r = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            o = this._notify(r, t, e, s)
        return (
            e === 'afterDestroy' &&
                (this._notify(r, t, 'stop'),
                this._notify(this._init, t, 'uninstall')),
            o
        )
    }
    _notify(t, e, s, n) {
        n = n || {}
        for (let r of t) {
            let o = r.plugin,
                a = o[s],
                l = [e, n, r.options]
            if ($(a, l, o) === !1 && n.cancelable) return !1
        }
        return !0
    }
    invalidate() {
        P(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0))
    }
    _descriptors(t) {
        if (this._cache) return this._cache
        let e = (this._cache = this._createDescriptors(t))
        return this._notifyStateChanges(t), e
    }
    _createDescriptors(t, e) {
        let s = t && t.config,
            n = E(s.options && s.options.plugins, {}),
            r = Ju(s)
        return n === !1 && !e ? [] : td(t, r, n, e)
    }
    _notifyStateChanges(t) {
        let e = this._oldCache || [],
            s = this._cache,
            n = (r, o) =>
                r.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id))
        this._notify(n(e, s), t, 'stop'), this._notify(n(s, e), t, 'start')
    }
}
function Ju(i) {
    let t = {},
        e = [],
        s = Object.keys(Pt.plugins.items)
    for (let r = 0; r < s.length; r++) e.push(Pt.getPlugin(s[r]))
    let n = i.plugins || []
    for (let r = 0; r < n.length; r++) {
        let o = n[r]
        e.indexOf(o) === -1 && (e.push(o), (t[o.id] = !0))
    }
    return { plugins: e, localIds: t }
}
function Qu(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i
}
function td(i, { plugins: t, localIds: e }, s, n) {
    let r = [],
        o = i.getContext()
    for (let a of t) {
        let l = a.id,
            c = Qu(s[l], n)
        c !== null &&
            r.push({
                plugin: a,
                options: ed(i.config, { plugin: a, local: e[l] }, c, o),
            })
    }
    return r
}
function ed(i, { plugin: t, local: e }, s, n) {
    let r = i.pluginScopeKeys(t),
        o = i.getOptionScopes(s, r)
    return (
        e && t.defaults && o.push(t.defaults),
        i.createResolver(o, n, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
        })
    )
}
function _r(i, t) {
    let e = A.datasets[i] || {}
    return (
        ((t.datasets || {})[i] || {}).indexAxis ||
        t.indexAxis ||
        e.indexAxis ||
        'x'
    )
}
function id(i, t) {
    let e = i
    return (
        i === '_index_'
            ? (e = t)
            : i === '_value_' && (e = t === 'x' ? 'y' : 'x'),
        e
    )
}
function sd(i, t) {
    return i === t ? '_index_' : '_value_'
}
function nd(i) {
    if (i === 'top' || i === 'bottom') return 'x'
    if (i === 'left' || i === 'right') return 'y'
}
function wr(i, t) {
    return i === 'x' || i === 'y'
        ? i
        : t.axis || nd(t.position) || i.charAt(0).toLowerCase()
}
function rd(i, t) {
    let e = Kt[i.type] || { scales: {} },
        s = t.scales || {},
        n = _r(i.type, t),
        r = Object.create(null),
        o = Object.create(null)
    return (
        Object.keys(s).forEach((a) => {
            let l = s[a]
            if (!F(l))
                return console.error(
                    `Invalid scale configuration for scale: ${a}`,
                )
            if (l._proxy)
                return console.warn(
                    `Ignoring resolver passed as options for scale: ${a}`,
                )
            let c = wr(a, l),
                h = sd(c, n),
                u = e.scales || {}
            ;(r[c] = r[c] || a),
                (o[a] = Le(Object.create(null), [{ axis: c }, l, u[c], u[h]]))
        }),
        i.data.datasets.forEach((a) => {
            let l = a.type || i.type,
                c = a.indexAxis || _r(l, t),
                u = (Kt[l] || {}).scales || {}
            Object.keys(u).forEach((d) => {
                let f = id(d, c),
                    m = a[f + 'AxisID'] || r[f] || f
                ;(o[m] = o[m] || Object.create(null)),
                    Le(o[m], [{ axis: f }, s[m], u[d]])
            })
        }),
        Object.keys(o).forEach((a) => {
            let l = o[a]
            Le(l, [A.scales[l.type], A.scale])
        }),
        o
    )
}
function rl(i) {
    let t = i.options || (i.options = {})
    ;(t.plugins = E(t.plugins, {})), (t.scales = rd(i, t))
}
function ol(i) {
    return (
        (i = i || {}),
        (i.datasets = i.datasets || []),
        (i.labels = i.labels || []),
        i
    )
}
function od(i) {
    return (i = i || {}), (i.data = ol(i.data)), rl(i), i
}
var va = new Map(),
    al = new Set()
function Ws(i, t) {
    let e = va.get(i)
    return e || ((e = t()), va.set(i, e), al.add(e)), e
}
var Di = (i, t, e) => {
        let s = Vt(t, e)
        s !== void 0 && i.add(s)
    },
    Sr = class {
        constructor(t) {
            ;(this._config = od(t)),
                (this._scopeCache = new Map()),
                (this._resolverCache = new Map())
        }
        get platform() {
            return this._config.platform
        }
        get type() {
            return this._config.type
        }
        set type(t) {
            this._config.type = t
        }
        get data() {
            return this._config.data
        }
        set data(t) {
            this._config.data = ol(t)
        }
        get options() {
            return this._config.options
        }
        set options(t) {
            this._config.options = t
        }
        get plugins() {
            return this._config.plugins
        }
        update() {
            let t = this._config
            this.clearCache(), rl(t)
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear()
        }
        datasetScopeKeys(t) {
            return Ws(t, () => [[`datasets.${t}`, '']])
        }
        datasetAnimationScopeKeys(t, e) {
            return Ws(`${t}.transition.${e}`, () => [
                [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                [`datasets.${t}`, ''],
            ])
        }
        datasetElementScopeKeys(t, e) {
            return Ws(`${t}-${e}`, () => [
                [
                    `datasets.${t}.elements.${e}`,
                    `datasets.${t}`,
                    `elements.${e}`,
                    '',
                ],
            ])
        }
        pluginScopeKeys(t) {
            let e = t.id,
                s = this.type
            return Ws(`${s}-plugin-${e}`, () => [
                [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
            ])
        }
        _cachedScopes(t, e) {
            let s = this._scopeCache,
                n = s.get(t)
            return (!n || e) && ((n = new Map()), s.set(t, n)), n
        }
        getOptionScopes(t, e, s) {
            let { options: n, type: r } = this,
                o = this._cachedScopes(t, s),
                a = o.get(e)
            if (a) return a
            let l = new Set()
            e.forEach((h) => {
                t && (l.add(t), h.forEach((u) => Di(l, t, u))),
                    h.forEach((u) => Di(l, n, u)),
                    h.forEach((u) => Di(l, Kt[r] || {}, u)),
                    h.forEach((u) => Di(l, A, u)),
                    h.forEach((u) => Di(l, Is, u))
            })
            let c = Array.from(l)
            return (
                c.length === 0 && c.push(Object.create(null)),
                al.has(e) && o.set(e, c),
                c
            )
        }
        chartOptionScopes() {
            let { options: t, type: e } = this
            return [t, Kt[e] || {}, A.datasets[e] || {}, { type: e }, A, Is]
        }
        resolveNamedOptions(t, e, s, n = ['']) {
            let r = { $shared: !0 },
                { resolver: o, subPrefixes: a } = Oa(this._resolverCache, t, n),
                l = o
            if (ld(o, e)) {
                ;(r.$shared = !1), (s = zt(s) ? s() : s)
                let c = this.createResolver(t, s, a)
                l = me(o, s, c)
            }
            for (let c of e) r[c] = l[c]
            return r
        }
        createResolver(t, e, s = [''], n) {
            let { resolver: r } = Oa(this._resolverCache, t, s)
            return F(e) ? me(r, e, void 0, n) : r
        }
    }
function Oa(i, t, e) {
    let s = i.get(t)
    s || ((s = new Map()), i.set(t, s))
    let n = e.join(),
        r = s.get(n)
    return (
        r ||
            ((r = {
                resolver: As(t, e),
                subPrefixes: e.filter(
                    (a) => !a.toLowerCase().includes('hover'),
                ),
            }),
            s.set(n, r)),
        r
    )
}
var ad = (i) =>
    F(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || zt(i[e]), !1)
function ld(i, t) {
    let { isScriptable: e, isIndexable: s } = qn(i)
    for (let n of t) {
        let r = e(n),
            o = s(n),
            a = (o || r) && i[n]
        if ((r && (zt(a) || ad(a))) || (o && B(a))) return !0
    }
    return !1
}
var cd = '3.9.1',
    hd = ['top', 'bottom', 'left', 'right', 'chartArea']
function Da(i, t) {
    return i === 'top' || i === 'bottom' || (hd.indexOf(i) === -1 && t === 'x')
}
function Ea(i, t) {
    return function (e, s) {
        return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i]
    }
}
function Ia(i) {
    let t = i.chart,
        e = t.options.animation
    t.notifyPlugins('afterRender'), $(e && e.onComplete, [i], t)
}
function ud(i) {
    let t = i.chart,
        e = t.options.animation
    $(e && e.onProgress, [i], t)
}
function ll(i) {
    return (
        Jn() && typeof i == 'string'
            ? (i = document.getElementById(i))
            : i && i.length && (i = i[0]),
        i && i.canvas && (i = i.canvas),
        i
    )
}
var Ys = {},
    cl = (i) => {
        let t = ll(i)
        return Object.values(Ys)
            .filter((e) => e.canvas === t)
            .pop()
    }
function dd(i, t, e) {
    let s = Object.keys(i)
    for (let n of s) {
        let r = +n
        if (r >= t) {
            let o = i[n]
            delete i[n], (e > 0 || r > t) && (i[r + e] = o)
        }
    }
}
function fd(i, t, e, s) {
    return !e || i.type === 'mouseout' ? null : s ? t : i
}
var xe = class {
        constructor(t, e) {
            let s = (this.config = new Sr(e)),
                n = ll(t),
                r = cl(n)
            if (r)
                throw new Error(
                    "Canvas is already in use. Chart with ID '" +
                        r.id +
                        "' must be destroyed before the canvas with ID '" +
                        r.canvas.id +
                        "' can be reused.",
                )
            let o = s.createResolver(s.chartOptionScopes(), this.getContext())
            ;(this.platform = new (s.platform || Ku(n))()),
                this.platform.updateConfig(s)
            let a = this.platform.acquireContext(n, o.aspectRatio),
                l = a && a.canvas,
                c = l && l.height,
                h = l && l.width
            if (
                ((this.id = Do()),
                (this.ctx = a),
                (this.canvas = l),
                (this.width = h),
                (this.height = c),
                (this._options = o),
                (this._aspectRatio = this.aspectRatio),
                (this._layers = []),
                (this._metasets = []),
                (this._stacks = void 0),
                (this.boxes = []),
                (this.currentDevicePixelRatio = void 0),
                (this.chartArea = void 0),
                (this._active = []),
                (this._lastEvent = void 0),
                (this._listeners = {}),
                (this._responsiveListeners = void 0),
                (this._sortedMetasets = []),
                (this.scales = {}),
                (this._plugins = new xr()),
                (this.$proxies = {}),
                (this._hiddenIndices = {}),
                (this.attached = !1),
                (this._animationsDisabled = void 0),
                (this.$context = void 0),
                (this._doResize = zo(
                    (u) => this.update(u),
                    o.resizeDelay || 0,
                )),
                (this._dataChanges = []),
                (Ys[this.id] = this),
                !a || !l)
            ) {
                console.error(
                    "Failed to create chart: can't acquire context from the given item",
                )
                return
            }
            Bt.listen(this, 'complete', Ia),
                Bt.listen(this, 'progress', ud),
                this._initialize(),
                this.attached && this.update()
        }
        get aspectRatio() {
            let {
                options: { aspectRatio: t, maintainAspectRatio: e },
                width: s,
                height: n,
                _aspectRatio: r,
            } = this
            return P(t) ? (e && r ? r : n ? s / n : null) : t
        }
        get data() {
            return this.config.data
        }
        set data(t) {
            this.config.data = t
        }
        get options() {
            return this._options
        }
        set options(t) {
            this.config.options = t
        }
        _initialize() {
            return (
                this.notifyPlugins('beforeInit'),
                this.options.responsive
                    ? this.resize()
                    : Qn(this, this.options.devicePixelRatio),
                this.bindEvents(),
                this.notifyPlugins('afterInit'),
                this
            )
        }
        clear() {
            return Un(this.canvas, this.ctx), this
        }
        stop() {
            return Bt.stop(this), this
        }
        resize(t, e) {
            Bt.running(this)
                ? (this._resizeBeforeDraw = { width: t, height: e })
                : this._resize(t, e)
        }
        _resize(t, e) {
            let s = this.options,
                n = this.canvas,
                r = s.maintainAspectRatio && this.aspectRatio,
                o = this.platform.getMaximumSize(n, t, e, r),
                a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
                l = this.width ? 'resize' : 'attach'
            ;(this.width = o.width),
                (this.height = o.height),
                (this._aspectRatio = this.aspectRatio),
                Qn(this, a, !0) &&
                    (this.notifyPlugins('resize', { size: o }),
                    $(s.onResize, [this, o], this),
                    this.attached && this._doResize(l) && this.render())
        }
        ensureScalesHaveIDs() {
            let e = this.options.scales || {}
            V(e, (s, n) => {
                s.id = n
            })
        }
        buildOrUpdateScales() {
            let t = this.options,
                e = t.scales,
                s = this.scales,
                n = Object.keys(s).reduce((o, a) => ((o[a] = !1), o), {}),
                r = []
            e &&
                (r = r.concat(
                    Object.keys(e).map((o) => {
                        let a = e[o],
                            l = wr(o, a),
                            c = l === 'r',
                            h = l === 'x'
                        return {
                            options: a,
                            dposition: c ? 'chartArea' : h ? 'bottom' : 'left',
                            dtype: c
                                ? 'radialLinear'
                                : h
                                  ? 'category'
                                  : 'linear',
                        }
                    }),
                )),
                V(r, (o) => {
                    let a = o.options,
                        l = a.id,
                        c = wr(l, a),
                        h = E(a.type, o.dtype)
                    ;(a.position === void 0 ||
                        Da(a.position, c) !== Da(o.dposition)) &&
                        (a.position = o.dposition),
                        (n[l] = !0)
                    let u = null
                    if (l in s && s[l].type === h) u = s[l]
                    else {
                        let d = Pt.getScale(h)
                        ;(u = new d({
                            id: l,
                            type: h,
                            ctx: this.ctx,
                            chart: this,
                        })),
                            (s[u.id] = u)
                    }
                    u.init(a, t)
                }),
                V(n, (o, a) => {
                    o || delete s[a]
                }),
                V(s, (o) => {
                    ot.configure(this, o, o.options), ot.addBox(this, o)
                })
        }
        _updateMetasets() {
            let t = this._metasets,
                e = this.data.datasets.length,
                s = t.length
            if ((t.sort((n, r) => n.index - r.index), s > e)) {
                for (let n = e; n < s; ++n) this._destroyDatasetMeta(n)
                t.splice(e, s - e)
            }
            this._sortedMetasets = t.slice(0).sort(Ea('order', 'index'))
        }
        _removeUnreferencedMetasets() {
            let {
                _metasets: t,
                data: { datasets: e },
            } = this
            t.length > e.length && delete this._stacks,
                t.forEach((s, n) => {
                    e.filter((r) => r === s._dataset).length === 0 &&
                        this._destroyDatasetMeta(n)
                })
        }
        buildOrUpdateControllers() {
            let t = [],
                e = this.data.datasets,
                s,
                n
            for (
                this._removeUnreferencedMetasets(), s = 0, n = e.length;
                s < n;
                s++
            ) {
                let r = e[s],
                    o = this.getDatasetMeta(s),
                    a = r.type || this.config.type
                if (
                    (o.type &&
                        o.type !== a &&
                        (this._destroyDatasetMeta(s),
                        (o = this.getDatasetMeta(s))),
                    (o.type = a),
                    (o.indexAxis = r.indexAxis || _r(a, this.options)),
                    (o.order = r.order || 0),
                    (o.index = s),
                    (o.label = '' + r.label),
                    (o.visible = this.isDatasetVisible(s)),
                    o.controller)
                )
                    o.controller.updateIndex(s), o.controller.linkScales()
                else {
                    let l = Pt.getController(a),
                        { datasetElementType: c, dataElementType: h } =
                            A.datasets[a]
                    Object.assign(l.prototype, {
                        dataElementType: Pt.getElement(h),
                        datasetElementType: c && Pt.getElement(c),
                    }),
                        (o.controller = new l(this, s)),
                        t.push(o.controller)
                }
            }
            return this._updateMetasets(), t
        }
        _resetElements() {
            V(
                this.data.datasets,
                (t, e) => {
                    this.getDatasetMeta(e).controller.reset()
                },
                this,
            )
        }
        reset() {
            this._resetElements(), this.notifyPlugins('reset')
        }
        update(t) {
            let e = this.config
            e.update()
            let s = (this._options = e.createResolver(
                    e.chartOptionScopes(),
                    this.getContext(),
                )),
                n = (this._animationsDisabled = !s.animation)
            if (
                (this._updateScales(),
                this._checkEventBindings(),
                this._updateHiddenIndices(),
                this._plugins.invalidate(),
                this.notifyPlugins('beforeUpdate', {
                    mode: t,
                    cancelable: !0,
                }) === !1)
            )
                return
            let r = this.buildOrUpdateControllers()
            this.notifyPlugins('beforeElementsUpdate')
            let o = 0
            for (let c = 0, h = this.data.datasets.length; c < h; c++) {
                let { controller: u } = this.getDatasetMeta(c),
                    d = !n && r.indexOf(u) === -1
                u.buildOrUpdateElements(d),
                    (o = Math.max(+u.getMaxOverflow(), o))
            }
            ;(o = this._minPadding = s.layout.autoPadding ? o : 0),
                this._updateLayout(o),
                n ||
                    V(r, (c) => {
                        c.reset()
                    }),
                this._updateDatasets(t),
                this.notifyPlugins('afterUpdate', { mode: t }),
                this._layers.sort(Ea('z', '_idx'))
            let { _active: a, _lastEvent: l } = this
            l
                ? this._eventHandler(l, !0)
                : a.length && this._updateHoverStyles(a, a, !0),
                this.render()
        }
        _updateScales() {
            V(this.scales, (t) => {
                ot.removeBox(this, t)
            }),
                this.ensureScalesHaveIDs(),
                this.buildOrUpdateScales()
        }
        _checkEventBindings() {
            let t = this.options,
                e = new Set(Object.keys(this._listeners)),
                s = new Set(t.events)
            ;(!In(e, s) || !!this._responsiveListeners !== t.responsive) &&
                (this.unbindEvents(), this.bindEvents())
        }
        _updateHiddenIndices() {
            let { _hiddenIndices: t } = this,
                e = this._getUniformDataChanges() || []
            for (let { method: s, start: n, count: r } of e) {
                let o = s === '_removeElements' ? -r : r
                dd(t, n, o)
            }
        }
        _getUniformDataChanges() {
            let t = this._dataChanges
            if (!t || !t.length) return
            this._dataChanges = []
            let e = this.data.datasets.length,
                s = (r) =>
                    new Set(
                        t
                            .filter((o) => o[0] === r)
                            .map((o, a) => a + ',' + o.splice(1).join(',')),
                    ),
                n = s(0)
            for (let r = 1; r < e; r++) if (!In(n, s(r))) return
            return Array.from(n)
                .map((r) => r.split(','))
                .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }))
        }
        _updateLayout(t) {
            if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1)
                return
            ot.update(this, this.width, this.height, t)
            let e = this.chartArea,
                s = e.width <= 0 || e.height <= 0
            ;(this._layers = []),
                V(
                    this.boxes,
                    (n) => {
                        ;(s && n.position === 'chartArea') ||
                            (n.configure && n.configure(),
                            this._layers.push(...n._layers()))
                    },
                    this,
                ),
                this._layers.forEach((n, r) => {
                    n._idx = r
                }),
                this.notifyPlugins('afterLayout')
        }
        _updateDatasets(t) {
            if (
                this.notifyPlugins('beforeDatasetsUpdate', {
                    mode: t,
                    cancelable: !0,
                }) !== !1
            ) {
                for (let e = 0, s = this.data.datasets.length; e < s; ++e)
                    this.getDatasetMeta(e).controller.configure()
                for (let e = 0, s = this.data.datasets.length; e < s; ++e)
                    this._updateDataset(e, zt(t) ? t({ datasetIndex: e }) : t)
                this.notifyPlugins('afterDatasetsUpdate', { mode: t })
            }
        }
        _updateDataset(t, e) {
            let s = this.getDatasetMeta(t),
                n = { meta: s, index: t, mode: e, cancelable: !0 }
            this.notifyPlugins('beforeDatasetUpdate', n) !== !1 &&
                (s.controller._update(e),
                (n.cancelable = !1),
                this.notifyPlugins('afterDatasetUpdate', n))
        }
        render() {
            this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
                (Bt.has(this)
                    ? this.attached && !Bt.running(this) && Bt.start(this)
                    : (this.draw(), Ia({ chart: this })))
        }
        draw() {
            let t
            if (this._resizeBeforeDraw) {
                let { width: s, height: n } = this._resizeBeforeDraw
                this._resize(s, n), (this._resizeBeforeDraw = null)
            }
            if (
                (this.clear(),
                this.width <= 0 ||
                    this.height <= 0 ||
                    this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
            )
                return
            let e = this._layers
            for (t = 0; t < e.length && e[t].z <= 0; ++t)
                e[t].draw(this.chartArea)
            for (this._drawDatasets(); t < e.length; ++t)
                e[t].draw(this.chartArea)
            this.notifyPlugins('afterDraw')
        }
        _getSortedDatasetMetas(t) {
            let e = this._sortedMetasets,
                s = [],
                n,
                r
            for (n = 0, r = e.length; n < r; ++n) {
                let o = e[n]
                ;(!t || o.visible) && s.push(o)
            }
            return s
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
        }
        _drawDatasets() {
            if (
                this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) ===
                !1
            )
                return
            let t = this.getSortedVisibleDatasetMetas()
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e])
            this.notifyPlugins('afterDatasetsDraw')
        }
        _drawDataset(t) {
            let e = this.ctx,
                s = t._clip,
                n = !s.disabled,
                r = this.chartArea,
                o = { meta: t, index: t.index, cancelable: !0 }
            this.notifyPlugins('beforeDatasetDraw', o) !== !1 &&
                (n &&
                    Si(e, {
                        left: s.left === !1 ? 0 : r.left - s.left,
                        right: s.right === !1 ? this.width : r.right + s.right,
                        top: s.top === !1 ? 0 : r.top - s.top,
                        bottom:
                            s.bottom === !1 ? this.height : r.bottom + s.bottom,
                    }),
                t.controller.draw(),
                n && ki(e),
                (o.cancelable = !1),
                this.notifyPlugins('afterDatasetDraw', o))
        }
        isPointInArea(t) {
            return Fe(t, this.chartArea, this._minPadding)
        }
        getElementsAtEventForMode(t, e, s, n) {
            let r = Fu.modes[e]
            return typeof r == 'function' ? r(this, t, s, n) : []
        }
        getDatasetMeta(t) {
            let e = this.data.datasets[t],
                s = this._metasets,
                n = s.filter((r) => r && r._dataset === e).pop()
            return (
                n ||
                    ((n = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (e && e.order) || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1,
                    }),
                    s.push(n)),
                n
            )
        }
        getContext() {
            return (
                this.$context ||
                (this.$context = Ht(null, { chart: this, type: 'chart' }))
            )
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
            let e = this.data.datasets[t]
            if (!e) return !1
            let s = this.getDatasetMeta(t)
            return typeof s.hidden == 'boolean' ? !s.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
            let s = this.getDatasetMeta(t)
            s.hidden = !e
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t]
        }
        _updateVisibility(t, e, s) {
            let n = s ? 'show' : 'hide',
                r = this.getDatasetMeta(t),
                o = r.controller._resolveAnimations(void 0, n)
            dt(e)
                ? ((r.data[e].hidden = !s), this.update())
                : (this.setDatasetVisibility(t, s),
                  o.update(r, { visible: s }),
                  this.update((a) => (a.datasetIndex === t ? n : void 0)))
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1)
        }
        show(t, e) {
            this._updateVisibility(t, e, !0)
        }
        _destroyDatasetMeta(t) {
            let e = this._metasets[t]
            e && e.controller && e.controller._destroy(),
                delete this._metasets[t]
        }
        _stop() {
            let t, e
            for (
                this.stop(),
                    Bt.remove(this),
                    t = 0,
                    e = this.data.datasets.length;
                t < e;
                ++t
            )
                this._destroyDatasetMeta(t)
        }
        destroy() {
            this.notifyPlugins('beforeDestroy')
            let { canvas: t, ctx: e } = this
            this._stop(),
                this.config.clearCache(),
                t &&
                    (this.unbindEvents(),
                    Un(t, e),
                    this.platform.releaseContext(e),
                    (this.canvas = null),
                    (this.ctx = null)),
                this.notifyPlugins('destroy'),
                delete Ys[this.id],
                this.notifyPlugins('afterDestroy')
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t)
        }
        bindEvents() {
            this.bindUserEvents(),
                this.options.responsive
                    ? this.bindResponsiveEvents()
                    : (this.attached = !0)
        }
        bindUserEvents() {
            let t = this._listeners,
                e = this.platform,
                s = (r, o) => {
                    e.addEventListener(this, r, o), (t[r] = o)
                },
                n = (r, o, a) => {
                    ;(r.offsetX = o), (r.offsetY = a), this._eventHandler(r)
                }
            V(this.options.events, (r) => s(r, n))
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {})
            let t = this._responsiveListeners,
                e = this.platform,
                s = (l, c) => {
                    e.addEventListener(this, l, c), (t[l] = c)
                },
                n = (l, c) => {
                    t[l] && (e.removeEventListener(this, l, c), delete t[l])
                },
                r = (l, c) => {
                    this.canvas && this.resize(l, c)
                },
                o,
                a = () => {
                    n('attach', a),
                        (this.attached = !0),
                        this.resize(),
                        s('resize', r),
                        s('detach', o)
                }
            ;(o = () => {
                ;(this.attached = !1),
                    n('resize', r),
                    this._stop(),
                    this._resize(0, 0),
                    s('attach', a)
            }),
                e.isAttached(this.canvas) ? a() : o()
        }
        unbindEvents() {
            V(this._listeners, (t, e) => {
                this.platform.removeEventListener(this, e, t)
            }),
                (this._listeners = {}),
                V(this._responsiveListeners, (t, e) => {
                    this.platform.removeEventListener(this, e, t)
                }),
                (this._responsiveListeners = void 0)
        }
        updateHoverStyle(t, e, s) {
            let n = s ? 'set' : 'remove',
                r,
                o,
                a,
                l
            for (
                e === 'dataset' &&
                    ((r = this.getDatasetMeta(t[0].datasetIndex)),
                    r.controller['_' + n + 'DatasetHoverStyle']()),
                    a = 0,
                    l = t.length;
                a < l;
                ++a
            ) {
                o = t[a]
                let c = o && this.getDatasetMeta(o.datasetIndex).controller
                c && c[n + 'HoverStyle'](o.element, o.datasetIndex, o.index)
            }
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t) {
            let e = this._active || [],
                s = t.map(({ datasetIndex: r, index: o }) => {
                    let a = this.getDatasetMeta(r)
                    if (!a) throw new Error('No dataset found at index ' + r)
                    return { datasetIndex: r, element: a.data[o], index: o }
                })
            !_i(s, e) &&
                ((this._active = s),
                (this._lastEvent = null),
                this._updateHoverStyles(s, e))
        }
        notifyPlugins(t, e, s) {
            return this._plugins.notify(this, t, e, s)
        }
        _updateHoverStyles(t, e, s) {
            let n = this.options.hover,
                r = (l, c) =>
                    l.filter(
                        (h) =>
                            !c.some(
                                (u) =>
                                    h.datasetIndex === u.datasetIndex &&
                                    h.index === u.index,
                            ),
                    ),
                o = r(e, t),
                a = s ? t : r(t, e)
            o.length && this.updateHoverStyle(o, n.mode, !1),
                a.length && n.mode && this.updateHoverStyle(a, n.mode, !0)
        }
        _eventHandler(t, e) {
            let s = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t),
                },
                n = (o) =>
                    (o.options.events || this.options.events).includes(
                        t.native.type,
                    )
            if (this.notifyPlugins('beforeEvent', s, n) === !1) return
            let r = this._handleEvent(t, e, s.inChartArea)
            return (
                (s.cancelable = !1),
                this.notifyPlugins('afterEvent', s, n),
                (r || s.changed) && this.render(),
                this
            )
        }
        _handleEvent(t, e, s) {
            let { _active: n = [], options: r } = this,
                o = e,
                a = this._getActiveElements(t, n, s, o),
                l = Co(t),
                c = fd(t, this._lastEvent, s, l)
            s &&
                ((this._lastEvent = null),
                $(r.onHover, [t, a, this], this),
                l && $(r.onClick, [t, a, this], this))
            let h = !_i(a, n)
            return (
                (h || e) &&
                    ((this._active = a), this._updateHoverStyles(a, n, e)),
                (this._lastEvent = c),
                h
            )
        }
        _getActiveElements(t, e, s, n) {
            if (t.type === 'mouseout') return []
            if (!s) return e
            let r = this.options.hover
            return this.getElementsAtEventForMode(t, r.mode, r, n)
        }
    },
    Ca = () => V(xe.instances, (i) => i._plugins.invalidate()),
    ie = !0
Object.defineProperties(xe, {
    defaults: { enumerable: ie, value: A },
    instances: { enumerable: ie, value: Ys },
    overrides: { enumerable: ie, value: Kt },
    registry: { enumerable: ie, value: Pt },
    version: { enumerable: ie, value: cd },
    getChart: { enumerable: ie, value: cl },
    register: {
        enumerable: ie,
        value: (...i) => {
            Pt.add(...i), Ca()
        },
    },
    unregister: {
        enumerable: ie,
        value: (...i) => {
            Pt.remove(...i), Ca()
        },
    },
})
function hl(i, t, e) {
    let {
            startAngle: s,
            pixelMargin: n,
            x: r,
            y: o,
            outerRadius: a,
            innerRadius: l,
        } = t,
        c = n / a
    i.beginPath(),
        i.arc(r, o, a, s - c, e + c),
        l > n
            ? ((c = n / l), i.arc(r, o, l, e + c, s - c, !0))
            : i.arc(r, o, n, e + U, s - U),
        i.closePath(),
        i.clip()
}
function md(i) {
    return Fs(i, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
}
function gd(i, t, e, s) {
    let n = md(i.options.borderRadius),
        r = (e - t) / 2,
        o = Math.min(r, (s * t) / 2),
        a = (l) => {
            let c = ((e - Math.min(r, l)) * s) / 2
            return tt(l, 0, Math.min(r, c))
        }
    return {
        outerStart: a(n.outerStart),
        outerEnd: a(n.outerEnd),
        innerStart: tt(n.innerStart, 0, o),
        innerEnd: tt(n.innerEnd, 0, o),
    }
}
function Ve(i, t, e, s) {
    return { x: e + i * Math.cos(t), y: s + i * Math.sin(t) }
}
function kr(i, t, e, s, n, r) {
    let { x: o, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t,
        u = Math.max(t.outerRadius + s + e - c, 0),
        d = h > 0 ? h + s + e + c : 0,
        f = 0,
        m = n - l
    if (s) {
        let D = h > 0 ? h - s : 0,
            J = u > 0 ? u - s : 0,
            X = (D + J) / 2,
            de = X !== 0 ? (m * X) / (X + s) : m
        f = (m - de) / 2
    }
    let g = Math.max(0.001, m * u - e / j) / u,
        p = (m - g) / 2,
        y = l + p + f,
        b = n - p - f,
        {
            outerStart: _,
            outerEnd: w,
            innerStart: x,
            innerEnd: S,
        } = gd(t, d, u, b - y),
        k = u - _,
        v = u - w,
        T = y + _ / k,
        C = b - w / v,
        N = d + x,
        L = d + S,
        K = y + x / N,
        lt = b - S / L
    if ((i.beginPath(), r)) {
        if ((i.arc(o, a, u, T, C), w > 0)) {
            let X = Ve(v, C, o, a)
            i.arc(X.x, X.y, w, C, b + U)
        }
        let D = Ve(L, b, o, a)
        if ((i.lineTo(D.x, D.y), S > 0)) {
            let X = Ve(L, lt, o, a)
            i.arc(X.x, X.y, S, b + U, lt + Math.PI)
        }
        if ((i.arc(o, a, d, b - S / d, y + x / d, !0), x > 0)) {
            let X = Ve(N, K, o, a)
            i.arc(X.x, X.y, x, K + Math.PI, y - U)
        }
        let J = Ve(k, y, o, a)
        if ((i.lineTo(J.x, J.y), _ > 0)) {
            let X = Ve(k, T, o, a)
            i.arc(X.x, X.y, _, y - U, T)
        }
    } else {
        i.moveTo(o, a)
        let D = Math.cos(T) * u + o,
            J = Math.sin(T) * u + a
        i.lineTo(D, J)
        let X = Math.cos(C) * u + o,
            de = Math.sin(C) * u + a
        i.lineTo(X, de)
    }
    i.closePath()
}
function pd(i, t, e, s, n) {
    let { fullCircles: r, startAngle: o, circumference: a } = t,
        l = t.endAngle
    if (r) {
        kr(i, t, e, s, o + H, n)
        for (let c = 0; c < r; ++c) i.fill()
        isNaN(a) || ((l = o + (a % H)), a % H === 0 && (l += H))
    }
    return kr(i, t, e, s, l, n), i.fill(), l
}
function yd(i, t, e) {
    let { x: s, y: n, startAngle: r, pixelMargin: o, fullCircles: a } = t,
        l = Math.max(t.outerRadius - o, 0),
        c = t.innerRadius + o,
        h
    for (
        e && hl(i, t, r + H),
            i.beginPath(),
            i.arc(s, n, c, r + H, r, !0),
            h = 0;
        h < a;
        ++h
    )
        i.stroke()
    for (i.beginPath(), i.arc(s, n, l, r, r + H), h = 0; h < a; ++h) i.stroke()
}
function bd(i, t, e, s, n, r) {
    let { options: o } = t,
        { borderWidth: a, borderJoinStyle: l } = o,
        c = o.borderAlign === 'inner'
    a &&
        (c
            ? ((i.lineWidth = a * 2), (i.lineJoin = l || 'round'))
            : ((i.lineWidth = a), (i.lineJoin = l || 'bevel')),
        t.fullCircles && yd(i, t, c),
        c && hl(i, t, n),
        kr(i, t, e, s, n, r),
        i.stroke())
}
var qe = class extends pt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t)
    }
    inRange(t, e, s) {
        let n = this.getProps(['x', 'y'], s),
            { angle: r, distance: o } = Ln(n, { x: t, y: e }),
            {
                startAngle: a,
                endAngle: l,
                innerRadius: c,
                outerRadius: h,
                circumference: u,
            } = this.getProps(
                [
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference',
                ],
                s,
            ),
            d = this.options.spacing / 2,
            m = E(u, l - a) >= H || Ne(r, a, l),
            g = At(o, c + d, h + d)
        return m && g
    }
    getCenterPoint(t) {
        let {
                x: e,
                y: s,
                startAngle: n,
                endAngle: r,
                innerRadius: o,
                outerRadius: a,
            } = this.getProps(
                [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'circumference',
                ],
                t,
            ),
            { offset: l, spacing: c } = this.options,
            h = (n + r) / 2,
            u = (o + a + c + l) / 2
        return { x: e + Math.cos(h) * u, y: s + Math.sin(h) * u }
    }
    tooltipPosition(t) {
        return this.getCenterPoint(t)
    }
    draw(t) {
        let { options: e, circumference: s } = this,
            n = (e.offset || 0) / 2,
            r = (e.spacing || 0) / 2,
            o = e.circular
        if (
            ((this.pixelMargin = e.borderAlign === 'inner' ? 0.33 : 0),
            (this.fullCircles = s > H ? Math.floor(s / H) : 0),
            s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
        )
            return
        t.save()
        let a = 0
        if (n) {
            a = n / 2
            let c = (this.startAngle + this.endAngle) / 2
            t.translate(Math.cos(c) * a, Math.sin(c) * a),
                this.circumference >= j && (a = n)
        }
        ;(t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor)
        let l = pd(t, this, a, r, o)
        bd(t, this, a, r, l, o), t.restore()
    }
}
qe.id = 'arc'
qe.defaults = {
    borderAlign: 'center',
    borderColor: '#fff',
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
}
qe.defaultRoutes = { backgroundColor: 'backgroundColor' }
function ul(i, t, e = t) {
    ;(i.lineCap = E(e.borderCapStyle, t.borderCapStyle)),
        i.setLineDash(E(e.borderDash, t.borderDash)),
        (i.lineDashOffset = E(e.borderDashOffset, t.borderDashOffset)),
        (i.lineJoin = E(e.borderJoinStyle, t.borderJoinStyle)),
        (i.lineWidth = E(e.borderWidth, t.borderWidth)),
        (i.strokeStyle = E(e.borderColor, t.borderColor))
}
function xd(i, t, e) {
    i.lineTo(e.x, e.y)
}
function _d(i) {
    return i.stepped
        ? Zo
        : i.tension || i.cubicInterpolationMode === 'monotone'
          ? qo
          : xd
}
function dl(i, t, e = {}) {
    let s = i.length,
        { start: n = 0, end: r = s - 1 } = e,
        { start: o, end: a } = t,
        l = Math.max(n, o),
        c = Math.min(r, a),
        h = (n < o && r < o) || (n > a && r > a)
    return {
        count: s,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? s + c - l : c - l,
    }
}
function wd(i, t, e, s) {
    let { points: n, options: r } = t,
        { count: o, start: a, loop: l, ilen: c } = dl(n, e, s),
        h = _d(r),
        { move: u = !0, reverse: d } = s || {},
        f,
        m,
        g
    for (f = 0; f <= c; ++f)
        (m = n[(a + (d ? c - f : f)) % o]),
            !m.skip &&
                (u ? (i.moveTo(m.x, m.y), (u = !1)) : h(i, g, m, d, r.stepped),
                (g = m))
    return l && ((m = n[(a + (d ? c : 0)) % o]), h(i, g, m, d, r.stepped)), !!l
}
function Sd(i, t, e, s) {
    let n = t.points,
        { count: r, start: o, ilen: a } = dl(n, e, s),
        { move: l = !0, reverse: c } = s || {},
        h = 0,
        u = 0,
        d,
        f,
        m,
        g,
        p,
        y,
        b = (w) => (o + (c ? a - w : w)) % r,
        _ = () => {
            g !== p && (i.lineTo(h, p), i.lineTo(h, g), i.lineTo(h, y))
        }
    for (l && ((f = n[b(0)]), i.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
        if (((f = n[b(d)]), f.skip)) continue
        let w = f.x,
            x = f.y,
            S = w | 0
        S === m
            ? (x < g ? (g = x) : x > p && (p = x), (h = (u * h + w) / ++u))
            : (_(), i.lineTo(w, x), (m = S), (u = 0), (g = p = x)),
            (y = x)
    }
    _()
}
function Mr(i) {
    let t = i.options,
        e = t.borderDash && t.borderDash.length
    return !i._decimated &&
        !i._loop &&
        !t.tension &&
        t.cubicInterpolationMode !== 'monotone' &&
        !t.stepped &&
        !e
        ? Sd
        : wd
}
function kd(i) {
    return i.stepped
        ? sa
        : i.tension || i.cubicInterpolationMode === 'monotone'
          ? na
          : qt
}
function Md(i, t, e, s) {
    let n = t._path
    n || ((n = t._path = new Path2D()), t.path(n, e, s) && n.closePath()),
        ul(i, t.options),
        i.stroke(n)
}
function Td(i, t, e, s) {
    let { segments: n, options: r } = t,
        o = Mr(t)
    for (let a of n)
        ul(i, r, a.style),
            i.beginPath(),
            o(i, t, a, { start: e, end: e + s - 1 }) && i.closePath(),
            i.stroke()
}
var vd = typeof Path2D == 'function'
function Od(i, t, e, s) {
    vd && !t.options.segment ? Md(i, t, e, s) : Td(i, t, e, s)
}
var Nt = class extends pt {
    constructor(t) {
        super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t)
    }
    updateControlPoints(t, e) {
        let s = this.options
        if (
            (s.tension || s.cubicInterpolationMode === 'monotone') &&
            !s.stepped &&
            !this._pointsUpdated
        ) {
            let n = s.spanGaps ? this._loop : this._fullLoop
            ta(this._points, s, t, n, e), (this._pointsUpdated = !0)
        }
    }
    set points(t) {
        ;(this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1)
    }
    get points() {
        return this._points
    }
    get segments() {
        return (
            this._segments || (this._segments = oa(this, this.options.segment))
        )
    }
    first() {
        let t = this.segments,
            e = this.points
        return t.length && e[t[0].start]
    }
    last() {
        let t = this.segments,
            e = this.points,
            s = t.length
        return s && e[t[s - 1].end]
    }
    interpolate(t, e) {
        let s = this.options,
            n = t[e],
            r = this.points,
            o = nr(this, { property: e, start: n, end: n })
        if (!o.length) return
        let a = [],
            l = kd(s),
            c,
            h
        for (c = 0, h = o.length; c < h; ++c) {
            let { start: u, end: d } = o[c],
                f = r[u],
                m = r[d]
            if (f === m) {
                a.push(f)
                continue
            }
            let g = Math.abs((n - f[e]) / (m[e] - f[e])),
                p = l(f, m, g, s.stepped)
            ;(p[e] = t[e]), a.push(p)
        }
        return a.length === 1 ? a[0] : a
    }
    pathSegment(t, e, s) {
        return Mr(this)(t, this, e, s)
    }
    path(t, e, s) {
        let n = this.segments,
            r = Mr(this),
            o = this._loop
        ;(e = e || 0), (s = s || this.points.length - e)
        for (let a of n) o &= r(t, this, a, { start: e, end: e + s - 1 })
        return !!o
    }
    draw(t, e, s, n) {
        let r = this.options || {}
        ;(this.points || []).length &&
            r.borderWidth &&
            (t.save(), Od(t, this, s, n), t.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
    }
}
Nt.id = 'line'
Nt.defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
}
Nt.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
}
Nt.descriptors = {
    _scriptable: !0,
    _indexable: (i) => i !== 'borderDash' && i !== 'fill',
}
function Fa(i, t, e, s) {
    let n = i.options,
        { [e]: r } = i.getProps([e], s)
    return Math.abs(t - r) < n.radius + n.hitRadius
}
var Ge = class extends pt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t)
    }
    inRange(t, e, s) {
        let n = this.options,
            { x: r, y: o } = this.getProps(['x', 'y'], s)
        return (
            Math.pow(t - r, 2) + Math.pow(e - o, 2) <
            Math.pow(n.hitRadius + n.radius, 2)
        )
    }
    inXRange(t, e) {
        return Fa(this, t, 'x', e)
    }
    inYRange(t, e) {
        return Fa(this, t, 'y', e)
    }
    getCenterPoint(t) {
        let { x: e, y: s } = this.getProps(['x', 'y'], t)
        return { x: e, y: s }
    }
    size(t) {
        t = t || this.options || {}
        let e = t.radius || 0
        e = Math.max(e, (e && t.hoverRadius) || 0)
        let s = (e && t.borderWidth) || 0
        return (e + s) * 2
    }
    draw(t, e) {
        let s = this.options
        this.skip ||
            s.radius < 0.1 ||
            !Fe(this, e, this.size(s) / 2) ||
            ((t.strokeStyle = s.borderColor),
            (t.lineWidth = s.borderWidth),
            (t.fillStyle = s.backgroundColor),
            Cs(t, s, this.x, this.y))
    }
    getRange() {
        let t = this.options || {}
        return t.radius + t.hitRadius
    }
}
Ge.id = 'point'
Ge.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
}
Ge.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
}
function fl(i, t) {
    let {
            x: e,
            y: s,
            base: n,
            width: r,
            height: o,
        } = i.getProps(['x', 'y', 'base', 'width', 'height'], t),
        a,
        l,
        c,
        h,
        u
    return (
        i.horizontal
            ? ((u = o / 2),
              (a = Math.min(e, n)),
              (l = Math.max(e, n)),
              (c = s - u),
              (h = s + u))
            : ((u = r / 2),
              (a = e - u),
              (l = e + u),
              (c = Math.min(s, n)),
              (h = Math.max(s, n))),
        { left: a, top: c, right: l, bottom: h }
    )
}
function se(i, t, e, s) {
    return i ? 0 : tt(t, e, s)
}
function Dd(i, t, e) {
    let s = i.options.borderWidth,
        n = i.borderSkipped,
        r = Zn(s)
    return {
        t: se(n.top, r.top, 0, e),
        r: se(n.right, r.right, 0, t),
        b: se(n.bottom, r.bottom, 0, e),
        l: se(n.left, r.left, 0, t),
    }
}
function Ed(i, t, e) {
    let { enableBorderRadius: s } = i.getProps(['enableBorderRadius']),
        n = i.options.borderRadius,
        r = te(n),
        o = Math.min(t, e),
        a = i.borderSkipped,
        l = s || F(n)
    return {
        topLeft: se(!l || a.top || a.left, r.topLeft, 0, o),
        topRight: se(!l || a.top || a.right, r.topRight, 0, o),
        bottomLeft: se(!l || a.bottom || a.left, r.bottomLeft, 0, o),
        bottomRight: se(!l || a.bottom || a.right, r.bottomRight, 0, o),
    }
}
function Id(i) {
    let t = fl(i),
        e = t.right - t.left,
        s = t.bottom - t.top,
        n = Dd(i, e / 2, s / 2),
        r = Ed(i, e / 2, s / 2)
    return {
        outer: { x: t.left, y: t.top, w: e, h: s, radius: r },
        inner: {
            x: t.left + n.l,
            y: t.top + n.t,
            w: e - n.l - n.r,
            h: s - n.t - n.b,
            radius: {
                topLeft: Math.max(0, r.topLeft - Math.max(n.t, n.l)),
                topRight: Math.max(0, r.topRight - Math.max(n.t, n.r)),
                bottomLeft: Math.max(0, r.bottomLeft - Math.max(n.b, n.l)),
                bottomRight: Math.max(0, r.bottomRight - Math.max(n.b, n.r)),
            },
        },
    }
}
function ur(i, t, e, s) {
    let n = t === null,
        r = e === null,
        a = i && !(n && r) && fl(i, s)
    return a && (n || At(t, a.left, a.right)) && (r || At(e, a.top, a.bottom))
}
function Cd(i) {
    return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight
}
function Fd(i, t) {
    i.rect(t.x, t.y, t.w, t.h)
}
function dr(i, t, e = {}) {
    let s = i.x !== e.x ? -t : 0,
        n = i.y !== e.y ? -t : 0,
        r = (i.x + i.w !== e.x + e.w ? t : 0) - s,
        o = (i.y + i.h !== e.y + e.h ? t : 0) - n
    return { x: i.x + s, y: i.y + n, w: i.w + r, h: i.h + o, radius: i.radius }
}
var Xe = class extends pt {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t)
    }
    draw(t) {
        let {
                inflateAmount: e,
                options: { borderColor: s, backgroundColor: n },
            } = this,
            { inner: r, outer: o } = Id(this),
            a = Cd(o.radius) ? Re : Fd
        t.save(),
            (o.w !== r.w || o.h !== r.h) &&
                (t.beginPath(),
                a(t, dr(o, e, r)),
                t.clip(),
                a(t, dr(r, -e, o)),
                (t.fillStyle = s),
                t.fill('evenodd')),
            t.beginPath(),
            a(t, dr(r, e)),
            (t.fillStyle = n),
            t.fill(),
            t.restore()
    }
    inRange(t, e, s) {
        return ur(this, t, e, s)
    }
    inXRange(t, e) {
        return ur(this, t, null, e)
    }
    inYRange(t, e) {
        return ur(this, null, t, e)
    }
    getCenterPoint(t) {
        let {
            x: e,
            y: s,
            base: n,
            horizontal: r,
        } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
        return { x: r ? (e + n) / 2 : e, y: r ? s : (s + n) / 2 }
    }
    getRange(t) {
        return t === 'x' ? this.width / 2 : this.height / 2
    }
}
Xe.id = 'bar'
Xe.defaults = {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
}
Xe.defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
}
var Ad = Object.freeze({
    __proto__: null,
    ArcElement: qe,
    LineElement: Nt,
    PointElement: Ge,
    BarElement: Xe,
})
function Ld(i, t, e, s, n) {
    let r = n.samples || s
    if (r >= e) return i.slice(t, t + e)
    let o = [],
        a = (e - 2) / (r - 2),
        l = 0,
        c = t + e - 1,
        h = t,
        u,
        d,
        f,
        m,
        g
    for (o[l++] = i[h], u = 0; u < r - 2; u++) {
        let p = 0,
            y = 0,
            b,
            _ = Math.floor((u + 1) * a) + 1 + t,
            w = Math.min(Math.floor((u + 2) * a) + 1, e) + t,
            x = w - _
        for (b = _; b < w; b++) (p += i[b].x), (y += i[b].y)
        ;(p /= x), (y /= x)
        let S = Math.floor(u * a) + 1 + t,
            k = Math.min(Math.floor((u + 1) * a) + 1, e) + t,
            { x: v, y: T } = i[h]
        for (f = m = -1, b = S; b < k; b++)
            (m =
                0.5 *
                Math.abs((v - p) * (i[b].y - T) - (v - i[b].x) * (y - T))),
                m > f && ((f = m), (d = i[b]), (g = b))
        ;(o[l++] = d), (h = g)
    }
    return (o[l++] = i[c]), o
}
function Pd(i, t, e, s) {
    let n = 0,
        r = 0,
        o,
        a,
        l,
        c,
        h,
        u,
        d,
        f,
        m,
        g,
        p = [],
        y = t + e - 1,
        b = i[t].x,
        w = i[y].x - b
    for (o = t; o < t + e; ++o) {
        ;(a = i[o]), (l = ((a.x - b) / w) * s), (c = a.y)
        let x = l | 0
        if (x === h)
            c < m ? ((m = c), (u = o)) : c > g && ((g = c), (d = o)),
                (n = (r * n + a.x) / ++r)
        else {
            let S = o - 1
            if (!P(u) && !P(d)) {
                let k = Math.min(u, d),
                    v = Math.max(u, d)
                k !== f && k !== S && p.push({ ...i[k], x: n }),
                    v !== f && v !== S && p.push({ ...i[v], x: n })
            }
            o > 0 && S !== f && p.push(i[S]),
                p.push(a),
                (h = x),
                (r = 0),
                (m = g = c),
                (u = d = f = o)
        }
    }
    return p
}
function ml(i) {
    if (i._decimated) {
        let t = i._data
        delete i._decimated,
            delete i._data,
            Object.defineProperty(i, 'data', { value: t })
    }
}
function Aa(i) {
    i.data.datasets.forEach((t) => {
        ml(t)
    })
}
function Nd(i, t) {
    let e = t.length,
        s = 0,
        n,
        { iScale: r } = i,
        { min: o, max: a, minDefined: l, maxDefined: c } = r.getUserBounds()
    return (
        l && (s = tt(Ct(t, r.axis, o).lo, 0, e - 1)),
        c ? (n = tt(Ct(t, r.axis, a).hi + 1, s, e) - s) : (n = e - s),
        { start: s, count: n }
    )
}
var Rd = {
    id: 'decimation',
    defaults: { algorithm: 'min-max', enabled: !1 },
    beforeElementsUpdate: (i, t, e) => {
        if (!e.enabled) {
            Aa(i)
            return
        }
        let s = i.width
        i.data.datasets.forEach((n, r) => {
            let { _data: o, indexAxis: a } = n,
                l = i.getDatasetMeta(r),
                c = o || n.data
            if (
                We([a, i.options.indexAxis]) === 'y' ||
                !l.controller.supportsDecimation
            )
                return
            let h = i.scales[l.xAxisID]
            if ((h.type !== 'linear' && h.type !== 'time') || i.options.parsing)
                return
            let { start: u, count: d } = Nd(l, c),
                f = e.threshold || 4 * s
            if (d <= f) {
                ml(n)
                return
            }
            P(o) &&
                ((n._data = c),
                delete n.data,
                Object.defineProperty(n, 'data', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this._decimated
                    },
                    set: function (g) {
                        this._data = g
                    },
                }))
            let m
            switch (e.algorithm) {
                case 'lttb':
                    m = Ld(c, u, d, s, e)
                    break
                case 'min-max':
                    m = Pd(c, u, d, s)
                    break
                default:
                    throw new Error(
                        `Unsupported decimation algorithm '${e.algorithm}'`,
                    )
            }
            n._decimated = m
        })
    },
    destroy(i) {
        Aa(i)
    },
}
function Wd(i, t, e) {
    let s = i.segments,
        n = i.points,
        r = t.points,
        o = []
    for (let a of s) {
        let { start: l, end: c } = a
        c = Dr(l, c, n)
        let h = Tr(e, n[l], n[c], a.loop)
        if (!t.segments) {
            o.push({ source: a, target: h, start: n[l], end: n[c] })
            continue
        }
        let u = nr(t, h)
        for (let d of u) {
            let f = Tr(e, r[d.start], r[d.end], d.loop),
                m = sr(a, n, f)
            for (let g of m)
                o.push({
                    source: g,
                    target: d,
                    start: { [e]: La(h, f, 'start', Math.max) },
                    end: { [e]: La(h, f, 'end', Math.min) },
                })
        }
    }
    return o
}
function Tr(i, t, e, s) {
    if (s) return
    let n = t[i],
        r = e[i]
    return (
        i === 'angle' && ((n = ct(n)), (r = ct(r))),
        { property: i, start: n, end: r }
    )
}
function zd(i, t) {
    let { x: e = null, y: s = null } = i || {},
        n = t.points,
        r = []
    return (
        t.segments.forEach(({ start: o, end: a }) => {
            a = Dr(o, a, n)
            let l = n[o],
                c = n[a]
            s !== null
                ? (r.push({ x: l.x, y: s }), r.push({ x: c.x, y: s }))
                : e !== null &&
                  (r.push({ x: e, y: l.y }), r.push({ x: e, y: c.y }))
        }),
        r
    )
}
function Dr(i, t, e) {
    for (; t > i; t--) {
        let s = e[t]
        if (!isNaN(s.x) && !isNaN(s.y)) break
    }
    return t
}
function La(i, t, e, s) {
    return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0
}
function gl(i, t) {
    let e = [],
        s = !1
    return (
        B(i) ? ((s = !0), (e = i)) : (e = zd(i, t)),
        e.length
            ? new Nt({
                  points: e,
                  options: { tension: 0 },
                  _loop: s,
                  _fullLoop: s,
              })
            : null
    )
}
function Pa(i) {
    return i && i.fill !== !1
}
function Vd(i, t, e) {
    let n = i[t].fill,
        r = [t],
        o
    if (!e) return n
    for (; n !== !1 && r.indexOf(n) === -1; ) {
        if (!q(n)) return n
        if (((o = i[n]), !o)) return !1
        if (o.visible) return n
        r.push(n), (n = o.fill)
    }
    return !1
}
function Hd(i, t, e) {
    let s = Ud(i)
    if (F(s)) return isNaN(s.value) ? !1 : s
    let n = parseFloat(s)
    return q(n) && Math.floor(n) === n
        ? Bd(s[0], t, n, e)
        : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s
}
function Bd(i, t, e, s) {
    return (
        (i === '-' || i === '+') && (e = t + e),
        e === t || e < 0 || e >= s ? !1 : e
    )
}
function $d(i, t) {
    let e = null
    return (
        i === 'start'
            ? (e = t.bottom)
            : i === 'end'
              ? (e = t.top)
              : F(i)
                ? (e = t.getPixelForValue(i.value))
                : t.getBasePixel && (e = t.getBasePixel()),
        e
    )
}
function jd(i, t, e) {
    let s
    return (
        i === 'start'
            ? (s = e)
            : i === 'end'
              ? (s = t.options.reverse ? t.min : t.max)
              : F(i)
                ? (s = i.value)
                : (s = t.getBaseValue()),
        s
    )
}
function Ud(i) {
    let t = i.options,
        e = t.fill,
        s = E(e && e.target, e)
    return (
        s === void 0 && (s = !!t.backgroundColor),
        s === !1 || s === null ? !1 : s === !0 ? 'origin' : s
    )
}
function Yd(i) {
    let { scale: t, index: e, line: s } = i,
        n = [],
        r = s.segments,
        o = s.points,
        a = Zd(t, e)
    a.push(gl({ x: null, y: t.bottom }, s))
    for (let l = 0; l < r.length; l++) {
        let c = r[l]
        for (let h = c.start; h <= c.end; h++) qd(n, o[h], a)
    }
    return new Nt({ points: n, options: {} })
}
function Zd(i, t) {
    let e = [],
        s = i.getMatchingVisibleMetas('line')
    for (let n = 0; n < s.length; n++) {
        let r = s[n]
        if (r.index === t) break
        r.hidden || e.unshift(r.dataset)
    }
    return e
}
function qd(i, t, e) {
    let s = []
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            { first: o, last: a, point: l } = Gd(r, t, 'x')
        if (!(!l || (o && a))) {
            if (o) s.unshift(l)
            else if ((i.push(l), !a)) break
        }
    }
    i.push(...s)
}
function Gd(i, t, e) {
    let s = i.interpolate(t, e)
    if (!s) return {}
    let n = s[e],
        r = i.segments,
        o = i.points,
        a = !1,
        l = !1
    for (let c = 0; c < r.length; c++) {
        let h = r[c],
            u = o[h.start][e],
            d = o[h.end][e]
        if (At(n, u, d)) {
            ;(a = n === u), (l = n === d)
            break
        }
    }
    return { first: a, last: l, point: s }
}
var Zs = class {
    constructor(t) {
        ;(this.x = t.x), (this.y = t.y), (this.radius = t.radius)
    }
    pathSegment(t, e, s) {
        let { x: n, y: r, radius: o } = this
        return (
            (e = e || { start: 0, end: H }),
            t.arc(n, r, o, e.end, e.start, !0),
            !s.bounds
        )
    }
    interpolate(t) {
        let { x: e, y: s, radius: n } = this,
            r = t.angle
        return { x: e + Math.cos(r) * n, y: s + Math.sin(r) * n, angle: r }
    }
}
function Xd(i) {
    let { chart: t, fill: e, line: s } = i
    if (q(e)) return Kd(t, e)
    if (e === 'stack') return Yd(i)
    if (e === 'shape') return !0
    let n = Jd(i)
    return n instanceof Zs ? n : gl(n, s)
}
function Kd(i, t) {
    let e = i.getDatasetMeta(t)
    return e && i.isDatasetVisible(t) ? e.dataset : null
}
function Jd(i) {
    return (i.scale || {}).getPointPositionForValue ? tf(i) : Qd(i)
}
function Qd(i) {
    let { scale: t = {}, fill: e } = i,
        s = $d(e, t)
    if (q(s)) {
        let n = t.isHorizontal()
        return { x: n ? s : null, y: n ? null : s }
    }
    return null
}
function tf(i) {
    let { scale: t, fill: e } = i,
        s = t.options,
        n = t.getLabels().length,
        r = s.reverse ? t.max : t.min,
        o = jd(e, t, r),
        a = []
    if (s.grid.circular) {
        let l = t.getPointPositionForValue(0, r)
        return new Zs({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(o),
        })
    }
    for (let l = 0; l < n; ++l) a.push(t.getPointPositionForValue(l, o))
    return a
}
function fr(i, t, e) {
    let s = Xd(t),
        { line: n, scale: r, axis: o } = t,
        a = n.options,
        l = a.fill,
        c = a.backgroundColor,
        { above: h = c, below: u = c } = l || {}
    s &&
        n.points.length &&
        (Si(i, e),
        ef(i, {
            line: n,
            target: s,
            above: h,
            below: u,
            area: e,
            scale: r,
            axis: o,
        }),
        ki(i))
}
function ef(i, t) {
    let { line: e, target: s, above: n, below: r, area: o, scale: a } = t,
        l = e._loop ? 'angle' : t.axis
    i.save(),
        l === 'x' &&
            r !== n &&
            (Na(i, s, o.top),
            Ra(i, { line: e, target: s, color: n, scale: a, property: l }),
            i.restore(),
            i.save(),
            Na(i, s, o.bottom)),
        Ra(i, { line: e, target: s, color: r, scale: a, property: l }),
        i.restore()
}
function Na(i, t, e) {
    let { segments: s, points: n } = t,
        r = !0,
        o = !1
    i.beginPath()
    for (let a of s) {
        let { start: l, end: c } = a,
            h = n[l],
            u = n[Dr(l, c, n)]
        r
            ? (i.moveTo(h.x, h.y), (r = !1))
            : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)),
            (o = !!t.pathSegment(i, a, { move: o })),
            o ? i.closePath() : i.lineTo(u.x, e)
    }
    i.lineTo(t.first().x, e), i.closePath(), i.clip()
}
function Ra(i, t) {
    let { line: e, target: s, property: n, color: r, scale: o } = t,
        a = Wd(e, s, n)
    for (let { source: l, target: c, start: h, end: u } of a) {
        let { style: { backgroundColor: d = r } = {} } = l,
            f = s !== !0
        i.save(), (i.fillStyle = d), sf(i, o, f && Tr(n, h, u)), i.beginPath()
        let m = !!e.pathSegment(i, l),
            g
        if (f) {
            m ? i.closePath() : Wa(i, s, u, n)
            let p = !!s.pathSegment(i, c, { move: m, reverse: !0 })
            ;(g = m && p), g || Wa(i, s, h, n)
        }
        i.closePath(), i.fill(g ? 'evenodd' : 'nonzero'), i.restore()
    }
}
function sf(i, t, e) {
    let { top: s, bottom: n } = t.chart.chartArea,
        { property: r, start: o, end: a } = e || {}
    r === 'x' && (i.beginPath(), i.rect(o, s, a - o, n - s), i.clip())
}
function Wa(i, t, e, s) {
    let n = t.interpolate(e, s)
    n && i.lineTo(n.x, n.y)
}
var nf = {
        id: 'filler',
        afterDatasetsUpdate(i, t, e) {
            let s = (i.data.datasets || []).length,
                n = [],
                r,
                o,
                a,
                l
            for (o = 0; o < s; ++o)
                (r = i.getDatasetMeta(o)),
                    (a = r.dataset),
                    (l = null),
                    a &&
                        a.options &&
                        a instanceof Nt &&
                        (l = {
                            visible: i.isDatasetVisible(o),
                            index: o,
                            fill: Hd(a, o, s),
                            chart: i,
                            axis: r.controller.options.indexAxis,
                            scale: r.vScale,
                            line: a,
                        }),
                    (r.$filler = l),
                    n.push(l)
            for (o = 0; o < s; ++o)
                (l = n[o]),
                    !(!l || l.fill === !1) && (l.fill = Vd(n, o, e.propagate))
        },
        beforeDraw(i, t, e) {
            let s = e.drawTime === 'beforeDraw',
                n = i.getSortedVisibleDatasetMetas(),
                r = i.chartArea
            for (let o = n.length - 1; o >= 0; --o) {
                let a = n[o].$filler
                a &&
                    (a.line.updateControlPoints(r, a.axis),
                    s && a.fill && fr(i.ctx, a, r))
            }
        },
        beforeDatasetsDraw(i, t, e) {
            if (e.drawTime !== 'beforeDatasetsDraw') return
            let s = i.getSortedVisibleDatasetMetas()
            for (let n = s.length - 1; n >= 0; --n) {
                let r = s[n].$filler
                Pa(r) && fr(i.ctx, r, i.chartArea)
            }
        },
        beforeDatasetDraw(i, t, e) {
            let s = t.meta.$filler
            !Pa(s) ||
                e.drawTime !== 'beforeDatasetDraw' ||
                fr(i.ctx, s, i.chartArea)
        },
        defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
    },
    za = (i, t) => {
        let { boxHeight: e = t, boxWidth: s = t } = i
        return (
            i.usePointStyle &&
                ((e = Math.min(e, t)),
                (s = i.pointStyleWidth || Math.min(s, t))),
            { boxWidth: s, boxHeight: e, itemHeight: Math.max(t, e) }
        )
    },
    rf = (i, t) =>
        i !== null &&
        t !== null &&
        i.datasetIndex === t.datasetIndex &&
        i.index === t.index,
    qs = class extends pt {
        constructor(t) {
            super(),
                (this._added = !1),
                (this.legendHitBoxes = []),
                (this._hoveredItem = null),
                (this.doughnutMode = !1),
                (this.chart = t.chart),
                (this.options = t.options),
                (this.ctx = t.ctx),
                (this.legendItems = void 0),
                (this.columnSizes = void 0),
                (this.lineWidths = void 0),
                (this.maxHeight = void 0),
                (this.maxWidth = void 0),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.height = void 0),
                (this.width = void 0),
                (this._margins = void 0),
                (this.position = void 0),
                (this.weight = void 0),
                (this.fullSize = void 0)
        }
        update(t, e, s) {
            ;(this.maxWidth = t),
                (this.maxHeight = e),
                (this._margins = s),
                this.setDimensions(),
                this.buildLabels(),
                this.fit()
        }
        setDimensions() {
            this.isHorizontal()
                ? ((this.width = this.maxWidth),
                  (this.left = this._margins.left),
                  (this.right = this.width))
                : ((this.height = this.maxHeight),
                  (this.top = this._margins.top),
                  (this.bottom = this.height))
        }
        buildLabels() {
            let t = this.options.labels || {},
                e = $(t.generateLabels, [this.chart], this) || []
            t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))),
                t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))),
                this.options.reverse && e.reverse(),
                (this.legendItems = e)
        }
        fit() {
            let { options: t, ctx: e } = this
            if (!t.display) {
                this.width = this.height = 0
                return
            }
            let s = t.labels,
                n = Q(s.font),
                r = n.size,
                o = this._computeTitleHeight(),
                { boxWidth: a, itemHeight: l } = za(s, r),
                c,
                h
            ;(e.font = n.string),
                this.isHorizontal()
                    ? ((c = this.maxWidth),
                      (h = this._fitRows(o, r, a, l) + 10))
                    : ((h = this.maxHeight),
                      (c = this._fitCols(o, r, a, l) + 10)),
                (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
                (this.height = Math.min(h, t.maxHeight || this.maxHeight))
        }
        _fitRows(t, e, s, n) {
            let {
                    ctx: r,
                    maxWidth: o,
                    options: {
                        labels: { padding: a },
                    },
                } = this,
                l = (this.legendHitBoxes = []),
                c = (this.lineWidths = [0]),
                h = n + a,
                u = t
            ;(r.textAlign = 'left'), (r.textBaseline = 'middle')
            let d = -1,
                f = -h
            return (
                this.legendItems.forEach((m, g) => {
                    let p = s + e / 2 + r.measureText(m.text).width
                    ;(g === 0 || c[c.length - 1] + p + 2 * a > o) &&
                        ((u += h),
                        (c[c.length - (g > 0 ? 0 : 1)] = 0),
                        (f += h),
                        d++),
                        (l[g] = {
                            left: 0,
                            top: f,
                            row: d,
                            width: p,
                            height: n,
                        }),
                        (c[c.length - 1] += p + a)
                }),
                u
            )
        }
        _fitCols(t, e, s, n) {
            let {
                    ctx: r,
                    maxHeight: o,
                    options: {
                        labels: { padding: a },
                    },
                } = this,
                l = (this.legendHitBoxes = []),
                c = (this.columnSizes = []),
                h = o - t,
                u = a,
                d = 0,
                f = 0,
                m = 0,
                g = 0
            return (
                this.legendItems.forEach((p, y) => {
                    let b = s + e / 2 + r.measureText(p.text).width
                    y > 0 &&
                        f + n + 2 * a > h &&
                        ((u += d + a),
                        c.push({ width: d, height: f }),
                        (m += d + a),
                        g++,
                        (d = f = 0)),
                        (l[y] = {
                            left: m,
                            top: f,
                            col: g,
                            width: b,
                            height: n,
                        }),
                        (d = Math.max(d, b)),
                        (f += n + a)
                }),
                (u += d),
                c.push({ width: d, height: f }),
                u
            )
        }
        adjustHitBoxes() {
            if (!this.options.display) return
            let t = this._computeTitleHeight(),
                {
                    legendHitBoxes: e,
                    options: {
                        align: s,
                        labels: { padding: n },
                        rtl: r,
                    },
                } = this,
                o = pe(r, this.left, this.width)
            if (this.isHorizontal()) {
                let a = 0,
                    l = nt(s, this.left + n, this.right - this.lineWidths[a])
                for (let c of e)
                    a !== c.row &&
                        ((a = c.row),
                        (l = nt(
                            s,
                            this.left + n,
                            this.right - this.lineWidths[a],
                        ))),
                        (c.top += this.top + t + n),
                        (c.left = o.leftForLtr(o.x(l), c.width)),
                        (l += c.width + n)
            } else {
                let a = 0,
                    l = nt(
                        s,
                        this.top + t + n,
                        this.bottom - this.columnSizes[a].height,
                    )
                for (let c of e)
                    c.col !== a &&
                        ((a = c.col),
                        (l = nt(
                            s,
                            this.top + t + n,
                            this.bottom - this.columnSizes[a].height,
                        ))),
                        (c.top = l),
                        (c.left += this.left + n),
                        (c.left = o.leftForLtr(o.x(c.left), c.width)),
                        (l += c.height + n)
            }
        }
        isHorizontal() {
            return (
                this.options.position === 'top' ||
                this.options.position === 'bottom'
            )
        }
        draw() {
            if (this.options.display) {
                let t = this.ctx
                Si(t, this), this._draw(), ki(t)
            }
        }
        _draw() {
            let { options: t, columnSizes: e, lineWidths: s, ctx: n } = this,
                { align: r, labels: o } = t,
                a = A.color,
                l = pe(t.rtl, this.left, this.width),
                c = Q(o.font),
                { color: h, padding: u } = o,
                d = c.size,
                f = d / 2,
                m
            this.drawTitle(),
                (n.textAlign = l.textAlign('left')),
                (n.textBaseline = 'middle'),
                (n.lineWidth = 0.5),
                (n.font = c.string)
            let { boxWidth: g, boxHeight: p, itemHeight: y } = za(o, d),
                b = function (k, v, T) {
                    if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return
                    n.save()
                    let C = E(T.lineWidth, 1)
                    if (
                        ((n.fillStyle = E(T.fillStyle, a)),
                        (n.lineCap = E(T.lineCap, 'butt')),
                        (n.lineDashOffset = E(T.lineDashOffset, 0)),
                        (n.lineJoin = E(T.lineJoin, 'miter')),
                        (n.lineWidth = C),
                        (n.strokeStyle = E(T.strokeStyle, a)),
                        n.setLineDash(E(T.lineDash, [])),
                        o.usePointStyle)
                    ) {
                        let N = {
                                radius: (p * Math.SQRT2) / 2,
                                pointStyle: T.pointStyle,
                                rotation: T.rotation,
                                borderWidth: C,
                            },
                            L = l.xPlus(k, g / 2),
                            K = v + f
                        Yn(n, N, L, K, o.pointStyleWidth && g)
                    } else {
                        let N = v + Math.max((d - p) / 2, 0),
                            L = l.leftForLtr(k, g),
                            K = te(T.borderRadius)
                        n.beginPath(),
                            Object.values(K).some((lt) => lt !== 0)
                                ? Re(n, { x: L, y: N, w: g, h: p, radius: K })
                                : n.rect(L, N, g, p),
                            n.fill(),
                            C !== 0 && n.stroke()
                    }
                    n.restore()
                },
                _ = function (k, v, T) {
                    Qt(n, T.text, k, v + y / 2, c, {
                        strikethrough: T.hidden,
                        textAlign: l.textAlign(T.textAlign),
                    })
                },
                w = this.isHorizontal(),
                x = this._computeTitleHeight()
            w
                ? (m = {
                      x: nt(r, this.left + u, this.right - s[0]),
                      y: this.top + u + x,
                      line: 0,
                  })
                : (m = {
                      x: this.left + u,
                      y: nt(r, this.top + x + u, this.bottom - e[0].height),
                      line: 0,
                  }),
                er(this.ctx, t.textDirection)
            let S = y + u
            this.legendItems.forEach((k, v) => {
                ;(n.strokeStyle = k.fontColor || h),
                    (n.fillStyle = k.fontColor || h)
                let T = n.measureText(k.text).width,
                    C = l.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
                    N = g + f + T,
                    L = m.x,
                    K = m.y
                l.setWidth(this.width),
                    w
                        ? v > 0 &&
                          L + N + u > this.right &&
                          ((K = m.y += S),
                          m.line++,
                          (L = m.x =
                              nt(r, this.left + u, this.right - s[m.line])))
                        : v > 0 &&
                          K + S > this.bottom &&
                          ((L = m.x = L + e[m.line].width + u),
                          m.line++,
                          (K = m.y =
                              nt(
                                  r,
                                  this.top + x + u,
                                  this.bottom - e[m.line].height,
                              )))
                let lt = l.x(L)
                b(lt, K, k),
                    (L = Vo(C, L + g + f, w ? L + N : this.right, t.rtl)),
                    _(l.x(L), K, k),
                    w ? (m.x += N + u) : (m.y += S)
            }),
                ir(this.ctx, t.textDirection)
        }
        drawTitle() {
            let t = this.options,
                e = t.title,
                s = Q(e.font),
                n = rt(e.padding)
            if (!e.display) return
            let r = pe(t.rtl, this.left, this.width),
                o = this.ctx,
                a = e.position,
                l = s.size / 2,
                c = n.top + l,
                h,
                u = this.left,
                d = this.width
            if (this.isHorizontal())
                (d = Math.max(...this.lineWidths)),
                    (h = this.top + c),
                    (u = nt(t.align, u, this.right - d))
            else {
                let m = this.columnSizes.reduce(
                    (g, p) => Math.max(g, p.height),
                    0,
                )
                h =
                    c +
                    nt(
                        t.align,
                        this.top,
                        this.bottom -
                            m -
                            t.labels.padding -
                            this._computeTitleHeight(),
                    )
            }
            let f = nt(a, u, u + d)
            ;(o.textAlign = r.textAlign(Es(a))),
                (o.textBaseline = 'middle'),
                (o.strokeStyle = e.color),
                (o.fillStyle = e.color),
                (o.font = s.string),
                Qt(o, e.text, f, h, s)
        }
        _computeTitleHeight() {
            let t = this.options.title,
                e = Q(t.font),
                s = rt(t.padding)
            return t.display ? e.lineHeight + s.height : 0
        }
        _getLegendItemAt(t, e) {
            let s, n, r
            if (At(t, this.left, this.right) && At(e, this.top, this.bottom)) {
                for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
                    if (
                        ((n = r[s]),
                        At(t, n.left, n.left + n.width) &&
                            At(e, n.top, n.top + n.height))
                    )
                        return this.legendItems[s]
            }
            return null
        }
        handleEvent(t) {
            let e = this.options
            if (!of(t.type, e)) return
            let s = this._getLegendItemAt(t.x, t.y)
            if (t.type === 'mousemove' || t.type === 'mouseout') {
                let n = this._hoveredItem,
                    r = rf(n, s)
                n && !r && $(e.onLeave, [t, n, this], this),
                    (this._hoveredItem = s),
                    s && !r && $(e.onHover, [t, s, this], this)
            } else s && $(e.onClick, [t, s, this], this)
        }
    }
function of(i, t) {
    return !!(
        ((i === 'mousemove' || i === 'mouseout') && (t.onHover || t.onLeave)) ||
        (t.onClick && (i === 'click' || i === 'mouseup'))
    )
}
var af = {
        id: 'legend',
        _element: qs,
        start(i, t, e) {
            let s = (i.legend = new qs({ ctx: i.ctx, options: e, chart: i }))
            ot.configure(i, s, e), ot.addBox(i, s)
        },
        stop(i) {
            ot.removeBox(i, i.legend), delete i.legend
        },
        beforeUpdate(i, t, e) {
            let s = i.legend
            ot.configure(i, s, e), (s.options = e)
        },
        afterUpdate(i) {
            let t = i.legend
            t.buildLabels(), t.adjustHitBoxes()
        },
        afterEvent(i, t) {
            t.replay || i.legend.handleEvent(t.event)
        },
        defaults: {
            display: !0,
            position: 'top',
            align: 'center',
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(i, t, e) {
                let s = t.datasetIndex,
                    n = e.chart
                n.isDatasetVisible(s)
                    ? (n.hide(s), (t.hidden = !0))
                    : (n.show(s), (t.hidden = !1))
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: (i) => i.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels(i) {
                    let t = i.data.datasets,
                        {
                            labels: {
                                usePointStyle: e,
                                pointStyle: s,
                                textAlign: n,
                                color: r,
                            },
                        } = i.legend.options
                    return i._getSortedDatasetMetas().map((o) => {
                        let a = o.controller.getStyle(e ? 0 : void 0),
                            l = rt(a.borderWidth)
                        return {
                            text: t[o.index].label,
                            fillStyle: a.backgroundColor,
                            fontColor: r,
                            hidden: !o.visible,
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: (l.width + l.height) / 4,
                            strokeStyle: a.borderColor,
                            pointStyle: s || a.pointStyle,
                            rotation: a.rotation,
                            textAlign: n || a.textAlign,
                            borderRadius: 0,
                            datasetIndex: o.index,
                        }
                    }, this)
                },
            },
            title: {
                color: (i) => i.chart.options.color,
                display: !1,
                position: 'center',
                text: '',
            },
        },
        descriptors: {
            _scriptable: (i) => !i.startsWith('on'),
            labels: {
                _scriptable: (i) =>
                    !['generateLabels', 'filter', 'sort'].includes(i),
            },
        },
    },
    Li = class extends pt {
        constructor(t) {
            super(),
                (this.chart = t.chart),
                (this.options = t.options),
                (this.ctx = t.ctx),
                (this._padding = void 0),
                (this.top = void 0),
                (this.bottom = void 0),
                (this.left = void 0),
                (this.right = void 0),
                (this.width = void 0),
                (this.height = void 0),
                (this.position = void 0),
                (this.weight = void 0),
                (this.fullSize = void 0)
        }
        update(t, e) {
            let s = this.options
            if (((this.left = 0), (this.top = 0), !s.display)) {
                this.width = this.height = this.right = this.bottom = 0
                return
            }
            ;(this.width = this.right = t), (this.height = this.bottom = e)
            let n = B(s.text) ? s.text.length : 1
            this._padding = rt(s.padding)
            let r = n * Q(s.font).lineHeight + this._padding.height
            this.isHorizontal() ? (this.height = r) : (this.width = r)
        }
        isHorizontal() {
            let t = this.options.position
            return t === 'top' || t === 'bottom'
        }
        _drawArgs(t) {
            let { top: e, left: s, bottom: n, right: r, options: o } = this,
                a = o.align,
                l = 0,
                c,
                h,
                u
            return (
                this.isHorizontal()
                    ? ((h = nt(a, s, r)), (u = e + t), (c = r - s))
                    : (o.position === 'left'
                          ? ((h = s + t), (u = nt(a, n, e)), (l = j * -0.5))
                          : ((h = r - t), (u = nt(a, e, n)), (l = j * 0.5)),
                      (c = n - e)),
                { titleX: h, titleY: u, maxWidth: c, rotation: l }
            )
        }
        draw() {
            let t = this.ctx,
                e = this.options
            if (!e.display) return
            let s = Q(e.font),
                r = s.lineHeight / 2 + this._padding.top,
                {
                    titleX: o,
                    titleY: a,
                    maxWidth: l,
                    rotation: c,
                } = this._drawArgs(r)
            Qt(t, e.text, 0, 0, s, {
                color: e.color,
                maxWidth: l,
                rotation: c,
                textAlign: Es(e.align),
                textBaseline: 'middle',
                translation: [o, a],
            })
        }
    }
function lf(i, t) {
    let e = new Li({ ctx: i.ctx, options: t, chart: i })
    ot.configure(i, e, t), ot.addBox(i, e), (i.titleBlock = e)
}
var cf = {
        id: 'title',
        _element: Li,
        start(i, t, e) {
            lf(i, e)
        },
        stop(i) {
            let t = i.titleBlock
            ot.removeBox(i, t), delete i.titleBlock
        },
        beforeUpdate(i, t, e) {
            let s = i.titleBlock
            ot.configure(i, s, e), (s.options = e)
        },
        defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'bold' },
            fullSize: !0,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2e3,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
    },
    zs = new WeakMap(),
    hf = {
        id: 'subtitle',
        start(i, t, e) {
            let s = new Li({ ctx: i.ctx, options: e, chart: i })
            ot.configure(i, s, e), ot.addBox(i, s), zs.set(i, s)
        },
        stop(i) {
            ot.removeBox(i, zs.get(i)), zs.delete(i)
        },
        beforeUpdate(i, t, e) {
            let s = zs.get(i)
            ot.configure(i, s, e), (s.options = e)
        },
        defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'normal' },
            fullSize: !0,
            padding: 0,
            position: 'top',
            text: '',
            weight: 1500,
        },
        defaultRoutes: { color: 'color' },
        descriptors: { _scriptable: !0, _indexable: !1 },
    },
    Ii = {
        average(i) {
            if (!i.length) return !1
            let t,
                e,
                s = 0,
                n = 0,
                r = 0
            for (t = 0, e = i.length; t < e; ++t) {
                let o = i[t].element
                if (o && o.hasValue()) {
                    let a = o.tooltipPosition()
                    ;(s += a.x), (n += a.y), ++r
                }
            }
            return { x: s / r, y: n / r }
        },
        nearest(i, t) {
            if (!i.length) return !1
            let e = t.x,
                s = t.y,
                n = Number.POSITIVE_INFINITY,
                r,
                o,
                a
            for (r = 0, o = i.length; r < o; ++r) {
                let l = i[r].element
                if (l && l.hasValue()) {
                    let c = l.getCenterPoint(),
                        h = Ms(t, c)
                    h < n && ((n = h), (a = l))
                }
            }
            if (a) {
                let l = a.tooltipPosition()
                ;(e = l.x), (s = l.y)
            }
            return { x: e, y: s }
        },
    }
function Lt(i, t) {
    return t && (B(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i
}
function $t(i) {
    return (typeof i == 'string' || i instanceof String) &&
        i.indexOf(`
`) > -1
        ? i.split(`
`)
        : i
}
function uf(i, t) {
    let { element: e, datasetIndex: s, index: n } = t,
        r = i.getDatasetMeta(s).controller,
        { label: o, value: a } = r.getLabelAndValue(n)
    return {
        chart: i,
        label: o,
        parsed: r.getParsed(n),
        raw: i.data.datasets[s].data[n],
        formattedValue: a,
        dataset: r.getDataset(),
        dataIndex: n,
        datasetIndex: s,
        element: e,
    }
}
function Va(i, t) {
    let e = i.chart.ctx,
        { body: s, footer: n, title: r } = i,
        { boxWidth: o, boxHeight: a } = t,
        l = Q(t.bodyFont),
        c = Q(t.titleFont),
        h = Q(t.footerFont),
        u = r.length,
        d = n.length,
        f = s.length,
        m = rt(t.padding),
        g = m.height,
        p = 0,
        y = s.reduce(
            (w, x) => w + x.before.length + x.lines.length + x.after.length,
            0,
        )
    if (
        ((y += i.beforeBody.length + i.afterBody.length),
        u &&
            (g +=
                u * c.lineHeight +
                (u - 1) * t.titleSpacing +
                t.titleMarginBottom),
        y)
    ) {
        let w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight
        g += f * w + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing
    }
    d && (g += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing)
    let b = 0,
        _ = function (w) {
            p = Math.max(p, e.measureText(w).width + b)
        }
    return (
        e.save(),
        (e.font = c.string),
        V(i.title, _),
        (e.font = l.string),
        V(i.beforeBody.concat(i.afterBody), _),
        (b = t.displayColors ? o + 2 + t.boxPadding : 0),
        V(s, (w) => {
            V(w.before, _), V(w.lines, _), V(w.after, _)
        }),
        (b = 0),
        (e.font = h.string),
        V(i.footer, _),
        e.restore(),
        (p += m.width),
        { width: p, height: g }
    )
}
function df(i, t) {
    let { y: e, height: s } = t
    return e < s / 2 ? 'top' : e > i.height - s / 2 ? 'bottom' : 'center'
}
function ff(i, t, e, s) {
    let { x: n, width: r } = s,
        o = e.caretSize + e.caretPadding
    if (
        (i === 'left' && n + r + o > t.width) ||
        (i === 'right' && n - r - o < 0)
    )
        return !0
}
function mf(i, t, e, s) {
    let { x: n, width: r } = e,
        {
            width: o,
            chartArea: { left: a, right: l },
        } = i,
        c = 'center'
    return (
        s === 'center'
            ? (c = n <= (a + l) / 2 ? 'left' : 'right')
            : n <= r / 2
              ? (c = 'left')
              : n >= o - r / 2 && (c = 'right'),
        ff(c, i, t, e) && (c = 'center'),
        c
    )
}
function Ha(i, t, e) {
    let s = e.yAlign || t.yAlign || df(i, e)
    return { xAlign: e.xAlign || t.xAlign || mf(i, t, e, s), yAlign: s }
}
function gf(i, t) {
    let { x: e, width: s } = i
    return t === 'right' ? (e -= s) : t === 'center' && (e -= s / 2), e
}
function pf(i, t, e) {
    let { y: s, height: n } = i
    return (
        t === 'top' ? (s += e) : t === 'bottom' ? (s -= n + e) : (s -= n / 2), s
    )
}
function Ba(i, t, e, s) {
    let { caretSize: n, caretPadding: r, cornerRadius: o } = i,
        { xAlign: a, yAlign: l } = e,
        c = n + r,
        { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = te(o),
        m = gf(t, a),
        g = pf(t, l, c)
    return (
        l === 'center'
            ? a === 'left'
                ? (m += c)
                : a === 'right' && (m -= c)
            : a === 'left'
              ? (m -= Math.max(h, d) + n)
              : a === 'right' && (m += Math.max(u, f) + n),
        { x: tt(m, 0, s.width - t.width), y: tt(g, 0, s.height - t.height) }
    )
}
function Vs(i, t, e) {
    let s = rt(e.padding)
    return t === 'center'
        ? i.x + i.width / 2
        : t === 'right'
          ? i.x + i.width - s.right
          : i.x + s.left
}
function $a(i) {
    return Lt([], $t(i))
}
function yf(i, t, e) {
    return Ht(i, { tooltip: t, tooltipItems: e, type: 'tooltip' })
}
function ja(i, t) {
    let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
    return e ? i.override(e) : i
}
var Pi = class extends pt {
    constructor(t) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart || t._chart),
            (this._chart = this.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0)
    }
    initialize(t) {
        ;(this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0)
    }
    _resolveAnimations() {
        let t = this._cachedAnimations
        if (t) return t
        let e = this.chart,
            s = this.options.setContext(this.getContext()),
            n = s.enabled && e.options.animation && s.animations,
            r = new $s(this.chart, n)
        return n._cacheable && (this._cachedAnimations = Object.freeze(r)), r
    }
    getContext() {
        return (
            this.$context ||
            (this.$context = yf(
                this.chart.getContext(),
                this,
                this._tooltipItems,
            ))
        )
    }
    getTitle(t, e) {
        let { callbacks: s } = e,
            n = s.beforeTitle.apply(this, [t]),
            r = s.title.apply(this, [t]),
            o = s.afterTitle.apply(this, [t]),
            a = []
        return (a = Lt(a, $t(n))), (a = Lt(a, $t(r))), (a = Lt(a, $t(o))), a
    }
    getBeforeBody(t, e) {
        return $a(e.callbacks.beforeBody.apply(this, [t]))
    }
    getBody(t, e) {
        let { callbacks: s } = e,
            n = []
        return (
            V(t, (r) => {
                let o = { before: [], lines: [], after: [] },
                    a = ja(s, r)
                Lt(o.before, $t(a.beforeLabel.call(this, r))),
                    Lt(o.lines, a.label.call(this, r)),
                    Lt(o.after, $t(a.afterLabel.call(this, r))),
                    n.push(o)
            }),
            n
        )
    }
    getAfterBody(t, e) {
        return $a(e.callbacks.afterBody.apply(this, [t]))
    }
    getFooter(t, e) {
        let { callbacks: s } = e,
            n = s.beforeFooter.apply(this, [t]),
            r = s.footer.apply(this, [t]),
            o = s.afterFooter.apply(this, [t]),
            a = []
        return (a = Lt(a, $t(n))), (a = Lt(a, $t(r))), (a = Lt(a, $t(o))), a
    }
    _createItems(t) {
        let e = this._active,
            s = this.chart.data,
            n = [],
            r = [],
            o = [],
            a = [],
            l,
            c
        for (l = 0, c = e.length; l < c; ++l) a.push(uf(this.chart, e[l]))
        return (
            t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, s))),
            t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, s))),
            V(a, (h) => {
                let u = ja(t.callbacks, h)
                n.push(u.labelColor.call(this, h)),
                    r.push(u.labelPointStyle.call(this, h)),
                    o.push(u.labelTextColor.call(this, h))
            }),
            (this.labelColors = n),
            (this.labelPointStyles = r),
            (this.labelTextColors = o),
            (this.dataPoints = a),
            a
        )
    }
    update(t, e) {
        let s = this.options.setContext(this.getContext()),
            n = this._active,
            r,
            o = []
        if (!n.length) this.opacity !== 0 && (r = { opacity: 0 })
        else {
            let a = Ii[s.position].call(this, n, this._eventPosition)
            ;(o = this._createItems(s)),
                (this.title = this.getTitle(o, s)),
                (this.beforeBody = this.getBeforeBody(o, s)),
                (this.body = this.getBody(o, s)),
                (this.afterBody = this.getAfterBody(o, s)),
                (this.footer = this.getFooter(o, s))
            let l = (this._size = Va(this, s)),
                c = Object.assign({}, a, l),
                h = Ha(this.chart, s, c),
                u = Ba(s, c, h, this.chart)
            ;(this.xAlign = h.xAlign),
                (this.yAlign = h.yAlign),
                (r = {
                    opacity: 1,
                    x: u.x,
                    y: u.y,
                    width: l.width,
                    height: l.height,
                    caretX: a.x,
                    caretY: a.y,
                })
        }
        ;(this._tooltipItems = o),
            (this.$context = void 0),
            r && this._resolveAnimations().update(this, r),
            t &&
                s.external &&
                s.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: e,
                })
    }
    drawCaret(t, e, s, n) {
        let r = this.getCaretPosition(t, s, n)
        e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3)
    }
    getCaretPosition(t, e, s) {
        let { xAlign: n, yAlign: r } = this,
            { caretSize: o, cornerRadius: a } = s,
            { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = te(a),
            { x: d, y: f } = t,
            { width: m, height: g } = e,
            p,
            y,
            b,
            _,
            w,
            x
        return (
            r === 'center'
                ? ((w = f + g / 2),
                  n === 'left'
                      ? ((p = d), (y = p - o), (_ = w + o), (x = w - o))
                      : ((p = d + m), (y = p + o), (_ = w - o), (x = w + o)),
                  (b = p))
                : (n === 'left'
                      ? (y = d + Math.max(l, h) + o)
                      : n === 'right'
                        ? (y = d + m - Math.max(c, u) - o)
                        : (y = this.caretX),
                  r === 'top'
                      ? ((_ = f), (w = _ - o), (p = y - o), (b = y + o))
                      : ((_ = f + g), (w = _ + o), (p = y + o), (b = y - o)),
                  (x = _)),
            { x1: p, x2: y, x3: b, y1: _, y2: w, y3: x }
        )
    }
    drawTitle(t, e, s) {
        let n = this.title,
            r = n.length,
            o,
            a,
            l
        if (r) {
            let c = pe(s.rtl, this.x, this.width)
            for (
                t.x = Vs(this, s.titleAlign, s),
                    e.textAlign = c.textAlign(s.titleAlign),
                    e.textBaseline = 'middle',
                    o = Q(s.titleFont),
                    a = s.titleSpacing,
                    e.fillStyle = s.titleColor,
                    e.font = o.string,
                    l = 0;
                l < r;
                ++l
            )
                e.fillText(n[l], c.x(t.x), t.y + o.lineHeight / 2),
                    (t.y += o.lineHeight + a),
                    l + 1 === r && (t.y += s.titleMarginBottom - a)
        }
    }
    _drawColorBox(t, e, s, n, r) {
        let o = this.labelColors[s],
            a = this.labelPointStyles[s],
            { boxHeight: l, boxWidth: c, boxPadding: h } = r,
            u = Q(r.bodyFont),
            d = Vs(this, 'left', r),
            f = n.x(d),
            m = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
            g = e.y + m
        if (r.usePointStyle) {
            let p = {
                    radius: Math.min(c, l) / 2,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    borderWidth: 1,
                },
                y = n.leftForLtr(f, c) + c / 2,
                b = g + l / 2
            ;(t.strokeStyle = r.multiKeyBackground),
                (t.fillStyle = r.multiKeyBackground),
                Cs(t, p, y, b),
                (t.strokeStyle = o.borderColor),
                (t.fillStyle = o.backgroundColor),
                Cs(t, p, y, b)
        } else {
            ;(t.lineWidth = F(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (t.strokeStyle = o.borderColor),
                t.setLineDash(o.borderDash || []),
                (t.lineDashOffset = o.borderDashOffset || 0)
            let p = n.leftForLtr(f, c - h),
                y = n.leftForLtr(n.xPlus(f, 1), c - h - 2),
                b = te(o.borderRadius)
            Object.values(b).some((_) => _ !== 0)
                ? (t.beginPath(),
                  (t.fillStyle = r.multiKeyBackground),
                  Re(t, { x: p, y: g, w: c, h: l, radius: b }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = o.backgroundColor),
                  t.beginPath(),
                  Re(t, { x: y, y: g + 1, w: c - 2, h: l - 2, radius: b }),
                  t.fill())
                : ((t.fillStyle = r.multiKeyBackground),
                  t.fillRect(p, g, c, l),
                  t.strokeRect(p, g, c, l),
                  (t.fillStyle = o.backgroundColor),
                  t.fillRect(y, g + 1, c - 2, l - 2))
        }
        t.fillStyle = this.labelTextColors[s]
    }
    drawBody(t, e, s) {
        let { body: n } = this,
            {
                bodySpacing: r,
                bodyAlign: o,
                displayColors: a,
                boxHeight: l,
                boxWidth: c,
                boxPadding: h,
            } = s,
            u = Q(s.bodyFont),
            d = u.lineHeight,
            f = 0,
            m = pe(s.rtl, this.x, this.width),
            g = function (v) {
                e.fillText(v, m.x(t.x + f), t.y + d / 2), (t.y += d + r)
            },
            p = m.textAlign(o),
            y,
            b,
            _,
            w,
            x,
            S,
            k
        for (
            e.textAlign = o,
                e.textBaseline = 'middle',
                e.font = u.string,
                t.x = Vs(this, p, s),
                e.fillStyle = s.bodyColor,
                V(this.beforeBody, g),
                f =
                    a && p !== 'right'
                        ? o === 'center'
                            ? c / 2 + h
                            : c + 2 + h
                        : 0,
                w = 0,
                S = n.length;
            w < S;
            ++w
        ) {
            for (
                y = n[w],
                    b = this.labelTextColors[w],
                    e.fillStyle = b,
                    V(y.before, g),
                    _ = y.lines,
                    a &&
                        _.length &&
                        (this._drawColorBox(e, t, w, m, s),
                        (d = Math.max(u.lineHeight, l))),
                    x = 0,
                    k = _.length;
                x < k;
                ++x
            )
                g(_[x]), (d = u.lineHeight)
            V(y.after, g)
        }
        ;(f = 0), (d = u.lineHeight), V(this.afterBody, g), (t.y -= r)
    }
    drawFooter(t, e, s) {
        let n = this.footer,
            r = n.length,
            o,
            a
        if (r) {
            let l = pe(s.rtl, this.x, this.width)
            for (
                t.x = Vs(this, s.footerAlign, s),
                    t.y += s.footerMarginTop,
                    e.textAlign = l.textAlign(s.footerAlign),
                    e.textBaseline = 'middle',
                    o = Q(s.footerFont),
                    e.fillStyle = s.footerColor,
                    e.font = o.string,
                    a = 0;
                a < r;
                ++a
            )
                e.fillText(n[a], l.x(t.x), t.y + o.lineHeight / 2),
                    (t.y += o.lineHeight + s.footerSpacing)
        }
    }
    drawBackground(t, e, s, n) {
        let { xAlign: r, yAlign: o } = this,
            { x: a, y: l } = t,
            { width: c, height: h } = s,
            {
                topLeft: u,
                topRight: d,
                bottomLeft: f,
                bottomRight: m,
            } = te(n.cornerRadius)
        ;(e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(a + u, l),
            o === 'top' && this.drawCaret(t, e, s, n),
            e.lineTo(a + c - d, l),
            e.quadraticCurveTo(a + c, l, a + c, l + d),
            o === 'center' && r === 'right' && this.drawCaret(t, e, s, n),
            e.lineTo(a + c, l + h - m),
            e.quadraticCurveTo(a + c, l + h, a + c - m, l + h),
            o === 'bottom' && this.drawCaret(t, e, s, n),
            e.lineTo(a + f, l + h),
            e.quadraticCurveTo(a, l + h, a, l + h - f),
            o === 'center' && r === 'left' && this.drawCaret(t, e, s, n),
            e.lineTo(a, l + u),
            e.quadraticCurveTo(a, l, a + u, l),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke()
    }
    _updateAnimationTarget(t) {
        let e = this.chart,
            s = this.$animations,
            n = s && s.x,
            r = s && s.y
        if (n || r) {
            let o = Ii[t.position].call(this, this._active, this._eventPosition)
            if (!o) return
            let a = (this._size = Va(this, t)),
                l = Object.assign({}, o, this._size),
                c = Ha(e, t, l),
                h = Ba(t, l, c, e)
            ;(n._to !== h.x || r._to !== h.y) &&
                ((this.xAlign = c.xAlign),
                (this.yAlign = c.yAlign),
                (this.width = a.width),
                (this.height = a.height),
                (this.caretX = o.x),
                (this.caretY = o.y),
                this._resolveAnimations().update(this, h))
        }
    }
    _willRender() {
        return !!this.opacity
    }
    draw(t) {
        let e = this.options.setContext(this.getContext()),
            s = this.opacity
        if (!s) return
        this._updateAnimationTarget(e)
        let n = { width: this.width, height: this.height },
            r = { x: this.x, y: this.y }
        s = Math.abs(s) < 0.001 ? 0 : s
        let o = rt(e.padding),
            a =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length
        e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = s),
            this.drawBackground(r, t, n, e),
            er(t, e.textDirection),
            (r.y += o.top),
            this.drawTitle(r, t, e),
            this.drawBody(r, t, e),
            this.drawFooter(r, t, e),
            ir(t, e.textDirection),
            t.restore())
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(t, e) {
        let s = this._active,
            n = t.map(({ datasetIndex: a, index: l }) => {
                let c = this.chart.getDatasetMeta(a)
                if (!c) throw new Error('Cannot find a dataset at index ' + a)
                return { datasetIndex: a, element: c.data[l], index: l }
            }),
            r = !_i(s, n),
            o = this._positionChanged(n, e)
        ;(r || o) &&
            ((this._active = n),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0))
    }
    handleEvent(t, e, s = !0) {
        if (e && this._ignoreReplayEvents) return !1
        this._ignoreReplayEvents = !1
        let n = this.options,
            r = this._active || [],
            o = this._getActiveElements(t, r, e, s),
            a = this._positionChanged(o, t),
            l = e || !_i(o, r) || a
        return (
            l &&
                ((this._active = o),
                (n.enabled || n.external) &&
                    ((this._eventPosition = { x: t.x, y: t.y }),
                    this.update(!0, e))),
            l
        )
    }
    _getActiveElements(t, e, s, n) {
        let r = this.options
        if (t.type === 'mouseout') return []
        if (!n) return e
        let o = this.chart.getElementsAtEventForMode(t, r.mode, r, s)
        return r.reverse && o.reverse(), o
    }
    _positionChanged(t, e) {
        let { caretX: s, caretY: n, options: r } = this,
            o = Ii[r.position].call(this, t, e)
        return o !== !1 && (s !== o.x || n !== o.y)
    }
}
Pi.positioners = Ii
var bf = {
        id: 'tooltip',
        _element: Pi,
        positioners: Ii,
        afterInit(i, t, e) {
            e && (i.tooltip = new Pi({ chart: i, options: e }))
        },
        beforeUpdate(i, t, e) {
            i.tooltip && i.tooltip.initialize(e)
        },
        reset(i, t, e) {
            i.tooltip && i.tooltip.initialize(e)
        },
        afterDraw(i) {
            let t = i.tooltip
            if (t && t._willRender()) {
                let e = { tooltip: t }
                if (i.notifyPlugins('beforeTooltipDraw', e) === !1) return
                t.draw(i.ctx), i.notifyPlugins('afterTooltipDraw', e)
            }
        },
        afterEvent(i, t) {
            if (i.tooltip) {
                let e = t.replay
                i.tooltip.handleEvent(t.event, e, t.inChartArea) &&
                    (t.changed = !0)
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: 'average',
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            titleFont: { weight: 'bold' },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: 'left',
            bodyColor: '#fff',
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: 'left',
            footerColor: '#fff',
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: 'bold' },
            footerAlign: 'left',
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (i, t) => t.bodyFont.size,
            boxWidth: (i, t) => t.bodyFont.size,
            multiKeyBackground: '#fff',
            displayColors: !0,
            boxPadding: 0,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            animation: { duration: 400, easing: 'easeOutQuart' },
            animations: {
                numbers: {
                    type: 'number',
                    properties: [
                        'x',
                        'y',
                        'width',
                        'height',
                        'caretX',
                        'caretY',
                    ],
                },
                opacity: { easing: 'linear', duration: 200 },
            },
            callbacks: {
                beforeTitle: Ft,
                title(i) {
                    if (i.length > 0) {
                        let t = i[0],
                            e = t.chart.data.labels,
                            s = e ? e.length : 0
                        if (
                            this &&
                            this.options &&
                            this.options.mode === 'dataset'
                        )
                            return t.dataset.label || ''
                        if (t.label) return t.label
                        if (s > 0 && t.dataIndex < s) return e[t.dataIndex]
                    }
                    return ''
                },
                afterTitle: Ft,
                beforeBody: Ft,
                beforeLabel: Ft,
                label(i) {
                    if (this && this.options && this.options.mode === 'dataset')
                        return (
                            i.label + ': ' + i.formattedValue ||
                            i.formattedValue
                        )
                    let t = i.dataset.label || ''
                    t && (t += ': ')
                    let e = i.formattedValue
                    return P(e) || (t += e), t
                },
                labelColor(i) {
                    let e = i.chart
                        .getDatasetMeta(i.datasetIndex)
                        .controller.getStyle(i.dataIndex)
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0,
                    }
                },
                labelTextColor() {
                    return this.options.bodyColor
                },
                labelPointStyle(i) {
                    let e = i.chart
                        .getDatasetMeta(i.datasetIndex)
                        .controller.getStyle(i.dataIndex)
                    return { pointStyle: e.pointStyle, rotation: e.rotation }
                },
                afterLabel: Ft,
                afterBody: Ft,
                beforeFooter: Ft,
                footer: Ft,
                afterFooter: Ft,
            },
        },
        defaultRoutes: {
            bodyFont: 'font',
            footerFont: 'font',
            titleFont: 'font',
        },
        descriptors: {
            _scriptable: (i) =>
                i !== 'filter' && i !== 'itemSort' && i !== 'external',
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: 'animation' },
        },
        additionalOptionScopes: ['interaction'],
    },
    xf = Object.freeze({
        __proto__: null,
        Decimation: Rd,
        Filler: nf,
        Legend: af,
        SubTitle: hf,
        Title: cf,
        Tooltip: bf,
    }),
    _f = (i, t, e, s) => (
        typeof t == 'string'
            ? ((e = i.push(t) - 1), s.unshift({ index: e, label: t }))
            : isNaN(t) && (e = null),
        e
    )
function wf(i, t, e, s) {
    let n = i.indexOf(t)
    if (n === -1) return _f(i, t, e, s)
    let r = i.lastIndexOf(t)
    return n !== r ? e : n
}
var Sf = (i, t) => (i === null ? null : tt(Math.round(i), 0, t)),
    Ke = class extends be {
        constructor(t) {
            super(t),
                (this._startValue = void 0),
                (this._valueRange = 0),
                (this._addedLabels = [])
        }
        init(t) {
            let e = this._addedLabels
            if (e.length) {
                let s = this.getLabels()
                for (let { index: n, label: r } of e)
                    s[n] === r && s.splice(n, 1)
                this._addedLabels = []
            }
            super.init(t)
        }
        parse(t, e) {
            if (P(t)) return null
            let s = this.getLabels()
            return (
                (e =
                    isFinite(e) && s[e] === t
                        ? e
                        : wf(s, t, E(e, t), this._addedLabels)),
                Sf(e, s.length - 1)
            )
        }
        determineDataLimits() {
            let { minDefined: t, maxDefined: e } = this.getUserBounds(),
                { min: s, max: n } = this.getMinMax(!0)
            this.options.bounds === 'ticks' &&
                (t || (s = 0), e || (n = this.getLabels().length - 1)),
                (this.min = s),
                (this.max = n)
        }
        buildTicks() {
            let t = this.min,
                e = this.max,
                s = this.options.offset,
                n = [],
                r = this.getLabels()
            ;(r = t === 0 && e === r.length - 1 ? r : r.slice(t, e + 1)),
                (this._valueRange = Math.max(r.length - (s ? 0 : 1), 1)),
                (this._startValue = this.min - (s ? 0.5 : 0))
            for (let o = t; o <= e; o++) n.push({ value: o })
            return n
        }
        getLabelForValue(t) {
            let e = this.getLabels()
            return t >= 0 && t < e.length ? e[t] : t
        }
        configure() {
            super.configure(),
                this.isHorizontal() ||
                    (this._reversePixels = !this._reversePixels)
        }
        getPixelForValue(t) {
            return (
                typeof t != 'number' && (t = this.parse(t)),
                t === null
                    ? NaN
                    : this.getPixelForDecimal(
                          (t - this._startValue) / this._valueRange,
                      )
            )
        }
        getPixelForTick(t) {
            let e = this.ticks
            return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t].value)
        }
        getValueForPixel(t) {
            return Math.round(
                this._startValue +
                    this.getDecimalForPixel(t) * this._valueRange,
            )
        }
        getBasePixel() {
            return this.bottom
        }
    }
Ke.id = 'category'
Ke.defaults = { ticks: { callback: Ke.prototype.getLabelForValue } }
function kf(i, t) {
    let e = [],
        {
            bounds: n,
            step: r,
            min: o,
            max: a,
            precision: l,
            count: c,
            maxTicks: h,
            maxDigits: u,
            includeBounds: d,
        } = i,
        f = r || 1,
        m = h - 1,
        { min: g, max: p } = t,
        y = !P(o),
        b = !P(a),
        _ = !P(c),
        w = (p - g) / (u + 1),
        x = Cn((p - g) / m / f) * f,
        S,
        k,
        v,
        T
    if (x < 1e-14 && !y && !b) return [{ value: g }, { value: p }]
    ;(T = Math.ceil(p / x) - Math.floor(g / x)),
        T > m && (x = Cn((T * x) / m / f) * f),
        P(l) || ((S = Math.pow(10, l)), (x = Math.ceil(x * S) / S)),
        n === 'ticks'
            ? ((k = Math.floor(g / x) * x), (v = Math.ceil(p / x) * x))
            : ((k = g), (v = p)),
        y && b && r && Ao((a - o) / r, x / 1e3)
            ? ((T = Math.round(Math.min((a - o) / x, h))),
              (x = (a - o) / T),
              (k = o),
              (v = a))
            : _
              ? ((k = y ? o : k),
                (v = b ? a : v),
                (T = c - 1),
                (x = (v - k) / T))
              : ((T = (v - k) / x),
                Pe(T, Math.round(T), x / 1e3)
                    ? (T = Math.round(T))
                    : (T = Math.ceil(T)))
    let C = Math.max(An(x), An(k))
    ;(S = Math.pow(10, P(l) ? C : l)),
        (k = Math.round(k * S) / S),
        (v = Math.round(v * S) / S)
    let N = 0
    for (
        y &&
        (d && k !== o
            ? (e.push({ value: o }),
              k < o && N++,
              Pe(Math.round((k + N * x) * S) / S, o, Ua(o, w, i)) && N++)
            : k < o && N++);
        N < T;
        ++N
    )
        e.push({ value: Math.round((k + N * x) * S) / S })
    return (
        b && d && v !== a
            ? e.length && Pe(e[e.length - 1].value, a, Ua(a, w, i))
                ? (e[e.length - 1].value = a)
                : e.push({ value: a })
            : (!b || v === a) && e.push({ value: v }),
        e
    )
}
function Ua(i, t, { horizontal: e, minRotation: s }) {
    let n = _t(s),
        r = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
        o = 0.75 * t * ('' + i).length
    return Math.min(t / r, o)
}
var Je = class extends be {
        constructor(t) {
            super(t),
                (this.start = void 0),
                (this.end = void 0),
                (this._startValue = void 0),
                (this._endValue = void 0),
                (this._valueRange = 0)
        }
        parse(t, e) {
            return P(t) ||
                ((typeof t == 'number' || t instanceof Number) && !isFinite(+t))
                ? null
                : +t
        }
        handleTickRangeOptions() {
            let { beginAtZero: t } = this.options,
                { minDefined: e, maxDefined: s } = this.getUserBounds(),
                { min: n, max: r } = this,
                o = (l) => (n = e ? n : l),
                a = (l) => (r = s ? r : l)
            if (t) {
                let l = Mt(n),
                    c = Mt(r)
                l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0)
            }
            if (n === r) {
                let l = 1
                ;(r >= Number.MAX_SAFE_INTEGER ||
                    n <= Number.MIN_SAFE_INTEGER) &&
                    (l = Math.abs(r * 0.05)),
                    a(r + l),
                    t || o(n - l)
            }
            ;(this.min = n), (this.max = r)
        }
        getTickLimit() {
            let t = this.options.ticks,
                { maxTicksLimit: e, stepSize: s } = t,
                n
            return (
                s
                    ? ((n =
                          Math.ceil(this.max / s) -
                          Math.floor(this.min / s) +
                          1),
                      n > 1e3 &&
                          (console.warn(
                              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`,
                          ),
                          (n = 1e3)))
                    : ((n = this.computeTickLimit()), (e = e || 11)),
                e && (n = Math.min(e, n)),
                n
            )
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY
        }
        buildTicks() {
            let t = this.options,
                e = t.ticks,
                s = this.getTickLimit()
            s = Math.max(2, s)
            let n = {
                    maxTicks: s,
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: e.includeBounds !== !1,
                },
                r = this._range || this,
                o = kf(n, r)
            return (
                t.bounds === 'ticks' && Fn(o, this, 'value'),
                t.reverse
                    ? (o.reverse(),
                      (this.start = this.max),
                      (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                o
            )
        }
        configure() {
            let t = this.ticks,
                e = this.min,
                s = this.max
            if ((super.configure(), this.options.offset && t.length)) {
                let n = (s - e) / Math.max(t.length - 1, 1) / 2
                ;(e -= n), (s += n)
            }
            ;(this._startValue = e),
                (this._endValue = s),
                (this._valueRange = s - e)
        }
        getLabelForValue(t) {
            return ze(t, this.chart.options.locale, this.options.ticks.format)
        }
    },
    Ni = class extends Je {
        determineDataLimits() {
            let { min: t, max: e } = this.getMinMax(!0)
            ;(this.min = q(t) ? t : 0),
                (this.max = q(e) ? e : 1),
                this.handleTickRangeOptions()
        }
        computeTickLimit() {
            let t = this.isHorizontal(),
                e = t ? this.width : this.height,
                s = _t(this.options.ticks.minRotation),
                n = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
                r = this._resolveTickFontOptions(0)
            return Math.ceil(e / Math.min(40, r.lineHeight / n))
        }
        getPixelForValue(t) {
            return t === null
                ? NaN
                : this.getPixelForDecimal(
                      (t - this._startValue) / this._valueRange,
                  )
        }
        getValueForPixel(t) {
            return (
                this._startValue + this.getDecimalForPixel(t) * this._valueRange
            )
        }
    }
Ni.id = 'linear'
Ni.defaults = { ticks: { callback: Gs.formatters.numeric } }
function Ya(i) {
    return i / Math.pow(10, Math.floor(mt(i))) === 1
}
function Mf(i, t) {
    let e = Math.floor(mt(t.max)),
        s = Math.ceil(t.max / Math.pow(10, e)),
        n = [],
        r = ft(i.min, Math.pow(10, Math.floor(mt(t.min)))),
        o = Math.floor(mt(r)),
        a = Math.floor(r / Math.pow(10, o)),
        l = o < 0 ? Math.pow(10, Math.abs(o)) : 1
    do
        n.push({ value: r, major: Ya(r) }),
            ++a,
            a === 10 && ((a = 1), ++o, (l = o >= 0 ? 1 : l)),
            (r = Math.round(a * Math.pow(10, o) * l) / l)
    while (o < e || (o === e && a < s))
    let c = ft(i.max, r)
    return n.push({ value: c, major: Ya(r) }), n
}
var Ri = class extends be {
    constructor(t) {
        super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0)
    }
    parse(t, e) {
        let s = Je.prototype.parse.apply(this, [t, e])
        if (s === 0) {
            this._zero = !0
            return
        }
        return q(s) && s > 0 ? s : null
    }
    determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(!0)
        ;(this.min = q(t) ? Math.max(0, t) : null),
            (this.max = q(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions()
    }
    handleTickRangeOptions() {
        let { minDefined: t, maxDefined: e } = this.getUserBounds(),
            s = this.min,
            n = this.max,
            r = (l) => (s = t ? s : l),
            o = (l) => (n = e ? n : l),
            a = (l, c) => Math.pow(10, Math.floor(mt(l)) + c)
        s === n && (s <= 0 ? (r(1), o(10)) : (r(a(s, -1)), o(a(n, 1)))),
            s <= 0 && r(a(n, -1)),
            n <= 0 && o(a(s, 1)),
            this._zero &&
                this.min !== this._suggestedMin &&
                s === a(this.min, 0) &&
                r(a(s, -1)),
            (this.min = s),
            (this.max = n)
    }
    buildTicks() {
        let t = this.options,
            e = { min: this._userMin, max: this._userMax },
            s = Mf(e, this)
        return (
            t.bounds === 'ticks' && Fn(s, this, 'value'),
            t.reverse
                ? (s.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            s
        )
    }
    getLabelForValue(t) {
        return t === void 0
            ? '0'
            : ze(t, this.chart.options.locale, this.options.ticks.format)
    }
    configure() {
        let t = this.min
        super.configure(),
            (this._startValue = mt(t)),
            (this._valueRange = mt(this.max) - mt(t))
    }
    getPixelForValue(t) {
        return (
            (t === void 0 || t === 0) && (t = this.min),
            t === null || isNaN(t)
                ? NaN
                : this.getPixelForDecimal(
                      t === this.min
                          ? 0
                          : (mt(t) - this._startValue) / this._valueRange,
                  )
        )
    }
    getValueForPixel(t) {
        let e = this.getDecimalForPixel(t)
        return Math.pow(10, this._startValue + e * this._valueRange)
    }
}
Ri.id = 'logarithmic'
Ri.defaults = {
    ticks: { callback: Gs.formatters.logarithmic, major: { enabled: !0 } },
}
function vr(i) {
    let t = i.ticks
    if (t.display && i.display) {
        let e = rt(t.backdropPadding)
        return E(t.font && t.font.size, A.font.size) + e.height
    }
    return 0
}
function Tf(i, t, e) {
    return (
        (e = B(e) ? e : [e]),
        { w: Yo(i, t.string, e), h: e.length * t.lineHeight }
    )
}
function Za(i, t, e, s, n) {
    return i === s || i === n
        ? { start: t - e / 2, end: t + e / 2 }
        : i < s || i > n
          ? { start: t - e, end: t }
          : { start: t, end: t + e }
}
function vf(i) {
    let t = {
            l: i.left + i._padding.left,
            r: i.right - i._padding.right,
            t: i.top + i._padding.top,
            b: i.bottom - i._padding.bottom,
        },
        e = Object.assign({}, t),
        s = [],
        n = [],
        r = i._pointLabels.length,
        o = i.options.pointLabels,
        a = o.centerPointLabels ? j / r : 0
    for (let l = 0; l < r; l++) {
        let c = o.setContext(i.getPointLabelContext(l))
        n[l] = c.padding
        let h = i.getPointPosition(l, i.drawingArea + n[l], a),
            u = Q(c.font),
            d = Tf(i.ctx, u, i._pointLabels[l])
        s[l] = d
        let f = ct(i.getIndexAngle(l) + a),
            m = Math.round(Os(f)),
            g = Za(m, h.x, d.w, 0, 180),
            p = Za(m, h.y, d.h, 90, 270)
        Of(e, t, f, g, p)
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
        (i._pointLabelItems = Df(i, s, n))
}
function Of(i, t, e, s, n) {
    let r = Math.abs(Math.sin(e)),
        o = Math.abs(Math.cos(e)),
        a = 0,
        l = 0
    s.start < t.l
        ? ((a = (t.l - s.start) / r), (i.l = Math.min(i.l, t.l - a)))
        : s.end > t.r &&
          ((a = (s.end - t.r) / r), (i.r = Math.max(i.r, t.r + a))),
        n.start < t.t
            ? ((l = (t.t - n.start) / o), (i.t = Math.min(i.t, t.t - l)))
            : n.end > t.b &&
              ((l = (n.end - t.b) / o), (i.b = Math.max(i.b, t.b + l)))
}
function Df(i, t, e) {
    let s = [],
        n = i._pointLabels.length,
        r = i.options,
        o = vr(r) / 2,
        a = i.drawingArea,
        l = r.pointLabels.centerPointLabels ? j / n : 0
    for (let c = 0; c < n; c++) {
        let h = i.getPointPosition(c, a + o + e[c], l),
            u = Math.round(Os(ct(h.angle + U))),
            d = t[c],
            f = Cf(h.y, d.h, u),
            m = Ef(u),
            g = If(h.x, d.w, m)
        s.push({
            x: h.x,
            y: f,
            textAlign: m,
            left: g,
            top: f,
            right: g + d.w,
            bottom: f + d.h,
        })
    }
    return s
}
function Ef(i) {
    return i === 0 || i === 180 ? 'center' : i < 180 ? 'left' : 'right'
}
function If(i, t, e) {
    return e === 'right' ? (i -= t) : e === 'center' && (i -= t / 2), i
}
function Cf(i, t, e) {
    return (
        e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t),
        i
    )
}
function Ff(i, t) {
    let {
        ctx: e,
        options: { pointLabels: s },
    } = i
    for (let n = t - 1; n >= 0; n--) {
        let r = s.setContext(i.getPointLabelContext(n)),
            o = Q(r.font),
            {
                x: a,
                y: l,
                textAlign: c,
                left: h,
                top: u,
                right: d,
                bottom: f,
            } = i._pointLabelItems[n],
            { backdropColor: m } = r
        if (!P(m)) {
            let g = te(r.borderRadius),
                p = rt(r.backdropPadding)
            e.fillStyle = m
            let y = h - p.left,
                b = u - p.top,
                _ = d - h + p.width,
                w = f - u + p.height
            Object.values(g).some((x) => x !== 0)
                ? (e.beginPath(),
                  Re(e, { x: y, y: b, w: _, h: w, radius: g }),
                  e.fill())
                : e.fillRect(y, b, _, w)
        }
        Qt(e, i._pointLabels[n], a, l + o.lineHeight / 2, o, {
            color: r.color,
            textAlign: c,
            textBaseline: 'middle',
        })
    }
}
function pl(i, t, e, s) {
    let { ctx: n } = i
    if (e) n.arc(i.xCenter, i.yCenter, t, 0, H)
    else {
        let r = i.getPointPosition(0, t)
        n.moveTo(r.x, r.y)
        for (let o = 1; o < s; o++)
            (r = i.getPointPosition(o, t)), n.lineTo(r.x, r.y)
    }
}
function Af(i, t, e, s) {
    let n = i.ctx,
        r = t.circular,
        { color: o, lineWidth: a } = t
    ;(!r && !s) ||
        !o ||
        !a ||
        e < 0 ||
        (n.save(),
        (n.strokeStyle = o),
        (n.lineWidth = a),
        n.setLineDash(t.borderDash),
        (n.lineDashOffset = t.borderDashOffset),
        n.beginPath(),
        pl(i, e, r, s),
        n.closePath(),
        n.stroke(),
        n.restore())
}
function Lf(i, t, e) {
    return Ht(i, { label: e, index: t, type: 'pointLabel' })
}
var _e = class extends Je {
    constructor(t) {
        super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = [])
    }
    setDimensions() {
        let t = (this._padding = rt(vr(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            s = (this.height = this.maxHeight - t.height)
        ;(this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + s / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, s) / 2))
    }
    determineDataLimits() {
        let { min: t, max: e } = this.getMinMax(!1)
        ;(this.min = q(t) && !isNaN(t) ? t : 0),
            (this.max = q(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions()
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / vr(this.options))
    }
    generateTickLabels(t) {
        Je.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
                .map((e, s) => {
                    let n = $(this.options.pointLabels.callback, [e, s], this)
                    return n || n === 0 ? n : ''
                })
                .filter((e, s) => this.chart.getDataVisibility(s)))
    }
    fit() {
        let t = this.options
        t.display && t.pointLabels.display
            ? vf(this)
            : this.setCenterPoint(0, 0, 0, 0)
    }
    setCenterPoint(t, e, s, n) {
        ;(this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((s - n) / 2)),
            (this.drawingArea -= Math.min(
                this.drawingArea / 2,
                Math.max(t, e, s, n),
            ))
    }
    getIndexAngle(t) {
        let e = H / (this._pointLabels.length || 1),
            s = this.options.startAngle || 0
        return ct(t * e + _t(s))
    }
    getDistanceFromCenterForValue(t) {
        if (P(t)) return NaN
        let e = this.drawingArea / (this.max - this.min)
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
    }
    getValueForDistanceFromCenter(t) {
        if (P(t)) return NaN
        let e = t / (this.drawingArea / (this.max - this.min))
        return this.options.reverse ? this.max - e : this.min + e
    }
    getPointLabelContext(t) {
        let e = this._pointLabels || []
        if (t >= 0 && t < e.length) {
            let s = e[t]
            return Lf(this.getContext(), t, s)
        }
    }
    getPointPosition(t, e, s = 0) {
        let n = this.getIndexAngle(t) - U + s
        return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n,
        }
    }
    getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue())
    }
    getPointLabelPosition(t) {
        let { left: e, top: s, right: n, bottom: r } = this._pointLabelItems[t]
        return { left: e, top: s, right: n, bottom: r }
    }
    drawBackground() {
        let {
            backgroundColor: t,
            grid: { circular: e },
        } = this.options
        if (t) {
            let s = this.ctx
            s.save(),
                s.beginPath(),
                pl(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    e,
                    this._pointLabels.length,
                ),
                s.closePath(),
                (s.fillStyle = t),
                s.fill(),
                s.restore()
        }
    }
    drawGrid() {
        let t = this.ctx,
            e = this.options,
            { angleLines: s, grid: n } = e,
            r = this._pointLabels.length,
            o,
            a,
            l
        if (
            (e.pointLabels.display && Ff(this, r),
            n.display &&
                this.ticks.forEach((c, h) => {
                    if (h !== 0) {
                        a = this.getDistanceFromCenterForValue(c.value)
                        let u = n.setContext(this.getContext(h - 1))
                        Af(this, u, a, r)
                    }
                }),
            s.display)
        ) {
            for (t.save(), o = r - 1; o >= 0; o--) {
                let c = s.setContext(this.getPointLabelContext(o)),
                    { color: h, lineWidth: u } = c
                !u ||
                    !h ||
                    ((t.lineWidth = u),
                    (t.strokeStyle = h),
                    t.setLineDash(c.borderDash),
                    (t.lineDashOffset = c.borderDashOffset),
                    (a = this.getDistanceFromCenterForValue(
                        e.ticks.reverse ? this.min : this.max,
                    )),
                    (l = this.getPointPosition(o, a)),
                    t.beginPath(),
                    t.moveTo(this.xCenter, this.yCenter),
                    t.lineTo(l.x, l.y),
                    t.stroke())
            }
            t.restore()
        }
    }
    drawBorder() {}
    drawLabels() {
        let t = this.ctx,
            e = this.options,
            s = e.ticks
        if (!s.display) return
        let n = this.getIndexAngle(0),
            r,
            o
        t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(n),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((a, l) => {
                if (l === 0 && !e.reverse) return
                let c = s.setContext(this.getContext(l)),
                    h = Q(c.font)
                if (
                    ((r = this.getDistanceFromCenterForValue(
                        this.ticks[l].value,
                    )),
                    c.showLabelBackdrop)
                ) {
                    ;(t.font = h.string),
                        (o = t.measureText(a.label).width),
                        (t.fillStyle = c.backdropColor)
                    let u = rt(c.backdropPadding)
                    t.fillRect(
                        -o / 2 - u.left,
                        -r - h.size / 2 - u.top,
                        o + u.width,
                        h.size + u.height,
                    )
                }
                Qt(t, a.label, 0, -r, h, { color: c.color })
            }),
            t.restore()
    }
    drawTitle() {}
}
_e.id = 'radialLinear'
_e.defaults = {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Gs.formatters.numeric },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(i) {
            return i
        },
        padding: 5,
        centerPointLabels: !1,
    },
}
_e.defaultRoutes = {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
}
_e.descriptors = { angleLines: { _fallback: 'grid' } }
var Xs = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
    },
    ht = Object.keys(Xs)
function Pf(i, t) {
    return i - t
}
function qa(i, t) {
    if (P(t)) return null
    let e = i._adapter,
        { parser: s, round: n, isoWeekday: r } = i._parseOpts,
        o = t
    return (
        typeof s == 'function' && (o = s(o)),
        q(o) || (o = typeof s == 'string' ? e.parse(o, s) : e.parse(o)),
        o === null
            ? null
            : (n &&
                  (o =
                      n === 'week' && (ge(r) || r === !0)
                          ? e.startOf(o, 'isoWeek', r)
                          : e.startOf(o, n)),
              +o)
    )
}
function Ga(i, t, e, s) {
    let n = ht.length
    for (let r = ht.indexOf(i); r < n - 1; ++r) {
        let o = Xs[ht[r]],
            a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER
        if (o.common && Math.ceil((e - t) / (a * o.size)) <= s) return ht[r]
    }
    return ht[n - 1]
}
function Nf(i, t, e, s, n) {
    for (let r = ht.length - 1; r >= ht.indexOf(e); r--) {
        let o = ht[r]
        if (Xs[o].common && i._adapter.diff(n, s, o) >= t - 1) return o
    }
    return ht[e ? ht.indexOf(e) : 0]
}
function Rf(i) {
    for (let t = ht.indexOf(i) + 1, e = ht.length; t < e; ++t)
        if (Xs[ht[t]].common) return ht[t]
}
function Xa(i, t, e) {
    if (!e) i[t] = !0
    else if (e.length) {
        let { lo: s, hi: n } = Ds(e, t),
            r = e[s] >= t ? e[s] : e[n]
        i[r] = !0
    }
}
function Wf(i, t, e, s) {
    let n = i._adapter,
        r = +n.startOf(t[0].value, s),
        o = t[t.length - 1].value,
        a,
        l
    for (a = r; a <= o; a = +n.add(a, 1, s))
        (l = e[a]), l >= 0 && (t[l].major = !0)
    return t
}
function Ka(i, t, e) {
    let s = [],
        n = {},
        r = t.length,
        o,
        a
    for (o = 0; o < r; ++o)
        (a = t[o]), (n[a] = o), s.push({ value: a, major: !1 })
    return r === 0 || !e ? s : Wf(i, s, n, e)
}
var we = class extends be {
    constructor(t) {
        super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0)
    }
    init(t, e) {
        let s = t.time || (t.time = {}),
            n = (this._adapter = new Or._date(t.adapters.date))
        n.init(e),
            Le(s.displayFormats, n.formats()),
            (this._parseOpts = {
                parser: s.parser,
                round: s.round,
                isoWeekday: s.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized)
    }
    parse(t, e) {
        return t === void 0 ? null : qa(this, t)
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
    }
    determineDataLimits() {
        let t = this.options,
            e = this._adapter,
            s = t.time.unit || 'day',
            {
                min: n,
                max: r,
                minDefined: o,
                maxDefined: a,
            } = this.getUserBounds()
        function l(c) {
            !o && !isNaN(c.min) && (n = Math.min(n, c.min)),
                !a && !isNaN(c.max) && (r = Math.max(r, c.max))
        }
        ;(!o || !a) &&
            (l(this._getLabelBounds()),
            (t.bounds !== 'ticks' || t.ticks.source !== 'labels') &&
                l(this.getMinMax(!1))),
            (n = q(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s)),
            (r = q(r) && !isNaN(r) ? r : +e.endOf(Date.now(), s) + 1),
            (this.min = Math.min(n, r - 1)),
            (this.max = Math.max(n + 1, r))
    }
    _getLabelBounds() {
        let t = this.getLabelTimestamps(),
            e = Number.POSITIVE_INFINITY,
            s = Number.NEGATIVE_INFINITY
        return (
            t.length && ((e = t[0]), (s = t[t.length - 1])), { min: e, max: s }
        )
    }
    buildTicks() {
        let t = this.options,
            e = t.time,
            s = t.ticks,
            n =
                s.source === 'labels'
                    ? this.getLabelTimestamps()
                    : this._generate()
        t.bounds === 'ticks' &&
            n.length &&
            ((this.min = this._userMin || n[0]),
            (this.max = this._userMax || n[n.length - 1]))
        let r = this.min,
            o = this.max,
            a = No(n, r, o)
        return (
            (this._unit =
                e.unit ||
                (s.autoSkip
                    ? Ga(
                          e.minUnit,
                          this.min,
                          this.max,
                          this._getLabelCapacity(r),
                      )
                    : Nf(this, a.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
                !s.major.enabled || this._unit === 'year'
                    ? void 0
                    : Rf(this._unit)),
            this.initOffsets(n),
            t.reverse && a.reverse(),
            Ka(this, a, this._majorUnit)
        )
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map((t) => +t.value))
    }
    initOffsets(t) {
        let e = 0,
            s = 0,
            n,
            r
        this.options.offset &&
            t.length &&
            ((n = this.getDecimalForValue(t[0])),
            t.length === 1
                ? (e = 1 - n)
                : (e = (this.getDecimalForValue(t[1]) - n) / 2),
            (r = this.getDecimalForValue(t[t.length - 1])),
            t.length === 1
                ? (s = r)
                : (s = (r - this.getDecimalForValue(t[t.length - 2])) / 2))
        let o = t.length < 3 ? 0.5 : 0.25
        ;(e = tt(e, 0, o)),
            (s = tt(s, 0, o)),
            (this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) })
    }
    _generate() {
        let t = this._adapter,
            e = this.min,
            s = this.max,
            n = this.options,
            r = n.time,
            o = r.unit || Ga(r.minUnit, e, s, this._getLabelCapacity(e)),
            a = E(r.stepSize, 1),
            l = o === 'week' ? r.isoWeekday : !1,
            c = ge(l) || l === !0,
            h = {},
            u = e,
            d,
            f
        if (
            (c && (u = +t.startOf(u, 'isoWeek', l)),
            (u = +t.startOf(u, c ? 'day' : o)),
            t.diff(s, e, o) > 1e5 * a)
        )
            throw new Error(
                e +
                    ' and ' +
                    s +
                    ' are too far apart with stepSize of ' +
                    a +
                    ' ' +
                    o,
            )
        let m = n.ticks.source === 'data' && this.getDataTimestamps()
        for (d = u, f = 0; d < s; d = +t.add(d, a, o), f++) Xa(h, d, m)
        return (
            (d === s || n.bounds === 'ticks' || f === 1) && Xa(h, d, m),
            Object.keys(h)
                .sort((g, p) => g - p)
                .map((g) => +g)
        )
    }
    getLabelForValue(t) {
        let e = this._adapter,
            s = this.options.time
        return s.tooltipFormat
            ? e.format(t, s.tooltipFormat)
            : e.format(t, s.displayFormats.datetime)
    }
    _tickFormatFunction(t, e, s, n) {
        let r = this.options,
            o = r.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            c = a && o[a],
            h = l && o[l],
            u = s[e],
            d = l && h && u && u.major,
            f = this._adapter.format(t, n || (d ? h : c)),
            m = r.ticks.callback
        return m ? $(m, [f, e, s], this) : f
    }
    generateTickLabels(t) {
        let e, s, n
        for (e = 0, s = t.length; e < s; ++e)
            (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t))
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min)
    }
    getPixelForValue(t) {
        let e = this._offsets,
            s = this.getDecimalForValue(t)
        return this.getPixelForDecimal((e.start + s) * e.factor)
    }
    getValueForPixel(t) {
        let e = this._offsets,
            s = this.getDecimalForPixel(t) / e.factor - e.end
        return this.min + s * (this.max - this.min)
    }
    _getLabelSize(t) {
        let e = this.options.ticks,
            s = this.ctx.measureText(t).width,
            n = _t(this.isHorizontal() ? e.maxRotation : e.minRotation),
            r = Math.cos(n),
            o = Math.sin(n),
            a = this._resolveTickFontOptions(0).size
        return { w: s * r + a * o, h: s * o + a * r }
    }
    _getLabelCapacity(t) {
        let e = this.options.time,
            s = e.displayFormats,
            n = s[e.unit] || s.millisecond,
            r = this._tickFormatFunction(
                t,
                0,
                Ka(this, [t], this._majorUnit),
                n,
            ),
            o = this._getLabelSize(r),
            a =
                Math.floor(
                    this.isHorizontal() ? this.width / o.w : this.height / o.h,
                ) - 1
        return a > 0 ? a : 1
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            e,
            s
        if (t.length) return t
        let n = this.getMatchingVisibleMetas()
        if (this._normalized && n.length)
            return (this._cache.data = n[0].controller.getAllParsedValues(this))
        for (e = 0, s = n.length; e < s; ++e)
            t = t.concat(n[e].controller.getAllParsedValues(this))
        return (this._cache.data = this.normalize(t))
    }
    getLabelTimestamps() {
        let t = this._cache.labels || [],
            e,
            s
        if (t.length) return t
        let n = this.getLabels()
        for (e = 0, s = n.length; e < s; ++e) t.push(qa(this, n[e]))
        return (this._cache.labels = this._normalized ? t : this.normalize(t))
    }
    normalize(t) {
        return Nn(t.sort(Pf))
    }
}
we.id = 'time'
we.defaults = {
    bounds: 'data',
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: 'millisecond',
        displayFormats: {},
    },
    ticks: { source: 'auto', major: { enabled: !1 } },
}
function Hs(i, t, e) {
    let s = 0,
        n = i.length - 1,
        r,
        o,
        a,
        l
    e
        ? (t >= i[s].pos &&
              t <= i[n].pos &&
              ({ lo: s, hi: n } = Ct(i, 'pos', t)),
          ({ pos: r, time: a } = i[s]),
          ({ pos: o, time: l } = i[n]))
        : (t >= i[s].time &&
              t <= i[n].time &&
              ({ lo: s, hi: n } = Ct(i, 'time', t)),
          ({ time: r, pos: a } = i[s]),
          ({ time: o, pos: l } = i[n]))
    let c = o - r
    return c ? a + ((l - a) * (t - r)) / c : a
}
var Wi = class extends we {
    constructor(t) {
        super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0)
    }
    initOffsets() {
        let t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t))
        ;(this._minPos = Hs(e, this.min)),
            (this._tableRange = Hs(e, this.max) - this._minPos),
            super.initOffsets(t)
    }
    buildLookupTable(t) {
        let { min: e, max: s } = this,
            n = [],
            r = [],
            o,
            a,
            l,
            c,
            h
        for (o = 0, a = t.length; o < a; ++o)
            (c = t[o]), c >= e && c <= s && n.push(c)
        if (n.length < 2)
            return [
                { time: e, pos: 0 },
                { time: s, pos: 1 },
            ]
        for (o = 0, a = n.length; o < a; ++o)
            (h = n[o + 1]),
                (l = n[o - 1]),
                (c = n[o]),
                Math.round((h + l) / 2) !== c &&
                    r.push({ time: c, pos: o / (a - 1) })
        return r
    }
    _getTimestampsForTable() {
        let t = this._cache.all || []
        if (t.length) return t
        let e = this.getDataTimestamps(),
            s = this.getLabelTimestamps()
        return (
            e.length && s.length
                ? (t = this.normalize(e.concat(s)))
                : (t = e.length ? e : s),
            (t = this._cache.all = t),
            t
        )
    }
    getDecimalForValue(t) {
        return (Hs(this._table, t) - this._minPos) / this._tableRange
    }
    getValueForPixel(t) {
        let e = this._offsets,
            s = this.getDecimalForPixel(t) / e.factor - e.end
        return Hs(this._table, s * this._tableRange + this._minPos, !0)
    }
}
Wi.id = 'timeseries'
Wi.defaults = we.defaults
var zf = Object.freeze({
        __proto__: null,
        CategoryScale: Ke,
        LinearScale: Ni,
        LogarithmicScale: Ri,
        RadialLinearScale: _e,
        TimeScale: we,
        TimeSeriesScale: Wi,
    }),
    yl = [Ou, Ad, xf, zf]
xe.register(...yl)
var Rt = xe
var jt = class extends Error {},
    Ks = class extends jt {
        constructor(t) {
            super(`Invalid DateTime: ${t.toMessage()}`)
        }
    },
    Js = class extends jt {
        constructor(t) {
            super(`Invalid Interval: ${t.toMessage()}`)
        }
    },
    Qs = class extends jt {
        constructor(t) {
            super(`Invalid Duration: ${t.toMessage()}`)
        }
    },
    Tt = class extends jt {},
    Qe = class extends jt {
        constructor(t) {
            super(`Invalid unit ${t}`)
        }
    },
    G = class extends jt {},
    vt = class extends jt {
        constructor() {
            super('Zone is an abstract class')
        }
    }
var M = 'numeric',
    Ot = 'short',
    yt = 'long',
    re = { year: M, month: M, day: M },
    Vi = { year: M, month: Ot, day: M },
    Er = { year: M, month: Ot, day: M, weekday: Ot },
    Hi = { year: M, month: yt, day: M },
    Bi = { year: M, month: yt, day: M, weekday: yt },
    $i = { hour: M, minute: M },
    ji = { hour: M, minute: M, second: M },
    Ui = { hour: M, minute: M, second: M, timeZoneName: Ot },
    Yi = { hour: M, minute: M, second: M, timeZoneName: yt },
    Zi = { hour: M, minute: M, hourCycle: 'h23' },
    qi = { hour: M, minute: M, second: M, hourCycle: 'h23' },
    Gi = { hour: M, minute: M, second: M, hourCycle: 'h23', timeZoneName: Ot },
    Xi = { hour: M, minute: M, second: M, hourCycle: 'h23', timeZoneName: yt },
    Ki = { year: M, month: M, day: M, hour: M, minute: M },
    Ji = { year: M, month: M, day: M, hour: M, minute: M, second: M },
    Qi = { year: M, month: Ot, day: M, hour: M, minute: M },
    ts = { year: M, month: Ot, day: M, hour: M, minute: M, second: M },
    Ir = { year: M, month: Ot, day: M, weekday: Ot, hour: M, minute: M },
    es = { year: M, month: yt, day: M, hour: M, minute: M, timeZoneName: Ot },
    is = {
        year: M,
        month: yt,
        day: M,
        hour: M,
        minute: M,
        second: M,
        timeZoneName: Ot,
    },
    ss = {
        year: M,
        month: yt,
        day: M,
        weekday: yt,
        hour: M,
        minute: M,
        timeZoneName: yt,
    },
    ns = {
        year: M,
        month: yt,
        day: M,
        weekday: yt,
        hour: M,
        minute: M,
        second: M,
        timeZoneName: yt,
    }
var ut = class {
    get type() {
        throw new vt()
    }
    get name() {
        throw new vt()
    }
    get ianaName() {
        return this.name
    }
    get isUniversal() {
        throw new vt()
    }
    offsetName(t, e) {
        throw new vt()
    }
    formatOffset(t, e) {
        throw new vt()
    }
    offset(t) {
        throw new vt()
    }
    equals(t) {
        throw new vt()
    }
    get isValid() {
        throw new vt()
    }
}
var Cr = null,
    oe = class i extends ut {
        static get instance() {
            return Cr === null && (Cr = new i()), Cr
        }
        get type() {
            return 'system'
        }
        get name() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone
        }
        get isUniversal() {
            return !1
        }
        offsetName(t, { format: e, locale: s }) {
            return en(t, e, s)
        }
        formatOffset(t, e) {
            return ae(this.offset(t), e)
        }
        offset(t) {
            return -new Date(t).getTimezoneOffset()
        }
        equals(t) {
            return t.type === 'system'
        }
        get isValid() {
            return !0
        }
    }
var nn = {}
function Vf(i) {
    return (
        nn[i] ||
            (nn[i] = new Intl.DateTimeFormat('en-US', {
                hour12: !1,
                timeZone: i,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                era: 'short',
            })),
        nn[i]
    )
}
var Hf = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 }
function Bf(i, t) {
    let e = i.format(t).replace(/\u200E/g, ''),
        s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),
        [, n, r, o, a, l, c, h] = s
    return [o, n, r, a, l, c, h]
}
function $f(i, t) {
    let e = i.formatToParts(t),
        s = []
    for (let n = 0; n < e.length; n++) {
        let { type: r, value: o } = e[n],
            a = Hf[r]
        r === 'era' ? (s[a] = o) : O(a) || (s[a] = parseInt(o, 10))
    }
    return s
}
var sn = {},
    at = class i extends ut {
        static create(t) {
            return sn[t] || (sn[t] = new i(t)), sn[t]
        }
        static resetCache() {
            ;(sn = {}), (nn = {})
        }
        static isValidSpecifier(t) {
            return this.isValidZone(t)
        }
        static isValidZone(t) {
            if (!t) return !1
            try {
                return (
                    new Intl.DateTimeFormat('en-US', { timeZone: t }).format(),
                    !0
                )
            } catch {
                return !1
            }
        }
        constructor(t) {
            super(), (this.zoneName = t), (this.valid = i.isValidZone(t))
        }
        get type() {
            return 'iana'
        }
        get name() {
            return this.zoneName
        }
        get isUniversal() {
            return !1
        }
        offsetName(t, { format: e, locale: s }) {
            return en(t, e, s, this.name)
        }
        formatOffset(t, e) {
            return ae(this.offset(t), e)
        }
        offset(t) {
            let e = new Date(t)
            if (isNaN(e)) return NaN
            let s = Vf(this.name),
                [n, r, o, a, l, c, h] = s.formatToParts ? $f(s, e) : Bf(s, e)
            a === 'BC' && (n = -Math.abs(n) + 1)
            let d = ti({
                    year: n,
                    month: r,
                    day: o,
                    hour: l === 24 ? 0 : l,
                    minute: c,
                    second: h,
                    millisecond: 0,
                }),
                f = +e,
                m = f % 1e3
            return (f -= m >= 0 ? m : 1e3 + m), (d - f) / (60 * 1e3)
        }
        equals(t) {
            return t.type === 'iana' && t.name === this.name
        }
        get isValid() {
            return this.valid
        }
    }
var bl = {}
function jf(i, t = {}) {
    let e = JSON.stringify([i, t]),
        s = bl[e]
    return s || ((s = new Intl.ListFormat(i, t)), (bl[e] = s)), s
}
var Fr = {}
function Ar(i, t = {}) {
    let e = JSON.stringify([i, t]),
        s = Fr[e]
    return s || ((s = new Intl.DateTimeFormat(i, t)), (Fr[e] = s)), s
}
var Lr = {}
function Uf(i, t = {}) {
    let e = JSON.stringify([i, t]),
        s = Lr[e]
    return s || ((s = new Intl.NumberFormat(i, t)), (Lr[e] = s)), s
}
var Pr = {}
function Yf(i, t = {}) {
    let { base: e, ...s } = t,
        n = JSON.stringify([i, s]),
        r = Pr[n]
    return r || ((r = new Intl.RelativeTimeFormat(i, t)), (Pr[n] = r)), r
}
var rs = null
function Zf() {
    return rs || ((rs = new Intl.DateTimeFormat().resolvedOptions().locale), rs)
}
var xl = {}
function qf(i) {
    let t = xl[i]
    if (!t) {
        let e = new Intl.Locale(i)
        ;(t = 'getWeekInfo' in e ? e.getWeekInfo() : e.weekInfo), (xl[i] = t)
    }
    return t
}
function Gf(i) {
    let t = i.indexOf('-x-')
    t !== -1 && (i = i.substring(0, t))
    let e = i.indexOf('-u-')
    if (e === -1) return [i]
    {
        let s, n
        try {
            ;(s = Ar(i).resolvedOptions()), (n = i)
        } catch {
            let l = i.substring(0, e)
            ;(s = Ar(l).resolvedOptions()), (n = l)
        }
        let { numberingSystem: r, calendar: o } = s
        return [n, r, o]
    }
}
function Xf(i, t, e) {
    return (
        (e || t) &&
            (i.includes('-u-') || (i += '-u'),
            e && (i += `-ca-${e}`),
            t && (i += `-nu-${t}`)),
        i
    )
}
function Kf(i) {
    let t = []
    for (let e = 1; e <= 12; e++) {
        let s = I.utc(2009, e, 1)
        t.push(i(s))
    }
    return t
}
function Jf(i) {
    let t = []
    for (let e = 1; e <= 7; e++) {
        let s = I.utc(2016, 11, 13 + e)
        t.push(i(s))
    }
    return t
}
function rn(i, t, e, s) {
    let n = i.listingMode()
    return n === 'error' ? null : n === 'en' ? e(t) : s(t)
}
function Qf(i) {
    return i.numberingSystem && i.numberingSystem !== 'latn'
        ? !1
        : i.numberingSystem === 'latn' ||
              !i.locale ||
              i.locale.startsWith('en') ||
              new Intl.DateTimeFormat(i.intl).resolvedOptions()
                  .numberingSystem === 'latn'
}
var Nr = class {
        constructor(t, e, s) {
            ;(this.padTo = s.padTo || 0), (this.floor = s.floor || !1)
            let { padTo: n, floor: r, ...o } = s
            if (!e || Object.keys(o).length > 0) {
                let a = { useGrouping: !1, ...s }
                s.padTo > 0 && (a.minimumIntegerDigits = s.padTo),
                    (this.inf = Uf(t, a))
            }
        }
        format(t) {
            if (this.inf) {
                let e = this.floor ? Math.floor(t) : t
                return this.inf.format(e)
            } else {
                let e = this.floor ? Math.floor(t) : ei(t, 3)
                return Y(e, this.padTo)
            }
        }
    },
    Rr = class {
        constructor(t, e, s) {
            ;(this.opts = s), (this.originalZone = void 0)
            let n
            if (this.opts.timeZone) this.dt = t
            else if (t.zone.type === 'fixed') {
                let o = -1 * (t.offset / 60),
                    a = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`
                t.offset !== 0 && at.create(a).valid
                    ? ((n = a), (this.dt = t))
                    : ((n = 'UTC'),
                      (this.dt =
                          t.offset === 0
                              ? t
                              : t.setZone('UTC').plus({ minutes: t.offset })),
                      (this.originalZone = t.zone))
            } else
                t.zone.type === 'system'
                    ? (this.dt = t)
                    : t.zone.type === 'iana'
                      ? ((this.dt = t), (n = t.zone.name))
                      : ((n = 'UTC'),
                        (this.dt = t
                            .setZone('UTC')
                            .plus({ minutes: t.offset })),
                        (this.originalZone = t.zone))
            let r = { ...this.opts }
            ;(r.timeZone = r.timeZone || n), (this.dtf = Ar(e, r))
        }
        format() {
            return this.originalZone
                ? this.formatToParts()
                      .map(({ value: t }) => t)
                      .join('')
                : this.dtf.format(this.dt.toJSDate())
        }
        formatToParts() {
            let t = this.dtf.formatToParts(this.dt.toJSDate())
            return this.originalZone
                ? t.map((e) => {
                      if (e.type === 'timeZoneName') {
                          let s = this.originalZone.offsetName(this.dt.ts, {
                              locale: this.dt.locale,
                              format: this.opts.timeZoneName,
                          })
                          return { ...e, value: s }
                      } else return e
                  })
                : t
        }
        resolvedOptions() {
            return this.dtf.resolvedOptions()
        }
    },
    Wr = class {
        constructor(t, e, s) {
            ;(this.opts = { style: 'long', ...s }),
                !e && on() && (this.rtf = Yf(t, s))
        }
        format(t, e) {
            return this.rtf
                ? this.rtf.format(t, e)
                : _l(e, t, this.opts.numeric, this.opts.style !== 'long')
        }
        formatToParts(t, e) {
            return this.rtf ? this.rtf.formatToParts(t, e) : []
        }
    },
    tm = { firstDay: 1, minimalDays: 4, weekend: [6, 7] },
    W = class i {
        static fromOpts(t) {
            return i.create(
                t.locale,
                t.numberingSystem,
                t.outputCalendar,
                t.weekSettings,
                t.defaultToEN,
            )
        }
        static create(t, e, s, n, r = !1) {
            let o = t || R.defaultLocale,
                a = o || (r ? 'en-US' : Zf()),
                l = e || R.defaultNumberingSystem,
                c = s || R.defaultOutputCalendar,
                h = os(n) || R.defaultWeekSettings
            return new i(a, l, c, h, o)
        }
        static resetCache() {
            ;(rs = null), (Fr = {}), (Lr = {}), (Pr = {})
        }
        static fromObject({
            locale: t,
            numberingSystem: e,
            outputCalendar: s,
            weekSettings: n,
        } = {}) {
            return i.create(t, e, s, n)
        }
        constructor(t, e, s, n, r) {
            let [o, a, l] = Gf(t)
            ;(this.locale = o),
                (this.numberingSystem = e || a || null),
                (this.outputCalendar = s || l || null),
                (this.weekSettings = n),
                (this.intl = Xf(
                    this.locale,
                    this.numberingSystem,
                    this.outputCalendar,
                )),
                (this.weekdaysCache = { format: {}, standalone: {} }),
                (this.monthsCache = { format: {}, standalone: {} }),
                (this.meridiemCache = null),
                (this.eraCache = {}),
                (this.specifiedLocale = r),
                (this.fastNumbersCached = null)
        }
        get fastNumbers() {
            return (
                this.fastNumbersCached == null &&
                    (this.fastNumbersCached = Qf(this)),
                this.fastNumbersCached
            )
        }
        listingMode() {
            let t = this.isEnglish(),
                e =
                    (this.numberingSystem === null ||
                        this.numberingSystem === 'latn') &&
                    (this.outputCalendar === null ||
                        this.outputCalendar === 'gregory')
            return t && e ? 'en' : 'intl'
        }
        clone(t) {
            return !t || Object.getOwnPropertyNames(t).length === 0
                ? this
                : i.create(
                      t.locale || this.specifiedLocale,
                      t.numberingSystem || this.numberingSystem,
                      t.outputCalendar || this.outputCalendar,
                      os(t.weekSettings) || this.weekSettings,
                      t.defaultToEN || !1,
                  )
        }
        redefaultToEN(t = {}) {
            return this.clone({ ...t, defaultToEN: !0 })
        }
        redefaultToSystem(t = {}) {
            return this.clone({ ...t, defaultToEN: !1 })
        }
        months(t, e = !1) {
            return rn(this, t, zr, () => {
                let s = e ? { month: t, day: 'numeric' } : { month: t },
                    n = e ? 'format' : 'standalone'
                return (
                    this.monthsCache[n][t] ||
                        (this.monthsCache[n][t] = Kf((r) =>
                            this.extract(r, s, 'month'),
                        )),
                    this.monthsCache[n][t]
                )
            })
        }
        weekdays(t, e = !1) {
            return rn(this, t, Vr, () => {
                let s = e
                        ? {
                              weekday: t,
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                          }
                        : { weekday: t },
                    n = e ? 'format' : 'standalone'
                return (
                    this.weekdaysCache[n][t] ||
                        (this.weekdaysCache[n][t] = Jf((r) =>
                            this.extract(r, s, 'weekday'),
                        )),
                    this.weekdaysCache[n][t]
                )
            })
        }
        meridiems() {
            return rn(
                this,
                void 0,
                () => Hr,
                () => {
                    if (!this.meridiemCache) {
                        let t = { hour: 'numeric', hourCycle: 'h12' }
                        this.meridiemCache = [
                            I.utc(2016, 11, 13, 9),
                            I.utc(2016, 11, 13, 19),
                        ].map((e) => this.extract(e, t, 'dayperiod'))
                    }
                    return this.meridiemCache
                },
            )
        }
        eras(t) {
            return rn(this, t, Br, () => {
                let e = { era: t }
                return (
                    this.eraCache[t] ||
                        (this.eraCache[t] = [
                            I.utc(-40, 1, 1),
                            I.utc(2017, 1, 1),
                        ].map((s) => this.extract(s, e, 'era'))),
                    this.eraCache[t]
                )
            })
        }
        extract(t, e, s) {
            let n = this.dtFormatter(t, e),
                r = n.formatToParts(),
                o = r.find((a) => a.type.toLowerCase() === s)
            return o ? o.value : null
        }
        numberFormatter(t = {}) {
            return new Nr(this.intl, t.forceSimple || this.fastNumbers, t)
        }
        dtFormatter(t, e = {}) {
            return new Rr(t, this.intl, e)
        }
        relFormatter(t = {}) {
            return new Wr(this.intl, this.isEnglish(), t)
        }
        listFormatter(t = {}) {
            return jf(this.intl, t)
        }
        isEnglish() {
            return (
                this.locale === 'en' ||
                this.locale.toLowerCase() === 'en-us' ||
                new Intl.DateTimeFormat(this.intl)
                    .resolvedOptions()
                    .locale.startsWith('en-us')
            )
        }
        getWeekSettings() {
            return this.weekSettings
                ? this.weekSettings
                : an()
                  ? qf(this.locale)
                  : tm
        }
        getStartOfWeek() {
            return this.getWeekSettings().firstDay
        }
        getMinDaysInFirstWeek() {
            return this.getWeekSettings().minimalDays
        }
        getWeekendDays() {
            return this.getWeekSettings().weekend
        }
        equals(t) {
            return (
                this.locale === t.locale &&
                this.numberingSystem === t.numberingSystem &&
                this.outputCalendar === t.outputCalendar
            )
        }
        toString() {
            return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`
        }
    }
var jr = null,
    et = class i extends ut {
        static get utcInstance() {
            return jr === null && (jr = new i(0)), jr
        }
        static instance(t) {
            return t === 0 ? i.utcInstance : new i(t)
        }
        static parseSpecifier(t) {
            if (t) {
                let e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
                if (e) return new i(Se(e[1], e[2]))
            }
            return null
        }
        constructor(t) {
            super(), (this.fixed = t)
        }
        get type() {
            return 'fixed'
        }
        get name() {
            return this.fixed === 0 ? 'UTC' : `UTC${ae(this.fixed, 'narrow')}`
        }
        get ianaName() {
            return this.fixed === 0
                ? 'Etc/UTC'
                : `Etc/GMT${ae(-this.fixed, 'narrow')}`
        }
        offsetName() {
            return this.name
        }
        formatOffset(t, e) {
            return ae(this.fixed, e)
        }
        get isUniversal() {
            return !0
        }
        offset() {
            return this.fixed
        }
        equals(t) {
            return t.type === 'fixed' && t.fixed === this.fixed
        }
        get isValid() {
            return !0
        }
    }
var ii = class extends ut {
    constructor(t) {
        super(), (this.zoneName = t)
    }
    get type() {
        return 'invalid'
    }
    get name() {
        return this.zoneName
    }
    get isUniversal() {
        return !1
    }
    offsetName() {
        return null
    }
    formatOffset() {
        return ''
    }
    offset() {
        return NaN
    }
    equals() {
        return !1
    }
    get isValid() {
        return !1
    }
}
function Dt(i, t) {
    let e
    if (O(i) || i === null) return t
    if (i instanceof ut) return i
    if (wl(i)) {
        let s = i.toLowerCase()
        return s === 'default'
            ? t
            : s === 'local' || s === 'system'
              ? oe.instance
              : s === 'utc' || s === 'gmt'
                ? et.utcInstance
                : et.parseSpecifier(s) || at.create(i)
    } else
        return Et(i)
            ? et.instance(i)
            : typeof i == 'object' &&
                'offset' in i &&
                typeof i.offset == 'function'
              ? i
              : new ii(i)
}
var Ur = {
        arab: '[\u0660-\u0669]',
        arabext: '[\u06F0-\u06F9]',
        bali: '[\u1B50-\u1B59]',
        beng: '[\u09E6-\u09EF]',
        deva: '[\u0966-\u096F]',
        fullwide: '[\uFF10-\uFF19]',
        gujr: '[\u0AE6-\u0AEF]',
        hanidec:
            '[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]',
        khmr: '[\u17E0-\u17E9]',
        knda: '[\u0CE6-\u0CEF]',
        laoo: '[\u0ED0-\u0ED9]',
        limb: '[\u1946-\u194F]',
        mlym: '[\u0D66-\u0D6F]',
        mong: '[\u1810-\u1819]',
        mymr: '[\u1040-\u1049]',
        orya: '[\u0B66-\u0B6F]',
        tamldec: '[\u0BE6-\u0BEF]',
        telu: '[\u0C66-\u0C6F]',
        thai: '[\u0E50-\u0E59]',
        tibt: '[\u0F20-\u0F29]',
        latn: '\\d',
    },
    Sl = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
    },
    em = Ur.hanidec.replace(/[\[|\]]/g, '').split('')
function kl(i) {
    let t = parseInt(i, 10)
    if (isNaN(t)) {
        t = ''
        for (let e = 0; e < i.length; e++) {
            let s = i.charCodeAt(e)
            if (i[e].search(Ur.hanidec) !== -1) t += em.indexOf(i[e])
            else
                for (let n in Sl) {
                    let [r, o] = Sl[n]
                    s >= r && s <= o && (t += s - r)
                }
        }
        return parseInt(t, 10)
    } else return t
}
var si = {}
function Ml() {
    si = {}
}
function wt({ numberingSystem: i }, t = '') {
    let e = i || 'latn'
    return (
        si[e] || (si[e] = {}),
        si[e][t] || (si[e][t] = new RegExp(`${Ur[e]}${t}`)),
        si[e][t]
    )
}
var Tl = () => Date.now(),
    vl = 'system',
    Ol = null,
    Dl = null,
    El = null,
    Il = 60,
    Cl,
    Fl = null,
    R = class {
        static get now() {
            return Tl
        }
        static set now(t) {
            Tl = t
        }
        static set defaultZone(t) {
            vl = t
        }
        static get defaultZone() {
            return Dt(vl, oe.instance)
        }
        static get defaultLocale() {
            return Ol
        }
        static set defaultLocale(t) {
            Ol = t
        }
        static get defaultNumberingSystem() {
            return Dl
        }
        static set defaultNumberingSystem(t) {
            Dl = t
        }
        static get defaultOutputCalendar() {
            return El
        }
        static set defaultOutputCalendar(t) {
            El = t
        }
        static get defaultWeekSettings() {
            return Fl
        }
        static set defaultWeekSettings(t) {
            Fl = os(t)
        }
        static get twoDigitCutoffYear() {
            return Il
        }
        static set twoDigitCutoffYear(t) {
            Il = t % 100
        }
        static get throwOnInvalid() {
            return Cl
        }
        static set throwOnInvalid(t) {
            Cl = t
        }
        static resetCaches() {
            W.resetCache(), at.resetCache(), I.resetCache(), Ml()
        }
    }
var it = class {
    constructor(t, e) {
        ;(this.reason = t), (this.explanation = e)
    }
    toMessage() {
        return this.explanation
            ? `${this.reason}: ${this.explanation}`
            : this.reason
    }
}
var Al = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    Ll = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
function St(i, t) {
    return new it(
        'unit out of range',
        `you specified ${t} (of type ${typeof t}) as a ${i}, which is invalid`,
    )
}
function ln(i, t, e) {
    let s = new Date(Date.UTC(i, t - 1, e))
    i < 100 && i >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900)
    let n = s.getUTCDay()
    return n === 0 ? 7 : n
}
function Pl(i, t, e) {
    return e + (Me(i) ? Ll : Al)[t - 1]
}
function Nl(i, t) {
    let e = Me(i) ? Ll : Al,
        s = e.findIndex((r) => r < t),
        n = t - e[s]
    return { month: s + 1, day: n }
}
function cn(i, t) {
    return ((i - t + 7) % 7) + 1
}
function as(i, t = 4, e = 1) {
    let { year: s, month: n, day: r } = i,
        o = Pl(s, n, r),
        a = cn(ln(s, n, r), e),
        l = Math.floor((o - a + 14 - t) / 7),
        c
    return (
        l < 1
            ? ((c = s - 1), (l = ke(c, t, e)))
            : l > ke(s, t, e)
              ? ((c = s + 1), (l = 1))
              : (c = s),
        { weekYear: c, weekNumber: l, weekday: a, ...cs(i) }
    )
}
function Yr(i, t = 4, e = 1) {
    let { weekYear: s, weekNumber: n, weekday: r } = i,
        o = cn(ln(s, 1, t), e),
        a = le(s),
        l = n * 7 + r - o - 7 + t,
        c
    l < 1
        ? ((c = s - 1), (l += le(c)))
        : l > a
          ? ((c = s + 1), (l -= le(s)))
          : (c = s)
    let { month: h, day: u } = Nl(c, l)
    return { year: c, month: h, day: u, ...cs(i) }
}
function hn(i) {
    let { year: t, month: e, day: s } = i,
        n = Pl(t, e, s)
    return { year: t, ordinal: n, ...cs(i) }
}
function Zr(i) {
    let { year: t, ordinal: e } = i,
        { month: s, day: n } = Nl(t, e)
    return { year: t, month: s, day: n, ...cs(i) }
}
function qr(i, t) {
    if (!O(i.localWeekday) || !O(i.localWeekNumber) || !O(i.localWeekYear)) {
        if (!O(i.weekday) || !O(i.weekNumber) || !O(i.weekYear))
            throw new Tt(
                'Cannot mix locale-based week fields with ISO-based week fields',
            )
        return (
            O(i.localWeekday) || (i.weekday = i.localWeekday),
            O(i.localWeekNumber) || (i.weekNumber = i.localWeekNumber),
            O(i.localWeekYear) || (i.weekYear = i.localWeekYear),
            delete i.localWeekday,
            delete i.localWeekNumber,
            delete i.localWeekYear,
            {
                minDaysInFirstWeek: t.getMinDaysInFirstWeek(),
                startOfWeek: t.getStartOfWeek(),
            }
        )
    } else return { minDaysInFirstWeek: 4, startOfWeek: 1 }
}
function Rl(i, t = 4, e = 1) {
    let s = ls(i.weekYear),
        n = bt(i.weekNumber, 1, ke(i.weekYear, t, e)),
        r = bt(i.weekday, 1, 7)
    return s
        ? n
            ? r
                ? !1
                : St('weekday', i.weekday)
            : St('week', i.weekNumber)
        : St('weekYear', i.weekYear)
}
function Wl(i) {
    let t = ls(i.year),
        e = bt(i.ordinal, 1, le(i.year))
    return t ? (e ? !1 : St('ordinal', i.ordinal)) : St('year', i.year)
}
function Gr(i) {
    let t = ls(i.year),
        e = bt(i.month, 1, 12),
        s = bt(i.day, 1, ni(i.year, i.month))
    return t
        ? e
            ? s
                ? !1
                : St('day', i.day)
            : St('month', i.month)
        : St('year', i.year)
}
function Xr(i) {
    let { hour: t, minute: e, second: s, millisecond: n } = i,
        r = bt(t, 0, 23) || (t === 24 && e === 0 && s === 0 && n === 0),
        o = bt(e, 0, 59),
        a = bt(s, 0, 59),
        l = bt(n, 0, 999)
    return r
        ? o
            ? a
                ? l
                    ? !1
                    : St('millisecond', n)
                : St('second', s)
            : St('minute', e)
        : St('hour', t)
}
function O(i) {
    return typeof i > 'u'
}
function Et(i) {
    return typeof i == 'number'
}
function ls(i) {
    return typeof i == 'number' && i % 1 === 0
}
function wl(i) {
    return typeof i == 'string'
}
function Vl(i) {
    return Object.prototype.toString.call(i) === '[object Date]'
}
function on() {
    try {
        return typeof Intl < 'u' && !!Intl.RelativeTimeFormat
    } catch {
        return !1
    }
}
function an() {
    try {
        return (
            typeof Intl < 'u' &&
            !!Intl.Locale &&
            ('weekInfo' in Intl.Locale.prototype ||
                'getWeekInfo' in Intl.Locale.prototype)
        )
    } catch {
        return !1
    }
}
function Hl(i) {
    return Array.isArray(i) ? i : [i]
}
function Kr(i, t, e) {
    if (i.length !== 0)
        return i.reduce((s, n) => {
            let r = [t(n), n]
            return s && e(s[0], r[0]) === s[0] ? s : r
        }, null)[1]
}
function Bl(i, t) {
    return t.reduce((e, s) => ((e[s] = i[s]), e), {})
}
function ce(i, t) {
    return Object.prototype.hasOwnProperty.call(i, t)
}
function os(i) {
    if (i == null) return null
    if (typeof i != 'object') throw new G('Week settings must be an object')
    if (
        !bt(i.firstDay, 1, 7) ||
        !bt(i.minimalDays, 1, 7) ||
        !Array.isArray(i.weekend) ||
        i.weekend.some((t) => !bt(t, 1, 7))
    )
        throw new G('Invalid week settings')
    return {
        firstDay: i.firstDay,
        minimalDays: i.minimalDays,
        weekend: Array.from(i.weekend),
    }
}
function bt(i, t, e) {
    return ls(i) && i >= t && i <= e
}
function im(i, t) {
    return i - t * Math.floor(i / t)
}
function Y(i, t = 2) {
    let e = i < 0,
        s
    return (
        e
            ? (s = '-' + ('' + -i).padStart(t, '0'))
            : (s = ('' + i).padStart(t, '0')),
        s
    )
}
function Ut(i) {
    if (!(O(i) || i === null || i === '')) return parseInt(i, 10)
}
function he(i) {
    if (!(O(i) || i === null || i === '')) return parseFloat(i)
}
function hs(i) {
    if (!(O(i) || i === null || i === '')) {
        let t = parseFloat('0.' + i) * 1e3
        return Math.floor(t)
    }
}
function ei(i, t, e = !1) {
    let s = 10 ** t
    return (e ? Math.trunc : Math.round)(i * s) / s
}
function Me(i) {
    return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)
}
function le(i) {
    return Me(i) ? 366 : 365
}
function ni(i, t) {
    let e = im(t - 1, 12) + 1,
        s = i + (t - e) / 12
    return e === 2
        ? Me(s)
            ? 29
            : 28
        : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e - 1]
}
function ti(i) {
    let t = Date.UTC(
        i.year,
        i.month - 1,
        i.day,
        i.hour,
        i.minute,
        i.second,
        i.millisecond,
    )
    return (
        i.year < 100 &&
            i.year >= 0 &&
            ((t = new Date(t)), t.setUTCFullYear(i.year, i.month - 1, i.day)),
        +t
    )
}
function zl(i, t, e) {
    return -cn(ln(i, 1, t), e) + t - 1
}
function ke(i, t = 4, e = 1) {
    let s = zl(i, t, e),
        n = zl(i + 1, t, e)
    return (le(i) - s + n) / 7
}
function us(i) {
    return i > 99 ? i : i > R.twoDigitCutoffYear ? 1900 + i : 2e3 + i
}
function en(i, t, e, s = null) {
    let n = new Date(i),
        r = {
            hourCycle: 'h23',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }
    s && (r.timeZone = s)
    let o = { timeZoneName: t, ...r },
        a = new Intl.DateTimeFormat(e, o)
            .formatToParts(n)
            .find((l) => l.type.toLowerCase() === 'timezonename')
    return a ? a.value : null
}
function Se(i, t) {
    let e = parseInt(i, 10)
    Number.isNaN(e) && (e = 0)
    let s = parseInt(t, 10) || 0,
        n = e < 0 || Object.is(e, -0) ? -s : s
    return e * 60 + n
}
function Jr(i) {
    let t = Number(i)
    if (typeof i == 'boolean' || i === '' || Number.isNaN(t))
        throw new G(`Invalid unit value ${i}`)
    return t
}
function ri(i, t) {
    let e = {}
    for (let s in i)
        if (ce(i, s)) {
            let n = i[s]
            if (n == null) continue
            e[t(s)] = Jr(n)
        }
    return e
}
function ae(i, t) {
    let e = Math.trunc(Math.abs(i / 60)),
        s = Math.trunc(Math.abs(i % 60)),
        n = i >= 0 ? '+' : '-'
    switch (t) {
        case 'short':
            return `${n}${Y(e, 2)}:${Y(s, 2)}`
        case 'narrow':
            return `${n}${e}${s > 0 ? `:${s}` : ''}`
        case 'techie':
            return `${n}${Y(e, 2)}${Y(s, 2)}`
        default:
            throw new RangeError(
                `Value format ${t} is out of range for property format`,
            )
    }
}
function cs(i) {
    return Bl(i, ['hour', 'minute', 'second', 'millisecond'])
}
var sm = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    Qr = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    nm = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
function zr(i) {
    switch (i) {
        case 'narrow':
            return [...nm]
        case 'short':
            return [...Qr]
        case 'long':
            return [...sm]
        case 'numeric':
            return [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
            ]
        case '2-digit':
            return [
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
            ]
        default:
            return null
    }
}
var to = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    eo = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    rm = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
function Vr(i) {
    switch (i) {
        case 'narrow':
            return [...rm]
        case 'short':
            return [...eo]
        case 'long':
            return [...to]
        case 'numeric':
            return ['1', '2', '3', '4', '5', '6', '7']
        default:
            return null
    }
}
var Hr = ['AM', 'PM'],
    om = ['Before Christ', 'Anno Domini'],
    am = ['BC', 'AD'],
    lm = ['B', 'A']
function Br(i) {
    switch (i) {
        case 'narrow':
            return [...lm]
        case 'short':
            return [...am]
        case 'long':
            return [...om]
        default:
            return null
    }
}
function $l(i) {
    return Hr[i.hour < 12 ? 0 : 1]
}
function jl(i, t) {
    return Vr(t)[i.weekday - 1]
}
function Ul(i, t) {
    return zr(t)[i.month - 1]
}
function Yl(i, t) {
    return Br(t)[i.year < 0 ? 0 : 1]
}
function _l(i, t, e = 'always', s = !1) {
    let n = {
            years: ['year', 'yr.'],
            quarters: ['quarter', 'qtr.'],
            months: ['month', 'mo.'],
            weeks: ['week', 'wk.'],
            days: ['day', 'day', 'days'],
            hours: ['hour', 'hr.'],
            minutes: ['minute', 'min.'],
            seconds: ['second', 'sec.'],
        },
        r = ['hours', 'minutes', 'seconds'].indexOf(i) === -1
    if (e === 'auto' && r) {
        let u = i === 'days'
        switch (t) {
            case 1:
                return u ? 'tomorrow' : `next ${n[i][0]}`
            case -1:
                return u ? 'yesterday' : `last ${n[i][0]}`
            case 0:
                return u ? 'today' : `this ${n[i][0]}`
            default:
        }
    }
    let o = Object.is(t, -0) || t < 0,
        a = Math.abs(t),
        l = a === 1,
        c = n[i],
        h = s ? (l ? c[1] : c[2] || c[1]) : l ? n[i][0] : i
    return o ? `${a} ${h} ago` : `in ${a} ${h}`
}
function Zl(i, t) {
    let e = ''
    for (let s of i) s.literal ? (e += s.val) : (e += t(s.val))
    return e
}
var cm = {
        D: re,
        DD: Vi,
        DDD: Hi,
        DDDD: Bi,
        t: $i,
        tt: ji,
        ttt: Ui,
        tttt: Yi,
        T: Zi,
        TT: qi,
        TTT: Gi,
        TTTT: Xi,
        f: Ki,
        ff: Qi,
        fff: es,
        ffff: ss,
        F: Ji,
        FF: ts,
        FFF: is,
        FFFF: ns,
    },
    st = class i {
        static create(t, e = {}) {
            return new i(t, e)
        }
        static parseFormat(t) {
            let e = null,
                s = '',
                n = !1,
                r = []
            for (let o = 0; o < t.length; o++) {
                let a = t.charAt(o)
                a === "'"
                    ? (s.length > 0 &&
                          r.push({ literal: n || /^\s+$/.test(s), val: s }),
                      (e = null),
                      (s = ''),
                      (n = !n))
                    : n || a === e
                      ? (s += a)
                      : (s.length > 0 &&
                            r.push({ literal: /^\s+$/.test(s), val: s }),
                        (s = a),
                        (e = a))
            }
            return (
                s.length > 0 &&
                    r.push({ literal: n || /^\s+$/.test(s), val: s }),
                r
            )
        }
        static macroTokenToFormatOpts(t) {
            return cm[t]
        }
        constructor(t, e) {
            ;(this.opts = e), (this.loc = t), (this.systemLoc = null)
        }
        formatWithSystemDefault(t, e) {
            return (
                this.systemLoc === null &&
                    (this.systemLoc = this.loc.redefaultToSystem()),
                this.systemLoc.dtFormatter(t, { ...this.opts, ...e }).format()
            )
        }
        dtFormatter(t, e = {}) {
            return this.loc.dtFormatter(t, { ...this.opts, ...e })
        }
        formatDateTime(t, e) {
            return this.dtFormatter(t, e).format()
        }
        formatDateTimeParts(t, e) {
            return this.dtFormatter(t, e).formatToParts()
        }
        formatInterval(t, e) {
            return this.dtFormatter(t.start, e).dtf.formatRange(
                t.start.toJSDate(),
                t.end.toJSDate(),
            )
        }
        resolvedOptions(t, e) {
            return this.dtFormatter(t, e).resolvedOptions()
        }
        num(t, e = 0) {
            if (this.opts.forceSimple) return Y(t, e)
            let s = { ...this.opts }
            return e > 0 && (s.padTo = e), this.loc.numberFormatter(s).format(t)
        }
        formatDateTimeFromString(t, e) {
            let s = this.loc.listingMode() === 'en',
                n =
                    this.loc.outputCalendar &&
                    this.loc.outputCalendar !== 'gregory',
                r = (f, m) => this.loc.extract(t, f, m),
                o = (f) =>
                    t.isOffsetFixed && t.offset === 0 && f.allowZ
                        ? 'Z'
                        : t.isValid
                          ? t.zone.formatOffset(t.ts, f.format)
                          : '',
                a = () =>
                    s
                        ? $l(t)
                        : r({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod'),
                l = (f, m) =>
                    s
                        ? Ul(t, f)
                        : r(
                              m ? { month: f } : { month: f, day: 'numeric' },
                              'month',
                          ),
                c = (f, m) =>
                    s
                        ? jl(t, f)
                        : r(
                              m
                                  ? { weekday: f }
                                  : {
                                        weekday: f,
                                        month: 'long',
                                        day: 'numeric',
                                    },
                              'weekday',
                          ),
                h = (f) => {
                    let m = i.macroTokenToFormatOpts(f)
                    return m ? this.formatWithSystemDefault(t, m) : f
                },
                u = (f) => (s ? Yl(t, f) : r({ era: f }, 'era')),
                d = (f) => {
                    switch (f) {
                        case 'S':
                            return this.num(t.millisecond)
                        case 'u':
                        case 'SSS':
                            return this.num(t.millisecond, 3)
                        case 's':
                            return this.num(t.second)
                        case 'ss':
                            return this.num(t.second, 2)
                        case 'uu':
                            return this.num(Math.floor(t.millisecond / 10), 2)
                        case 'uuu':
                            return this.num(Math.floor(t.millisecond / 100))
                        case 'm':
                            return this.num(t.minute)
                        case 'mm':
                            return this.num(t.minute, 2)
                        case 'h':
                            return this.num(
                                t.hour % 12 === 0 ? 12 : t.hour % 12,
                            )
                        case 'hh':
                            return this.num(
                                t.hour % 12 === 0 ? 12 : t.hour % 12,
                                2,
                            )
                        case 'H':
                            return this.num(t.hour)
                        case 'HH':
                            return this.num(t.hour, 2)
                        case 'Z':
                            return o({
                                format: 'narrow',
                                allowZ: this.opts.allowZ,
                            })
                        case 'ZZ':
                            return o({
                                format: 'short',
                                allowZ: this.opts.allowZ,
                            })
                        case 'ZZZ':
                            return o({
                                format: 'techie',
                                allowZ: this.opts.allowZ,
                            })
                        case 'ZZZZ':
                            return t.zone.offsetName(t.ts, {
                                format: 'short',
                                locale: this.loc.locale,
                            })
                        case 'ZZZZZ':
                            return t.zone.offsetName(t.ts, {
                                format: 'long',
                                locale: this.loc.locale,
                            })
                        case 'z':
                            return t.zoneName
                        case 'a':
                            return a()
                        case 'd':
                            return n
                                ? r({ day: 'numeric' }, 'day')
                                : this.num(t.day)
                        case 'dd':
                            return n
                                ? r({ day: '2-digit' }, 'day')
                                : this.num(t.day, 2)
                        case 'c':
                            return this.num(t.weekday)
                        case 'ccc':
                            return c('short', !0)
                        case 'cccc':
                            return c('long', !0)
                        case 'ccccc':
                            return c('narrow', !0)
                        case 'E':
                            return this.num(t.weekday)
                        case 'EEE':
                            return c('short', !1)
                        case 'EEEE':
                            return c('long', !1)
                        case 'EEEEE':
                            return c('narrow', !1)
                        case 'L':
                            return n
                                ? r(
                                      { month: 'numeric', day: 'numeric' },
                                      'month',
                                  )
                                : this.num(t.month)
                        case 'LL':
                            return n
                                ? r(
                                      { month: '2-digit', day: 'numeric' },
                                      'month',
                                  )
                                : this.num(t.month, 2)
                        case 'LLL':
                            return l('short', !0)
                        case 'LLLL':
                            return l('long', !0)
                        case 'LLLLL':
                            return l('narrow', !0)
                        case 'M':
                            return n
                                ? r({ month: 'numeric' }, 'month')
                                : this.num(t.month)
                        case 'MM':
                            return n
                                ? r({ month: '2-digit' }, 'month')
                                : this.num(t.month, 2)
                        case 'MMM':
                            return l('short', !1)
                        case 'MMMM':
                            return l('long', !1)
                        case 'MMMMM':
                            return l('narrow', !1)
                        case 'y':
                            return n
                                ? r({ year: 'numeric' }, 'year')
                                : this.num(t.year)
                        case 'yy':
                            return n
                                ? r({ year: '2-digit' }, 'year')
                                : this.num(t.year.toString().slice(-2), 2)
                        case 'yyyy':
                            return n
                                ? r({ year: 'numeric' }, 'year')
                                : this.num(t.year, 4)
                        case 'yyyyyy':
                            return n
                                ? r({ year: 'numeric' }, 'year')
                                : this.num(t.year, 6)
                        case 'G':
                            return u('short')
                        case 'GG':
                            return u('long')
                        case 'GGGGG':
                            return u('narrow')
                        case 'kk':
                            return this.num(t.weekYear.toString().slice(-2), 2)
                        case 'kkkk':
                            return this.num(t.weekYear, 4)
                        case 'W':
                            return this.num(t.weekNumber)
                        case 'WW':
                            return this.num(t.weekNumber, 2)
                        case 'n':
                            return this.num(t.localWeekNumber)
                        case 'nn':
                            return this.num(t.localWeekNumber, 2)
                        case 'ii':
                            return this.num(
                                t.localWeekYear.toString().slice(-2),
                                2,
                            )
                        case 'iiii':
                            return this.num(t.localWeekYear, 4)
                        case 'o':
                            return this.num(t.ordinal)
                        case 'ooo':
                            return this.num(t.ordinal, 3)
                        case 'q':
                            return this.num(t.quarter)
                        case 'qq':
                            return this.num(t.quarter, 2)
                        case 'X':
                            return this.num(Math.floor(t.ts / 1e3))
                        case 'x':
                            return this.num(t.ts)
                        default:
                            return h(f)
                    }
                }
            return Zl(i.parseFormat(e), d)
        }
        formatDurationFromString(t, e) {
            let s = (l) => {
                    switch (l[0]) {
                        case 'S':
                            return 'millisecond'
                        case 's':
                            return 'second'
                        case 'm':
                            return 'minute'
                        case 'h':
                            return 'hour'
                        case 'd':
                            return 'day'
                        case 'w':
                            return 'week'
                        case 'M':
                            return 'month'
                        case 'y':
                            return 'year'
                        default:
                            return null
                    }
                },
                n = (l) => (c) => {
                    let h = s(c)
                    return h ? this.num(l.get(h), c.length) : c
                },
                r = i.parseFormat(e),
                o = r.reduce(
                    (l, { literal: c, val: h }) => (c ? l : l.concat(h)),
                    [],
                ),
                a = t.shiftTo(...o.map(s).filter((l) => l))
            return Zl(r, n(a))
        }
    }
var Gl =
    /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/
function ai(...i) {
    let t = i.reduce((e, s) => e + s.source, '')
    return RegExp(`^${t}$`)
}
function li(...i) {
    return (t) =>
        i
            .reduce(
                ([e, s, n], r) => {
                    let [o, a, l] = r(t, n)
                    return [{ ...e, ...o }, a || s, l]
                },
                [{}, null, 1],
            )
            .slice(0, 2)
}
function ci(i, ...t) {
    if (i == null) return [null, null]
    for (let [e, s] of t) {
        let n = e.exec(i)
        if (n) return s(n)
    }
    return [null, null]
}
function Xl(...i) {
    return (t, e) => {
        let s = {},
            n
        for (n = 0; n < i.length; n++) s[i[n]] = Ut(t[e + n])
        return [s, null, e + n]
    }
}
var Kl = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    hm = `(?:${Kl.source}?(?:\\[(${Gl.source})\\])?)?`,
    io = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    Jl = RegExp(`${io.source}${hm}`),
    so = RegExp(`(?:T${Jl.source})?`),
    um = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    dm = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    fm = /(\d{4})-?(\d{3})/,
    mm = Xl('weekYear', 'weekNumber', 'weekDay'),
    gm = Xl('year', 'ordinal'),
    pm = /(\d{4})-(\d\d)-(\d\d)/,
    Ql = RegExp(`${io.source} ?(?:${Kl.source}|(${Gl.source}))?`),
    ym = RegExp(`(?: ${Ql.source})?`)
function oi(i, t, e) {
    let s = i[t]
    return O(s) ? e : Ut(s)
}
function bm(i, t) {
    return [
        { year: oi(i, t), month: oi(i, t + 1, 1), day: oi(i, t + 2, 1) },
        null,
        t + 3,
    ]
}
function hi(i, t) {
    return [
        {
            hours: oi(i, t, 0),
            minutes: oi(i, t + 1, 0),
            seconds: oi(i, t + 2, 0),
            milliseconds: hs(i[t + 3]),
        },
        null,
        t + 4,
    ]
}
function ds(i, t) {
    let e = !i[t] && !i[t + 1],
        s = Se(i[t + 1], i[t + 2]),
        n = e ? null : et.instance(s)
    return [{}, n, t + 3]
}
function fs(i, t) {
    let e = i[t] ? at.create(i[t]) : null
    return [{}, e, t + 1]
}
var xm = RegExp(`^T?${io.source}$`),
    _m =
        /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/
function wm(i) {
    let [t, e, s, n, r, o, a, l, c] = i,
        h = t[0] === '-',
        u = l && l[0] === '-',
        d = (f, m = !1) => (f !== void 0 && (m || (f && h)) ? -f : f)
    return [
        {
            years: d(he(e)),
            months: d(he(s)),
            weeks: d(he(n)),
            days: d(he(r)),
            hours: d(he(o)),
            minutes: d(he(a)),
            seconds: d(he(l), l === '-0'),
            milliseconds: d(hs(c), u),
        },
    ]
}
var Sm = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
}
function no(i, t, e, s, n, r, o) {
    let a = {
        year: t.length === 2 ? us(Ut(t)) : Ut(t),
        month: Qr.indexOf(e) + 1,
        day: Ut(s),
        hour: Ut(n),
        minute: Ut(r),
    }
    return (
        o && (a.second = Ut(o)),
        i && (a.weekday = i.length > 3 ? to.indexOf(i) + 1 : eo.indexOf(i) + 1),
        a
    )
}
var km =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
function Mm(i) {
    let [, t, e, s, n, r, o, a, l, c, h, u] = i,
        d = no(t, n, s, e, r, o, a),
        f
    return l ? (f = Sm[l]) : c ? (f = 0) : (f = Se(h, u)), [d, new et(f)]
}
function Tm(i) {
    return i
        .replace(/\([^()]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .trim()
}
var vm =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    Om =
        /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    Dm =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
function ql(i) {
    let [, t, e, s, n, r, o, a] = i
    return [no(t, n, s, e, r, o, a), et.utcInstance]
}
function Em(i) {
    let [, t, e, s, n, r, o, a] = i
    return [no(t, a, e, s, n, r, o), et.utcInstance]
}
var Im = ai(um, so),
    Cm = ai(dm, so),
    Fm = ai(fm, so),
    Am = ai(Jl),
    tc = li(bm, hi, ds, fs),
    Lm = li(mm, hi, ds, fs),
    Pm = li(gm, hi, ds, fs),
    Nm = li(hi, ds, fs)
function ec(i) {
    return ci(i, [Im, tc], [Cm, Lm], [Fm, Pm], [Am, Nm])
}
function ic(i) {
    return ci(Tm(i), [km, Mm])
}
function sc(i) {
    return ci(i, [vm, ql], [Om, ql], [Dm, Em])
}
function nc(i) {
    return ci(i, [_m, wm])
}
var Rm = li(hi)
function rc(i) {
    return ci(i, [xm, Rm])
}
var Wm = ai(pm, ym),
    zm = ai(Ql),
    Vm = li(hi, ds, fs)
function oc(i) {
    return ci(i, [Wm, tc], [zm, Vm])
}
var ac = 'Invalid Duration',
    cc = {
        weeks: {
            days: 7,
            hours: 7 * 24,
            minutes: 7 * 24 * 60,
            seconds: 7 * 24 * 60 * 60,
            milliseconds: 7 * 24 * 60 * 60 * 1e3,
        },
        days: {
            hours: 24,
            minutes: 24 * 60,
            seconds: 24 * 60 * 60,
            milliseconds: 24 * 60 * 60 * 1e3,
        },
        hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
        minutes: { seconds: 60, milliseconds: 60 * 1e3 },
        seconds: { milliseconds: 1e3 },
    },
    Hm = {
        years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 365 * 24,
            minutes: 365 * 24 * 60,
            seconds: 365 * 24 * 60 * 60,
            milliseconds: 365 * 24 * 60 * 60 * 1e3,
        },
        quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 91 * 24,
            minutes: 91 * 24 * 60,
            seconds: 91 * 24 * 60 * 60,
            milliseconds: 91 * 24 * 60 * 60 * 1e3,
        },
        months: {
            weeks: 4,
            days: 30,
            hours: 30 * 24,
            minutes: 30 * 24 * 60,
            seconds: 30 * 24 * 60 * 60,
            milliseconds: 30 * 24 * 60 * 60 * 1e3,
        },
        ...cc,
    },
    kt = 146097 / 400,
    ui = 146097 / 4800,
    Bm = {
        years: {
            quarters: 4,
            months: 12,
            weeks: kt / 7,
            days: kt,
            hours: kt * 24,
            minutes: kt * 24 * 60,
            seconds: kt * 24 * 60 * 60,
            milliseconds: kt * 24 * 60 * 60 * 1e3,
        },
        quarters: {
            months: 3,
            weeks: kt / 28,
            days: kt / 4,
            hours: (kt * 24) / 4,
            minutes: (kt * 24 * 60) / 4,
            seconds: (kt * 24 * 60 * 60) / 4,
            milliseconds: (kt * 24 * 60 * 60 * 1e3) / 4,
        },
        months: {
            weeks: ui / 7,
            days: ui,
            hours: ui * 24,
            minutes: ui * 24 * 60,
            seconds: ui * 24 * 60 * 60,
            milliseconds: ui * 24 * 60 * 60 * 1e3,
        },
        ...cc,
    },
    Te = [
        'years',
        'quarters',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
    ],
    $m = Te.slice(0).reverse()
function ue(i, t, e = !1) {
    let s = {
        values: e ? t.values : { ...i.values, ...(t.values || {}) },
        loc: i.loc.clone(t.loc),
        conversionAccuracy: t.conversionAccuracy || i.conversionAccuracy,
        matrix: t.matrix || i.matrix,
    }
    return new Z(s)
}
function hc(i, t) {
    let e = t.milliseconds ?? 0
    for (let s of $m.slice(1)) t[s] && (e += t[s] * i[s].milliseconds)
    return e
}
function lc(i, t) {
    let e = hc(i, t) < 0 ? -1 : 1
    Te.reduceRight((s, n) => {
        if (O(t[n])) return s
        if (s) {
            let r = t[s] * e,
                o = i[n][s],
                a = Math.floor(r / o)
            ;(t[n] += a * e), (t[s] -= a * o * e)
        }
        return n
    }, null),
        Te.reduce((s, n) => {
            if (O(t[n])) return s
            if (s) {
                let r = t[s] % 1
                ;(t[s] -= r), (t[n] += r * i[s][n])
            }
            return n
        }, null)
}
function jm(i) {
    let t = {}
    for (let [e, s] of Object.entries(i)) s !== 0 && (t[e] = s)
    return t
}
var Z = class i {
    constructor(t) {
        let e = t.conversionAccuracy === 'longterm' || !1,
            s = e ? Bm : Hm
        t.matrix && (s = t.matrix),
            (this.values = t.values),
            (this.loc = t.loc || W.create()),
            (this.conversionAccuracy = e ? 'longterm' : 'casual'),
            (this.invalid = t.invalid || null),
            (this.matrix = s),
            (this.isLuxonDuration = !0)
    }
    static fromMillis(t, e) {
        return i.fromObject({ milliseconds: t }, e)
    }
    static fromObject(t, e = {}) {
        if (t == null || typeof t != 'object')
            throw new G(
                `Duration.fromObject: argument expected to be an object, got ${t === null ? 'null' : typeof t}`,
            )
        return new i({
            values: ri(t, i.normalizeUnit),
            loc: W.fromObject(e),
            conversionAccuracy: e.conversionAccuracy,
            matrix: e.matrix,
        })
    }
    static fromDurationLike(t) {
        if (Et(t)) return i.fromMillis(t)
        if (i.isDuration(t)) return t
        if (typeof t == 'object') return i.fromObject(t)
        throw new G(`Unknown duration argument ${t} of type ${typeof t}`)
    }
    static fromISO(t, e) {
        let [s] = nc(t)
        return s
            ? i.fromObject(s, e)
            : i.invalid(
                  'unparsable',
                  `the input "${t}" can't be parsed as ISO 8601`,
              )
    }
    static fromISOTime(t, e) {
        let [s] = rc(t)
        return s
            ? i.fromObject(s, e)
            : i.invalid(
                  'unparsable',
                  `the input "${t}" can't be parsed as ISO 8601`,
              )
    }
    static invalid(t, e = null) {
        if (!t) throw new G('need to specify a reason the Duration is invalid')
        let s = t instanceof it ? t : new it(t, e)
        if (R.throwOnInvalid) throw new Qs(s)
        return new i({ invalid: s })
    }
    static normalizeUnit(t) {
        let e = {
            year: 'years',
            years: 'years',
            quarter: 'quarters',
            quarters: 'quarters',
            month: 'months',
            months: 'months',
            week: 'weeks',
            weeks: 'weeks',
            day: 'days',
            days: 'days',
            hour: 'hours',
            hours: 'hours',
            minute: 'minutes',
            minutes: 'minutes',
            second: 'seconds',
            seconds: 'seconds',
            millisecond: 'milliseconds',
            milliseconds: 'milliseconds',
        }[t && t.toLowerCase()]
        if (!e) throw new Qe(t)
        return e
    }
    static isDuration(t) {
        return (t && t.isLuxonDuration) || !1
    }
    get locale() {
        return this.isValid ? this.loc.locale : null
    }
    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null
    }
    toFormat(t, e = {}) {
        let s = { ...e, floor: e.round !== !1 && e.floor !== !1 }
        return this.isValid
            ? st.create(this.loc, s).formatDurationFromString(this, t)
            : ac
    }
    toHuman(t = {}) {
        if (!this.isValid) return ac
        let e = Te.map((s) => {
            let n = this.values[s]
            return O(n)
                ? null
                : this.loc
                      .numberFormatter({
                          style: 'unit',
                          unitDisplay: 'long',
                          ...t,
                          unit: s.slice(0, -1),
                      })
                      .format(n)
        }).filter((s) => s)
        return this.loc
            .listFormatter({
                type: 'conjunction',
                style: t.listStyle || 'narrow',
                ...t,
            })
            .format(e)
    }
    toObject() {
        return this.isValid ? { ...this.values } : {}
    }
    toISO() {
        if (!this.isValid) return null
        let t = 'P'
        return (
            this.years !== 0 && (t += this.years + 'Y'),
            (this.months !== 0 || this.quarters !== 0) &&
                (t += this.months + this.quarters * 3 + 'M'),
            this.weeks !== 0 && (t += this.weeks + 'W'),
            this.days !== 0 && (t += this.days + 'D'),
            (this.hours !== 0 ||
                this.minutes !== 0 ||
                this.seconds !== 0 ||
                this.milliseconds !== 0) &&
                (t += 'T'),
            this.hours !== 0 && (t += this.hours + 'H'),
            this.minutes !== 0 && (t += this.minutes + 'M'),
            (this.seconds !== 0 || this.milliseconds !== 0) &&
                (t += ei(this.seconds + this.milliseconds / 1e3, 3) + 'S'),
            t === 'P' && (t += 'T0S'),
            t
        )
    }
    toISOTime(t = {}) {
        if (!this.isValid) return null
        let e = this.toMillis()
        return e < 0 || e >= 864e5
            ? null
            : ((t = {
                  suppressMilliseconds: !1,
                  suppressSeconds: !1,
                  includePrefix: !1,
                  format: 'extended',
                  ...t,
                  includeOffset: !1,
              }),
              I.fromMillis(e, { zone: 'UTC' }).toISOTime(t))
    }
    toJSON() {
        return this.toISO()
    }
    toString() {
        return this.toISO()
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.isValid
            ? `Duration { values: ${JSON.stringify(this.values)} }`
            : `Duration { Invalid, reason: ${this.invalidReason} }`
    }
    toMillis() {
        return this.isValid ? hc(this.matrix, this.values) : NaN
    }
    valueOf() {
        return this.toMillis()
    }
    plus(t) {
        if (!this.isValid) return this
        let e = i.fromDurationLike(t),
            s = {}
        for (let n of Te)
            (ce(e.values, n) || ce(this.values, n)) &&
                (s[n] = e.get(n) + this.get(n))
        return ue(this, { values: s }, !0)
    }
    minus(t) {
        if (!this.isValid) return this
        let e = i.fromDurationLike(t)
        return this.plus(e.negate())
    }
    mapUnits(t) {
        if (!this.isValid) return this
        let e = {}
        for (let s of Object.keys(this.values)) e[s] = Jr(t(this.values[s], s))
        return ue(this, { values: e }, !0)
    }
    get(t) {
        return this[i.normalizeUnit(t)]
    }
    set(t) {
        if (!this.isValid) return this
        let e = { ...this.values, ...ri(t, i.normalizeUnit) }
        return ue(this, { values: e })
    }
    reconfigure({
        locale: t,
        numberingSystem: e,
        conversionAccuracy: s,
        matrix: n,
    } = {}) {
        let o = {
            loc: this.loc.clone({ locale: t, numberingSystem: e }),
            matrix: n,
            conversionAccuracy: s,
        }
        return ue(this, o)
    }
    as(t) {
        return this.isValid ? this.shiftTo(t).get(t) : NaN
    }
    normalize() {
        if (!this.isValid) return this
        let t = this.toObject()
        return lc(this.matrix, t), ue(this, { values: t }, !0)
    }
    rescale() {
        if (!this.isValid) return this
        let t = jm(this.normalize().shiftToAll().toObject())
        return ue(this, { values: t }, !0)
    }
    shiftTo(...t) {
        if (!this.isValid) return this
        if (t.length === 0) return this
        t = t.map((o) => i.normalizeUnit(o))
        let e = {},
            s = {},
            n = this.toObject(),
            r
        for (let o of Te)
            if (t.indexOf(o) >= 0) {
                r = o
                let a = 0
                for (let c in s) (a += this.matrix[c][o] * s[c]), (s[c] = 0)
                Et(n[o]) && (a += n[o])
                let l = Math.trunc(a)
                ;(e[o] = l), (s[o] = (a * 1e3 - l * 1e3) / 1e3)
            } else Et(n[o]) && (s[o] = n[o])
        for (let o in s)
            s[o] !== 0 && (e[r] += o === r ? s[o] : s[o] / this.matrix[r][o])
        return lc(this.matrix, e), ue(this, { values: e }, !0)
    }
    shiftToAll() {
        return this.isValid
            ? this.shiftTo(
                  'years',
                  'months',
                  'weeks',
                  'days',
                  'hours',
                  'minutes',
                  'seconds',
                  'milliseconds',
              )
            : this
    }
    negate() {
        if (!this.isValid) return this
        let t = {}
        for (let e of Object.keys(this.values))
            t[e] = this.values[e] === 0 ? 0 : -this.values[e]
        return ue(this, { values: t }, !0)
    }
    get years() {
        return this.isValid ? this.values.years || 0 : NaN
    }
    get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN
    }
    get months() {
        return this.isValid ? this.values.months || 0 : NaN
    }
    get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN
    }
    get days() {
        return this.isValid ? this.values.days || 0 : NaN
    }
    get hours() {
        return this.isValid ? this.values.hours || 0 : NaN
    }
    get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN
    }
    get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN
    }
    get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN
    }
    get isValid() {
        return this.invalid === null
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }
    equals(t) {
        if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1
        function e(s, n) {
            return s === void 0 || s === 0 ? n === void 0 || n === 0 : s === n
        }
        for (let s of Te) if (!e(this.values[s], t.values[s])) return !1
        return !0
    }
}
var di = 'Invalid Interval'
function Um(i, t) {
    return !i || !i.isValid
        ? Yt.invalid('missing or invalid start')
        : !t || !t.isValid
          ? Yt.invalid('missing or invalid end')
          : t < i
            ? Yt.invalid(
                  'end before start',
                  `The end of an interval must be after its start, but you had start=${i.toISO()} and end=${t.toISO()}`,
              )
            : null
}
var Yt = class i {
    constructor(t) {
        ;(this.s = t.start),
            (this.e = t.end),
            (this.invalid = t.invalid || null),
            (this.isLuxonInterval = !0)
    }
    static invalid(t, e = null) {
        if (!t) throw new G('need to specify a reason the Interval is invalid')
        let s = t instanceof it ? t : new it(t, e)
        if (R.throwOnInvalid) throw new Js(s)
        return new i({ invalid: s })
    }
    static fromDateTimes(t, e) {
        let s = fi(t),
            n = fi(e),
            r = Um(s, n)
        return r ?? new i({ start: s, end: n })
    }
    static after(t, e) {
        let s = Z.fromDurationLike(e),
            n = fi(t)
        return i.fromDateTimes(n, n.plus(s))
    }
    static before(t, e) {
        let s = Z.fromDurationLike(e),
            n = fi(t)
        return i.fromDateTimes(n.minus(s), n)
    }
    static fromISO(t, e) {
        let [s, n] = (t || '').split('/', 2)
        if (s && n) {
            let r, o
            try {
                ;(r = I.fromISO(s, e)), (o = r.isValid)
            } catch {
                o = !1
            }
            let a, l
            try {
                ;(a = I.fromISO(n, e)), (l = a.isValid)
            } catch {
                l = !1
            }
            if (o && l) return i.fromDateTimes(r, a)
            if (o) {
                let c = Z.fromISO(n, e)
                if (c.isValid) return i.after(r, c)
            } else if (l) {
                let c = Z.fromISO(s, e)
                if (c.isValid) return i.before(a, c)
            }
        }
        return i.invalid(
            'unparsable',
            `the input "${t}" can't be parsed as ISO 8601`,
        )
    }
    static isInterval(t) {
        return (t && t.isLuxonInterval) || !1
    }
    get start() {
        return this.isValid ? this.s : null
    }
    get end() {
        return this.isValid ? this.e : null
    }
    get isValid() {
        return this.invalidReason === null
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }
    length(t = 'milliseconds') {
        return this.isValid ? this.toDuration(t).get(t) : NaN
    }
    count(t = 'milliseconds', e) {
        if (!this.isValid) return NaN
        let s = this.start.startOf(t, e),
            n
        return (
            e?.useLocaleWeeks
                ? (n = this.end.reconfigure({ locale: s.locale }))
                : (n = this.end),
            (n = n.startOf(t, e)),
            Math.floor(n.diff(s, t).get(t)) +
                (n.valueOf() !== this.end.valueOf())
        )
    }
    hasSame(t) {
        return this.isValid
            ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t)
            : !1
    }
    isEmpty() {
        return this.s.valueOf() === this.e.valueOf()
    }
    isAfter(t) {
        return this.isValid ? this.s > t : !1
    }
    isBefore(t) {
        return this.isValid ? this.e <= t : !1
    }
    contains(t) {
        return this.isValid ? this.s <= t && this.e > t : !1
    }
    set({ start: t, end: e } = {}) {
        return this.isValid ? i.fromDateTimes(t || this.s, e || this.e) : this
    }
    splitAt(...t) {
        if (!this.isValid) return []
        let e = t
                .map(fi)
                .filter((o) => this.contains(o))
                .sort((o, a) => o.toMillis() - a.toMillis()),
            s = [],
            { s: n } = this,
            r = 0
        for (; n < this.e; ) {
            let o = e[r] || this.e,
                a = +o > +this.e ? this.e : o
            s.push(i.fromDateTimes(n, a)), (n = a), (r += 1)
        }
        return s
    }
    splitBy(t) {
        let e = Z.fromDurationLike(t)
        if (!this.isValid || !e.isValid || e.as('milliseconds') === 0) return []
        let { s } = this,
            n = 1,
            r,
            o = []
        for (; s < this.e; ) {
            let a = this.start.plus(e.mapUnits((l) => l * n))
            ;(r = +a > +this.e ? this.e : a),
                o.push(i.fromDateTimes(s, r)),
                (s = r),
                (n += 1)
        }
        return o
    }
    divideEqually(t) {
        return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : []
    }
    overlaps(t) {
        return this.e > t.s && this.s < t.e
    }
    abutsStart(t) {
        return this.isValid ? +this.e == +t.s : !1
    }
    abutsEnd(t) {
        return this.isValid ? +t.e == +this.s : !1
    }
    engulfs(t) {
        return this.isValid ? this.s <= t.s && this.e >= t.e : !1
    }
    equals(t) {
        return !this.isValid || !t.isValid
            ? !1
            : this.s.equals(t.s) && this.e.equals(t.e)
    }
    intersection(t) {
        if (!this.isValid) return this
        let e = this.s > t.s ? this.s : t.s,
            s = this.e < t.e ? this.e : t.e
        return e >= s ? null : i.fromDateTimes(e, s)
    }
    union(t) {
        if (!this.isValid) return this
        let e = this.s < t.s ? this.s : t.s,
            s = this.e > t.e ? this.e : t.e
        return i.fromDateTimes(e, s)
    }
    static merge(t) {
        let [e, s] = t
            .sort((n, r) => n.s - r.s)
            .reduce(
                ([n, r], o) =>
                    r
                        ? r.overlaps(o) || r.abutsStart(o)
                            ? [n, r.union(o)]
                            : [n.concat([r]), o]
                        : [n, o],
                [[], null],
            )
        return s && e.push(s), e
    }
    static xor(t) {
        let e = null,
            s = 0,
            n = [],
            r = t.map((l) => [
                { time: l.s, type: 's' },
                { time: l.e, type: 'e' },
            ]),
            o = Array.prototype.concat(...r),
            a = o.sort((l, c) => l.time - c.time)
        for (let l of a)
            (s += l.type === 's' ? 1 : -1),
                s === 1
                    ? (e = l.time)
                    : (e && +e != +l.time && n.push(i.fromDateTimes(e, l.time)),
                      (e = null))
        return i.merge(n)
    }
    difference(...t) {
        return i
            .xor([this].concat(t))
            .map((e) => this.intersection(e))
            .filter((e) => e && !e.isEmpty())
    }
    toString() {
        return this.isValid
            ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})`
            : di
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.isValid
            ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`
            : `Interval { Invalid, reason: ${this.invalidReason} }`
    }
    toLocaleString(t = re, e = {}) {
        return this.isValid
            ? st.create(this.s.loc.clone(e), t).formatInterval(this)
            : di
    }
    toISO(t) {
        return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : di
    }
    toISODate() {
        return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : di
    }
    toISOTime(t) {
        return this.isValid
            ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`
            : di
    }
    toFormat(t, { separator: e = ' \u2013 ' } = {}) {
        return this.isValid
            ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`
            : di
    }
    toDuration(t, e) {
        return this.isValid
            ? this.e.diff(this.s, t, e)
            : Z.invalid(this.invalidReason)
    }
    mapEndpoints(t) {
        return i.fromDateTimes(t(this.s), t(this.e))
    }
}
var Zt = class {
    static hasDST(t = R.defaultZone) {
        let e = I.now().setZone(t).set({ month: 12 })
        return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset
    }
    static isValidIANAZone(t) {
        return at.isValidZone(t)
    }
    static normalizeZone(t) {
        return Dt(t, R.defaultZone)
    }
    static getStartOfWeek({ locale: t = null, locObj: e = null } = {}) {
        return (e || W.create(t)).getStartOfWeek()
    }
    static getMinimumDaysInFirstWeek({
        locale: t = null,
        locObj: e = null,
    } = {}) {
        return (e || W.create(t)).getMinDaysInFirstWeek()
    }
    static getWeekendWeekdays({ locale: t = null, locObj: e = null } = {}) {
        return (e || W.create(t)).getWeekendDays().slice()
    }
    static months(
        t = 'long',
        {
            locale: e = null,
            numberingSystem: s = null,
            locObj: n = null,
            outputCalendar: r = 'gregory',
        } = {},
    ) {
        return (n || W.create(e, s, r)).months(t)
    }
    static monthsFormat(
        t = 'long',
        {
            locale: e = null,
            numberingSystem: s = null,
            locObj: n = null,
            outputCalendar: r = 'gregory',
        } = {},
    ) {
        return (n || W.create(e, s, r)).months(t, !0)
    }
    static weekdays(
        t = 'long',
        { locale: e = null, numberingSystem: s = null, locObj: n = null } = {},
    ) {
        return (n || W.create(e, s, null)).weekdays(t)
    }
    static weekdaysFormat(
        t = 'long',
        { locale: e = null, numberingSystem: s = null, locObj: n = null } = {},
    ) {
        return (n || W.create(e, s, null)).weekdays(t, !0)
    }
    static meridiems({ locale: t = null } = {}) {
        return W.create(t).meridiems()
    }
    static eras(t = 'short', { locale: e = null } = {}) {
        return W.create(e, null, 'gregory').eras(t)
    }
    static features() {
        return { relative: on(), localeWeek: an() }
    }
}
function uc(i, t) {
    let e = (n) => n.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf(),
        s = e(t) - e(i)
    return Math.floor(Z.fromMillis(s).as('days'))
}
function Ym(i, t, e) {
    let s = [
            ['years', (l, c) => c.year - l.year],
            [
                'quarters',
                (l, c) => c.quarter - l.quarter + (c.year - l.year) * 4,
            ],
            ['months', (l, c) => c.month - l.month + (c.year - l.year) * 12],
            [
                'weeks',
                (l, c) => {
                    let h = uc(l, c)
                    return (h - (h % 7)) / 7
                },
            ],
            ['days', uc],
        ],
        n = {},
        r = i,
        o,
        a
    for (let [l, c] of s)
        e.indexOf(l) >= 0 &&
            ((o = l),
            (n[l] = c(i, t)),
            (a = r.plus(n)),
            a > t
                ? (n[l]--,
                  (i = r.plus(n)),
                  i > t && ((a = i), n[l]--, (i = r.plus(n))))
                : (i = a))
    return [i, n, a, o]
}
function dc(i, t, e, s) {
    let [n, r, o, a] = Ym(i, t, e),
        l = t - n,
        c = e.filter(
            (u) =>
                ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0,
        )
    c.length === 0 &&
        (o < t && (o = n.plus({ [a]: 1 })),
        o !== n && (r[a] = (r[a] || 0) + l / (o - n)))
    let h = Z.fromObject(r, s)
    return c.length > 0
        ? Z.fromMillis(l, s)
              .shiftTo(...c)
              .plus(h)
        : h
}
var Zm = 'missing Intl.DateTimeFormat.formatToParts support'
function z(i, t = (e) => e) {
    return { regex: i, deser: ([e]) => t(kl(e)) }
}
var qm = '\xA0',
    gc = `[ ${qm}]`,
    pc = new RegExp(gc, 'g')
function Gm(i) {
    return i.replace(/\./g, '\\.?').replace(pc, gc)
}
function fc(i) {
    return i.replace(/\./g, '').replace(pc, ' ').toLowerCase()
}
function It(i, t) {
    return i === null
        ? null
        : {
              regex: RegExp(i.map(Gm).join('|')),
              deser: ([e]) => i.findIndex((s) => fc(e) === fc(s)) + t,
          }
}
function mc(i, t) {
    return { regex: i, deser: ([, e, s]) => Se(e, s), groups: t }
}
function un(i) {
    return { regex: i, deser: ([t]) => t }
}
function Xm(i) {
    return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
}
function Km(i, t) {
    let e = wt(t),
        s = wt(t, '{2}'),
        n = wt(t, '{3}'),
        r = wt(t, '{4}'),
        o = wt(t, '{6}'),
        a = wt(t, '{1,2}'),
        l = wt(t, '{1,3}'),
        c = wt(t, '{1,6}'),
        h = wt(t, '{1,9}'),
        u = wt(t, '{2,4}'),
        d = wt(t, '{4,6}'),
        f = (p) => ({
            regex: RegExp(Xm(p.val)),
            deser: ([y]) => y,
            literal: !0,
        }),
        g = ((p) => {
            if (i.literal) return f(p)
            switch (p.val) {
                case 'G':
                    return It(t.eras('short'), 0)
                case 'GG':
                    return It(t.eras('long'), 0)
                case 'y':
                    return z(c)
                case 'yy':
                    return z(u, us)
                case 'yyyy':
                    return z(r)
                case 'yyyyy':
                    return z(d)
                case 'yyyyyy':
                    return z(o)
                case 'M':
                    return z(a)
                case 'MM':
                    return z(s)
                case 'MMM':
                    return It(t.months('short', !0), 1)
                case 'MMMM':
                    return It(t.months('long', !0), 1)
                case 'L':
                    return z(a)
                case 'LL':
                    return z(s)
                case 'LLL':
                    return It(t.months('short', !1), 1)
                case 'LLLL':
                    return It(t.months('long', !1), 1)
                case 'd':
                    return z(a)
                case 'dd':
                    return z(s)
                case 'o':
                    return z(l)
                case 'ooo':
                    return z(n)
                case 'HH':
                    return z(s)
                case 'H':
                    return z(a)
                case 'hh':
                    return z(s)
                case 'h':
                    return z(a)
                case 'mm':
                    return z(s)
                case 'm':
                    return z(a)
                case 'q':
                    return z(a)
                case 'qq':
                    return z(s)
                case 's':
                    return z(a)
                case 'ss':
                    return z(s)
                case 'S':
                    return z(l)
                case 'SSS':
                    return z(n)
                case 'u':
                    return un(h)
                case 'uu':
                    return un(a)
                case 'uuu':
                    return z(e)
                case 'a':
                    return It(t.meridiems(), 0)
                case 'kkkk':
                    return z(r)
                case 'kk':
                    return z(u, us)
                case 'W':
                    return z(a)
                case 'WW':
                    return z(s)
                case 'E':
                case 'c':
                    return z(e)
                case 'EEE':
                    return It(t.weekdays('short', !1), 1)
                case 'EEEE':
                    return It(t.weekdays('long', !1), 1)
                case 'ccc':
                    return It(t.weekdays('short', !0), 1)
                case 'cccc':
                    return It(t.weekdays('long', !0), 1)
                case 'Z':
                case 'ZZ':
                    return mc(
                        new RegExp(`([+-]${a.source})(?::(${s.source}))?`),
                        2,
                    )
                case 'ZZZ':
                    return mc(new RegExp(`([+-]${a.source})(${s.source})?`), 2)
                case 'z':
                    return un(/[a-z_+-/]{1,256}?/i)
                case ' ':
                    return un(/[^\S\n\r]/)
                default:
                    return f(p)
            }
        })(i) || { invalidReason: Zm }
    return (g.token = i), g
}
var Jm = {
    year: { '2-digit': 'yy', numeric: 'yyyyy' },
    month: { numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM' },
    day: { numeric: 'd', '2-digit': 'dd' },
    weekday: { short: 'EEE', long: 'EEEE' },
    dayperiod: 'a',
    dayPeriod: 'a',
    hour12: { numeric: 'h', '2-digit': 'hh' },
    hour24: { numeric: 'H', '2-digit': 'HH' },
    minute: { numeric: 'm', '2-digit': 'mm' },
    second: { numeric: 's', '2-digit': 'ss' },
    timeZoneName: { long: 'ZZZZZ', short: 'ZZZ' },
}
function Qm(i, t, e) {
    let { type: s, value: n } = i
    if (s === 'literal') {
        let l = /^\s+$/.test(n)
        return { literal: !l, val: l ? ' ' : n }
    }
    let r = t[s],
        o = s
    s === 'hour' &&
        (t.hour12 != null
            ? (o = t.hour12 ? 'hour12' : 'hour24')
            : t.hourCycle != null
              ? t.hourCycle === 'h11' || t.hourCycle === 'h12'
                  ? (o = 'hour12')
                  : (o = 'hour24')
              : (o = e.hour12 ? 'hour12' : 'hour24'))
    let a = Jm[o]
    if ((typeof a == 'object' && (a = a[r]), a)) return { literal: !1, val: a }
}
function tg(i) {
    return [
        `^${i.map((e) => e.regex).reduce((e, s) => `${e}(${s.source})`, '')}$`,
        i,
    ]
}
function eg(i, t, e) {
    let s = i.match(t)
    if (s) {
        let n = {},
            r = 1
        for (let o in e)
            if (ce(e, o)) {
                let a = e[o],
                    l = a.groups ? a.groups + 1 : 1
                !a.literal &&
                    a.token &&
                    (n[a.token.val[0]] = a.deser(s.slice(r, r + l))),
                    (r += l)
            }
        return [s, n]
    } else return [s, {}]
}
function ig(i) {
    let t = (r) => {
            switch (r) {
                case 'S':
                    return 'millisecond'
                case 's':
                    return 'second'
                case 'm':
                    return 'minute'
                case 'h':
                case 'H':
                    return 'hour'
                case 'd':
                    return 'day'
                case 'o':
                    return 'ordinal'
                case 'L':
                case 'M':
                    return 'month'
                case 'y':
                    return 'year'
                case 'E':
                case 'c':
                    return 'weekday'
                case 'W':
                    return 'weekNumber'
                case 'k':
                    return 'weekYear'
                case 'q':
                    return 'quarter'
                default:
                    return null
            }
        },
        e = null,
        s
    return (
        O(i.z) || (e = at.create(i.z)),
        O(i.Z) || (e || (e = new et(i.Z)), (s = i.Z)),
        O(i.q) || (i.M = (i.q - 1) * 3 + 1),
        O(i.h) ||
            (i.h < 12 && i.a === 1
                ? (i.h += 12)
                : i.h === 12 && i.a === 0 && (i.h = 0)),
        i.G === 0 && i.y && (i.y = -i.y),
        O(i.u) || (i.S = hs(i.u)),
        [
            Object.keys(i).reduce((r, o) => {
                let a = t(o)
                return a && (r[a] = i[o]), r
            }, {}),
            e,
            s,
        ]
    )
}
var ro = null
function sg() {
    return ro || (ro = I.fromMillis(1555555555555)), ro
}
function ng(i, t) {
    if (i.literal) return i
    let e = st.macroTokenToFormatOpts(i.val),
        s = lo(e, t)
    return s == null || s.includes(void 0) ? i : s
}
function oo(i, t) {
    return Array.prototype.concat(...i.map((e) => ng(e, t)))
}
var ms = class {
    constructor(t, e) {
        if (
            ((this.locale = t),
            (this.format = e),
            (this.tokens = oo(st.parseFormat(e), t)),
            (this.units = this.tokens.map((s) => Km(s, t))),
            (this.disqualifyingUnit = this.units.find((s) => s.invalidReason)),
            !this.disqualifyingUnit)
        ) {
            let [s, n] = tg(this.units)
            ;(this.regex = RegExp(s, 'i')), (this.handlers = n)
        }
    }
    explainFromTokens(t) {
        if (this.isValid) {
            let [e, s] = eg(t, this.regex, this.handlers),
                [n, r, o] = s ? ig(s) : [null, null, void 0]
            if (ce(s, 'a') && ce(s, 'H'))
                throw new Tt(
                    "Can't include meridiem when specifying 24-hour format",
                )
            return {
                input: t,
                tokens: this.tokens,
                regex: this.regex,
                rawMatches: e,
                matches: s,
                result: n,
                zone: r,
                specificOffset: o,
            }
        } else
            return {
                input: t,
                tokens: this.tokens,
                invalidReason: this.invalidReason,
            }
    }
    get isValid() {
        return !this.disqualifyingUnit
    }
    get invalidReason() {
        return this.disqualifyingUnit
            ? this.disqualifyingUnit.invalidReason
            : null
    }
}
function ao(i, t, e) {
    return new ms(i, e).explainFromTokens(t)
}
function yc(i, t, e) {
    let {
        result: s,
        zone: n,
        specificOffset: r,
        invalidReason: o,
    } = ao(i, t, e)
    return [s, n, r, o]
}
function lo(i, t) {
    if (!i) return null
    let s = st.create(t, i).dtFormatter(sg()),
        n = s.formatToParts(),
        r = s.resolvedOptions()
    return n.map((o) => Qm(o, i, r))
}
var co = 'Invalid DateTime',
    bc = 864e13
function gs(i) {
    return new it('unsupported zone', `the zone "${i.name}" is not supported`)
}
function ho(i) {
    return i.weekData === null && (i.weekData = as(i.c)), i.weekData
}
function uo(i) {
    return (
        i.localWeekData === null &&
            (i.localWeekData = as(
                i.c,
                i.loc.getMinDaysInFirstWeek(),
                i.loc.getStartOfWeek(),
            )),
        i.localWeekData
    )
}
function ve(i, t) {
    let e = {
        ts: i.ts,
        zone: i.zone,
        c: i.c,
        o: i.o,
        loc: i.loc,
        invalid: i.invalid,
    }
    return new I({ ...e, ...t, old: e })
}
function Tc(i, t, e) {
    let s = i - t * 60 * 1e3,
        n = e.offset(s)
    if (t === n) return [s, t]
    s -= (n - t) * 60 * 1e3
    let r = e.offset(s)
    return n === r ? [s, n] : [i - Math.min(n, r) * 60 * 1e3, Math.max(n, r)]
}
function dn(i, t) {
    i += t * 60 * 1e3
    let e = new Date(i)
    return {
        year: e.getUTCFullYear(),
        month: e.getUTCMonth() + 1,
        day: e.getUTCDate(),
        hour: e.getUTCHours(),
        minute: e.getUTCMinutes(),
        second: e.getUTCSeconds(),
        millisecond: e.getUTCMilliseconds(),
    }
}
function mn(i, t, e) {
    return Tc(ti(i), t, e)
}
function xc(i, t) {
    let e = i.o,
        s = i.c.year + Math.trunc(t.years),
        n = i.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
        r = {
            ...i.c,
            year: s,
            month: n,
            day:
                Math.min(i.c.day, ni(s, n)) +
                Math.trunc(t.days) +
                Math.trunc(t.weeks) * 7,
        },
        o = Z.fromObject({
            years: t.years - Math.trunc(t.years),
            quarters: t.quarters - Math.trunc(t.quarters),
            months: t.months - Math.trunc(t.months),
            weeks: t.weeks - Math.trunc(t.weeks),
            days: t.days - Math.trunc(t.days),
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds,
            milliseconds: t.milliseconds,
        }).as('milliseconds'),
        a = ti(r),
        [l, c] = Tc(a, e, i.zone)
    return o !== 0 && ((l += o), (c = i.zone.offset(l))), { ts: l, o: c }
}
function mi(i, t, e, s, n, r) {
    let { setZone: o, zone: a } = e
    if ((i && Object.keys(i).length !== 0) || t) {
        let l = t || a,
            c = I.fromObject(i, { ...e, zone: l, specificOffset: r })
        return o ? c : c.setZone(a)
    } else
        return I.invalid(
            new it('unparsable', `the input "${n}" can't be parsed as ${s}`),
        )
}
function fn(i, t, e = !0) {
    return i.isValid
        ? st
              .create(W.create('en-US'), { allowZ: e, forceSimple: !0 })
              .formatDateTimeFromString(i, t)
        : null
}
function fo(i, t) {
    let e = i.c.year > 9999 || i.c.year < 0,
        s = ''
    return (
        e && i.c.year >= 0 && (s += '+'),
        (s += Y(i.c.year, e ? 6 : 4)),
        t
            ? ((s += '-'), (s += Y(i.c.month)), (s += '-'), (s += Y(i.c.day)))
            : ((s += Y(i.c.month)), (s += Y(i.c.day))),
        s
    )
}
function _c(i, t, e, s, n, r) {
    let o = Y(i.c.hour)
    return (
        t
            ? ((o += ':'),
              (o += Y(i.c.minute)),
              (i.c.millisecond !== 0 || i.c.second !== 0 || !e) && (o += ':'))
            : (o += Y(i.c.minute)),
        (i.c.millisecond !== 0 || i.c.second !== 0 || !e) &&
            ((o += Y(i.c.second)),
            (i.c.millisecond !== 0 || !s) &&
                ((o += '.'), (o += Y(i.c.millisecond, 3)))),
        n &&
            (i.isOffsetFixed && i.offset === 0 && !r
                ? (o += 'Z')
                : i.o < 0
                  ? ((o += '-'),
                    (o += Y(Math.trunc(-i.o / 60))),
                    (o += ':'),
                    (o += Y(Math.trunc(-i.o % 60))))
                  : ((o += '+'),
                    (o += Y(Math.trunc(i.o / 60))),
                    (o += ':'),
                    (o += Y(Math.trunc(i.o % 60))))),
        r && (o += '[' + i.zone.ianaName + ']'),
        o
    )
}
var vc = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    rg = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    },
    og = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
    Oc = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    ag = [
        'weekYear',
        'weekNumber',
        'weekday',
        'hour',
        'minute',
        'second',
        'millisecond',
    ],
    lg = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond']
function cg(i) {
    let t = {
        year: 'year',
        years: 'year',
        month: 'month',
        months: 'month',
        day: 'day',
        days: 'day',
        hour: 'hour',
        hours: 'hour',
        minute: 'minute',
        minutes: 'minute',
        quarter: 'quarter',
        quarters: 'quarter',
        second: 'second',
        seconds: 'second',
        millisecond: 'millisecond',
        milliseconds: 'millisecond',
        weekday: 'weekday',
        weekdays: 'weekday',
        weeknumber: 'weekNumber',
        weeksnumber: 'weekNumber',
        weeknumbers: 'weekNumber',
        weekyear: 'weekYear',
        weekyears: 'weekYear',
        ordinal: 'ordinal',
    }[i.toLowerCase()]
    if (!t) throw new Qe(i)
    return t
}
function wc(i) {
    switch (i.toLowerCase()) {
        case 'localweekday':
        case 'localweekdays':
            return 'localWeekday'
        case 'localweeknumber':
        case 'localweeknumbers':
            return 'localWeekNumber'
        case 'localweekyear':
        case 'localweekyears':
            return 'localWeekYear'
        default:
            return cg(i)
    }
}
function hg(i) {
    return (
        pn[i] || (gn === void 0 && (gn = R.now()), (pn[i] = i.offset(gn))),
        pn[i]
    )
}
function Sc(i, t) {
    let e = Dt(t.zone, R.defaultZone)
    if (!e.isValid) return I.invalid(gs(e))
    let s = W.fromObject(t),
        n,
        r
    if (O(i.year)) n = R.now()
    else {
        for (let l of Oc) O(i[l]) && (i[l] = vc[l])
        let o = Gr(i) || Xr(i)
        if (o) return I.invalid(o)
        let a = hg(e)
        ;[n, r] = mn(i, a, e)
    }
    return new I({ ts: n, zone: e, loc: s, o: r })
}
function kc(i, t, e) {
    let s = O(e.round) ? !0 : e.round,
        n = (o, a) => (
            (o = ei(o, s || e.calendary ? 0 : 2, !0)),
            t.loc.clone(e).relFormatter(e).format(o, a)
        ),
        r = (o) =>
            e.calendary
                ? t.hasSame(i, o)
                    ? 0
                    : t.startOf(o).diff(i.startOf(o), o).get(o)
                : t.diff(i, o).get(o)
    if (e.unit) return n(r(e.unit), e.unit)
    for (let o of e.units) {
        let a = r(o)
        if (Math.abs(a) >= 1) return n(a, o)
    }
    return n(i > t ? -0 : 0, e.units[e.units.length - 1])
}
function Mc(i) {
    let t = {},
        e
    return (
        i.length > 0 && typeof i[i.length - 1] == 'object'
            ? ((t = i[i.length - 1]),
              (e = Array.from(i).slice(0, i.length - 1)))
            : (e = Array.from(i)),
        [t, e]
    )
}
var gn,
    pn = {},
    I = class i {
        constructor(t) {
            let e = t.zone || R.defaultZone,
                s =
                    t.invalid ||
                    (Number.isNaN(t.ts) ? new it('invalid input') : null) ||
                    (e.isValid ? null : gs(e))
            this.ts = O(t.ts) ? R.now() : t.ts
            let n = null,
                r = null
            if (!s)
                if (t.old && t.old.ts === this.ts && t.old.zone.equals(e))
                    [n, r] = [t.old.c, t.old.o]
                else {
                    let a = Et(t.o) && !t.old ? t.o : e.offset(this.ts)
                    ;(n = dn(this.ts, a)),
                        (s = Number.isNaN(n.year)
                            ? new it('invalid input')
                            : null),
                        (n = s ? null : n),
                        (r = s ? null : a)
                }
            ;(this._zone = e),
                (this.loc = t.loc || W.create()),
                (this.invalid = s),
                (this.weekData = null),
                (this.localWeekData = null),
                (this.c = n),
                (this.o = r),
                (this.isLuxonDateTime = !0)
        }
        static now() {
            return new i({})
        }
        static local() {
            let [t, e] = Mc(arguments),
                [s, n, r, o, a, l, c] = e
            return Sc(
                {
                    year: s,
                    month: n,
                    day: r,
                    hour: o,
                    minute: a,
                    second: l,
                    millisecond: c,
                },
                t,
            )
        }
        static utc() {
            let [t, e] = Mc(arguments),
                [s, n, r, o, a, l, c] = e
            return (
                (t.zone = et.utcInstance),
                Sc(
                    {
                        year: s,
                        month: n,
                        day: r,
                        hour: o,
                        minute: a,
                        second: l,
                        millisecond: c,
                    },
                    t,
                )
            )
        }
        static fromJSDate(t, e = {}) {
            let s = Vl(t) ? t.valueOf() : NaN
            if (Number.isNaN(s)) return i.invalid('invalid input')
            let n = Dt(e.zone, R.defaultZone)
            return n.isValid
                ? new i({ ts: s, zone: n, loc: W.fromObject(e) })
                : i.invalid(gs(n))
        }
        static fromMillis(t, e = {}) {
            if (Et(t))
                return t < -bc || t > bc
                    ? i.invalid('Timestamp out of range')
                    : new i({
                          ts: t,
                          zone: Dt(e.zone, R.defaultZone),
                          loc: W.fromObject(e),
                      })
            throw new G(
                `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
            )
        }
        static fromSeconds(t, e = {}) {
            if (Et(t))
                return new i({
                    ts: t * 1e3,
                    zone: Dt(e.zone, R.defaultZone),
                    loc: W.fromObject(e),
                })
            throw new G('fromSeconds requires a numerical input')
        }
        static fromObject(t, e = {}) {
            t = t || {}
            let s = Dt(e.zone, R.defaultZone)
            if (!s.isValid) return i.invalid(gs(s))
            let n = W.fromObject(e),
                r = ri(t, wc),
                { minDaysInFirstWeek: o, startOfWeek: a } = qr(r, n),
                l = R.now(),
                c = O(e.specificOffset) ? s.offset(l) : e.specificOffset,
                h = !O(r.ordinal),
                u = !O(r.year),
                d = !O(r.month) || !O(r.day),
                f = u || d,
                m = r.weekYear || r.weekNumber
            if ((f || h) && m)
                throw new Tt(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
                )
            if (d && h) throw new Tt("Can't mix ordinal dates with month/day")
            let g = m || (r.weekday && !f),
                p,
                y,
                b = dn(l, c)
            g
                ? ((p = ag), (y = rg), (b = as(b, o, a)))
                : h
                  ? ((p = lg), (y = og), (b = hn(b)))
                  : ((p = Oc), (y = vc))
            let _ = !1
            for (let C of p) {
                let N = r[C]
                O(N) ? (_ ? (r[C] = y[C]) : (r[C] = b[C])) : (_ = !0)
            }
            let w = g ? Rl(r, o, a) : h ? Wl(r) : Gr(r),
                x = w || Xr(r)
            if (x) return i.invalid(x)
            let S = g ? Yr(r, o, a) : h ? Zr(r) : r,
                [k, v] = mn(S, c, s),
                T = new i({ ts: k, zone: s, o: v, loc: n })
            return r.weekday && f && t.weekday !== T.weekday
                ? i.invalid(
                      'mismatched weekday',
                      `you can't specify both a weekday of ${r.weekday} and a date of ${T.toISO()}`,
                  )
                : T.isValid
                  ? T
                  : i.invalid(T.invalid)
        }
        static fromISO(t, e = {}) {
            let [s, n] = ec(t)
            return mi(s, n, e, 'ISO 8601', t)
        }
        static fromRFC2822(t, e = {}) {
            let [s, n] = ic(t)
            return mi(s, n, e, 'RFC 2822', t)
        }
        static fromHTTP(t, e = {}) {
            let [s, n] = sc(t)
            return mi(s, n, e, 'HTTP', e)
        }
        static fromFormat(t, e, s = {}) {
            if (O(t) || O(e))
                throw new G('fromFormat requires an input string and a format')
            let { locale: n = null, numberingSystem: r = null } = s,
                o = W.fromOpts({
                    locale: n,
                    numberingSystem: r,
                    defaultToEN: !0,
                }),
                [a, l, c, h] = yc(o, t, e)
            return h ? i.invalid(h) : mi(a, l, s, `format ${e}`, t, c)
        }
        static fromString(t, e, s = {}) {
            return i.fromFormat(t, e, s)
        }
        static fromSQL(t, e = {}) {
            let [s, n] = oc(t)
            return mi(s, n, e, 'SQL', t)
        }
        static invalid(t, e = null) {
            if (!t)
                throw new G('need to specify a reason the DateTime is invalid')
            let s = t instanceof it ? t : new it(t, e)
            if (R.throwOnInvalid) throw new Ks(s)
            return new i({ invalid: s })
        }
        static isDateTime(t) {
            return (t && t.isLuxonDateTime) || !1
        }
        static parseFormatForOpts(t, e = {}) {
            let s = lo(t, W.fromObject(e))
            return s ? s.map((n) => (n ? n.val : null)).join('') : null
        }
        static expandFormat(t, e = {}) {
            return oo(st.parseFormat(t), W.fromObject(e))
                .map((n) => n.val)
                .join('')
        }
        static resetCache() {
            ;(gn = void 0), (pn = {})
        }
        get(t) {
            return this[t]
        }
        get isValid() {
            return this.invalid === null
        }
        get invalidReason() {
            return this.invalid ? this.invalid.reason : null
        }
        get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null
        }
        get locale() {
            return this.isValid ? this.loc.locale : null
        }
        get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null
        }
        get outputCalendar() {
            return this.isValid ? this.loc.outputCalendar : null
        }
        get zone() {
            return this._zone
        }
        get zoneName() {
            return this.isValid ? this.zone.name : null
        }
        get year() {
            return this.isValid ? this.c.year : NaN
        }
        get quarter() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN
        }
        get month() {
            return this.isValid ? this.c.month : NaN
        }
        get day() {
            return this.isValid ? this.c.day : NaN
        }
        get hour() {
            return this.isValid ? this.c.hour : NaN
        }
        get minute() {
            return this.isValid ? this.c.minute : NaN
        }
        get second() {
            return this.isValid ? this.c.second : NaN
        }
        get millisecond() {
            return this.isValid ? this.c.millisecond : NaN
        }
        get weekYear() {
            return this.isValid ? ho(this).weekYear : NaN
        }
        get weekNumber() {
            return this.isValid ? ho(this).weekNumber : NaN
        }
        get weekday() {
            return this.isValid ? ho(this).weekday : NaN
        }
        get isWeekend() {
            return (
                this.isValid && this.loc.getWeekendDays().includes(this.weekday)
            )
        }
        get localWeekday() {
            return this.isValid ? uo(this).weekday : NaN
        }
        get localWeekNumber() {
            return this.isValid ? uo(this).weekNumber : NaN
        }
        get localWeekYear() {
            return this.isValid ? uo(this).weekYear : NaN
        }
        get ordinal() {
            return this.isValid ? hn(this.c).ordinal : NaN
        }
        get monthShort() {
            return this.isValid
                ? Zt.months('short', { locObj: this.loc })[this.month - 1]
                : null
        }
        get monthLong() {
            return this.isValid
                ? Zt.months('long', { locObj: this.loc })[this.month - 1]
                : null
        }
        get weekdayShort() {
            return this.isValid
                ? Zt.weekdays('short', { locObj: this.loc })[this.weekday - 1]
                : null
        }
        get weekdayLong() {
            return this.isValid
                ? Zt.weekdays('long', { locObj: this.loc })[this.weekday - 1]
                : null
        }
        get offset() {
            return this.isValid ? +this.o : NaN
        }
        get offsetNameShort() {
            return this.isValid
                ? this.zone.offsetName(this.ts, {
                      format: 'short',
                      locale: this.locale,
                  })
                : null
        }
        get offsetNameLong() {
            return this.isValid
                ? this.zone.offsetName(this.ts, {
                      format: 'long',
                      locale: this.locale,
                  })
                : null
        }
        get isOffsetFixed() {
            return this.isValid ? this.zone.isUniversal : null
        }
        get isInDST() {
            return this.isOffsetFixed
                ? !1
                : this.offset > this.set({ month: 1, day: 1 }).offset ||
                      this.offset > this.set({ month: 5 }).offset
        }
        getPossibleOffsets() {
            if (!this.isValid || this.isOffsetFixed) return [this]
            let t = 864e5,
                e = 6e4,
                s = ti(this.c),
                n = this.zone.offset(s - t),
                r = this.zone.offset(s + t),
                o = this.zone.offset(s - n * e),
                a = this.zone.offset(s - r * e)
            if (o === a) return [this]
            let l = s - o * e,
                c = s - a * e,
                h = dn(l, o),
                u = dn(c, a)
            return h.hour === u.hour &&
                h.minute === u.minute &&
                h.second === u.second &&
                h.millisecond === u.millisecond
                ? [ve(this, { ts: l }), ve(this, { ts: c })]
                : [this]
        }
        get isInLeapYear() {
            return Me(this.year)
        }
        get daysInMonth() {
            return ni(this.year, this.month)
        }
        get daysInYear() {
            return this.isValid ? le(this.year) : NaN
        }
        get weeksInWeekYear() {
            return this.isValid ? ke(this.weekYear) : NaN
        }
        get weeksInLocalWeekYear() {
            return this.isValid
                ? ke(
                      this.localWeekYear,
                      this.loc.getMinDaysInFirstWeek(),
                      this.loc.getStartOfWeek(),
                  )
                : NaN
        }
        resolvedLocaleOptions(t = {}) {
            let {
                locale: e,
                numberingSystem: s,
                calendar: n,
            } = st.create(this.loc.clone(t), t).resolvedOptions(this)
            return { locale: e, numberingSystem: s, outputCalendar: n }
        }
        toUTC(t = 0, e = {}) {
            return this.setZone(et.instance(t), e)
        }
        toLocal() {
            return this.setZone(R.defaultZone)
        }
        setZone(t, { keepLocalTime: e = !1, keepCalendarTime: s = !1 } = {}) {
            if (((t = Dt(t, R.defaultZone)), t.equals(this.zone))) return this
            if (t.isValid) {
                let n = this.ts
                if (e || s) {
                    let r = t.offset(this.ts),
                        o = this.toObject()
                    ;[n] = mn(o, r, t)
                }
                return ve(this, { ts: n, zone: t })
            } else return i.invalid(gs(t))
        }
        reconfigure({ locale: t, numberingSystem: e, outputCalendar: s } = {}) {
            let n = this.loc.clone({
                locale: t,
                numberingSystem: e,
                outputCalendar: s,
            })
            return ve(this, { loc: n })
        }
        setLocale(t) {
            return this.reconfigure({ locale: t })
        }
        set(t) {
            if (!this.isValid) return this
            let e = ri(t, wc),
                { minDaysInFirstWeek: s, startOfWeek: n } = qr(e, this.loc),
                r = !O(e.weekYear) || !O(e.weekNumber) || !O(e.weekday),
                o = !O(e.ordinal),
                a = !O(e.year),
                l = !O(e.month) || !O(e.day),
                c = a || l,
                h = e.weekYear || e.weekNumber
            if ((c || o) && h)
                throw new Tt(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
                )
            if (l && o) throw new Tt("Can't mix ordinal dates with month/day")
            let u
            r
                ? (u = Yr({ ...as(this.c, s, n), ...e }, s, n))
                : O(e.ordinal)
                  ? ((u = { ...this.toObject(), ...e }),
                    O(e.day) && (u.day = Math.min(ni(u.year, u.month), u.day)))
                  : (u = Zr({ ...hn(this.c), ...e }))
            let [d, f] = mn(u, this.o, this.zone)
            return ve(this, { ts: d, o: f })
        }
        plus(t) {
            if (!this.isValid) return this
            let e = Z.fromDurationLike(t)
            return ve(this, xc(this, e))
        }
        minus(t) {
            if (!this.isValid) return this
            let e = Z.fromDurationLike(t).negate()
            return ve(this, xc(this, e))
        }
        startOf(t, { useLocaleWeeks: e = !1 } = {}) {
            if (!this.isValid) return this
            let s = {},
                n = Z.normalizeUnit(t)
            switch (n) {
                case 'years':
                    s.month = 1
                case 'quarters':
                case 'months':
                    s.day = 1
                case 'weeks':
                case 'days':
                    s.hour = 0
                case 'hours':
                    s.minute = 0
                case 'minutes':
                    s.second = 0
                case 'seconds':
                    s.millisecond = 0
                    break
                case 'milliseconds':
                    break
            }
            if (n === 'weeks')
                if (e) {
                    let r = this.loc.getStartOfWeek(),
                        { weekday: o } = this
                    o < r && (s.weekNumber = this.weekNumber - 1),
                        (s.weekday = r)
                } else s.weekday = 1
            if (n === 'quarters') {
                let r = Math.ceil(this.month / 3)
                s.month = (r - 1) * 3 + 1
            }
            return this.set(s)
        }
        endOf(t, e) {
            return this.isValid
                ? this.plus({ [t]: 1 })
                      .startOf(t, e)
                      .minus(1)
                : this
        }
        toFormat(t, e = {}) {
            return this.isValid
                ? st
                      .create(this.loc.redefaultToEN(e))
                      .formatDateTimeFromString(this, t)
                : co
        }
        toLocaleString(t = re, e = {}) {
            return this.isValid
                ? st.create(this.loc.clone(e), t).formatDateTime(this)
                : co
        }
        toLocaleParts(t = {}) {
            return this.isValid
                ? st.create(this.loc.clone(t), t).formatDateTimeParts(this)
                : []
        }
        toISO({
            format: t = 'extended',
            suppressSeconds: e = !1,
            suppressMilliseconds: s = !1,
            includeOffset: n = !0,
            extendedZone: r = !1,
        } = {}) {
            if (!this.isValid) return null
            let o = t === 'extended',
                a = fo(this, o)
            return (a += 'T'), (a += _c(this, o, e, s, n, r)), a
        }
        toISODate({ format: t = 'extended' } = {}) {
            return this.isValid ? fo(this, t === 'extended') : null
        }
        toISOWeekDate() {
            return fn(this, "kkkk-'W'WW-c")
        }
        toISOTime({
            suppressMilliseconds: t = !1,
            suppressSeconds: e = !1,
            includeOffset: s = !0,
            includePrefix: n = !1,
            extendedZone: r = !1,
            format: o = 'extended',
        } = {}) {
            return this.isValid
                ? (n ? 'T' : '') + _c(this, o === 'extended', e, t, s, r)
                : null
        }
        toRFC2822() {
            return fn(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1)
        }
        toHTTP() {
            return fn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
        }
        toSQLDate() {
            return this.isValid ? fo(this, !0) : null
        }
        toSQLTime({
            includeOffset: t = !0,
            includeZone: e = !1,
            includeOffsetSpace: s = !0,
        } = {}) {
            let n = 'HH:mm:ss.SSS'
            return (
                (e || t) &&
                    (s && (n += ' '), e ? (n += 'z') : t && (n += 'ZZ')),
                fn(this, n, !0)
            )
        }
        toSQL(t = {}) {
            return this.isValid
                ? `${this.toSQLDate()} ${this.toSQLTime(t)}`
                : null
        }
        toString() {
            return this.isValid ? this.toISO() : co
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return this.isValid
                ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`
                : `DateTime { Invalid, reason: ${this.invalidReason} }`
        }
        valueOf() {
            return this.toMillis()
        }
        toMillis() {
            return this.isValid ? this.ts : NaN
        }
        toSeconds() {
            return this.isValid ? this.ts / 1e3 : NaN
        }
        toUnixInteger() {
            return this.isValid ? Math.floor(this.ts / 1e3) : NaN
        }
        toJSON() {
            return this.toISO()
        }
        toBSON() {
            return this.toJSDate()
        }
        toObject(t = {}) {
            if (!this.isValid) return {}
            let e = { ...this.c }
            return (
                t.includeConfig &&
                    ((e.outputCalendar = this.outputCalendar),
                    (e.numberingSystem = this.loc.numberingSystem),
                    (e.locale = this.loc.locale)),
                e
            )
        }
        toJSDate() {
            return new Date(this.isValid ? this.ts : NaN)
        }
        diff(t, e = 'milliseconds', s = {}) {
            if (!this.isValid || !t.isValid)
                return Z.invalid('created by diffing an invalid DateTime')
            let n = {
                    locale: this.locale,
                    numberingSystem: this.numberingSystem,
                    ...s,
                },
                r = Hl(e).map(Z.normalizeUnit),
                o = t.valueOf() > this.valueOf(),
                a = o ? this : t,
                l = o ? t : this,
                c = dc(a, l, r, n)
            return o ? c.negate() : c
        }
        diffNow(t = 'milliseconds', e = {}) {
            return this.diff(i.now(), t, e)
        }
        until(t) {
            return this.isValid ? Yt.fromDateTimes(this, t) : this
        }
        hasSame(t, e, s) {
            if (!this.isValid) return !1
            let n = t.valueOf(),
                r = this.setZone(t.zone, { keepLocalTime: !0 })
            return r.startOf(e, s) <= n && n <= r.endOf(e, s)
        }
        equals(t) {
            return (
                this.isValid &&
                t.isValid &&
                this.valueOf() === t.valueOf() &&
                this.zone.equals(t.zone) &&
                this.loc.equals(t.loc)
            )
        }
        toRelative(t = {}) {
            if (!this.isValid) return null
            let e = t.base || i.fromObject({}, { zone: this.zone }),
                s = t.padding ? (this < e ? -t.padding : t.padding) : 0,
                n = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
                r = t.unit
            return (
                Array.isArray(t.unit) && ((n = t.unit), (r = void 0)),
                kc(e, this.plus(s), {
                    ...t,
                    numeric: 'always',
                    units: n,
                    unit: r,
                })
            )
        }
        toRelativeCalendar(t = {}) {
            return this.isValid
                ? kc(t.base || i.fromObject({}, { zone: this.zone }), this, {
                      ...t,
                      numeric: 'auto',
                      units: ['years', 'months', 'days'],
                      calendary: !0,
                  })
                : null
        }
        static min(...t) {
            if (!t.every(i.isDateTime))
                throw new G('min requires all arguments be DateTimes')
            return Kr(t, (e) => e.valueOf(), Math.min)
        }
        static max(...t) {
            if (!t.every(i.isDateTime))
                throw new G('max requires all arguments be DateTimes')
            return Kr(t, (e) => e.valueOf(), Math.max)
        }
        static fromFormatExplain(t, e, s = {}) {
            let { locale: n = null, numberingSystem: r = null } = s,
                o = W.fromOpts({
                    locale: n,
                    numberingSystem: r,
                    defaultToEN: !0,
                })
            return ao(o, t, e)
        }
        static fromStringExplain(t, e, s = {}) {
            return i.fromFormatExplain(t, e, s)
        }
        static buildFormatParser(t, e = {}) {
            let { locale: s = null, numberingSystem: n = null } = e,
                r = W.fromOpts({
                    locale: s,
                    numberingSystem: n,
                    defaultToEN: !0,
                })
            return new ms(r, t)
        }
        static fromFormatParser(t, e, s = {}) {
            if (O(t) || O(e))
                throw new G(
                    'fromFormatParser requires an input string and a format parser',
                )
            let { locale: n = null, numberingSystem: r = null } = s,
                o = W.fromOpts({
                    locale: n,
                    numberingSystem: r,
                    defaultToEN: !0,
                })
            if (!o.equals(e.locale))
                throw new G(
                    `fromFormatParser called with a locale of ${o}, but the format parser was created for ${e.locale}`,
                )
            let {
                result: a,
                zone: l,
                specificOffset: c,
                invalidReason: h,
            } = e.explainFromTokens(t)
            return h ? i.invalid(h) : mi(a, l, s, `format ${e.format}`, t, c)
        }
        static get DATE_SHORT() {
            return re
        }
        static get DATE_MED() {
            return Vi
        }
        static get DATE_MED_WITH_WEEKDAY() {
            return Er
        }
        static get DATE_FULL() {
            return Hi
        }
        static get DATE_HUGE() {
            return Bi
        }
        static get TIME_SIMPLE() {
            return $i
        }
        static get TIME_WITH_SECONDS() {
            return ji
        }
        static get TIME_WITH_SHORT_OFFSET() {
            return Ui
        }
        static get TIME_WITH_LONG_OFFSET() {
            return Yi
        }
        static get TIME_24_SIMPLE() {
            return Zi
        }
        static get TIME_24_WITH_SECONDS() {
            return qi
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
            return Gi
        }
        static get TIME_24_WITH_LONG_OFFSET() {
            return Xi
        }
        static get DATETIME_SHORT() {
            return Ki
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
            return Ji
        }
        static get DATETIME_MED() {
            return Qi
        }
        static get DATETIME_MED_WITH_SECONDS() {
            return ts
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
            return Ir
        }
        static get DATETIME_FULL() {
            return es
        }
        static get DATETIME_FULL_WITH_SECONDS() {
            return is
        }
        static get DATETIME_HUGE() {
            return ss
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
            return ns
        }
    }
function fi(i) {
    if (I.isDateTime(i)) return i
    if (i && i.valueOf && Et(i.valueOf())) return I.fromJSDate(i)
    if (i && typeof i == 'object') return I.fromObject(i)
    throw new G(`Unknown datetime argument: ${i}, of type ${typeof i}`)
}
var ug = {
    datetime: I.DATETIME_MED_WITH_SECONDS,
    millisecond: 'h:mm:ss.SSS a',
    second: I.TIME_WITH_SECONDS,
    minute: I.TIME_SIMPLE,
    hour: { hour: 'numeric' },
    day: { day: 'numeric', month: 'short' },
    week: 'DD',
    month: { month: 'short', year: 'numeric' },
    quarter: "'Q'q - yyyy",
    year: { year: 'numeric' },
}
Or._date.override({
    _id: 'luxon',
    _create: function (i) {
        return I.fromMillis(i, this.options)
    },
    init(i) {
        this.options.locale || (this.options.locale = i.locale)
    },
    formats: function () {
        return ug
    },
    parse: function (i, t) {
        let e = this.options,
            s = typeof i
        return i === null || s === 'undefined'
            ? null
            : (s === 'number'
                  ? (i = this._create(i))
                  : s === 'string'
                    ? typeof t == 'string'
                        ? (i = I.fromFormat(i, t, e))
                        : (i = I.fromISO(i, e))
                    : i instanceof Date
                      ? (i = I.fromJSDate(i, e))
                      : s === 'object' &&
                        !(i instanceof I) &&
                        (i = I.fromObject(i, e)),
              i.isValid ? i.valueOf() : null)
    },
    format: function (i, t) {
        let e = this._create(i)
        return typeof t == 'string' ? e.toFormat(t) : e.toLocaleString(t)
    },
    add: function (i, t, e) {
        let s = {}
        return (s[e] = t), this._create(i).plus(s).valueOf()
    },
    diff: function (i, t, e) {
        return this._create(i).diff(this._create(t)).as(e).valueOf()
    },
    startOf: function (i, t, e) {
        if (t === 'isoWeek') {
            e = Math.trunc(Math.min(Math.max(0, e), 6))
            let s = this._create(i)
            return s
                .minus({ days: (s.weekday - e + 7) % 7 })
                .startOf('day')
                .valueOf()
        }
        return t ? this._create(i).startOf(t).valueOf() : i
    },
    endOf: function (i, t) {
        return this._create(i).endOf(t).valueOf()
    },
})
function yn({ cachedData: i, options: t, type: e }) {
    return {
        init: function () {
            this.initChart(),
                this.$wire.$on('updateChartData', ({ data: s }) => {
                    ;(yn = this.getChart()), (yn.data = s), yn.update('resize')
                }),
                Alpine.effect(() => {
                    Alpine.store('theme'),
                        this.$nextTick(() => {
                            this.getChart() &&
                                (this.getChart().destroy(), this.initChart())
                        })
                }),
                window
                    .matchMedia('(prefers-color-scheme: dark)')
                    .addEventListener('change', () => {
                        Alpine.store('theme') === 'system' &&
                            this.$nextTick(() => {
                                this.getChart().destroy(), this.initChart()
                            })
                    })
        },
        initChart: function (s = null) {
            var o, a, l, c, h, u, d, f, m
            if (
                !this.$refs.canvas ||
                !this.$refs.backgroundColorElement ||
                !this.$refs.borderColorElement ||
                !this.$refs.textColorElement ||
                !this.$refs.gridColorElement
            )
                return
            ;(Rt.defaults.animation.duration = 0),
                (Rt.defaults.backgroundColor = getComputedStyle(
                    this.$refs.backgroundColorElement,
                ).color)
            let n = getComputedStyle(this.$refs.borderColorElement).color
            ;(Rt.defaults.borderColor = n),
                (Rt.defaults.color = getComputedStyle(
                    this.$refs.textColorElement,
                ).color),
                (Rt.defaults.font.family = getComputedStyle(
                    this.$el,
                ).fontFamily),
                (Rt.defaults.plugins.legend.labels.boxWidth = 12),
                (Rt.defaults.plugins.legend.position = 'bottom')
            let r = getComputedStyle(this.$refs.gridColorElement).color
            return (
                t ?? (t = {}),
                t.borderWidth ?? (t.borderWidth = 2),
                t.pointBackgroundColor ?? (t.pointBackgroundColor = n),
                t.pointHitRadius ?? (t.pointHitRadius = 4),
                t.pointRadius ?? (t.pointRadius = 2),
                t.scales ?? (t.scales = {}),
                (o = t.scales).x ?? (o.x = {}),
                (a = t.scales.x).grid ?? (a.grid = {}),
                (l = t.scales.x.grid).color ?? (l.color = r),
                (c = t.scales.x.grid).display ?? (c.display = !1),
                (h = t.scales.x.grid).drawBorder ?? (h.drawBorder = !1),
                (u = t.scales).y ?? (u.y = {}),
                (d = t.scales.y).grid ?? (d.grid = {}),
                (f = t.scales.y.grid).color ?? (f.color = r),
                (m = t.scales.y.grid).drawBorder ?? (m.drawBorder = !1),
                new Rt(this.$refs.canvas, {
                    type: e,
                    data: s ?? i,
                    options: t,
                    plugins: window.filamentChartJsPlugins ?? [],
                })
            )
        },
        getChart: function () {
            return this.$refs.canvas ? Rt.getChart(this.$refs.canvas) : null
        },
    }
}
export { yn as default }
/*! Bundled license information:

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * @kurkle/color v0.2.1
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chart.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chartjs-adapter-luxon/dist/chartjs-adapter-luxon.esm.js:
  (*!
   * chartjs-adapter-luxon v1.3.1
   * https://www.chartjs.org
   * (c) 2023 chartjs-adapter-luxon Contributors
   * Released under the MIT license
   *)
*/
