var tr = Object.defineProperty
var ir = (e, t) => {
    for (var i in t) tr(e, i, { get: t[i], enumerable: !0 })
}
var oa = {}
ir(oa, {
    FileOrigin: () => Ct,
    FileStatus: () => bt,
    OptionTypes: () => Ui,
    Status: () => oo,
    create: () => ft,
    destroy: () => gt,
    find: () => Hi,
    getOptions: () => ji,
    parse: () => Wi,
    registerPlugin: () => ve,
    setOptions: () => Ft,
    supported: () => Gi,
})
var ar = (e) => e instanceof HTMLElement,
    nr = (e, t = [], i = []) => {
        let a = { ...e },
            n = [],
            o = [],
            l = () => ({ ...a }),
            r = () => {
                let f = [...n]
                return (n.length = 0), f
            },
            s = () => {
                let f = [...o]
                ;(o.length = 0),
                    f.forEach(({ type: g, data: h }) => {
                        p(g, h)
                    })
            },
            p = (f, g, h) => {
                if (h && !document.hidden) {
                    o.push({ type: f, data: g })
                    return
                }
                u[f] && u[f](g), n.push({ type: f, data: g })
            },
            c = (f, ...g) => (m[f] ? m[f](...g) : null),
            d = {
                getState: l,
                processActionQueue: r,
                processDispatchQueue: s,
                dispatch: p,
                query: c,
            },
            m = {}
        t.forEach((f) => {
            m = { ...f(a), ...m }
        })
        let u = {}
        return (
            i.forEach((f) => {
                u = { ...f(p, c, a), ...u }
            }),
            d
        )
    },
    or = (e, t, i) => {
        if (typeof i == 'function') {
            e[t] = i
            return
        }
        Object.defineProperty(e, t, { ...i })
    },
    te = (e, t) => {
        for (let i in e) e.hasOwnProperty(i) && t(i, e[i])
    },
    We = (e) => {
        let t = {}
        return (
            te(e, (i) => {
                or(t, i, e[i])
            }),
            t
        )
    },
    ce = (e, t, i = null) => {
        if (i === null) return e.getAttribute(t) || e.hasAttribute(t)
        e.setAttribute(t, i)
    },
    lr = 'http://www.w3.org/2000/svg',
    rr = ['svg', 'path'],
    Pa = (e) => rr.includes(e),
    oi = (e, t, i = {}) => {
        typeof t == 'object' && ((i = t), (t = null))
        let a = Pa(e)
            ? document.createElementNS(lr, e)
            : document.createElement(e)
        return (
            t && (Pa(e) ? ce(a, 'class', t) : (a.className = t)),
            te(i, (n, o) => {
                ce(a, n, o)
            }),
            a
        )
    },
    sr = (e) => (t, i) => {
        typeof i < 'u' && e.children[i]
            ? e.insertBefore(t, e.children[i])
            : e.appendChild(t)
    },
    cr = (e, t) => (i, a) => (
        typeof a < 'u' ? t.splice(a, 0, i) : t.push(i), i
    ),
    dr = (e, t) => (i) => (
        t.splice(t.indexOf(i), 1),
        i.element.parentNode && e.removeChild(i.element),
        i
    ),
    pr = typeof window < 'u' && typeof window.document < 'u',
    bn = () => pr,
    mr = bn() ? oi('svg') : {},
    ur =
        'children' in mr
            ? (e) => e.children.length
            : (e) => e.childNodes.length,
    Tn = (e, t, i, a) => {
        let n = i[0] || e.left,
            o = i[1] || e.top,
            l = n + e.width,
            r = o + e.height * (a[1] || 1),
            s = {
                element: { ...e },
                inner: {
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                },
                outer: { left: n, top: o, right: l, bottom: r },
            }
        return (
            t
                .filter((p) => !p.isRectIgnored())
                .map((p) => p.rect)
                .forEach((p) => {
                    Da(s.inner, { ...p.inner }), Da(s.outer, { ...p.outer })
                }),
            Fa(s.inner),
            (s.outer.bottom += s.element.marginBottom),
            (s.outer.right += s.element.marginRight),
            Fa(s.outer),
            s
        )
    },
    Da = (e, t) => {
        ;(t.top += e.top),
            (t.right += e.left),
            (t.bottom += e.top),
            (t.left += e.left),
            t.bottom > e.bottom && (e.bottom = t.bottom),
            t.right > e.right && (e.right = t.right)
    },
    Fa = (e) => {
        ;(e.width = e.right - e.left), (e.height = e.bottom - e.top)
    },
    $e = (e) => typeof e == 'number',
    fr = (e, t, i, a = 0.001) => Math.abs(e - t) < a && Math.abs(i) < a,
    gr = ({ stiffness: e = 0.5, damping: t = 0.75, mass: i = 10 } = {}) => {
        let a = null,
            n = null,
            o = 0,
            l = !1,
            p = We({
                interpolate: (c, d) => {
                    if (l) return
                    if (!($e(a) && $e(n))) {
                        ;(l = !0), (o = 0)
                        return
                    }
                    let m = -(n - a) * e
                    ;(o += m / i),
                        (n += o),
                        (o *= t),
                        fr(n, a, o) || d
                            ? ((n = a),
                              (o = 0),
                              (l = !0),
                              p.onupdate(n),
                              p.oncomplete(n))
                            : p.onupdate(n)
                },
                target: {
                    set: (c) => {
                        if (
                            ($e(c) && !$e(n) && (n = c),
                            a === null && ((a = c), (n = c)),
                            (a = c),
                            n === a || typeof a > 'u')
                        ) {
                            ;(l = !0), (o = 0), p.onupdate(n), p.oncomplete(n)
                            return
                        }
                        l = !1
                    },
                    get: () => a,
                },
                resting: { get: () => l },
                onupdate: (c) => {},
                oncomplete: (c) => {},
            })
        return p
    }
var hr = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
    Er = ({ duration: e = 500, easing: t = hr, delay: i = 0 } = {}) => {
        let a = null,
            n,
            o,
            l = !0,
            r = !1,
            s = null,
            c = We({
                interpolate: (d, m) => {
                    l ||
                        s === null ||
                        (a === null && (a = d),
                        !(d - a < i) &&
                            ((n = d - a - i),
                            n >= e || m
                                ? ((n = 1),
                                  (o = r ? 0 : 1),
                                  c.onupdate(o * s),
                                  c.oncomplete(o * s),
                                  (l = !0))
                                : ((o = n / e),
                                  c.onupdate(
                                      (n >= 0 ? t(r ? 1 - o : o) : 0) * s,
                                  ))))
                },
                target: {
                    get: () => (r ? 0 : s),
                    set: (d) => {
                        if (s === null) {
                            ;(s = d), c.onupdate(d), c.oncomplete(d)
                            return
                        }
                        d < s ? ((s = 1), (r = !0)) : ((r = !1), (s = d)),
                            (l = !1),
                            (a = null)
                    },
                },
                resting: { get: () => l },
                onupdate: (d) => {},
                oncomplete: (d) => {},
            })
        return c
    },
    za = { spring: gr, tween: Er },
    br = (e, t, i) => {
        let a = e[t] && typeof e[t][i] == 'object' ? e[t][i] : e[t] || e,
            n = typeof a == 'string' ? a : a.type,
            o = typeof a == 'object' ? { ...a } : {}
        return za[n] ? za[n](o) : null
    },
    qi = (e, t, i, a = !1) => {
        ;(t = Array.isArray(t) ? t : [t]),
            t.forEach((n) => {
                e.forEach((o) => {
                    let l = o,
                        r = () => i[o],
                        s = (p) => (i[o] = p)
                    typeof o == 'object' &&
                        ((l = o.key), (r = o.getter || r), (s = o.setter || s)),
                        !(n[l] && !a) && (n[l] = { get: r, set: s })
                })
            })
    },
    Tr = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: i,
        viewExternalAPI: a,
    }) => {
        let n = { ...t },
            o = []
        return (
            te(e, (l, r) => {
                let s = br(r)
                if (!s) return
                ;(s.onupdate = (c) => {
                    t[l] = c
                }),
                    (s.target = n[l]),
                    qi(
                        [
                            {
                                key: l,
                                setter: (c) => {
                                    s.target !== c && (s.target = c)
                                },
                                getter: () => t[l],
                            },
                        ],
                        [i, a],
                        t,
                        !0,
                    ),
                    o.push(s)
            }),
            {
                write: (l) => {
                    let r = document.hidden,
                        s = !0
                    return (
                        o.forEach((p) => {
                            p.resting || (s = !1), p.interpolate(l, r)
                        }),
                        s
                    )
                },
                destroy: () => {},
            }
        )
    },
    Ir = (e) => (t, i) => {
        e.addEventListener(t, i)
    },
    vr = (e) => (t, i) => {
        e.removeEventListener(t, i)
    },
    xr = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: i,
        viewExternalAPI: a,
        viewState: n,
        view: o,
    }) => {
        let l = [],
            r = Ir(o.element),
            s = vr(o.element)
        return (
            (a.on = (p, c) => {
                l.push({ type: p, fn: c }), r(p, c)
            }),
            (a.off = (p, c) => {
                l.splice(
                    l.findIndex((d) => d.type === p && d.fn === c),
                    1,
                ),
                    s(p, c)
            }),
            {
                write: () => !0,
                destroy: () => {
                    l.forEach((p) => {
                        s(p.type, p.fn)
                    })
                },
            }
        )
    },
    yr = ({ mixinConfig: e, viewProps: t, viewExternalAPI: i }) => {
        qi(e, i, t)
    },
    ue = (e) => e != null,
    _r = {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        originX: 0,
        originY: 0,
    },
    Rr = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: i,
        viewExternalAPI: a,
        view: n,
    }) => {
        let o = { ...t },
            l = {}
        qi(e, [i, a], t)
        let r = () => [t.translateX || 0, t.translateY || 0],
            s = () => [t.scaleX || 0, t.scaleY || 0],
            p = () => (n.rect ? Tn(n.rect, n.childViews, r(), s()) : null)
        return (
            (i.rect = { get: p }),
            (a.rect = { get: p }),
            e.forEach((c) => {
                t[c] = typeof o[c] > 'u' ? _r[c] : o[c]
            }),
            {
                write: () => {
                    if (wr(l, t))
                        return Sr(n.element, t), Object.assign(l, { ...t }), !0
                },
                destroy: () => {},
            }
        )
    },
    wr = (e, t) => {
        if (Object.keys(e).length !== Object.keys(t).length) return !0
        for (let i in t) if (t[i] !== e[i]) return !0
        return !1
    },
    Sr = (
        e,
        {
            opacity: t,
            perspective: i,
            translateX: a,
            translateY: n,
            scaleX: o,
            scaleY: l,
            rotateX: r,
            rotateY: s,
            rotateZ: p,
            originX: c,
            originY: d,
            width: m,
            height: u,
        },
    ) => {
        let f = '',
            g = ''
        ;(ue(c) || ue(d)) &&
            (g += `transform-origin: ${c || 0}px ${d || 0}px;`),
            ue(i) && (f += `perspective(${i}px) `),
            (ue(a) || ue(n)) &&
                (f += `translate3d(${a || 0}px, ${n || 0}px, 0) `),
            (ue(o) || ue(l)) &&
                (f += `scale3d(${ue(o) ? o : 1}, ${ue(l) ? l : 1}, 1) `),
            ue(p) && (f += `rotateZ(${p}rad) `),
            ue(r) && (f += `rotateX(${r}rad) `),
            ue(s) && (f += `rotateY(${s}rad) `),
            f.length && (g += `transform:${f};`),
            ue(t) &&
                ((g += `opacity:${t};`),
                t === 0 && (g += 'visibility:hidden;'),
                t < 1 && (g += 'pointer-events:none;')),
            ue(u) && (g += `height:${u}px;`),
            ue(m) && (g += `width:${m}px;`)
        let h = e.elementCurrentStyle || ''
        ;(g.length !== h.length || g !== h) &&
            ((e.style.cssText = g), (e.elementCurrentStyle = g))
    },
    Lr = { styles: Rr, listeners: xr, animations: Tr, apis: yr },
    Ca = (e = {}, t = {}, i = {}) => (
        t.layoutCalculated ||
            ((e.paddingTop = parseInt(i.paddingTop, 10) || 0),
            (e.marginTop = parseInt(i.marginTop, 10) || 0),
            (e.marginRight = parseInt(i.marginRight, 10) || 0),
            (e.marginBottom = parseInt(i.marginBottom, 10) || 0),
            (e.marginLeft = parseInt(i.marginLeft, 10) || 0),
            (t.layoutCalculated = !0)),
        (e.left = t.offsetLeft || 0),
        (e.top = t.offsetTop || 0),
        (e.width = t.offsetWidth || 0),
        (e.height = t.offsetHeight || 0),
        (e.right = e.left + e.width),
        (e.bottom = e.top + e.height),
        (e.scrollTop = t.scrollTop),
        (e.hidden = t.offsetParent === null),
        e
    ),
    ne =
        ({
            tag: e = 'div',
            name: t = null,
            attributes: i = {},
            read: a = () => {},
            write: n = () => {},
            create: o = () => {},
            destroy: l = () => {},
            filterFrameActionsForChild: r = (u, f) => f,
            didCreateView: s = () => {},
            didWriteView: p = () => {},
            ignoreRect: c = !1,
            ignoreRectUpdate: d = !1,
            mixins: m = [],
        } = {}) =>
        (u, f = {}) => {
            let g = oi(e, `filepond--${t}`, i),
                h = window.getComputedStyle(g, null),
                I = Ca(),
                E = null,
                T = !1,
                v = [],
                y = [],
                b = {},
                w = {},
                x = [n],
                _ = [a],
                P = [l],
                O = () => g,
                M = () => v.concat(),
                N = () => b,
                S = (k) => (H, q) => H(k, q),
                D = () => E || ((E = Tn(I, v, [0, 0], [1, 1])), E),
                R = () => h,
                L = () => {
                    ;(E = null),
                        v.forEach((q) => q._read()),
                        !(d && I.width && I.height) && Ca(I, g, h)
                    let H = { root: Q, props: f, rect: I }
                    _.forEach((q) => q(H))
                },
                z = (k, H, q) => {
                    let re = H.length === 0
                    return (
                        x.forEach((ee) => {
                            ee({
                                props: f,
                                root: Q,
                                actions: H,
                                timestamp: k,
                                shouldOptimize: q,
                            }) === !1 && (re = !1)
                        }),
                        y.forEach((ee) => {
                            ee.write(k) === !1 && (re = !1)
                        }),
                        v
                            .filter((ee) => !!ee.element.parentNode)
                            .forEach((ee) => {
                                ee._write(k, r(ee, H), q) || (re = !1)
                            }),
                        v.forEach((ee, dt) => {
                            ee.element.parentNode ||
                                (Q.appendChild(ee.element, dt),
                                ee._read(),
                                ee._write(k, r(ee, H), q),
                                (re = !1))
                        }),
                        (T = re),
                        p({ props: f, root: Q, actions: H, timestamp: k }),
                        re
                    )
                },
                F = () => {
                    y.forEach((k) => k.destroy()),
                        P.forEach((k) => {
                            k({ root: Q, props: f })
                        }),
                        v.forEach((k) => k._destroy())
                },
                G = {
                    element: { get: O },
                    style: { get: R },
                    childViews: { get: M },
                },
                C = {
                    ...G,
                    rect: { get: D },
                    ref: { get: N },
                    is: (k) => t === k,
                    appendChild: sr(g),
                    createChildView: S(u),
                    linkView: (k) => (v.push(k), k),
                    unlinkView: (k) => {
                        v.splice(v.indexOf(k), 1)
                    },
                    appendChildView: cr(g, v),
                    removeChildView: dr(g, v),
                    registerWriter: (k) => x.push(k),
                    registerReader: (k) => _.push(k),
                    registerDestroyer: (k) => P.push(k),
                    invalidateLayout: () => (g.layoutCalculated = !1),
                    dispatch: u.dispatch,
                    query: u.query,
                },
                Y = {
                    element: { get: O },
                    childViews: { get: M },
                    rect: { get: D },
                    resting: { get: () => T },
                    isRectIgnored: () => c,
                    _read: L,
                    _write: z,
                    _destroy: F,
                },
                X = { ...G, rect: { get: () => I } }
            Object.keys(m)
                .sort((k, H) => (k === 'styles' ? 1 : H === 'styles' ? -1 : 0))
                .forEach((k) => {
                    let H = Lr[k]({
                        mixinConfig: m[k],
                        viewProps: f,
                        viewState: w,
                        viewInternalAPI: C,
                        viewExternalAPI: Y,
                        view: We(X),
                    })
                    H && y.push(H)
                })
            let Q = We(C)
            o({ root: Q, props: f })
            let le = ur(g)
            return (
                v.forEach((k, H) => {
                    Q.appendChild(k.element, le + H)
                }),
                s(Q),
                We(Y)
            )
        },
    Ar = (e, t, i = 60) => {
        let a = '__framePainter'
        if (window[a]) {
            window[a].readers.push(e), window[a].writers.push(t)
            return
        }
        window[a] = { readers: [e], writers: [t] }
        let n = window[a],
            o = 1e3 / i,
            l = null,
            r = null,
            s = null,
            p = null,
            c = () => {
                document.hidden
                    ? ((s = () =>
                          window.setTimeout(() => d(performance.now()), o)),
                      (p = () => window.clearTimeout(r)))
                    : ((s = () => window.requestAnimationFrame(d)),
                      (p = () => window.cancelAnimationFrame(r)))
            }
        document.addEventListener('visibilitychange', () => {
            p && p(), c(), d(performance.now())
        })
        let d = (m) => {
            ;(r = s(d)), l || (l = m)
            let u = m - l
            u <= o ||
                ((l = m - (u % o)),
                n.readers.forEach((f) => f()),
                n.writers.forEach((f) => f(m)))
        }
        return (
            c(),
            d(performance.now()),
            {
                pause: () => {
                    p(r)
                },
            }
        )
    },
    ge =
        (e, t) =>
        ({
            root: i,
            props: a,
            actions: n = [],
            timestamp: o,
            shouldOptimize: l,
        }) => {
            n
                .filter((r) => e[r.type])
                .forEach((r) =>
                    e[r.type]({
                        root: i,
                        props: a,
                        action: r.data,
                        timestamp: o,
                        shouldOptimize: l,
                    }),
                ),
                t &&
                    t({
                        root: i,
                        props: a,
                        actions: n,
                        timestamp: o,
                        shouldOptimize: l,
                    })
        },
    Na = (e, t) => t.parentNode.insertBefore(e, t),
    Ba = (e, t) => t.parentNode.insertBefore(e, t.nextSibling),
    ci = (e) => Array.isArray(e),
    ke = (e) => e == null,
    Mr = (e) => e.trim(),
    di = (e) => '' + e,
    Or = (e, t = ',') =>
        ke(e)
            ? []
            : ci(e)
              ? e
              : di(e)
                    .split(t)
                    .map(Mr)
                    .filter((i) => i.length),
    In = (e) => typeof e == 'boolean',
    vn = (e) => (In(e) ? e : e === 'true'),
    fe = (e) => typeof e == 'string',
    xn = (e) => ($e(e) ? e : fe(e) ? di(e).replace(/[a-z]+/gi, '') : 0),
    ni = (e) => parseInt(xn(e), 10),
    ka = (e) => parseFloat(xn(e)),
    Et = (e) => $e(e) && isFinite(e) && Math.floor(e) === e,
    Va = (e, t = 1e3) => {
        if (Et(e)) return e
        let i = di(e).trim()
        return /MB$/i.test(i)
            ? ((i = i.replace(/MB$i/, '').trim()), ni(i) * t * t)
            : /KB/i.test(i)
              ? ((i = i.replace(/KB$i/, '').trim()), ni(i) * t)
              : ni(i)
    },
    Xe = (e) => typeof e == 'function',
    Pr = (e) => {
        let t = self,
            i = e.split('.'),
            a = null
        for (; (a = i.shift()); ) if (((t = t[a]), !t)) return null
        return t
    },
    Ga = {
        process: 'POST',
        patch: 'PATCH',
        revert: 'DELETE',
        fetch: 'GET',
        restore: 'GET',
        load: 'GET',
    },
    Dr = (e) => {
        let t = {}
        return (
            (t.url = fe(e) ? e : e.url || ''),
            (t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0),
            (t.headers = e.headers ? e.headers : {}),
            te(Ga, (i) => {
                t[i] = Fr(i, e[i], Ga[i], t.timeout, t.headers)
            }),
            (t.process = e.process || fe(e) || e.url ? t.process : null),
            (t.remove = e.remove || null),
            delete t.headers,
            t
        )
    },
    Fr = (e, t, i, a, n) => {
        if (t === null) return null
        if (typeof t == 'function') return t
        let o = {
            url: i === 'GET' || i === 'PATCH' ? `?${e}=` : '',
            method: i,
            headers: n,
            withCredentials: !1,
            timeout: a,
            onload: null,
            ondata: null,
            onerror: null,
        }
        if (fe(t)) return (o.url = t), o
        if ((Object.assign(o, t), fe(o.headers))) {
            let l = o.headers.split(/:(.+)/)
            o.headers = { header: l[0], value: l[1] }
        }
        return (o.withCredentials = vn(o.withCredentials)), o
    },
    zr = (e) => Dr(e),
    Cr = (e) => e === null,
    de = (e) => typeof e == 'object' && e !== null,
    Nr = (e) =>
        de(e) &&
        fe(e.url) &&
        de(e.process) &&
        de(e.revert) &&
        de(e.restore) &&
        de(e.fetch),
    Di = (e) =>
        ci(e)
            ? 'array'
            : Cr(e)
              ? 'null'
              : Et(e)
                ? 'int'
                : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)
                  ? 'bytes'
                  : Nr(e)
                    ? 'api'
                    : typeof e,
    Br = (e) =>
        e
            .replace(/{\s*'/g, '{"')
            .replace(/'\s*}/g, '"}')
            .replace(/'\s*:/g, '":')
            .replace(/:\s*'/g, ':"')
            .replace(/,\s*'/g, ',"')
            .replace(/'\s*,/g, '",'),
    kr = {
        array: Or,
        boolean: vn,
        int: (e) => (Di(e) === 'bytes' ? Va(e) : ni(e)),
        number: ka,
        float: ka,
        bytes: Va,
        string: (e) => (Xe(e) ? e : di(e)),
        function: (e) => Pr(e),
        serverapi: zr,
        object: (e) => {
            try {
                return JSON.parse(Br(e))
            } catch {
                return null
            }
        },
    },
    Vr = (e, t) => kr[t](e),
    yn = (e, t, i) => {
        if (e === t) return e
        let a = Di(e)
        if (a !== i) {
            let n = Vr(e, i)
            if (((a = Di(n)), n === null))
                throw `Trying to assign value with incorrect type to "${option}", allowed type: "${i}"`
            e = n
        }
        return e
    },
    Gr = (e, t) => {
        let i = e
        return {
            enumerable: !0,
            get: () => i,
            set: (a) => {
                i = yn(a, e, t)
            },
        }
    },
    Ur = (e) => {
        let t = {}
        return (
            te(e, (i) => {
                let a = e[i]
                t[i] = Gr(a[0], a[1])
            }),
            We(t)
        )
    },
    Wr = (e) => ({
        items: [],
        listUpdateTimeout: null,
        itemUpdateTimeout: null,
        processingQueue: [],
        options: Ur(e),
    }),
    pi = (e, t = '-') =>
        e
            .split(/(?=[A-Z])/)
            .map((i) => i.toLowerCase())
            .join(t),
    Hr = (e, t) => {
        let i = {}
        return (
            te(t, (a) => {
                i[a] = {
                    get: () => e.getState().options[a],
                    set: (n) => {
                        e.dispatch(`SET_${pi(a, '_').toUpperCase()}`, {
                            value: n,
                        })
                    },
                }
            }),
            i
        )
    },
    jr = (e) => (t, i, a) => {
        let n = {}
        return (
            te(e, (o) => {
                let l = pi(o, '_').toUpperCase()
                n[`SET_${l}`] = (r) => {
                    try {
                        a.options[o] = r.value
                    } catch {}
                    t(`DID_SET_${l}`, { value: a.options[o] })
                }
            }),
            n
        )
    },
    qr = (e) => (t) => {
        let i = {}
        return (
            te(e, (a) => {
                i[`GET_${pi(a, '_').toUpperCase()}`] = (n) => t.options[a]
            }),
            i
        )
    },
    _e = { API: 1, DROP: 2, BROWSE: 3, PASTE: 4, NONE: 5 },
    Yi = () => Math.random().toString(36).substring(2, 11),
    $i = (e, t) => e.splice(t, 1),
    Yr = (e, t) => {
        t
            ? e()
            : document.hidden
              ? Promise.resolve(1).then(e)
              : setTimeout(e, 0)
    },
    mi = () => {
        let e = [],
            t = (a, n) => {
                $i(
                    e,
                    e.findIndex((o) => o.event === a && (o.cb === n || !n)),
                )
            },
            i = (a, n, o) => {
                e.filter((l) => l.event === a)
                    .map((l) => l.cb)
                    .forEach((l) => Yr(() => l(...n), o))
            }
        return {
            fireSync: (a, ...n) => {
                i(a, n, !0)
            },
            fire: (a, ...n) => {
                i(a, n, !1)
            },
            on: (a, n) => {
                e.push({ event: a, cb: n })
            },
            onOnce: (a, n) => {
                e.push({
                    event: a,
                    cb: (...o) => {
                        t(a, n), n(...o)
                    },
                })
            },
            off: t,
        }
    },
    _n = (e, t, i) => {
        Object.getOwnPropertyNames(e)
            .filter((a) => !i.includes(a))
            .forEach((a) =>
                Object.defineProperty(
                    t,
                    a,
                    Object.getOwnPropertyDescriptor(e, a),
                ),
            )
    },
    $r = [
        'fire',
        'process',
        'revert',
        'load',
        'on',
        'off',
        'onOnce',
        'retryLoad',
        'extend',
        'archive',
        'archived',
        'release',
        'released',
        'requestProcessing',
        'freeze',
    ],
    he = (e) => {
        let t = {}
        return _n(e, t, $r), t
    },
    Xr = (e) => {
        e.forEach((t, i) => {
            t.released && $i(e, i)
        })
    },
    U = {
        INIT: 1,
        IDLE: 2,
        PROCESSING_QUEUED: 9,
        PROCESSING: 3,
        PROCESSING_COMPLETE: 5,
        PROCESSING_ERROR: 6,
        PROCESSING_REVERT_ERROR: 10,
        LOADING: 7,
        LOAD_ERROR: 8,
    },
    se = { INPUT: 1, LIMBO: 2, LOCAL: 3 },
    Rn = (e) => /[^0-9]+/.exec(e),
    wn = () => Rn((1.1).toLocaleString())[0],
    Qr = () => {
        let e = wn(),
            t = (1e3).toLocaleString()
        return t !== '1000' ? Rn(t)[0] : e === '.' ? ',' : '.'
    },
    A = {
        BOOLEAN: 'boolean',
        INT: 'int',
        NUMBER: 'number',
        STRING: 'string',
        ARRAY: 'array',
        OBJECT: 'object',
        FUNCTION: 'function',
        ACTION: 'action',
        SERVER_API: 'serverapi',
        REGEX: 'regex',
    },
    Xi = [],
    Me = (e, t, i) =>
        new Promise((a, n) => {
            let o = Xi.filter((r) => r.key === e).map((r) => r.cb)
            if (o.length === 0) {
                a(t)
                return
            }
            let l = o.shift()
            o.reduce((r, s) => r.then((p) => s(p, i)), l(t, i))
                .then((r) => a(r))
                .catch((r) => n(r))
        }),
    tt = (e, t, i) => Xi.filter((a) => a.key === e).map((a) => a.cb(t, i)),
    Zr = (e, t) => Xi.push({ key: e, cb: t }),
    Kr = (e) => Object.assign(pt, e),
    li = () => ({ ...pt }),
    Jr = (e) => {
        te(e, (t, i) => {
            pt[t] && (pt[t][0] = yn(i, pt[t][0], pt[t][1]))
        })
    },
    pt = {
        id: [null, A.STRING],
        name: ['filepond', A.STRING],
        disabled: [!1, A.BOOLEAN],
        className: [null, A.STRING],
        required: [!1, A.BOOLEAN],
        captureMethod: [null, A.STRING],
        allowSyncAcceptAttribute: [!0, A.BOOLEAN],
        allowDrop: [!0, A.BOOLEAN],
        allowBrowse: [!0, A.BOOLEAN],
        allowPaste: [!0, A.BOOLEAN],
        allowMultiple: [!1, A.BOOLEAN],
        allowReplace: [!0, A.BOOLEAN],
        allowRevert: [!0, A.BOOLEAN],
        allowRemove: [!0, A.BOOLEAN],
        allowProcess: [!0, A.BOOLEAN],
        allowReorder: [!1, A.BOOLEAN],
        allowDirectoriesOnly: [!1, A.BOOLEAN],
        storeAsFile: [!1, A.BOOLEAN],
        forceRevert: [!1, A.BOOLEAN],
        maxFiles: [null, A.INT],
        checkValidity: [!1, A.BOOLEAN],
        itemInsertLocationFreedom: [!0, A.BOOLEAN],
        itemInsertLocation: ['before', A.STRING],
        itemInsertInterval: [75, A.INT],
        dropOnPage: [!1, A.BOOLEAN],
        dropOnElement: [!0, A.BOOLEAN],
        dropValidation: [!1, A.BOOLEAN],
        ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], A.ARRAY],
        instantUpload: [!0, A.BOOLEAN],
        maxParallelUploads: [2, A.INT],
        allowMinimumUploadDuration: [!0, A.BOOLEAN],
        chunkUploads: [!1, A.BOOLEAN],
        chunkForce: [!1, A.BOOLEAN],
        chunkSize: [5e6, A.INT],
        chunkRetryDelays: [[500, 1e3, 3e3], A.ARRAY],
        server: [null, A.SERVER_API],
        fileSizeBase: [1e3, A.INT],
        labelFileSizeBytes: ['bytes', A.STRING],
        labelFileSizeKilobytes: ['KB', A.STRING],
        labelFileSizeMegabytes: ['MB', A.STRING],
        labelFileSizeGigabytes: ['GB', A.STRING],
        labelDecimalSeparator: [wn(), A.STRING],
        labelThousandsSeparator: [Qr(), A.STRING],
        labelIdle: [
            'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
            A.STRING,
        ],
        labelInvalidField: ['Field contains invalid files', A.STRING],
        labelFileWaitingForSize: ['Waiting for size', A.STRING],
        labelFileSizeNotAvailable: ['Size not available', A.STRING],
        labelFileCountSingular: ['file in list', A.STRING],
        labelFileCountPlural: ['files in list', A.STRING],
        labelFileLoading: ['Loading', A.STRING],
        labelFileAdded: ['Added', A.STRING],
        labelFileLoadError: ['Error during load', A.STRING],
        labelFileRemoved: ['Removed', A.STRING],
        labelFileRemoveError: ['Error during remove', A.STRING],
        labelFileProcessing: ['Uploading', A.STRING],
        labelFileProcessingComplete: ['Upload complete', A.STRING],
        labelFileProcessingAborted: ['Upload cancelled', A.STRING],
        labelFileProcessingError: ['Error during upload', A.STRING],
        labelFileProcessingRevertError: ['Error during revert', A.STRING],
        labelTapToCancel: ['tap to cancel', A.STRING],
        labelTapToRetry: ['tap to retry', A.STRING],
        labelTapToUndo: ['tap to undo', A.STRING],
        labelButtonRemoveItem: ['Remove', A.STRING],
        labelButtonAbortItemLoad: ['Abort', A.STRING],
        labelButtonRetryItemLoad: ['Retry', A.STRING],
        labelButtonAbortItemProcessing: ['Cancel', A.STRING],
        labelButtonUndoItemProcessing: ['Undo', A.STRING],
        labelButtonRetryItemProcessing: ['Retry', A.STRING],
        labelButtonProcessItem: ['Upload', A.STRING],
        iconRemove: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
            A.STRING,
        ],
        iconProcess: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
            A.STRING,
        ],
        iconRetry: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
            A.STRING,
        ],
        iconUndo: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
            A.STRING,
        ],
        iconDone: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
            A.STRING,
        ],
        oninit: [null, A.FUNCTION],
        onwarning: [null, A.FUNCTION],
        onerror: [null, A.FUNCTION],
        onactivatefile: [null, A.FUNCTION],
        oninitfile: [null, A.FUNCTION],
        onaddfilestart: [null, A.FUNCTION],
        onaddfileprogress: [null, A.FUNCTION],
        onaddfile: [null, A.FUNCTION],
        onprocessfilestart: [null, A.FUNCTION],
        onprocessfileprogress: [null, A.FUNCTION],
        onprocessfileabort: [null, A.FUNCTION],
        onprocessfilerevert: [null, A.FUNCTION],
        onprocessfile: [null, A.FUNCTION],
        onprocessfiles: [null, A.FUNCTION],
        onremovefile: [null, A.FUNCTION],
        onpreparefile: [null, A.FUNCTION],
        onupdatefiles: [null, A.FUNCTION],
        onreorderfiles: [null, A.FUNCTION],
        beforeDropFile: [null, A.FUNCTION],
        beforeAddFile: [null, A.FUNCTION],
        beforeRemoveFile: [null, A.FUNCTION],
        beforePrepareFile: [null, A.FUNCTION],
        stylePanelLayout: [null, A.STRING],
        stylePanelAspectRatio: [null, A.STRING],
        styleItemPanelAspectRatio: [null, A.STRING],
        styleButtonRemoveItemPosition: ['left', A.STRING],
        styleButtonProcessItemPosition: ['right', A.STRING],
        styleLoadIndicatorPosition: ['right', A.STRING],
        styleProgressIndicatorPosition: ['right', A.STRING],
        styleButtonRemoveItemAlign: [!1, A.BOOLEAN],
        files: [[], A.ARRAY],
        credits: [['https://pqina.nl/', 'Powered by PQINA'], A.ARRAY],
    },
    Qe = (e, t) =>
        ke(t)
            ? e[0] || null
            : Et(t)
              ? e[t] || null
              : (typeof t == 'object' && (t = t.id),
                e.find((i) => i.id === t) || null),
    Sn = (e) => {
        if (ke(e)) return e
        if (/:/.test(e)) {
            let t = e.split(':')
            return t[1] / t[0]
        }
        return parseFloat(e)
    },
    Oe = (e) => e.filter((t) => !t.archived),
    Ln = { EMPTY: 0, IDLE: 1, ERROR: 2, BUSY: 3, READY: 4 },
    Kt = null,
    es = () => {
        if (Kt === null)
            try {
                let e = new DataTransfer()
                e.items.add(new File(['hello world'], 'This_Works.txt'))
                let t = document.createElement('input')
                t.setAttribute('type', 'file'),
                    (t.files = e.files),
                    (Kt = t.files.length === 1)
            } catch {
                Kt = !1
            }
        return Kt
    },
    ts = [U.LOAD_ERROR, U.PROCESSING_ERROR, U.PROCESSING_REVERT_ERROR],
    is = [U.LOADING, U.PROCESSING, U.PROCESSING_QUEUED, U.INIT],
    as = [U.PROCESSING_COMPLETE],
    ns = (e) => ts.includes(e.status),
    os = (e) => is.includes(e.status),
    ls = (e) => as.includes(e.status),
    Ua = (e) =>
        de(e.options.server) &&
        (de(e.options.server.process) || Xe(e.options.server.process)),
    rs = (e) => ({
        GET_STATUS: () => {
            let t = Oe(e.items),
                { EMPTY: i, ERROR: a, BUSY: n, IDLE: o, READY: l } = Ln
            return t.length === 0
                ? i
                : t.some(ns)
                  ? a
                  : t.some(os)
                    ? n
                    : t.some(ls)
                      ? l
                      : o
        },
        GET_ITEM: (t) => Qe(e.items, t),
        GET_ACTIVE_ITEM: (t) => Qe(Oe(e.items), t),
        GET_ACTIVE_ITEMS: () => Oe(e.items),
        GET_ITEMS: () => e.items,
        GET_ITEM_NAME: (t) => {
            let i = Qe(e.items, t)
            return i ? i.filename : null
        },
        GET_ITEM_SIZE: (t) => {
            let i = Qe(e.items, t)
            return i ? i.fileSize : null
        },
        GET_STYLES: () =>
            Object.keys(e.options)
                .filter((t) => /^style/.test(t))
                .map((t) => ({ name: t, value: e.options[t] })),
        GET_PANEL_ASPECT_RATIO: () =>
            /circle/.test(e.options.stylePanelLayout)
                ? 1
                : Sn(e.options.stylePanelAspectRatio),
        GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
        GET_ITEMS_BY_STATUS: (t) => Oe(e.items).filter((i) => i.status === t),
        GET_TOTAL_ITEMS: () => Oe(e.items).length,
        SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && es() && !Ua(e),
        IS_ASYNC: () => Ua(e),
        GET_FILE_SIZE_LABELS: (t) => ({
            labelBytes: t('GET_LABEL_FILE_SIZE_BYTES') || void 0,
            labelKilobytes: t('GET_LABEL_FILE_SIZE_KILOBYTES') || void 0,
            labelMegabytes: t('GET_LABEL_FILE_SIZE_MEGABYTES') || void 0,
            labelGigabytes: t('GET_LABEL_FILE_SIZE_GIGABYTES') || void 0,
        }),
    }),
    ss = (e) => {
        let t = Oe(e.items).length
        if (!e.options.allowMultiple) return t === 0
        let i = e.options.maxFiles
        return i === null || t < i
    },
    An = (e, t, i) => Math.max(Math.min(i, e), t),
    cs = (e, t, i) => e.splice(t, 0, i),
    ds = (e, t, i) =>
        ke(t)
            ? null
            : typeof i > 'u'
              ? (e.push(t), t)
              : ((i = An(i, 0, e.length)), cs(e, i, t), t),
    Fi = (e) =>
        /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
            e,
        ),
    zt = (e) => `${e}`.split('/').pop().split('?').shift(),
    ui = (e) => e.split('.').pop(),
    ps = (e) => {
        if (typeof e != 'string') return ''
        let t = e.split('/').pop()
        return /svg/.test(t)
            ? 'svg'
            : /zip|compressed/.test(t)
              ? 'zip'
              : /plain/.test(t)
                ? 'txt'
                : /msword/.test(t)
                  ? 'doc'
                  : /[a-z]+/.test(t)
                    ? t === 'jpeg'
                        ? 'jpg'
                        : t
                    : ''
    },
    Mt = (e, t = '') => (t + e).slice(-t.length),
    Mn = (e = new Date()) =>
        `${e.getFullYear()}-${Mt(e.getMonth() + 1, '00')}-${Mt(e.getDate(), '00')}_${Mt(e.getHours(), '00')}-${Mt(e.getMinutes(), '00')}-${Mt(e.getSeconds(), '00')}`,
    ht = (e, t, i = null, a = null) => {
        let n =
            typeof i == 'string'
                ? e.slice(0, e.size, i)
                : e.slice(0, e.size, e.type)
        return (
            (n.lastModifiedDate = new Date()),
            e._relativePath && (n._relativePath = e._relativePath),
            fe(t) || (t = Mn()),
            t && a === null && ui(t)
                ? (n.name = t)
                : ((a = a || ps(n.type)), (n.name = t + (a ? '.' + a : ''))),
            n
        )
    },
    ms = () =>
        (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder),
    On = (e, t) => {
        let i = ms()
        if (i) {
            let a = new i()
            return a.append(e), a.getBlob(t)
        }
        return new Blob([e], { type: t })
    },
    us = (e, t) => {
        let i = new ArrayBuffer(e.length),
            a = new Uint8Array(i)
        for (let n = 0; n < e.length; n++) a[n] = e.charCodeAt(n)
        return On(i, t)
    },
    Pn = (e) => (/^data:(.+);/.exec(e) || [])[1] || null,
    fs = (e) => e.split(',')[1].replace(/\s/g, ''),
    gs = (e) => atob(fs(e)),
    hs = (e) => {
        let t = Pn(e),
            i = gs(e)
        return us(i, t)
    },
    Es = (e, t, i) => ht(hs(e), t, null, i),
    bs = (e) => {
        if (!/^content-disposition:/i.test(e)) return null
        let t = e
            .split(/filename=|filename\*=.+''/)
            .splice(1)
            .map((i) => i.trim().replace(/^["']|[;"']{0,2}$/g, ''))
            .filter((i) => i.length)
        return t.length ? decodeURI(t[t.length - 1]) : null
    },
    Ts = (e) => {
        if (/content-length:/i.test(e)) {
            let t = e.match(/[0-9]+/)[0]
            return t ? parseInt(t, 10) : null
        }
        return null
    },
    Is = (e) =>
        (/x-content-transfer-id:/i.test(e) && (e.split(':')[1] || '').trim()) ||
        null,
    Qi = (e) => {
        let t = { source: null, name: null, size: null },
            i = e.split(`
`)
        for (let a of i) {
            let n = bs(a)
            if (n) {
                t.name = n
                continue
            }
            let o = Ts(a)
            if (o) {
                t.size = o
                continue
            }
            let l = Is(a)
            if (l) {
                t.source = l
                continue
            }
        }
        return t
    },
    vs = (e) => {
        let t = {
                source: null,
                complete: !1,
                progress: 0,
                size: null,
                timestamp: null,
                duration: 0,
                request: null,
            },
            i = () => t.progress,
            a = () => {
                t.request && t.request.abort && t.request.abort()
            },
            n = () => {
                let r = t.source
                l.fire('init', r),
                    r instanceof File
                        ? l.fire('load', r)
                        : r instanceof Blob
                          ? l.fire('load', ht(r, r.name))
                          : Fi(r)
                            ? l.fire('load', Es(r))
                            : o(r)
            },
            o = (r) => {
                if (!e) {
                    l.fire('error', {
                        type: 'error',
                        body: "Can't load URL",
                        code: 400,
                    })
                    return
                }
                ;(t.timestamp = Date.now()),
                    (t.request = e(
                        r,
                        (s) => {
                            ;(t.duration = Date.now() - t.timestamp),
                                (t.complete = !0),
                                s instanceof Blob &&
                                    (s = ht(s, s.name || zt(r))),
                                l.fire(
                                    'load',
                                    s instanceof Blob ? s : s ? s.body : null,
                                )
                        },
                        (s) => {
                            l.fire(
                                'error',
                                typeof s == 'string'
                                    ? { type: 'error', code: 0, body: s }
                                    : s,
                            )
                        },
                        (s, p, c) => {
                            if (
                                (c && (t.size = c),
                                (t.duration = Date.now() - t.timestamp),
                                !s)
                            ) {
                                t.progress = null
                                return
                            }
                            ;(t.progress = p / c),
                                l.fire('progress', t.progress)
                        },
                        () => {
                            l.fire('abort')
                        },
                        (s) => {
                            let p = Qi(typeof s == 'string' ? s : s.headers)
                            l.fire('meta', {
                                size: t.size || p.size,
                                filename: p.name,
                                source: p.source,
                            })
                        },
                    ))
            },
            l = {
                ...mi(),
                setSource: (r) => (t.source = r),
                getProgress: i,
                abort: a,
                load: n,
            }
        return l
    },
    Wa = (e) => /GET|HEAD/.test(e),
    Ze = (e, t, i) => {
        let a = {
                onheaders: () => {},
                onprogress: () => {},
                onload: () => {},
                ontimeout: () => {},
                onerror: () => {},
                onabort: () => {},
                abort: () => {
                    ;(n = !0), l.abort()
                },
            },
            n = !1,
            o = !1
        ;(i = { method: 'POST', headers: {}, withCredentials: !1, ...i }),
            (t = encodeURI(t)),
            Wa(i.method) &&
                e &&
                (t = `${t}${encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e))}`)
        let l = new XMLHttpRequest(),
            r = Wa(i.method) ? l : l.upload
        return (
            (r.onprogress = (s) => {
                n || a.onprogress(s.lengthComputable, s.loaded, s.total)
            }),
            (l.onreadystatechange = () => {
                l.readyState < 2 ||
                    (l.readyState === 4 && l.status === 0) ||
                    o ||
                    ((o = !0), a.onheaders(l))
            }),
            (l.onload = () => {
                l.status >= 200 && l.status < 300 ? a.onload(l) : a.onerror(l)
            }),
            (l.onerror = () => a.onerror(l)),
            (l.onabort = () => {
                ;(n = !0), a.onabort()
            }),
            (l.ontimeout = () => a.ontimeout(l)),
            l.open(i.method, t, !0),
            Et(i.timeout) && (l.timeout = i.timeout),
            Object.keys(i.headers).forEach((s) => {
                let p = unescape(encodeURIComponent(i.headers[s]))
                l.setRequestHeader(s, p)
            }),
            i.responseType && (l.responseType = i.responseType),
            i.withCredentials && (l.withCredentials = !0),
            l.send(e),
            a
        )
    },
    ie = (e, t, i, a) => ({ type: e, code: t, body: i, headers: a }),
    Ke = (e) => (t) => {
        e(ie('error', 0, 'Timeout', t.getAllResponseHeaders()))
    },
    Ha = (e) => /\?/.test(e),
    Dt = (...e) => {
        let t = ''
        return (
            e.forEach((i) => {
                t += Ha(t) && Ha(i) ? i.replace(/\?/, '&') : i
            }),
            t
        )
    },
    Si = (e = '', t) => {
        if (typeof t == 'function') return t
        if (!t || !fe(t.url)) return null
        let i = t.onload || ((n) => n),
            a = t.onerror || ((n) => null)
        return (n, o, l, r, s, p) => {
            let c = Ze(n, Dt(e, t.url), { ...t, responseType: 'blob' })
            return (
                (c.onload = (d) => {
                    let m = d.getAllResponseHeaders(),
                        u = Qi(m).name || zt(n)
                    o(
                        ie(
                            'load',
                            d.status,
                            t.method === 'HEAD' ? null : ht(i(d.response), u),
                            m,
                        ),
                    )
                }),
                (c.onerror = (d) => {
                    l(
                        ie(
                            'error',
                            d.status,
                            a(d.response) || d.statusText,
                            d.getAllResponseHeaders(),
                        ),
                    )
                }),
                (c.onheaders = (d) => {
                    p(ie('headers', d.status, null, d.getAllResponseHeaders()))
                }),
                (c.ontimeout = Ke(l)),
                (c.onprogress = r),
                (c.onabort = s),
                c
            )
        }
    },
    xe = { QUEUED: 0, COMPLETE: 1, PROCESSING: 2, ERROR: 3, WAITING: 4 },
    xs = (e, t, i, a, n, o, l, r, s, p, c) => {
        let d = [],
            {
                chunkTransferId: m,
                chunkServer: u,
                chunkSize: f,
                chunkRetryDelays: g,
            } = c,
            h = { serverId: m, aborted: !1 },
            I = t.ondata || ((S) => S),
            E =
                t.onload ||
                ((S, D) =>
                    D === 'HEAD'
                        ? S.getResponseHeader('Upload-Offset')
                        : S.response),
            T = t.onerror || ((S) => null),
            v = (S) => {
                let D = new FormData()
                de(n) && D.append(i, JSON.stringify(n))
                let R =
                        typeof t.headers == 'function'
                            ? t.headers(a, n)
                            : { ...t.headers, 'Upload-Length': a.size },
                    L = { ...t, headers: R },
                    z = Ze(I(D), Dt(e, t.url), L)
                ;(z.onload = (F) => S(E(F, L.method))),
                    (z.onerror = (F) =>
                        l(
                            ie(
                                'error',
                                F.status,
                                T(F.response) || F.statusText,
                                F.getAllResponseHeaders(),
                            ),
                        )),
                    (z.ontimeout = Ke(l))
            },
            y = (S) => {
                let D = Dt(e, u.url, h.serverId),
                    L = {
                        headers:
                            typeof t.headers == 'function'
                                ? t.headers(h.serverId)
                                : { ...t.headers },
                        method: 'HEAD',
                    },
                    z = Ze(null, D, L)
                ;(z.onload = (F) => S(E(F, L.method))),
                    (z.onerror = (F) =>
                        l(
                            ie(
                                'error',
                                F.status,
                                T(F.response) || F.statusText,
                                F.getAllResponseHeaders(),
                            ),
                        )),
                    (z.ontimeout = Ke(l))
            },
            b = Math.floor(a.size / f)
        for (let S = 0; S <= b; S++) {
            let D = S * f,
                R = a.slice(D, D + f, 'application/offset+octet-stream')
            d[S] = {
                index: S,
                size: R.size,
                offset: D,
                data: R,
                file: a,
                progress: 0,
                retries: [...g],
                status: xe.QUEUED,
                error: null,
                request: null,
                timeout: null,
            }
        }
        let w = () => o(h.serverId),
            x = (S) => S.status === xe.QUEUED || S.status === xe.ERROR,
            _ = (S) => {
                if (h.aborted) return
                if (((S = S || d.find(x)), !S)) {
                    d.every((C) => C.status === xe.COMPLETE) && w()
                    return
                }
                ;(S.status = xe.PROCESSING), (S.progress = null)
                let D = u.ondata || ((C) => C),
                    R = u.onerror || ((C) => null),
                    L = u.onload || (() => {}),
                    z = Dt(e, u.url, h.serverId),
                    F =
                        typeof u.headers == 'function'
                            ? u.headers(S)
                            : {
                                  ...u.headers,
                                  'Content-Type':
                                      'application/offset+octet-stream',
                                  'Upload-Offset': S.offset,
                                  'Upload-Length': a.size,
                                  'Upload-Name': a.name,
                              },
                    G = (S.request = Ze(D(S.data), z, { ...u, headers: F }))
                ;(G.onload = (C) => {
                    L(C, S.index, d.length),
                        (S.status = xe.COMPLETE),
                        (S.request = null),
                        M()
                }),
                    (G.onprogress = (C, Y, X) => {
                        ;(S.progress = C ? Y : null), O()
                    }),
                    (G.onerror = (C) => {
                        ;(S.status = xe.ERROR),
                            (S.request = null),
                            (S.error = R(C.response) || C.statusText),
                            P(S) ||
                                l(
                                    ie(
                                        'error',
                                        C.status,
                                        R(C.response) || C.statusText,
                                        C.getAllResponseHeaders(),
                                    ),
                                )
                    }),
                    (G.ontimeout = (C) => {
                        ;(S.status = xe.ERROR),
                            (S.request = null),
                            P(S) || Ke(l)(C)
                    }),
                    (G.onabort = () => {
                        ;(S.status = xe.QUEUED), (S.request = null), s()
                    })
            },
            P = (S) =>
                S.retries.length === 0
                    ? !1
                    : ((S.status = xe.WAITING),
                      clearTimeout(S.timeout),
                      (S.timeout = setTimeout(() => {
                          _(S)
                      }, S.retries.shift())),
                      !0),
            O = () => {
                let S = d.reduce(
                    (R, L) =>
                        R === null || L.progress === null
                            ? null
                            : R + L.progress,
                    0,
                )
                if (S === null) return r(!1, 0, 0)
                let D = d.reduce((R, L) => R + L.size, 0)
                r(!0, S, D)
            },
            M = () => {
                d.filter((D) => D.status === xe.PROCESSING).length >= 1 || _()
            },
            N = () => {
                d.forEach((S) => {
                    clearTimeout(S.timeout), S.request && S.request.abort()
                })
            }
        return (
            h.serverId
                ? y((S) => {
                      h.aborted ||
                          (d
                              .filter((D) => D.offset < S)
                              .forEach((D) => {
                                  ;(D.status = xe.COMPLETE),
                                      (D.progress = D.size)
                              }),
                          M())
                  })
                : v((S) => {
                      h.aborted || (p(S), (h.serverId = S), M())
                  }),
            {
                abort: () => {
                    ;(h.aborted = !0), N()
                },
            }
        )
    },
    ys = (e, t, i, a) => (n, o, l, r, s, p, c) => {
        if (!n) return
        let d = a.chunkUploads,
            m = d && n.size > a.chunkSize,
            u = d && (m || a.chunkForce)
        if (n instanceof Blob && u) return xs(e, t, i, n, o, l, r, s, p, c, a)
        let f = t.ondata || ((y) => y),
            g = t.onload || ((y) => y),
            h = t.onerror || ((y) => null),
            I =
                typeof t.headers == 'function'
                    ? t.headers(n, o) || {}
                    : { ...t.headers },
            E = { ...t, headers: I }
        var T = new FormData()
        de(o) && T.append(i, JSON.stringify(o)),
            (n instanceof Blob ? [{ name: null, file: n }] : n).forEach((y) => {
                T.append(
                    i,
                    y.file,
                    y.name === null ? y.file.name : `${y.name}${y.file.name}`,
                )
            })
        let v = Ze(f(T), Dt(e, t.url), E)
        return (
            (v.onload = (y) => {
                l(
                    ie(
                        'load',
                        y.status,
                        g(y.response),
                        y.getAllResponseHeaders(),
                    ),
                )
            }),
            (v.onerror = (y) => {
                r(
                    ie(
                        'error',
                        y.status,
                        h(y.response) || y.statusText,
                        y.getAllResponseHeaders(),
                    ),
                )
            }),
            (v.ontimeout = Ke(r)),
            (v.onprogress = s),
            (v.onabort = p),
            v
        )
    },
    _s = (e = '', t, i, a) =>
        typeof t == 'function'
            ? (...n) => t(i, ...n, a)
            : !t || !fe(t.url)
              ? null
              : ys(e, t, i, a),
    Ot = (e = '', t) => {
        if (typeof t == 'function') return t
        if (!t || !fe(t.url)) return (n, o) => o()
        let i = t.onload || ((n) => n),
            a = t.onerror || ((n) => null)
        return (n, o, l) => {
            let r = Ze(n, e + t.url, t)
            return (
                (r.onload = (s) => {
                    o(
                        ie(
                            'load',
                            s.status,
                            i(s.response),
                            s.getAllResponseHeaders(),
                        ),
                    )
                }),
                (r.onerror = (s) => {
                    l(
                        ie(
                            'error',
                            s.status,
                            a(s.response) || s.statusText,
                            s.getAllResponseHeaders(),
                        ),
                    )
                }),
                (r.ontimeout = Ke(l)),
                r
            )
        }
    },
    Dn = (e = 0, t = 1) => e + Math.random() * (t - e),
    Rs = (e, t = 1e3, i = 0, a = 25, n = 250) => {
        let o = null,
            l = Date.now(),
            r = () => {
                let s = Date.now() - l,
                    p = Dn(a, n)
                s + p > t && (p = s + p - t)
                let c = s / t
                if (c >= 1 || document.hidden) {
                    e(1)
                    return
                }
                e(c), (o = setTimeout(r, p))
            }
        return (
            t > 0 && r(),
            {
                clear: () => {
                    clearTimeout(o)
                },
            }
        )
    },
    ws = (e, t) => {
        let i = {
                complete: !1,
                perceivedProgress: 0,
                perceivedPerformanceUpdater: null,
                progress: null,
                timestamp: null,
                perceivedDuration: 0,
                duration: 0,
                request: null,
                response: null,
            },
            { allowMinimumUploadDuration: a } = t,
            n = (c, d) => {
                let m = () => {
                        i.duration === 0 ||
                            i.progress === null ||
                            p.fire('progress', p.getProgress())
                    },
                    u = () => {
                        ;(i.complete = !0),
                            p.fire('load-perceived', i.response.body)
                    }
                p.fire('start'),
                    (i.timestamp = Date.now()),
                    (i.perceivedPerformanceUpdater = Rs(
                        (f) => {
                            ;(i.perceivedProgress = f),
                                (i.perceivedDuration =
                                    Date.now() - i.timestamp),
                                m(),
                                i.response &&
                                    i.perceivedProgress === 1 &&
                                    !i.complete &&
                                    u()
                        },
                        a ? Dn(750, 1500) : 0,
                    )),
                    (i.request = e(
                        c,
                        d,
                        (f) => {
                            ;(i.response = de(f)
                                ? f
                                : {
                                      type: 'load',
                                      code: 200,
                                      body: `${f}`,
                                      headers: {},
                                  }),
                                (i.duration = Date.now() - i.timestamp),
                                (i.progress = 1),
                                p.fire('load', i.response.body),
                                (!a || (a && i.perceivedProgress === 1)) && u()
                        },
                        (f) => {
                            i.perceivedPerformanceUpdater.clear(),
                                p.fire(
                                    'error',
                                    de(f)
                                        ? f
                                        : {
                                              type: 'error',
                                              code: 0,
                                              body: `${f}`,
                                          },
                                )
                        },
                        (f, g, h) => {
                            ;(i.duration = Date.now() - i.timestamp),
                                (i.progress = f ? g / h : null),
                                m()
                        },
                        () => {
                            i.perceivedPerformanceUpdater.clear(),
                                p.fire(
                                    'abort',
                                    i.response ? i.response.body : null,
                                )
                        },
                        (f) => {
                            p.fire('transfer', f)
                        },
                    ))
            },
            o = () => {
                i.request &&
                    (i.perceivedPerformanceUpdater.clear(),
                    i.request.abort && i.request.abort(),
                    (i.complete = !0))
            },
            l = () => {
                o(),
                    (i.complete = !1),
                    (i.perceivedProgress = 0),
                    (i.progress = 0),
                    (i.timestamp = null),
                    (i.perceivedDuration = 0),
                    (i.duration = 0),
                    (i.request = null),
                    (i.response = null)
            },
            r = a
                ? () =>
                      i.progress
                          ? Math.min(i.progress, i.perceivedProgress)
                          : null
                : () => i.progress || null,
            s = a
                ? () => Math.min(i.duration, i.perceivedDuration)
                : () => i.duration,
            p = {
                ...mi(),
                process: n,
                abort: o,
                getProgress: r,
                getDuration: s,
                reset: l,
            }
        return p
    },
    Fn = (e) => e.substring(0, e.lastIndexOf('.')) || e,
    Ss = (e) => {
        let t = [e.name, e.size, e.type]
        return (
            e instanceof Blob || Fi(e)
                ? (t[0] = e.name || Mn())
                : Fi(e)
                  ? ((t[1] = e.length), (t[2] = Pn(e)))
                  : fe(e) &&
                    ((t[0] = zt(e)),
                    (t[1] = 0),
                    (t[2] = 'application/octet-stream')),
            { name: t[0], size: t[1], type: t[2] }
        )
    },
    Je = (e) => !!(e instanceof File || (e instanceof Blob && e.name)),
    zn = (e) => {
        if (!de(e)) return e
        let t = ci(e) ? [] : {}
        for (let i in e) {
            if (!e.hasOwnProperty(i)) continue
            let a = e[i]
            t[i] = a && de(a) ? zn(a) : a
        }
        return t
    },
    Ls = (e = null, t = null, i = null) => {
        let a = Yi(),
            n = {
                archived: !1,
                frozen: !1,
                released: !1,
                source: null,
                file: i,
                serverFileReference: t,
                transferId: null,
                processingAborted: !1,
                status: t ? U.PROCESSING_COMPLETE : U.INIT,
                activeLoader: null,
                activeProcessor: null,
            },
            o = null,
            l = {},
            r = (x) => (n.status = x),
            s = (x, ..._) => {
                n.released || n.frozen || b.fire(x, ..._)
            },
            p = () => ui(n.file.name),
            c = () => n.file.type,
            d = () => n.file.size,
            m = () => n.file,
            u = (x, _, P) => {
                if (((n.source = x), b.fireSync('init'), n.file)) {
                    b.fireSync('load-skip')
                    return
                }
                ;(n.file = Ss(x)),
                    _.on('init', () => {
                        s('load-init')
                    }),
                    _.on('meta', (O) => {
                        ;(n.file.size = O.size),
                            (n.file.filename = O.filename),
                            O.source &&
                                ((e = se.LIMBO),
                                (n.serverFileReference = O.source),
                                (n.status = U.PROCESSING_COMPLETE)),
                            s('load-meta')
                    }),
                    _.on('progress', (O) => {
                        r(U.LOADING), s('load-progress', O)
                    }),
                    _.on('error', (O) => {
                        r(U.LOAD_ERROR), s('load-request-error', O)
                    }),
                    _.on('abort', () => {
                        r(U.INIT), s('load-abort')
                    }),
                    _.on('load', (O) => {
                        n.activeLoader = null
                        let M = (S) => {
                                ;(n.file = Je(S) ? S : n.file),
                                    e === se.LIMBO && n.serverFileReference
                                        ? r(U.PROCESSING_COMPLETE)
                                        : r(U.IDLE),
                                    s('load')
                            },
                            N = (S) => {
                                ;(n.file = O),
                                    s('load-meta'),
                                    r(U.LOAD_ERROR),
                                    s('load-file-error', S)
                            }
                        if (n.serverFileReference) {
                            M(O)
                            return
                        }
                        P(O, M, N)
                    }),
                    _.setSource(x),
                    (n.activeLoader = _),
                    _.load()
            },
            f = () => {
                n.activeLoader && n.activeLoader.load()
            },
            g = () => {
                if (n.activeLoader) {
                    n.activeLoader.abort()
                    return
                }
                r(U.INIT), s('load-abort')
            },
            h = (x, _) => {
                if (n.processingAborted) {
                    n.processingAborted = !1
                    return
                }
                if ((r(U.PROCESSING), (o = null), !(n.file instanceof Blob))) {
                    b.on('load', () => {
                        h(x, _)
                    })
                    return
                }
                x.on('load', (M) => {
                    ;(n.transferId = null), (n.serverFileReference = M)
                }),
                    x.on('transfer', (M) => {
                        n.transferId = M
                    }),
                    x.on('load-perceived', (M) => {
                        ;(n.activeProcessor = null),
                            (n.transferId = null),
                            (n.serverFileReference = M),
                            r(U.PROCESSING_COMPLETE),
                            s('process-complete', M)
                    }),
                    x.on('start', () => {
                        s('process-start')
                    }),
                    x.on('error', (M) => {
                        ;(n.activeProcessor = null),
                            r(U.PROCESSING_ERROR),
                            s('process-error', M)
                    }),
                    x.on('abort', (M) => {
                        ;(n.activeProcessor = null),
                            (n.serverFileReference = M),
                            r(U.IDLE),
                            s('process-abort'),
                            o && o()
                    }),
                    x.on('progress', (M) => {
                        s('process-progress', M)
                    })
                let P = (M) => {
                        n.archived || x.process(M, { ...l })
                    },
                    O = console.error
                _(n.file, P, O), (n.activeProcessor = x)
            },
            I = () => {
                ;(n.processingAborted = !1), r(U.PROCESSING_QUEUED)
            },
            E = () =>
                new Promise((x) => {
                    if (!n.activeProcessor) {
                        ;(n.processingAborted = !0),
                            r(U.IDLE),
                            s('process-abort'),
                            x()
                        return
                    }
                    ;(o = () => {
                        x()
                    }),
                        n.activeProcessor.abort()
                }),
            T = (x, _) =>
                new Promise((P, O) => {
                    let M =
                        n.serverFileReference !== null
                            ? n.serverFileReference
                            : n.transferId
                    if (M === null) {
                        P()
                        return
                    }
                    x(
                        M,
                        () => {
                            ;(n.serverFileReference = null),
                                (n.transferId = null),
                                P()
                        },
                        (N) => {
                            if (!_) {
                                P()
                                return
                            }
                            r(U.PROCESSING_REVERT_ERROR),
                                s('process-revert-error'),
                                O(N)
                        },
                    ),
                        r(U.IDLE),
                        s('process-revert')
                }),
            v = (x, _, P) => {
                let O = x.split('.'),
                    M = O[0],
                    N = O.pop(),
                    S = l
                O.forEach((D) => (S = S[D])),
                    JSON.stringify(S[N]) !== JSON.stringify(_) &&
                        ((S[N] = _),
                        s('metadata-update', {
                            key: M,
                            value: l[M],
                            silent: P,
                        }))
            },
            b = {
                id: { get: () => a },
                origin: { get: () => e, set: (x) => (e = x) },
                serverId: { get: () => n.serverFileReference },
                transferId: { get: () => n.transferId },
                status: { get: () => n.status },
                filename: { get: () => n.file.name },
                filenameWithoutExtension: { get: () => Fn(n.file.name) },
                fileExtension: { get: p },
                fileType: { get: c },
                fileSize: { get: d },
                file: { get: m },
                relativePath: { get: () => n.file._relativePath },
                source: { get: () => n.source },
                getMetadata: (x) => zn(x ? l[x] : l),
                setMetadata: (x, _, P) => {
                    if (de(x)) {
                        let O = x
                        return (
                            Object.keys(O).forEach((M) => {
                                v(M, O[M], _)
                            }),
                            x
                        )
                    }
                    return v(x, _, P), _
                },
                extend: (x, _) => (w[x] = _),
                abortLoad: g,
                retryLoad: f,
                requestProcessing: I,
                abortProcessing: E,
                load: u,
                process: h,
                revert: T,
                ...mi(),
                freeze: () => (n.frozen = !0),
                release: () => (n.released = !0),
                released: { get: () => n.released },
                archive: () => (n.archived = !0),
                archived: { get: () => n.archived },
                setFile: (x) => (n.file = x),
            },
            w = We(b)
        return w
    },
    As = (e, t) => (ke(t) ? 0 : fe(t) ? e.findIndex((i) => i.id === t) : -1),
    ja = (e, t) => {
        let i = As(e, t)
        if (!(i < 0)) return e[i] || null
    },
    qa = (e, t, i, a, n, o) => {
        let l = Ze(null, e, { method: 'GET', responseType: 'blob' })
        return (
            (l.onload = (r) => {
                let s = r.getAllResponseHeaders(),
                    p = Qi(s).name || zt(e)
                t(ie('load', r.status, ht(r.response, p), s))
            }),
            (l.onerror = (r) => {
                i(
                    ie(
                        'error',
                        r.status,
                        r.statusText,
                        r.getAllResponseHeaders(),
                    ),
                )
            }),
            (l.onheaders = (r) => {
                o(ie('headers', r.status, null, r.getAllResponseHeaders()))
            }),
            (l.ontimeout = Ke(i)),
            (l.onprogress = a),
            (l.onabort = n),
            l
        )
    },
    Ya = (e) => (
        e.indexOf('//') === 0 && (e = location.protocol + e),
        e
            .toLowerCase()
            .replace('blob:', '')
            .replace(/([a-z])?:\/\//, '$1')
            .split('/')[0]
    ),
    Ms = (e) =>
        (e.indexOf(':') > -1 || e.indexOf('//') > -1) &&
        Ya(location.href) !== Ya(e),
    Jt =
        (e) =>
        (...t) =>
            Xe(e) ? e(...t) : e,
    Os = (e) => !Je(e.file),
    Li = (e, t) => {
        clearTimeout(t.listUpdateTimeout),
            (t.listUpdateTimeout = setTimeout(() => {
                e('DID_UPDATE_ITEMS', { items: Oe(t.items) })
            }, 0))
    },
    $a = (e, ...t) =>
        new Promise((i) => {
            if (!e) return i(!0)
            let a = e(...t)
            if (a == null) return i(!0)
            if (typeof a == 'boolean') return i(a)
            typeof a.then == 'function' && a.then(i)
        }),
    Ai = (e, t) => {
        e.items.sort((i, a) => t(he(i), he(a)))
    },
    ye =
        (e, t) =>
        ({
            query: i,
            success: a = () => {},
            failure: n = () => {},
            ...o
        } = {}) => {
            let l = Qe(e.items, i)
            if (!l) {
                n({ error: ie('error', 0, 'Item not found'), file: null })
                return
            }
            t(l, a, n, o || {})
        },
    Ps = (e, t, i) => ({
        ABORT_ALL: () => {
            Oe(i.items).forEach((a) => {
                a.freeze(), a.abortLoad(), a.abortProcessing()
            })
        },
        DID_SET_FILES: ({ value: a = [] }) => {
            let n = a.map((l) => ({
                    source: l.source ? l.source : l,
                    options: l.options,
                })),
                o = Oe(i.items)
            o.forEach((l) => {
                n.find((r) => r.source === l.source || r.source === l.file) ||
                    e('REMOVE_ITEM', { query: l, remove: !1 })
            }),
                (o = Oe(i.items)),
                n.forEach((l, r) => {
                    o.find(
                        (s) => s.source === l.source || s.file === l.source,
                    ) ||
                        e('ADD_ITEM', {
                            ...l,
                            interactionMethod: _e.NONE,
                            index: r,
                        })
                })
        },
        DID_UPDATE_ITEM_METADATA: ({ id: a, action: n, change: o }) => {
            o.silent ||
                (clearTimeout(i.itemUpdateTimeout),
                (i.itemUpdateTimeout = setTimeout(() => {
                    let l = ja(i.items, a)
                    if (!t('IS_ASYNC')) {
                        Me('SHOULD_PREPARE_OUTPUT', !1, {
                            item: l,
                            query: t,
                            action: n,
                            change: o,
                        }).then((c) => {
                            let d = t('GET_BEFORE_PREPARE_FILE')
                            d && (c = d(l, c)),
                                c &&
                                    e(
                                        'REQUEST_PREPARE_OUTPUT',
                                        {
                                            query: a,
                                            item: l,
                                            success: (m) => {
                                                e('DID_PREPARE_OUTPUT', {
                                                    id: a,
                                                    file: m,
                                                })
                                            },
                                        },
                                        !0,
                                    )
                        })
                        return
                    }
                    l.origin === se.LOCAL &&
                        e('DID_LOAD_ITEM', {
                            id: l.id,
                            error: null,
                            serverFileReference: l.source,
                        })
                    let r = () => {
                            setTimeout(() => {
                                e('REQUEST_ITEM_PROCESSING', { query: a })
                            }, 32)
                        },
                        s = (c) => {
                            l.revert(
                                Ot(
                                    i.options.server.url,
                                    i.options.server.revert,
                                ),
                                t('GET_FORCE_REVERT'),
                            )
                                .then(c ? r : () => {})
                                .catch(() => {})
                        },
                        p = (c) => {
                            l.abortProcessing().then(c ? r : () => {})
                        }
                    if (l.status === U.PROCESSING_COMPLETE)
                        return s(i.options.instantUpload)
                    if (l.status === U.PROCESSING)
                        return p(i.options.instantUpload)
                    i.options.instantUpload && r()
                }, 0)))
        },
        MOVE_ITEM: ({ query: a, index: n }) => {
            let o = Qe(i.items, a)
            if (!o) return
            let l = i.items.indexOf(o)
            ;(n = An(n, 0, i.items.length - 1)),
                l !== n && i.items.splice(n, 0, i.items.splice(l, 1)[0])
        },
        SORT: ({ compare: a }) => {
            Ai(i, a), e('DID_SORT_ITEMS', { items: t('GET_ACTIVE_ITEMS') })
        },
        ADD_ITEMS: ({
            items: a,
            index: n,
            interactionMethod: o,
            success: l = () => {},
            failure: r = () => {},
        }) => {
            let s = n
            if (n === -1 || typeof n > 'u') {
                let u = t('GET_ITEM_INSERT_LOCATION'),
                    f = t('GET_TOTAL_ITEMS')
                s = u === 'before' ? 0 : f
            }
            let p = t('GET_IGNORED_FILES'),
                c = (u) => (Je(u) ? !p.includes(u.name.toLowerCase()) : !ke(u)),
                m = a.filter(c).map(
                    (u) =>
                        new Promise((f, g) => {
                            e('ADD_ITEM', {
                                interactionMethod: o,
                                source: u.source || u,
                                success: f,
                                failure: g,
                                index: s++,
                                options: u.options || {},
                            })
                        }),
                )
            Promise.all(m).then(l).catch(r)
        },
        ADD_ITEM: ({
            source: a,
            index: n = -1,
            interactionMethod: o,
            success: l = () => {},
            failure: r = () => {},
            options: s = {},
        }) => {
            if (ke(a)) {
                r({ error: ie('error', 0, 'No source'), file: null })
                return
            }
            if (Je(a) && i.options.ignoredFiles.includes(a.name.toLowerCase()))
                return
            if (!ss(i)) {
                if (
                    i.options.allowMultiple ||
                    (!i.options.allowMultiple && !i.options.allowReplace)
                ) {
                    let E = ie('warning', 0, 'Max files')
                    e('DID_THROW_MAX_FILES', { source: a, error: E }),
                        r({ error: E, file: null })
                    return
                }
                let I = Oe(i.items)[0]
                if (
                    I.status === U.PROCESSING_COMPLETE ||
                    I.status === U.PROCESSING_REVERT_ERROR
                ) {
                    let E = t('GET_FORCE_REVERT')
                    if (
                        (I.revert(
                            Ot(i.options.server.url, i.options.server.revert),
                            E,
                        )
                            .then(() => {
                                E &&
                                    e('ADD_ITEM', {
                                        source: a,
                                        index: n,
                                        interactionMethod: o,
                                        success: l,
                                        failure: r,
                                        options: s,
                                    })
                            })
                            .catch(() => {}),
                        E)
                    )
                        return
                }
                e('REMOVE_ITEM', { query: I.id })
            }
            let p =
                    s.type === 'local'
                        ? se.LOCAL
                        : s.type === 'limbo'
                          ? se.LIMBO
                          : se.INPUT,
                c = Ls(p, p === se.INPUT ? null : a, s.file)
            Object.keys(s.metadata || {}).forEach((I) => {
                c.setMetadata(I, s.metadata[I])
            }),
                tt('DID_CREATE_ITEM', c, { query: t, dispatch: e })
            let d = t('GET_ITEM_INSERT_LOCATION')
            i.options.itemInsertLocationFreedom ||
                (n = d === 'before' ? -1 : i.items.length),
                ds(i.items, c, n),
                Xe(d) && a && Ai(i, d)
            let m = c.id
            c.on('init', () => {
                e('DID_INIT_ITEM', { id: m })
            }),
                c.on('load-init', () => {
                    e('DID_START_ITEM_LOAD', { id: m })
                }),
                c.on('load-meta', () => {
                    e('DID_UPDATE_ITEM_META', { id: m })
                }),
                c.on('load-progress', (I) => {
                    e('DID_UPDATE_ITEM_LOAD_PROGRESS', { id: m, progress: I })
                }),
                c.on('load-request-error', (I) => {
                    let E = Jt(i.options.labelFileLoadError)(I)
                    if (I.code >= 400 && I.code < 500) {
                        e('DID_THROW_ITEM_INVALID', {
                            id: m,
                            error: I,
                            status: { main: E, sub: `${I.code} (${I.body})` },
                        }),
                            r({ error: I, file: he(c) })
                        return
                    }
                    e('DID_THROW_ITEM_LOAD_ERROR', {
                        id: m,
                        error: I,
                        status: { main: E, sub: i.options.labelTapToRetry },
                    })
                }),
                c.on('load-file-error', (I) => {
                    e('DID_THROW_ITEM_INVALID', {
                        id: m,
                        error: I.status,
                        status: I.status,
                    }),
                        r({ error: I.status, file: he(c) })
                }),
                c.on('load-abort', () => {
                    e('REMOVE_ITEM', { query: m })
                }),
                c.on('load-skip', () => {
                    c.on('metadata-update', (I) => {
                        Je(c.file) &&
                            e('DID_UPDATE_ITEM_METADATA', { id: m, change: I })
                    }),
                        e('COMPLETE_LOAD_ITEM', {
                            query: m,
                            item: c,
                            data: { source: a, success: l },
                        })
                }),
                c.on('load', () => {
                    let I = (E) => {
                        if (!E) {
                            e('REMOVE_ITEM', { query: m })
                            return
                        }
                        c.on('metadata-update', (T) => {
                            e('DID_UPDATE_ITEM_METADATA', { id: m, change: T })
                        }),
                            Me('SHOULD_PREPARE_OUTPUT', !1, {
                                item: c,
                                query: t,
                            }).then((T) => {
                                let v = t('GET_BEFORE_PREPARE_FILE')
                                v && (T = v(c, T))
                                let y = () => {
                                    e('COMPLETE_LOAD_ITEM', {
                                        query: m,
                                        item: c,
                                        data: { source: a, success: l },
                                    }),
                                        Li(e, i)
                                }
                                if (T) {
                                    e(
                                        'REQUEST_PREPARE_OUTPUT',
                                        {
                                            query: m,
                                            item: c,
                                            success: (b) => {
                                                e('DID_PREPARE_OUTPUT', {
                                                    id: m,
                                                    file: b,
                                                }),
                                                    y()
                                            },
                                        },
                                        !0,
                                    )
                                    return
                                }
                                y()
                            })
                    }
                    Me('DID_LOAD_ITEM', c, { query: t, dispatch: e })
                        .then(() => {
                            $a(t('GET_BEFORE_ADD_FILE'), he(c)).then(I)
                        })
                        .catch((E) => {
                            if (!E || !E.error || !E.status) return I(!1)
                            e('DID_THROW_ITEM_INVALID', {
                                id: m,
                                error: E.error,
                                status: E.status,
                            })
                        })
                }),
                c.on('process-start', () => {
                    e('DID_START_ITEM_PROCESSING', { id: m })
                }),
                c.on('process-progress', (I) => {
                    e('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
                        id: m,
                        progress: I,
                    })
                }),
                c.on('process-error', (I) => {
                    e('DID_THROW_ITEM_PROCESSING_ERROR', {
                        id: m,
                        error: I,
                        status: {
                            main: Jt(i.options.labelFileProcessingError)(I),
                            sub: i.options.labelTapToRetry,
                        },
                    })
                }),
                c.on('process-revert-error', (I) => {
                    e('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
                        id: m,
                        error: I,
                        status: {
                            main: Jt(i.options.labelFileProcessingRevertError)(
                                I,
                            ),
                            sub: i.options.labelTapToRetry,
                        },
                    })
                }),
                c.on('process-complete', (I) => {
                    e('DID_COMPLETE_ITEM_PROCESSING', {
                        id: m,
                        error: null,
                        serverFileReference: I,
                    }),
                        e('DID_DEFINE_VALUE', { id: m, value: I })
                }),
                c.on('process-abort', () => {
                    e('DID_ABORT_ITEM_PROCESSING', { id: m })
                }),
                c.on('process-revert', () => {
                    e('DID_REVERT_ITEM_PROCESSING', { id: m }),
                        e('DID_DEFINE_VALUE', { id: m, value: null })
                }),
                e('DID_ADD_ITEM', { id: m, index: n, interactionMethod: o }),
                Li(e, i)
            let {
                url: u,
                load: f,
                restore: g,
                fetch: h,
            } = i.options.server || {}
            c.load(
                a,
                vs(
                    p === se.INPUT
                        ? fe(a) && Ms(a) && h
                            ? Si(u, h)
                            : qa
                        : p === se.LIMBO
                          ? Si(u, g)
                          : Si(u, f),
                ),
                (I, E, T) => {
                    Me('LOAD_FILE', I, { query: t }).then(E).catch(T)
                },
            )
        },
        REQUEST_PREPARE_OUTPUT: ({
            item: a,
            success: n,
            failure: o = () => {},
        }) => {
            let l = { error: ie('error', 0, 'Item not found'), file: null }
            if (a.archived) return o(l)
            Me('PREPARE_OUTPUT', a.file, { query: t, item: a }).then((r) => {
                Me('COMPLETE_PREPARE_OUTPUT', r, { query: t, item: a }).then(
                    (s) => {
                        if (a.archived) return o(l)
                        n(s)
                    },
                )
            })
        },
        COMPLETE_LOAD_ITEM: ({ item: a, data: n }) => {
            let { success: o, source: l } = n,
                r = t('GET_ITEM_INSERT_LOCATION')
            if (
                (Xe(r) && l && Ai(i, r),
                e('DID_LOAD_ITEM', {
                    id: a.id,
                    error: null,
                    serverFileReference: a.origin === se.INPUT ? null : l,
                }),
                o(he(a)),
                a.origin === se.LOCAL)
            ) {
                e('DID_LOAD_LOCAL_ITEM', { id: a.id })
                return
            }
            if (a.origin === se.LIMBO) {
                e('DID_COMPLETE_ITEM_PROCESSING', {
                    id: a.id,
                    error: null,
                    serverFileReference: l,
                }),
                    e('DID_DEFINE_VALUE', { id: a.id, value: a.serverId || l })
                return
            }
            t('IS_ASYNC') &&
                i.options.instantUpload &&
                e('REQUEST_ITEM_PROCESSING', { query: a.id })
        },
        RETRY_ITEM_LOAD: ye(i, (a) => {
            a.retryLoad()
        }),
        REQUEST_ITEM_PREPARE: ye(i, (a, n, o) => {
            e(
                'REQUEST_PREPARE_OUTPUT',
                {
                    query: a.id,
                    item: a,
                    success: (l) => {
                        e('DID_PREPARE_OUTPUT', { id: a.id, file: l }),
                            n({ file: a, output: l })
                    },
                    failure: o,
                },
                !0,
            )
        }),
        REQUEST_ITEM_PROCESSING: ye(i, (a, n, o) => {
            if (!(a.status === U.IDLE || a.status === U.PROCESSING_ERROR)) {
                let r = () =>
                        e('REQUEST_ITEM_PROCESSING', {
                            query: a,
                            success: n,
                            failure: o,
                        }),
                    s = () => (document.hidden ? r() : setTimeout(r, 32))
                a.status === U.PROCESSING_COMPLETE ||
                a.status === U.PROCESSING_REVERT_ERROR
                    ? a
                          .revert(
                              Ot(i.options.server.url, i.options.server.revert),
                              t('GET_FORCE_REVERT'),
                          )
                          .then(s)
                          .catch(() => {})
                    : a.status === U.PROCESSING && a.abortProcessing().then(s)
                return
            }
            a.status !== U.PROCESSING_QUEUED &&
                (a.requestProcessing(),
                e('DID_REQUEST_ITEM_PROCESSING', { id: a.id }),
                e('PROCESS_ITEM', { query: a, success: n, failure: o }, !0))
        }),
        PROCESS_ITEM: ye(i, (a, n, o) => {
            let l = t('GET_MAX_PARALLEL_UPLOADS')
            if (t('GET_ITEMS_BY_STATUS', U.PROCESSING).length === l) {
                i.processingQueue.push({ id: a.id, success: n, failure: o })
                return
            }
            if (a.status === U.PROCESSING) return
            let s = () => {
                let c = i.processingQueue.shift()
                if (!c) return
                let { id: d, success: m, failure: u } = c,
                    f = Qe(i.items, d)
                if (!f || f.archived) {
                    s()
                    return
                }
                e('PROCESS_ITEM', { query: d, success: m, failure: u }, !0)
            }
            a.onOnce('process-complete', () => {
                n(he(a)), s()
                let c = i.options.server
                if (
                    i.options.instantUpload &&
                    a.origin === se.LOCAL &&
                    Xe(c.remove)
                ) {
                    let u = () => {}
                    ;(a.origin = se.LIMBO),
                        i.options.server.remove(a.source, u, u)
                }
                t('GET_ITEMS_BY_STATUS', U.PROCESSING_COMPLETE).length ===
                    i.items.length && e('DID_COMPLETE_ITEM_PROCESSING_ALL')
            }),
                a.onOnce('process-error', (c) => {
                    o({ error: c, file: he(a) }), s()
                })
            let p = i.options
            a.process(
                ws(
                    _s(p.server.url, p.server.process, p.name, {
                        chunkTransferId: a.transferId,
                        chunkServer: p.server.patch,
                        chunkUploads: p.chunkUploads,
                        chunkForce: p.chunkForce,
                        chunkSize: p.chunkSize,
                        chunkRetryDelays: p.chunkRetryDelays,
                    }),
                    {
                        allowMinimumUploadDuration: t(
                            'GET_ALLOW_MINIMUM_UPLOAD_DURATION',
                        ),
                    },
                ),
                (c, d, m) => {
                    Me('PREPARE_OUTPUT', c, { query: t, item: a })
                        .then((u) => {
                            e('DID_PREPARE_OUTPUT', { id: a.id, file: u }), d(u)
                        })
                        .catch(m)
                },
            )
        }),
        RETRY_ITEM_PROCESSING: ye(i, (a) => {
            e('REQUEST_ITEM_PROCESSING', { query: a })
        }),
        REQUEST_REMOVE_ITEM: ye(i, (a) => {
            $a(t('GET_BEFORE_REMOVE_FILE'), he(a)).then((n) => {
                n && e('REMOVE_ITEM', { query: a })
            })
        }),
        RELEASE_ITEM: ye(i, (a) => {
            a.release()
        }),
        REMOVE_ITEM: ye(i, (a, n, o, l) => {
            let r = () => {
                    let p = a.id
                    ja(i.items, p).archive(),
                        e('DID_REMOVE_ITEM', { error: null, id: p, item: a }),
                        Li(e, i),
                        n(he(a))
                },
                s = i.options.server
            a.origin === se.LOCAL && s && Xe(s.remove) && l.remove !== !1
                ? (e('DID_START_ITEM_REMOVE', { id: a.id }),
                  s.remove(
                      a.source,
                      () => r(),
                      (p) => {
                          e('DID_THROW_ITEM_REMOVE_ERROR', {
                              id: a.id,
                              error: ie('error', 0, p, null),
                              status: {
                                  main: Jt(i.options.labelFileRemoveError)(p),
                                  sub: i.options.labelTapToRetry,
                              },
                          })
                      },
                  ))
                : (((l.revert &&
                      a.origin !== se.LOCAL &&
                      a.serverId !== null) ||
                      (i.options.chunkUploads &&
                          a.file.size > i.options.chunkSize) ||
                      (i.options.chunkUploads && i.options.chunkForce)) &&
                      a.revert(
                          Ot(i.options.server.url, i.options.server.revert),
                          t('GET_FORCE_REVERT'),
                      ),
                  r())
        }),
        ABORT_ITEM_LOAD: ye(i, (a) => {
            a.abortLoad()
        }),
        ABORT_ITEM_PROCESSING: ye(i, (a) => {
            if (a.serverId) {
                e('REVERT_ITEM_PROCESSING', { id: a.id })
                return
            }
            a.abortProcessing().then(() => {
                i.options.instantUpload && e('REMOVE_ITEM', { query: a.id })
            })
        }),
        REQUEST_REVERT_ITEM_PROCESSING: ye(i, (a) => {
            if (!i.options.instantUpload) {
                e('REVERT_ITEM_PROCESSING', { query: a })
                return
            }
            let n = (r) => {
                    r && e('REVERT_ITEM_PROCESSING', { query: a })
                },
                o = t('GET_BEFORE_REMOVE_FILE')
            if (!o) return n(!0)
            let l = o(he(a))
            if (l == null) return n(!0)
            if (typeof l == 'boolean') return n(l)
            typeof l.then == 'function' && l.then(n)
        }),
        REVERT_ITEM_PROCESSING: ye(i, (a) => {
            a.revert(
                Ot(i.options.server.url, i.options.server.revert),
                t('GET_FORCE_REVERT'),
            )
                .then(() => {
                    ;(i.options.instantUpload || Os(a)) &&
                        e('REMOVE_ITEM', { query: a.id })
                })
                .catch(() => {})
        }),
        SET_OPTIONS: ({ options: a }) => {
            let n = Object.keys(a),
                o = Ds.filter((r) => n.includes(r))
            ;[...o, ...Object.keys(a).filter((r) => !o.includes(r))].forEach(
                (r) => {
                    e(`SET_${pi(r, '_').toUpperCase()}`, { value: a[r] })
                },
            )
        },
    }),
    Ds = ['server'],
    Zi = (e) => e,
    Ve = (e) => document.createElement(e),
    ae = (e, t) => {
        let i = e.childNodes[0]
        i
            ? t !== i.nodeValue && (i.nodeValue = t)
            : ((i = document.createTextNode(t)), e.appendChild(i))
    },
    Xa = (e, t, i, a) => {
        let n = (((a % 360) - 90) * Math.PI) / 180
        return { x: e + i * Math.cos(n), y: t + i * Math.sin(n) }
    },
    Fs = (e, t, i, a, n, o) => {
        let l = Xa(e, t, i, n),
            r = Xa(e, t, i, a)
        return ['M', l.x, l.y, 'A', i, i, 0, o, 0, r.x, r.y].join(' ')
    },
    zs = (e, t, i, a, n) => {
        let o = 1
        return (
            n > a && n - a <= 0.5 && (o = 0),
            a > n && a - n >= 0.5 && (o = 0),
            Fs(e, t, i, Math.min(0.9999, a) * 360, Math.min(0.9999, n) * 360, o)
        )
    },
    Cs = ({ root: e, props: t }) => {
        ;(t.spin = !1), (t.progress = 0), (t.opacity = 0)
        let i = oi('svg')
        ;(e.ref.path = oi('path', {
            'stroke-width': 2,
            'stroke-linecap': 'round',
        })),
            i.appendChild(e.ref.path),
            (e.ref.svg = i),
            e.appendChild(i)
    },
    Ns = ({ root: e, props: t }) => {
        if (t.opacity === 0) return
        t.align && (e.element.dataset.align = t.align)
        let i = parseInt(ce(e.ref.path, 'stroke-width'), 10),
            a = e.rect.element.width * 0.5,
            n = 0,
            o = 0
        t.spin ? ((n = 0), (o = 0.5)) : ((n = 0), (o = t.progress))
        let l = zs(a, a, a - i, n, o)
        ce(e.ref.path, 'd', l),
            ce(e.ref.path, 'stroke-opacity', t.spin || t.progress > 0 ? 1 : 0)
    },
    Qa = ne({
        tag: 'div',
        name: 'progress-indicator',
        ignoreRectUpdate: !0,
        ignoreRect: !0,
        create: Cs,
        write: Ns,
        mixins: {
            apis: ['progress', 'spin', 'align'],
            styles: ['opacity'],
            animations: {
                opacity: { type: 'tween', duration: 500 },
                progress: {
                    type: 'spring',
                    stiffness: 0.95,
                    damping: 0.65,
                    mass: 10,
                },
            },
        },
    }),
    Bs = ({ root: e, props: t }) => {
        ;(e.element.innerHTML = (t.icon || '') + `<span>${t.label}</span>`),
            (t.isDisabled = !1)
    },
    ks = ({ root: e, props: t }) => {
        let { isDisabled: i } = t,
            a = e.query('GET_DISABLED') || t.opacity === 0
        a && !i
            ? ((t.isDisabled = !0), ce(e.element, 'disabled', 'disabled'))
            : !a &&
              i &&
              ((t.isDisabled = !1), e.element.removeAttribute('disabled'))
    },
    Cn = ne({
        tag: 'button',
        attributes: { type: 'button' },
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        name: 'file-action-button',
        mixins: {
            apis: ['label'],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
            listeners: !0,
        },
        create: Bs,
        write: ks,
    }),
    Nn = (e, t = '.', i = 1e3, a = {}) => {
        let {
            labelBytes: n = 'bytes',
            labelKilobytes: o = 'KB',
            labelMegabytes: l = 'MB',
            labelGigabytes: r = 'GB',
        } = a
        e = Math.round(Math.abs(e))
        let s = i,
            p = i * i,
            c = i * i * i
        return e < s
            ? `${e} ${n}`
            : e < p
              ? `${Math.floor(e / s)} ${o}`
              : e < c
                ? `${Za(e / p, 1, t)} ${l}`
                : `${Za(e / c, 2, t)} ${r}`
    },
    Za = (e, t, i) =>
        e
            .toFixed(t)
            .split('.')
            .filter((a) => a !== '0')
            .join(i),
    Vs = ({ root: e, props: t }) => {
        let i = Ve('span')
        ;(i.className = 'filepond--file-info-main'),
            ce(i, 'aria-hidden', 'true'),
            e.appendChild(i),
            (e.ref.fileName = i)
        let a = Ve('span')
        ;(a.className = 'filepond--file-info-sub'),
            e.appendChild(a),
            (e.ref.fileSize = a),
            ae(a, e.query('GET_LABEL_FILE_WAITING_FOR_SIZE')),
            ae(i, Zi(e.query('GET_ITEM_NAME', t.id)))
    },
    zi = ({ root: e, props: t }) => {
        ae(
            e.ref.fileSize,
            Nn(
                e.query('GET_ITEM_SIZE', t.id),
                '.',
                e.query('GET_FILE_SIZE_BASE'),
                e.query('GET_FILE_SIZE_LABELS', e.query),
            ),
        ),
            ae(e.ref.fileName, Zi(e.query('GET_ITEM_NAME', t.id)))
    },
    Ka = ({ root: e, props: t }) => {
        if (Et(e.query('GET_ITEM_SIZE', t.id))) {
            zi({ root: e, props: t })
            return
        }
        ae(e.ref.fileSize, e.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'))
    },
    Gs = ne({
        name: 'file-info',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: ge({
            DID_LOAD_ITEM: zi,
            DID_UPDATE_ITEM_META: zi,
            DID_THROW_ITEM_LOAD_ERROR: Ka,
            DID_THROW_ITEM_INVALID: Ka,
        }),
        didCreateView: (e) => {
            tt('CREATE_VIEW', { ...e, view: e })
        },
        create: Vs,
        mixins: {
            styles: ['translateX', 'translateY'],
            animations: { translateX: 'spring', translateY: 'spring' },
        },
    }),
    Bn = (e) => Math.round(e * 100),
    Us = ({ root: e }) => {
        let t = Ve('span')
        ;(t.className = 'filepond--file-status-main'),
            e.appendChild(t),
            (e.ref.main = t)
        let i = Ve('span')
        ;(i.className = 'filepond--file-status-sub'),
            e.appendChild(i),
            (e.ref.sub = i),
            kn({ root: e, action: { progress: null } })
    },
    kn = ({ root: e, action: t }) => {
        let i =
            t.progress === null
                ? e.query('GET_LABEL_FILE_LOADING')
                : `${e.query('GET_LABEL_FILE_LOADING')} ${Bn(t.progress)}%`
        ae(e.ref.main, i), ae(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'))
    },
    Ws = ({ root: e, action: t }) => {
        let i =
            t.progress === null
                ? e.query('GET_LABEL_FILE_PROCESSING')
                : `${e.query('GET_LABEL_FILE_PROCESSING')} ${Bn(t.progress)}%`
        ae(e.ref.main, i), ae(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'))
    },
    Hs = ({ root: e }) => {
        ae(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING')),
            ae(e.ref.sub, e.query('GET_LABEL_TAP_TO_CANCEL'))
    },
    js = ({ root: e }) => {
        ae(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING_ABORTED')),
            ae(e.ref.sub, e.query('GET_LABEL_TAP_TO_RETRY'))
    },
    qs = ({ root: e }) => {
        ae(e.ref.main, e.query('GET_LABEL_FILE_PROCESSING_COMPLETE')),
            ae(e.ref.sub, e.query('GET_LABEL_TAP_TO_UNDO'))
    },
    Ja = ({ root: e }) => {
        ae(e.ref.main, ''), ae(e.ref.sub, '')
    },
    Pt = ({ root: e, action: t }) => {
        ae(e.ref.main, t.status.main), ae(e.ref.sub, t.status.sub)
    },
    Ys = ne({
        name: 'file-status',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: ge({
            DID_LOAD_ITEM: Ja,
            DID_REVERT_ITEM_PROCESSING: Ja,
            DID_REQUEST_ITEM_PROCESSING: Hs,
            DID_ABORT_ITEM_PROCESSING: js,
            DID_COMPLETE_ITEM_PROCESSING: qs,
            DID_UPDATE_ITEM_PROCESS_PROGRESS: Ws,
            DID_UPDATE_ITEM_LOAD_PROGRESS: kn,
            DID_THROW_ITEM_LOAD_ERROR: Pt,
            DID_THROW_ITEM_INVALID: Pt,
            DID_THROW_ITEM_PROCESSING_ERROR: Pt,
            DID_THROW_ITEM_PROCESSING_REVERT_ERROR: Pt,
            DID_THROW_ITEM_REMOVE_ERROR: Pt,
        }),
        didCreateView: (e) => {
            tt('CREATE_VIEW', { ...e, view: e })
        },
        create: Us,
        mixins: {
            styles: ['translateX', 'translateY', 'opacity'],
            animations: {
                opacity: { type: 'tween', duration: 250 },
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    }),
    Ci = {
        AbortItemLoad: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
            action: 'ABORT_ITEM_LOAD',
            className: 'filepond--action-abort-item-load',
            align: 'LOAD_INDICATOR_POSITION',
        },
        RetryItemLoad: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
            action: 'RETRY_ITEM_LOAD',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-load',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RemoveItem: {
            label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
            action: 'REQUEST_REMOVE_ITEM',
            icon: 'GET_ICON_REMOVE',
            className: 'filepond--action-remove-item',
            align: 'BUTTON_REMOVE_ITEM_POSITION',
        },
        ProcessItem: {
            label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
            action: 'REQUEST_ITEM_PROCESSING',
            icon: 'GET_ICON_PROCESS',
            className: 'filepond--action-process-item',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        AbortItemProcessing: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
            action: 'ABORT_ITEM_PROCESSING',
            className: 'filepond--action-abort-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RetryItemProcessing: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
            action: 'RETRY_ITEM_PROCESSING',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
        RevertItemProcessing: {
            label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
            action: 'REQUEST_REVERT_ITEM_PROCESSING',
            icon: 'GET_ICON_UNDO',
            className: 'filepond--action-revert-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION',
        },
    },
    Ni = []
te(Ci, (e) => {
    Ni.push(e)
})
var Ie = (e) => {
        if (Bi(e) === 'right') return 0
        let t = e.ref.buttonRemoveItem.rect.element
        return t.hidden ? null : t.width + t.left
    },
    $s = (e) => e.ref.buttonAbortItemLoad.rect.element.width,
    ei = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4),
    Xs = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2),
    Qs = (e) => e.query('GET_STYLE_LOAD_INDICATOR_POSITION'),
    Zs = (e) => e.query('GET_STYLE_PROGRESS_INDICATOR_POSITION'),
    Bi = (e) => e.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION'),
    Ks = {
        buttonAbortItemLoad: { opacity: 0 },
        buttonRetryItemLoad: { opacity: 0 },
        buttonRemoveItem: { opacity: 0 },
        buttonProcessItem: { opacity: 0 },
        buttonAbortItemProcessing: { opacity: 0 },
        buttonRetryItemProcessing: { opacity: 0 },
        buttonRevertItemProcessing: { opacity: 0 },
        loadProgressIndicator: { opacity: 0, align: Qs },
        processProgressIndicator: { opacity: 0, align: Zs },
        processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
        info: { translateX: 0, translateY: 0, opacity: 0 },
        status: { translateX: 0, translateY: 0, opacity: 0 },
    },
    en = {
        buttonRemoveItem: { opacity: 1 },
        buttonProcessItem: { opacity: 1 },
        info: { translateX: Ie },
        status: { translateX: Ie },
    },
    Mi = {
        buttonAbortItemProcessing: { opacity: 1 },
        processProgressIndicator: { opacity: 1 },
        status: { opacity: 1 },
    },
    mt = {
        DID_THROW_ITEM_INVALID: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: Ie },
            status: { translateX: Ie, opacity: 1 },
        },
        DID_START_ITEM_LOAD: {
            buttonAbortItemLoad: { opacity: 1 },
            loadProgressIndicator: { opacity: 1 },
            status: { opacity: 1 },
        },
        DID_THROW_ITEM_LOAD_ERROR: {
            buttonRetryItemLoad: { opacity: 1 },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: Ie },
            status: { opacity: 1 },
        },
        DID_START_ITEM_REMOVE: {
            processProgressIndicator: { opacity: 1, align: Bi },
            info: { translateX: Ie },
            status: { opacity: 0 },
        },
        DID_THROW_ITEM_REMOVE_ERROR: {
            processProgressIndicator: { opacity: 0, align: Bi },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: Ie },
            status: { opacity: 1, translateX: Ie },
        },
        DID_LOAD_ITEM: en,
        DID_LOAD_LOCAL_ITEM: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: Ie },
            status: { translateX: Ie },
        },
        DID_START_ITEM_PROCESSING: Mi,
        DID_REQUEST_ITEM_PROCESSING: Mi,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: Mi,
        DID_COMPLETE_ITEM_PROCESSING: {
            buttonRevertItemProcessing: { opacity: 1 },
            info: { opacity: 1 },
            status: { opacity: 1 },
        },
        DID_THROW_ITEM_PROCESSING_ERROR: {
            buttonRemoveItem: { opacity: 1 },
            buttonRetryItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { translateX: Ie },
        },
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
            buttonRevertItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { opacity: 1 },
        },
        DID_ABORT_ITEM_PROCESSING: {
            buttonRemoveItem: { opacity: 1 },
            buttonProcessItem: { opacity: 1 },
            info: { translateX: Ie },
            status: { opacity: 1 },
        },
        DID_REVERT_ITEM_PROCESSING: en,
    },
    Js = ne({
        create: ({ root: e }) => {
            e.element.innerHTML = e.query('GET_ICON_DONE')
        },
        name: 'processing-complete-indicator',
        ignoreRect: !0,
        mixins: {
            styles: ['scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    }),
    ec = ({ root: e, props: t }) => {
        let i = Object.keys(Ci).reduce(
                (f, g) => ((f[g] = { ...Ci[g] }), f),
                {},
            ),
            { id: a } = t,
            n = e.query('GET_ALLOW_REVERT'),
            o = e.query('GET_ALLOW_REMOVE'),
            l = e.query('GET_ALLOW_PROCESS'),
            r = e.query('GET_INSTANT_UPLOAD'),
            s = e.query('IS_ASYNC'),
            p = e.query('GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN'),
            c
        s
            ? l && !n
                ? (c = (f) => !/RevertItemProcessing/.test(f))
                : !l && n
                  ? (c = (f) =>
                        !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(
                            f,
                        ))
                  : !l && !n && (c = (f) => !/Process/.test(f))
            : (c = (f) => !/Process/.test(f))
        let d = c ? Ni.filter(c) : Ni.concat()
        if (
            (r &&
                n &&
                ((i.RevertItemProcessing.label =
                    'GET_LABEL_BUTTON_REMOVE_ITEM'),
                (i.RevertItemProcessing.icon = 'GET_ICON_REMOVE')),
            s && !n)
        ) {
            let f = mt.DID_COMPLETE_ITEM_PROCESSING
            ;(f.info.translateX = Xs),
                (f.info.translateY = ei),
                (f.status.translateY = ei),
                (f.processingCompleteIndicator = {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                })
        }
        if (
            (s &&
                !l &&
                ([
                    'DID_START_ITEM_PROCESSING',
                    'DID_REQUEST_ITEM_PROCESSING',
                    'DID_UPDATE_ITEM_PROCESS_PROGRESS',
                    'DID_THROW_ITEM_PROCESSING_ERROR',
                ].forEach((f) => {
                    mt[f].status.translateY = ei
                }),
                (mt.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = $s)),
            p && n)
        ) {
            i.RevertItemProcessing.align = 'BUTTON_REMOVE_ITEM_POSITION'
            let f = mt.DID_COMPLETE_ITEM_PROCESSING
            ;(f.info.translateX = Ie),
                (f.status.translateY = ei),
                (f.processingCompleteIndicator = {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                })
        }
        o || (i.RemoveItem.disabled = !0),
            te(i, (f, g) => {
                let h = e.createChildView(Cn, {
                    label: e.query(g.label),
                    icon: e.query(g.icon),
                    opacity: 0,
                })
                d.includes(f) && e.appendChildView(h),
                    g.disabled &&
                        (h.element.setAttribute('disabled', 'disabled'),
                        h.element.setAttribute('hidden', 'hidden')),
                    (h.element.dataset.align = e.query(`GET_STYLE_${g.align}`)),
                    h.element.classList.add(g.className),
                    h.on('click', (I) => {
                        I.stopPropagation(),
                            !g.disabled && e.dispatch(g.action, { query: a })
                    }),
                    (e.ref[`button${f}`] = h)
            }),
            (e.ref.processingCompleteIndicator = e.appendChildView(
                e.createChildView(Js),
            )),
            (e.ref.processingCompleteIndicator.element.dataset.align = e.query(
                'GET_STYLE_BUTTON_PROCESS_ITEM_POSITION',
            )),
            (e.ref.info = e.appendChildView(e.createChildView(Gs, { id: a }))),
            (e.ref.status = e.appendChildView(e.createChildView(Ys, { id: a })))
        let m = e.appendChildView(
            e.createChildView(Qa, {
                opacity: 0,
                align: e.query('GET_STYLE_LOAD_INDICATOR_POSITION'),
            }),
        )
        m.element.classList.add('filepond--load-indicator'),
            (e.ref.loadProgressIndicator = m)
        let u = e.appendChildView(
            e.createChildView(Qa, {
                opacity: 0,
                align: e.query('GET_STYLE_PROGRESS_INDICATOR_POSITION'),
            }),
        )
        u.element.classList.add('filepond--process-indicator'),
            (e.ref.processProgressIndicator = u),
            (e.ref.activeStyles = [])
    },
    tc = ({ root: e, actions: t, props: i }) => {
        ic({ root: e, actions: t, props: i })
        let a = t
            .concat()
            .filter((n) => /^DID_/.test(n.type))
            .reverse()
            .find((n) => mt[n.type])
        if (a) {
            e.ref.activeStyles = []
            let n = mt[a.type]
            te(Ks, (o, l) => {
                let r = e.ref[o]
                te(l, (s, p) => {
                    let c = n[o] && typeof n[o][s] < 'u' ? n[o][s] : p
                    e.ref.activeStyles.push({ control: r, key: s, value: c })
                })
            })
        }
        e.ref.activeStyles.forEach(({ control: n, key: o, value: l }) => {
            n[o] = typeof l == 'function' ? l(e) : l
        })
    },
    ic = ge({
        DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({
            root: e,
            action: t,
        }) => {
            e.ref.buttonAbortItemProcessing.label = t.value
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemLoad.label = t.value
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: t }) => {
            e.ref.buttonAbortItemRemoval.label = t.value
        },
        DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
            ;(e.ref.processProgressIndicator.spin = !0),
                (e.ref.processProgressIndicator.progress = 0)
        },
        DID_START_ITEM_LOAD: ({ root: e }) => {
            ;(e.ref.loadProgressIndicator.spin = !0),
                (e.ref.loadProgressIndicator.progress = 0)
        },
        DID_START_ITEM_REMOVE: ({ root: e }) => {
            ;(e.ref.processProgressIndicator.spin = !0),
                (e.ref.processProgressIndicator.progress = 0)
        },
        DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: t }) => {
            ;(e.ref.loadProgressIndicator.spin = !1),
                (e.ref.loadProgressIndicator.progress = t.progress)
        },
        DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: t }) => {
            ;(e.ref.processProgressIndicator.spin = !1),
                (e.ref.processProgressIndicator.progress = t.progress)
        },
    }),
    ac = ne({
        create: ec,
        write: tc,
        didCreateView: (e) => {
            tt('CREATE_VIEW', { ...e, view: e })
        },
        name: 'file',
    }),
    nc = ({ root: e, props: t }) => {
        ;(e.ref.fileName = Ve('legend')),
            e.appendChild(e.ref.fileName),
            (e.ref.file = e.appendChildView(
                e.createChildView(ac, { id: t.id }),
            )),
            (e.ref.data = !1)
    },
    oc = ({ root: e, props: t }) => {
        ae(e.ref.fileName, Zi(e.query('GET_ITEM_NAME', t.id)))
    },
    lc = ne({
        create: nc,
        ignoreRect: !0,
        write: ge({ DID_LOAD_ITEM: oc }),
        didCreateView: (e) => {
            tt('CREATE_VIEW', { ...e, view: e })
        },
        tag: 'fieldset',
        name: 'file-wrapper',
    }),
    tn = { type: 'spring', damping: 0.6, mass: 7 },
    rc = ({ root: e, props: t }) => {
        ;[
            { name: 'top' },
            {
                name: 'center',
                props: { translateY: null, scaleY: null },
                mixins: {
                    animations: { scaleY: tn },
                    styles: ['translateY', 'scaleY'],
                },
            },
            {
                name: 'bottom',
                props: { translateY: null },
                mixins: {
                    animations: { translateY: tn },
                    styles: ['translateY'],
                },
            },
        ].forEach((i) => {
            sc(e, i, t.name)
        }),
            e.element.classList.add(`filepond--${t.name}`),
            (e.ref.scalable = null)
    },
    sc = (e, t, i) => {
        let a = ne({
                name: `panel-${t.name} filepond--${i}`,
                mixins: t.mixins,
                ignoreRectUpdate: !0,
            }),
            n = e.createChildView(a, t.props)
        e.ref[t.name] = e.appendChildView(n)
    },
    cc = ({ root: e, props: t }) => {
        if (
            ((e.ref.scalable === null || t.scalable !== e.ref.scalable) &&
                ((e.ref.scalable = In(t.scalable) ? t.scalable : !0),
                (e.element.dataset.scalable = e.ref.scalable)),
            !t.height)
        )
            return
        let i = e.ref.top.rect.element,
            a = e.ref.bottom.rect.element,
            n = Math.max(i.height + a.height, t.height)
        ;(e.ref.center.translateY = i.height),
            (e.ref.center.scaleY = (n - i.height - a.height) / 100),
            (e.ref.bottom.translateY = n - a.height)
    },
    Vn = ne({
        name: 'panel',
        read: ({ root: e, props: t }) =>
            (t.heightCurrent = e.ref.bottom.translateY),
        write: cc,
        create: rc,
        ignoreRect: !0,
        mixins: { apis: ['height', 'heightCurrent', 'scalable'] },
    }),
    dc = (e) => {
        let t = e.map((a) => a.id),
            i
        return {
            setIndex: (a) => {
                i = a
            },
            getIndex: () => i,
            getItemIndex: (a) => t.indexOf(a.id),
        }
    },
    an = { type: 'spring', stiffness: 0.75, damping: 0.45, mass: 10 },
    nn = 'spring',
    on = {
        DID_START_ITEM_LOAD: 'busy',
        DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
        DID_THROW_ITEM_INVALID: 'load-invalid',
        DID_THROW_ITEM_LOAD_ERROR: 'load-error',
        DID_LOAD_ITEM: 'idle',
        DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
        DID_START_ITEM_REMOVE: 'busy',
        DID_START_ITEM_PROCESSING: 'busy processing',
        DID_REQUEST_ITEM_PROCESSING: 'busy processing',
        DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
        DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
        DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
        DID_ABORT_ITEM_PROCESSING: 'cancelled',
        DID_REVERT_ITEM_PROCESSING: 'idle',
    },
    pc = ({ root: e, props: t }) => {
        if (
            ((e.ref.handleClick = (a) =>
                e.dispatch('DID_ACTIVATE_ITEM', { id: t.id })),
            (e.element.id = `filepond--item-${t.id}`),
            e.element.addEventListener('click', e.ref.handleClick),
            (e.ref.container = e.appendChildView(
                e.createChildView(lc, { id: t.id }),
            )),
            (e.ref.panel = e.appendChildView(
                e.createChildView(Vn, { name: 'item-panel' }),
            )),
            (e.ref.panel.height = null),
            (t.markedForRemoval = !1),
            !e.query('GET_ALLOW_REORDER'))
        )
            return
        e.element.dataset.dragState = 'idle'
        let i = (a) => {
            if (!a.isPrimary) return
            let n = !1,
                o = { x: a.pageX, y: a.pageY }
            ;(t.dragOrigin = { x: e.translateX, y: e.translateY }),
                (t.dragCenter = { x: a.offsetX, y: a.offsetY })
            let l = dc(e.query('GET_ACTIVE_ITEMS'))
            e.dispatch('DID_GRAB_ITEM', { id: t.id, dragState: l })
            let r = (d) => {
                    if (!d.isPrimary) return
                    d.stopPropagation(),
                        d.preventDefault(),
                        (t.dragOffset = { x: d.pageX - o.x, y: d.pageY - o.y }),
                        t.dragOffset.x * t.dragOffset.x +
                            t.dragOffset.y * t.dragOffset.y >
                            16 &&
                            !n &&
                            ((n = !0),
                            e.element.removeEventListener(
                                'click',
                                e.ref.handleClick,
                            )),
                        e.dispatch('DID_DRAG_ITEM', { id: t.id, dragState: l })
                },
                s = (d) => {
                    d.isPrimary &&
                        ((t.dragOffset = {
                            x: d.pageX - o.x,
                            y: d.pageY - o.y,
                        }),
                        c())
                },
                p = () => {
                    c()
                },
                c = () => {
                    document.removeEventListener('pointercancel', p),
                        document.removeEventListener('pointermove', r),
                        document.removeEventListener('pointerup', s),
                        e.dispatch('DID_DROP_ITEM', { id: t.id, dragState: l }),
                        n &&
                            setTimeout(
                                () =>
                                    e.element.addEventListener(
                                        'click',
                                        e.ref.handleClick,
                                    ),
                                0,
                            )
                }
            document.addEventListener('pointercancel', p),
                document.addEventListener('pointermove', r),
                document.addEventListener('pointerup', s)
        }
        e.element.addEventListener('pointerdown', i)
    },
    mc = ge({
        DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: t }) => {
            e.height = t.height
        },
    }),
    uc = ge(
        {
            DID_GRAB_ITEM: ({ root: e, props: t }) => {
                t.dragOrigin = { x: e.translateX, y: e.translateY }
            },
            DID_DRAG_ITEM: ({ root: e }) => {
                e.element.dataset.dragState = 'drag'
            },
            DID_DROP_ITEM: ({ root: e, props: t }) => {
                ;(t.dragOffset = null),
                    (t.dragOrigin = null),
                    (e.element.dataset.dragState = 'drop')
            },
        },
        ({ root: e, actions: t, props: i, shouldOptimize: a }) => {
            e.element.dataset.dragState === 'drop' &&
                e.scaleX <= 1 &&
                (e.element.dataset.dragState = 'idle')
            let n = t
                .concat()
                .filter((l) => /^DID_/.test(l.type))
                .reverse()
                .find((l) => on[l.type])
            n &&
                n.type !== i.currentState &&
                ((i.currentState = n.type),
                (e.element.dataset.filepondItemState =
                    on[i.currentState] || ''))
            let o =
                e.query('GET_ITEM_PANEL_ASPECT_RATIO') ||
                e.query('GET_PANEL_ASPECT_RATIO')
            o
                ? a || (e.height = e.rect.element.width * o)
                : (mc({ root: e, actions: t, props: i }),
                  !e.height &&
                      e.ref.container.rect.element.height > 0 &&
                      (e.height = e.ref.container.rect.element.height)),
                a && (e.ref.panel.height = null),
                (e.ref.panel.height = e.height)
        },
    ),
    fc = ne({
        create: pc,
        write: uc,
        destroy: ({ root: e, props: t }) => {
            e.element.removeEventListener('click', e.ref.handleClick),
                e.dispatch('RELEASE_ITEM', { query: t.id })
        },
        tag: 'li',
        name: 'item',
        mixins: {
            apis: [
                'id',
                'interactionMethod',
                'markedForRemoval',
                'spawnDate',
                'dragCenter',
                'dragOrigin',
                'dragOffset',
            ],
            styles: [
                'translateX',
                'translateY',
                'scaleX',
                'scaleY',
                'opacity',
                'height',
            ],
            animations: {
                scaleX: nn,
                scaleY: nn,
                translateX: an,
                translateY: an,
                opacity: { type: 'tween', duration: 150 },
            },
        },
    }),
    Ki = (e, t) => Math.max(1, Math.floor((e + 1) / t)),
    Ji = (e, t, i) => {
        if (!i) return
        let a = e.rect.element.width,
            n = t.length,
            o = null
        if (n === 0 || i.top < t[0].rect.element.top) return -1
        let r = t[0].rect.element,
            s = r.marginLeft + r.marginRight,
            p = r.width + s,
            c = Ki(a, p)
        if (c === 1) {
            for (let u = 0; u < n; u++) {
                let f = t[u],
                    g = f.rect.outer.top + f.rect.element.height * 0.5
                if (i.top < g) return u
            }
            return n
        }
        let d = r.marginTop + r.marginBottom,
            m = r.height + d
        for (let u = 0; u < n; u++) {
            let f = u % c,
                g = Math.floor(u / c),
                h = f * p,
                I = g * m,
                E = I - r.marginTop,
                T = h + p,
                v = I + m + r.marginBottom
            if (i.top < v && i.top > E) {
                if (i.left < T) return u
                u !== n - 1 ? (o = u) : (o = null)
            }
        }
        return o !== null ? o : n
    },
    ti = {
        height: 0,
        width: 0,
        get getHeight() {
            return this.height
        },
        set setHeight(e) {
            ;(this.height === 0 || e === 0) && (this.height = e)
        },
        get getWidth() {
            return this.width
        },
        set setWidth(e) {
            ;(this.width === 0 || e === 0) && (this.width = e)
        },
        setDimensions: function (e, t) {
            ;(this.height === 0 || e === 0) && (this.height = e),
                (this.width === 0 || t === 0) && (this.width = t)
        },
    },
    gc = ({ root: e }) => {
        ce(e.element, 'role', 'list'), (e.ref.lastItemSpanwDate = Date.now())
    },
    hc = ({ root: e, action: t }) => {
        let { id: i, index: a, interactionMethod: n } = t
        e.ref.addIndex = a
        let o = Date.now(),
            l = o,
            r = 1
        if (n !== _e.NONE) {
            r = 0
            let s = e.query('GET_ITEM_INSERT_INTERVAL'),
                p = o - e.ref.lastItemSpanwDate
            l = p < s ? o + (s - p) : o
        }
        ;(e.ref.lastItemSpanwDate = l),
            e.appendChildView(
                e.createChildView(fc, {
                    spawnDate: l,
                    id: i,
                    opacity: r,
                    interactionMethod: n,
                }),
                a,
            )
    },
    ln = (e, t, i, a = 0, n = 1) => {
        e.dragOffset
            ? ((e.translateX = null),
              (e.translateY = null),
              (e.translateX = e.dragOrigin.x + e.dragOffset.x),
              (e.translateY = e.dragOrigin.y + e.dragOffset.y),
              (e.scaleX = 1.025),
              (e.scaleY = 1.025))
            : ((e.translateX = t),
              (e.translateY = i),
              Date.now() > e.spawnDate &&
                  (e.opacity === 0 && Ec(e, t, i, a, n),
                  (e.scaleX = 1),
                  (e.scaleY = 1),
                  (e.opacity = 1)))
    },
    Ec = (e, t, i, a, n) => {
        e.interactionMethod === _e.NONE
            ? ((e.translateX = null),
              (e.translateX = t),
              (e.translateY = null),
              (e.translateY = i))
            : e.interactionMethod === _e.DROP
              ? ((e.translateX = null),
                (e.translateX = t - a * 20),
                (e.translateY = null),
                (e.translateY = i - n * 10),
                (e.scaleX = 0.8),
                (e.scaleY = 0.8))
              : e.interactionMethod === _e.BROWSE
                ? ((e.translateY = null), (e.translateY = i - 30))
                : e.interactionMethod === _e.API &&
                  ((e.translateX = null),
                  (e.translateX = t - 30),
                  (e.translateY = null))
    },
    bc = ({ root: e, action: t }) => {
        let { id: i } = t,
            a = e.childViews.find((n) => n.id === i)
        a &&
            ((a.scaleX = 0.9),
            (a.scaleY = 0.9),
            (a.opacity = 0),
            (a.markedForRemoval = !0))
    },
    Oi = (e) =>
        e.rect.element.height +
        e.rect.element.marginBottom * 0.5 +
        e.rect.element.marginTop * 0.5,
    Tc = (e) =>
        e.rect.element.width +
        e.rect.element.marginLeft * 0.5 +
        e.rect.element.marginRight * 0.5,
    Ic = ({ root: e, action: t }) => {
        let { id: i, dragState: a } = t,
            n = e.query('GET_ITEM', { id: i }),
            o = e.childViews.find((h) => h.id === i),
            l = e.childViews.length,
            r = a.getItemIndex(n)
        if (!o) return
        let s = {
                x: o.dragOrigin.x + o.dragOffset.x + o.dragCenter.x,
                y: o.dragOrigin.y + o.dragOffset.y + o.dragCenter.y,
            },
            p = Oi(o),
            c = Tc(o),
            d = Math.floor(e.rect.outer.width / c)
        d > l && (d = l)
        let m = Math.floor(l / d + 1)
        ;(ti.setHeight = p * m), (ti.setWidth = c * d)
        var u = {
            y: Math.floor(s.y / p),
            x: Math.floor(s.x / c),
            getGridIndex: function () {
                return s.y > ti.getHeight ||
                    s.y < 0 ||
                    s.x > ti.getWidth ||
                    s.x < 0
                    ? r
                    : this.y * d + this.x
            },
            getColIndex: function () {
                let I = e.query('GET_ACTIVE_ITEMS'),
                    E = e.childViews.filter((O) => O.rect.element.height),
                    T = I.map((O) => E.find((M) => M.id === O.id)),
                    v = T.findIndex((O) => O === o),
                    y = Oi(o),
                    b = T.length,
                    w = b,
                    x = 0,
                    _ = 0,
                    P = 0
                for (let O = 0; O < b; O++)
                    if (((x = Oi(T[O])), (P = _), (_ = P + x), s.y < _)) {
                        if (v > O) {
                            if (s.y < P + y) {
                                w = O
                                break
                            }
                            continue
                        }
                        w = O
                        break
                    }
                return w
            },
        }
        let f = d > 1 ? u.getGridIndex() : u.getColIndex()
        e.dispatch('MOVE_ITEM', { query: o, index: f })
        let g = a.getIndex()
        if (g === void 0 || g !== f) {
            if ((a.setIndex(f), g === void 0)) return
            e.dispatch('DID_REORDER_ITEMS', {
                items: e.query('GET_ACTIVE_ITEMS'),
                origin: r,
                target: f,
            })
        }
    },
    vc = ge({ DID_ADD_ITEM: hc, DID_REMOVE_ITEM: bc, DID_DRAG_ITEM: Ic }),
    xc = ({ root: e, props: t, actions: i, shouldOptimize: a }) => {
        vc({ root: e, props: t, actions: i })
        let { dragCoordinates: n } = t,
            o = e.rect.element.width,
            l = e.childViews.filter((T) => T.rect.element.height),
            r = e
                .query('GET_ACTIVE_ITEMS')
                .map((T) => l.find((v) => v.id === T.id))
                .filter((T) => T),
            s = n ? Ji(e, r, n) : null,
            p = e.ref.addIndex || null
        e.ref.addIndex = null
        let c = 0,
            d = 0,
            m = 0
        if (r.length === 0) return
        let u = r[0].rect.element,
            f = u.marginTop + u.marginBottom,
            g = u.marginLeft + u.marginRight,
            h = u.width + g,
            I = u.height + f,
            E = Ki(o, h)
        if (E === 1) {
            let T = 0,
                v = 0
            r.forEach((y, b) => {
                if (s) {
                    let _ = b - s
                    _ === -2
                        ? (v = -f * 0.25)
                        : _ === -1
                          ? (v = -f * 0.75)
                          : _ === 0
                            ? (v = f * 0.75)
                            : _ === 1
                              ? (v = f * 0.25)
                              : (v = 0)
                }
                a && ((y.translateX = null), (y.translateY = null)),
                    y.markedForRemoval || ln(y, 0, T + v)
                let x =
                    (y.rect.element.height + f) *
                    (y.markedForRemoval ? y.opacity : 1)
                T += x
            })
        } else {
            let T = 0,
                v = 0
            r.forEach((y, b) => {
                b === s && (c = 1),
                    b === p && (m += 1),
                    y.markedForRemoval && y.opacity < 0.5 && (d -= 1)
                let w = b + m + c + d,
                    x = w % E,
                    _ = Math.floor(w / E),
                    P = x * h,
                    O = _ * I,
                    M = Math.sign(P - T),
                    N = Math.sign(O - v)
                ;(T = P),
                    (v = O),
                    !y.markedForRemoval &&
                        (a && ((y.translateX = null), (y.translateY = null)),
                        ln(y, P, O, M, N))
            })
        }
    },
    yc = (e, t) =>
        t.filter((i) => (i.data && i.data.id ? e.id === i.data.id : !0)),
    _c = ne({
        create: gc,
        write: xc,
        tag: 'ul',
        name: 'list',
        didWriteView: ({ root: e }) => {
            e.childViews
                .filter(
                    (t) => t.markedForRemoval && t.opacity === 0 && t.resting,
                )
                .forEach((t) => {
                    t._destroy(), e.removeChildView(t)
                })
        },
        filterFrameActionsForChild: yc,
        mixins: { apis: ['dragCoordinates'] },
    }),
    Rc = ({ root: e, props: t }) => {
        ;(e.ref.list = e.appendChildView(e.createChildView(_c))),
            (t.dragCoordinates = null),
            (t.overflowing = !1)
    },
    wc = ({ root: e, props: t, action: i }) => {
        e.query('GET_ITEM_INSERT_LOCATION_FREEDOM') &&
            (t.dragCoordinates = {
                left: i.position.scopeLeft - e.ref.list.rect.element.left,
                top:
                    i.position.scopeTop -
                    (e.rect.outer.top +
                        e.rect.element.marginTop +
                        e.rect.element.scrollTop),
            })
    },
    Sc = ({ props: e }) => {
        e.dragCoordinates = null
    },
    Lc = ge({ DID_DRAG: wc, DID_END_DRAG: Sc }),
    Ac = ({ root: e, props: t, actions: i }) => {
        if (
            (Lc({ root: e, props: t, actions: i }),
            (e.ref.list.dragCoordinates = t.dragCoordinates),
            t.overflowing &&
                !t.overflow &&
                ((t.overflowing = !1),
                (e.element.dataset.state = ''),
                (e.height = null)),
            t.overflow)
        ) {
            let a = Math.round(t.overflow)
            a !== e.height &&
                ((t.overflowing = !0),
                (e.element.dataset.state = 'overflow'),
                (e.height = a))
        }
    },
    Mc = ne({
        create: Rc,
        write: Ac,
        name: 'list-scroller',
        mixins: {
            apis: ['overflow', 'dragCoordinates'],
            styles: ['height', 'translateY'],
            animations: { translateY: 'spring' },
        },
    }),
    Pe = (e, t, i, a = '') => {
        i ? ce(e, t, a) : e.removeAttribute(t)
    },
    Oc = (e) => {
        if (!(!e || e.value === '')) {
            try {
                e.value = ''
            } catch {}
            if (e.value) {
                let t = Ve('form'),
                    i = e.parentNode,
                    a = e.nextSibling
                t.appendChild(e),
                    t.reset(),
                    a ? i.insertBefore(e, a) : i.appendChild(e)
            }
        }
    },
    Pc = ({ root: e, props: t }) => {
        ;(e.element.id = `filepond--browser-${t.id}`),
            ce(e.element, 'name', e.query('GET_NAME')),
            ce(e.element, 'aria-controls', `filepond--assistant-${t.id}`),
            ce(e.element, 'aria-labelledby', `filepond--drop-label-${t.id}`),
            Gn({
                root: e,
                action: { value: e.query('GET_ACCEPTED_FILE_TYPES') },
            }),
            Un({ root: e, action: { value: e.query('GET_ALLOW_MULTIPLE') } }),
            Wn({
                root: e,
                action: { value: e.query('GET_ALLOW_DIRECTORIES_ONLY') },
            }),
            ki({ root: e }),
            Hn({ root: e, action: { value: e.query('GET_REQUIRED') } }),
            jn({ root: e, action: { value: e.query('GET_CAPTURE_METHOD') } }),
            (e.ref.handleChange = (i) => {
                if (!e.element.value) return
                let a = Array.from(e.element.files).map(
                    (n) => ((n._relativePath = n.webkitRelativePath), n),
                )
                setTimeout(() => {
                    t.onload(a), Oc(e.element)
                }, 250)
            }),
            e.element.addEventListener('change', e.ref.handleChange)
    },
    Gn = ({ root: e, action: t }) => {
        e.query('GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE') &&
            Pe(e.element, 'accept', !!t.value, t.value ? t.value.join(',') : '')
    },
    Un = ({ root: e, action: t }) => {
        Pe(e.element, 'multiple', t.value)
    },
    Wn = ({ root: e, action: t }) => {
        Pe(e.element, 'webkitdirectory', t.value)
    },
    ki = ({ root: e }) => {
        let t = e.query('GET_DISABLED'),
            i = e.query('GET_ALLOW_BROWSE'),
            a = t || !i
        Pe(e.element, 'disabled', a)
    },
    Hn = ({ root: e, action: t }) => {
        t.value
            ? e.query('GET_TOTAL_ITEMS') === 0 && Pe(e.element, 'required', !0)
            : Pe(e.element, 'required', !1)
    },
    jn = ({ root: e, action: t }) => {
        Pe(e.element, 'capture', !!t.value, t.value === !0 ? '' : t.value)
    },
    rn = ({ root: e }) => {
        let { element: t } = e
        if (e.query('GET_TOTAL_ITEMS') > 0) {
            Pe(t, 'required', !1), Pe(t, 'name', !1)
            let i = e.query('GET_ACTIVE_ITEMS'),
                a = !1
            for (let n = 0; n < i.length; n++)
                i[n].status === U.LOAD_ERROR && (a = !0)
            e.element.setCustomValidity(
                a ? e.query('GET_LABEL_INVALID_FIELD') : '',
            )
        } else
            Pe(t, 'name', !0, e.query('GET_NAME')),
                e.query('GET_CHECK_VALIDITY') && t.setCustomValidity(''),
                e.query('GET_REQUIRED') && Pe(t, 'required', !0)
    },
    Dc = ({ root: e }) => {
        e.query('GET_CHECK_VALIDITY') &&
            e.element.setCustomValidity(e.query('GET_LABEL_INVALID_FIELD'))
    },
    Fc = ne({
        tag: 'input',
        name: 'browser',
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        attributes: { type: 'file' },
        create: Pc,
        destroy: ({ root: e }) => {
            e.element.removeEventListener('change', e.ref.handleChange)
        },
        write: ge({
            DID_LOAD_ITEM: rn,
            DID_REMOVE_ITEM: rn,
            DID_THROW_ITEM_INVALID: Dc,
            DID_SET_DISABLED: ki,
            DID_SET_ALLOW_BROWSE: ki,
            DID_SET_ALLOW_DIRECTORIES_ONLY: Wn,
            DID_SET_ALLOW_MULTIPLE: Un,
            DID_SET_ACCEPTED_FILE_TYPES: Gn,
            DID_SET_CAPTURE_METHOD: jn,
            DID_SET_REQUIRED: Hn,
        }),
    }),
    sn = { ENTER: 13, SPACE: 32 },
    zc = ({ root: e, props: t }) => {
        let i = Ve('label')
        ce(i, 'for', `filepond--browser-${t.id}`),
            ce(i, 'id', `filepond--drop-label-${t.id}`),
            (e.ref.handleKeyDown = (a) => {
                ;(a.keyCode === sn.ENTER || a.keyCode === sn.SPACE) &&
                    (a.preventDefault(), e.ref.label.click())
            }),
            (e.ref.handleClick = (a) => {
                a.target === i || i.contains(a.target) || e.ref.label.click()
            }),
            i.addEventListener('keydown', e.ref.handleKeyDown),
            e.element.addEventListener('click', e.ref.handleClick),
            qn(i, t.caption),
            e.appendChild(i),
            (e.ref.label = i)
    },
    qn = (e, t) => {
        e.innerHTML = t
        let i = e.querySelector('.filepond--label-action')
        return i && ce(i, 'tabindex', '0'), t
    },
    Cc = ne({
        name: 'drop-label',
        ignoreRect: !0,
        create: zc,
        destroy: ({ root: e }) => {
            e.ref.label.addEventListener('keydown', e.ref.handleKeyDown),
                e.element.removeEventListener('click', e.ref.handleClick)
        },
        write: ge({
            DID_SET_LABEL_IDLE: ({ root: e, action: t }) => {
                qn(e.ref.label, t.value)
            },
        }),
        mixins: {
            styles: ['opacity', 'translateX', 'translateY'],
            animations: {
                opacity: { type: 'tween', duration: 150 },
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    }),
    Nc = ne({
        name: 'drip-blob',
        ignoreRect: !0,
        mixins: {
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    }),
    Bc = ({ root: e }) => {
        let t = e.rect.element.width * 0.5,
            i = e.rect.element.height * 0.5
        e.ref.blob = e.appendChildView(
            e.createChildView(Nc, {
                opacity: 0,
                scaleX: 2.5,
                scaleY: 2.5,
                translateX: t,
                translateY: i,
            }),
        )
    },
    kc = ({ root: e, action: t }) => {
        if (!e.ref.blob) {
            Bc({ root: e })
            return
        }
        ;(e.ref.blob.translateX = t.position.scopeLeft),
            (e.ref.blob.translateY = t.position.scopeTop),
            (e.ref.blob.scaleX = 1),
            (e.ref.blob.scaleY = 1),
            (e.ref.blob.opacity = 1)
    },
    Vc = ({ root: e }) => {
        e.ref.blob && (e.ref.blob.opacity = 0)
    },
    Gc = ({ root: e }) => {
        e.ref.blob &&
            ((e.ref.blob.scaleX = 2.5),
            (e.ref.blob.scaleY = 2.5),
            (e.ref.blob.opacity = 0))
    },
    Uc = ({ root: e, props: t, actions: i }) => {
        Wc({ root: e, props: t, actions: i })
        let { blob: a } = e.ref
        i.length === 0 &&
            a &&
            a.opacity === 0 &&
            (e.removeChildView(a), (e.ref.blob = null))
    },
    Wc = ge({ DID_DRAG: kc, DID_DROP: Gc, DID_END_DRAG: Vc }),
    Hc = ne({ ignoreRect: !0, ignoreRectUpdate: !0, name: 'drip', write: Uc }),
    Yn = (e, t) => {
        try {
            let i = new DataTransfer()
            t.forEach((a) => {
                a instanceof File
                    ? i.items.add(a)
                    : i.items.add(new File([a], a.name, { type: a.type }))
            }),
                (e.files = i.files)
        } catch {
            return !1
        }
        return !0
    },
    jc = ({ root: e }) => {
        e.ref.fields = {}
        let t = document.createElement('legend')
        ;(t.textContent = 'Files'), e.element.appendChild(t)
    },
    fi = (e, t) => e.ref.fields[t],
    ea = (e) => {
        e.query('GET_ACTIVE_ITEMS').forEach((t) => {
            e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id])
        })
    },
    cn = ({ root: e }) => ea(e),
    qc = ({ root: e, action: t }) => {
        let n =
                !(e.query('GET_ITEM', t.id).origin === se.LOCAL) &&
                e.query('SHOULD_UPDATE_FILE_INPUT'),
            o = Ve('input')
        ;(o.type = n ? 'file' : 'hidden'),
            (o.name = e.query('GET_NAME')),
            (e.ref.fields[t.id] = o),
            ea(e)
    },
    Yc = ({ root: e, action: t }) => {
        let i = fi(e, t.id)
        if (
            !i ||
            (t.serverFileReference !== null &&
                (i.value = t.serverFileReference),
            !e.query('SHOULD_UPDATE_FILE_INPUT'))
        )
            return
        let a = e.query('GET_ITEM', t.id)
        Yn(i, [a.file])
    },
    $c = ({ root: e, action: t }) => {
        e.query('SHOULD_UPDATE_FILE_INPUT') &&
            setTimeout(() => {
                let i = fi(e, t.id)
                i && Yn(i, [t.file])
            }, 0)
    },
    Xc = ({ root: e }) => {
        e.element.disabled = e.query('GET_DISABLED')
    },
    Qc = ({ root: e, action: t }) => {
        let i = fi(e, t.id)
        i &&
            (i.parentNode && i.parentNode.removeChild(i),
            delete e.ref.fields[t.id])
    },
    Zc = ({ root: e, action: t }) => {
        let i = fi(e, t.id)
        i &&
            (t.value === null
                ? i.removeAttribute('value')
                : i.type != 'file' && (i.value = t.value),
            ea(e))
    },
    Kc = ge({
        DID_SET_DISABLED: Xc,
        DID_ADD_ITEM: qc,
        DID_LOAD_ITEM: Yc,
        DID_REMOVE_ITEM: Qc,
        DID_DEFINE_VALUE: Zc,
        DID_PREPARE_OUTPUT: $c,
        DID_REORDER_ITEMS: cn,
        DID_SORT_ITEMS: cn,
    }),
    Jc = ne({
        tag: 'fieldset',
        name: 'data',
        create: jc,
        write: Kc,
        ignoreRect: !0,
    }),
    ed = (e) => ('getRootNode' in e ? e.getRootNode() : document),
    td = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'],
    id = ['css', 'csv', 'html', 'txt'],
    ad = { zip: 'zip|compressed', epub: 'application/epub+zip' },
    $n = (e = '') => (
        (e = e.toLowerCase()),
        td.includes(e)
            ? 'image/' + (e === 'jpg' ? 'jpeg' : e === 'svg' ? 'svg+xml' : e)
            : id.includes(e)
              ? 'text/' + e
              : ad[e] || ''
    ),
    ta = (e) =>
        new Promise((t, i) => {
            let a = pd(e)
            if (a.length && !nd(e)) return t(a)
            od(e).then(t)
        }),
    nd = (e) => (e.files ? e.files.length > 0 : !1),
    od = (e) =>
        new Promise((t, i) => {
            let a = (e.items ? Array.from(e.items) : [])
                .filter((n) => ld(n))
                .map((n) => rd(n))
            if (!a.length) {
                t(e.files ? Array.from(e.files) : [])
                return
            }
            Promise.all(a)
                .then((n) => {
                    let o = []
                    n.forEach((l) => {
                        o.push.apply(o, l)
                    }),
                        t(
                            o
                                .filter((l) => l)
                                .map(
                                    (l) => (
                                        l._relativePath ||
                                            (l._relativePath =
                                                l.webkitRelativePath),
                                        l
                                    ),
                                ),
                        )
                })
                .catch(console.error)
        }),
    ld = (e) => {
        if (Xn(e)) {
            let t = ia(e)
            if (t) return t.isFile || t.isDirectory
        }
        return e.kind === 'file'
    },
    rd = (e) =>
        new Promise((t, i) => {
            if (dd(e)) {
                sd(ia(e)).then(t).catch(i)
                return
            }
            t([e.getAsFile()])
        }),
    sd = (e) =>
        new Promise((t, i) => {
            let a = [],
                n = 0,
                o = 0,
                l = () => {
                    o === 0 && n === 0 && t(a)
                },
                r = (s) => {
                    n++
                    let p = s.createReader(),
                        c = () => {
                            p.readEntries((d) => {
                                if (d.length === 0) {
                                    n--, l()
                                    return
                                }
                                d.forEach((m) => {
                                    m.isDirectory
                                        ? r(m)
                                        : (o++,
                                          m.file((u) => {
                                              let f = cd(u)
                                              m.fullPath &&
                                                  (f._relativePath =
                                                      m.fullPath),
                                                  a.push(f),
                                                  o--,
                                                  l()
                                          }))
                                }),
                                    c()
                            }, i)
                        }
                    c()
                }
            r(e)
        }),
    cd = (e) => {
        if (e.type.length) return e
        let t = e.lastModifiedDate,
            i = e.name,
            a = $n(ui(e.name))
        return (
            a.length &&
                ((e = e.slice(0, e.size, a)),
                (e.name = i),
                (e.lastModifiedDate = t)),
            e
        )
    },
    dd = (e) => Xn(e) && (ia(e) || {}).isDirectory,
    Xn = (e) => 'webkitGetAsEntry' in e,
    ia = (e) => e.webkitGetAsEntry(),
    pd = (e) => {
        let t = []
        try {
            if (((t = ud(e)), t.length)) return t
            t = md(e)
        } catch {}
        return t
    },
    md = (e) => {
        let t = e.getData('url')
        return typeof t == 'string' && t.length ? [t] : []
    },
    ud = (e) => {
        let t = e.getData('text/html')
        if (typeof t == 'string' && t.length) {
            let i = t.match(/src\s*=\s*"(.+?)"/)
            if (i) return [i[1]]
        }
        return []
    },
    ri = [],
    et = (e) => ({
        pageLeft: e.pageX,
        pageTop: e.pageY,
        scopeLeft: e.offsetX || e.layerX,
        scopeTop: e.offsetY || e.layerY,
    }),
    fd = (e, t, i) => {
        let a = gd(t),
            n = {
                element: e,
                filterElement: i,
                state: null,
                ondrop: () => {},
                onenter: () => {},
                ondrag: () => {},
                onexit: () => {},
                onload: () => {},
                allowdrop: () => {},
            }
        return (n.destroy = a.addListener(n)), n
    },
    gd = (e) => {
        let t = ri.find((a) => a.element === e)
        if (t) return t
        let i = hd(e)
        return ri.push(i), i
    },
    hd = (e) => {
        let t = [],
            i = { dragenter: bd, dragover: Td, dragleave: vd, drop: Id },
            a = {}
        te(i, (o, l) => {
            ;(a[o] = l(e, t)), e.addEventListener(o, a[o], !1)
        })
        let n = {
            element: e,
            addListener: (o) => (
                t.push(o),
                () => {
                    t.splice(t.indexOf(o), 1),
                        t.length === 0 &&
                            (ri.splice(ri.indexOf(n), 1),
                            te(i, (l) => {
                                e.removeEventListener(l, a[l], !1)
                            }))
                }
            ),
        }
        return n
    },
    Ed = (e, t) => (
        'elementFromPoint' in e || (e = document), e.elementFromPoint(t.x, t.y)
    ),
    aa = (e, t) => {
        let i = ed(t),
            a = Ed(i, {
                x: e.pageX - window.pageXOffset,
                y: e.pageY - window.pageYOffset,
            })
        return a === t || t.contains(a)
    },
    Qn = null,
    ii = (e, t) => {
        try {
            e.dropEffect = t
        } catch {}
    },
    bd = (e, t) => (i) => {
        i.preventDefault(),
            (Qn = i.target),
            t.forEach((a) => {
                let { element: n, onenter: o } = a
                aa(i, n) && ((a.state = 'enter'), o(et(i)))
            })
    },
    Td = (e, t) => (i) => {
        i.preventDefault()
        let a = i.dataTransfer
        ta(a).then((n) => {
            let o = !1
            t.some((l) => {
                let {
                    filterElement: r,
                    element: s,
                    onenter: p,
                    onexit: c,
                    ondrag: d,
                    allowdrop: m,
                } = l
                ii(a, 'copy')
                let u = m(n)
                if (!u) {
                    ii(a, 'none')
                    return
                }
                if (aa(i, s)) {
                    if (((o = !0), l.state === null)) {
                        ;(l.state = 'enter'), p(et(i))
                        return
                    }
                    if (((l.state = 'over'), r && !u)) {
                        ii(a, 'none')
                        return
                    }
                    d(et(i))
                } else
                    r && !o && ii(a, 'none'),
                        l.state && ((l.state = null), c(et(i)))
            })
        })
    },
    Id = (e, t) => (i) => {
        i.preventDefault()
        let a = i.dataTransfer
        ta(a).then((n) => {
            t.forEach((o) => {
                let {
                    filterElement: l,
                    element: r,
                    ondrop: s,
                    onexit: p,
                    allowdrop: c,
                } = o
                if (((o.state = null), !(l && !aa(i, r)))) {
                    if (!c(n)) return p(et(i))
                    s(et(i), n)
                }
            })
        })
    },
    vd = (e, t) => (i) => {
        Qn === i.target &&
            t.forEach((a) => {
                let { onexit: n } = a
                ;(a.state = null), n(et(i))
            })
    },
    xd = (e, t, i) => {
        e.classList.add('filepond--hopper')
        let {
                catchesDropsOnPage: a,
                requiresDropOnElement: n,
                filterItems: o = (c) => c,
            } = i,
            l = fd(e, a ? document.documentElement : e, n),
            r = '',
            s = ''
        ;(l.allowdrop = (c) => t(o(c))),
            (l.ondrop = (c, d) => {
                let m = o(d)
                if (!t(m)) {
                    p.ondragend(c)
                    return
                }
                ;(s = 'drag-drop'), p.onload(m, c)
            }),
            (l.ondrag = (c) => {
                p.ondrag(c)
            }),
            (l.onenter = (c) => {
                ;(s = 'drag-over'), p.ondragstart(c)
            }),
            (l.onexit = (c) => {
                ;(s = 'drag-exit'), p.ondragend(c)
            })
        let p = {
            updateHopperState: () => {
                r !== s && ((e.dataset.hopperState = s), (r = s))
            },
            onload: () => {},
            ondragstart: () => {},
            ondrag: () => {},
            ondragend: () => {},
            destroy: () => {
                l.destroy()
            },
        }
        return p
    },
    Vi = !1,
    ut = [],
    Zn = (e) => {
        let t = document.activeElement
        if (
            t &&
            (/textarea|input/i.test(t.nodeName) ||
                t.getAttribute('contenteditable') === 'true')
        ) {
            let a = !1,
                n = t
            for (; n !== document.body; ) {
                if (n.classList.contains('filepond--root')) {
                    a = !0
                    break
                }
                n = n.parentNode
            }
            if (!a) return
        }
        ta(e.clipboardData).then((a) => {
            a.length && ut.forEach((n) => n(a))
        })
    },
    yd = (e) => {
        ut.includes(e) ||
            (ut.push(e),
            !Vi && ((Vi = !0), document.addEventListener('paste', Zn)))
    },
    _d = (e) => {
        $i(ut, ut.indexOf(e)),
            ut.length === 0 &&
                (document.removeEventListener('paste', Zn), (Vi = !1))
    },
    Rd = () => {
        let e = (i) => {
                t.onload(i)
            },
            t = {
                destroy: () => {
                    _d(e)
                },
                onload: () => {},
            }
        return yd(e), t
    },
    wd = ({ root: e, props: t }) => {
        ;(e.element.id = `filepond--assistant-${t.id}`),
            ce(e.element, 'role', 'alert'),
            ce(e.element, 'aria-live', 'polite'),
            ce(e.element, 'aria-relevant', 'additions')
    },
    dn = null,
    pn = null,
    Pi = [],
    gi = (e, t) => {
        e.element.textContent = t
    },
    Sd = (e) => {
        e.element.textContent = ''
    },
    Kn = (e, t, i) => {
        let a = e.query('GET_TOTAL_ITEMS')
        gi(
            e,
            `${i} ${t}, ${a} ${a === 1 ? e.query('GET_LABEL_FILE_COUNT_SINGULAR') : e.query('GET_LABEL_FILE_COUNT_PLURAL')}`,
        ),
            clearTimeout(pn),
            (pn = setTimeout(() => {
                Sd(e)
            }, 1500))
    },
    Jn = (e) => e.element.parentNode.contains(document.activeElement),
    Ld = ({ root: e, action: t }) => {
        if (!Jn(e)) return
        e.element.textContent = ''
        let i = e.query('GET_ITEM', t.id)
        Pi.push(i.filename),
            clearTimeout(dn),
            (dn = setTimeout(() => {
                Kn(e, Pi.join(', '), e.query('GET_LABEL_FILE_ADDED')),
                    (Pi.length = 0)
            }, 750))
    },
    Ad = ({ root: e, action: t }) => {
        if (!Jn(e)) return
        let i = t.item
        Kn(e, i.filename, e.query('GET_LABEL_FILE_REMOVED'))
    },
    Md = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename,
            n = e.query('GET_LABEL_FILE_PROCESSING_COMPLETE')
        gi(e, `${a} ${n}`)
    },
    mn = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename,
            n = e.query('GET_LABEL_FILE_PROCESSING_ABORTED')
        gi(e, `${a} ${n}`)
    },
    ai = ({ root: e, action: t }) => {
        let a = e.query('GET_ITEM', t.id).filename
        gi(e, `${t.status.main} ${a} ${t.status.sub}`)
    },
    Od = ne({
        create: wd,
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: ge({
            DID_LOAD_ITEM: Ld,
            DID_REMOVE_ITEM: Ad,
            DID_COMPLETE_ITEM_PROCESSING: Md,
            DID_ABORT_ITEM_PROCESSING: mn,
            DID_REVERT_ITEM_PROCESSING: mn,
            DID_THROW_ITEM_REMOVE_ERROR: ai,
            DID_THROW_ITEM_LOAD_ERROR: ai,
            DID_THROW_ITEM_INVALID: ai,
            DID_THROW_ITEM_PROCESSING_ERROR: ai,
        }),
        tag: 'span',
        name: 'assistant',
    }),
    eo = (e, t = '-') =>
        e.replace(new RegExp(`${t}.`, 'g'), (i) => i.charAt(1).toUpperCase()),
    to = (e, t = 16, i = !0) => {
        let a = Date.now(),
            n = null
        return (...o) => {
            clearTimeout(n)
            let l = Date.now() - a,
                r = () => {
                    ;(a = Date.now()), e(...o)
                }
            l < t ? i || (n = setTimeout(r, t - l)) : r()
        }
    },
    Pd = 1e6,
    si = (e) => e.preventDefault(),
    Dd = ({ root: e, props: t }) => {
        let i = e.query('GET_ID')
        i && (e.element.id = i)
        let a = e.query('GET_CLASS_NAME')
        a &&
            a
                .split(' ')
                .filter((s) => s.length)
                .forEach((s) => {
                    e.element.classList.add(s)
                }),
            (e.ref.label = e.appendChildView(
                e.createChildView(Cc, {
                    ...t,
                    translateY: null,
                    caption: e.query('GET_LABEL_IDLE'),
                }),
            )),
            (e.ref.list = e.appendChildView(
                e.createChildView(Mc, { translateY: null }),
            )),
            (e.ref.panel = e.appendChildView(
                e.createChildView(Vn, { name: 'panel-root' }),
            )),
            (e.ref.assistant = e.appendChildView(
                e.createChildView(Od, { ...t }),
            )),
            (e.ref.data = e.appendChildView(e.createChildView(Jc, { ...t }))),
            (e.ref.measure = Ve('div')),
            (e.ref.measure.style.height = '100%'),
            e.element.appendChild(e.ref.measure),
            (e.ref.bounds = null),
            e
                .query('GET_STYLES')
                .filter((s) => !ke(s.value))
                .map(({ name: s, value: p }) => {
                    e.element.dataset[s] = p
                }),
            (e.ref.widthPrevious = null),
            (e.ref.widthUpdated = to(() => {
                ;(e.ref.updateHistory = []), e.dispatch('DID_RESIZE_ROOT')
            }, 250)),
            (e.ref.previousAspectRatio = null),
            (e.ref.updateHistory = [])
        let n = window.matchMedia('(pointer: fine) and (hover: hover)').matches,
            o = 'PointerEvent' in window
        e.query('GET_ALLOW_REORDER') &&
            o &&
            !n &&
            (e.element.addEventListener('touchmove', si, { passive: !1 }),
            e.element.addEventListener('gesturestart', si))
        let l = e.query('GET_CREDITS')
        if (l.length === 2) {
            let s = document.createElement('a')
            ;(s.className = 'filepond--credits'),
                (s.href = l[0]),
                (s.tabIndex = -1),
                (s.target = '_blank'),
                (s.rel = 'noopener noreferrer nofollow'),
                (s.textContent = l[1]),
                e.element.appendChild(s),
                (e.ref.credits = s)
        }
    },
    Fd = ({ root: e, props: t, actions: i }) => {
        if (
            (kd({ root: e, props: t, actions: i }),
            i
                .filter((b) => /^DID_SET_STYLE_/.test(b.type))
                .filter((b) => !ke(b.data.value))
                .map(({ type: b, data: w }) => {
                    let x = eo(b.substring(8).toLowerCase(), '_')
                    ;(e.element.dataset[x] = w.value), e.invalidateLayout()
                }),
            e.rect.element.hidden)
        )
            return
        e.rect.element.width !== e.ref.widthPrevious &&
            ((e.ref.widthPrevious = e.rect.element.width), e.ref.widthUpdated())
        let a = e.ref.bounds
        a ||
            ((a = e.ref.bounds = Nd(e)),
            e.element.removeChild(e.ref.measure),
            (e.ref.measure = null))
        let { hopper: n, label: o, list: l, panel: r } = e.ref
        n && n.updateHopperState()
        let s = e.query('GET_PANEL_ASPECT_RATIO'),
            p = e.query('GET_ALLOW_MULTIPLE'),
            c = e.query('GET_TOTAL_ITEMS'),
            d = p ? e.query('GET_MAX_FILES') || Pd : 1,
            m = c === d,
            u = i.find((b) => b.type === 'DID_ADD_ITEM')
        if (m && u) {
            let b = u.data.interactionMethod
            ;(o.opacity = 0),
                p
                    ? (o.translateY = -40)
                    : b === _e.API
                      ? (o.translateX = 40)
                      : b === _e.BROWSE
                        ? (o.translateY = 40)
                        : (o.translateY = 30)
        } else m || ((o.opacity = 1), (o.translateX = 0), (o.translateY = 0))
        let f = zd(e),
            g = Cd(e),
            h = o.rect.element.height,
            I = !p || m ? 0 : h,
            E = m ? l.rect.element.marginTop : 0,
            T = c === 0 ? 0 : l.rect.element.marginBottom,
            v = I + E + g.visual + T,
            y = I + E + g.bounds + T
        if (
            ((l.translateY = Math.max(0, I - l.rect.element.marginTop) - f.top),
            s)
        ) {
            let b = e.rect.element.width,
                w = b * s
            s !== e.ref.previousAspectRatio &&
                ((e.ref.previousAspectRatio = s), (e.ref.updateHistory = []))
            let x = e.ref.updateHistory
            x.push(b)
            let _ = 2
            if (x.length > _ * 2) {
                let O = x.length,
                    M = O - 10,
                    N = 0
                for (let S = O; S >= M; S--)
                    if ((x[S] === x[S - 2] && N++, N >= _)) return
            }
            ;(r.scalable = !1), (r.height = w)
            let P = w - I - (T - f.bottom) - (m ? E : 0)
            g.visual > P ? (l.overflow = P) : (l.overflow = null),
                (e.height = w)
        } else if (a.fixedHeight) {
            r.scalable = !1
            let b = a.fixedHeight - I - (T - f.bottom) - (m ? E : 0)
            g.visual > b ? (l.overflow = b) : (l.overflow = null)
        } else if (a.cappedHeight) {
            let b = v >= a.cappedHeight,
                w = Math.min(a.cappedHeight, v)
            ;(r.scalable = !0), (r.height = b ? w : w - f.top - f.bottom)
            let x = w - I - (T - f.bottom) - (m ? E : 0)
            v > a.cappedHeight && g.visual > x
                ? (l.overflow = x)
                : (l.overflow = null),
                (e.height = Math.min(a.cappedHeight, y - f.top - f.bottom))
        } else {
            let b = c > 0 ? f.top + f.bottom : 0
            ;(r.scalable = !0),
                (r.height = Math.max(h, v - b)),
                (e.height = Math.max(h, y - b))
        }
        e.ref.credits &&
            r.heightCurrent &&
            (e.ref.credits.style.transform = `translateY(${r.heightCurrent}px)`)
    },
    zd = (e) => {
        let t = e.ref.list.childViews[0].childViews[0]
        return t
            ? {
                  top: t.rect.element.marginTop,
                  bottom: t.rect.element.marginBottom,
              }
            : { top: 0, bottom: 0 }
    },
    Cd = (e) => {
        let t = 0,
            i = 0,
            a = e.ref.list,
            n = a.childViews[0],
            o = n.childViews.filter((E) => E.rect.element.height),
            l = e
                .query('GET_ACTIVE_ITEMS')
                .map((E) => o.find((T) => T.id === E.id))
                .filter((E) => E)
        if (l.length === 0) return { visual: t, bounds: i }
        let r = n.rect.element.width,
            s = Ji(n, l, a.dragCoordinates),
            p = l[0].rect.element,
            c = p.marginTop + p.marginBottom,
            d = p.marginLeft + p.marginRight,
            m = p.width + d,
            u = p.height + c,
            f = typeof s < 'u' && s >= 0 ? 1 : 0,
            g = l.find((E) => E.markedForRemoval && E.opacity < 0.45) ? -1 : 0,
            h = l.length + f + g,
            I = Ki(r, m)
        return (
            I === 1
                ? l.forEach((E) => {
                      let T = E.rect.element.height + c
                      ;(i += T), (t += T * E.opacity)
                  })
                : ((i = Math.ceil(h / I) * u), (t = i)),
            { visual: t, bounds: i }
        )
    },
    Nd = (e) => {
        let t = e.ref.measureHeight || null
        return {
            cappedHeight: parseInt(e.style.maxHeight, 10) || null,
            fixedHeight: t === 0 ? null : t,
        }
    },
    na = (e, t) => {
        let i = e.query('GET_ALLOW_REPLACE'),
            a = e.query('GET_ALLOW_MULTIPLE'),
            n = e.query('GET_TOTAL_ITEMS'),
            o = e.query('GET_MAX_FILES'),
            l = t.length
        return !a && l > 1
            ? (e.dispatch('DID_THROW_MAX_FILES', {
                  source: t,
                  error: ie('warning', 0, 'Max files'),
              }),
              !0)
            : ((o = a ? o : 1),
              !a && i
                  ? !1
                  : Et(o) && n + l > o
                    ? (e.dispatch('DID_THROW_MAX_FILES', {
                          source: t,
                          error: ie('warning', 0, 'Max files'),
                      }),
                      !0)
                    : !1)
    },
    Bd = (e, t, i) => {
        let a = e.childViews[0]
        return Ji(a, t, {
            left: i.scopeLeft - a.rect.element.left,
            top:
                i.scopeTop -
                (e.rect.outer.top +
                    e.rect.element.marginTop +
                    e.rect.element.scrollTop),
        })
    },
    un = (e) => {
        let t = e.query('GET_ALLOW_DROP'),
            i = e.query('GET_DISABLED'),
            a = t && !i
        if (a && !e.ref.hopper) {
            let n = xd(
                e.element,
                (o) => {
                    let l = e.query('GET_BEFORE_DROP_FILE') || (() => !0)
                    return e.query('GET_DROP_VALIDATION')
                        ? o.every(
                              (s) =>
                                  tt('ALLOW_HOPPER_ITEM', s, {
                                      query: e.query,
                                  }).every((p) => p === !0) && l(s),
                          )
                        : !0
                },
                {
                    filterItems: (o) => {
                        let l = e.query('GET_IGNORED_FILES')
                        return o.filter((r) =>
                            Je(r) ? !l.includes(r.name.toLowerCase()) : !0,
                        )
                    },
                    catchesDropsOnPage: e.query('GET_DROP_ON_PAGE'),
                    requiresDropOnElement: e.query('GET_DROP_ON_ELEMENT'),
                },
            )
            ;(n.onload = (o, l) => {
                let s = e.ref.list.childViews[0].childViews.filter(
                        (c) => c.rect.element.height,
                    ),
                    p = e
                        .query('GET_ACTIVE_ITEMS')
                        .map((c) => s.find((d) => d.id === c.id))
                        .filter((c) => c)
                Me('ADD_ITEMS', o, { dispatch: e.dispatch }).then((c) => {
                    if (na(e, c)) return !1
                    e.dispatch('ADD_ITEMS', {
                        items: c,
                        index: Bd(e.ref.list, p, l),
                        interactionMethod: _e.DROP,
                    })
                }),
                    e.dispatch('DID_DROP', { position: l }),
                    e.dispatch('DID_END_DRAG', { position: l })
            }),
                (n.ondragstart = (o) => {
                    e.dispatch('DID_START_DRAG', { position: o })
                }),
                (n.ondrag = to((o) => {
                    e.dispatch('DID_DRAG', { position: o })
                })),
                (n.ondragend = (o) => {
                    e.dispatch('DID_END_DRAG', { position: o })
                }),
                (e.ref.hopper = n),
                (e.ref.drip = e.appendChildView(e.createChildView(Hc)))
        } else
            !a &&
                e.ref.hopper &&
                (e.ref.hopper.destroy(),
                (e.ref.hopper = null),
                e.removeChildView(e.ref.drip))
    },
    fn = (e, t) => {
        let i = e.query('GET_ALLOW_BROWSE'),
            a = e.query('GET_DISABLED'),
            n = i && !a
        n && !e.ref.browser
            ? (e.ref.browser = e.appendChildView(
                  e.createChildView(Fc, {
                      ...t,
                      onload: (o) => {
                          Me('ADD_ITEMS', o, { dispatch: e.dispatch }).then(
                              (l) => {
                                  if (na(e, l)) return !1
                                  e.dispatch('ADD_ITEMS', {
                                      items: l,
                                      index: -1,
                                      interactionMethod: _e.BROWSE,
                                  })
                              },
                          )
                      },
                  }),
                  0,
              ))
            : !n &&
              e.ref.browser &&
              (e.removeChildView(e.ref.browser), (e.ref.browser = null))
    },
    gn = (e) => {
        let t = e.query('GET_ALLOW_PASTE'),
            i = e.query('GET_DISABLED'),
            a = t && !i
        a && !e.ref.paster
            ? ((e.ref.paster = Rd()),
              (e.ref.paster.onload = (n) => {
                  Me('ADD_ITEMS', n, { dispatch: e.dispatch }).then((o) => {
                      if (na(e, o)) return !1
                      e.dispatch('ADD_ITEMS', {
                          items: o,
                          index: -1,
                          interactionMethod: _e.PASTE,
                      })
                  })
              }))
            : !a &&
              e.ref.paster &&
              (e.ref.paster.destroy(), (e.ref.paster = null))
    },
    kd = ge({
        DID_SET_ALLOW_BROWSE: ({ root: e, props: t }) => {
            fn(e, t)
        },
        DID_SET_ALLOW_DROP: ({ root: e }) => {
            un(e)
        },
        DID_SET_ALLOW_PASTE: ({ root: e }) => {
            gn(e)
        },
        DID_SET_DISABLED: ({ root: e, props: t }) => {
            un(e),
                gn(e),
                fn(e, t),
                e.query('GET_DISABLED')
                    ? (e.element.dataset.disabled = 'disabled')
                    : e.element.removeAttribute('data-disabled')
        },
    }),
    Vd = ne({
        name: 'root',
        read: ({ root: e }) => {
            e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight)
        },
        create: Dd,
        write: Fd,
        destroy: ({ root: e }) => {
            e.ref.paster && e.ref.paster.destroy(),
                e.ref.hopper && e.ref.hopper.destroy(),
                e.element.removeEventListener('touchmove', si),
                e.element.removeEventListener('gesturestart', si)
        },
        mixins: { styles: ['height'] },
    }),
    Gd = (e = {}) => {
        let t = null,
            i = li(),
            a = nr(Wr(i), [rs, qr(i)], [Ps, jr(i)])
        a.dispatch('SET_OPTIONS', { options: e })
        let n = () => {
            document.hidden || a.dispatch('KICK')
        }
        document.addEventListener('visibilitychange', n)
        let o = null,
            l = !1,
            r = !1,
            s = null,
            p = null,
            c = () => {
                l || (l = !0),
                    clearTimeout(o),
                    (o = setTimeout(() => {
                        ;(l = !1),
                            (s = null),
                            (p = null),
                            r && ((r = !1), a.dispatch('DID_STOP_RESIZE'))
                    }, 500))
            }
        window.addEventListener('resize', c)
        let d = Vd(a, { id: Yi() }),
            m = !1,
            u = !1,
            f = {
                _read: () => {
                    l &&
                        ((p = window.innerWidth),
                        s || (s = p),
                        !r &&
                            p !== s &&
                            (a.dispatch('DID_START_RESIZE'), (r = !0))),
                        u && m && (m = d.element.offsetParent === null),
                        !m && (d._read(), (u = d.rect.element.hidden))
                },
                _write: (R) => {
                    let L = a
                        .processActionQueue()
                        .filter((z) => !/^SET_/.test(z.type))
                    ;(m && !L.length) ||
                        (E(L),
                        (m = d._write(R, L, r)),
                        Xr(a.query('GET_ITEMS')),
                        m && a.processDispatchQueue())
                },
            },
            g = (R) => (L) => {
                let z = { type: R }
                if (!L) return z
                if (
                    (L.hasOwnProperty('error') &&
                        (z.error = L.error ? { ...L.error } : null),
                    L.status && (z.status = { ...L.status }),
                    L.file && (z.output = L.file),
                    L.source)
                )
                    z.file = L.source
                else if (L.item || L.id) {
                    let F = L.item ? L.item : a.query('GET_ITEM', L.id)
                    z.file = F ? he(F) : null
                }
                return (
                    L.items && (z.items = L.items.map(he)),
                    /progress/.test(R) && (z.progress = L.progress),
                    L.hasOwnProperty('origin') &&
                        L.hasOwnProperty('target') &&
                        ((z.origin = L.origin), (z.target = L.target)),
                    z
                )
            },
            h = {
                DID_DESTROY: g('destroy'),
                DID_INIT: g('init'),
                DID_THROW_MAX_FILES: g('warning'),
                DID_INIT_ITEM: g('initfile'),
                DID_START_ITEM_LOAD: g('addfilestart'),
                DID_UPDATE_ITEM_LOAD_PROGRESS: g('addfileprogress'),
                DID_LOAD_ITEM: g('addfile'),
                DID_THROW_ITEM_INVALID: [g('error'), g('addfile')],
                DID_THROW_ITEM_LOAD_ERROR: [g('error'), g('addfile')],
                DID_THROW_ITEM_REMOVE_ERROR: [g('error'), g('removefile')],
                DID_PREPARE_OUTPUT: g('preparefile'),
                DID_START_ITEM_PROCESSING: g('processfilestart'),
                DID_UPDATE_ITEM_PROCESS_PROGRESS: g('processfileprogress'),
                DID_ABORT_ITEM_PROCESSING: g('processfileabort'),
                DID_COMPLETE_ITEM_PROCESSING: g('processfile'),
                DID_COMPLETE_ITEM_PROCESSING_ALL: g('processfiles'),
                DID_REVERT_ITEM_PROCESSING: g('processfilerevert'),
                DID_THROW_ITEM_PROCESSING_ERROR: [g('error'), g('processfile')],
                DID_REMOVE_ITEM: g('removefile'),
                DID_UPDATE_ITEMS: g('updatefiles'),
                DID_ACTIVATE_ITEM: g('activatefile'),
                DID_REORDER_ITEMS: g('reorderfiles'),
            },
            I = (R) => {
                let L = { pond: D, ...R }
                delete L.type,
                    d.element.dispatchEvent(
                        new CustomEvent(`FilePond:${R.type}`, {
                            detail: L,
                            bubbles: !0,
                            cancelable: !0,
                            composed: !0,
                        }),
                    )
                let z = []
                R.hasOwnProperty('error') && z.push(R.error),
                    R.hasOwnProperty('file') && z.push(R.file)
                let F = ['type', 'error', 'file']
                Object.keys(R)
                    .filter((C) => !F.includes(C))
                    .forEach((C) => z.push(R[C])),
                    D.fire(R.type, ...z)
                let G = a.query(`GET_ON${R.type.toUpperCase()}`)
                G && G(...z)
            },
            E = (R) => {
                R.length &&
                    R.filter((L) => h[L.type]).forEach((L) => {
                        let z = h[L.type]
                        ;(Array.isArray(z) ? z : [z]).forEach((F) => {
                            L.type === 'DID_INIT_ITEM'
                                ? I(F(L.data))
                                : setTimeout(() => {
                                      I(F(L.data))
                                  }, 0)
                        })
                    })
            },
            T = (R) => a.dispatch('SET_OPTIONS', { options: R }),
            v = (R) => a.query('GET_ACTIVE_ITEM', R),
            y = (R) =>
                new Promise((L, z) => {
                    a.dispatch('REQUEST_ITEM_PREPARE', {
                        query: R,
                        success: (F) => {
                            L(F)
                        },
                        failure: (F) => {
                            z(F)
                        },
                    })
                }),
            b = (R, L = {}) =>
                new Promise((z, F) => {
                    _([{ source: R, options: L }], { index: L.index })
                        .then((G) => z(G && G[0]))
                        .catch(F)
                }),
            w = (R) => R.file && R.id,
            x = (R, L) => (
                typeof R == 'object' && !w(R) && !L && ((L = R), (R = void 0)),
                a.dispatch('REMOVE_ITEM', { ...L, query: R }),
                a.query('GET_ACTIVE_ITEM', R) === null
            ),
            _ = (...R) =>
                new Promise((L, z) => {
                    let F = [],
                        G = {}
                    if (ci(R[0]))
                        F.push.apply(F, R[0]), Object.assign(G, R[1] || {})
                    else {
                        let C = R[R.length - 1]
                        typeof C == 'object' &&
                            !(C instanceof Blob) &&
                            Object.assign(G, R.pop()),
                            F.push(...R)
                    }
                    a.dispatch('ADD_ITEMS', {
                        items: F,
                        index: G.index,
                        interactionMethod: _e.API,
                        success: L,
                        failure: z,
                    })
                }),
            P = () => a.query('GET_ACTIVE_ITEMS'),
            O = (R) =>
                new Promise((L, z) => {
                    a.dispatch('REQUEST_ITEM_PROCESSING', {
                        query: R,
                        success: (F) => {
                            L(F)
                        },
                        failure: (F) => {
                            z(F)
                        },
                    })
                }),
            M = (...R) => {
                let L = Array.isArray(R[0]) ? R[0] : R,
                    z = L.length ? L : P()
                return Promise.all(z.map(y))
            },
            N = (...R) => {
                let L = Array.isArray(R[0]) ? R[0] : R
                if (!L.length) {
                    let z = P().filter(
                        (F) =>
                            !(F.status === U.IDLE && F.origin === se.LOCAL) &&
                            F.status !== U.PROCESSING &&
                            F.status !== U.PROCESSING_COMPLETE &&
                            F.status !== U.PROCESSING_REVERT_ERROR,
                    )
                    return Promise.all(z.map(O))
                }
                return Promise.all(L.map(O))
            },
            S = (...R) => {
                let L = Array.isArray(R[0]) ? R[0] : R,
                    z
                typeof L[L.length - 1] == 'object'
                    ? (z = L.pop())
                    : Array.isArray(R[0]) && (z = R[1])
                let F = P()
                return L.length
                    ? L.map((C) => ($e(C) ? (F[C] ? F[C].id : null) : C))
                          .filter((C) => C)
                          .map((C) => x(C, z))
                    : Promise.all(F.map((C) => x(C, z)))
            },
            D = {
                ...mi(),
                ...f,
                ...Hr(a, i),
                setOptions: T,
                addFile: b,
                addFiles: _,
                getFile: v,
                processFile: O,
                prepareFile: y,
                removeFile: x,
                moveFile: (R, L) =>
                    a.dispatch('MOVE_ITEM', { query: R, index: L }),
                getFiles: P,
                processFiles: N,
                removeFiles: S,
                prepareFiles: M,
                sort: (R) => a.dispatch('SORT', { compare: R }),
                browse: () => {
                    var R = d.element.querySelector('input[type=file]')
                    R && R.click()
                },
                destroy: () => {
                    D.fire('destroy', d.element),
                        a.dispatch('ABORT_ALL'),
                        d._destroy(),
                        window.removeEventListener('resize', c),
                        document.removeEventListener('visibilitychange', n),
                        a.dispatch('DID_DESTROY')
                },
                insertBefore: (R) => Na(d.element, R),
                insertAfter: (R) => Ba(d.element, R),
                appendTo: (R) => R.appendChild(d.element),
                replaceElement: (R) => {
                    Na(d.element, R), R.parentNode.removeChild(R), (t = R)
                },
                restoreElement: () => {
                    t &&
                        (Ba(t, d.element),
                        d.element.parentNode.removeChild(d.element),
                        (t = null))
                },
                isAttachedTo: (R) => d.element === R || t === R,
                element: { get: () => d.element },
                status: { get: () => a.query('GET_STATUS') },
            }
        return a.dispatch('DID_INIT'), We(D)
    },
    io = (e = {}) => {
        let t = {}
        return (
            te(li(), (a, n) => {
                t[a] = n[0]
            }),
            Gd({ ...t, ...e })
        )
    },
    Ud = (e) => e.charAt(0).toLowerCase() + e.slice(1),
    Wd = (e) => eo(e.replace(/^data-/, '')),
    ao = (e, t) => {
        te(t, (i, a) => {
            te(e, (n, o) => {
                let l = new RegExp(i)
                if (!l.test(n) || (delete e[n], a === !1)) return
                if (fe(a)) {
                    e[a] = o
                    return
                }
                let s = a.group
                de(a) && !e[s] && (e[s] = {}), (e[s][Ud(n.replace(l, ''))] = o)
            }),
                a.mapping && ao(e[a.group], a.mapping)
        })
    },
    Hd = (e, t = {}) => {
        let i = []
        te(e.attributes, (n) => {
            i.push(e.attributes[n])
        })
        let a = i
            .filter((n) => n.name)
            .reduce((n, o) => {
                let l = ce(e, o.name)
                return (n[Wd(o.name)] = l === o.name ? !0 : l), n
            }, {})
        return ao(a, t), a
    },
    jd = (e, t = {}) => {
        let i = {
            '^class$': 'className',
            '^multiple$': 'allowMultiple',
            '^capture$': 'captureMethod',
            '^webkitdirectory$': 'allowDirectoriesOnly',
            '^server': {
                group: 'server',
                mapping: {
                    '^process': { group: 'process' },
                    '^revert': { group: 'revert' },
                    '^fetch': { group: 'fetch' },
                    '^restore': { group: 'restore' },
                    '^load': { group: 'load' },
                },
            },
            '^type$': !1,
            '^files$': !1,
        }
        tt('SET_ATTRIBUTE_TO_OPTION_MAP', i)
        let a = { ...t },
            n = Hd(
                e.nodeName === 'FIELDSET'
                    ? e.querySelector('input[type=file]')
                    : e,
                i,
            )
        Object.keys(n).forEach((l) => {
            de(n[l])
                ? (de(a[l]) || (a[l] = {}), Object.assign(a[l], n[l]))
                : (a[l] = n[l])
        }),
            (a.files = (t.files || []).concat(
                Array.from(e.querySelectorAll('input:not([type=file])')).map(
                    (l) => ({
                        source: l.value,
                        options: { type: l.dataset.type },
                    }),
                ),
            ))
        let o = io(a)
        return (
            e.files &&
                Array.from(e.files).forEach((l) => {
                    o.addFile(l)
                }),
            o.replaceElement(e),
            o
        )
    },
    qd = (...e) => (ar(e[0]) ? jd(...e) : io(...e)),
    Yd = ['fire', '_read', '_write'],
    hn = (e) => {
        let t = {}
        return _n(e, t, Yd), t
    },
    $d = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (i, a) => t[a]),
    Xd = (e) => {
        let t = new Blob(['(', e.toString(), ')()'], {
                type: 'application/javascript',
            }),
            i = URL.createObjectURL(t),
            a = new Worker(i)
        return {
            transfer: (n, o) => {},
            post: (n, o, l) => {
                let r = Yi()
                ;(a.onmessage = (s) => {
                    s.data.id === r && o(s.data.message)
                }),
                    a.postMessage({ id: r, message: n }, l)
            },
            terminate: () => {
                a.terminate(), URL.revokeObjectURL(i)
            },
        }
    },
    Qd = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            ;(a.onload = () => {
                t(a)
            }),
                (a.onerror = (n) => {
                    i(n)
                }),
                (a.src = e)
        }),
    no = (e, t) => {
        let i = e.slice(0, e.size, e.type)
        return (i.lastModifiedDate = e.lastModifiedDate), (i.name = t), i
    },
    Zd = (e) => no(e, e.name),
    En = [],
    Kd = (e) => {
        if (En.includes(e)) return
        En.push(e)
        let t = e({
            addFilter: Zr,
            utils: {
                Type: A,
                forin: te,
                isString: fe,
                isFile: Je,
                toNaturalFileSize: Nn,
                replaceInString: $d,
                getExtensionFromFilename: ui,
                getFilenameWithoutExtension: Fn,
                guesstimateMimeType: $n,
                getFileFromBlob: ht,
                getFilenameFromURL: zt,
                createRoute: ge,
                createWorker: Xd,
                createView: ne,
                createItemAPI: he,
                loadImage: Qd,
                copyFile: Zd,
                renameFile: no,
                createBlob: On,
                applyFilterChain: Me,
                text: ae,
                getNumericAspectRatioFromString: Sn,
            },
            views: { fileActionButton: Cn },
        })
        Kr(t.options)
    },
    Jd = () =>
        Object.prototype.toString.call(window.operamini) ===
        '[object OperaMini]',
    ep = () => 'Promise' in window,
    tp = () => 'slice' in Blob.prototype,
    ip = () => 'URL' in window && 'createObjectURL' in window.URL,
    ap = () => 'visibilityState' in document,
    np = () => 'performance' in window,
    op = () => 'supports' in (window.CSS || {}),
    lp = () => /MSIE|Trident/.test(window.navigator.userAgent),
    Gi = (() => {
        let e =
            bn() &&
            !Jd() &&
            ap() &&
            ep() &&
            tp() &&
            ip() &&
            np() &&
            (op() || lp())
        return () => e
    })(),
    Ue = { apps: [] },
    rp = 'filepond',
    it = () => {},
    oo = {},
    bt = {},
    Ct = {},
    Ui = {},
    ft = it,
    gt = it,
    Wi = it,
    Hi = it,
    ve = it,
    ji = it,
    Ft = it
if (Gi()) {
    Ar(
        () => {
            Ue.apps.forEach((i) => i._read())
        },
        (i) => {
            Ue.apps.forEach((a) => a._write(i))
        },
    )
    let e = () => {
        document.dispatchEvent(
            new CustomEvent('FilePond:loaded', {
                detail: {
                    supported: Gi,
                    create: ft,
                    destroy: gt,
                    parse: Wi,
                    find: Hi,
                    registerPlugin: ve,
                    setOptions: Ft,
                },
            }),
        ),
            document.removeEventListener('DOMContentLoaded', e)
    }
    document.readyState !== 'loading'
        ? setTimeout(() => e(), 0)
        : document.addEventListener('DOMContentLoaded', e)
    let t = () =>
        te(li(), (i, a) => {
            Ui[i] = a[1]
        })
    ;(oo = { ...Ln }),
        (Ct = { ...se }),
        (bt = { ...U }),
        (Ui = {}),
        t(),
        (ft = (...i) => {
            let a = qd(...i)
            return a.on('destroy', gt), Ue.apps.push(a), hn(a)
        }),
        (gt = (i) => {
            let a = Ue.apps.findIndex((n) => n.isAttachedTo(i))
            return a >= 0 ? (Ue.apps.splice(a, 1)[0].restoreElement(), !0) : !1
        }),
        (Wi = (i) =>
            Array.from(i.querySelectorAll(`.${rp}`))
                .filter((o) => !Ue.apps.find((l) => l.isAttachedTo(o)))
                .map((o) => ft(o))),
        (Hi = (i) => {
            let a = Ue.apps.find((n) => n.isAttachedTo(i))
            return a ? hn(a) : null
        }),
        (ve = (...i) => {
            i.forEach(Kd), t()
        }),
        (ji = () => {
            let i = {}
            return (
                te(li(), (a, n) => {
                    i[a] = n[0]
                }),
                i
            )
        }),
        (Ft = (i) => (
            de(i) &&
                (Ue.apps.forEach((a) => {
                    a.setOptions(i)
                }),
                Jr(i)),
            ji()
        ))
}
function lo(e, t) {
    var i = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        t &&
            (a = a.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            i.push.apply(i, a)
    }
    return i
}
function yo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] != null ? arguments[t] : {}
        t % 2
            ? lo(Object(i), !0).forEach(function (a) {
                  pp(e, a, i[a])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : lo(Object(i)).forEach(function (a) {
                    Object.defineProperty(
                        e,
                        a,
                        Object.getOwnPropertyDescriptor(i, a),
                    )
                })
    }
    return e
}
function sp(e, t) {
    if (typeof e != 'object' || !e) return e
    var i = e[Symbol.toPrimitive]
    if (i !== void 0) {
        var a = i.call(e, t || 'default')
        if (typeof a != 'object') return a
        throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (t === 'string' ? String : Number)(e)
}
function _o(e) {
    var t = sp(e, 'string')
    return typeof t == 'symbol' ? t : t + ''
}
function sa(e) {
    '@babel/helpers - typeof'
    return (
        (sa =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                  }),
        sa(e)
    )
}
function cp(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
}
function ro(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i]
        ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, _o(a.key), a)
    }
}
function dp(e, t, i) {
    return (
        t && ro(e.prototype, t),
        i && ro(e, i),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    )
}
function pp(e, t, i) {
    return (
        (t = _o(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    )
}
function Ro(e) {
    return mp(e) || up(e) || fp(e) || gp()
}
function mp(e) {
    if (Array.isArray(e)) return ca(e)
}
function up(e) {
    if (
        (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e)
}
function fp(e, t) {
    if (e) {
        if (typeof e == 'string') return ca(e, t)
        var i = Object.prototype.toString.call(e).slice(8, -1)
        if (
            (i === 'Object' && e.constructor && (i = e.constructor.name),
            i === 'Map' || i === 'Set')
        )
            return Array.from(e)
        if (
            i === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        )
            return ca(e, t)
    }
}
function ca(e, t) {
    ;(t == null || t > e.length) && (t = e.length)
    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i]
    return a
}
function gp() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Ti = typeof window < 'u' && typeof window.document < 'u',
    ze = Ti ? window : {},
    ba =
        Ti && ze.document.documentElement
            ? 'ontouchstart' in ze.document.documentElement
            : !1,
    Ta = Ti ? 'PointerEvent' in ze : !1,
    K = 'cropper',
    Ia = 'all',
    wo = 'crop',
    So = 'move',
    Lo = 'zoom',
    at = 'e',
    nt = 'w',
    Tt = 's',
    He = 'n',
    Nt = 'ne',
    Bt = 'nw',
    kt = 'se',
    Vt = 'sw',
    da = ''.concat(K, '-crop'),
    so = ''.concat(K, '-disabled'),
    be = ''.concat(K, '-hidden'),
    co = ''.concat(K, '-hide'),
    hp = ''.concat(K, '-invisible'),
    bi = ''.concat(K, '-modal'),
    pa = ''.concat(K, '-move'),
    Ut = ''.concat(K, 'Action'),
    hi = ''.concat(K, 'Preview'),
    va = 'crop',
    Ao = 'move',
    Mo = 'none',
    ma = 'crop',
    ua = 'cropend',
    fa = 'cropmove',
    ga = 'cropstart',
    po = 'dblclick',
    Ep = ba ? 'touchstart' : 'mousedown',
    bp = ba ? 'touchmove' : 'mousemove',
    Tp = ba ? 'touchend touchcancel' : 'mouseup',
    mo = Ta ? 'pointerdown' : Ep,
    uo = Ta ? 'pointermove' : bp,
    fo = Ta ? 'pointerup pointercancel' : Tp,
    go = 'ready',
    ho = 'resize',
    Eo = 'wheel',
    ha = 'zoom',
    bo = 'image/jpeg',
    Ip = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
    vp = /^data:/,
    xp = /^data:image\/jpeg;base64,/,
    yp = /^img|canvas$/i,
    Oo = 200,
    Po = 100,
    To = {
        viewMode: 0,
        dragMode: va,
        initialAspectRatio: NaN,
        aspectRatio: NaN,
        data: null,
        preview: '',
        responsive: !0,
        restore: !0,
        checkCrossOrigin: !0,
        checkOrientation: !0,
        modal: !0,
        guides: !0,
        center: !0,
        highlight: !0,
        background: !0,
        autoCrop: !0,
        autoCropArea: 0.8,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        wheelZoomRatio: 0.1,
        cropBoxMovable: !0,
        cropBoxResizable: !0,
        toggleDragModeOnDblclick: !0,
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: Oo,
        minContainerHeight: Po,
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null,
    },
    _p =
        '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
    Rp = Number.isNaN || ze.isNaN
function j(e) {
    return typeof e == 'number' && !Rp(e)
}
var Io = function (t) {
    return t > 0 && t < 1 / 0
}
function la(e) {
    return typeof e > 'u'
}
function ot(e) {
    return sa(e) === 'object' && e !== null
}
var wp = Object.prototype.hasOwnProperty
function It(e) {
    if (!ot(e)) return !1
    try {
        var t = e.constructor,
            i = t.prototype
        return t && i && wp.call(i, 'isPrototypeOf')
    } catch {
        return !1
    }
}
function Ee(e) {
    return typeof e == 'function'
}
var Sp = Array.prototype.slice
function Do(e) {
    return Array.from ? Array.from(e) : Sp.call(e)
}
function oe(e, t) {
    return (
        e &&
            Ee(t) &&
            (Array.isArray(e) || j(e.length)
                ? Do(e).forEach(function (i, a) {
                      t.call(e, i, a, e)
                  })
                : ot(e) &&
                  Object.keys(e).forEach(function (i) {
                      t.call(e, e[i], i, e)
                  })),
        e
    )
}
var J =
        Object.assign ||
        function (t) {
            for (
                var i = arguments.length,
                    a = new Array(i > 1 ? i - 1 : 0),
                    n = 1;
                n < i;
                n++
            )
                a[n - 1] = arguments[n]
            return (
                ot(t) &&
                    a.length > 0 &&
                    a.forEach(function (o) {
                        ot(o) &&
                            Object.keys(o).forEach(function (l) {
                                t[l] = o[l]
                            })
                    }),
                t
            )
        },
    Lp = /\.\d*(?:0|9){12}\d*$/
function xt(e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11
    return Lp.test(e) ? Math.round(e * t) / t : e
}
var Ap = /^width|height|left|top|marginLeft|marginTop$/
function je(e, t) {
    var i = e.style
    oe(t, function (a, n) {
        Ap.test(n) && j(a) && (a = ''.concat(a, 'px')), (i[n] = a)
    })
}
function Mp(e, t) {
    return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1
}
function pe(e, t) {
    if (t) {
        if (j(e.length)) {
            oe(e, function (a) {
                pe(a, t)
            })
            return
        }
        if (e.classList) {
            e.classList.add(t)
            return
        }
        var i = e.className.trim()
        i
            ? i.indexOf(t) < 0 && (e.className = ''.concat(i, ' ').concat(t))
            : (e.className = t)
    }
}
function Fe(e, t) {
    if (t) {
        if (j(e.length)) {
            oe(e, function (i) {
                Fe(i, t)
            })
            return
        }
        if (e.classList) {
            e.classList.remove(t)
            return
        }
        e.className.indexOf(t) >= 0 &&
            (e.className = e.className.replace(t, ''))
    }
}
function vt(e, t, i) {
    if (t) {
        if (j(e.length)) {
            oe(e, function (a) {
                vt(a, t, i)
            })
            return
        }
        i ? pe(e, t) : Fe(e, t)
    }
}
var Op = /([a-z\d])([A-Z])/g
function xa(e) {
    return e.replace(Op, '$1-$2').toLowerCase()
}
function Ea(e, t) {
    return ot(e[t])
        ? e[t]
        : e.dataset
          ? e.dataset[t]
          : e.getAttribute('data-'.concat(xa(t)))
}
function Wt(e, t, i) {
    ot(i)
        ? (e[t] = i)
        : e.dataset
          ? (e.dataset[t] = i)
          : e.setAttribute('data-'.concat(xa(t)), i)
}
function Pp(e, t) {
    if (ot(e[t]))
        try {
            delete e[t]
        } catch {
            e[t] = void 0
        }
    else if (e.dataset)
        try {
            delete e.dataset[t]
        } catch {
            e.dataset[t] = void 0
        }
    else e.removeAttribute('data-'.concat(xa(t)))
}
var Fo = /\s\s*/,
    zo = (function () {
        var e = !1
        if (Ti) {
            var t = !1,
                i = function () {},
                a = Object.defineProperty({}, 'once', {
                    get: function () {
                        return (e = !0), t
                    },
                    set: function (o) {
                        t = o
                    },
                })
            ze.addEventListener('test', i, a),
                ze.removeEventListener('test', i, a)
        }
        return e
    })()
function De(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = i
    t.trim()
        .split(Fo)
        .forEach(function (o) {
            if (!zo) {
                var l = e.listeners
                l &&
                    l[o] &&
                    l[o][i] &&
                    ((n = l[o][i]),
                    delete l[o][i],
                    Object.keys(l[o]).length === 0 && delete l[o],
                    Object.keys(l).length === 0 && delete e.listeners)
            }
            e.removeEventListener(o, n, a)
        })
}
function Re(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        n = i
    t.trim()
        .split(Fo)
        .forEach(function (o) {
            if (a.once && !zo) {
                var l = e.listeners,
                    r = l === void 0 ? {} : l
                ;(n = function () {
                    delete r[o][i], e.removeEventListener(o, n, a)
                    for (
                        var p = arguments.length, c = new Array(p), d = 0;
                        d < p;
                        d++
                    )
                        c[d] = arguments[d]
                    i.apply(e, c)
                }),
                    r[o] || (r[o] = {}),
                    r[o][i] && e.removeEventListener(o, r[o][i], a),
                    (r[o][i] = n),
                    (e.listeners = r)
            }
            e.addEventListener(o, n, a)
        })
}
function yt(e, t, i) {
    var a
    return (
        Ee(Event) && Ee(CustomEvent)
            ? (a = new CustomEvent(t, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
              }))
            : ((a = document.createEvent('CustomEvent')),
              a.initCustomEvent(t, !0, !0, i)),
        e.dispatchEvent(a)
    )
}
function Co(e) {
    var t = e.getBoundingClientRect()
    return {
        left:
            t.left + (window.pageXOffset - document.documentElement.clientLeft),
        top: t.top + (window.pageYOffset - document.documentElement.clientTop),
    }
}
var ra = ze.location,
    Dp = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i
function vo(e) {
    var t = e.match(Dp)
    return (
        t !== null &&
        (t[1] !== ra.protocol || t[2] !== ra.hostname || t[3] !== ra.port)
    )
}
function xo(e) {
    var t = 'timestamp='.concat(new Date().getTime())
    return e + (e.indexOf('?') === -1 ? '?' : '&') + t
}
function Gt(e) {
    var t = e.rotate,
        i = e.scaleX,
        a = e.scaleY,
        n = e.translateX,
        o = e.translateY,
        l = []
    j(n) && n !== 0 && l.push('translateX('.concat(n, 'px)')),
        j(o) && o !== 0 && l.push('translateY('.concat(o, 'px)')),
        j(t) && t !== 0 && l.push('rotate('.concat(t, 'deg)')),
        j(i) && i !== 1 && l.push('scaleX('.concat(i, ')')),
        j(a) && a !== 1 && l.push('scaleY('.concat(a, ')'))
    var r = l.length ? l.join(' ') : 'none'
    return { WebkitTransform: r, msTransform: r, transform: r }
}
function Fp(e) {
    var t = yo({}, e),
        i = 0
    return (
        oe(e, function (a, n) {
            delete t[n],
                oe(t, function (o) {
                    var l = Math.abs(a.startX - o.startX),
                        r = Math.abs(a.startY - o.startY),
                        s = Math.abs(a.endX - o.endX),
                        p = Math.abs(a.endY - o.endY),
                        c = Math.sqrt(l * l + r * r),
                        d = Math.sqrt(s * s + p * p),
                        m = (d - c) / c
                    Math.abs(m) > Math.abs(i) && (i = m)
                })
        }),
        i
    )
}
function Ei(e, t) {
    var i = e.pageX,
        a = e.pageY,
        n = { endX: i, endY: a }
    return t ? n : yo({ startX: i, startY: a }, n)
}
function zp(e) {
    var t = 0,
        i = 0,
        a = 0
    return (
        oe(e, function (n) {
            var o = n.startX,
                l = n.startY
            ;(t += o), (i += l), (a += 1)
        }),
        (t /= a),
        (i /= a),
        { pageX: t, pageY: i }
    )
}
function qe(e) {
    var t = e.aspectRatio,
        i = e.height,
        a = e.width,
        n =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 'contain',
        o = Io(a),
        l = Io(i)
    if (o && l) {
        var r = i * t
        ;(n === 'contain' && r > a) || (n === 'cover' && r < a)
            ? (i = a / t)
            : (a = i * t)
    } else o ? (i = a / t) : l && (a = i * t)
    return { width: a, height: i }
}
function Cp(e) {
    var t = e.width,
        i = e.height,
        a = e.degree
    if (((a = Math.abs(a) % 180), a === 90)) return { width: i, height: t }
    var n = ((a % 90) * Math.PI) / 180,
        o = Math.sin(n),
        l = Math.cos(n),
        r = t * l + i * o,
        s = t * o + i * l
    return a > 90 ? { width: s, height: r } : { width: r, height: s }
}
function Np(e, t, i, a) {
    var n = t.aspectRatio,
        o = t.naturalWidth,
        l = t.naturalHeight,
        r = t.rotate,
        s = r === void 0 ? 0 : r,
        p = t.scaleX,
        c = p === void 0 ? 1 : p,
        d = t.scaleY,
        m = d === void 0 ? 1 : d,
        u = i.aspectRatio,
        f = i.naturalWidth,
        g = i.naturalHeight,
        h = a.fillColor,
        I = h === void 0 ? 'transparent' : h,
        E = a.imageSmoothingEnabled,
        T = E === void 0 ? !0 : E,
        v = a.imageSmoothingQuality,
        y = v === void 0 ? 'low' : v,
        b = a.maxWidth,
        w = b === void 0 ? 1 / 0 : b,
        x = a.maxHeight,
        _ = x === void 0 ? 1 / 0 : x,
        P = a.minWidth,
        O = P === void 0 ? 0 : P,
        M = a.minHeight,
        N = M === void 0 ? 0 : M,
        S = document.createElement('canvas'),
        D = S.getContext('2d'),
        R = qe({ aspectRatio: u, width: w, height: _ }),
        L = qe({ aspectRatio: u, width: O, height: N }, 'cover'),
        z = Math.min(R.width, Math.max(L.width, f)),
        F = Math.min(R.height, Math.max(L.height, g)),
        G = qe({ aspectRatio: n, width: w, height: _ }),
        C = qe({ aspectRatio: n, width: O, height: N }, 'cover'),
        Y = Math.min(G.width, Math.max(C.width, o)),
        X = Math.min(G.height, Math.max(C.height, l)),
        Q = [-Y / 2, -X / 2, Y, X]
    return (
        (S.width = xt(z)),
        (S.height = xt(F)),
        (D.fillStyle = I),
        D.fillRect(0, 0, z, F),
        D.save(),
        D.translate(z / 2, F / 2),
        D.rotate((s * Math.PI) / 180),
        D.scale(c, m),
        (D.imageSmoothingEnabled = T),
        (D.imageSmoothingQuality = y),
        D.drawImage.apply(
            D,
            [e].concat(
                Ro(
                    Q.map(function (le) {
                        return Math.floor(xt(le))
                    }),
                ),
            ),
        ),
        D.restore(),
        S
    )
}
var No = String.fromCharCode
function Bp(e, t, i) {
    var a = ''
    i += t
    for (var n = t; n < i; n += 1) a += No(e.getUint8(n))
    return a
}
var kp = /^data:.*,/
function Vp(e) {
    var t = e.replace(kp, ''),
        i = atob(t),
        a = new ArrayBuffer(i.length),
        n = new Uint8Array(a)
    return (
        oe(n, function (o, l) {
            n[l] = i.charCodeAt(l)
        }),
        a
    )
}
function Gp(e, t) {
    for (var i = [], a = 8192, n = new Uint8Array(e); n.length > 0; )
        i.push(No.apply(null, Do(n.subarray(0, a)))), (n = n.subarray(a))
    return 'data:'.concat(t, ';base64,').concat(btoa(i.join('')))
}
function Up(e) {
    var t = new DataView(e),
        i
    try {
        var a, n, o
        if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
            for (var l = t.byteLength, r = 2; r + 1 < l; ) {
                if (t.getUint8(r) === 255 && t.getUint8(r + 1) === 225) {
                    n = r
                    break
                }
                r += 1
            }
        if (n) {
            var s = n + 4,
                p = n + 10
            if (Bp(t, s, 4) === 'Exif') {
                var c = t.getUint16(p)
                if (
                    ((a = c === 18761),
                    (a || c === 19789) && t.getUint16(p + 2, a) === 42)
                ) {
                    var d = t.getUint32(p + 4, a)
                    d >= 8 && (o = p + d)
                }
            }
        }
        if (o) {
            var m = t.getUint16(o, a),
                u,
                f
            for (f = 0; f < m; f += 1)
                if (((u = o + f * 12 + 2), t.getUint16(u, a) === 274)) {
                    ;(u += 8), (i = t.getUint16(u, a)), t.setUint16(u, 1, a)
                    break
                }
        }
    } catch {
        i = 1
    }
    return i
}
function Wp(e) {
    var t = 0,
        i = 1,
        a = 1
    switch (e) {
        case 2:
            i = -1
            break
        case 3:
            t = -180
            break
        case 4:
            a = -1
            break
        case 5:
            ;(t = 90), (a = -1)
            break
        case 6:
            t = 90
            break
        case 7:
            ;(t = 90), (i = -1)
            break
        case 8:
            t = -90
            break
    }
    return { rotate: t, scaleX: i, scaleY: a }
}
var Hp = {
        render: function () {
            this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()
        },
        initContainer: function () {
            var t = this.element,
                i = this.options,
                a = this.container,
                n = this.cropper,
                o = Number(i.minContainerWidth),
                l = Number(i.minContainerHeight)
            pe(n, be), Fe(t, be)
            var r = {
                width: Math.max(a.offsetWidth, o >= 0 ? o : Oo),
                height: Math.max(a.offsetHeight, l >= 0 ? l : Po),
            }
            ;(this.containerData = r),
                je(n, { width: r.width, height: r.height }),
                pe(t, be),
                Fe(n, be)
        },
        initCanvas: function () {
            var t = this.containerData,
                i = this.imageData,
                a = this.options.viewMode,
                n = Math.abs(i.rotate) % 180 === 90,
                o = n ? i.naturalHeight : i.naturalWidth,
                l = n ? i.naturalWidth : i.naturalHeight,
                r = o / l,
                s = t.width,
                p = t.height
            t.height * r > t.width
                ? a === 3
                    ? (s = t.height * r)
                    : (p = t.width / r)
                : a === 3
                  ? (p = t.width / r)
                  : (s = t.height * r)
            var c = {
                aspectRatio: r,
                naturalWidth: o,
                naturalHeight: l,
                width: s,
                height: p,
            }
            ;(this.canvasData = c),
                (this.limited = a === 1 || a === 2),
                this.limitCanvas(!0, !0),
                (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
                (c.height = Math.min(
                    Math.max(c.height, c.minHeight),
                    c.maxHeight,
                )),
                (c.left = (t.width - c.width) / 2),
                (c.top = (t.height - c.height) / 2),
                (c.oldLeft = c.left),
                (c.oldTop = c.top),
                (this.initialCanvasData = J({}, c))
        },
        limitCanvas: function (t, i) {
            var a = this.options,
                n = this.containerData,
                o = this.canvasData,
                l = this.cropBoxData,
                r = a.viewMode,
                s = o.aspectRatio,
                p = this.cropped && l
            if (t) {
                var c = Number(a.minCanvasWidth) || 0,
                    d = Number(a.minCanvasHeight) || 0
                r > 1
                    ? ((c = Math.max(c, n.width)),
                      (d = Math.max(d, n.height)),
                      r === 3 && (d * s > c ? (c = d * s) : (d = c / s)))
                    : r > 0 &&
                      (c
                          ? (c = Math.max(c, p ? l.width : 0))
                          : d
                            ? (d = Math.max(d, p ? l.height : 0))
                            : p &&
                              ((c = l.width),
                              (d = l.height),
                              d * s > c ? (c = d * s) : (d = c / s)))
                var m = qe({ aspectRatio: s, width: c, height: d })
                ;(c = m.width),
                    (d = m.height),
                    (o.minWidth = c),
                    (o.minHeight = d),
                    (o.maxWidth = 1 / 0),
                    (o.maxHeight = 1 / 0)
            }
            if (i)
                if (r > (p ? 0 : 1)) {
                    var u = n.width - o.width,
                        f = n.height - o.height
                    ;(o.minLeft = Math.min(0, u)),
                        (o.minTop = Math.min(0, f)),
                        (o.maxLeft = Math.max(0, u)),
                        (o.maxTop = Math.max(0, f)),
                        p &&
                            this.limited &&
                            ((o.minLeft = Math.min(
                                l.left,
                                l.left + (l.width - o.width),
                            )),
                            (o.minTop = Math.min(
                                l.top,
                                l.top + (l.height - o.height),
                            )),
                            (o.maxLeft = l.left),
                            (o.maxTop = l.top),
                            r === 2 &&
                                (o.width >= n.width &&
                                    ((o.minLeft = Math.min(0, u)),
                                    (o.maxLeft = Math.max(0, u))),
                                o.height >= n.height &&
                                    ((o.minTop = Math.min(0, f)),
                                    (o.maxTop = Math.max(0, f)))))
                } else
                    (o.minLeft = -o.width),
                        (o.minTop = -o.height),
                        (o.maxLeft = n.width),
                        (o.maxTop = n.height)
        },
        renderCanvas: function (t, i) {
            var a = this.canvasData,
                n = this.imageData
            if (i) {
                var o = Cp({
                        width: n.naturalWidth * Math.abs(n.scaleX || 1),
                        height: n.naturalHeight * Math.abs(n.scaleY || 1),
                        degree: n.rotate || 0,
                    }),
                    l = o.width,
                    r = o.height,
                    s = a.width * (l / a.naturalWidth),
                    p = a.height * (r / a.naturalHeight)
                ;(a.left -= (s - a.width) / 2),
                    (a.top -= (p - a.height) / 2),
                    (a.width = s),
                    (a.height = p),
                    (a.aspectRatio = l / r),
                    (a.naturalWidth = l),
                    (a.naturalHeight = r),
                    this.limitCanvas(!0, !1)
            }
            ;(a.width > a.maxWidth || a.width < a.minWidth) &&
                (a.left = a.oldLeft),
                (a.height > a.maxHeight || a.height < a.minHeight) &&
                    (a.top = a.oldTop),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(
                    Math.max(a.height, a.minHeight),
                    a.maxHeight,
                )),
                this.limitCanvas(!1, !0),
                (a.left = Math.min(Math.max(a.left, a.minLeft), a.maxLeft)),
                (a.top = Math.min(Math.max(a.top, a.minTop), a.maxTop)),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                je(
                    this.canvas,
                    J(
                        { width: a.width, height: a.height },
                        Gt({ translateX: a.left, translateY: a.top }),
                    ),
                ),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0)
        },
        renderImage: function (t) {
            var i = this.canvasData,
                a = this.imageData,
                n = a.naturalWidth * (i.width / i.naturalWidth),
                o = a.naturalHeight * (i.height / i.naturalHeight)
            J(a, {
                width: n,
                height: o,
                left: (i.width - n) / 2,
                top: (i.height - o) / 2,
            }),
                je(
                    this.image,
                    J(
                        { width: a.width, height: a.height },
                        Gt(J({ translateX: a.left, translateY: a.top }, a)),
                    ),
                ),
                t && this.output()
        },
        initCropBox: function () {
            var t = this.options,
                i = this.canvasData,
                a = t.aspectRatio || t.initialAspectRatio,
                n = Number(t.autoCropArea) || 0.8,
                o = { width: i.width, height: i.height }
            a &&
                (i.height * a > i.width
                    ? (o.height = o.width / a)
                    : (o.width = o.height * a)),
                (this.cropBoxData = o),
                this.limitCropBox(!0, !0),
                (o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth)),
                (o.height = Math.min(
                    Math.max(o.height, o.minHeight),
                    o.maxHeight,
                )),
                (o.width = Math.max(o.minWidth, o.width * n)),
                (o.height = Math.max(o.minHeight, o.height * n)),
                (o.left = i.left + (i.width - o.width) / 2),
                (o.top = i.top + (i.height - o.height) / 2),
                (o.oldLeft = o.left),
                (o.oldTop = o.top),
                (this.initialCropBoxData = J({}, o))
        },
        limitCropBox: function (t, i) {
            var a = this.options,
                n = this.containerData,
                o = this.canvasData,
                l = this.cropBoxData,
                r = this.limited,
                s = a.aspectRatio
            if (t) {
                var p = Number(a.minCropBoxWidth) || 0,
                    c = Number(a.minCropBoxHeight) || 0,
                    d = r
                        ? Math.min(
                              n.width,
                              o.width,
                              o.width + o.left,
                              n.width - o.left,
                          )
                        : n.width,
                    m = r
                        ? Math.min(
                              n.height,
                              o.height,
                              o.height + o.top,
                              n.height - o.top,
                          )
                        : n.height
                ;(p = Math.min(p, n.width)),
                    (c = Math.min(c, n.height)),
                    s &&
                        (p && c
                            ? c * s > p
                                ? (c = p / s)
                                : (p = c * s)
                            : p
                              ? (c = p / s)
                              : c && (p = c * s),
                        m * s > d ? (m = d / s) : (d = m * s)),
                    (l.minWidth = Math.min(p, d)),
                    (l.minHeight = Math.min(c, m)),
                    (l.maxWidth = d),
                    (l.maxHeight = m)
            }
            i &&
                (r
                    ? ((l.minLeft = Math.max(0, o.left)),
                      (l.minTop = Math.max(0, o.top)),
                      (l.maxLeft =
                          Math.min(n.width, o.left + o.width) - l.width),
                      (l.maxTop =
                          Math.min(n.height, o.top + o.height) - l.height))
                    : ((l.minLeft = 0),
                      (l.minTop = 0),
                      (l.maxLeft = n.width - l.width),
                      (l.maxTop = n.height - l.height)))
        },
        renderCropBox: function () {
            var t = this.options,
                i = this.containerData,
                a = this.cropBoxData
            ;(a.width > a.maxWidth || a.width < a.minWidth) &&
                (a.left = a.oldLeft),
                (a.height > a.maxHeight || a.height < a.minHeight) &&
                    (a.top = a.oldTop),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(
                    Math.max(a.height, a.minHeight),
                    a.maxHeight,
                )),
                this.limitCropBox(!1, !0),
                (a.left = Math.min(Math.max(a.left, a.minLeft), a.maxLeft)),
                (a.top = Math.min(Math.max(a.top, a.minTop), a.maxTop)),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                t.movable &&
                    t.cropBoxMovable &&
                    Wt(
                        this.face,
                        Ut,
                        a.width >= i.width && a.height >= i.height ? So : Ia,
                    ),
                je(
                    this.cropBox,
                    J(
                        { width: a.width, height: a.height },
                        Gt({ translateX: a.left, translateY: a.top }),
                    ),
                ),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output()
        },
        output: function () {
            this.preview(), yt(this.element, ma, this.getData())
        },
    },
    jp = {
        initPreview: function () {
            var t = this.element,
                i = this.crossOrigin,
                a = this.options.preview,
                n = i ? this.crossOriginUrl : this.url,
                o = t.alt || 'The image to preview',
                l = document.createElement('img')
            if (
                (i && (l.crossOrigin = i),
                (l.src = n),
                (l.alt = o),
                this.viewBox.appendChild(l),
                (this.viewBoxImage = l),
                !!a)
            ) {
                var r = a
                typeof a == 'string'
                    ? (r = t.ownerDocument.querySelectorAll(a))
                    : a.querySelector && (r = [a]),
                    (this.previews = r),
                    oe(r, function (s) {
                        var p = document.createElement('img')
                        Wt(s, hi, {
                            width: s.offsetWidth,
                            height: s.offsetHeight,
                            html: s.innerHTML,
                        }),
                            i && (p.crossOrigin = i),
                            (p.src = n),
                            (p.alt = o),
                            (p.style.cssText =
                                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                            (s.innerHTML = ''),
                            s.appendChild(p)
                    })
            }
        },
        resetPreview: function () {
            oe(this.previews, function (t) {
                var i = Ea(t, hi)
                je(t, { width: i.width, height: i.height }),
                    (t.innerHTML = i.html),
                    Pp(t, hi)
            })
        },
        preview: function () {
            var t = this.imageData,
                i = this.canvasData,
                a = this.cropBoxData,
                n = a.width,
                o = a.height,
                l = t.width,
                r = t.height,
                s = a.left - i.left - t.left,
                p = a.top - i.top - t.top
            !this.cropped ||
                this.disabled ||
                (je(
                    this.viewBoxImage,
                    J(
                        { width: l, height: r },
                        Gt(J({ translateX: -s, translateY: -p }, t)),
                    ),
                ),
                oe(this.previews, function (c) {
                    var d = Ea(c, hi),
                        m = d.width,
                        u = d.height,
                        f = m,
                        g = u,
                        h = 1
                    n && ((h = m / n), (g = o * h)),
                        o && g > u && ((h = u / o), (f = n * h), (g = u)),
                        je(c, { width: f, height: g }),
                        je(
                            c.getElementsByTagName('img')[0],
                            J(
                                { width: l * h, height: r * h },
                                Gt(
                                    J(
                                        {
                                            translateX: -s * h,
                                            translateY: -p * h,
                                        },
                                        t,
                                    ),
                                ),
                            ),
                        )
                }))
        },
    },
    qp = {
        bind: function () {
            var t = this.element,
                i = this.options,
                a = this.cropper
            Ee(i.cropstart) && Re(t, ga, i.cropstart),
                Ee(i.cropmove) && Re(t, fa, i.cropmove),
                Ee(i.cropend) && Re(t, ua, i.cropend),
                Ee(i.crop) && Re(t, ma, i.crop),
                Ee(i.zoom) && Re(t, ha, i.zoom),
                Re(a, mo, (this.onCropStart = this.cropStart.bind(this))),
                i.zoomable &&
                    i.zoomOnWheel &&
                    Re(a, Eo, (this.onWheel = this.wheel.bind(this)), {
                        passive: !1,
                        capture: !0,
                    }),
                i.toggleDragModeOnDblclick &&
                    Re(a, po, (this.onDblclick = this.dblclick.bind(this))),
                Re(
                    t.ownerDocument,
                    uo,
                    (this.onCropMove = this.cropMove.bind(this)),
                ),
                Re(
                    t.ownerDocument,
                    fo,
                    (this.onCropEnd = this.cropEnd.bind(this)),
                ),
                i.responsive &&
                    Re(window, ho, (this.onResize = this.resize.bind(this)))
        },
        unbind: function () {
            var t = this.element,
                i = this.options,
                a = this.cropper
            Ee(i.cropstart) && De(t, ga, i.cropstart),
                Ee(i.cropmove) && De(t, fa, i.cropmove),
                Ee(i.cropend) && De(t, ua, i.cropend),
                Ee(i.crop) && De(t, ma, i.crop),
                Ee(i.zoom) && De(t, ha, i.zoom),
                De(a, mo, this.onCropStart),
                i.zoomable &&
                    i.zoomOnWheel &&
                    De(a, Eo, this.onWheel, { passive: !1, capture: !0 }),
                i.toggleDragModeOnDblclick && De(a, po, this.onDblclick),
                De(t.ownerDocument, uo, this.onCropMove),
                De(t.ownerDocument, fo, this.onCropEnd),
                i.responsive && De(window, ho, this.onResize)
        },
    },
    Yp = {
        resize: function () {
            if (!this.disabled) {
                var t = this.options,
                    i = this.container,
                    a = this.containerData,
                    n = i.offsetWidth / a.width,
                    o = i.offsetHeight / a.height,
                    l = Math.abs(n - 1) > Math.abs(o - 1) ? n : o
                if (l !== 1) {
                    var r, s
                    t.restore &&
                        ((r = this.getCanvasData()),
                        (s = this.getCropBoxData())),
                        this.render(),
                        t.restore &&
                            (this.setCanvasData(
                                oe(r, function (p, c) {
                                    r[c] = p * l
                                }),
                            ),
                            this.setCropBoxData(
                                oe(s, function (p, c) {
                                    s[c] = p * l
                                }),
                            ))
                }
            }
        },
        dblclick: function () {
            this.disabled ||
                this.options.dragMode === Mo ||
                this.setDragMode(Mp(this.dragBox, da) ? Ao : va)
        },
        wheel: function (t) {
            var i = this,
                a = Number(this.options.wheelZoomRatio) || 0.1,
                n = 1
            this.disabled ||
                (t.preventDefault(),
                !this.wheeling &&
                    ((this.wheeling = !0),
                    setTimeout(function () {
                        i.wheeling = !1
                    }, 50),
                    t.deltaY
                        ? (n = t.deltaY > 0 ? 1 : -1)
                        : t.wheelDelta
                          ? (n = -t.wheelDelta / 120)
                          : t.detail && (n = t.detail > 0 ? 1 : -1),
                    this.zoom(-n * a, t)))
        },
        cropStart: function (t) {
            var i = t.buttons,
                a = t.button
            if (
                !(
                    this.disabled ||
                    ((t.type === 'mousedown' ||
                        (t.type === 'pointerdown' &&
                            t.pointerType === 'mouse')) &&
                        ((j(i) && i !== 1) || (j(a) && a !== 0) || t.ctrlKey))
                )
            ) {
                var n = this.options,
                    o = this.pointers,
                    l
                t.changedTouches
                    ? oe(t.changedTouches, function (r) {
                          o[r.identifier] = Ei(r)
                      })
                    : (o[t.pointerId || 0] = Ei(t)),
                    Object.keys(o).length > 1 && n.zoomable && n.zoomOnTouch
                        ? (l = Lo)
                        : (l = Ea(t.target, Ut)),
                    Ip.test(l) &&
                        yt(this.element, ga, {
                            originalEvent: t,
                            action: l,
                        }) !== !1 &&
                        (t.preventDefault(),
                        (this.action = l),
                        (this.cropping = !1),
                        l === wo &&
                            ((this.cropping = !0), pe(this.dragBox, bi)))
            }
        },
        cropMove: function (t) {
            var i = this.action
            if (!(this.disabled || !i)) {
                var a = this.pointers
                t.preventDefault(),
                    yt(this.element, fa, { originalEvent: t, action: i }) !==
                        !1 &&
                        (t.changedTouches
                            ? oe(t.changedTouches, function (n) {
                                  J(a[n.identifier] || {}, Ei(n, !0))
                              })
                            : J(a[t.pointerId || 0] || {}, Ei(t, !0)),
                        this.change(t))
            }
        },
        cropEnd: function (t) {
            if (!this.disabled) {
                var i = this.action,
                    a = this.pointers
                t.changedTouches
                    ? oe(t.changedTouches, function (n) {
                          delete a[n.identifier]
                      })
                    : delete a[t.pointerId || 0],
                    i &&
                        (t.preventDefault(),
                        Object.keys(a).length || (this.action = ''),
                        this.cropping &&
                            ((this.cropping = !1),
                            vt(
                                this.dragBox,
                                bi,
                                this.cropped && this.options.modal,
                            )),
                        yt(this.element, ua, { originalEvent: t, action: i }))
            }
        },
    },
    $p = {
        change: function (t) {
            var i = this.options,
                a = this.canvasData,
                n = this.containerData,
                o = this.cropBoxData,
                l = this.pointers,
                r = this.action,
                s = i.aspectRatio,
                p = o.left,
                c = o.top,
                d = o.width,
                m = o.height,
                u = p + d,
                f = c + m,
                g = 0,
                h = 0,
                I = n.width,
                E = n.height,
                T = !0,
                v
            !s && t.shiftKey && (s = d && m ? d / m : 1),
                this.limited &&
                    ((g = o.minLeft),
                    (h = o.minTop),
                    (I = g + Math.min(n.width, a.width, a.left + a.width)),
                    (E = h + Math.min(n.height, a.height, a.top + a.height)))
            var y = l[Object.keys(l)[0]],
                b = { x: y.endX - y.startX, y: y.endY - y.startY },
                w = function (_) {
                    switch (_) {
                        case at:
                            u + b.x > I && (b.x = I - u)
                            break
                        case nt:
                            p + b.x < g && (b.x = g - p)
                            break
                        case He:
                            c + b.y < h && (b.y = h - c)
                            break
                        case Tt:
                            f + b.y > E && (b.y = E - f)
                            break
                    }
                }
            switch (r) {
                case Ia:
                    ;(p += b.x), (c += b.y)
                    break
                case at:
                    if (b.x >= 0 && (u >= I || (s && (c <= h || f >= E)))) {
                        T = !1
                        break
                    }
                    w(at),
                        (d += b.x),
                        d < 0 && ((r = nt), (d = -d), (p -= d)),
                        s && ((m = d / s), (c += (o.height - m) / 2))
                    break
                case He:
                    if (b.y <= 0 && (c <= h || (s && (p <= g || u >= I)))) {
                        T = !1
                        break
                    }
                    w(He),
                        (m -= b.y),
                        (c += b.y),
                        m < 0 && ((r = Tt), (m = -m), (c -= m)),
                        s && ((d = m * s), (p += (o.width - d) / 2))
                    break
                case nt:
                    if (b.x <= 0 && (p <= g || (s && (c <= h || f >= E)))) {
                        T = !1
                        break
                    }
                    w(nt),
                        (d -= b.x),
                        (p += b.x),
                        d < 0 && ((r = at), (d = -d), (p -= d)),
                        s && ((m = d / s), (c += (o.height - m) / 2))
                    break
                case Tt:
                    if (b.y >= 0 && (f >= E || (s && (p <= g || u >= I)))) {
                        T = !1
                        break
                    }
                    w(Tt),
                        (m += b.y),
                        m < 0 && ((r = He), (m = -m), (c -= m)),
                        s && ((d = m * s), (p += (o.width - d) / 2))
                    break
                case Nt:
                    if (s) {
                        if (b.y <= 0 && (c <= h || u >= I)) {
                            T = !1
                            break
                        }
                        w(He), (m -= b.y), (c += b.y), (d = m * s)
                    } else
                        w(He),
                            w(at),
                            b.x >= 0
                                ? u < I
                                    ? (d += b.x)
                                    : b.y <= 0 && c <= h && (T = !1)
                                : (d += b.x),
                            b.y <= 0
                                ? c > h && ((m -= b.y), (c += b.y))
                                : ((m -= b.y), (c += b.y))
                    d < 0 && m < 0
                        ? ((r = Vt), (m = -m), (d = -d), (c -= m), (p -= d))
                        : d < 0
                          ? ((r = Bt), (d = -d), (p -= d))
                          : m < 0 && ((r = kt), (m = -m), (c -= m))
                    break
                case Bt:
                    if (s) {
                        if (b.y <= 0 && (c <= h || p <= g)) {
                            T = !1
                            break
                        }
                        w(He),
                            (m -= b.y),
                            (c += b.y),
                            (d = m * s),
                            (p += o.width - d)
                    } else
                        w(He),
                            w(nt),
                            b.x <= 0
                                ? p > g
                                    ? ((d -= b.x), (p += b.x))
                                    : b.y <= 0 && c <= h && (T = !1)
                                : ((d -= b.x), (p += b.x)),
                            b.y <= 0
                                ? c > h && ((m -= b.y), (c += b.y))
                                : ((m -= b.y), (c += b.y))
                    d < 0 && m < 0
                        ? ((r = kt), (m = -m), (d = -d), (c -= m), (p -= d))
                        : d < 0
                          ? ((r = Nt), (d = -d), (p -= d))
                          : m < 0 && ((r = Vt), (m = -m), (c -= m))
                    break
                case Vt:
                    if (s) {
                        if (b.x <= 0 && (p <= g || f >= E)) {
                            T = !1
                            break
                        }
                        w(nt), (d -= b.x), (p += b.x), (m = d / s)
                    } else
                        w(Tt),
                            w(nt),
                            b.x <= 0
                                ? p > g
                                    ? ((d -= b.x), (p += b.x))
                                    : b.y >= 0 && f >= E && (T = !1)
                                : ((d -= b.x), (p += b.x)),
                            b.y >= 0 ? f < E && (m += b.y) : (m += b.y)
                    d < 0 && m < 0
                        ? ((r = Nt), (m = -m), (d = -d), (c -= m), (p -= d))
                        : d < 0
                          ? ((r = kt), (d = -d), (p -= d))
                          : m < 0 && ((r = Bt), (m = -m), (c -= m))
                    break
                case kt:
                    if (s) {
                        if (b.x >= 0 && (u >= I || f >= E)) {
                            T = !1
                            break
                        }
                        w(at), (d += b.x), (m = d / s)
                    } else
                        w(Tt),
                            w(at),
                            b.x >= 0
                                ? u < I
                                    ? (d += b.x)
                                    : b.y >= 0 && f >= E && (T = !1)
                                : (d += b.x),
                            b.y >= 0 ? f < E && (m += b.y) : (m += b.y)
                    d < 0 && m < 0
                        ? ((r = Bt), (m = -m), (d = -d), (c -= m), (p -= d))
                        : d < 0
                          ? ((r = Vt), (d = -d), (p -= d))
                          : m < 0 && ((r = Nt), (m = -m), (c -= m))
                    break
                case So:
                    this.move(b.x, b.y), (T = !1)
                    break
                case Lo:
                    this.zoom(Fp(l), t), (T = !1)
                    break
                case wo:
                    if (!b.x || !b.y) {
                        T = !1
                        break
                    }
                    ;(v = Co(this.cropper)),
                        (p = y.startX - v.left),
                        (c = y.startY - v.top),
                        (d = o.minWidth),
                        (m = o.minHeight),
                        b.x > 0
                            ? (r = b.y > 0 ? kt : Nt)
                            : b.x < 0 && ((p -= d), (r = b.y > 0 ? Vt : Bt)),
                        b.y < 0 && (c -= m),
                        this.cropped ||
                            (Fe(this.cropBox, be),
                            (this.cropped = !0),
                            this.limited && this.limitCropBox(!0, !0))
                    break
            }
            T &&
                ((o.width = d),
                (o.height = m),
                (o.left = p),
                (o.top = c),
                (this.action = r),
                this.renderCropBox()),
                oe(l, function (x) {
                    ;(x.startX = x.endX), (x.startY = x.endY)
                })
        },
    },
    Xp = {
        crop: function () {
            return (
                this.ready &&
                    !this.cropped &&
                    !this.disabled &&
                    ((this.cropped = !0),
                    this.limitCropBox(!0, !0),
                    this.options.modal && pe(this.dragBox, bi),
                    Fe(this.cropBox, be),
                    this.setCropBoxData(this.initialCropBoxData)),
                this
            )
        },
        reset: function () {
            return (
                this.ready &&
                    !this.disabled &&
                    ((this.imageData = J({}, this.initialImageData)),
                    (this.canvasData = J({}, this.initialCanvasData)),
                    (this.cropBoxData = J({}, this.initialCropBoxData)),
                    this.renderCanvas(),
                    this.cropped && this.renderCropBox()),
                this
            )
        },
        clear: function () {
            return (
                this.cropped &&
                    !this.disabled &&
                    (J(this.cropBoxData, {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                    }),
                    (this.cropped = !1),
                    this.renderCropBox(),
                    this.limitCanvas(!0, !0),
                    this.renderCanvas(),
                    Fe(this.dragBox, bi),
                    pe(this.cropBox, be)),
                this
            )
        },
        replace: function (t) {
            var i =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !1
            return (
                !this.disabled &&
                    t &&
                    (this.isImg && (this.element.src = t),
                    i
                        ? ((this.url = t),
                          (this.image.src = t),
                          this.ready &&
                              ((this.viewBoxImage.src = t),
                              oe(this.previews, function (a) {
                                  a.getElementsByTagName('img')[0].src = t
                              })))
                        : (this.isImg && (this.replaced = !0),
                          (this.options.data = null),
                          this.uncreate(),
                          this.load(t))),
                this
            )
        },
        enable: function () {
            return (
                this.ready &&
                    this.disabled &&
                    ((this.disabled = !1), Fe(this.cropper, so)),
                this
            )
        },
        disable: function () {
            return (
                this.ready &&
                    !this.disabled &&
                    ((this.disabled = !0), pe(this.cropper, so)),
                this
            )
        },
        destroy: function () {
            var t = this.element
            return t[K]
                ? ((t[K] = void 0),
                  this.isImg && this.replaced && (t.src = this.originalUrl),
                  this.uncreate(),
                  this)
                : this
        },
        move: function (t) {
            var i =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : t,
                a = this.canvasData,
                n = a.left,
                o = a.top
            return this.moveTo(
                la(t) ? t : n + Number(t),
                la(i) ? i : o + Number(i),
            )
        },
        moveTo: function (t) {
            var i =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : t,
                a = this.canvasData,
                n = !1
            return (
                (t = Number(t)),
                (i = Number(i)),
                this.ready &&
                    !this.disabled &&
                    this.options.movable &&
                    (j(t) && ((a.left = t), (n = !0)),
                    j(i) && ((a.top = i), (n = !0)),
                    n && this.renderCanvas(!0)),
                this
            )
        },
        zoom: function (t, i) {
            var a = this.canvasData
            return (
                (t = Number(t)),
                t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
                this.zoomTo((a.width * t) / a.naturalWidth, null, i)
            )
        },
        zoomTo: function (t, i, a) {
            var n = this.options,
                o = this.canvasData,
                l = o.width,
                r = o.height,
                s = o.naturalWidth,
                p = o.naturalHeight
            if (
                ((t = Number(t)),
                t >= 0 && this.ready && !this.disabled && n.zoomable)
            ) {
                var c = s * t,
                    d = p * t
                if (
                    yt(this.element, ha, {
                        ratio: t,
                        oldRatio: l / s,
                        originalEvent: a,
                    }) === !1
                )
                    return this
                if (a) {
                    var m = this.pointers,
                        u = Co(this.cropper),
                        f =
                            m && Object.keys(m).length
                                ? zp(m)
                                : { pageX: a.pageX, pageY: a.pageY }
                    ;(o.left -= (c - l) * ((f.pageX - u.left - o.left) / l)),
                        (o.top -= (d - r) * ((f.pageY - u.top - o.top) / r))
                } else
                    It(i) && j(i.x) && j(i.y)
                        ? ((o.left -= (c - l) * ((i.x - o.left) / l)),
                          (o.top -= (d - r) * ((i.y - o.top) / r)))
                        : ((o.left -= (c - l) / 2), (o.top -= (d - r) / 2))
                ;(o.width = c), (o.height = d), this.renderCanvas(!0)
            }
            return this
        },
        rotate: function (t) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(t))
        },
        rotateTo: function (t) {
            return (
                (t = Number(t)),
                j(t) &&
                    this.ready &&
                    !this.disabled &&
                    this.options.rotatable &&
                    ((this.imageData.rotate = t % 360),
                    this.renderCanvas(!0, !0)),
                this
            )
        },
        scaleX: function (t) {
            var i = this.imageData.scaleY
            return this.scale(t, j(i) ? i : 1)
        },
        scaleY: function (t) {
            var i = this.imageData.scaleX
            return this.scale(j(i) ? i : 1, t)
        },
        scale: function (t) {
            var i =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : t,
                a = this.imageData,
                n = !1
            return (
                (t = Number(t)),
                (i = Number(i)),
                this.ready &&
                    !this.disabled &&
                    this.options.scalable &&
                    (j(t) && ((a.scaleX = t), (n = !0)),
                    j(i) && ((a.scaleY = i), (n = !0)),
                    n && this.renderCanvas(!0, !0)),
                this
            )
        },
        getData: function () {
            var t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : !1,
                i = this.options,
                a = this.imageData,
                n = this.canvasData,
                o = this.cropBoxData,
                l
            if (this.ready && this.cropped) {
                l = {
                    x: o.left - n.left,
                    y: o.top - n.top,
                    width: o.width,
                    height: o.height,
                }
                var r = a.width / a.naturalWidth
                if (
                    (oe(l, function (c, d) {
                        l[d] = c / r
                    }),
                    t)
                ) {
                    var s = Math.round(l.y + l.height),
                        p = Math.round(l.x + l.width)
                    ;(l.x = Math.round(l.x)),
                        (l.y = Math.round(l.y)),
                        (l.width = p - l.x),
                        (l.height = s - l.y)
                }
            } else l = { x: 0, y: 0, width: 0, height: 0 }
            return (
                i.rotatable && (l.rotate = a.rotate || 0),
                i.scalable &&
                    ((l.scaleX = a.scaleX || 1), (l.scaleY = a.scaleY || 1)),
                l
            )
        },
        setData: function (t) {
            var i = this.options,
                a = this.imageData,
                n = this.canvasData,
                o = {}
            if (this.ready && !this.disabled && It(t)) {
                var l = !1
                i.rotatable &&
                    j(t.rotate) &&
                    t.rotate !== a.rotate &&
                    ((a.rotate = t.rotate), (l = !0)),
                    i.scalable &&
                        (j(t.scaleX) &&
                            t.scaleX !== a.scaleX &&
                            ((a.scaleX = t.scaleX), (l = !0)),
                        j(t.scaleY) &&
                            t.scaleY !== a.scaleY &&
                            ((a.scaleY = t.scaleY), (l = !0))),
                    l && this.renderCanvas(!0, !0)
                var r = a.width / a.naturalWidth
                j(t.x) && (o.left = t.x * r + n.left),
                    j(t.y) && (o.top = t.y * r + n.top),
                    j(t.width) && (o.width = t.width * r),
                    j(t.height) && (o.height = t.height * r),
                    this.setCropBoxData(o)
            }
            return this
        },
        getContainerData: function () {
            return this.ready ? J({}, this.containerData) : {}
        },
        getImageData: function () {
            return this.sized ? J({}, this.imageData) : {}
        },
        getCanvasData: function () {
            var t = this.canvasData,
                i = {}
            return (
                this.ready &&
                    oe(
                        [
                            'left',
                            'top',
                            'width',
                            'height',
                            'naturalWidth',
                            'naturalHeight',
                        ],
                        function (a) {
                            i[a] = t[a]
                        },
                    ),
                i
            )
        },
        setCanvasData: function (t) {
            var i = this.canvasData,
                a = i.aspectRatio
            return (
                this.ready &&
                    !this.disabled &&
                    It(t) &&
                    (j(t.left) && (i.left = t.left),
                    j(t.top) && (i.top = t.top),
                    j(t.width)
                        ? ((i.width = t.width), (i.height = t.width / a))
                        : j(t.height) &&
                          ((i.height = t.height), (i.width = t.height * a)),
                    this.renderCanvas(!0)),
                this
            )
        },
        getCropBoxData: function () {
            var t = this.cropBoxData,
                i
            return (
                this.ready &&
                    this.cropped &&
                    (i = {
                        left: t.left,
                        top: t.top,
                        width: t.width,
                        height: t.height,
                    }),
                i || {}
            )
        },
        setCropBoxData: function (t) {
            var i = this.cropBoxData,
                a = this.options.aspectRatio,
                n,
                o
            return (
                this.ready &&
                    this.cropped &&
                    !this.disabled &&
                    It(t) &&
                    (j(t.left) && (i.left = t.left),
                    j(t.top) && (i.top = t.top),
                    j(t.width) &&
                        t.width !== i.width &&
                        ((n = !0), (i.width = t.width)),
                    j(t.height) &&
                        t.height !== i.height &&
                        ((o = !0), (i.height = t.height)),
                    a &&
                        (n
                            ? (i.height = i.width / a)
                            : o && (i.width = i.height * a)),
                    this.renderCropBox()),
                this
            )
        },
        getCroppedCanvas: function () {
            var t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {}
            if (!this.ready || !window.HTMLCanvasElement) return null
            var i = this.canvasData,
                a = Np(this.image, this.imageData, i, t)
            if (!this.cropped) return a
            var n = this.getData(t.rounded),
                o = n.x,
                l = n.y,
                r = n.width,
                s = n.height,
                p = a.width / Math.floor(i.naturalWidth)
            p !== 1 && ((o *= p), (l *= p), (r *= p), (s *= p))
            var c = r / s,
                d = qe({
                    aspectRatio: c,
                    width: t.maxWidth || 1 / 0,
                    height: t.maxHeight || 1 / 0,
                }),
                m = qe(
                    {
                        aspectRatio: c,
                        width: t.minWidth || 0,
                        height: t.minHeight || 0,
                    },
                    'cover',
                ),
                u = qe({
                    aspectRatio: c,
                    width: t.width || (p !== 1 ? a.width : r),
                    height: t.height || (p !== 1 ? a.height : s),
                }),
                f = u.width,
                g = u.height
            ;(f = Math.min(d.width, Math.max(m.width, f))),
                (g = Math.min(d.height, Math.max(m.height, g)))
            var h = document.createElement('canvas'),
                I = h.getContext('2d')
            ;(h.width = xt(f)),
                (h.height = xt(g)),
                (I.fillStyle = t.fillColor || 'transparent'),
                I.fillRect(0, 0, f, g)
            var E = t.imageSmoothingEnabled,
                T = E === void 0 ? !0 : E,
                v = t.imageSmoothingQuality
            ;(I.imageSmoothingEnabled = T), v && (I.imageSmoothingQuality = v)
            var y = a.width,
                b = a.height,
                w = o,
                x = l,
                _,
                P,
                O,
                M,
                N,
                S
            w <= -r || w > y
                ? ((w = 0), (_ = 0), (O = 0), (N = 0))
                : w <= 0
                  ? ((O = -w), (w = 0), (_ = Math.min(y, r + w)), (N = _))
                  : w <= y && ((O = 0), (_ = Math.min(r, y - w)), (N = _)),
                _ <= 0 || x <= -s || x > b
                    ? ((x = 0), (P = 0), (M = 0), (S = 0))
                    : x <= 0
                      ? ((M = -x), (x = 0), (P = Math.min(b, s + x)), (S = P))
                      : x <= b && ((M = 0), (P = Math.min(s, b - x)), (S = P))
            var D = [w, x, _, P]
            if (N > 0 && S > 0) {
                var R = f / r
                D.push(O * R, M * R, N * R, S * R)
            }
            return (
                I.drawImage.apply(
                    I,
                    [a].concat(
                        Ro(
                            D.map(function (L) {
                                return Math.floor(xt(L))
                            }),
                        ),
                    ),
                ),
                h
            )
        },
        setAspectRatio: function (t) {
            var i = this.options
            return (
                !this.disabled &&
                    !la(t) &&
                    ((i.aspectRatio = Math.max(0, t) || NaN),
                    this.ready &&
                        (this.initCropBox(),
                        this.cropped && this.renderCropBox())),
                this
            )
        },
        setDragMode: function (t) {
            var i = this.options,
                a = this.dragBox,
                n = this.face
            if (this.ready && !this.disabled) {
                var o = t === va,
                    l = i.movable && t === Ao
                ;(t = o || l ? t : Mo),
                    (i.dragMode = t),
                    Wt(a, Ut, t),
                    vt(a, da, o),
                    vt(a, pa, l),
                    i.cropBoxMovable ||
                        (Wt(n, Ut, t), vt(n, da, o), vt(n, pa, l))
            }
            return this
        },
    },
    Qp = ze.Cropper,
    ya = (function () {
        function e(t) {
            var i =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {}
            if ((cp(this, e), !t || !yp.test(t.tagName)))
                throw new Error(
                    'The first argument is required and must be an <img> or <canvas> element.',
                )
            ;(this.element = t),
                (this.options = J({}, To, It(i) && i)),
                (this.cropped = !1),
                (this.disabled = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.reloading = !1),
                (this.replaced = !1),
                (this.sized = !1),
                (this.sizing = !1),
                this.init()
        }
        return dp(
            e,
            [
                {
                    key: 'init',
                    value: function () {
                        var i = this.element,
                            a = i.tagName.toLowerCase(),
                            n
                        if (!i[K]) {
                            if (((i[K] = this), a === 'img')) {
                                if (
                                    ((this.isImg = !0),
                                    (n = i.getAttribute('src') || ''),
                                    (this.originalUrl = n),
                                    !n)
                                )
                                    return
                                n = i.src
                            } else
                                a === 'canvas' &&
                                    window.HTMLCanvasElement &&
                                    (n = i.toDataURL())
                            this.load(n)
                        }
                    },
                },
                {
                    key: 'load',
                    value: function (i) {
                        var a = this
                        if (i) {
                            ;(this.url = i), (this.imageData = {})
                            var n = this.element,
                                o = this.options
                            if (
                                (!o.rotatable &&
                                    !o.scalable &&
                                    (o.checkOrientation = !1),
                                !o.checkOrientation || !window.ArrayBuffer)
                            ) {
                                this.clone()
                                return
                            }
                            if (vp.test(i)) {
                                xp.test(i) ? this.read(Vp(i)) : this.clone()
                                return
                            }
                            var l = new XMLHttpRequest(),
                                r = this.clone.bind(this)
                            ;(this.reloading = !0),
                                (this.xhr = l),
                                (l.onabort = r),
                                (l.onerror = r),
                                (l.ontimeout = r),
                                (l.onprogress = function () {
                                    l.getResponseHeader('content-type') !==
                                        bo && l.abort()
                                }),
                                (l.onload = function () {
                                    a.read(l.response)
                                }),
                                (l.onloadend = function () {
                                    ;(a.reloading = !1), (a.xhr = null)
                                }),
                                o.checkCrossOrigin &&
                                    vo(i) &&
                                    n.crossOrigin &&
                                    (i = xo(i)),
                                l.open('GET', i, !0),
                                (l.responseType = 'arraybuffer'),
                                (l.withCredentials =
                                    n.crossOrigin === 'use-credentials'),
                                l.send()
                        }
                    },
                },
                {
                    key: 'read',
                    value: function (i) {
                        var a = this.options,
                            n = this.imageData,
                            o = Up(i),
                            l = 0,
                            r = 1,
                            s = 1
                        if (o > 1) {
                            this.url = Gp(i, bo)
                            var p = Wp(o)
                            ;(l = p.rotate), (r = p.scaleX), (s = p.scaleY)
                        }
                        a.rotatable && (n.rotate = l),
                            a.scalable && ((n.scaleX = r), (n.scaleY = s)),
                            this.clone()
                    },
                },
                {
                    key: 'clone',
                    value: function () {
                        var i = this.element,
                            a = this.url,
                            n = i.crossOrigin,
                            o = a
                        this.options.checkCrossOrigin &&
                            vo(a) &&
                            (n || (n = 'anonymous'), (o = xo(a))),
                            (this.crossOrigin = n),
                            (this.crossOriginUrl = o)
                        var l = document.createElement('img')
                        n && (l.crossOrigin = n),
                            (l.src = o || a),
                            (l.alt = i.alt || 'The image to crop'),
                            (this.image = l),
                            (l.onload = this.start.bind(this)),
                            (l.onerror = this.stop.bind(this)),
                            pe(l, co),
                            i.parentNode.insertBefore(l, i.nextSibling)
                    },
                },
                {
                    key: 'start',
                    value: function () {
                        var i = this,
                            a = this.image
                        ;(a.onload = null),
                            (a.onerror = null),
                            (this.sizing = !0)
                        var n =
                                ze.navigator &&
                                /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                                    ze.navigator.userAgent,
                                ),
                            o = function (p, c) {
                                J(i.imageData, {
                                    naturalWidth: p,
                                    naturalHeight: c,
                                    aspectRatio: p / c,
                                }),
                                    (i.initialImageData = J({}, i.imageData)),
                                    (i.sizing = !1),
                                    (i.sized = !0),
                                    i.build()
                            }
                        if (a.naturalWidth && !n) {
                            o(a.naturalWidth, a.naturalHeight)
                            return
                        }
                        var l = document.createElement('img'),
                            r = document.body || document.documentElement
                        ;(this.sizingImage = l),
                            (l.onload = function () {
                                o(l.width, l.height), n || r.removeChild(l)
                            }),
                            (l.src = a.src),
                            n ||
                                ((l.style.cssText =
                                    'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
                                r.appendChild(l))
                    },
                },
                {
                    key: 'stop',
                    value: function () {
                        var i = this.image
                        ;(i.onload = null),
                            (i.onerror = null),
                            i.parentNode.removeChild(i),
                            (this.image = null)
                    },
                },
                {
                    key: 'build',
                    value: function () {
                        if (!(!this.sized || this.ready)) {
                            var i = this.element,
                                a = this.options,
                                n = this.image,
                                o = i.parentNode,
                                l = document.createElement('div')
                            l.innerHTML = _p
                            var r = l.querySelector(
                                    '.'.concat(K, '-container'),
                                ),
                                s = r.querySelector('.'.concat(K, '-canvas')),
                                p = r.querySelector('.'.concat(K, '-drag-box')),
                                c = r.querySelector('.'.concat(K, '-crop-box')),
                                d = c.querySelector('.'.concat(K, '-face'))
                            ;(this.container = o),
                                (this.cropper = r),
                                (this.canvas = s),
                                (this.dragBox = p),
                                (this.cropBox = c),
                                (this.viewBox = r.querySelector(
                                    '.'.concat(K, '-view-box'),
                                )),
                                (this.face = d),
                                s.appendChild(n),
                                pe(i, be),
                                o.insertBefore(r, i.nextSibling),
                                Fe(n, co),
                                this.initPreview(),
                                this.bind(),
                                (a.initialAspectRatio =
                                    Math.max(0, a.initialAspectRatio) || NaN),
                                (a.aspectRatio =
                                    Math.max(0, a.aspectRatio) || NaN),
                                (a.viewMode =
                                    Math.max(
                                        0,
                                        Math.min(3, Math.round(a.viewMode)),
                                    ) || 0),
                                pe(c, be),
                                a.guides ||
                                    pe(
                                        c.getElementsByClassName(
                                            ''.concat(K, '-dashed'),
                                        ),
                                        be,
                                    ),
                                a.center ||
                                    pe(
                                        c.getElementsByClassName(
                                            ''.concat(K, '-center'),
                                        ),
                                        be,
                                    ),
                                a.background && pe(r, ''.concat(K, '-bg')),
                                a.highlight || pe(d, hp),
                                a.cropBoxMovable && (pe(d, pa), Wt(d, Ut, Ia)),
                                a.cropBoxResizable ||
                                    (pe(
                                        c.getElementsByClassName(
                                            ''.concat(K, '-line'),
                                        ),
                                        be,
                                    ),
                                    pe(
                                        c.getElementsByClassName(
                                            ''.concat(K, '-point'),
                                        ),
                                        be,
                                    )),
                                this.render(),
                                (this.ready = !0),
                                this.setDragMode(a.dragMode),
                                a.autoCrop && this.crop(),
                                this.setData(a.data),
                                Ee(a.ready) && Re(i, go, a.ready, { once: !0 }),
                                yt(i, go)
                        }
                    },
                },
                {
                    key: 'unbuild',
                    value: function () {
                        if (this.ready) {
                            ;(this.ready = !1),
                                this.unbind(),
                                this.resetPreview()
                            var i = this.cropper.parentNode
                            i && i.removeChild(this.cropper),
                                Fe(this.element, be)
                        }
                    },
                },
                {
                    key: 'uncreate',
                    value: function () {
                        this.ready
                            ? (this.unbuild(),
                              (this.ready = !1),
                              (this.cropped = !1))
                            : this.sizing
                              ? ((this.sizingImage.onload = null),
                                (this.sizing = !1),
                                (this.sized = !1))
                              : this.reloading
                                ? ((this.xhr.onabort = null), this.xhr.abort())
                                : this.image && this.stop()
                    },
                },
            ],
            [
                {
                    key: 'noConflict',
                    value: function () {
                        return (window.Cropper = Qp), e
                    },
                },
                {
                    key: 'setDefaults',
                    value: function (i) {
                        J(To, It(i) && i)
                    },
                },
            ],
        )
    })()
J(ya.prototype, Hp, jp, qp, Yp, $p, Xp)
var Bo = {
    'application/prs.cww': ['cww'],
    'application/prs.xsf+xml': ['xsf'],
    'application/vnd.1000minds.decision-model+xml': ['1km'],
    'application/vnd.3gpp.pic-bw-large': ['plb'],
    'application/vnd.3gpp.pic-bw-small': ['psb'],
    'application/vnd.3gpp.pic-bw-var': ['pvb'],
    'application/vnd.3gpp2.tcap': ['tcap'],
    'application/vnd.3m.post-it-notes': ['pwn'],
    'application/vnd.accpac.simply.aso': ['aso'],
    'application/vnd.accpac.simply.imp': ['imp'],
    'application/vnd.acucobol': ['acu'],
    'application/vnd.acucorp': ['atc', 'acutc'],
    'application/vnd.adobe.air-application-installer-package+zip': ['air'],
    'application/vnd.adobe.formscentral.fcdt': ['fcdt'],
    'application/vnd.adobe.fxp': ['fxp', 'fxpl'],
    'application/vnd.adobe.xdp+xml': ['xdp'],
    'application/vnd.adobe.xfdf': ['*xfdf'],
    'application/vnd.age': ['age'],
    'application/vnd.ahead.space': ['ahead'],
    'application/vnd.airzip.filesecure.azf': ['azf'],
    'application/vnd.airzip.filesecure.azs': ['azs'],
    'application/vnd.amazon.ebook': ['azw'],
    'application/vnd.americandynamics.acc': ['acc'],
    'application/vnd.amiga.ami': ['ami'],
    'application/vnd.android.package-archive': ['apk'],
    'application/vnd.anser-web-certificate-issue-initiation': ['cii'],
    'application/vnd.anser-web-funds-transfer-initiation': ['fti'],
    'application/vnd.antix.game-component': ['atx'],
    'application/vnd.apple.installer+xml': ['mpkg'],
    'application/vnd.apple.keynote': ['key'],
    'application/vnd.apple.mpegurl': ['m3u8'],
    'application/vnd.apple.numbers': ['numbers'],
    'application/vnd.apple.pages': ['pages'],
    'application/vnd.apple.pkpass': ['pkpass'],
    'application/vnd.aristanetworks.swi': ['swi'],
    'application/vnd.astraea-software.iota': ['iota'],
    'application/vnd.audiograph': ['aep'],
    'application/vnd.balsamiq.bmml+xml': ['bmml'],
    'application/vnd.blueice.multipass': ['mpm'],
    'application/vnd.bmi': ['bmi'],
    'application/vnd.businessobjects': ['rep'],
    'application/vnd.chemdraw+xml': ['cdxml'],
    'application/vnd.chipnuts.karaoke-mmd': ['mmd'],
    'application/vnd.cinderella': ['cdy'],
    'application/vnd.citationstyles.style+xml': ['csl'],
    'application/vnd.claymore': ['cla'],
    'application/vnd.cloanto.rp9': ['rp9'],
    'application/vnd.clonk.c4group': ['c4g', 'c4d', 'c4f', 'c4p', 'c4u'],
    'application/vnd.cluetrust.cartomobile-config': ['c11amc'],
    'application/vnd.cluetrust.cartomobile-config-pkg': ['c11amz'],
    'application/vnd.commonspace': ['csp'],
    'application/vnd.contact.cmsg': ['cdbcmsg'],
    'application/vnd.cosmocaller': ['cmc'],
    'application/vnd.crick.clicker': ['clkx'],
    'application/vnd.crick.clicker.keyboard': ['clkk'],
    'application/vnd.crick.clicker.palette': ['clkp'],
    'application/vnd.crick.clicker.template': ['clkt'],
    'application/vnd.crick.clicker.wordbank': ['clkw'],
    'application/vnd.criticaltools.wbs+xml': ['wbs'],
    'application/vnd.ctc-posml': ['pml'],
    'application/vnd.cups-ppd': ['ppd'],
    'application/vnd.curl.car': ['car'],
    'application/vnd.curl.pcurl': ['pcurl'],
    'application/vnd.dart': ['dart'],
    'application/vnd.data-vision.rdz': ['rdz'],
    'application/vnd.dbf': ['dbf'],
    'application/vnd.dece.data': ['uvf', 'uvvf', 'uvd', 'uvvd'],
    'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
    'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
    'application/vnd.dece.zip': ['uvz', 'uvvz'],
    'application/vnd.denovo.fcselayout-link': ['fe_launch'],
    'application/vnd.dna': ['dna'],
    'application/vnd.dolby.mlp': ['mlp'],
    'application/vnd.dpgraph': ['dpg'],
    'application/vnd.dreamfactory': ['dfac'],
    'application/vnd.ds-keypoint': ['kpxx'],
    'application/vnd.dvb.ait': ['ait'],
    'application/vnd.dvb.service': ['svc'],
    'application/vnd.dynageo': ['geo'],
    'application/vnd.ecowin.chart': ['mag'],
    'application/vnd.enliven': ['nml'],
    'application/vnd.epson.esf': ['esf'],
    'application/vnd.epson.msf': ['msf'],
    'application/vnd.epson.quickanime': ['qam'],
    'application/vnd.epson.salt': ['slt'],
    'application/vnd.epson.ssf': ['ssf'],
    'application/vnd.eszigno3+xml': ['es3', 'et3'],
    'application/vnd.ezpix-album': ['ez2'],
    'application/vnd.ezpix-package': ['ez3'],
    'application/vnd.fdf': ['*fdf'],
    'application/vnd.fdsn.mseed': ['mseed'],
    'application/vnd.fdsn.seed': ['seed', 'dataless'],
    'application/vnd.flographit': ['gph'],
    'application/vnd.fluxtime.clip': ['ftc'],
    'application/vnd.framemaker': ['fm', 'frame', 'maker', 'book'],
    'application/vnd.frogans.fnc': ['fnc'],
    'application/vnd.frogans.ltf': ['ltf'],
    'application/vnd.fsc.weblaunch': ['fsc'],
    'application/vnd.fujitsu.oasys': ['oas'],
    'application/vnd.fujitsu.oasys2': ['oa2'],
    'application/vnd.fujitsu.oasys3': ['oa3'],
    'application/vnd.fujitsu.oasysgp': ['fg5'],
    'application/vnd.fujitsu.oasysprs': ['bh2'],
    'application/vnd.fujixerox.ddd': ['ddd'],
    'application/vnd.fujixerox.docuworks': ['xdw'],
    'application/vnd.fujixerox.docuworks.binder': ['xbd'],
    'application/vnd.fuzzysheet': ['fzs'],
    'application/vnd.genomatix.tuxedo': ['txd'],
    'application/vnd.geogebra.file': ['ggb'],
    'application/vnd.geogebra.slides': ['ggs'],
    'application/vnd.geogebra.tool': ['ggt'],
    'application/vnd.geometry-explorer': ['gex', 'gre'],
    'application/vnd.geonext': ['gxt'],
    'application/vnd.geoplan': ['g2w'],
    'application/vnd.geospace': ['g3w'],
    'application/vnd.gmx': ['gmx'],
    'application/vnd.google-apps.document': ['gdoc'],
    'application/vnd.google-apps.presentation': ['gslides'],
    'application/vnd.google-apps.spreadsheet': ['gsheet'],
    'application/vnd.google-earth.kml+xml': ['kml'],
    'application/vnd.google-earth.kmz': ['kmz'],
    'application/vnd.gov.sk.xmldatacontainer+xml': ['xdcf'],
    'application/vnd.grafeq': ['gqf', 'gqs'],
    'application/vnd.groove-account': ['gac'],
    'application/vnd.groove-help': ['ghf'],
    'application/vnd.groove-identity-message': ['gim'],
    'application/vnd.groove-injector': ['grv'],
    'application/vnd.groove-tool-message': ['gtm'],
    'application/vnd.groove-tool-template': ['tpl'],
    'application/vnd.groove-vcard': ['vcg'],
    'application/vnd.hal+xml': ['hal'],
    'application/vnd.handheld-entertainment+xml': ['zmm'],
    'application/vnd.hbci': ['hbci'],
    'application/vnd.hhe.lesson-player': ['les'],
    'application/vnd.hp-hpgl': ['hpgl'],
    'application/vnd.hp-hpid': ['hpid'],
    'application/vnd.hp-hps': ['hps'],
    'application/vnd.hp-jlyt': ['jlt'],
    'application/vnd.hp-pcl': ['pcl'],
    'application/vnd.hp-pclxl': ['pclxl'],
    'application/vnd.hydrostatix.sof-data': ['sfd-hdstx'],
    'application/vnd.ibm.minipay': ['mpy'],
    'application/vnd.ibm.modcap': ['afp', 'listafp', 'list3820'],
    'application/vnd.ibm.rights-management': ['irm'],
    'application/vnd.ibm.secure-container': ['sc'],
    'application/vnd.iccprofile': ['icc', 'icm'],
    'application/vnd.igloader': ['igl'],
    'application/vnd.immervision-ivp': ['ivp'],
    'application/vnd.immervision-ivu': ['ivu'],
    'application/vnd.insors.igm': ['igm'],
    'application/vnd.intercon.formnet': ['xpw', 'xpx'],
    'application/vnd.intergeo': ['i2g'],
    'application/vnd.intu.qbo': ['qbo'],
    'application/vnd.intu.qfx': ['qfx'],
    'application/vnd.ipunplugged.rcprofile': ['rcprofile'],
    'application/vnd.irepository.package+xml': ['irp'],
    'application/vnd.is-xpr': ['xpr'],
    'application/vnd.isac.fcs': ['fcs'],
    'application/vnd.jam': ['jam'],
    'application/vnd.jcp.javame.midlet-rms': ['rms'],
    'application/vnd.jisp': ['jisp'],
    'application/vnd.joost.joda-archive': ['joda'],
    'application/vnd.kahootz': ['ktz', 'ktr'],
    'application/vnd.kde.karbon': ['karbon'],
    'application/vnd.kde.kchart': ['chrt'],
    'application/vnd.kde.kformula': ['kfo'],
    'application/vnd.kde.kivio': ['flw'],
    'application/vnd.kde.kontour': ['kon'],
    'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
    'application/vnd.kde.kspread': ['ksp'],
    'application/vnd.kde.kword': ['kwd', 'kwt'],
    'application/vnd.kenameaapp': ['htke'],
    'application/vnd.kidspiration': ['kia'],
    'application/vnd.kinar': ['kne', 'knp'],
    'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
    'application/vnd.kodak-descriptor': ['sse'],
    'application/vnd.las.las+xml': ['lasxml'],
    'application/vnd.llamagraphics.life-balance.desktop': ['lbd'],
    'application/vnd.llamagraphics.life-balance.exchange+xml': ['lbe'],
    'application/vnd.lotus-1-2-3': ['123'],
    'application/vnd.lotus-approach': ['apr'],
    'application/vnd.lotus-freelance': ['pre'],
    'application/vnd.lotus-notes': ['nsf'],
    'application/vnd.lotus-organizer': ['org'],
    'application/vnd.lotus-screencam': ['scm'],
    'application/vnd.lotus-wordpro': ['lwp'],
    'application/vnd.macports.portpkg': ['portpkg'],
    'application/vnd.mapbox-vector-tile': ['mvt'],
    'application/vnd.mcd': ['mcd'],
    'application/vnd.medcalcdata': ['mc1'],
    'application/vnd.mediastation.cdkey': ['cdkey'],
    'application/vnd.mfer': ['mwf'],
    'application/vnd.mfmp': ['mfm'],
    'application/vnd.micrografx.flo': ['flo'],
    'application/vnd.micrografx.igx': ['igx'],
    'application/vnd.mif': ['mif'],
    'application/vnd.mobius.daf': ['daf'],
    'application/vnd.mobius.dis': ['dis'],
    'application/vnd.mobius.mbk': ['mbk'],
    'application/vnd.mobius.mqy': ['mqy'],
    'application/vnd.mobius.msl': ['msl'],
    'application/vnd.mobius.plc': ['plc'],
    'application/vnd.mobius.txf': ['txf'],
    'application/vnd.mophun.application': ['mpn'],
    'application/vnd.mophun.certificate': ['mpc'],
    'application/vnd.mozilla.xul+xml': ['xul'],
    'application/vnd.ms-artgalry': ['cil'],
    'application/vnd.ms-cab-compressed': ['cab'],
    'application/vnd.ms-excel': ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw'],
    'application/vnd.ms-excel.addin.macroenabled.12': ['xlam'],
    'application/vnd.ms-excel.sheet.binary.macroenabled.12': ['xlsb'],
    'application/vnd.ms-excel.sheet.macroenabled.12': ['xlsm'],
    'application/vnd.ms-excel.template.macroenabled.12': ['xltm'],
    'application/vnd.ms-fontobject': ['eot'],
    'application/vnd.ms-htmlhelp': ['chm'],
    'application/vnd.ms-ims': ['ims'],
    'application/vnd.ms-lrm': ['lrm'],
    'application/vnd.ms-officetheme': ['thmx'],
    'application/vnd.ms-outlook': ['msg'],
    'application/vnd.ms-pki.seccat': ['cat'],
    'application/vnd.ms-pki.stl': ['*stl'],
    'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
    'application/vnd.ms-powerpoint.addin.macroenabled.12': ['ppam'],
    'application/vnd.ms-powerpoint.presentation.macroenabled.12': ['pptm'],
    'application/vnd.ms-powerpoint.slide.macroenabled.12': ['sldm'],
    'application/vnd.ms-powerpoint.slideshow.macroenabled.12': ['ppsm'],
    'application/vnd.ms-powerpoint.template.macroenabled.12': ['potm'],
    'application/vnd.ms-project': ['*mpp', 'mpt'],
    'application/vnd.ms-word.document.macroenabled.12': ['docm'],
    'application/vnd.ms-word.template.macroenabled.12': ['dotm'],
    'application/vnd.ms-works': ['wps', 'wks', 'wcm', 'wdb'],
    'application/vnd.ms-wpl': ['wpl'],
    'application/vnd.ms-xpsdocument': ['xps'],
    'application/vnd.mseq': ['mseq'],
    'application/vnd.musician': ['mus'],
    'application/vnd.muvee.style': ['msty'],
    'application/vnd.mynfc': ['taglet'],
    'application/vnd.nato.bindingdataobject+xml': ['bdo'],
    'application/vnd.neurolanguage.nlu': ['nlu'],
    'application/vnd.nitf': ['ntf', 'nitf'],
    'application/vnd.noblenet-directory': ['nnd'],
    'application/vnd.noblenet-sealer': ['nns'],
    'application/vnd.noblenet-web': ['nnw'],
    'application/vnd.nokia.n-gage.ac+xml': ['*ac'],
    'application/vnd.nokia.n-gage.data': ['ngdat'],
    'application/vnd.nokia.n-gage.symbian.install': ['n-gage'],
    'application/vnd.nokia.radio-preset': ['rpst'],
    'application/vnd.nokia.radio-presets': ['rpss'],
    'application/vnd.novadigm.edm': ['edm'],
    'application/vnd.novadigm.edx': ['edx'],
    'application/vnd.novadigm.ext': ['ext'],
    'application/vnd.oasis.opendocument.chart': ['odc'],
    'application/vnd.oasis.opendocument.chart-template': ['otc'],
    'application/vnd.oasis.opendocument.database': ['odb'],
    'application/vnd.oasis.opendocument.formula': ['odf'],
    'application/vnd.oasis.opendocument.formula-template': ['odft'],
    'application/vnd.oasis.opendocument.graphics': ['odg'],
    'application/vnd.oasis.opendocument.graphics-template': ['otg'],
    'application/vnd.oasis.opendocument.image': ['odi'],
    'application/vnd.oasis.opendocument.image-template': ['oti'],
    'application/vnd.oasis.opendocument.presentation': ['odp'],
    'application/vnd.oasis.opendocument.presentation-template': ['otp'],
    'application/vnd.oasis.opendocument.spreadsheet': ['ods'],
    'application/vnd.oasis.opendocument.spreadsheet-template': ['ots'],
    'application/vnd.oasis.opendocument.text': ['odt'],
    'application/vnd.oasis.opendocument.text-master': ['odm'],
    'application/vnd.oasis.opendocument.text-template': ['ott'],
    'application/vnd.oasis.opendocument.text-web': ['oth'],
    'application/vnd.olpc-sugar': ['xo'],
    'application/vnd.oma.dd2+xml': ['dd2'],
    'application/vnd.openblox.game+xml': ['obgx'],
    'application/vnd.openofficeorg.extension': ['oxt'],
    'application/vnd.openstreetmap.data+xml': ['osm'],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        ['pptx'],
    'application/vnd.openxmlformats-officedocument.presentationml.slide': [
        'sldx',
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow': [
        'ppsx',
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.template': [
        'potx',
    ],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        'xlsx',
    ],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template': [
        'xltx',
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
        'docx',
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template': [
        'dotx',
    ],
    'application/vnd.osgeo.mapguide.package': ['mgp'],
    'application/vnd.osgi.dp': ['dp'],
    'application/vnd.osgi.subsystem': ['esa'],
    'application/vnd.palm': ['pdb', 'pqa', 'oprc'],
    'application/vnd.pawaafile': ['paw'],
    'application/vnd.pg.format': ['str'],
    'application/vnd.pg.osasli': ['ei6'],
    'application/vnd.picsel': ['efif'],
    'application/vnd.pmi.widget': ['wg'],
    'application/vnd.pocketlearn': ['plf'],
    'application/vnd.powerbuilder6': ['pbd'],
    'application/vnd.previewsystems.box': ['box'],
    'application/vnd.proteus.magazine': ['mgz'],
    'application/vnd.publishare-delta-tree': ['qps'],
    'application/vnd.pvi.ptid1': ['ptid'],
    'application/vnd.pwg-xhtml-print+xml': ['xhtm'],
    'application/vnd.quark.quarkxpress': [
        'qxd',
        'qxt',
        'qwd',
        'qwt',
        'qxl',
        'qxb',
    ],
    'application/vnd.rar': ['rar'],
    'application/vnd.realvnc.bed': ['bed'],
    'application/vnd.recordare.musicxml': ['mxl'],
    'application/vnd.recordare.musicxml+xml': ['musicxml'],
    'application/vnd.rig.cryptonote': ['cryptonote'],
    'application/vnd.rim.cod': ['cod'],
    'application/vnd.rn-realmedia': ['rm'],
    'application/vnd.rn-realmedia-vbr': ['rmvb'],
    'application/vnd.route66.link66+xml': ['link66'],
    'application/vnd.sailingtracker.track': ['st'],
    'application/vnd.seemail': ['see'],
    'application/vnd.sema': ['sema'],
    'application/vnd.semd': ['semd'],
    'application/vnd.semf': ['semf'],
    'application/vnd.shana.informed.formdata': ['ifm'],
    'application/vnd.shana.informed.formtemplate': ['itp'],
    'application/vnd.shana.informed.interchange': ['iif'],
    'application/vnd.shana.informed.package': ['ipk'],
    'application/vnd.simtech-mindmapper': ['twd', 'twds'],
    'application/vnd.smaf': ['mmf'],
    'application/vnd.smart.teacher': ['teacher'],
    'application/vnd.software602.filler.form+xml': ['fo'],
    'application/vnd.solent.sdkm+xml': ['sdkm', 'sdkd'],
    'application/vnd.spotfire.dxp': ['dxp'],
    'application/vnd.spotfire.sfs': ['sfs'],
    'application/vnd.stardivision.calc': ['sdc'],
    'application/vnd.stardivision.draw': ['sda'],
    'application/vnd.stardivision.impress': ['sdd'],
    'application/vnd.stardivision.math': ['smf'],
    'application/vnd.stardivision.writer': ['sdw', 'vor'],
    'application/vnd.stardivision.writer-global': ['sgl'],
    'application/vnd.stepmania.package': ['smzip'],
    'application/vnd.stepmania.stepchart': ['sm'],
    'application/vnd.sun.wadl+xml': ['wadl'],
    'application/vnd.sun.xml.calc': ['sxc'],
    'application/vnd.sun.xml.calc.template': ['stc'],
    'application/vnd.sun.xml.draw': ['sxd'],
    'application/vnd.sun.xml.draw.template': ['std'],
    'application/vnd.sun.xml.impress': ['sxi'],
    'application/vnd.sun.xml.impress.template': ['sti'],
    'application/vnd.sun.xml.math': ['sxm'],
    'application/vnd.sun.xml.writer': ['sxw'],
    'application/vnd.sun.xml.writer.global': ['sxg'],
    'application/vnd.sun.xml.writer.template': ['stw'],
    'application/vnd.sus-calendar': ['sus', 'susp'],
    'application/vnd.svd': ['svd'],
    'application/vnd.symbian.install': ['sis', 'sisx'],
    'application/vnd.syncml+xml': ['xsm'],
    'application/vnd.syncml.dm+wbxml': ['bdm'],
    'application/vnd.syncml.dm+xml': ['xdm'],
    'application/vnd.syncml.dmddf+xml': ['ddf'],
    'application/vnd.tao.intent-module-archive': ['tao'],
    'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
    'application/vnd.tmobile-livetv': ['tmo'],
    'application/vnd.trid.tpt': ['tpt'],
    'application/vnd.triscape.mxs': ['mxs'],
    'application/vnd.trueapp': ['tra'],
    'application/vnd.ufdl': ['ufd', 'ufdl'],
    'application/vnd.uiq.theme': ['utz'],
    'application/vnd.umajin': ['umj'],
    'application/vnd.unity': ['unityweb'],
    'application/vnd.uoml+xml': ['uoml', 'uo'],
    'application/vnd.vcx': ['vcx'],
    'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
    'application/vnd.visionary': ['vis'],
    'application/vnd.vsf': ['vsf'],
    'application/vnd.wap.wbxml': ['wbxml'],
    'application/vnd.wap.wmlc': ['wmlc'],
    'application/vnd.wap.wmlscriptc': ['wmlsc'],
    'application/vnd.webturbo': ['wtb'],
    'application/vnd.wolfram.player': ['nbp'],
    'application/vnd.wordperfect': ['wpd'],
    'application/vnd.wqd': ['wqd'],
    'application/vnd.wt.stf': ['stf'],
    'application/vnd.xara': ['xar'],
    'application/vnd.xfdl': ['xfdl'],
    'application/vnd.yamaha.hv-dic': ['hvd'],
    'application/vnd.yamaha.hv-script': ['hvs'],
    'application/vnd.yamaha.hv-voice': ['hvp'],
    'application/vnd.yamaha.openscoreformat': ['osf'],
    'application/vnd.yamaha.openscoreformat.osfpvg+xml': ['osfpvg'],
    'application/vnd.yamaha.smaf-audio': ['saf'],
    'application/vnd.yamaha.smaf-phrase': ['spf'],
    'application/vnd.yellowriver-custom-menu': ['cmp'],
    'application/vnd.zul': ['zir', 'zirz'],
    'application/vnd.zzazz.deck+xml': ['zaz'],
    'application/x-7z-compressed': ['7z'],
    'application/x-abiword': ['abw'],
    'application/x-ace-compressed': ['ace'],
    'application/x-apple-diskimage': ['*dmg'],
    'application/x-arj': ['arj'],
    'application/x-authorware-bin': ['aab', 'x32', 'u32', 'vox'],
    'application/x-authorware-map': ['aam'],
    'application/x-authorware-seg': ['aas'],
    'application/x-bcpio': ['bcpio'],
    'application/x-bdoc': ['*bdoc'],
    'application/x-bittorrent': ['torrent'],
    'application/x-blorb': ['blb', 'blorb'],
    'application/x-bzip': ['bz'],
    'application/x-bzip2': ['bz2', 'boz'],
    'application/x-cbr': ['cbr', 'cba', 'cbt', 'cbz', 'cb7'],
    'application/x-cdlink': ['vcd'],
    'application/x-cfs-compressed': ['cfs'],
    'application/x-chat': ['chat'],
    'application/x-chess-pgn': ['pgn'],
    'application/x-chrome-extension': ['crx'],
    'application/x-cocoa': ['cco'],
    'application/x-conference': ['nsc'],
    'application/x-cpio': ['cpio'],
    'application/x-csh': ['csh'],
    'application/x-debian-package': ['*deb', 'udeb'],
    'application/x-dgc-compressed': ['dgc'],
    'application/x-director': [
        'dir',
        'dcr',
        'dxr',
        'cst',
        'cct',
        'cxt',
        'w3d',
        'fgd',
        'swa',
    ],
    'application/x-doom': ['wad'],
    'application/x-dtbncx+xml': ['ncx'],
    'application/x-dtbook+xml': ['dtb'],
    'application/x-dtbresource+xml': ['res'],
    'application/x-dvi': ['dvi'],
    'application/x-envoy': ['evy'],
    'application/x-eva': ['eva'],
    'application/x-font-bdf': ['bdf'],
    'application/x-font-ghostscript': ['gsf'],
    'application/x-font-linux-psf': ['psf'],
    'application/x-font-pcf': ['pcf'],
    'application/x-font-snf': ['snf'],
    'application/x-font-type1': ['pfa', 'pfb', 'pfm', 'afm'],
    'application/x-freearc': ['arc'],
    'application/x-futuresplash': ['spl'],
    'application/x-gca-compressed': ['gca'],
    'application/x-glulx': ['ulx'],
    'application/x-gnumeric': ['gnumeric'],
    'application/x-gramps-xml': ['gramps'],
    'application/x-gtar': ['gtar'],
    'application/x-hdf': ['hdf'],
    'application/x-httpd-php': ['php'],
    'application/x-install-instructions': ['install'],
    'application/x-iso9660-image': ['*iso'],
    'application/x-iwork-keynote-sffkey': ['*key'],
    'application/x-iwork-numbers-sffnumbers': ['*numbers'],
    'application/x-iwork-pages-sffpages': ['*pages'],
    'application/x-java-archive-diff': ['jardiff'],
    'application/x-java-jnlp-file': ['jnlp'],
    'application/x-keepass2': ['kdbx'],
    'application/x-latex': ['latex'],
    'application/x-lua-bytecode': ['luac'],
    'application/x-lzh-compressed': ['lzh', 'lha'],
    'application/x-makeself': ['run'],
    'application/x-mie': ['mie'],
    'application/x-mobipocket-ebook': ['*prc', 'mobi'],
    'application/x-ms-application': ['application'],
    'application/x-ms-shortcut': ['lnk'],
    'application/x-ms-wmd': ['wmd'],
    'application/x-ms-wmz': ['wmz'],
    'application/x-ms-xbap': ['xbap'],
    'application/x-msaccess': ['mdb'],
    'application/x-msbinder': ['obd'],
    'application/x-mscardfile': ['crd'],
    'application/x-msclip': ['clp'],
    'application/x-msdos-program': ['*exe'],
    'application/x-msdownload': ['*exe', '*dll', 'com', 'bat', '*msi'],
    'application/x-msmediaview': ['mvb', 'm13', 'm14'],
    'application/x-msmetafile': ['*wmf', '*wmz', '*emf', 'emz'],
    'application/x-msmoney': ['mny'],
    'application/x-mspublisher': ['pub'],
    'application/x-msschedule': ['scd'],
    'application/x-msterminal': ['trm'],
    'application/x-mswrite': ['wri'],
    'application/x-netcdf': ['nc', 'cdf'],
    'application/x-ns-proxy-autoconfig': ['pac'],
    'application/x-nzb': ['nzb'],
    'application/x-perl': ['pl', 'pm'],
    'application/x-pilot': ['*prc', '*pdb'],
    'application/x-pkcs12': ['p12', 'pfx'],
    'application/x-pkcs7-certificates': ['p7b', 'spc'],
    'application/x-pkcs7-certreqresp': ['p7r'],
    'application/x-rar-compressed': ['*rar'],
    'application/x-redhat-package-manager': ['rpm'],
    'application/x-research-info-systems': ['ris'],
    'application/x-sea': ['sea'],
    'application/x-sh': ['sh'],
    'application/x-shar': ['shar'],
    'application/x-shockwave-flash': ['swf'],
    'application/x-silverlight-app': ['xap'],
    'application/x-sql': ['*sql'],
    'application/x-stuffit': ['sit'],
    'application/x-stuffitx': ['sitx'],
    'application/x-subrip': ['srt'],
    'application/x-sv4cpio': ['sv4cpio'],
    'application/x-sv4crc': ['sv4crc'],
    'application/x-t3vm-image': ['t3'],
    'application/x-tads': ['gam'],
    'application/x-tar': ['tar'],
    'application/x-tcl': ['tcl', 'tk'],
    'application/x-tex': ['tex'],
    'application/x-tex-tfm': ['tfm'],
    'application/x-texinfo': ['texinfo', 'texi'],
    'application/x-tgif': ['*obj'],
    'application/x-ustar': ['ustar'],
    'application/x-virtualbox-hdd': ['hdd'],
    'application/x-virtualbox-ova': ['ova'],
    'application/x-virtualbox-ovf': ['ovf'],
    'application/x-virtualbox-vbox': ['vbox'],
    'application/x-virtualbox-vbox-extpack': ['vbox-extpack'],
    'application/x-virtualbox-vdi': ['vdi'],
    'application/x-virtualbox-vhd': ['vhd'],
    'application/x-virtualbox-vmdk': ['vmdk'],
    'application/x-wais-source': ['src'],
    'application/x-web-app-manifest+json': ['webapp'],
    'application/x-x509-ca-cert': ['der', 'crt', 'pem'],
    'application/x-xfig': ['fig'],
    'application/x-xliff+xml': ['*xlf'],
    'application/x-xpinstall': ['xpi'],
    'application/x-xz': ['xz'],
    'application/x-zmachine': ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8'],
    'audio/vnd.dece.audio': ['uva', 'uvva'],
    'audio/vnd.digital-winds': ['eol'],
    'audio/vnd.dra': ['dra'],
    'audio/vnd.dts': ['dts'],
    'audio/vnd.dts.hd': ['dtshd'],
    'audio/vnd.lucent.voice': ['lvp'],
    'audio/vnd.ms-playready.media.pya': ['pya'],
    'audio/vnd.nuera.ecelp4800': ['ecelp4800'],
    'audio/vnd.nuera.ecelp7470': ['ecelp7470'],
    'audio/vnd.nuera.ecelp9600': ['ecelp9600'],
    'audio/vnd.rip': ['rip'],
    'audio/x-aac': ['*aac'],
    'audio/x-aiff': ['aif', 'aiff', 'aifc'],
    'audio/x-caf': ['caf'],
    'audio/x-flac': ['flac'],
    'audio/x-m4a': ['*m4a'],
    'audio/x-matroska': ['mka'],
    'audio/x-mpegurl': ['m3u'],
    'audio/x-ms-wax': ['wax'],
    'audio/x-ms-wma': ['wma'],
    'audio/x-pn-realaudio': ['ram', 'ra'],
    'audio/x-pn-realaudio-plugin': ['rmp'],
    'audio/x-realaudio': ['*ra'],
    'audio/x-wav': ['*wav'],
    'chemical/x-cdx': ['cdx'],
    'chemical/x-cif': ['cif'],
    'chemical/x-cmdf': ['cmdf'],
    'chemical/x-cml': ['cml'],
    'chemical/x-csml': ['csml'],
    'chemical/x-xyz': ['xyz'],
    'image/prs.btif': ['btif', 'btf'],
    'image/prs.pti': ['pti'],
    'image/vnd.adobe.photoshop': ['psd'],
    'image/vnd.airzip.accelerator.azv': ['azv'],
    'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
    'image/vnd.djvu': ['djvu', 'djv'],
    'image/vnd.dvb.subtitle': ['*sub'],
    'image/vnd.dwg': ['dwg'],
    'image/vnd.dxf': ['dxf'],
    'image/vnd.fastbidsheet': ['fbs'],
    'image/vnd.fpx': ['fpx'],
    'image/vnd.fst': ['fst'],
    'image/vnd.fujixerox.edmics-mmr': ['mmr'],
    'image/vnd.fujixerox.edmics-rlc': ['rlc'],
    'image/vnd.microsoft.icon': ['ico'],
    'image/vnd.ms-dds': ['dds'],
    'image/vnd.ms-modi': ['mdi'],
    'image/vnd.ms-photo': ['wdp'],
    'image/vnd.net-fpx': ['npx'],
    'image/vnd.pco.b16': ['b16'],
    'image/vnd.tencent.tap': ['tap'],
    'image/vnd.valve.source.texture': ['vtf'],
    'image/vnd.wap.wbmp': ['wbmp'],
    'image/vnd.xiff': ['xif'],
    'image/vnd.zbrush.pcx': ['pcx'],
    'image/x-3ds': ['3ds'],
    'image/x-cmu-raster': ['ras'],
    'image/x-cmx': ['cmx'],
    'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
    'image/x-icon': ['*ico'],
    'image/x-jng': ['jng'],
    'image/x-mrsid-image': ['sid'],
    'image/x-ms-bmp': ['*bmp'],
    'image/x-pcx': ['*pcx'],
    'image/x-pict': ['pic', 'pct'],
    'image/x-portable-anymap': ['pnm'],
    'image/x-portable-bitmap': ['pbm'],
    'image/x-portable-graymap': ['pgm'],
    'image/x-portable-pixmap': ['ppm'],
    'image/x-rgb': ['rgb'],
    'image/x-tga': ['tga'],
    'image/x-xbitmap': ['xbm'],
    'image/x-xpixmap': ['xpm'],
    'image/x-xwindowdump': ['xwd'],
    'message/vnd.wfa.wsc': ['wsc'],
    'model/vnd.bary': ['bary'],
    'model/vnd.cld': ['cld'],
    'model/vnd.collada+xml': ['dae'],
    'model/vnd.dwf': ['dwf'],
    'model/vnd.gdl': ['gdl'],
    'model/vnd.gtw': ['gtw'],
    'model/vnd.mts': ['*mts'],
    'model/vnd.opengex': ['ogex'],
    'model/vnd.parasolid.transmit.binary': ['x_b'],
    'model/vnd.parasolid.transmit.text': ['x_t'],
    'model/vnd.pytha.pyox': ['pyo', 'pyox'],
    'model/vnd.sap.vds': ['vds'],
    'model/vnd.usda': ['usda'],
    'model/vnd.usdz+zip': ['usdz'],
    'model/vnd.valve.source.compiled-map': ['bsp'],
    'model/vnd.vtu': ['vtu'],
    'text/prs.lines.tag': ['dsc'],
    'text/vnd.curl': ['curl'],
    'text/vnd.curl.dcurl': ['dcurl'],
    'text/vnd.curl.mcurl': ['mcurl'],
    'text/vnd.curl.scurl': ['scurl'],
    'text/vnd.dvb.subtitle': ['sub'],
    'text/vnd.familysearch.gedcom': ['ged'],
    'text/vnd.fly': ['fly'],
    'text/vnd.fmi.flexstor': ['flx'],
    'text/vnd.graphviz': ['gv'],
    'text/vnd.in3d.3dml': ['3dml'],
    'text/vnd.in3d.spot': ['spot'],
    'text/vnd.sun.j2me.app-descriptor': ['jad'],
    'text/vnd.wap.wml': ['wml'],
    'text/vnd.wap.wmlscript': ['wmls'],
    'text/x-asm': ['s', 'asm'],
    'text/x-c': ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
    'text/x-component': ['htc'],
    'text/x-fortran': ['f', 'for', 'f77', 'f90'],
    'text/x-handlebars-template': ['hbs'],
    'text/x-java-source': ['java'],
    'text/x-lua': ['lua'],
    'text/x-markdown': ['mkd'],
    'text/x-nfo': ['nfo'],
    'text/x-opml': ['opml'],
    'text/x-org': ['*org'],
    'text/x-pascal': ['p', 'pas'],
    'text/x-processing': ['pde'],
    'text/x-sass': ['sass'],
    'text/x-scss': ['scss'],
    'text/x-setext': ['etx'],
    'text/x-sfv': ['sfv'],
    'text/x-suse-ymp': ['ymp'],
    'text/x-uuencode': ['uu'],
    'text/x-vcalendar': ['vcs'],
    'text/x-vcard': ['vcf'],
    'video/vnd.dece.hd': ['uvh', 'uvvh'],
    'video/vnd.dece.mobile': ['uvm', 'uvvm'],
    'video/vnd.dece.pd': ['uvp', 'uvvp'],
    'video/vnd.dece.sd': ['uvs', 'uvvs'],
    'video/vnd.dece.video': ['uvv', 'uvvv'],
    'video/vnd.dvb.file': ['dvb'],
    'video/vnd.fvt': ['fvt'],
    'video/vnd.mpegurl': ['mxu', 'm4u'],
    'video/vnd.ms-playready.media.pyv': ['pyv'],
    'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
    'video/vnd.vivo': ['viv'],
    'video/x-f4v': ['f4v'],
    'video/x-fli': ['fli'],
    'video/x-flv': ['flv'],
    'video/x-m4v': ['m4v'],
    'video/x-matroska': ['mkv', 'mk3d', 'mks'],
    'video/x-mng': ['mng'],
    'video/x-ms-asf': ['asf', 'asx'],
    'video/x-ms-vob': ['vob'],
    'video/x-ms-wm': ['wm'],
    'video/x-ms-wmv': ['wmv'],
    'video/x-ms-wmx': ['wmx'],
    'video/x-ms-wvx': ['wvx'],
    'video/x-msvideo': ['avi'],
    'video/x-sgi-movie': ['movie'],
    'video/x-smv': ['smv'],
    'x-conference/x-cooltalk': ['ice'],
}
Object.freeze(Bo)
var ko = Bo
var Vo = {
    'application/andrew-inset': ['ez'],
    'application/appinstaller': ['appinstaller'],
    'application/applixware': ['aw'],
    'application/appx': ['appx'],
    'application/appxbundle': ['appxbundle'],
    'application/atom+xml': ['atom'],
    'application/atomcat+xml': ['atomcat'],
    'application/atomdeleted+xml': ['atomdeleted'],
    'application/atomsvc+xml': ['atomsvc'],
    'application/atsc-dwd+xml': ['dwd'],
    'application/atsc-held+xml': ['held'],
    'application/atsc-rsat+xml': ['rsat'],
    'application/automationml-aml+xml': ['aml'],
    'application/automationml-amlx+zip': ['amlx'],
    'application/bdoc': ['bdoc'],
    'application/calendar+xml': ['xcs'],
    'application/ccxml+xml': ['ccxml'],
    'application/cdfx+xml': ['cdfx'],
    'application/cdmi-capability': ['cdmia'],
    'application/cdmi-container': ['cdmic'],
    'application/cdmi-domain': ['cdmid'],
    'application/cdmi-object': ['cdmio'],
    'application/cdmi-queue': ['cdmiq'],
    'application/cpl+xml': ['cpl'],
    'application/cu-seeme': ['cu'],
    'application/cwl': ['cwl'],
    'application/dash+xml': ['mpd'],
    'application/dash-patch+xml': ['mpp'],
    'application/davmount+xml': ['davmount'],
    'application/docbook+xml': ['dbk'],
    'application/dssc+der': ['dssc'],
    'application/dssc+xml': ['xdssc'],
    'application/ecmascript': ['ecma'],
    'application/emma+xml': ['emma'],
    'application/emotionml+xml': ['emotionml'],
    'application/epub+zip': ['epub'],
    'application/exi': ['exi'],
    'application/express': ['exp'],
    'application/fdf': ['fdf'],
    'application/fdt+xml': ['fdt'],
    'application/font-tdpfr': ['pfr'],
    'application/geo+json': ['geojson'],
    'application/gml+xml': ['gml'],
    'application/gpx+xml': ['gpx'],
    'application/gxf': ['gxf'],
    'application/gzip': ['gz'],
    'application/hjson': ['hjson'],
    'application/hyperstudio': ['stk'],
    'application/inkml+xml': ['ink', 'inkml'],
    'application/ipfix': ['ipfix'],
    'application/its+xml': ['its'],
    'application/java-archive': ['jar', 'war', 'ear'],
    'application/java-serialized-object': ['ser'],
    'application/java-vm': ['class'],
    'application/javascript': ['*js'],
    'application/json': ['json', 'map'],
    'application/json5': ['json5'],
    'application/jsonml+json': ['jsonml'],
    'application/ld+json': ['jsonld'],
    'application/lgr+xml': ['lgr'],
    'application/lost+xml': ['lostxml'],
    'application/mac-binhex40': ['hqx'],
    'application/mac-compactpro': ['cpt'],
    'application/mads+xml': ['mads'],
    'application/manifest+json': ['webmanifest'],
    'application/marc': ['mrc'],
    'application/marcxml+xml': ['mrcx'],
    'application/mathematica': ['ma', 'nb', 'mb'],
    'application/mathml+xml': ['mathml'],
    'application/mbox': ['mbox'],
    'application/media-policy-dataset+xml': ['mpf'],
    'application/mediaservercontrol+xml': ['mscml'],
    'application/metalink+xml': ['metalink'],
    'application/metalink4+xml': ['meta4'],
    'application/mets+xml': ['mets'],
    'application/mmt-aei+xml': ['maei'],
    'application/mmt-usd+xml': ['musd'],
    'application/mods+xml': ['mods'],
    'application/mp21': ['m21', 'mp21'],
    'application/mp4': ['*mp4', '*mpg4', 'mp4s', 'm4p'],
    'application/msix': ['msix'],
    'application/msixbundle': ['msixbundle'],
    'application/msword': ['doc', 'dot'],
    'application/mxf': ['mxf'],
    'application/n-quads': ['nq'],
    'application/n-triples': ['nt'],
    'application/node': ['cjs'],
    'application/octet-stream': [
        'bin',
        'dms',
        'lrf',
        'mar',
        'so',
        'dist',
        'distz',
        'pkg',
        'bpk',
        'dump',
        'elc',
        'deploy',
        'exe',
        'dll',
        'deb',
        'dmg',
        'iso',
        'img',
        'msi',
        'msp',
        'msm',
        'buffer',
    ],
    'application/oda': ['oda'],
    'application/oebps-package+xml': ['opf'],
    'application/ogg': ['ogx'],
    'application/omdoc+xml': ['omdoc'],
    'application/onenote': ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
    'application/oxps': ['oxps'],
    'application/p2p-overlay+xml': ['relo'],
    'application/patch-ops-error+xml': ['xer'],
    'application/pdf': ['pdf'],
    'application/pgp-encrypted': ['pgp'],
    'application/pgp-keys': ['asc'],
    'application/pgp-signature': ['sig', '*asc'],
    'application/pics-rules': ['prf'],
    'application/pkcs10': ['p10'],
    'application/pkcs7-mime': ['p7m', 'p7c'],
    'application/pkcs7-signature': ['p7s'],
    'application/pkcs8': ['p8'],
    'application/pkix-attr-cert': ['ac'],
    'application/pkix-cert': ['cer'],
    'application/pkix-crl': ['crl'],
    'application/pkix-pkipath': ['pkipath'],
    'application/pkixcmp': ['pki'],
    'application/pls+xml': ['pls'],
    'application/postscript': ['ai', 'eps', 'ps'],
    'application/provenance+xml': ['provx'],
    'application/pskc+xml': ['pskcxml'],
    'application/raml+yaml': ['raml'],
    'application/rdf+xml': ['rdf', 'owl'],
    'application/reginfo+xml': ['rif'],
    'application/relax-ng-compact-syntax': ['rnc'],
    'application/resource-lists+xml': ['rl'],
    'application/resource-lists-diff+xml': ['rld'],
    'application/rls-services+xml': ['rs'],
    'application/route-apd+xml': ['rapd'],
    'application/route-s-tsid+xml': ['sls'],
    'application/route-usd+xml': ['rusd'],
    'application/rpki-ghostbusters': ['gbr'],
    'application/rpki-manifest': ['mft'],
    'application/rpki-roa': ['roa'],
    'application/rsd+xml': ['rsd'],
    'application/rss+xml': ['rss'],
    'application/rtf': ['rtf'],
    'application/sbml+xml': ['sbml'],
    'application/scvp-cv-request': ['scq'],
    'application/scvp-cv-response': ['scs'],
    'application/scvp-vp-request': ['spq'],
    'application/scvp-vp-response': ['spp'],
    'application/sdp': ['sdp'],
    'application/senml+xml': ['senmlx'],
    'application/sensml+xml': ['sensmlx'],
    'application/set-payment-initiation': ['setpay'],
    'application/set-registration-initiation': ['setreg'],
    'application/shf+xml': ['shf'],
    'application/sieve': ['siv', 'sieve'],
    'application/smil+xml': ['smi', 'smil'],
    'application/sparql-query': ['rq'],
    'application/sparql-results+xml': ['srx'],
    'application/sql': ['sql'],
    'application/srgs': ['gram'],
    'application/srgs+xml': ['grxml'],
    'application/sru+xml': ['sru'],
    'application/ssdl+xml': ['ssdl'],
    'application/ssml+xml': ['ssml'],
    'application/swid+xml': ['swidtag'],
    'application/tei+xml': ['tei', 'teicorpus'],
    'application/thraud+xml': ['tfi'],
    'application/timestamped-data': ['tsd'],
    'application/toml': ['toml'],
    'application/trig': ['trig'],
    'application/ttml+xml': ['ttml'],
    'application/ubjson': ['ubj'],
    'application/urc-ressheet+xml': ['rsheet'],
    'application/urc-targetdesc+xml': ['td'],
    'application/voicexml+xml': ['vxml'],
    'application/wasm': ['wasm'],
    'application/watcherinfo+xml': ['wif'],
    'application/widget': ['wgt'],
    'application/winhlp': ['hlp'],
    'application/wsdl+xml': ['wsdl'],
    'application/wspolicy+xml': ['wspolicy'],
    'application/xaml+xml': ['xaml'],
    'application/xcap-att+xml': ['xav'],
    'application/xcap-caps+xml': ['xca'],
    'application/xcap-diff+xml': ['xdf'],
    'application/xcap-el+xml': ['xel'],
    'application/xcap-ns+xml': ['xns'],
    'application/xenc+xml': ['xenc'],
    'application/xfdf': ['xfdf'],
    'application/xhtml+xml': ['xhtml', 'xht'],
    'application/xliff+xml': ['xlf'],
    'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
    'application/xml-dtd': ['dtd'],
    'application/xop+xml': ['xop'],
    'application/xproc+xml': ['xpl'],
    'application/xslt+xml': ['*xsl', 'xslt'],
    'application/xspf+xml': ['xspf'],
    'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
    'application/yang': ['yang'],
    'application/yin+xml': ['yin'],
    'application/zip': ['zip'],
    'audio/3gpp': ['*3gpp'],
    'audio/aac': ['adts', 'aac'],
    'audio/adpcm': ['adp'],
    'audio/amr': ['amr'],
    'audio/basic': ['au', 'snd'],
    'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
    'audio/mobile-xmf': ['mxmf'],
    'audio/mp3': ['*mp3'],
    'audio/mp4': ['m4a', 'mp4a'],
    'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
    'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
    'audio/s3m': ['s3m'],
    'audio/silk': ['sil'],
    'audio/wav': ['wav'],
    'audio/wave': ['*wav'],
    'audio/webm': ['weba'],
    'audio/xm': ['xm'],
    'font/collection': ['ttc'],
    'font/otf': ['otf'],
    'font/ttf': ['ttf'],
    'font/woff': ['woff'],
    'font/woff2': ['woff2'],
    'image/aces': ['exr'],
    'image/apng': ['apng'],
    'image/avci': ['avci'],
    'image/avcs': ['avcs'],
    'image/avif': ['avif'],
    'image/bmp': ['bmp', 'dib'],
    'image/cgm': ['cgm'],
    'image/dicom-rle': ['drle'],
    'image/dpx': ['dpx'],
    'image/emf': ['emf'],
    'image/fits': ['fits'],
    'image/g3fax': ['g3'],
    'image/gif': ['gif'],
    'image/heic': ['heic'],
    'image/heic-sequence': ['heics'],
    'image/heif': ['heif'],
    'image/heif-sequence': ['heifs'],
    'image/hej2k': ['hej2'],
    'image/hsj2': ['hsj2'],
    'image/ief': ['ief'],
    'image/jls': ['jls'],
    'image/jp2': ['jp2', 'jpg2'],
    'image/jpeg': ['jpeg', 'jpg', 'jpe'],
    'image/jph': ['jph'],
    'image/jphc': ['jhc'],
    'image/jpm': ['jpm', 'jpgm'],
    'image/jpx': ['jpx', 'jpf'],
    'image/jxl': ['jxl'],
    'image/jxr': ['jxr'],
    'image/jxra': ['jxra'],
    'image/jxrs': ['jxrs'],
    'image/jxs': ['jxs'],
    'image/jxsc': ['jxsc'],
    'image/jxsi': ['jxsi'],
    'image/jxss': ['jxss'],
    'image/ktx': ['ktx'],
    'image/ktx2': ['ktx2'],
    'image/png': ['png'],
    'image/sgi': ['sgi'],
    'image/svg+xml': ['svg', 'svgz'],
    'image/t38': ['t38'],
    'image/tiff': ['tif', 'tiff'],
    'image/tiff-fx': ['tfx'],
    'image/webp': ['webp'],
    'image/wmf': ['wmf'],
    'message/disposition-notification': ['disposition-notification'],
    'message/global': ['u8msg'],
    'message/global-delivery-status': ['u8dsn'],
    'message/global-disposition-notification': ['u8mdn'],
    'message/global-headers': ['u8hdr'],
    'message/rfc822': ['eml', 'mime'],
    'model/3mf': ['3mf'],
    'model/gltf+json': ['gltf'],
    'model/gltf-binary': ['glb'],
    'model/iges': ['igs', 'iges'],
    'model/jt': ['jt'],
    'model/mesh': ['msh', 'mesh', 'silo'],
    'model/mtl': ['mtl'],
    'model/obj': ['obj'],
    'model/prc': ['prc'],
    'model/step+xml': ['stpx'],
    'model/step+zip': ['stpz'],
    'model/step-xml+zip': ['stpxz'],
    'model/stl': ['stl'],
    'model/u3d': ['u3d'],
    'model/vrml': ['wrl', 'vrml'],
    'model/x3d+binary': ['*x3db', 'x3dbz'],
    'model/x3d+fastinfoset': ['x3db'],
    'model/x3d+vrml': ['*x3dv', 'x3dvz'],
    'model/x3d+xml': ['x3d', 'x3dz'],
    'model/x3d-vrml': ['x3dv'],
    'text/cache-manifest': ['appcache', 'manifest'],
    'text/calendar': ['ics', 'ifb'],
    'text/coffeescript': ['coffee', 'litcoffee'],
    'text/css': ['css'],
    'text/csv': ['csv'],
    'text/html': ['html', 'htm', 'shtml'],
    'text/jade': ['jade'],
    'text/javascript': ['js', 'mjs'],
    'text/jsx': ['jsx'],
    'text/less': ['less'],
    'text/markdown': ['md', 'markdown'],
    'text/mathml': ['mml'],
    'text/mdx': ['mdx'],
    'text/n3': ['n3'],
    'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
    'text/richtext': ['rtx'],
    'text/rtf': ['*rtf'],
    'text/sgml': ['sgml', 'sgm'],
    'text/shex': ['shex'],
    'text/slim': ['slim', 'slm'],
    'text/spdx': ['spdx'],
    'text/stylus': ['stylus', 'styl'],
    'text/tab-separated-values': ['tsv'],
    'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
    'text/turtle': ['ttl'],
    'text/uri-list': ['uri', 'uris', 'urls'],
    'text/vcard': ['vcard'],
    'text/vtt': ['vtt'],
    'text/wgsl': ['wgsl'],
    'text/xml': ['*xml'],
    'text/yaml': ['yaml', 'yml'],
    'video/3gpp': ['3gp', '3gpp'],
    'video/3gpp2': ['3g2'],
    'video/h261': ['h261'],
    'video/h263': ['h263'],
    'video/h264': ['h264'],
    'video/iso.segment': ['m4s'],
    'video/jpeg': ['jpgv'],
    'video/jpm': ['*jpm', '*jpgm'],
    'video/mj2': ['mj2', 'mjp2'],
    'video/mp2t': ['ts', 'm2t', 'm2ts', 'mts'],
    'video/mp4': ['mp4', 'mp4v', 'mpg4'],
    'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
    'video/ogg': ['ogv'],
    'video/quicktime': ['qt', 'mov'],
    'video/webm': ['webm'],
}
Object.freeze(Vo)
var Go = Vo
var we = function (e, t, i, a) {
        if (i === 'a' && !a)
            throw new TypeError('Private accessor was defined without a getter')
        if (typeof t == 'function' ? e !== t || !a : !t.has(e))
            throw new TypeError(
                'Cannot read private member from an object whose class did not declare it',
            )
        return i === 'm' ? a : i === 'a' ? a.call(e) : a ? a.value : t.get(e)
    },
    _t,
    Ht,
    lt,
    _a = class {
        constructor(...t) {
            _t.set(this, new Map()),
                Ht.set(this, new Map()),
                lt.set(this, new Map())
            for (let i of t) this.define(i)
        }
        define(t, i = !1) {
            for (let [a, n] of Object.entries(t)) {
                ;(a = a.toLowerCase()),
                    (n = n.map((r) => r.toLowerCase())),
                    we(this, lt, 'f').has(a) ||
                        we(this, lt, 'f').set(a, new Set())
                let o = we(this, lt, 'f').get(a),
                    l = !0
                for (let r of n) {
                    let s = r.startsWith('*')
                    if (
                        ((r = s ? r.slice(1) : r),
                        o?.add(r),
                        l && we(this, Ht, 'f').set(a, r),
                        (l = !1),
                        s)
                    )
                        continue
                    let p = we(this, _t, 'f').get(r)
                    if (p && p != a && !i)
                        throw new Error(
                            `"${a} -> ${r}" conflicts with "${p} -> ${r}". Pass \`force=true\` to override this definition.`,
                        )
                    we(this, _t, 'f').set(r, a)
                }
            }
            return this
        }
        getType(t) {
            if (typeof t != 'string') return null
            let i = t.replace(/^.*[/\\]/, '').toLowerCase(),
                a = i.replace(/^.*\./, '').toLowerCase(),
                n = i.length < t.length
            return !(a.length < i.length - 1) && n
                ? null
                : (we(this, _t, 'f').get(a) ?? null)
        }
        getExtension(t) {
            return typeof t != 'string'
                ? null
                : ((t = t?.split?.(';')[0]),
                  (t && we(this, Ht, 'f').get(t.trim().toLowerCase())) ?? null)
        }
        getAllExtensions(t) {
            return typeof t != 'string'
                ? null
                : (we(this, lt, 'f').get(t.toLowerCase()) ?? null)
        }
        _freeze() {
            ;(this.define = () => {
                throw new Error(
                    'define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances',
                )
            }),
                Object.freeze(this)
            for (let t of we(this, lt, 'f').values()) Object.freeze(t)
            return this
        }
        _getTestState() {
            return { types: we(this, _t, 'f'), extensions: we(this, Ht, 'f') }
        }
    }
;(_t = new WeakMap()), (Ht = new WeakMap()), (lt = new WeakMap())
var Ra = _a
var Uo = new Ra(Go, ko)._freeze()
var Wo = ({ addFilter: e, utils: t }) => {
        let { Type: i, replaceInString: a, toNaturalFileSize: n } = t
        return (
            e('ALLOW_HOPPER_ITEM', (o, { query: l }) => {
                if (!l('GET_ALLOW_FILE_SIZE_VALIDATION')) return !0
                let r = l('GET_MAX_FILE_SIZE')
                if (r !== null && o.size > r) return !1
                let s = l('GET_MIN_FILE_SIZE')
                return !(s !== null && o.size < s)
            }),
            e(
                'LOAD_FILE',
                (o, { query: l }) =>
                    new Promise((r, s) => {
                        if (!l('GET_ALLOW_FILE_SIZE_VALIDATION')) return r(o)
                        let p = l('GET_FILE_VALIDATE_SIZE_FILTER')
                        if (p && !p(o)) return r(o)
                        let c = l('GET_MAX_FILE_SIZE')
                        if (c !== null && o.size > c) {
                            s({
                                status: {
                                    main: l('GET_LABEL_MAX_FILE_SIZE_EXCEEDED'),
                                    sub: a(l('GET_LABEL_MAX_FILE_SIZE'), {
                                        filesize: n(
                                            c,
                                            '.',
                                            l('GET_FILE_SIZE_BASE'),
                                            l('GET_FILE_SIZE_LABELS', l),
                                        ),
                                    }),
                                },
                            })
                            return
                        }
                        let d = l('GET_MIN_FILE_SIZE')
                        if (d !== null && o.size < d) {
                            s({
                                status: {
                                    main: l('GET_LABEL_MIN_FILE_SIZE_EXCEEDED'),
                                    sub: a(l('GET_LABEL_MIN_FILE_SIZE'), {
                                        filesize: n(
                                            d,
                                            '.',
                                            l('GET_FILE_SIZE_BASE'),
                                            l('GET_FILE_SIZE_LABELS', l),
                                        ),
                                    }),
                                },
                            })
                            return
                        }
                        let m = l('GET_MAX_TOTAL_FILE_SIZE')
                        if (
                            m !== null &&
                            l('GET_ACTIVE_ITEMS').reduce(
                                (f, g) => f + g.fileSize,
                                0,
                            ) > m
                        ) {
                            s({
                                status: {
                                    main: l(
                                        'GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED',
                                    ),
                                    sub: a(l('GET_LABEL_MAX_TOTAL_FILE_SIZE'), {
                                        filesize: n(
                                            m,
                                            '.',
                                            l('GET_FILE_SIZE_BASE'),
                                            l('GET_FILE_SIZE_LABELS', l),
                                        ),
                                    }),
                                },
                            })
                            return
                        }
                        r(o)
                    }),
            ),
            {
                options: {
                    allowFileSizeValidation: [!0, i.BOOLEAN],
                    maxFileSize: [null, i.INT],
                    minFileSize: [null, i.INT],
                    maxTotalFileSize: [null, i.INT],
                    fileValidateSizeFilter: [null, i.FUNCTION],
                    labelMinFileSizeExceeded: ['File is too small', i.STRING],
                    labelMinFileSize: [
                        'Minimum file size is {filesize}',
                        i.STRING,
                    ],
                    labelMaxFileSizeExceeded: ['File is too large', i.STRING],
                    labelMaxFileSize: [
                        'Maximum file size is {filesize}',
                        i.STRING,
                    ],
                    labelMaxTotalFileSizeExceeded: [
                        'Maximum total size exceeded',
                        i.STRING,
                    ],
                    labelMaxTotalFileSize: [
                        'Maximum total file size is {filesize}',
                        i.STRING,
                    ],
                },
            }
        )
    },
    Zp = typeof window < 'u' && typeof window.document < 'u'
Zp &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: Wo }),
    )
var Ho = Wo
var jo = ({ addFilter: e, utils: t }) => {
        let {
                Type: i,
                isString: a,
                replaceInString: n,
                guesstimateMimeType: o,
                getExtensionFromFilename: l,
                getFilenameFromURL: r,
            } = t,
            s = (u, f) => {
                let g = (/^[^/]+/.exec(u) || []).pop(),
                    h = f.slice(0, -2)
                return g === h
            },
            p = (u, f) => u.some((g) => (/\*$/.test(g) ? s(f, g) : g === f)),
            c = (u) => {
                let f = ''
                if (a(u)) {
                    let g = r(u),
                        h = l(g)
                    h && (f = o(h))
                } else f = u.type
                return f
            },
            d = (u, f, g) => {
                if (f.length === 0) return !0
                let h = c(u)
                return g
                    ? new Promise((I, E) => {
                          g(u, h)
                              .then((T) => {
                                  p(f, T) ? I() : E()
                              })
                              .catch(E)
                      })
                    : p(f, h)
            },
            m = (u) => (f) => (u[f] === null ? !1 : u[f] || f)
        return (
            e('SET_ATTRIBUTE_TO_OPTION_MAP', (u) =>
                Object.assign(u, { accept: 'acceptedFileTypes' }),
            ),
            e('ALLOW_HOPPER_ITEM', (u, { query: f }) =>
                f('GET_ALLOW_FILE_TYPE_VALIDATION')
                    ? d(u, f('GET_ACCEPTED_FILE_TYPES'))
                    : !0,
            ),
            e(
                'LOAD_FILE',
                (u, { query: f }) =>
                    new Promise((g, h) => {
                        if (!f('GET_ALLOW_FILE_TYPE_VALIDATION')) {
                            g(u)
                            return
                        }
                        let I = f('GET_ACCEPTED_FILE_TYPES'),
                            E = f('GET_FILE_VALIDATE_TYPE_DETECT_TYPE'),
                            T = d(u, I, E),
                            v = () => {
                                let y = I.map(
                                        m(
                                            f(
                                                'GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP',
                                            ),
                                        ),
                                    ).filter((w) => w !== !1),
                                    b = y.filter((w, x) => y.indexOf(w) === x)
                                h({
                                    status: {
                                        main: f(
                                            'GET_LABEL_FILE_TYPE_NOT_ALLOWED',
                                        ),
                                        sub: n(
                                            f(
                                                'GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES',
                                            ),
                                            {
                                                allTypes: b.join(', '),
                                                allButLastType: b
                                                    .slice(0, -1)
                                                    .join(', '),
                                                lastType: b[b.length - 1],
                                            },
                                        ),
                                    },
                                })
                            }
                        if (typeof T == 'boolean') return T ? g(u) : v()
                        T.then(() => {
                            g(u)
                        }).catch(v)
                    }),
            ),
            {
                options: {
                    allowFileTypeValidation: [!0, i.BOOLEAN],
                    acceptedFileTypes: [[], i.ARRAY],
                    labelFileTypeNotAllowed: [
                        'File is of invalid type',
                        i.STRING,
                    ],
                    fileValidateTypeLabelExpectedTypes: [
                        'Expects {allButLastType} or {lastType}',
                        i.STRING,
                    ],
                    fileValidateTypeLabelExpectedTypesMap: [{}, i.OBJECT],
                    fileValidateTypeDetectType: [null, i.FUNCTION],
                },
            }
        )
    },
    Kp = typeof window < 'u' && typeof window.document < 'u'
Kp &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: jo }),
    )
var qo = jo
var Yo = (e) => /^image/.test(e.type),
    $o = ({ addFilter: e, utils: t }) => {
        let { Type: i, isFile: a, getNumericAspectRatioFromString: n } = t,
            o = (p, c) => !(!Yo(p.file) || !c('GET_ALLOW_IMAGE_CROP')),
            l = (p) => typeof p == 'object',
            r = (p) => typeof p == 'number',
            s = (p, c) =>
                p.setMetadata(
                    'crop',
                    Object.assign({}, p.getMetadata('crop'), c),
                )
        return (
            e('DID_CREATE_ITEM', (p, { query: c }) => {
                p.extend('setImageCrop', (d) => {
                    if (!(!o(p, c) || !l(center)))
                        return p.setMetadata('crop', d), d
                }),
                    p.extend('setImageCropCenter', (d) => {
                        if (!(!o(p, c) || !l(d))) return s(p, { center: d })
                    }),
                    p.extend('setImageCropZoom', (d) => {
                        if (!(!o(p, c) || !r(d)))
                            return s(p, { zoom: Math.max(1, d) })
                    }),
                    p.extend('setImageCropRotation', (d) => {
                        if (!(!o(p, c) || !r(d))) return s(p, { rotation: d })
                    }),
                    p.extend('setImageCropFlip', (d) => {
                        if (!(!o(p, c) || !l(d))) return s(p, { flip: d })
                    }),
                    p.extend('setImageCropAspectRatio', (d) => {
                        if (!o(p, c) || typeof d > 'u') return
                        let m = p.getMetadata('crop'),
                            u = n(d),
                            f = {
                                center: { x: 0.5, y: 0.5 },
                                flip: m
                                    ? Object.assign({}, m.flip)
                                    : { horizontal: !1, vertical: !1 },
                                rotation: 0,
                                zoom: 1,
                                aspectRatio: u,
                            }
                        return p.setMetadata('crop', f), f
                    })
            }),
            e(
                'DID_LOAD_ITEM',
                (p, { query: c }) =>
                    new Promise((d, m) => {
                        let u = p.file
                        if (
                            !a(u) ||
                            !Yo(u) ||
                            !c('GET_ALLOW_IMAGE_CROP') ||
                            p.getMetadata('crop')
                        )
                            return d(p)
                        let g = c('GET_IMAGE_CROP_ASPECT_RATIO')
                        p.setMetadata('crop', {
                            center: { x: 0.5, y: 0.5 },
                            flip: { horizontal: !1, vertical: !1 },
                            rotation: 0,
                            zoom: 1,
                            aspectRatio: g ? n(g) : null,
                        }),
                            d(p)
                    }),
            ),
            {
                options: {
                    allowImageCrop: [!0, i.BOOLEAN],
                    imageCropAspectRatio: [null, i.STRING],
                },
            }
        )
    },
    Jp = typeof window < 'u' && typeof window.document < 'u'
Jp &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: $o }),
    )
var Xo = $o
var wa = (e) => /^image/.test(e.type),
    Qo = (e) => {
        let { addFilter: t, utils: i, views: a } = e,
            { Type: n, createRoute: o, createItemAPI: l = (c) => c } = i,
            { fileActionButton: r } = a
        t(
            'SHOULD_REMOVE_ON_REVERT',
            (c, { item: d, query: m }) =>
                new Promise((u) => {
                    let { file: f } = d,
                        g =
                            m('GET_ALLOW_IMAGE_EDIT') &&
                            m('GET_IMAGE_EDIT_ALLOW_EDIT') &&
                            wa(f)
                    u(!g)
                }),
        ),
            t(
                'DID_LOAD_ITEM',
                (c, { query: d, dispatch: m }) =>
                    new Promise((u, f) => {
                        if (c.origin > 1) {
                            u(c)
                            return
                        }
                        let { file: g } = c
                        if (
                            !d('GET_ALLOW_IMAGE_EDIT') ||
                            !d('GET_IMAGE_EDIT_INSTANT_EDIT')
                        ) {
                            u(c)
                            return
                        }
                        if (!wa(g)) {
                            u(c)
                            return
                        }
                        let h = (E, T, v) => (y) => {
                                s.shift(), y ? T(E) : v(E), m('KICK'), I()
                            },
                            I = () => {
                                if (!s.length) return
                                let { item: E, resolve: T, reject: v } = s[0]
                                m('EDIT_ITEM', {
                                    id: E.id,
                                    handleEditorResponse: h(E, T, v),
                                })
                            }
                        p({ item: c, resolve: u, reject: f }),
                            s.length === 1 && I()
                    }),
            ),
            t('DID_CREATE_ITEM', (c, { query: d, dispatch: m }) => {
                c.extend('edit', () => {
                    m('EDIT_ITEM', { id: c.id })
                })
            })
        let s = [],
            p = (c) => (s.push(c), c)
        return (
            t('CREATE_VIEW', (c) => {
                let { is: d, view: m, query: u } = c
                if (!u('GET_ALLOW_IMAGE_EDIT')) return
                let f = u('GET_ALLOW_IMAGE_PREVIEW')
                if (!((d('file-info') && !f) || (d('file') && f))) return
                let h = u('GET_IMAGE_EDIT_EDITOR')
                if (!h) return
                h.filepondCallbackBridge ||
                    ((h.outputData = !0),
                    (h.outputFile = !1),
                    (h.filepondCallbackBridge = {
                        onconfirm: h.onconfirm || (() => {}),
                        oncancel: h.oncancel || (() => {}),
                    }))
                let I = ({ root: v, props: y, action: b }) => {
                        let { id: w } = y,
                            { handleEditorResponse: x } = b
                        ;(h.cropAspectRatio =
                            v.query('GET_IMAGE_CROP_ASPECT_RATIO') ||
                            h.cropAspectRatio),
                            (h.outputCanvasBackgroundColor =
                                v.query(
                                    'GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR',
                                ) || h.outputCanvasBackgroundColor)
                        let _ = v.query('GET_ITEM', w)
                        if (!_) return
                        let P = _.file,
                            O = _.getMetadata('crop'),
                            M = {
                                center: { x: 0.5, y: 0.5 },
                                flip: { horizontal: !1, vertical: !1 },
                                zoom: 1,
                                rotation: 0,
                                aspectRatio: null,
                            },
                            N = _.getMetadata('resize'),
                            S = _.getMetadata('filter') || null,
                            D = _.getMetadata('filters') || null,
                            R = _.getMetadata('colors') || null,
                            L = _.getMetadata('markup') || null,
                            z = {
                                crop: O || M,
                                size: N
                                    ? {
                                          upscale: N.upscale,
                                          mode: N.mode,
                                          width: N.size.width,
                                          height: N.size.height,
                                      }
                                    : null,
                                filter: D
                                    ? D.id || D.matrix
                                    : v.query('GET_ALLOW_IMAGE_FILTER') &&
                                        v.query(
                                            'GET_IMAGE_FILTER_COLOR_MATRIX',
                                        ) &&
                                        !R
                                      ? S
                                      : null,
                                color: R,
                                markup: L,
                            }
                        ;(h.onconfirm = ({ data: F }) => {
                            let {
                                    crop: G,
                                    size: C,
                                    filter: Y,
                                    color: X,
                                    colorMatrix: Q,
                                    markup: le,
                                } = F,
                                k = {}
                            if ((G && (k.crop = G), C)) {
                                let H = (_.getMetadata('resize') || {}).size,
                                    q = { width: C.width, height: C.height }
                                !(q.width && q.height) &&
                                    H &&
                                    ((q.width = H.width),
                                    (q.height = H.height)),
                                    (q.width || q.height) &&
                                        (k.resize = {
                                            upscale: C.upscale,
                                            mode: C.mode,
                                            size: q,
                                        })
                            }
                            le && (k.markup = le),
                                (k.colors = X),
                                (k.filters = Y),
                                (k.filter = Q),
                                _.setMetadata(k),
                                h.filepondCallbackBridge.onconfirm(F, l(_)),
                                x &&
                                    (h.onclose = () => {
                                        x(!0), (h.onclose = null)
                                    })
                        }),
                            (h.oncancel = () => {
                                h.filepondCallbackBridge.oncancel(l(_)),
                                    x &&
                                        (h.onclose = () => {
                                            x(!1), (h.onclose = null)
                                        })
                            }),
                            h.open(P, z)
                    },
                    E = ({ root: v, props: y }) => {
                        if (!u('GET_IMAGE_EDIT_ALLOW_EDIT')) return
                        let { id: b } = y,
                            w = u('GET_ITEM', b)
                        if (!w) return
                        let x = w.file
                        if (wa(x))
                            if (
                                ((v.ref.handleEdit = (_) => {
                                    _.stopPropagation(),
                                        v.dispatch('EDIT_ITEM', { id: b })
                                }),
                                f)
                            ) {
                                let _ = m.createChildView(r, {
                                    label: 'edit',
                                    icon: u('GET_IMAGE_EDIT_ICON_EDIT'),
                                    opacity: 0,
                                })
                                _.element.classList.add(
                                    'filepond--action-edit-item',
                                ),
                                    (_.element.dataset.align = u(
                                        'GET_STYLE_IMAGE_EDIT_BUTTON_EDIT_ITEM_POSITION',
                                    )),
                                    _.on('click', v.ref.handleEdit),
                                    (v.ref.buttonEditItem =
                                        m.appendChildView(_))
                            } else {
                                let _ = m.element.querySelector(
                                        '.filepond--file-info-main',
                                    ),
                                    P = document.createElement('button')
                                ;(P.className =
                                    'filepond--action-edit-item-alt'),
                                    (P.innerHTML =
                                        u('GET_IMAGE_EDIT_ICON_EDIT') +
                                        '<span>edit</span>'),
                                    P.addEventListener(
                                        'click',
                                        v.ref.handleEdit,
                                    ),
                                    _.appendChild(P),
                                    (v.ref.editButton = P)
                            }
                    }
                m.registerDestroyer(({ root: v }) => {
                    v.ref.buttonEditItem &&
                        v.ref.buttonEditItem.off('click', v.ref.handleEdit),
                        v.ref.editButton &&
                            v.ref.editButton.removeEventListener(
                                'click',
                                v.ref.handleEdit,
                            )
                })
                let T = { EDIT_ITEM: I, DID_LOAD_ITEM: E }
                if (f) {
                    let v = ({ root: y }) => {
                        y.ref.buttonEditItem &&
                            (y.ref.buttonEditItem.opacity = 1)
                    }
                    T.DID_IMAGE_PREVIEW_SHOW = v
                }
                m.registerWriter(o(T))
            }),
            {
                options: {
                    allowImageEdit: [!0, n.BOOLEAN],
                    styleImageEditButtonEditItemPosition: [
                        'bottom center',
                        n.STRING,
                    ],
                    imageEditInstantEdit: [!1, n.BOOLEAN],
                    imageEditAllowEdit: [!0, n.BOOLEAN],
                    imageEditIconEdit: [
                        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M8.5 17h1.586l7-7L15.5 8.414l-7 7V17zm-1.707-2.707l8-8a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 10.5 19h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707z" fill="currentColor" fill-rule="nonzero"/></svg>',
                        n.STRING,
                    ],
                    imageEditEditor: [null, n.OBJECT],
                },
            }
        )
    },
    em = typeof window < 'u' && typeof window.document < 'u'
em &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: Qo }),
    )
var Zo = Qo
var tm = (e) => /^image\/jpeg/.test(e.type),
    rt = {
        JPEG: 65496,
        APP1: 65505,
        EXIF: 1165519206,
        TIFF: 18761,
        Orientation: 274,
        Unknown: 65280,
    },
    st = (e, t, i = !1) => e.getUint16(t, i),
    Ko = (e, t, i = !1) => e.getUint32(t, i),
    im = (e) =>
        new Promise((t, i) => {
            let a = new FileReader()
            ;(a.onload = function (n) {
                let o = new DataView(n.target.result)
                if (st(o, 0) !== rt.JPEG) {
                    t(-1)
                    return
                }
                let l = o.byteLength,
                    r = 2
                for (; r < l; ) {
                    let s = st(o, r)
                    if (((r += 2), s === rt.APP1)) {
                        if (Ko(o, (r += 2)) !== rt.EXIF) break
                        let p = st(o, (r += 6)) === rt.TIFF
                        r += Ko(o, r + 4, p)
                        let c = st(o, r, p)
                        r += 2
                        for (let d = 0; d < c; d++)
                            if (st(o, r + d * 12, p) === rt.Orientation) {
                                t(st(o, r + d * 12 + 8, p))
                                return
                            }
                    } else {
                        if ((s & rt.Unknown) !== rt.Unknown) break
                        r += st(o, r)
                    }
                }
                t(-1)
            }),
                a.readAsArrayBuffer(e.slice(0, 64 * 1024))
        }),
    am = typeof window < 'u' && typeof window.document < 'u',
    nm = () => am,
    om =
        'data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=',
    Jo,
    Ii = nm() ? new Image() : {}
Ii.onload = () => (Jo = Ii.naturalWidth > Ii.naturalHeight)
Ii.src = om
var lm = () => Jo,
    el = ({ addFilter: e, utils: t }) => {
        let { Type: i, isFile: a } = t
        return (
            e(
                'DID_LOAD_ITEM',
                (n, { query: o }) =>
                    new Promise((l, r) => {
                        let s = n.file
                        if (
                            !a(s) ||
                            !tm(s) ||
                            !o('GET_ALLOW_IMAGE_EXIF_ORIENTATION') ||
                            !lm()
                        )
                            return l(n)
                        im(s).then((p) => {
                            n.setMetadata('exif', { orientation: p }), l(n)
                        })
                    }),
            ),
            { options: { allowImageExifOrientation: [!0, i.BOOLEAN] } }
        )
    },
    rm = typeof window < 'u' && typeof window.document < 'u'
rm &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: el }),
    )
var tl = el
var sm = (e) => /^image/.test(e.type),
    il = (e, t) => qt(e.x * t, e.y * t),
    al = (e, t) => qt(e.x + t.x, e.y + t.y),
    cm = (e) => {
        let t = Math.sqrt(e.x * e.x + e.y * e.y)
        return t === 0 ? { x: 0, y: 0 } : qt(e.x / t, e.y / t)
    },
    vi = (e, t, i) => {
        let a = Math.cos(t),
            n = Math.sin(t),
            o = qt(e.x - i.x, e.y - i.y)
        return qt(i.x + a * o.x - n * o.y, i.y + n * o.x + a * o.y)
    },
    qt = (e = 0, t = 0) => ({ x: e, y: t }),
    Te = (e, t, i = 1, a) => {
        if (typeof e == 'string') return parseFloat(e) * i
        if (typeof e == 'number')
            return e * (a ? t[a] : Math.min(t.width, t.height))
    },
    dm = (e, t, i) => {
        let a = e.borderStyle || e.lineStyle || 'solid',
            n = e.backgroundColor || e.fontColor || 'transparent',
            o = e.borderColor || e.lineColor || 'transparent',
            l = Te(e.borderWidth || e.lineWidth, t, i),
            r = e.lineCap || 'round',
            s = e.lineJoin || 'round',
            p = typeof a == 'string' ? '' : a.map((d) => Te(d, t, i)).join(','),
            c = e.opacity || 1
        return {
            'stroke-linecap': r,
            'stroke-linejoin': s,
            'stroke-width': l || 0,
            'stroke-dasharray': p,
            stroke: o,
            fill: n,
            opacity: c,
        }
    },
    Se = (e) => e != null,
    pm = (e, t, i = 1) => {
        let a = Te(e.x, t, i, 'width') || Te(e.left, t, i, 'width'),
            n = Te(e.y, t, i, 'height') || Te(e.top, t, i, 'height'),
            o = Te(e.width, t, i, 'width'),
            l = Te(e.height, t, i, 'height'),
            r = Te(e.right, t, i, 'width'),
            s = Te(e.bottom, t, i, 'height')
        return (
            Se(n) || (Se(l) && Se(s) ? (n = t.height - l - s) : (n = s)),
            Se(a) || (Se(o) && Se(r) ? (a = t.width - o - r) : (a = r)),
            Se(o) || (Se(a) && Se(r) ? (o = t.width - a - r) : (o = 0)),
            Se(l) || (Se(n) && Se(s) ? (l = t.height - n - s) : (l = 0)),
            { x: a || 0, y: n || 0, width: o || 0, height: l || 0 }
        )
    },
    mm = (e) =>
        e.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x} ${t.y}`).join(' '),
    Ne = (e, t) => Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
    um = 'http://www.w3.org/2000/svg',
    Rt = (e, t) => {
        let i = document.createElementNS(um, e)
        return t && Ne(i, t), i
    },
    fm = (e) => Ne(e, { ...e.rect, ...e.styles }),
    gm = (e) => {
        let t = e.rect.x + e.rect.width * 0.5,
            i = e.rect.y + e.rect.height * 0.5,
            a = e.rect.width * 0.5,
            n = e.rect.height * 0.5
        return Ne(e, { cx: t, cy: i, rx: a, ry: n, ...e.styles })
    },
    hm = { contain: 'xMidYMid meet', cover: 'xMidYMid slice' },
    Em = (e, t) => {
        Ne(e, {
            ...e.rect,
            ...e.styles,
            preserveAspectRatio: hm[t.fit] || 'none',
        })
    },
    bm = { left: 'start', center: 'middle', right: 'end' },
    Tm = (e, t, i, a) => {
        let n = Te(t.fontSize, i, a),
            o = t.fontFamily || 'sans-serif',
            l = t.fontWeight || 'normal',
            r = bm[t.textAlign] || 'start'
        Ne(e, {
            ...e.rect,
            ...e.styles,
            'stroke-width': 0,
            'font-weight': l,
            'font-size': n,
            'font-family': o,
            'text-anchor': r,
        }),
            e.text !== t.text &&
                ((e.text = t.text),
                (e.textContent = t.text.length ? t.text : ' '))
    },
    Im = (e, t, i, a) => {
        Ne(e, { ...e.rect, ...e.styles, fill: 'none' })
        let n = e.childNodes[0],
            o = e.childNodes[1],
            l = e.childNodes[2],
            r = e.rect,
            s = { x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height }
        if ((Ne(n, { x1: r.x, y1: r.y, x2: s.x, y2: s.y }), !t.lineDecoration))
            return
        ;(o.style.display = 'none'), (l.style.display = 'none')
        let p = cm({ x: s.x - r.x, y: s.y - r.y }),
            c = Te(0.05, i, a)
        if (t.lineDecoration.indexOf('arrow-begin') !== -1) {
            let d = il(p, c),
                m = al(r, d),
                u = vi(r, 2, m),
                f = vi(r, -2, m)
            Ne(o, {
                style: 'display:block;',
                d: `M${u.x},${u.y} L${r.x},${r.y} L${f.x},${f.y}`,
            })
        }
        if (t.lineDecoration.indexOf('arrow-end') !== -1) {
            let d = il(p, -c),
                m = al(s, d),
                u = vi(s, 2, m),
                f = vi(s, -2, m)
            Ne(l, {
                style: 'display:block;',
                d: `M${u.x},${u.y} L${s.x},${s.y} L${f.x},${f.y}`,
            })
        }
    },
    vm = (e, t, i, a) => {
        Ne(e, {
            ...e.styles,
            fill: 'none',
            d: mm(
                t.points.map((n) => ({
                    x: Te(n.x, i, a, 'width'),
                    y: Te(n.y, i, a, 'height'),
                })),
            ),
        })
    },
    xi = (e) => (t) => Rt(e, { id: t.id }),
    xm = (e) => {
        let t = Rt('image', {
            id: e.id,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            opacity: '0',
        })
        return (
            (t.onload = () => {
                t.setAttribute('opacity', e.opacity || 1)
            }),
            t.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                'xlink:href',
                e.src,
            ),
            t
        )
    },
    ym = (e) => {
        let t = Rt('g', {
                id: e.id,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            }),
            i = Rt('line')
        t.appendChild(i)
        let a = Rt('path')
        t.appendChild(a)
        let n = Rt('path')
        return t.appendChild(n), t
    },
    _m = {
        image: xm,
        rect: xi('rect'),
        ellipse: xi('ellipse'),
        text: xi('text'),
        path: xi('path'),
        line: ym,
    },
    Rm = { rect: fm, ellipse: gm, image: Em, text: Tm, path: vm, line: Im },
    wm = (e, t) => _m[e](t),
    Sm = (e, t, i, a, n) => {
        t !== 'path' && (e.rect = pm(i, a, n)),
            (e.styles = dm(i, a, n)),
            Rm[t](e, i, a, n)
    },
    Lm = ['x', 'y', 'left', 'top', 'right', 'bottom', 'width', 'height'],
    Am = (e) => (typeof e == 'string' && /%/.test(e) ? parseFloat(e) / 100 : e),
    Mm = (e) => {
        let [t, i] = e,
            a = i.points ? {} : Lm.reduce((n, o) => ((n[o] = Am(i[o])), n), {})
        return [t, { zIndex: 0, ...i, ...a }]
    },
    Om = (e, t) =>
        e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0,
    Pm = (e) =>
        e.utils.createView({
            name: 'image-preview-markup',
            tag: 'svg',
            ignoreRect: !0,
            mixins: {
                apis: ['width', 'height', 'crop', 'markup', 'resize', 'dirty'],
            },
            write: ({ root: t, props: i }) => {
                if (!i.dirty) return
                let { crop: a, resize: n, markup: o } = i,
                    l = i.width,
                    r = i.height,
                    s = a.width,
                    p = a.height
                if (n) {
                    let { size: u } = n,
                        f = u && u.width,
                        g = u && u.height,
                        h = n.mode,
                        I = n.upscale
                    f && !g && (g = f), g && !f && (f = g)
                    let E = s < f && p < g
                    if (!E || (E && I)) {
                        let T = f / s,
                            v = g / p
                        if (h === 'force') (s = f), (p = g)
                        else {
                            let y
                            h === 'cover'
                                ? (y = Math.max(T, v))
                                : h === 'contain' && (y = Math.min(T, v)),
                                (s = s * y),
                                (p = p * y)
                        }
                    }
                }
                let c = { width: l, height: r }
                t.element.setAttribute('width', c.width),
                    t.element.setAttribute('height', c.height)
                let d = Math.min(l / s, r / p)
                t.element.innerHTML = ''
                let m = t.query('GET_IMAGE_PREVIEW_MARKUP_FILTER')
                o.filter(m)
                    .map(Mm)
                    .sort(Om)
                    .forEach((u) => {
                        let [f, g] = u,
                            h = wm(f, g)
                        Sm(h, f, g, c, d), t.element.appendChild(h)
                    })
            },
        }),
    jt = (e, t) => ({ x: e, y: t }),
    Dm = (e, t) => e.x * t.x + e.y * t.y,
    nl = (e, t) => jt(e.x - t.x, e.y - t.y),
    Fm = (e, t) => Dm(nl(e, t), nl(e, t)),
    ol = (e, t) => Math.sqrt(Fm(e, t)),
    ll = (e, t) => {
        let i = e,
            a = 1.5707963267948966,
            n = t,
            o = 1.5707963267948966 - t,
            l = Math.sin(a),
            r = Math.sin(n),
            s = Math.sin(o),
            p = Math.cos(o),
            c = i / l,
            d = c * r,
            m = c * s
        return jt(p * d, p * m)
    },
    zm = (e, t) => {
        let i = e.width,
            a = e.height,
            n = ll(i, t),
            o = ll(a, t),
            l = jt(e.x + Math.abs(n.x), e.y - Math.abs(n.y)),
            r = jt(e.x + e.width + Math.abs(o.y), e.y + Math.abs(o.x)),
            s = jt(e.x - Math.abs(o.y), e.y + e.height - Math.abs(o.x))
        return { width: ol(l, r), height: ol(l, s) }
    },
    Cm = (e, t, i = 1) => {
        let a = e.height / e.width,
            n = 1,
            o = t,
            l = 1,
            r = a
        r > o && ((r = o), (l = r / a))
        let s = Math.max(n / l, o / r),
            p = e.width / (i * s * l),
            c = p * t
        return { width: p, height: c }
    },
    sl = (e, t, i, a) => {
        let n = a.x > 0.5 ? 1 - a.x : a.x,
            o = a.y > 0.5 ? 1 - a.y : a.y,
            l = n * 2 * e.width,
            r = o * 2 * e.height,
            s = zm(t, i)
        return Math.max(s.width / l, s.height / r)
    },
    cl = (e, t) => {
        let i = e.width,
            a = i * t
        a > e.height && ((a = e.height), (i = a / t))
        let n = (e.width - i) * 0.5,
            o = (e.height - a) * 0.5
        return { x: n, y: o, width: i, height: a }
    },
    Nm = (e, t = {}) => {
        let { zoom: i, rotation: a, center: n, aspectRatio: o } = t
        o || (o = e.height / e.width)
        let l = Cm(e, o, i),
            r = { x: l.width * 0.5, y: l.height * 0.5 },
            s = { x: 0, y: 0, width: l.width, height: l.height, center: r },
            p = typeof t.scaleToFit > 'u' || t.scaleToFit,
            c = sl(e, cl(s, o), a, p ? n : { x: 0.5, y: 0.5 }),
            d = i * c
        return {
            widthFloat: l.width / d,
            heightFloat: l.height / d,
            width: Math.round(l.width / d),
            height: Math.round(l.height / d),
        }
    },
    Ce = { type: 'spring', stiffness: 0.5, damping: 0.45, mass: 10 },
    Bm = (e) =>
        e.utils.createView({
            name: 'image-bitmap',
            ignoreRect: !0,
            mixins: { styles: ['scaleX', 'scaleY'] },
            create: ({ root: t, props: i }) => {
                t.appendChild(i.image)
            },
        }),
    km = (e) =>
        e.utils.createView({
            name: 'image-canvas-wrapper',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: ['crop', 'width', 'height'],
                styles: [
                    'originX',
                    'originY',
                    'translateX',
                    'translateY',
                    'scaleX',
                    'scaleY',
                    'rotateZ',
                ],
                animations: {
                    originX: Ce,
                    originY: Ce,
                    scaleX: Ce,
                    scaleY: Ce,
                    translateX: Ce,
                    translateY: Ce,
                    rotateZ: Ce,
                },
            },
            create: ({ root: t, props: i }) => {
                ;(i.width = i.image.width),
                    (i.height = i.image.height),
                    (t.ref.bitmap = t.appendChildView(
                        t.createChildView(Bm(e), { image: i.image }),
                    ))
            },
            write: ({ root: t, props: i }) => {
                let { flip: a } = i.crop,
                    { bitmap: n } = t.ref
                ;(n.scaleX = a.horizontal ? -1 : 1),
                    (n.scaleY = a.vertical ? -1 : 1)
            },
        }),
    Vm = (e) =>
        e.utils.createView({
            name: 'image-clip',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: [
                    'crop',
                    'markup',
                    'resize',
                    'width',
                    'height',
                    'dirty',
                    'background',
                ],
                styles: ['width', 'height', 'opacity'],
                animations: { opacity: { type: 'tween', duration: 250 } },
            },
            didWriteView: function ({ root: t, props: i }) {
                i.background && (t.element.style.backgroundColor = i.background)
            },
            create: ({ root: t, props: i }) => {
                ;(t.ref.image = t.appendChildView(
                    t.createChildView(km(e), Object.assign({}, i)),
                )),
                    (t.ref.createMarkup = () => {
                        t.ref.markup ||
                            (t.ref.markup = t.appendChildView(
                                t.createChildView(Pm(e), Object.assign({}, i)),
                            ))
                    }),
                    (t.ref.destroyMarkup = () => {
                        t.ref.markup &&
                            (t.removeChildView(t.ref.markup),
                            (t.ref.markup = null))
                    })
                let a = t.query('GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR')
                a !== null &&
                    (a === 'grid'
                        ? (t.element.dataset.transparencyIndicator = a)
                        : (t.element.dataset.transparencyIndicator = 'color'))
            },
            write: ({ root: t, props: i, shouldOptimize: a }) => {
                let {
                    crop: n,
                    markup: o,
                    resize: l,
                    dirty: r,
                    width: s,
                    height: p,
                } = i
                t.ref.image.crop = n
                let c = {
                        x: 0,
                        y: 0,
                        width: s,
                        height: p,
                        center: { x: s * 0.5, y: p * 0.5 },
                    },
                    d = {
                        width: t.ref.image.width,
                        height: t.ref.image.height,
                    },
                    m = { x: n.center.x * d.width, y: n.center.y * d.height },
                    u = {
                        x: c.center.x - d.width * n.center.x,
                        y: c.center.y - d.height * n.center.y,
                    },
                    f = Math.PI * 2 + (n.rotation % (Math.PI * 2)),
                    g = n.aspectRatio || d.height / d.width,
                    h = typeof n.scaleToFit > 'u' || n.scaleToFit,
                    I = sl(d, cl(c, g), f, h ? n.center : { x: 0.5, y: 0.5 }),
                    E = n.zoom * I
                o && o.length
                    ? (t.ref.createMarkup(),
                      (t.ref.markup.width = s),
                      (t.ref.markup.height = p),
                      (t.ref.markup.resize = l),
                      (t.ref.markup.dirty = r),
                      (t.ref.markup.markup = o),
                      (t.ref.markup.crop = Nm(d, n)))
                    : t.ref.markup && t.ref.destroyMarkup()
                let T = t.ref.image
                if (a) {
                    ;(T.originX = null),
                        (T.originY = null),
                        (T.translateX = null),
                        (T.translateY = null),
                        (T.rotateZ = null),
                        (T.scaleX = null),
                        (T.scaleY = null)
                    return
                }
                ;(T.originX = m.x),
                    (T.originY = m.y),
                    (T.translateX = u.x),
                    (T.translateY = u.y),
                    (T.rotateZ = f),
                    (T.scaleX = E),
                    (T.scaleY = E)
            },
        }),
    Gm = (e) =>
        e.utils.createView({
            name: 'image-preview',
            tag: 'div',
            ignoreRect: !0,
            mixins: {
                apis: [
                    'image',
                    'crop',
                    'markup',
                    'resize',
                    'dirty',
                    'background',
                ],
                styles: ['translateY', 'scaleX', 'scaleY', 'opacity'],
                animations: {
                    scaleX: Ce,
                    scaleY: Ce,
                    translateY: Ce,
                    opacity: { type: 'tween', duration: 400 },
                },
            },
            create: ({ root: t, props: i }) => {
                t.ref.clip = t.appendChildView(
                    t.createChildView(Vm(e), {
                        id: i.id,
                        image: i.image,
                        crop: i.crop,
                        markup: i.markup,
                        resize: i.resize,
                        dirty: i.dirty,
                        background: i.background,
                    }),
                )
            },
            write: ({ root: t, props: i, shouldOptimize: a }) => {
                let { clip: n } = t.ref,
                    { image: o, crop: l, markup: r, resize: s, dirty: p } = i
                if (
                    ((n.crop = l),
                    (n.markup = r),
                    (n.resize = s),
                    (n.dirty = p),
                    (n.opacity = a ? 0 : 1),
                    a || t.rect.element.hidden)
                )
                    return
                let c = o.height / o.width,
                    d = l.aspectRatio || c,
                    m = t.rect.inner.width,
                    u = t.rect.inner.height,
                    f = t.query('GET_IMAGE_PREVIEW_HEIGHT'),
                    g = t.query('GET_IMAGE_PREVIEW_MIN_HEIGHT'),
                    h = t.query('GET_IMAGE_PREVIEW_MAX_HEIGHT'),
                    I = t.query('GET_PANEL_ASPECT_RATIO'),
                    E = t.query('GET_ALLOW_MULTIPLE')
                I && !E && ((f = m * I), (d = I))
                let T = f !== null ? f : Math.max(g, Math.min(m * d, h)),
                    v = T / d
                v > m && ((v = m), (T = v * d)),
                    T > u && ((T = u), (v = u / d)),
                    (n.width = v),
                    (n.height = T)
            },
        }),
    Um = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`,
    rl = 0,
    Wm = (e) =>
        e.utils.createView({
            name: 'image-preview-overlay',
            tag: 'div',
            ignoreRect: !0,
            create: ({ root: t, props: i }) => {
                let a = Um
                if (document.querySelector('base')) {
                    let n = new URL(
                        window.location.href.replace(window.location.hash, ''),
                    ).href
                    a = a.replace(/url\(\#/g, 'url(' + n + '#')
                }
                rl++,
                    t.element.classList.add(
                        `filepond--image-preview-overlay-${i.status}`,
                    ),
                    (t.element.innerHTML = a.replace(/__UID__/g, rl))
            },
            mixins: {
                styles: ['opacity'],
                animations: { opacity: { type: 'spring', mass: 25 } },
            },
        }),
    Hm = function () {
        self.onmessage = (e) => {
            createImageBitmap(e.data.message.file).then((t) => {
                self.postMessage({ id: e.data.id, message: t }, [t])
            })
        }
    },
    jm = function () {
        self.onmessage = (e) => {
            let t = e.data.message.imageData,
                i = e.data.message.colorMatrix,
                a = t.data,
                n = a.length,
                o = i[0],
                l = i[1],
                r = i[2],
                s = i[3],
                p = i[4],
                c = i[5],
                d = i[6],
                m = i[7],
                u = i[8],
                f = i[9],
                g = i[10],
                h = i[11],
                I = i[12],
                E = i[13],
                T = i[14],
                v = i[15],
                y = i[16],
                b = i[17],
                w = i[18],
                x = i[19],
                _ = 0,
                P = 0,
                O = 0,
                M = 0,
                N = 0
            for (; _ < n; _ += 4)
                (P = a[_] / 255),
                    (O = a[_ + 1] / 255),
                    (M = a[_ + 2] / 255),
                    (N = a[_ + 3] / 255),
                    (a[_] = Math.max(
                        0,
                        Math.min(
                            (P * o + O * l + M * r + N * s + p) * 255,
                            255,
                        ),
                    )),
                    (a[_ + 1] = Math.max(
                        0,
                        Math.min(
                            (P * c + O * d + M * m + N * u + f) * 255,
                            255,
                        ),
                    )),
                    (a[_ + 2] = Math.max(
                        0,
                        Math.min(
                            (P * g + O * h + M * I + N * E + T) * 255,
                            255,
                        ),
                    )),
                    (a[_ + 3] = Math.max(
                        0,
                        Math.min(
                            (P * v + O * y + M * b + N * w + x) * 255,
                            255,
                        ),
                    ))
            self.postMessage({ id: e.data.id, message: t }, [t.data.buffer])
        }
    },
    qm = (e, t) => {
        let i = new Image()
        ;(i.onload = () => {
            let a = i.naturalWidth,
                n = i.naturalHeight
            ;(i = null), t(a, n)
        }),
            (i.src = e)
    },
    Ym = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: (e) => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: (e) => [0, -1, 1, 0, 0, e],
    },
    $m = (e, t, i, a) => {
        a !== -1 && e.transform.apply(e, Ym[a](t, i))
    },
    Xm = (e, t, i, a) => {
        ;(t = Math.round(t)), (i = Math.round(i))
        let n = document.createElement('canvas')
        ;(n.width = t), (n.height = i)
        let o = n.getContext('2d')
        return (
            a >= 5 && a <= 8 && ([t, i] = [i, t]),
            $m(o, t, i, a),
            o.drawImage(e, 0, 0, t, i),
            n
        )
    },
    dl = (e) => /^image/.test(e.type) && !/svg/.test(e.type),
    Qm = 10,
    Zm = 10,
    Km = (e) => {
        let t = Math.min(Qm / e.width, Zm / e.height),
            i = document.createElement('canvas'),
            a = i.getContext('2d'),
            n = (i.width = Math.ceil(e.width * t)),
            o = (i.height = Math.ceil(e.height * t))
        a.drawImage(e, 0, 0, n, o)
        let l = null
        try {
            l = a.getImageData(0, 0, n, o).data
        } catch {
            return null
        }
        let r = l.length,
            s = 0,
            p = 0,
            c = 0,
            d = 0
        for (; d < r; d += 4)
            (s += l[d] * l[d]),
                (p += l[d + 1] * l[d + 1]),
                (c += l[d + 2] * l[d + 2])
        return (
            (s = Sa(s, r)), (p = Sa(p, r)), (c = Sa(c, r)), { r: s, g: p, b: c }
        )
    },
    Sa = (e, t) => Math.floor(Math.sqrt(e / (t / 4))),
    Jm = (e, t) => (
        (t = t || document.createElement('canvas')),
        (t.width = e.width),
        (t.height = e.height),
        t.getContext('2d').drawImage(e, 0, 0),
        t
    ),
    eu = (e) => {
        let t
        try {
            t = new ImageData(e.width, e.height)
        } catch {
            t = document
                .createElement('canvas')
                .getContext('2d')
                .createImageData(e.width, e.height)
        }
        return t.data.set(new Uint8ClampedArray(e.data)), t
    },
    tu = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            ;(a.crossOrigin = 'Anonymous'),
                (a.onload = () => {
                    t(a)
                }),
                (a.onerror = (n) => {
                    i(n)
                }),
                (a.src = e)
        }),
    iu = (e) => {
        let t = Wm(e),
            i = Gm(e),
            { createWorker: a } = e.utils,
            n = (E, T, v) =>
                new Promise((y) => {
                    E.ref.imageData ||
                        (E.ref.imageData = v
                            .getContext('2d')
                            .getImageData(0, 0, v.width, v.height))
                    let b = eu(E.ref.imageData)
                    if (!T || T.length !== 20)
                        return v.getContext('2d').putImageData(b, 0, 0), y()
                    let w = a(jm)
                    w.post(
                        { imageData: b, colorMatrix: T },
                        (x) => {
                            v.getContext('2d').putImageData(x, 0, 0),
                                w.terminate(),
                                y()
                        },
                        [b.data.buffer],
                    )
                }),
            o = (E, T) => {
                E.removeChildView(T),
                    (T.image.width = 1),
                    (T.image.height = 1),
                    T._destroy()
            },
            l = ({ root: E }) => {
                let T = E.ref.images.shift()
                return (
                    (T.opacity = 0),
                    (T.translateY = -15),
                    E.ref.imageViewBin.push(T),
                    T
                )
            },
            r = ({ root: E, props: T, image: v }) => {
                let y = T.id,
                    b = E.query('GET_ITEM', { id: y })
                if (!b) return
                let w = b.getMetadata('crop') || {
                        center: { x: 0.5, y: 0.5 },
                        flip: { horizontal: !1, vertical: !1 },
                        zoom: 1,
                        rotation: 0,
                        aspectRatio: null,
                    },
                    x = E.query('GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR'),
                    _,
                    P,
                    O = !1
                E.query('GET_IMAGE_PREVIEW_MARKUP_SHOW') &&
                    ((_ = b.getMetadata('markup') || []),
                    (P = b.getMetadata('resize')),
                    (O = !0))
                let M = E.appendChildView(
                    E.createChildView(i, {
                        id: y,
                        image: v,
                        crop: w,
                        resize: P,
                        markup: _,
                        dirty: O,
                        background: x,
                        opacity: 0,
                        scaleX: 1.15,
                        scaleY: 1.15,
                        translateY: 15,
                    }),
                    E.childViews.length,
                )
                E.ref.images.push(M),
                    (M.opacity = 1),
                    (M.scaleX = 1),
                    (M.scaleY = 1),
                    (M.translateY = 0),
                    setTimeout(() => {
                        E.dispatch('DID_IMAGE_PREVIEW_SHOW', { id: y })
                    }, 250)
            },
            s = ({ root: E, props: T }) => {
                let v = E.query('GET_ITEM', { id: T.id })
                if (!v) return
                let y = E.ref.images[E.ref.images.length - 1]
                ;(y.crop = v.getMetadata('crop')),
                    (y.background = E.query(
                        'GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR',
                    )),
                    E.query('GET_IMAGE_PREVIEW_MARKUP_SHOW') &&
                        ((y.dirty = !0),
                        (y.resize = v.getMetadata('resize')),
                        (y.markup = v.getMetadata('markup')))
            },
            p = ({ root: E, props: T, action: v }) => {
                if (
                    !/crop|filter|markup|resize/.test(v.change.key) ||
                    !E.ref.images.length
                )
                    return
                let y = E.query('GET_ITEM', { id: T.id })
                if (y) {
                    if (/filter/.test(v.change.key)) {
                        let b = E.ref.images[E.ref.images.length - 1]
                        n(E, v.change.value, b.image)
                        return
                    }
                    if (/crop|markup|resize/.test(v.change.key)) {
                        let b = y.getMetadata('crop'),
                            w = E.ref.images[E.ref.images.length - 1]
                        if (
                            b &&
                            b.aspectRatio &&
                            w.crop &&
                            w.crop.aspectRatio &&
                            Math.abs(b.aspectRatio - w.crop.aspectRatio) > 1e-5
                        ) {
                            let x = l({ root: E })
                            r({ root: E, props: T, image: Jm(x.image) })
                        } else s({ root: E, props: T })
                    }
                }
            },
            c = (E) => {
                let v = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),
                    y = v ? parseInt(v[1]) : null
                return y !== null && y <= 58
                    ? !1
                    : 'createImageBitmap' in window && dl(E)
            },
            d = ({ root: E, props: T }) => {
                let { id: v } = T,
                    y = E.query('GET_ITEM', v)
                if (!y) return
                let b = URL.createObjectURL(y.file)
                qm(b, (w, x) => {
                    E.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', {
                        id: v,
                        width: w,
                        height: x,
                    })
                })
            },
            m = ({ root: E, props: T }) => {
                let { id: v } = T,
                    y = E.query('GET_ITEM', v)
                if (!y) return
                let b = URL.createObjectURL(y.file),
                    w = () => {
                        tu(b).then(x)
                    },
                    x = (_) => {
                        URL.revokeObjectURL(b)
                        let O = (y.getMetadata('exif') || {}).orientation || -1,
                            { width: M, height: N } = _
                        if (!M || !N) return
                        O >= 5 && O <= 8 && ([M, N] = [N, M])
                        let S = Math.max(1, window.devicePixelRatio * 0.75),
                            R = E.query('GET_IMAGE_PREVIEW_ZOOM_FACTOR') * S,
                            L = N / M,
                            z = E.rect.element.width,
                            F = E.rect.element.height,
                            G = z,
                            C = G * L
                        L > 1
                            ? ((G = Math.min(M, z * R)), (C = G * L))
                            : ((C = Math.min(N, F * R)), (G = C / L))
                        let Y = Xm(_, G, C, O),
                            X = () => {
                                let le = E.query(
                                    'GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR',
                                )
                                    ? Km(data)
                                    : null
                                y.setMetadata('color', le, !0),
                                    'close' in _ && _.close(),
                                    (E.ref.overlayShadow.opacity = 1),
                                    r({ root: E, props: T, image: Y })
                            },
                            Q = y.getMetadata('filter')
                        Q ? n(E, Q, Y).then(X) : X()
                    }
                if (c(y.file)) {
                    let _ = a(Hm)
                    _.post({ file: y.file }, (P) => {
                        if ((_.terminate(), !P)) {
                            w()
                            return
                        }
                        x(P)
                    })
                } else w()
            },
            u = ({ root: E }) => {
                let T = E.ref.images[E.ref.images.length - 1]
                ;(T.translateY = 0),
                    (T.scaleX = 1),
                    (T.scaleY = 1),
                    (T.opacity = 1)
            },
            f = ({ root: E }) => {
                ;(E.ref.overlayShadow.opacity = 1),
                    (E.ref.overlayError.opacity = 0),
                    (E.ref.overlaySuccess.opacity = 0)
            },
            g = ({ root: E }) => {
                ;(E.ref.overlayShadow.opacity = 0.25),
                    (E.ref.overlayError.opacity = 1)
            },
            h = ({ root: E }) => {
                ;(E.ref.overlayShadow.opacity = 0.25),
                    (E.ref.overlaySuccess.opacity = 1)
            },
            I = ({ root: E }) => {
                ;(E.ref.images = []),
                    (E.ref.imageData = null),
                    (E.ref.imageViewBin = []),
                    (E.ref.overlayShadow = E.appendChildView(
                        E.createChildView(t, { opacity: 0, status: 'idle' }),
                    )),
                    (E.ref.overlaySuccess = E.appendChildView(
                        E.createChildView(t, { opacity: 0, status: 'success' }),
                    )),
                    (E.ref.overlayError = E.appendChildView(
                        E.createChildView(t, { opacity: 0, status: 'failure' }),
                    ))
            }
        return e.utils.createView({
            name: 'image-preview-wrapper',
            create: I,
            styles: ['height'],
            apis: ['height'],
            destroy: ({ root: E }) => {
                E.ref.images.forEach((T) => {
                    ;(T.image.width = 1), (T.image.height = 1)
                })
            },
            didWriteView: ({ root: E }) => {
                E.ref.images.forEach((T) => {
                    T.dirty = !1
                })
            },
            write: e.utils.createRoute(
                {
                    DID_IMAGE_PREVIEW_DRAW: u,
                    DID_IMAGE_PREVIEW_CONTAINER_CREATE: d,
                    DID_FINISH_CALCULATE_PREVIEWSIZE: m,
                    DID_UPDATE_ITEM_METADATA: p,
                    DID_THROW_ITEM_LOAD_ERROR: g,
                    DID_THROW_ITEM_PROCESSING_ERROR: g,
                    DID_THROW_ITEM_INVALID: g,
                    DID_COMPLETE_ITEM_PROCESSING: h,
                    DID_START_ITEM_PROCESSING: f,
                    DID_REVERT_ITEM_PROCESSING: f,
                },
                ({ root: E }) => {
                    let T = E.ref.imageViewBin.filter((v) => v.opacity === 0)
                    ;(E.ref.imageViewBin = E.ref.imageViewBin.filter(
                        (v) => v.opacity > 0,
                    )),
                        T.forEach((v) => o(E, v)),
                        (T.length = 0)
                },
            ),
        })
    },
    pl = (e) => {
        let { addFilter: t, utils: i } = e,
            { Type: a, createRoute: n, isFile: o } = i,
            l = iu(e)
        return (
            t('CREATE_VIEW', (r) => {
                let { is: s, view: p, query: c } = r
                if (!s('file') || !c('GET_ALLOW_IMAGE_PREVIEW')) return
                let d = ({ root: h, props: I }) => {
                        let { id: E } = I,
                            T = c('GET_ITEM', E)
                        if (!T || !o(T.file) || T.archived) return
                        let v = T.file
                        if (!sm(v) || !c('GET_IMAGE_PREVIEW_FILTER_ITEM')(T))
                            return
                        let y = 'createImageBitmap' in (window || {}),
                            b = c('GET_IMAGE_PREVIEW_MAX_FILE_SIZE')
                        if (!y && b && v.size > b) return
                        h.ref.imagePreview = p.appendChildView(
                            p.createChildView(l, { id: E }),
                        )
                        let w = h.query('GET_IMAGE_PREVIEW_HEIGHT')
                        w &&
                            h.dispatch('DID_UPDATE_PANEL_HEIGHT', {
                                id: T.id,
                                height: w,
                            })
                        let x =
                            !y &&
                            v.size >
                                c(
                                    'GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE',
                                )
                        h.dispatch(
                            'DID_IMAGE_PREVIEW_CONTAINER_CREATE',
                            { id: E },
                            x,
                        )
                    },
                    m = (h, I) => {
                        if (!h.ref.imagePreview) return
                        let { id: E } = I,
                            T = h.query('GET_ITEM', { id: E })
                        if (!T) return
                        let v = h.query('GET_PANEL_ASPECT_RATIO'),
                            y = h.query('GET_ITEM_PANEL_ASPECT_RATIO'),
                            b = h.query('GET_IMAGE_PREVIEW_HEIGHT')
                        if (v || y || b) return
                        let { imageWidth: w, imageHeight: x } = h.ref
                        if (!w || !x) return
                        let _ = h.query('GET_IMAGE_PREVIEW_MIN_HEIGHT'),
                            P = h.query('GET_IMAGE_PREVIEW_MAX_HEIGHT'),
                            M = (T.getMetadata('exif') || {}).orientation || -1
                        if (
                            (M >= 5 && M <= 8 && ([w, x] = [x, w]),
                            !dl(T.file) || h.query('GET_IMAGE_PREVIEW_UPSCALE'))
                        ) {
                            let z = 2048 / w
                            ;(w *= z), (x *= z)
                        }
                        let N = x / w,
                            S = (T.getMetadata('crop') || {}).aspectRatio || N,
                            D = Math.max(_, Math.min(x, P)),
                            R = h.rect.element.width,
                            L = Math.min(R * S, D)
                        h.dispatch('DID_UPDATE_PANEL_HEIGHT', {
                            id: T.id,
                            height: L,
                        })
                    },
                    u = ({ root: h }) => {
                        h.ref.shouldRescale = !0
                    },
                    f = ({ root: h, action: I }) => {
                        I.change.key === 'crop' && (h.ref.shouldRescale = !0)
                    },
                    g = ({ root: h, action: I }) => {
                        ;(h.ref.imageWidth = I.width),
                            (h.ref.imageHeight = I.height),
                            (h.ref.shouldRescale = !0),
                            (h.ref.shouldDrawPreview = !0),
                            h.dispatch('KICK')
                    }
                p.registerWriter(
                    n(
                        {
                            DID_RESIZE_ROOT: u,
                            DID_STOP_RESIZE: u,
                            DID_LOAD_ITEM: d,
                            DID_IMAGE_PREVIEW_CALCULATE_SIZE: g,
                            DID_UPDATE_ITEM_METADATA: f,
                        },
                        ({ root: h, props: I }) => {
                            h.ref.imagePreview &&
                                (h.rect.element.hidden ||
                                    (h.ref.shouldRescale &&
                                        (m(h, I), (h.ref.shouldRescale = !1)),
                                    h.ref.shouldDrawPreview &&
                                        (requestAnimationFrame(() => {
                                            requestAnimationFrame(() => {
                                                h.dispatch(
                                                    'DID_FINISH_CALCULATE_PREVIEWSIZE',
                                                    { id: I.id },
                                                )
                                            })
                                        }),
                                        (h.ref.shouldDrawPreview = !1))))
                        },
                    ),
                )
            }),
            {
                options: {
                    allowImagePreview: [!0, a.BOOLEAN],
                    imagePreviewFilterItem: [() => !0, a.FUNCTION],
                    imagePreviewHeight: [null, a.INT],
                    imagePreviewMinHeight: [44, a.INT],
                    imagePreviewMaxHeight: [256, a.INT],
                    imagePreviewMaxFileSize: [null, a.INT],
                    imagePreviewZoomFactor: [2, a.INT],
                    imagePreviewUpscale: [!1, a.BOOLEAN],
                    imagePreviewMaxInstantPreviewFileSize: [1e6, a.INT],
                    imagePreviewTransparencyIndicator: [null, a.STRING],
                    imagePreviewCalculateAverageImageColor: [!1, a.BOOLEAN],
                    imagePreviewMarkupShow: [!0, a.BOOLEAN],
                    imagePreviewMarkupFilter: [() => !0, a.FUNCTION],
                },
            }
        )
    },
    au = typeof window < 'u' && typeof window.document < 'u'
au &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: pl }),
    )
var ml = pl
var nu = (e) => /^image/.test(e.type),
    ou = (e, t) => {
        let i = new Image()
        ;(i.onload = () => {
            let a = i.naturalWidth,
                n = i.naturalHeight
            ;(i = null), t({ width: a, height: n })
        }),
            (i.onerror = () => t(null)),
            (i.src = e)
    },
    ul = ({ addFilter: e, utils: t }) => {
        let { Type: i } = t
        return (
            e(
                'DID_LOAD_ITEM',
                (a, { query: n }) =>
                    new Promise((o, l) => {
                        let r = a.file
                        if (!nu(r) || !n('GET_ALLOW_IMAGE_RESIZE')) return o(a)
                        let s = n('GET_IMAGE_RESIZE_MODE'),
                            p = n('GET_IMAGE_RESIZE_TARGET_WIDTH'),
                            c = n('GET_IMAGE_RESIZE_TARGET_HEIGHT'),
                            d = n('GET_IMAGE_RESIZE_UPSCALE')
                        if (p === null && c === null) return o(a)
                        let m = p === null ? c : p,
                            u = c === null ? m : c,
                            f = URL.createObjectURL(r)
                        ou(f, (g) => {
                            if ((URL.revokeObjectURL(f), !g)) return o(a)
                            let { width: h, height: I } = g,
                                E =
                                    (a.getMetadata('exif') || {}).orientation ||
                                    -1
                            if (
                                (E >= 5 && E <= 8 && ([h, I] = [I, h]),
                                h === m && I === u)
                            )
                                return o(a)
                            if (!d) {
                                if (s === 'cover') {
                                    if (h <= m || I <= u) return o(a)
                                } else if (h <= m && I <= m) return o(a)
                            }
                            a.setMetadata('resize', {
                                mode: s,
                                upscale: d,
                                size: { width: m, height: u },
                            }),
                                o(a)
                        })
                    }),
            ),
            {
                options: {
                    allowImageResize: [!0, i.BOOLEAN],
                    imageResizeMode: ['cover', i.STRING],
                    imageResizeUpscale: [!0, i.BOOLEAN],
                    imageResizeTargetWidth: [null, i.INT],
                    imageResizeTargetHeight: [null, i.INT],
                },
            }
        )
    },
    lu = typeof window < 'u' && typeof window.document < 'u'
lu &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: ul }),
    )
var fl = ul
var ru = (e) => /^image/.test(e.type),
    su = (e) => e.substr(0, e.lastIndexOf('.')) || e,
    cu = { jpeg: 'jpg', 'svg+xml': 'svg' },
    du = (e, t) => {
        let i = su(e),
            a = t.split('/')[1],
            n = cu[a] || a
        return `${i}.${n}`
    },
    pu = (e) => (/jpeg|png|svg\+xml/.test(e) ? e : 'image/jpeg'),
    mu = (e) => /^image/.test(e.type),
    uu = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: (e) => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: (e) => [0, -1, 1, 0, 0, e],
    },
    fu = (e, t, i) => (i === -1 && (i = 1), uu[i](e, t)),
    Yt = (e, t) => ({ x: e, y: t }),
    gu = (e, t) => e.x * t.x + e.y * t.y,
    gl = (e, t) => Yt(e.x - t.x, e.y - t.y),
    hu = (e, t) => gu(gl(e, t), gl(e, t)),
    hl = (e, t) => Math.sqrt(hu(e, t)),
    El = (e, t) => {
        let i = e,
            a = 1.5707963267948966,
            n = t,
            o = 1.5707963267948966 - t,
            l = Math.sin(a),
            r = Math.sin(n),
            s = Math.sin(o),
            p = Math.cos(o),
            c = i / l,
            d = c * r,
            m = c * s
        return Yt(p * d, p * m)
    },
    Eu = (e, t) => {
        let i = e.width,
            a = e.height,
            n = El(i, t),
            o = El(a, t),
            l = Yt(e.x + Math.abs(n.x), e.y - Math.abs(n.y)),
            r = Yt(e.x + e.width + Math.abs(o.y), e.y + Math.abs(o.x)),
            s = Yt(e.x - Math.abs(o.y), e.y + e.height - Math.abs(o.x))
        return { width: hl(l, r), height: hl(l, s) }
    },
    Il = (e, t, i = 0, a = { x: 0.5, y: 0.5 }) => {
        let n = a.x > 0.5 ? 1 - a.x : a.x,
            o = a.y > 0.5 ? 1 - a.y : a.y,
            l = n * 2 * e.width,
            r = o * 2 * e.height,
            s = Eu(t, i)
        return Math.max(s.width / l, s.height / r)
    },
    vl = (e, t) => {
        let i = e.width,
            a = i * t
        a > e.height && ((a = e.height), (i = a / t))
        let n = (e.width - i) * 0.5,
            o = (e.height - a) * 0.5
        return { x: n, y: o, width: i, height: a }
    },
    bl = (e, t, i = 1) => {
        let a = e.height / e.width,
            n = 1,
            o = t,
            l = 1,
            r = a
        r > o && ((r = o), (l = r / a))
        let s = Math.max(n / l, o / r),
            p = e.width / (i * s * l),
            c = p * t
        return { width: p, height: c }
    },
    xl = (e) => {
        ;(e.width = 1), (e.height = 1), e.getContext('2d').clearRect(0, 0, 1, 1)
    },
    Tl = (e) => e && (e.horizontal || e.vertical),
    bu = (e, t, i) => {
        if (t <= 1 && !Tl(i))
            return (e.width = e.naturalWidth), (e.height = e.naturalHeight), e
        let a = document.createElement('canvas'),
            n = e.naturalWidth,
            o = e.naturalHeight,
            l = t >= 5 && t <= 8
        l ? ((a.width = o), (a.height = n)) : ((a.width = n), (a.height = o))
        let r = a.getContext('2d')
        if ((t && r.transform.apply(r, fu(n, o, t)), Tl(i))) {
            let s = [1, 0, 0, 1, 0, 0]
            ;((!l && i.horizontal) || l & i.vertical) &&
                ((s[0] = -1), (s[4] = n)),
                ((!l && i.vertical) || (l && i.horizontal)) &&
                    ((s[3] = -1), (s[5] = o)),
                r.transform(...s)
        }
        return r.drawImage(e, 0, 0, n, o), a
    },
    Tu = (e, t, i = {}, a = {}) => {
        let { canvasMemoryLimit: n, background: o = null } = a,
            l = i.zoom || 1,
            r = bu(e, t, i.flip),
            s = { width: r.width, height: r.height },
            p = i.aspectRatio || s.height / s.width,
            c = bl(s, p, l)
        if (n) {
            let T = c.width * c.height
            if (T > n) {
                let v = Math.sqrt(n) / Math.sqrt(T)
                ;(s.width = Math.floor(s.width * v)),
                    (s.height = Math.floor(s.height * v)),
                    (c = bl(s, p, l))
            }
        }
        let d = document.createElement('canvas'),
            m = { x: c.width * 0.5, y: c.height * 0.5 },
            u = { x: 0, y: 0, width: c.width, height: c.height, center: m },
            f = typeof i.scaleToFit > 'u' || i.scaleToFit,
            g =
                l *
                Il(s, vl(u, p), i.rotation, f ? i.center : { x: 0.5, y: 0.5 })
        ;(d.width = Math.round(c.width / g)),
            (d.height = Math.round(c.height / g)),
            (m.x /= g),
            (m.y /= g)
        let h = {
                x: m.x - s.width * (i.center ? i.center.x : 0.5),
                y: m.y - s.height * (i.center ? i.center.y : 0.5),
            },
            I = d.getContext('2d')
        o && ((I.fillStyle = o), I.fillRect(0, 0, d.width, d.height)),
            I.translate(m.x, m.y),
            I.rotate(i.rotation || 0),
            I.drawImage(r, h.x - m.x, h.y - m.y, s.width, s.height)
        let E = I.getImageData(0, 0, d.width, d.height)
        return xl(d), E
    },
    Iu = typeof window < 'u' && typeof window.document < 'u'
Iu &&
    (HTMLCanvasElement.prototype.toBlob ||
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (e, t, i) {
                var a = this.toDataURL(t, i).split(',')[1]
                setTimeout(function () {
                    for (
                        var n = atob(a),
                            o = n.length,
                            l = new Uint8Array(o),
                            r = 0;
                        r < o;
                        r++
                    )
                        l[r] = n.charCodeAt(r)
                    e(new Blob([l], { type: t || 'image/png' }))
                })
            },
        }))
var vu = (e, t, i = null) =>
        new Promise((a) => {
            let n = i ? i(e) : e
            Promise.resolve(n).then((o) => {
                o.toBlob(a, t.type, t.quality)
            })
        }),
    _i = (e, t) => $t(e.x * t, e.y * t),
    Ri = (e, t) => $t(e.x + t.x, e.y + t.y),
    yl = (e) => {
        let t = Math.sqrt(e.x * e.x + e.y * e.y)
        return t === 0 ? { x: 0, y: 0 } : $t(e.x / t, e.y / t)
    },
    Ye = (e, t, i) => {
        let a = Math.cos(t),
            n = Math.sin(t),
            o = $t(e.x - i.x, e.y - i.y)
        return $t(i.x + a * o.x - n * o.y, i.y + n * o.x + a * o.y)
    },
    $t = (e = 0, t = 0) => ({ x: e, y: t }),
    me = (e, t, i = 1, a) => {
        if (typeof e == 'string') return parseFloat(e) * i
        if (typeof e == 'number')
            return e * (a ? t[a] : Math.min(t.width, t.height))
    },
    ct = (e, t, i) => {
        let a = e.borderStyle || e.lineStyle || 'solid',
            n = e.backgroundColor || e.fontColor || 'transparent',
            o = e.borderColor || e.lineColor || 'transparent',
            l = me(e.borderWidth || e.lineWidth, t, i),
            r = e.lineCap || 'round',
            s = e.lineJoin || 'round',
            p = typeof a == 'string' ? '' : a.map((d) => me(d, t, i)).join(','),
            c = e.opacity || 1
        return {
            'stroke-linecap': r,
            'stroke-linejoin': s,
            'stroke-width': l || 0,
            'stroke-dasharray': p,
            stroke: o,
            fill: n,
            opacity: c,
        }
    },
    Le = (e) => e != null,
    St = (e, t, i = 1) => {
        let a = me(e.x, t, i, 'width') || me(e.left, t, i, 'width'),
            n = me(e.y, t, i, 'height') || me(e.top, t, i, 'height'),
            o = me(e.width, t, i, 'width'),
            l = me(e.height, t, i, 'height'),
            r = me(e.right, t, i, 'width'),
            s = me(e.bottom, t, i, 'height')
        return (
            Le(n) || (Le(l) && Le(s) ? (n = t.height - l - s) : (n = s)),
            Le(a) || (Le(o) && Le(r) ? (a = t.width - o - r) : (a = r)),
            Le(o) || (Le(a) && Le(r) ? (o = t.width - a - r) : (o = 0)),
            Le(l) || (Le(n) && Le(s) ? (l = t.height - n - s) : (l = 0)),
            { x: a || 0, y: n || 0, width: o || 0, height: l || 0 }
        )
    },
    xu = (e) =>
        e.map((t, i) => `${i === 0 ? 'M' : 'L'} ${t.x} ${t.y}`).join(' '),
    Be = (e, t) => Object.keys(t).forEach((i) => e.setAttribute(i, t[i])),
    yu = 'http://www.w3.org/2000/svg',
    wt = (e, t) => {
        let i = document.createElementNS(yu, e)
        return t && Be(i, t), i
    },
    _u = (e) => Be(e, { ...e.rect, ...e.styles }),
    Ru = (e) => {
        let t = e.rect.x + e.rect.width * 0.5,
            i = e.rect.y + e.rect.height * 0.5,
            a = e.rect.width * 0.5,
            n = e.rect.height * 0.5
        return Be(e, { cx: t, cy: i, rx: a, ry: n, ...e.styles })
    },
    wu = { contain: 'xMidYMid meet', cover: 'xMidYMid slice' },
    Su = (e, t) => {
        Be(e, {
            ...e.rect,
            ...e.styles,
            preserveAspectRatio: wu[t.fit] || 'none',
        })
    },
    Lu = { left: 'start', center: 'middle', right: 'end' },
    Au = (e, t, i, a) => {
        let n = me(t.fontSize, i, a),
            o = t.fontFamily || 'sans-serif',
            l = t.fontWeight || 'normal',
            r = Lu[t.textAlign] || 'start'
        Be(e, {
            ...e.rect,
            ...e.styles,
            'stroke-width': 0,
            'font-weight': l,
            'font-size': n,
            'font-family': o,
            'text-anchor': r,
        }),
            e.text !== t.text &&
                ((e.text = t.text),
                (e.textContent = t.text.length ? t.text : ' '))
    },
    Mu = (e, t, i, a) => {
        Be(e, { ...e.rect, ...e.styles, fill: 'none' })
        let n = e.childNodes[0],
            o = e.childNodes[1],
            l = e.childNodes[2],
            r = e.rect,
            s = { x: e.rect.x + e.rect.width, y: e.rect.y + e.rect.height }
        if ((Be(n, { x1: r.x, y1: r.y, x2: s.x, y2: s.y }), !t.lineDecoration))
            return
        ;(o.style.display = 'none'), (l.style.display = 'none')
        let p = yl({ x: s.x - r.x, y: s.y - r.y }),
            c = me(0.05, i, a)
        if (t.lineDecoration.indexOf('arrow-begin') !== -1) {
            let d = _i(p, c),
                m = Ri(r, d),
                u = Ye(r, 2, m),
                f = Ye(r, -2, m)
            Be(o, {
                style: 'display:block;',
                d: `M${u.x},${u.y} L${r.x},${r.y} L${f.x},${f.y}`,
            })
        }
        if (t.lineDecoration.indexOf('arrow-end') !== -1) {
            let d = _i(p, -c),
                m = Ri(s, d),
                u = Ye(s, 2, m),
                f = Ye(s, -2, m)
            Be(l, {
                style: 'display:block;',
                d: `M${u.x},${u.y} L${s.x},${s.y} L${f.x},${f.y}`,
            })
        }
    },
    Ou = (e, t, i, a) => {
        Be(e, {
            ...e.styles,
            fill: 'none',
            d: xu(
                t.points.map((n) => ({
                    x: me(n.x, i, a, 'width'),
                    y: me(n.y, i, a, 'height'),
                })),
            ),
        })
    },
    yi = (e) => (t) => wt(e, { id: t.id }),
    Pu = (e) => {
        let t = wt('image', {
            id: e.id,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            opacity: '0',
        })
        return (
            (t.onload = () => {
                t.setAttribute('opacity', e.opacity || 1)
            }),
            t.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                'xlink:href',
                e.src,
            ),
            t
        )
    },
    Du = (e) => {
        let t = wt('g', {
                id: e.id,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            }),
            i = wt('line')
        t.appendChild(i)
        let a = wt('path')
        t.appendChild(a)
        let n = wt('path')
        return t.appendChild(n), t
    },
    Fu = {
        image: Pu,
        rect: yi('rect'),
        ellipse: yi('ellipse'),
        text: yi('text'),
        path: yi('path'),
        line: Du,
    },
    zu = { rect: _u, ellipse: Ru, image: Su, text: Au, path: Ou, line: Mu },
    Cu = (e, t) => Fu[e](t),
    Nu = (e, t, i, a, n) => {
        t !== 'path' && (e.rect = St(i, a, n)),
            (e.styles = ct(i, a, n)),
            zu[t](e, i, a, n)
    },
    _l = (e, t) =>
        e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0,
    Bu = (e, t = {}, i, a) =>
        new Promise((n) => {
            let { background: o = null } = a,
                l = new FileReader()
            ;(l.onloadend = () => {
                let r = l.result,
                    s = document.createElement('div')
                ;(s.style.cssText =
                    'position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;'),
                    (s.innerHTML = r)
                let p = s.querySelector('svg')
                document.body.appendChild(s)
                let c = p.getBBox()
                s.parentNode.removeChild(s)
                let d = s.querySelector('title'),
                    m = p.getAttribute('viewBox') || '',
                    u = p.getAttribute('width') || '',
                    f = p.getAttribute('height') || '',
                    g = parseFloat(u) || null,
                    h = parseFloat(f) || null,
                    I = (u.match(/[a-z]+/) || [])[0] || '',
                    E = (f.match(/[a-z]+/) || [])[0] || '',
                    T = m.split(' ').map(parseFloat),
                    v = T.length
                        ? { x: T[0], y: T[1], width: T[2], height: T[3] }
                        : c,
                    y = g ?? v.width,
                    b = h ?? v.height
                ;(p.style.overflow = 'visible'),
                    p.setAttribute('width', y),
                    p.setAttribute('height', b)
                let w = ''
                if (i && i.length) {
                    let Q = { width: y, height: b }
                    ;(w = i.sort(_l).reduce((le, k) => {
                        let H = Cu(k[0], k[1])
                        return (
                            Nu(H, k[0], k[1], Q),
                            H.removeAttribute('id'),
                            H.getAttribute('opacity') === 1 &&
                                H.removeAttribute('opacity'),
                            le +
                                `
` +
                                H.outerHTML +
                                `
`
                        )
                    }, '')),
                        (w = `

<g>${w.replace(/&nbsp;/g, ' ')}</g>

`)
                }
                let x = t.aspectRatio || b / y,
                    _ = y,
                    P = _ * x,
                    O = typeof t.scaleToFit > 'u' || t.scaleToFit,
                    M = t.center ? t.center.x : 0.5,
                    N = t.center ? t.center.y : 0.5,
                    S = Il(
                        { width: y, height: b },
                        vl({ width: _, height: P }, x),
                        t.rotation,
                        O ? { x: M, y: N } : { x: 0.5, y: 0.5 },
                    ),
                    D = t.zoom * S,
                    R = t.rotation * (180 / Math.PI),
                    L = { x: _ * 0.5, y: P * 0.5 },
                    z = { x: L.x - y * M, y: L.y - b * N },
                    F = [
                        `rotate(${R} ${L.x} ${L.y})`,
                        `translate(${L.x} ${L.y})`,
                        `scale(${D})`,
                        `translate(${-L.x} ${-L.y})`,
                        `translate(${z.x} ${z.y})`,
                    ],
                    G = t.flip && t.flip.horizontal,
                    C = t.flip && t.flip.vertical,
                    Y = [
                        `scale(${G ? -1 : 1} ${C ? -1 : 1})`,
                        `translate(${G ? -y : 0} ${C ? -b : 0})`,
                    ],
                    X = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${_}${I}" height="${P}${E}" 
viewBox="0 0 ${_} ${P}" ${o ? 'style="background:' + o + '" ' : ''}
preserveAspectRatio="xMinYMin"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns="http://www.w3.org/2000/svg">
<!-- Generated by PQINA - https://pqina.nl/ -->
<title>${d ? d.textContent : ''}</title>
<g transform="${F.join(' ')}">
<g transform="${Y.join(' ')}">
${p.outerHTML}${w}
</g>
</g>
</svg>`
                n(X)
            }),
                l.readAsText(e)
        }),
    ku = (e) => {
        let t
        try {
            t = new ImageData(e.width, e.height)
        } catch {
            t = document
                .createElement('canvas')
                .getContext('2d')
                .createImageData(e.width, e.height)
        }
        return t.data.set(e.data), t
    },
    Vu = () => {
        let e = { resize: c, filter: p },
            t = (d, m) => (
                d.forEach((u) => {
                    m = e[u.type](m, u.data)
                }),
                m
            ),
            i = (d, m) => {
                let u = d.transforms,
                    f = null
                if (
                    (u.forEach((g) => {
                        g.type === 'filter' && (f = g)
                    }),
                    f)
                ) {
                    let g = null
                    u.forEach((h) => {
                        h.type === 'resize' && (g = h)
                    }),
                        g &&
                            ((g.data.matrix = f.data),
                            (u = u.filter((h) => h.type !== 'filter')))
                }
                m(t(u, d.imageData))
            }
        self.onmessage = (d) => {
            i(d.data.message, (m) => {
                self.postMessage({ id: d.data.id, message: m }, [m.data.buffer])
            })
        }
        let a = 1,
            n = 1,
            o = 1
        function l(d, m, u) {
            let f = m[d] / 255,
                g = m[d + 1] / 255,
                h = m[d + 2] / 255,
                I = m[d + 3] / 255,
                E = f * u[0] + g * u[1] + h * u[2] + I * u[3] + u[4],
                T = f * u[5] + g * u[6] + h * u[7] + I * u[8] + u[9],
                v = f * u[10] + g * u[11] + h * u[12] + I * u[13] + u[14],
                y = f * u[15] + g * u[16] + h * u[17] + I * u[18] + u[19],
                b = Math.max(0, E * y) + a * (1 - y),
                w = Math.max(0, T * y) + n * (1 - y),
                x = Math.max(0, v * y) + o * (1 - y)
            ;(m[d] = Math.max(0, Math.min(1, b)) * 255),
                (m[d + 1] = Math.max(0, Math.min(1, w)) * 255),
                (m[d + 2] = Math.max(0, Math.min(1, x)) * 255)
        }
        let r = self.JSON.stringify([
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
        ])
        function s(d) {
            return self.JSON.stringify(d || []) === r
        }
        function p(d, m) {
            if (!m || s(m)) return d
            let u = d.data,
                f = u.length,
                g = m[0],
                h = m[1],
                I = m[2],
                E = m[3],
                T = m[4],
                v = m[5],
                y = m[6],
                b = m[7],
                w = m[8],
                x = m[9],
                _ = m[10],
                P = m[11],
                O = m[12],
                M = m[13],
                N = m[14],
                S = m[15],
                D = m[16],
                R = m[17],
                L = m[18],
                z = m[19],
                F = 0,
                G = 0,
                C = 0,
                Y = 0,
                X = 0,
                Q = 0,
                le = 0,
                k = 0,
                H = 0,
                q = 0,
                re = 0,
                ee = 0
            for (; F < f; F += 4)
                (G = u[F] / 255),
                    (C = u[F + 1] / 255),
                    (Y = u[F + 2] / 255),
                    (X = u[F + 3] / 255),
                    (Q = G * g + C * h + Y * I + X * E + T),
                    (le = G * v + C * y + Y * b + X * w + x),
                    (k = G * _ + C * P + Y * O + X * M + N),
                    (H = G * S + C * D + Y * R + X * L + z),
                    (q = Math.max(0, Q * H) + a * (1 - H)),
                    (re = Math.max(0, le * H) + n * (1 - H)),
                    (ee = Math.max(0, k * H) + o * (1 - H)),
                    (u[F] = Math.max(0, Math.min(1, q)) * 255),
                    (u[F + 1] = Math.max(0, Math.min(1, re)) * 255),
                    (u[F + 2] = Math.max(0, Math.min(1, ee)) * 255)
            return d
        }
        function c(d, m) {
            let {
                mode: u = 'contain',
                upscale: f = !1,
                width: g,
                height: h,
                matrix: I,
            } = m
            if (((I = !I || s(I) ? null : I), !g && !h)) return p(d, I)
            if ((g === null ? (g = h) : h === null && (h = g), u !== 'force')) {
                let M = g / d.width,
                    N = h / d.height,
                    S = 1
                if (
                    (u === 'cover'
                        ? (S = Math.max(M, N))
                        : u === 'contain' && (S = Math.min(M, N)),
                    S > 1 && f === !1)
                )
                    return p(d, I)
                ;(g = d.width * S), (h = d.height * S)
            }
            let E = d.width,
                T = d.height,
                v = Math.round(g),
                y = Math.round(h),
                b = d.data,
                w = new Uint8ClampedArray(v * y * 4),
                x = E / v,
                _ = T / y,
                P = Math.ceil(x * 0.5),
                O = Math.ceil(_ * 0.5)
            for (let M = 0; M < y; M++)
                for (let N = 0; N < v; N++) {
                    let S = (N + M * v) * 4,
                        D = 0,
                        R = 0,
                        L = 0,
                        z = 0,
                        F = 0,
                        G = 0,
                        C = 0,
                        Y = (M + 0.5) * _
                    for (let X = Math.floor(M * _); X < (M + 1) * _; X++) {
                        let Q = Math.abs(Y - (X + 0.5)) / O,
                            le = (N + 0.5) * x,
                            k = Q * Q
                        for (let H = Math.floor(N * x); H < (N + 1) * x; H++) {
                            let q = Math.abs(le - (H + 0.5)) / P,
                                re = Math.sqrt(k + q * q)
                            if (
                                re >= -1 &&
                                re <= 1 &&
                                ((D = 2 * re * re * re - 3 * re * re + 1),
                                D > 0)
                            ) {
                                q = 4 * (H + X * E)
                                let ee = b[q + 3]
                                ;(C += D * ee),
                                    (L += D),
                                    ee < 255 && (D = (D * ee) / 250),
                                    (z += D * b[q]),
                                    (F += D * b[q + 1]),
                                    (G += D * b[q + 2]),
                                    (R += D)
                            }
                        }
                    }
                    ;(w[S] = z / R),
                        (w[S + 1] = F / R),
                        (w[S + 2] = G / R),
                        (w[S + 3] = C / L),
                        I && l(S, w, I)
                }
            return { data: w, width: v, height: y }
        }
    },
    Gu = (e, t) => {
        if (e.getUint32(t + 4, !1) !== 1165519206) return
        t += 4
        let i = e.getUint16((t += 6), !1) === 18761
        t += e.getUint32(t + 4, i)
        let a = e.getUint16(t, i)
        t += 2
        for (let n = 0; n < a; n++)
            if (e.getUint16(t + n * 12, i) === 274)
                return e.setUint16(t + n * 12 + 8, 1, i), !0
        return !1
    },
    Uu = (e) => {
        let t = new DataView(e)
        if (t.getUint16(0) !== 65496) return null
        let i = 2,
            a,
            n,
            o = !1
        for (
            ;
            i < t.byteLength &&
            ((a = t.getUint16(i, !1)),
            (n = t.getUint16(i + 2, !1) + 2),
            !(
                !((a >= 65504 && a <= 65519) || a === 65534) ||
                (o || (o = Gu(t, i, n)), i + n > t.byteLength)
            ));

        )
            i += n
        return e.slice(0, i)
    },
    Wu = (e) =>
        new Promise((t) => {
            let i = new FileReader()
            ;(i.onload = () => t(Uu(i.result) || null)),
                i.readAsArrayBuffer(e.slice(0, 256 * 1024))
        }),
    Hu = () =>
        (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder),
    ju = (e, t) => {
        let i = Hu()
        if (i) {
            let a = new i()
            return a.append(e), a.getBlob(t)
        }
        return new Blob([e], { type: t })
    },
    qu = () => Math.random().toString(36).substr(2, 9),
    Yu = (e) => {
        let t = new Blob(['(', e.toString(), ')()'], {
                type: 'application/javascript',
            }),
            i = URL.createObjectURL(t),
            a = new Worker(i),
            n = []
        return {
            transfer: () => {},
            post: (o, l, r) => {
                let s = qu()
                ;(n[s] = l),
                    (a.onmessage = (p) => {
                        let c = n[p.data.id]
                        c && (c(p.data.message), delete n[p.data.id])
                    }),
                    a.postMessage({ id: s, message: o }, r)
            },
            terminate: () => {
                a.terminate(), URL.revokeObjectURL(i)
            },
        }
    },
    $u = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            ;(a.onload = () => {
                t(a)
            }),
                (a.onerror = (n) => {
                    i(n)
                }),
                (a.src = e)
        }),
    Xu = (e) =>
        e.reduce(
            (t, i) => t.then((a) => i().then(Array.prototype.concat.bind(a))),
            Promise.resolve([]),
        ),
    Qu = (e, t) =>
        new Promise((i) => {
            let a = { width: e.width, height: e.height },
                n = e.getContext('2d'),
                o = t.sort(_l).map(
                    (l) => () =>
                        new Promise((r) => {
                            nf[l[0]](n, a, l[1], r) && r()
                        }),
                )
            Xu(o).then(() => i(e))
        }),
    Lt = (e, t) => {
        e.beginPath(),
            (e.lineCap = t['stroke-linecap']),
            (e.lineJoin = t['stroke-linejoin']),
            (e.lineWidth = t['stroke-width']),
            t['stroke-dasharray'].length &&
                e.setLineDash(t['stroke-dasharray'].split(',')),
            (e.fillStyle = t.fill),
            (e.strokeStyle = t.stroke),
            (e.globalAlpha = t.opacity || 1)
    },
    At = (e) => {
        e.fill(), e.stroke(), (e.globalAlpha = 1)
    },
    Zu = (e, t, i) => {
        let a = St(i, t),
            n = ct(i, t)
        return Lt(e, n), e.rect(a.x, a.y, a.width, a.height), At(e, n), !0
    },
    Ku = (e, t, i) => {
        let a = St(i, t),
            n = ct(i, t)
        Lt(e, n)
        let o = a.x,
            l = a.y,
            r = a.width,
            s = a.height,
            p = 0.5522848,
            c = (r / 2) * p,
            d = (s / 2) * p,
            m = o + r,
            u = l + s,
            f = o + r / 2,
            g = l + s / 2
        return (
            e.moveTo(o, g),
            e.bezierCurveTo(o, g - d, f - c, l, f, l),
            e.bezierCurveTo(f + c, l, m, g - d, m, g),
            e.bezierCurveTo(m, g + d, f + c, u, f, u),
            e.bezierCurveTo(f - c, u, o, g + d, o, g),
            At(e, n),
            !0
        )
    },
    Ju = (e, t, i, a) => {
        let n = St(i, t),
            o = ct(i, t)
        Lt(e, o)
        let l = new Image()
        new URL(i.src, window.location.href).origin !==
            window.location.origin && (l.crossOrigin = ''),
            (l.onload = () => {
                if (i.fit === 'cover') {
                    let s = n.width / n.height,
                        p = s > 1 ? l.width : l.height * s,
                        c = s > 1 ? l.width / s : l.height,
                        d = l.width * 0.5 - p * 0.5,
                        m = l.height * 0.5 - c * 0.5
                    e.drawImage(l, d, m, p, c, n.x, n.y, n.width, n.height)
                } else if (i.fit === 'contain') {
                    let s = Math.min(n.width / l.width, n.height / l.height),
                        p = s * l.width,
                        c = s * l.height,
                        d = n.x + n.width * 0.5 - p * 0.5,
                        m = n.y + n.height * 0.5 - c * 0.5
                    e.drawImage(l, 0, 0, l.width, l.height, d, m, p, c)
                } else
                    e.drawImage(
                        l,
                        0,
                        0,
                        l.width,
                        l.height,
                        n.x,
                        n.y,
                        n.width,
                        n.height,
                    )
                At(e, o), a()
            }),
            (l.src = i.src)
    },
    ef = (e, t, i) => {
        let a = St(i, t),
            n = ct(i, t)
        Lt(e, n)
        let o = me(i.fontSize, t),
            l = i.fontFamily || 'sans-serif',
            r = i.fontWeight || 'normal',
            s = i.textAlign || 'left'
        return (
            (e.font = `${r} ${o}px ${l}`),
            (e.textAlign = s),
            e.fillText(i.text, a.x, a.y),
            At(e, n),
            !0
        )
    },
    tf = (e, t, i) => {
        let a = ct(i, t)
        Lt(e, a), e.beginPath()
        let n = i.points.map((l) => ({
            x: me(l.x, t, 1, 'width'),
            y: me(l.y, t, 1, 'height'),
        }))
        e.moveTo(n[0].x, n[0].y)
        let o = n.length
        for (let l = 1; l < o; l++) e.lineTo(n[l].x, n[l].y)
        return At(e, a), !0
    },
    af = (e, t, i) => {
        let a = St(i, t),
            n = ct(i, t)
        Lt(e, n), e.beginPath()
        let o = { x: a.x, y: a.y },
            l = { x: a.x + a.width, y: a.y + a.height }
        e.moveTo(o.x, o.y), e.lineTo(l.x, l.y)
        let r = yl({ x: l.x - o.x, y: l.y - o.y }),
            s = 0.04 * Math.min(t.width, t.height)
        if (i.lineDecoration.indexOf('arrow-begin') !== -1) {
            let p = _i(r, s),
                c = Ri(o, p),
                d = Ye(o, 2, c),
                m = Ye(o, -2, c)
            e.moveTo(d.x, d.y), e.lineTo(o.x, o.y), e.lineTo(m.x, m.y)
        }
        if (i.lineDecoration.indexOf('arrow-end') !== -1) {
            let p = _i(r, -s),
                c = Ri(l, p),
                d = Ye(l, 2, c),
                m = Ye(l, -2, c)
            e.moveTo(d.x, d.y), e.lineTo(l.x, l.y), e.lineTo(m.x, m.y)
        }
        return At(e, n), !0
    },
    nf = { rect: Zu, ellipse: Ku, image: Ju, text: ef, line: af, path: tf },
    of = (e) => {
        let t = document.createElement('canvas')
        return (
            (t.width = e.width),
            (t.height = e.height),
            t.getContext('2d').putImageData(e, 0, 0),
            t
        )
    },
    lf = (e, t, i = {}) =>
        new Promise((a, n) => {
            if (!e || !mu(e)) return n({ status: 'not an image file', file: e })
            let {
                    stripImageHead: o,
                    beforeCreateBlob: l,
                    afterCreateBlob: r,
                    canvasMemoryLimit: s,
                } = i,
                { crop: p, size: c, filter: d, markup: m, output: u } = t,
                f =
                    t.image && t.image.orientation
                        ? Math.max(1, Math.min(8, t.image.orientation))
                        : null,
                g = u && u.quality,
                h = g === null ? null : g / 100,
                I = (u && u.type) || null,
                E = (u && u.background) || null,
                T = []
            c &&
                (typeof c.width == 'number' || typeof c.height == 'number') &&
                T.push({ type: 'resize', data: c }),
                d && d.length === 20 && T.push({ type: 'filter', data: d })
            let v = (w) => {
                    let x = r ? r(w) : w
                    Promise.resolve(x).then(a)
                },
                y = (w, x) => {
                    let _ = of(w),
                        P = m.length ? Qu(_, m) : _
                    Promise.resolve(P).then((O) => {
                        vu(O, x, l)
                            .then((M) => {
                                if ((xl(O), o)) return v(M)
                                Wu(e).then((N) => {
                                    N !== null &&
                                        (M = new Blob([N, M.slice(20)], {
                                            type: M.type,
                                        })),
                                        v(M)
                                })
                            })
                            .catch(n)
                    })
                }
            if (/svg/.test(e.type) && I === null)
                return Bu(e, p, m, { background: E }).then((w) => {
                    a(ju(w, 'image/svg+xml'))
                })
            let b = URL.createObjectURL(e)
            $u(b)
                .then((w) => {
                    URL.revokeObjectURL(b)
                    let x = Tu(w, f, p, {
                            canvasMemoryLimit: s,
                            background: E,
                        }),
                        _ = { quality: h, type: I || e.type }
                    if (!T.length) return y(x, _)
                    let P = Yu(Vu)
                    P.post(
                        { transforms: T, imageData: x },
                        (O) => {
                            y(ku(O), _), P.terminate()
                        },
                        [x.data.buffer],
                    )
                })
                .catch(n)
        }),
    rf = ['x', 'y', 'left', 'top', 'right', 'bottom', 'width', 'height'],
    sf = (e) => (typeof e == 'string' && /%/.test(e) ? parseFloat(e) / 100 : e),
    cf = (e) => {
        let [t, i] = e,
            a = i.points ? {} : rf.reduce((n, o) => ((n[o] = sf(i[o])), n), {})
        return [t, { zIndex: 0, ...i, ...a }]
    },
    df = (e) =>
        new Promise((t, i) => {
            let a = new Image()
            a.src = URL.createObjectURL(e)
            let n = () => {
                let l = a.naturalWidth,
                    r = a.naturalHeight
                l &&
                    r &&
                    (URL.revokeObjectURL(a.src),
                    clearInterval(o),
                    t({ width: l, height: r }))
            }
            a.onerror = (l) => {
                URL.revokeObjectURL(a.src), clearInterval(o), i(l)
            }
            let o = setInterval(n, 1)
            n()
        })
typeof window < 'u' &&
    typeof window.document < 'u' &&
    (HTMLCanvasElement.prototype.toBlob ||
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (e, t, i) {
                let a = this
                setTimeout(() => {
                    let n = a.toDataURL(t, i).split(',')[1],
                        o = atob(n),
                        l = o.length,
                        r = new Uint8Array(l)
                    for (; l--; ) r[l] = o.charCodeAt(l)
                    e(new Blob([r], { type: t || 'image/png' }))
                })
            },
        }))
var La = typeof window < 'u' && typeof window.document < 'u',
    pf = La && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    Rl = ({ addFilter: e, utils: t }) => {
        let { Type: i, forin: a, getFileFromBlob: n, isFile: o } = t,
            l = ['crop', 'resize', 'filter', 'markup', 'output'],
            r = (c) => (d, m, u) => d(m, c ? c(u) : u),
            s = (c) =>
                c.aspectRatio === null &&
                c.rotation === 0 &&
                c.zoom === 1 &&
                c.center &&
                c.center.x === 0.5 &&
                c.center.y === 0.5 &&
                c.flip &&
                c.flip.horizontal === !1 &&
                c.flip.vertical === !1
        e(
            'SHOULD_PREPARE_OUTPUT',
            (c, { query: d }) =>
                new Promise((m) => {
                    m(!d('IS_ASYNC'))
                }),
        )
        let p = (c, d, m) =>
            new Promise((u) => {
                if (
                    !c('GET_ALLOW_IMAGE_TRANSFORM') ||
                    m.archived ||
                    !o(d) ||
                    !ru(d)
                )
                    return u(!1)
                df(d)
                    .then(() => {
                        let f = c('GET_IMAGE_TRANSFORM_IMAGE_FILTER')
                        if (f) {
                            let g = f(d)
                            if (g == null) return handleRevert(!0)
                            if (typeof g == 'boolean') return u(g)
                            if (typeof g.then == 'function') return g.then(u)
                        }
                        u(!0)
                    })
                    .catch((f) => {
                        u(!1)
                    })
            })
        return (
            e('DID_CREATE_ITEM', (c, { query: d, dispatch: m }) => {
                d('GET_ALLOW_IMAGE_TRANSFORM') &&
                    c.extend(
                        'requestPrepare',
                        () =>
                            new Promise((u, f) => {
                                m(
                                    'REQUEST_PREPARE_OUTPUT',
                                    {
                                        query: c.id,
                                        item: c,
                                        success: u,
                                        failure: f,
                                    },
                                    !0,
                                )
                            }),
                    )
            }),
            e(
                'PREPARE_OUTPUT',
                (c, { query: d, item: m }) =>
                    new Promise((u) => {
                        p(d, c, m).then((f) => {
                            if (!f) return u(c)
                            let g = []
                            d(
                                'GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL',
                            ) &&
                                g.push(
                                    () =>
                                        new Promise((x) => {
                                            x({
                                                name: d(
                                                    'GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME',
                                                ),
                                                file: c,
                                            })
                                        }),
                                ),
                                d(
                                    'GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT',
                                ) &&
                                    g.push(
                                        (x, _, P) =>
                                            new Promise((O) => {
                                                x(_, P).then((M) =>
                                                    O({
                                                        name: d(
                                                            'GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME',
                                                        ),
                                                        file: M,
                                                    }),
                                                )
                                            }),
                                    )
                            let h = d('GET_IMAGE_TRANSFORM_VARIANTS') || {}
                            a(h, (x, _) => {
                                let P = r(_)
                                g.push(
                                    (O, M, N) =>
                                        new Promise((S) => {
                                            P(O, M, N).then((D) =>
                                                S({ name: x, file: D }),
                                            )
                                        }),
                                )
                            })
                            let I = d('GET_IMAGE_TRANSFORM_OUTPUT_QUALITY'),
                                E = d(
                                    'GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE',
                                ),
                                T = I === null ? null : I / 100,
                                v = d('GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE'),
                                y =
                                    d(
                                        'GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS',
                                    ) || l
                            m.setMetadata(
                                'output',
                                { type: v, quality: T, client: y },
                                !0,
                            )
                            let b = (x, _) =>
                                    new Promise((P, O) => {
                                        let M = { ..._ }
                                        Object.keys(M)
                                            .filter((C) => C !== 'exif')
                                            .forEach((C) => {
                                                y.indexOf(C) === -1 &&
                                                    delete M[C]
                                            })
                                        let {
                                                resize: N,
                                                exif: S,
                                                output: D,
                                                crop: R,
                                                filter: L,
                                                markup: z,
                                            } = M,
                                            F = {
                                                image: {
                                                    orientation: S
                                                        ? S.orientation
                                                        : null,
                                                },
                                                output:
                                                    D &&
                                                    (D.type ||
                                                        typeof D.quality ==
                                                            'number' ||
                                                        D.background)
                                                        ? {
                                                              type: D.type,
                                                              quality:
                                                                  typeof D.quality ==
                                                                  'number'
                                                                      ? D.quality *
                                                                        100
                                                                      : null,
                                                              background:
                                                                  D.background ||
                                                                  d(
                                                                      'GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR',
                                                                  ) ||
                                                                  null,
                                                          }
                                                        : void 0,
                                                size:
                                                    N &&
                                                    (N.size.width ||
                                                        N.size.height)
                                                        ? {
                                                              mode: N.mode,
                                                              upscale:
                                                                  N.upscale,
                                                              ...N.size,
                                                          }
                                                        : void 0,
                                                crop:
                                                    R && !s(R)
                                                        ? { ...R }
                                                        : void 0,
                                                markup:
                                                    z && z.length
                                                        ? z.map(cf)
                                                        : [],
                                                filter: L,
                                            }
                                        if (F.output) {
                                            let C = D.type
                                                    ? D.type !== x.type
                                                    : !1,
                                                Y = /\/jpe?g$/.test(x.type),
                                                X =
                                                    D.quality !== null
                                                        ? Y && E === 'always'
                                                        : !1
                                            if (
                                                !!!(
                                                    F.size ||
                                                    F.crop ||
                                                    F.filter ||
                                                    C ||
                                                    X
                                                )
                                            )
                                                return P(x)
                                        }
                                        let G = {
                                            beforeCreateBlob: d(
                                                'GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB',
                                            ),
                                            afterCreateBlob: d(
                                                'GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB',
                                            ),
                                            canvasMemoryLimit: d(
                                                'GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT',
                                            ),
                                            stripImageHead: d(
                                                'GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD',
                                            ),
                                        }
                                        lf(x, F, G)
                                            .then((C) => {
                                                let Y = n(
                                                    C,
                                                    du(x.name, pu(C.type)),
                                                )
                                                P(Y)
                                            })
                                            .catch(O)
                                    }),
                                w = g.map((x) => x(b, c, m.getMetadata()))
                            Promise.all(w).then((x) => {
                                u(
                                    x.length === 1 && x[0].name === null
                                        ? x[0].file
                                        : x,
                                )
                            })
                        })
                    }),
            ),
            {
                options: {
                    allowImageTransform: [!0, i.BOOLEAN],
                    imageTransformImageFilter: [null, i.FUNCTION],
                    imageTransformOutputMimeType: [null, i.STRING],
                    imageTransformOutputQuality: [null, i.INT],
                    imageTransformOutputStripImageHead: [!0, i.BOOLEAN],
                    imageTransformClientTransforms: [null, i.ARRAY],
                    imageTransformOutputQualityMode: ['always', i.STRING],
                    imageTransformVariants: [null, i.OBJECT],
                    imageTransformVariantsIncludeDefault: [!0, i.BOOLEAN],
                    imageTransformVariantsDefaultName: [null, i.STRING],
                    imageTransformVariantsIncludeOriginal: [!1, i.BOOLEAN],
                    imageTransformVariantsOriginalName: ['original_', i.STRING],
                    imageTransformBeforeCreateBlob: [null, i.FUNCTION],
                    imageTransformAfterCreateBlob: [null, i.FUNCTION],
                    imageTransformCanvasMemoryLimit: [
                        La && pf ? 4096 * 4096 : null,
                        i.INT,
                    ],
                    imageTransformCanvasBackgroundColor: [null, i.STRING],
                },
            }
        )
    }
La &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: Rl }),
    )
var wl = Rl
var Aa = (e) => /^video/.test(e.type),
    Xt = (e) => /^audio/.test(e.type),
    Ma = class {
        constructor(t, i) {
            ;(this.mediaEl = t),
                (this.audioElems = i),
                (this.onplayhead = !1),
                (this.duration = 0),
                (this.timelineWidth =
                    this.audioElems.timeline.offsetWidth -
                    this.audioElems.playhead.offsetWidth),
                (this.moveplayheadFn = this.moveplayhead.bind(this)),
                this.registerListeners()
        }
        registerListeners() {
            this.mediaEl.addEventListener(
                'timeupdate',
                this.timeUpdate.bind(this),
                !1,
            ),
                this.mediaEl.addEventListener(
                    'canplaythrough',
                    () => (this.duration = this.mediaEl.duration),
                    !1,
                ),
                this.audioElems.timeline.addEventListener(
                    'click',
                    this.timelineClicked.bind(this),
                    !1,
                ),
                this.audioElems.button.addEventListener(
                    'click',
                    this.play.bind(this),
                ),
                this.audioElems.playhead.addEventListener(
                    'mousedown',
                    this.mouseDown.bind(this),
                    !1,
                ),
                window.addEventListener('mouseup', this.mouseUp.bind(this), !1)
        }
        play() {
            this.mediaEl.paused ? this.mediaEl.play() : this.mediaEl.pause(),
                this.audioElems.button.classList.toggle('play'),
                this.audioElems.button.classList.toggle('pause')
        }
        timeUpdate() {
            let t = (this.mediaEl.currentTime / this.duration) * 100
            ;(this.audioElems.playhead.style.marginLeft = t + '%'),
                this.mediaEl.currentTime === this.duration &&
                    (this.audioElems.button.classList.toggle('play'),
                    this.audioElems.button.classList.toggle('pause'))
        }
        moveplayhead(t) {
            let i = t.clientX - this.getPosition(this.audioElems.timeline)
            i >= 0 &&
                i <= this.timelineWidth &&
                (this.audioElems.playhead.style.marginLeft = i + 'px'),
                i < 0 && (this.audioElems.playhead.style.marginLeft = '0px'),
                i > this.timelineWidth &&
                    (this.audioElems.playhead.style.marginLeft =
                        this.timelineWidth - 4 + 'px')
        }
        timelineClicked(t) {
            this.moveplayhead(t),
                (this.mediaEl.currentTime =
                    this.duration * this.clickPercent(t))
        }
        mouseDown() {
            ;(this.onplayhead = !0),
                window.addEventListener('mousemove', this.moveplayheadFn, !0),
                this.mediaEl.removeEventListener(
                    'timeupdate',
                    this.timeUpdate.bind(this),
                    !1,
                )
        }
        mouseUp(t) {
            window.removeEventListener('mousemove', this.moveplayheadFn, !0),
                this.onplayhead == !0 &&
                    (this.moveplayhead(t),
                    (this.mediaEl.currentTime =
                        this.duration * this.clickPercent(t)),
                    this.mediaEl.addEventListener(
                        'timeupdate',
                        this.timeUpdate.bind(this),
                        !1,
                    )),
                (this.onplayhead = !1)
        }
        clickPercent(t) {
            return (
                (t.clientX - this.getPosition(this.audioElems.timeline)) /
                this.timelineWidth
            )
        }
        getPosition(t) {
            return t.getBoundingClientRect().left
        }
    },
    mf = (e) =>
        e.utils.createView({
            name: 'media-preview',
            tag: 'div',
            ignoreRect: !0,
            create: ({ root: t, props: i }) => {
                let { id: a } = i,
                    n = t.query('GET_ITEM', { id: i.id }),
                    o = Xt(n.file) ? 'audio' : 'video'
                if (
                    ((t.ref.media = document.createElement(o)),
                    t.ref.media.setAttribute('controls', !0),
                    t.element.appendChild(t.ref.media),
                    Xt(n.file))
                ) {
                    let l = document.createDocumentFragment()
                    ;(t.ref.audio = []),
                        (t.ref.audio.container = document.createElement('div')),
                        (t.ref.audio.button = document.createElement('span')),
                        (t.ref.audio.timeline = document.createElement('div')),
                        (t.ref.audio.playhead = document.createElement('div')),
                        (t.ref.audio.container.className = 'audioplayer'),
                        (t.ref.audio.button.className = 'playpausebtn play'),
                        (t.ref.audio.timeline.className = 'timeline'),
                        (t.ref.audio.playhead.className = 'playhead'),
                        t.ref.audio.timeline.appendChild(t.ref.audio.playhead),
                        t.ref.audio.container.appendChild(t.ref.audio.button),
                        t.ref.audio.container.appendChild(t.ref.audio.timeline),
                        l.appendChild(t.ref.audio.container),
                        t.element.appendChild(l)
                }
            },
            write: e.utils.createRoute({
                DID_MEDIA_PREVIEW_LOAD: ({ root: t, props: i }) => {
                    let { id: a } = i,
                        n = t.query('GET_ITEM', { id: i.id })
                    if (!n) return
                    let o = window.URL || window.webkitURL,
                        l = new Blob([n.file], { type: n.file.type })
                    ;(t.ref.media.type = n.file.type),
                        (t.ref.media.src =
                            (n.file.mock && n.file.url) ||
                            o.createObjectURL(l)),
                        Xt(n.file) && new Ma(t.ref.media, t.ref.audio),
                        t.ref.media.addEventListener(
                            'loadeddata',
                            () => {
                                let r = 75
                                if (Aa(n.file)) {
                                    let s = t.ref.media.offsetWidth,
                                        p = t.ref.media.videoWidth / s
                                    r = t.ref.media.videoHeight / p
                                }
                                t.dispatch('DID_UPDATE_PANEL_HEIGHT', {
                                    id: i.id,
                                    height: r,
                                })
                            },
                            !1,
                        )
                },
            }),
        }),
    uf = (e) => {
        let t = ({ root: a, props: n }) => {
                let { id: o } = n
                a.query('GET_ITEM', o) &&
                    a.dispatch('DID_MEDIA_PREVIEW_LOAD', { id: o })
            },
            i = ({ root: a, props: n }) => {
                let o = mf(e)
                a.ref.media = a.appendChildView(
                    a.createChildView(o, { id: n.id }),
                )
            }
        return e.utils.createView({
            name: 'media-preview-wrapper',
            create: i,
            write: e.utils.createRoute({
                DID_MEDIA_PREVIEW_CONTAINER_CREATE: t,
            }),
        })
    },
    Oa = (e) => {
        let { addFilter: t, utils: i } = e,
            { Type: a, createRoute: n } = i,
            o = uf(e)
        return (
            t('CREATE_VIEW', (l) => {
                let { is: r, view: s, query: p } = l
                if (!r('file')) return
                let c = ({ root: d, props: m }) => {
                    let { id: u } = m,
                        f = p('GET_ITEM', u),
                        g = p('GET_ALLOW_VIDEO_PREVIEW'),
                        h = p('GET_ALLOW_AUDIO_PREVIEW')
                    !f ||
                        f.archived ||
                        ((!Aa(f.file) || !g) && (!Xt(f.file) || !h)) ||
                        ((d.ref.mediaPreview = s.appendChildView(
                            s.createChildView(o, { id: u }),
                        )),
                        d.dispatch('DID_MEDIA_PREVIEW_CONTAINER_CREATE', {
                            id: u,
                        }))
                }
                s.registerWriter(
                    n({ DID_LOAD_ITEM: c }, ({ root: d, props: m }) => {
                        let { id: u } = m,
                            f = p('GET_ITEM', u),
                            g = d.query('GET_ALLOW_VIDEO_PREVIEW'),
                            h = d.query('GET_ALLOW_AUDIO_PREVIEW')
                        !f ||
                            ((!Aa(f.file) || !g) && (!Xt(f.file) || !h)) ||
                            d.rect.element.hidden
                    }),
                )
            }),
            {
                options: {
                    allowVideoPreview: [!0, a.BOOLEAN],
                    allowAudioPreview: [!0, a.BOOLEAN],
                },
            }
        )
    },
    ff = typeof window < 'u' && typeof window.document < 'u'
ff &&
    document.dispatchEvent(
        new CustomEvent('FilePond:pluginloaded', { detail: Oa }),
    )
var Sl = {
    labelIdle:
        '\u0627\u0633\u062D\u0628 \u0648 \u0627\u062F\u0631\u062C \u0645\u0644\u0641\u0627\u062A\u0643 \u0623\u0648 <span class="filepond--label-action"> \u062A\u0635\u0641\u062D </span>',
    labelInvalidField:
        '\u0627\u0644\u062D\u0642\u0644 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629',
    labelFileWaitingForSize:
        '\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062D\u062C\u0645',
    labelFileSizeNotAvailable:
        '\u0627\u0644\u062D\u062C\u0645 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D',
    labelFileLoading: '\u0628\u0627\u0644\u0625\u0646\u062A\u0638\u0627\u0631',
    labelFileLoadError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u0645\u064A\u0644',
    labelFileProcessing: '\u064A\u062A\u0645 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingComplete: '\u062A\u0645 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingAborted:
        '\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u0641\u0639',
    labelFileProcessingRevertError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0631\u0627\u062C\u0639',
    labelFileRemoveError:
        '\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641',
    labelTapToCancel:
        '\u0627\u0646\u0642\u0631 \u0644\u0644\u0625\u0644\u063A\u0627\u0621',
    labelTapToRetry:
        '\u0627\u0646\u0642\u0631 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629',
    labelTapToUndo:
        '\u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u0631\u0627\u062C\u0639',
    labelButtonRemoveItem: '\u0645\u0633\u062D',
    labelButtonAbortItemLoad: '\u0625\u0644\u063A\u0627\u0621',
    labelButtonRetryItemLoad: '\u0625\u0639\u0627\u062F\u0629',
    labelButtonAbortItemProcessing: '\u0625\u0644\u063A\u0627\u0621',
    labelButtonUndoItemProcessing: '\u062A\u0631\u0627\u062C\u0639',
    labelButtonRetryItemProcessing: '\u0625\u0639\u0627\u062F\u0629',
    labelButtonProcessItem: '\u0631\u0641\u0639',
    labelMaxFileSizeExceeded:
        '\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627',
    labelMaxFileSize:
        '\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0642\u0635\u0649: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u062A\u0645 \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u062D\u062C\u0645 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A',
    labelMaxTotalFileSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641: {filesize}',
    labelFileTypeNotAllowed:
        '\u0645\u0644\u0641 \u0645\u0646 \u0646\u0648\u0639 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D',
    fileValidateTypeLabelExpectedTypes:
        '\u062A\u062A\u0648\u0642\u0639 {allButLastType} \u0645\u0646 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0646\u0648\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u063A\u064A\u0631 \u062C\u062F\u0627',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0627\u0644\u0635\u0648\u0631\u0629 \u0643\u0628\u064A\u0631\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelExpectedMinSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0623\u0628\u0639\u0627\u062F \u0647\u0648: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0623\u0628\u0639\u0627\u062F \u0647\u0648: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0627\u0644\u062F\u0642\u0629 \u0636\u0639\u064A\u0641\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0627\u0644\u062F\u0642\u0629 \u0645\u0631\u062A\u0641\u0639\u0629 \u062C\u062F\u0627',
    imageValidateSizeLabelExpectedMinResolution:
        '\u0623\u0642\u0644 \u062F\u0642\u0629: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u0623\u0642\u0635\u0649 \u062F\u0642\u0629: {maxResolution}',
}
var Ll = {
    labelIdle:
        'Arrossega i deixa anar els teus fitxers o <span class="filepond--label-action"> Navega </span>',
    labelInvalidField: 'El camp cont\xE9 fitxers inv\xE0lids',
    labelFileWaitingForSize: 'Esperant mida',
    labelFileSizeNotAvailable: 'Mida no disponible',
    labelFileLoading: 'Carregant',
    labelFileLoadError: 'Error durant la c\xE0rrega',
    labelFileProcessing: 'Pujant',
    labelFileProcessingComplete: 'Pujada completada',
    labelFileProcessingAborted: 'Pujada cancel\xB7lada',
    labelFileProcessingError: 'Error durant la pujada',
    labelFileProcessingRevertError: 'Error durant la reversi\xF3',
    labelFileRemoveError: "Error durant l'eliminaci\xF3",
    labelTapToCancel: 'toca per cancel\xB7lar',
    labelTapToRetry: 'toca per reintentar',
    labelTapToUndo: 'toca per desfer',
    labelButtonRemoveItem: 'Eliminar',
    labelButtonAbortItemLoad: 'Cancel\xB7lar',
    labelButtonRetryItemLoad: 'Reintentar',
    labelButtonAbortItemProcessing: 'Cancel\xB7lar',
    labelButtonUndoItemProcessing: 'Desfer',
    labelButtonRetryItemProcessing: 'Reintentar',
    labelButtonProcessItem: 'Pujar',
    labelMaxFileSizeExceeded: 'El fitxer \xE9s massa gran',
    labelMaxFileSize: 'La mida m\xE0xima del fitxer \xE9s {filesize}',
    labelMaxTotalFileSizeExceeded: 'Mida m\xE0xima total excedida',
    labelMaxTotalFileSize:
        'La mida m\xE0xima total del fitxer \xE9s {filesize}',
    labelFileTypeNotAllowed: 'Fitxer de tipus inv\xE0lid',
    fileValidateTypeLabelExpectedTypes: 'Espera {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: "Tipus d'imatge no suportada",
    imageValidateSizeLabelImageSizeTooSmall: 'La imatge \xE9s massa petita',
    imageValidateSizeLabelImageSizeTooBig: 'La imatge \xE9s massa gran',
    imageValidateSizeLabelExpectedMinSize:
        'La mida m\xEDnima \xE9s {minWidth} x {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'La mida m\xE0xima \xE9s {maxWidth} x {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'La resoluci\xF3 \xE9s massa baixa',
    imageValidateSizeLabelImageResolutionTooHigh:
        'La resoluci\xF3 \xE9s massa alta',
    imageValidateSizeLabelExpectedMinResolution:
        'La resoluci\xF3 m\xEDnima \xE9s {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'La resoluci\xF3 m\xE0xima \xE9s {maxResolution}',
}
var Al = {
    labelIdle:
        '\u067E\u06D5\u0695\u06AF\u06D5\u06A9\u0627\u0646 \u0641\u0695\u06CE \u0628\u062F\u06D5 \u0626\u06CE\u0631\u06D5 \u0628\u06C6 \u0628\u0627\u0631\u06A9\u0631\u062F\u0646 \u06CC\u0627\u0646 <span class="filepond--label-action"> \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u06D5 </span>',
    labelInvalidField:
        '\u067E\u06D5\u0695\u06AF\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A\u06CC \u062A\u06CE\u062F\u0627\u06CC\u06D5',
    labelFileWaitingForSize:
        '\u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06CC\u06CC \u0642\u06D5\u0628\u0627\u0631\u06D5',
    labelFileSizeNotAvailable:
        '\u0642\u06D5\u0628\u0627\u0631\u06D5 \u0628\u06D5\u0631\u062F\u06D5\u0633\u062A \u0646\u06CC\u06D5',
    labelFileLoading: '\u0628\u0627\u0631\u06A9\u0631\u062F\u0646',
    labelFileLoadError:
        '\u0647\u06D5\u06B5\u06D5 \u0644\u06D5\u0645\u0627\u0648\u06D5\u06CC \u0628\u0627\u0631\u06A9\u0631\u062F\u0646',
    labelFileProcessing: '\u0628\u0627\u0631\u06A9\u0631\u062F\u0646',
    labelFileProcessingComplete:
        '\u0628\u0627\u0631\u06A9\u0631\u062F\u0646 \u062A\u06D5\u0648\u0627\u0648 \u0628\u0648\u0648',
    labelFileProcessingAborted:
        '\u0628\u0627\u0631\u06A9\u0631\u062F\u0646 \u0647\u06D5\u06B5\u0648\u06D5\u0634\u0627\u06CC\u06D5\u0648\u06D5',
    labelFileProcessingError:
        '\u0647\u06D5\u06B5\u06D5 \u0644\u06D5\u06A9\u0627\u062A\u06CC \u0628\u0627\u0631\u06A9\u0631\u062F\u0646\u062F\u0627',
    labelFileProcessingRevertError:
        '\u0647\u06D5\u06B5\u06D5 \u0644\u06D5 \u06A9\u0627\u062A\u06CC \u06AF\u06D5\u0695\u0627\u0646\u06D5\u0648\u06D5',
    labelFileRemoveError:
        '\u0647\u06D5\u06B5\u06D5 \u0644\u06D5 \u06A9\u0627\u062A\u06CC \u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5',
    labelTapToCancel:
        '\u0628\u06C6 \u0647\u06D5\u06B5\u0648\u06D5\u0634\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5 Tab \u062F\u0627\u0628\u06AF\u0631\u06D5',
    labelTapToRetry:
        'tap \u062F\u0627\u0628\u06AF\u0631\u06D5 \u0628\u06C6 \u062F\u0648\u0648\u0628\u0627\u0631\u06D5\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5',
    labelTapToUndo:
        'tap \u062F\u0627\u0628\u06AF\u0631\u06D5 \u0628\u06C6 \u06AF\u06D5\u0695\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5',
    labelButtonRemoveItem: '\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5',
    labelButtonAbortItemLoad:
        '\u0647\u06D5\u06B5\u0648\u06D5\u0634\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5',
    labelButtonRetryItemLoad:
        '\u0647\u06D5\u0648\u06B5\u062F\u0627\u0646\u06D5\u0648\u06D5',
    labelButtonAbortItemProcessing:
        '\u067E\u06D5\u0634\u06CC\u0645\u0627\u0646\u0628\u0648\u0648\u0646\u06D5\u0648\u06D5',
    labelButtonUndoItemProcessing:
        '\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5',
    labelButtonRetryItemProcessing:
        '\u0647\u06D5\u0648\u06B5\u062F\u0627\u0646\u06D5\u0648\u06D5',
    labelButtonProcessItem: '\u0628\u0627\u0631\u06A9\u0631\u062F\u0646',
    labelMaxFileSizeExceeded:
        '\u067E\u06D5\u0695\u06AF\u06D5 \u0632\u06C6\u0631 \u06AF\u06D5\u0648\u0631\u06D5\u06CC\u06D5',
    labelMaxFileSize:
        '\u0632\u06C6\u0631\u062A\u0631\u06CC\u0646 \u0642\u06D5\u0628\u0627\u0631\u06D5 {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u0632\u06C6\u0631\u062A\u0631\u06CC\u0646 \u0642\u06D5\u0628\u0627\u0631\u06D5\u06CC \u06A9\u06C6\u06CC \u06AF\u0634\u062A\u06CC \u062A\u06CE\u067E\u06D5\u0695\u06CE\u0646\u062F\u0631\u0627',
    labelMaxTotalFileSize:
        '\u0632\u06C6\u0631\u062A\u0631\u06CC\u0646 \u0642\u06D5\u0628\u0627\u0631\u06D5\u06CC \u06A9\u06C6\u06CC \u067E\u06D5\u0695\u06AF\u06D5 {filesize}',
    labelFileTypeNotAllowed:
        '\u062C\u06C6\u0631\u06CC \u067E\u06D5\u0695\u06AF\u06D5\u06A9\u06D5 \u0646\u0627\u062F\u0631\u0648\u0633\u062A\u06D5',
    fileValidateTypeLabelExpectedTypes:
        '\u062C\u06AF\u06D5 \u0644\u06D5 {allButLastType} \u06CC\u0627\u0646 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u062C\u06C6\u0631\u06CC \u0648\u06CE\u0646\u06D5 \u067E\u0627\u06B5\u067E\u0634\u062A\u06CC\u06CC \u0646\u06D5\u06A9\u0631\u0627\u0648\u06D5',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0648\u06CE\u0646\u06D5\u06A9\u06D5 \u0632\u06C6\u0631 \u0628\u0686\u0648\u0648\u06A9\u06D5',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0648\u06CE\u0646\u06D5\u06A9\u06D5 \u0632\u06C6\u0631 \u06AF\u06D5\u0648\u0631\u06D5\u06CC\u06D5',
    imageValidateSizeLabelExpectedMinSize:
        '\u06A9\u06D5\u0645\u062A\u0631\u06CC\u0646 \u0642\u06D5\u0628\u0627\u0631\u06D5 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u0632\u06C6\u0631\u062A\u0631\u06CC\u0646 \u0642\u06D5\u0628\u0627\u0631\u06D5 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0648\u0631\u062F\u0628\u06CC\u0646\u06CC\u06CC\u06D5\u06A9\u06D5\u06CC \u0632\u06C6\u0631 \u06A9\u06D5\u0645\u06D5',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0648\u0631\u062F\u0628\u06CC\u0646\u06CC\u06CC\u06D5\u06A9\u06D5\u06CC \u0632\u06C6\u0631 \u0628\u06D5\u0631\u0632\u06D5',
    imageValidateSizeLabelExpectedMinResolution:
        '\u06A9\u06D5\u0645\u062A\u0631\u06CC\u0646 \u0648\u0631\u062F\u0628\u06CC\u0646\u06CC\u06CC {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u0632\u06C6\u0631\u062A\u0631\u06CC\u0646 \u0648\u0631\u062F\u0628\u06CC\u0646\u06CC {maxResolution}',
}
var Ml = {
    labelIdle:
        'P\u0159et\xE1hn\u011Bte soubor sem (drag&drop) nebo <span class="filepond--label-action"> Vyhledat </span>',
    labelInvalidField: 'Pole obsahuje chybn\xE9 soubory',
    labelFileWaitingForSize: 'Zji\u0161\u0165uje se velikost',
    labelFileSizeNotAvailable: 'Velikost nen\xED zn\xE1m\xE1',
    labelFileLoading: 'P\u0159en\xE1\u0161\xED se',
    labelFileLoadError: 'Chyba p\u0159i p\u0159enosu',
    labelFileProcessing: 'Prob\xEDh\xE1 upload',
    labelFileProcessingComplete: 'Upload dokon\u010Den',
    labelFileProcessingAborted: 'Upload stornov\xE1n',
    labelFileProcessingError: 'Chyba p\u0159i uploadu',
    labelFileProcessingRevertError: 'Chyba p\u0159i obnov\u011B',
    labelFileRemoveError: 'Chyba p\u0159i odstran\u011Bn\xED',
    labelTapToCancel: 'klepn\u011Bte pro storno',
    labelTapToRetry: 'klepn\u011Bte pro opakov\xE1n\xED',
    labelTapToUndo: 'klepn\u011Bte pro vr\xE1cen\xED',
    labelButtonRemoveItem: 'Odstranit',
    labelButtonAbortItemLoad: 'Storno',
    labelButtonRetryItemLoad: 'Opakovat',
    labelButtonAbortItemProcessing: 'Zp\u011Bt',
    labelButtonUndoItemProcessing: 'Vr\xE1tit',
    labelButtonRetryItemProcessing: 'Opakovat',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Soubor je p\u0159\xEDli\u0161 velk\xFD',
    labelMaxFileSize: 'Nejv\u011Bt\u0161\xED velikost souboru je {filesize}',
    labelMaxTotalFileSizeExceeded:
        'P\u0159ekro\u010Dena maxim\xE1ln\xED celkov\xE1 velikost souboru',
    labelMaxTotalFileSize:
        'Maxim\xE1ln\xED celkov\xE1 velikost souboru je {filesize}',
    labelFileTypeNotAllowed: 'Soubor je nespr\xE1vn\xE9ho typu',
    fileValidateTypeLabelExpectedTypes:
        'O\u010Dek\xE1v\xE1 se {allButLastType} nebo {lastType}',
    imageValidateSizeLabelFormatError:
        'Obr\xE1zek tohoto typu nen\xED podporov\xE1n',
    imageValidateSizeLabelImageSizeTooSmall:
        'Obr\xE1zek je p\u0159\xEDli\u0161 mal\xFD',
    imageValidateSizeLabelImageSizeTooBig:
        'Obr\xE1zek je p\u0159\xEDli\u0161 velk\xFD',
    imageValidateSizeLabelExpectedMinSize:
        'Minim\xE1ln\xED rozm\u011Br je {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maxim\xE1ln\xED rozm\u011Br je {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'Rozli\u0161en\xED je p\u0159\xEDli\u0161 mal\xE9',
    imageValidateSizeLabelImageResolutionTooHigh:
        'Rozli\u0161en\xED je p\u0159\xEDli\u0161 velk\xE9',
    imageValidateSizeLabelExpectedMinResolution:
        'Minim\xE1ln\xED rozli\u0161en\xED je {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maxim\xE1ln\xED rozli\u0161en\xED je {maxResolution}',
}
var Ol = {
    labelIdle:
        'Tr\xE6k & slip filer eller <span class = "filepond - label-action"> Gennemse </span>',
    labelInvalidField: 'Felt indeholder ugyldige filer',
    labelFileWaitingForSize: 'Venter p\xE5 st\xF8rrelse',
    labelFileSizeNotAvailable: 'St\xF8rrelse ikke tilg\xE6ngelig',
    labelFileLoading: 'Loader',
    labelFileLoadError: 'Load fejlede',
    labelFileProcessing: 'Uploader',
    labelFileProcessingComplete: 'Upload f\xE6rdig',
    labelFileProcessingAborted: 'Upload annulleret',
    labelFileProcessingError: 'Upload fejlede',
    labelFileProcessingRevertError: 'Fortryd fejlede',
    labelFileRemoveError: 'Fjern fejlede',
    labelTapToCancel: 'tryk for at annullere',
    labelTapToRetry: 'tryk for at pr\xF8ve igen',
    labelTapToUndo: 'tryk for at fortryde',
    labelButtonRemoveItem: 'Fjern',
    labelButtonAbortItemLoad: 'Annuller',
    labelButtonRetryItemLoad: 'Fors\xF8g igen',
    labelButtonAbortItemProcessing: 'Annuller',
    labelButtonUndoItemProcessing: 'Fortryd',
    labelButtonRetryItemProcessing: 'Pr\xF8v igen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Filen er for stor',
    labelMaxFileSize: 'Maksimal filst\xF8rrelse er {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maksimal totalst\xF8rrelse overskredet',
    labelMaxTotalFileSize: 'Maksimal total filst\xF8rrelse er {filesize}',
    labelFileTypeNotAllowed: 'Ugyldig filtype',
    fileValidateTypeLabelExpectedTypes:
        'Forventer {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Ugyldigt format',
    imageValidateSizeLabelImageSizeTooSmall: 'Billedet er for lille',
    imageValidateSizeLabelImageSizeTooBig: 'Billedet er for stort',
    imageValidateSizeLabelExpectedMinSize:
        'Minimum st\xF8rrelse er {minBredde} \xD7 {minH\xF8jde}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maksimal st\xF8rrelse er {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'For lav opl\xF8sning',
    imageValidateSizeLabelImageResolutionTooHigh: 'For h\xF8j opl\xF8sning',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimum opl\xF8sning er {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maksimal opl\xF8sning er {maxResolution}',
}
var Pl = {
    labelIdle:
        'Dateien ablegen oder <span class="filepond--label-action"> ausw\xE4hlen </span>',
    labelInvalidField: 'Feld beinhaltet ung\xFCltige Dateien',
    labelFileWaitingForSize: 'Dateigr\xF6\xDFe berechnen',
    labelFileSizeNotAvailable: 'Dateigr\xF6\xDFe nicht verf\xFCgbar',
    labelFileLoading: 'Laden',
    labelFileLoadError: 'Fehler beim Laden',
    labelFileProcessing: 'Upload l\xE4uft',
    labelFileProcessingComplete: 'Upload abgeschlossen',
    labelFileProcessingAborted: 'Upload abgebrochen',
    labelFileProcessingError: 'Fehler beim Upload',
    labelFileProcessingRevertError: 'Fehler beim Wiederherstellen',
    labelFileRemoveError: 'Fehler beim L\xF6schen',
    labelTapToCancel: 'abbrechen',
    labelTapToRetry: 'erneut versuchen',
    labelTapToUndo: 'r\xFCckg\xE4ngig',
    labelButtonRemoveItem: 'Entfernen',
    labelButtonAbortItemLoad: 'Verwerfen',
    labelButtonRetryItemLoad: 'Erneut versuchen',
    labelButtonAbortItemProcessing: 'Abbrechen',
    labelButtonUndoItemProcessing: 'R\xFCckg\xE4ngig',
    labelButtonRetryItemProcessing: 'Erneut versuchen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Datei ist zu gro\xDF',
    labelMaxFileSize: 'Maximale Dateigr\xF6\xDFe: {filesize}',
    labelMaxTotalFileSizeExceeded:
        'Maximale gesamte Dateigr\xF6\xDFe \xFCberschritten',
    labelMaxTotalFileSize: 'Maximale gesamte Dateigr\xF6\xDFe: {filesize}',
    labelFileTypeNotAllowed: 'Dateityp ung\xFCltig',
    fileValidateTypeLabelExpectedTypes:
        'Erwartet {allButLastType} oder {lastType}',
    imageValidateSizeLabelFormatError: 'Bildtyp nicht unterst\xFCtzt',
    imageValidateSizeLabelImageSizeTooSmall: 'Bild ist zu klein',
    imageValidateSizeLabelImageSizeTooBig: 'Bild ist zu gro\xDF',
    imageValidateSizeLabelExpectedMinSize:
        'Mindestgr\xF6\xDFe: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maximale Gr\xF6\xDFe: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Aufl\xF6sung ist zu niedrig',
    imageValidateSizeLabelImageResolutionTooHigh: 'Aufl\xF6sung ist zu hoch',
    imageValidateSizeLabelExpectedMinResolution:
        'Mindestaufl\xF6sung: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maximale Aufl\xF6sung: {maxResolution}',
}
var Dl = {
    labelIdle:
        'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>',
    labelInvalidField: 'Field contains invalid files',
    labelFileWaitingForSize: 'Waiting for size',
    labelFileSizeNotAvailable: 'Size not available',
    labelFileLoading: 'Loading',
    labelFileLoadError: 'Error during load',
    labelFileProcessing: 'Uploading',
    labelFileProcessingComplete: 'Upload complete',
    labelFileProcessingAborted: 'Upload cancelled',
    labelFileProcessingError: 'Error during upload',
    labelFileProcessingRevertError: 'Error during revert',
    labelFileRemoveError: 'Error during remove',
    labelTapToCancel: 'tap to cancel',
    labelTapToRetry: 'tap to retry',
    labelTapToUndo: 'tap to undo',
    labelButtonRemoveItem: 'Remove',
    labelButtonAbortItemLoad: 'Abort',
    labelButtonRetryItemLoad: 'Retry',
    labelButtonAbortItemProcessing: 'Cancel',
    labelButtonUndoItemProcessing: 'Undo',
    labelButtonRetryItemProcessing: 'Retry',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'File is too large',
    labelMaxFileSize: 'Maximum file size is {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximum total size exceeded',
    labelMaxTotalFileSize: 'Maximum total file size is {filesize}',
    labelFileTypeNotAllowed: 'File of invalid type',
    fileValidateTypeLabelExpectedTypes:
        'Expects {allButLastType} or {lastType}',
    imageValidateSizeLabelFormatError: 'Image type not supported',
    imageValidateSizeLabelImageSizeTooSmall: 'Image is too small',
    imageValidateSizeLabelImageSizeTooBig: 'Image is too big',
    imageValidateSizeLabelExpectedMinSize:
        'Minimum size is {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maximum size is {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolution is too low',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolution is too high',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimum resolution is {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maximum resolution is {maxResolution}',
}
var Fl = {
    labelIdle:
        'Arrastra y suelta tus archivos o <span class = "filepond--label-action"> Examina <span>',
    labelInvalidField: 'El campo contiene archivos inv\xE1lidos',
    labelFileWaitingForSize: 'Esperando tama\xF1o',
    labelFileSizeNotAvailable: 'Tama\xF1o no disponible',
    labelFileLoading: 'Cargando',
    labelFileLoadError: 'Error durante la carga',
    labelFileProcessing: 'Subiendo',
    labelFileProcessingComplete: 'Subida completa',
    labelFileProcessingAborted: 'Subida cancelada',
    labelFileProcessingError: 'Error durante la subida',
    labelFileProcessingRevertError: 'Error durante la reversi\xF3n',
    labelFileRemoveError: 'Error durante la eliminaci\xF3n',
    labelTapToCancel: 'toca para cancelar',
    labelTapToRetry: 'tocar para reintentar',
    labelTapToUndo: 'tocar para deshacer',
    labelButtonRemoveItem: 'Eliminar',
    labelButtonAbortItemLoad: 'Cancelar',
    labelButtonRetryItemLoad: 'Reintentar',
    labelButtonAbortItemProcessing: 'Cancelar',
    labelButtonUndoItemProcessing: 'Deshacer',
    labelButtonRetryItemProcessing: 'Reintentar',
    labelButtonProcessItem: 'Subir',
    labelMaxFileSizeExceeded: 'El archivo es demasiado grande',
    labelMaxFileSize: 'El tama\xF1o m\xE1ximo del archivo es {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tama\xF1o total m\xE1ximo excedido',
    labelMaxTotalFileSize:
        'El tama\xF1o total m\xE1ximo del archivo es {filesize}',
    labelFileTypeNotAllowed: 'Archivo de tipo inv\xE1lido',
    fileValidateTypeLabelExpectedTypes: 'Espera {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo de imagen no soportada',
    imageValidateSizeLabelImageSizeTooSmall:
        'La imagen es demasiado peque\xF1a',
    imageValidateSizeLabelImageSizeTooBig: 'La imagen es demasiado grande',
    imageValidateSizeLabelExpectedMinSize:
        'El tama\xF1o m\xEDnimo es {minWidth} x {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'El tama\xF1o m\xE1ximo es {maxWidth} x {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'La resoluci\xF3n es demasiado baja',
    imageValidateSizeLabelImageResolutionTooHigh:
        'La resoluci\xF3n es demasiado alta',
    imageValidateSizeLabelExpectedMinResolution:
        'La resoluci\xF3n m\xEDnima es {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'La resoluci\xF3n m\xE1xima es {maxResolution}',
}
var zl = {
    labelIdle:
        '\u0641\u0627\u06CC\u0644 \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F \u0648 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F\u060C \u06CC\u0627 <span class="filepond--label-action"> \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F </span>',
    labelInvalidField:
        '\u0641\u06CC\u0644\u062F \u062F\u0627\u0631\u0627\u06CC \u0641\u0627\u06CC\u0644 \u0647\u0627\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A',
    labelFileWaitingForSize: 'Waiting for size',
    labelFileSizeNotAvailable:
        '\u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A',
    labelFileLoading:
        '\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileLoadError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0627\u062C\u0631\u0627',
    labelFileProcessing:
        '\u062F\u0631\u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileProcessingComplete:
        '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u06A9\u0627\u0645\u0644 \u0634\u062F',
    labelFileProcessingAborted:
        '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0644\u063A\u0648 \u0634\u062F',
    labelFileProcessingError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelFileProcessingRevertError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u062D\u0630\u0641',
    labelFileRemoveError:
        '\u062E\u0637\u0627 \u062F\u0631 \u0632\u0645\u0627\u0646 \u062D\u0630\u0641',
    labelTapToCancel:
        '\u0628\u0631\u0627\u06CC \u0644\u063A\u0648 \u0636\u0631\u0628\u0647 \u0628\u0632\u0646\u06CC\u062F',
    labelTapToRetry:
        '\u0628\u0631\u0627\u06CC \u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
    labelTapToUndo:
        '\u0628\u0631\u0627\u06CC \u0628\u0631\u06AF\u0634\u062A \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
    labelButtonRemoveItem: '\u062D\u0630\u0641',
    labelButtonAbortItemLoad: '\u0644\u063A\u0648',
    labelButtonRetryItemLoad: '\u062A\u06A9\u0631\u0627\u0631',
    labelButtonAbortItemProcessing: '\u0644\u063A\u0648',
    labelButtonUndoItemProcessing: '\u0628\u0631\u06AF\u0634\u062A',
    labelButtonRetryItemProcessing: '\u062A\u06A9\u0631\u0627\u0631',
    labelButtonProcessItem: '\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC',
    labelMaxFileSizeExceeded:
        '\u0641\u0627\u06CC\u0644 \u0628\u0633\u06CC\u0627\u0631 \u062D\u062C\u06CC\u0645 \u0627\u0633\u062A',
    labelMaxFileSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0645\u062C\u0627\u0632 \u0641\u0627\u06CC\u0644 {filesize} \u0627\u0633\u062A',
    labelMaxTotalFileSizeExceeded:
        '\u0627\u0632 \u062D\u062F\u0627\u06A9\u062B\u0631 \u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 \u0628\u06CC\u0634\u062A\u0631 \u0634\u062F',
    labelMaxTotalFileSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 {filesize} \u0627\u0633\u062A',
    labelFileTypeNotAllowed:
        '\u0646\u0648\u0639 \u0641\u0627\u06CC\u0644 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A',
    fileValidateTypeLabelExpectedTypes:
        '\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 {allButLastType} \u06CC\u0627 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0641\u0631\u0645\u062A \u062A\u0635\u0648\u06CC\u0631 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC \u0634\u0648\u062F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u06A9\u0648\u0686\u06A9 \u0627\u0633\u062A',
    imageValidateSizeLabelImageSizeTooBig:
        '\u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0632\u0631\u06AF \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMinSize:
        '\u062D\u062F\u0627\u0642\u0644 \u0627\u0646\u062F\u0627\u0632\u0647 {minWidth} \xD7 {minHeight} \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMaxSize:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0627\u0646\u062F\u0627\u0632\u0647 {maxWidth} \xD7 {maxHeight} \u0627\u0633\u062A',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u06A9\u0645 \u0627\u0633\u062A',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0648\u0636\u0648\u0639 \u062A\u0635\u0648\u06CC\u0631 \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMinResolution:
        '\u062D\u062F\u0627\u0642\u0644 \u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 {minResolution} \u0627\u0633\u062A',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u062D\u062F\u0627\u06A9\u062B\u0631 \u0648\u0636\u0648\u062D \u062A\u0635\u0648\u06CC\u0631 {maxResolution} \u0627\u0633\u062A',
}
var Cl = {
    labelIdle:
        'Ved\xE4 ja pudota tiedostoja tai <span class="filepond--label-action"> Selaa </span>',
    labelInvalidField: 'Kent\xE4ss\xE4 on virheellisi\xE4 tiedostoja',
    labelFileWaitingForSize: 'Odotetaan kokoa',
    labelFileSizeNotAvailable: 'Kokoa ei saatavilla',
    labelFileLoading: 'Ladataan',
    labelFileLoadError: 'Virhe latauksessa',
    labelFileProcessing: 'L\xE4hetet\xE4\xE4n',
    labelFileProcessingComplete: 'L\xE4hetys valmis',
    labelFileProcessingAborted: 'L\xE4hetys peruttu',
    labelFileProcessingError: 'Virhe l\xE4hetyksess\xE4',
    labelFileProcessingRevertError: 'Virhe palautuksessa',
    labelFileRemoveError: 'Virhe poistamisessa',
    labelTapToCancel: 'peruuta napauttamalla',
    labelTapToRetry: 'yrit\xE4 uudelleen napauttamalla',
    labelTapToUndo: 'kumoa napauttamalla',
    labelButtonRemoveItem: 'Poista',
    labelButtonAbortItemLoad: 'Keskeyt\xE4',
    labelButtonRetryItemLoad: 'Yrit\xE4 uudelleen',
    labelButtonAbortItemProcessing: 'Peruuta',
    labelButtonUndoItemProcessing: 'Kumoa',
    labelButtonRetryItemProcessing: 'Yrit\xE4 uudelleen',
    labelButtonProcessItem: 'L\xE4het\xE4',
    labelMaxFileSizeExceeded: 'Tiedoston koko on liian suuri',
    labelMaxFileSize: 'Tiedoston maksimikoko on {filesize}',
    labelMaxTotalFileSizeExceeded:
        'Tiedostojen yhdistetty maksimikoko ylitetty',
    labelMaxTotalFileSize: 'Tiedostojen yhdistetty maksimikoko on {filesize}',
    labelFileTypeNotAllowed: 'Tiedostotyyppi\xE4 ei sallita',
    fileValidateTypeLabelExpectedTypes:
        'Sallitaan {allButLastType} tai {lastType}',
    imageValidateSizeLabelFormatError: 'Kuvatyyppi\xE4 ei tueta',
    imageValidateSizeLabelImageSizeTooSmall: 'Kuva on liian pieni',
    imageValidateSizeLabelImageSizeTooBig: 'Kuva on liian suuri',
    imageValidateSizeLabelExpectedMinSize:
        'Minimikoko on {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maksimikoko on {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resoluutio on liian pieni',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resoluutio on liian suuri',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimiresoluutio on {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maksimiresoluutio on {maxResolution}',
}
var Nl = {
    labelIdle:
        'Faites glisser vos fichiers ou <span class = "filepond--label-action"> Parcourir </span>',
    labelInvalidField: 'Le champ contient des fichiers invalides',
    labelFileWaitingForSize: 'En attente de taille',
    labelFileSizeNotAvailable: 'Taille non disponible',
    labelFileLoading: 'Chargement',
    labelFileLoadError: 'Erreur durant le chargement',
    labelFileProcessing: 'Traitement',
    labelFileProcessingComplete: 'Traitement effectu\xE9',
    labelFileProcessingAborted: 'Traitement interrompu',
    labelFileProcessingError: 'Erreur durant le traitement',
    labelFileProcessingRevertError: 'Erreur durant la restauration',
    labelFileRemoveError: 'Erreur durant la suppression',
    labelTapToCancel: 'appuyer pour annuler',
    labelTapToRetry: 'appuyer pour r\xE9essayer',
    labelTapToUndo: 'appuyer pour revenir en arri\xE8re',
    labelButtonRemoveItem: 'Retirer',
    labelButtonAbortItemLoad: 'Annuler',
    labelButtonRetryItemLoad: 'Recommencer',
    labelButtonAbortItemProcessing: 'Annuler',
    labelButtonUndoItemProcessing: 'Revenir en arri\xE8re',
    labelButtonRetryItemProcessing: 'Recommencer',
    labelButtonProcessItem: 'Transf\xE9rer',
    labelMaxFileSizeExceeded: 'Le fichier est trop volumineux',
    labelMaxFileSize: 'La taille maximale de fichier est {filesize}',
    labelMaxTotalFileSizeExceeded: 'Taille totale maximale d\xE9pass\xE9e',
    labelMaxTotalFileSize:
        'La taille totale maximale des fichiers est {filesize}',
    labelFileTypeNotAllowed: 'Fichier non valide',
    fileValidateTypeLabelExpectedTypes:
        'Attendu {allButLastType} ou {lastType}',
    imageValidateSizeLabelFormatError: "Type d'image non pris en charge",
    imageValidateSizeLabelImageSizeTooSmall: "L'image est trop petite",
    imageValidateSizeLabelImageSizeTooBig: "L'image est trop grande",
    imageValidateSizeLabelExpectedMinSize:
        'La taille minimale est {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'La taille maximale est {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'La r\xE9solution est trop faible',
    imageValidateSizeLabelImageResolutionTooHigh:
        'La r\xE9solution est trop \xE9lev\xE9e',
    imageValidateSizeLabelExpectedMinResolution:
        'La r\xE9solution minimale est {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'La r\xE9solution maximale est {maxResolution}',
}
var Bl = {
    labelIdle:
        'Mozgasd ide a f\xE1jlt a felt\xF6lt\xE9shez, vagy <span class="filepond--label-action"> tall\xF3z\xE1s </span>',
    labelInvalidField: 'A mez\u0151 \xE9rv\xE9nytelen f\xE1jlokat tartalmaz',
    labelFileWaitingForSize: 'F\xE1ljm\xE9ret kisz\xE1mol\xE1sa',
    labelFileSizeNotAvailable: 'A f\xE1jlm\xE9ret nem el\xE9rhet\u0151',
    labelFileLoading: 'T\xF6lt\xE9s',
    labelFileLoadError: 'Hiba a bet\xF6lt\xE9s sor\xE1n',
    labelFileProcessing: 'Felt\xF6lt\xE9s',
    labelFileProcessingComplete: 'Sikeres felt\xF6lt\xE9s',
    labelFileProcessingAborted: 'A felt\xF6lt\xE9s megszak\xEDtva',
    labelFileProcessingError: 'Hiba t\xF6rt\xE9nt a felt\xF6lt\xE9s sor\xE1n',
    labelFileProcessingRevertError: 'Hiba a vissza\xE1ll\xEDt\xE1s sor\xE1n',
    labelFileRemoveError: 'Hiba t\xF6rt\xE9nt az elt\xE1vol\xEDt\xE1s sor\xE1n',
    labelTapToCancel: 'koppints a t\xF6rl\xE9shez',
    labelTapToRetry: 'koppints az \xFAjrakezd\xE9shez',
    labelTapToUndo: 'koppints a visszavon\xE1shoz',
    labelButtonRemoveItem: 'Elt\xE1vol\xEDt\xE1s',
    labelButtonAbortItemLoad: 'Megszak\xEDt\xE1s',
    labelButtonRetryItemLoad: '\xDAjrapr\xF3b\xE1lkoz\xE1s',
    labelButtonAbortItemProcessing: 'Megszak\xEDt\xE1s',
    labelButtonUndoItemProcessing: 'Visszavon\xE1s',
    labelButtonRetryItemProcessing: '\xDAjrapr\xF3b\xE1lkoz\xE1s',
    labelButtonProcessItem: 'Felt\xF6lt\xE9s',
    labelMaxFileSizeExceeded:
        'A f\xE1jl t\xFAll\xE9pte a maxim\xE1lis m\xE9retet',
    labelMaxFileSize: 'Maxim\xE1lis f\xE1jlm\xE9ret: {filesize}',
    labelMaxTotalFileSizeExceeded:
        'T\xFAll\xE9pte a maxim\xE1lis teljes m\xE9retet',
    labelMaxTotalFileSize: 'A maxim\xE1is teljes f\xE1jlm\xE9ret: {filesize}',
    labelFileTypeNotAllowed: '\xC9rv\xE9nytelen t\xEDpus\xFA f\xE1jl',
    fileValidateTypeLabelExpectedTypes:
        'Enged\xE9lyezett t\xEDpusok {allButLastType} vagy {lastType}',
    imageValidateSizeLabelFormatError: 'A k\xE9pt\xEDpus nem t\xE1mogatott',
    imageValidateSizeLabelImageSizeTooSmall: 'A k\xE9p t\xFAl kicsi',
    imageValidateSizeLabelImageSizeTooBig: 'A k\xE9p t\xFAl nagy',
    imageValidateSizeLabelExpectedMinSize:
        'Minimum m\xE9ret: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maximum m\xE9ret: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'A felbont\xE1s t\xFAl alacsony',
    imageValidateSizeLabelImageResolutionTooHigh: 'A felbont\xE1s t\xFAl magas',
    imageValidateSizeLabelExpectedMinResolution:
        'Minim\xE1is felbont\xE1s: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maxim\xE1lis felbont\xE1s: {maxResolution}',
}
var kl = {
    labelIdle:
        'Seret & Jatuhkan berkas Anda atau <span class="filepond--label-action">Jelajahi</span>',
    labelInvalidField: 'Isian berisi berkas yang tidak valid',
    labelFileWaitingForSize: 'Menunggu ukuran berkas',
    labelFileSizeNotAvailable: 'Ukuran berkas tidak tersedia',
    labelFileLoading: 'Memuat',
    labelFileLoadError: 'Kesalahan saat memuat',
    labelFileProcessing: 'Mengunggah',
    labelFileProcessingComplete: 'Pengunggahan selesai',
    labelFileProcessingAborted: 'Pengunggahan dibatalkan',
    labelFileProcessingError: 'Kesalahan saat pengunggahan',
    labelFileProcessingRevertError: 'Kesalahan saat pemulihan',
    labelFileRemoveError: 'Kesalahan saat penghapusan',
    labelTapToCancel: 'ketuk untuk membatalkan',
    labelTapToRetry: 'ketuk untuk mencoba lagi',
    labelTapToUndo: 'ketuk untuk mengurungkan',
    labelButtonRemoveItem: 'Hapus',
    labelButtonAbortItemLoad: 'Batalkan',
    labelButtonRetryItemLoad: 'Coba Kembali',
    labelButtonAbortItemProcessing: 'Batalkan',
    labelButtonUndoItemProcessing: 'Urungkan',
    labelButtonRetryItemProcessing: 'Coba Kembali',
    labelButtonProcessItem: 'Unggah',
    labelMaxFileSizeExceeded: 'Berkas terlalu besar',
    labelMaxFileSize: 'Ukuran berkas maksimum adalah {filesize}',
    labelMaxTotalFileSizeExceeded: 'Jumlah berkas maksimum terlampaui',
    labelMaxTotalFileSize: 'Jumlah berkas maksimum adalah {filesize}',
    labelFileTypeNotAllowed: 'Jenis berkas tidak valid',
    fileValidateTypeLabelExpectedTypes:
        'Mengharapkan {allButLastType} atau {lastType}',
    imageValidateSizeLabelFormatError: 'Jenis citra tidak didukung',
    imageValidateSizeLabelImageSizeTooSmall: 'Citra terlalu kecil',
    imageValidateSizeLabelImageSizeTooBig: 'Citra terlalu besar',
    imageValidateSizeLabelExpectedMinSize:
        'Ukuran minimum adalah {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Ukuran maksimum adalah {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolusi terlalu rendah',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolusi terlalu tinggi',
    imageValidateSizeLabelExpectedMinResolution:
        'Resolusi minimum adalah {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Resolusi maksimum adalah {maxResolution}',
}
var Vl = {
    labelIdle:
        'Trascina e rilascia i tuoi file oppure <span class = "filepond--label-action"> Carica <span>',
    labelInvalidField: 'Il campo contiene dei file non validi',
    labelFileWaitingForSize: 'Aspettando le dimensioni',
    labelFileSizeNotAvailable: 'Dimensioni non disponibili',
    labelFileLoading: 'Caricamento',
    labelFileLoadError: 'Errore durante il caricamento',
    labelFileProcessing: 'Caricamento',
    labelFileProcessingComplete: 'Caricamento completato',
    labelFileProcessingAborted: 'Caricamento cancellato',
    labelFileProcessingError: 'Errore durante il caricamento',
    labelFileProcessingRevertError: 'Errore durante il ripristino',
    labelFileRemoveError: "Errore durante l'eliminazione",
    labelTapToCancel: 'tocca per cancellare',
    labelTapToRetry: 'tocca per riprovare',
    labelTapToUndo: 'tocca per ripristinare',
    labelButtonRemoveItem: 'Elimina',
    labelButtonAbortItemLoad: 'Cancella',
    labelButtonRetryItemLoad: 'Ritenta',
    labelButtonAbortItemProcessing: 'Camcella',
    labelButtonUndoItemProcessing: 'Indietro',
    labelButtonRetryItemProcessing: 'Ritenta',
    labelButtonProcessItem: 'Carica',
    labelMaxFileSizeExceeded: 'Il peso del file \xE8 eccessivo',
    labelMaxFileSize: 'Il peso massimo del file \xE8 {filesize}',
    labelMaxTotalFileSizeExceeded: 'Dimensione totale massima superata',
    labelMaxTotalFileSize:
        'La dimensione massima totale del file \xE8 {filesize}',
    labelFileTypeNotAllowed: 'File non supportato',
    fileValidateTypeLabelExpectedTypes: 'Aspetta {allButLastType} o {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo di immagine non compatibile',
    imageValidateSizeLabelImageSizeTooSmall: "L'immagine \xE8 troppo piccola",
    imageValidateSizeLabelImageSizeTooBig: "L'immagine \xE8 troppo grande",
    imageValidateSizeLabelExpectedMinSize:
        'La dimensione minima \xE8 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'La dimensione massima \xE8 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'La risoluzione \xE8 troppo bassa',
    imageValidateSizeLabelImageResolutionTooHigh:
        'La risoluzione \xE8 troppo alta',
    imageValidateSizeLabelExpectedMinResolution:
        'La risoluzione minima \xE8 {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'La risoluzione massima \xE8 {maxResolution}',
}
var Gl = {
    labelIdle:
        '\u1791\u17B6\u1789&\u178A\u17B6\u1780\u17CB\u17A0\u17D2\u179C\u17B6\u179B\u17CB\u17AF\u1780\u179F\u17B6\u179A\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780 \u17AC <span class="filepond--label-action"> \u179F\u17D2\u179C\u17C2\u1784\u179A\u1780 </span>',
    labelInvalidField:
        '\u1785\u1793\u17D2\u179B\u17C4\u17C7\u1798\u17B6\u1793\u17AF\u1780\u179F\u17B6\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C',
    labelFileWaitingForSize:
        '\u1780\u17C6\u1796\u17BB\u1784\u179A\u1784\u17CB\u1785\u17B6\u17C6\u1791\u17C6\u17A0\u17C6',
    labelFileSizeNotAvailable:
        '\u1791\u17C6\u17A0\u17C6\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793',
    labelFileLoading:
        '\u1780\u17C6\u1796\u17BB\u1784\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A',
    labelFileLoadError:
        '\u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17C6\u17A1\u17BB\u1784\u1796\u17C1\u179B\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A',
    labelFileProcessing:
        '\u1780\u17C6\u1796\u17BB\u1784\u1795\u17D2\u1791\u17BB\u1780\u17A1\u17BE\u1784',
    labelFileProcessingComplete:
        '\u1780\u17B6\u179A\u1795\u17D2\u1791\u17BB\u1780\u17A1\u17BE\u1784\u1796\u17C1\u1789\u179B\u17C1\u1789',
    labelFileProcessingAborted:
        '\u1780\u17B6\u179A\u1794\u1784\u17D2\u17A0\u17C4\u17C7\u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1794\u17C4\u17C7\u1794\u1784\u17CB',
    labelFileProcessingError:
        '\u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17C6\u17A1\u17BB\u1784\u1796\u17C1\u179B\u1780\u17C6\u1796\u17BB\u1784\u1795\u17D2\u1791\u17BB\u1780\u17A1\u17BE\u1784',
    labelFileProcessingRevertError:
        '\u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17C6\u17A1\u17BB\u1784\u1796\u17C1\u179B\u178F\u17D2\u179A\u17A1\u1794\u17CB',
    labelFileRemoveError:
        '\u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17C6\u17A1\u17BB\u1784\u1796\u17C1\u179B\u178A\u1780\u1785\u17C1\u1789',
    labelTapToCancel:
        '\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1794\u17C4\u17C7\u1794\u1784\u17CB',
    labelTapToRetry:
        '\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F',
    labelTapToUndo:
        '\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1798\u17B7\u1793\u1792\u17D2\u179C\u17BE\u179C\u17B7\u1789',
    labelButtonRemoveItem: '\u1799\u1780\u1785\u17C1\u1789',
    labelButtonAbortItemLoad: '\u1794\u17C4\u17C7\u1794\u1784\u17CB',
    labelButtonRetryItemLoad:
        '\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F',
    labelButtonAbortItemProcessing: '\u1794\u17C4\u17C7\u1794\u1784\u17CB',
    labelButtonUndoItemProcessing:
        '\u1798\u17B7\u1793\u1792\u17D2\u179C\u17BE\u179C\u17B7\u1789',
    labelButtonRetryItemProcessing:
        '\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F',
    labelButtonProcessItem: '\u1795\u17D2\u1791\u17BB\u1780\u17A1\u17BE\u1784',
    labelMaxFileSizeExceeded:
        '\u17AF\u1780\u179F\u17B6\u179A\u1792\u17C6\u1796\u17C1\u1780',
    labelMaxFileSize:
        '\u1791\u17C6\u17A0\u17C6\u17AF\u1780\u179F\u17B6\u179A\u17A2\u178F\u17B7\u1794\u179A\u1798\u17B6\u1782\u17BA {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u179B\u17BE\u179F\u1791\u17C6\u17A0\u17C6\u179F\u179A\u17BB\u1794\u17A2\u178F\u17B7\u1794\u179A\u1798\u17B6',
    labelMaxTotalFileSize:
        '\u1791\u17C6\u17A0\u17C6\u17AF\u1780\u179F\u17B6\u179A\u179F\u179A\u17BB\u1794\u17A2\u178F\u17B7\u1794\u179A\u1798\u17B6\u1782\u17BA {filesize}',
    labelFileTypeNotAllowed:
        '\u1794\u17D2\u179A\u1797\u17C1\u1791\u17AF\u1780\u179F\u17B6\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C',
    fileValidateTypeLabelExpectedTypes:
        '\u179A\u17C6\u1796\u17B9\u1784\u1790\u17B6 {allButLastType} \u17AC {lastType}',
    imageValidateSizeLabelFormatError:
        '\u1794\u17D2\u179A\u1797\u17C1\u1791\u179A\u17BC\u1794\u1797\u17B6\u1796\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u179A\u17BC\u1794\u1797\u17B6\u1796\u178F\u17BC\u1785\u1796\u17C1\u1780',
    imageValidateSizeLabelImageSizeTooBig:
        '\u179A\u17BC\u1794\u1797\u17B6\u1796\u1792\u17C6\u1796\u17C1\u1780',
    imageValidateSizeLabelExpectedMinSize:
        '\u1791\u17C6\u17A0\u17C6\u17A2\u1794\u17D2\u1794\u1794\u179A\u1798\u17B6\u1782\u17BA {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u1791\u17C6\u17A0\u17C6\u17A2\u178F\u17B7\u1794\u179A\u1798\u17B6\u1782\u17BA {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u1782\u17BB\u178E\u1797\u17B6\u1796\u1794\u1784\u17D2\u17A0\u17B6\u1789\u1791\u17B6\u1794\u1796\u17C1\u1780',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u1782\u17BB\u178E\u1797\u17B6\u1796\u1794\u1784\u17D2\u17A0\u17B6\u1789\u1781\u17D2\u1796\u179F\u17CB\u1796\u17C1\u1780',
    imageValidateSizeLabelExpectedMinResolution:
        '\u1782\u17BB\u178E\u1797\u17B6\u1796\u1794\u1784\u17D2\u17A0\u17B6\u1789\u17A2\u1794\u17D2\u1794\u1794\u179A\u1798\u17B6\u1782\u17BA {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u1782\u17BB\u178E\u1797\u17B6\u1796\u1794\u1784\u17D2\u17A0\u17B6\u1789\u17A2\u178F\u17B7\u1794\u179A\u1798\u17B6\u1782\u17BA {maxResolution}',
}
var Ul = {
    labelIdle:
        'Drag & Drop je bestanden of <span class="filepond--label-action"> Bladeren </span>',
    labelInvalidField: 'Veld bevat ongeldige bestanden',
    labelFileWaitingForSize: 'Wachten op grootte',
    labelFileSizeNotAvailable: 'Grootte niet beschikbaar',
    labelFileLoading: 'Laden',
    labelFileLoadError: 'Fout tijdens laden',
    labelFileProcessing: 'Uploaden',
    labelFileProcessingComplete: 'Upload afgerond',
    labelFileProcessingAborted: 'Upload geannuleerd',
    labelFileProcessingError: 'Fout tijdens upload',
    labelFileProcessingRevertError: 'Fout bij herstellen',
    labelFileRemoveError: 'Fout bij verwijderen',
    labelTapToCancel: 'tik om te annuleren',
    labelTapToRetry: 'tik om opnieuw te proberen',
    labelTapToUndo: 'tik om ongedaan te maken',
    labelButtonRemoveItem: 'Verwijderen',
    labelButtonAbortItemLoad: 'Afbreken',
    labelButtonRetryItemLoad: 'Opnieuw proberen',
    labelButtonAbortItemProcessing: 'Annuleren',
    labelButtonUndoItemProcessing: 'Ongedaan maken',
    labelButtonRetryItemProcessing: 'Opnieuw proberen',
    labelButtonProcessItem: 'Upload',
    labelMaxFileSizeExceeded: 'Bestand is te groot',
    labelMaxFileSize: 'Maximale bestandsgrootte is {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximale totale grootte overschreden',
    labelMaxTotalFileSize: 'Maximale totale bestandsgrootte is {filesize}',
    labelFileTypeNotAllowed: 'Ongeldig bestandstype',
    fileValidateTypeLabelExpectedTypes:
        'Verwacht {allButLastType} of {lastType}',
    imageValidateSizeLabelFormatError: 'Afbeeldingstype niet ondersteund',
    imageValidateSizeLabelImageSizeTooSmall: 'Afbeelding is te klein',
    imageValidateSizeLabelImageSizeTooBig: 'Afbeelding is te groot',
    imageValidateSizeLabelExpectedMinSize:
        'Minimale afmeting is {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maximale afmeting is {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolutie is te laag',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolution is too high',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimale resolutie is {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maximale resolutie is {maxResolution}',
}
var Wl = {
    labelIdle:
        'Dra og slipp filene dine, eller <span class="filepond--label-action"> Bla gjennom... </span>',
    labelInvalidField: 'Feltet inneholder ugyldige filer',
    labelFileWaitingForSize: 'Venter p\xE5 st\xF8rrelse',
    labelFileSizeNotAvailable: 'St\xF8rrelse ikke tilgjengelig',
    labelFileLoading: 'Laster',
    labelFileLoadError: 'Feil under lasting',
    labelFileProcessing: 'Laster opp',
    labelFileProcessingComplete: 'Opplasting ferdig',
    labelFileProcessingAborted: 'Opplasting avbrutt',
    labelFileProcessingError: 'Feil under opplasting',
    labelFileProcessingRevertError: 'Feil under reversering',
    labelFileRemoveError: 'Feil under flytting',
    labelTapToCancel: 'klikk for \xE5 avbryte',
    labelTapToRetry: 'klikk for \xE5 pr\xF8ve p\xE5 nytt',
    labelTapToUndo: 'klikk for \xE5 angre',
    labelButtonRemoveItem: 'Fjern',
    labelButtonAbortItemLoad: 'Avbryt',
    labelButtonRetryItemLoad: 'Pr\xF8v p\xE5 nytt',
    labelButtonAbortItemProcessing: 'Avbryt',
    labelButtonUndoItemProcessing: 'Angre',
    labelButtonRetryItemProcessing: 'Pr\xF8v p\xE5 nytt',
    labelButtonProcessItem: 'Last opp',
    labelMaxFileSizeExceeded: 'Filen er for stor',
    labelMaxFileSize: 'Maksimal filst\xF8rrelse er {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maksimal total st\xF8rrelse oversteget',
    labelMaxTotalFileSize: 'Maksimal total st\xF8rrelse er {filesize}',
    labelFileTypeNotAllowed: 'Ugyldig filtype',
    fileValidateTypeLabelExpectedTypes:
        'Forventer {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Bildeformat ikke st\xF8ttet',
    imageValidateSizeLabelImageSizeTooSmall: 'Bildet er for lite',
    imageValidateSizeLabelImageSizeTooBig: 'Bildet er for stort',
    imageValidateSizeLabelExpectedMinSize:
        'Minimumsst\xF8rrelse er {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maksimumsst\xF8rrelse er {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Oppl\xF8sningen er for lav',
    imageValidateSizeLabelImageResolutionTooHigh:
        'Oppl\xF8sningen er for h\xF8y',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimum oppl\xF8sning er {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maksimal oppl\xF8sning er {maxResolution}',
}
var Hl = {
    labelIdle:
        'Przeci\u0105gnij i upu\u015B\u0107 lub <span class="filepond--label-action">wybierz</span> pliki',
    labelInvalidField: 'Nieprawid\u0142owe pliki',
    labelFileWaitingForSize: 'Pobieranie rozmiaru',
    labelFileSizeNotAvailable: 'Nieznany rozmiar',
    labelFileLoading: 'Wczytywanie',
    labelFileLoadError: 'B\u0142\u0105d wczytywania',
    labelFileProcessing: 'Przesy\u0142anie',
    labelFileProcessingComplete: 'Przes\u0142ano',
    labelFileProcessingAborted: 'Przerwano',
    labelFileProcessingError: 'Przesy\u0142anie nie powiod\u0142o si\u0119',
    labelFileProcessingRevertError: 'Co\u015B posz\u0142o nie tak',
    labelFileRemoveError: 'Nieudane usuni\u0119cie',
    labelTapToCancel: 'Anuluj',
    labelTapToRetry: 'Pon\xF3w',
    labelTapToUndo: 'Cofnij',
    labelButtonRemoveItem: 'Usu\u0144',
    labelButtonAbortItemLoad: 'Przerwij',
    labelButtonRetryItemLoad: 'Pon\xF3w',
    labelButtonAbortItemProcessing: 'Anuluj',
    labelButtonUndoItemProcessing: 'Cofnij',
    labelButtonRetryItemProcessing: 'Pon\xF3w',
    labelButtonProcessItem: 'Prze\u015Blij',
    labelMaxFileSizeExceeded: 'Plik jest zbyt du\u017Cy',
    labelMaxFileSize: 'Dopuszczalna wielko\u015B\u0107 pliku to {filesize}',
    labelMaxTotalFileSizeExceeded:
        'Przekroczono \u0142\u0105czny rozmiar plik\xF3w',
    labelMaxTotalFileSize:
        '\u0141\u0105czny rozmiar plik\xF3w nie mo\u017Ce przekroczy\u0107 {filesize}',
    labelFileTypeNotAllowed: 'Niedozwolony rodzaj pliku',
    fileValidateTypeLabelExpectedTypes:
        'Oczekiwano {allButLastType} lub {lastType}',
    imageValidateSizeLabelFormatError: 'Nieobs\u0142ugiwany format obrazu',
    imageValidateSizeLabelImageSizeTooSmall: 'Obraz jest zbyt ma\u0142y',
    imageValidateSizeLabelImageSizeTooBig: 'Obraz jest zbyt du\u017Cy',
    imageValidateSizeLabelExpectedMinSize:
        'Minimalne wymiary obrazu to {minWidth}\xD7{minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maksymalna wymiary obrazu to {maxWidth}\xD7{maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'Rozdzielczo\u015B\u0107 jest zbyt niska',
    imageValidateSizeLabelImageResolutionTooHigh:
        'Rozdzielczo\u015B\u0107 jest zbyt wysoka',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimalna rozdzielczo\u015B\u0107 to {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maksymalna rozdzielczo\u015B\u0107 to {maxResolution}',
}
var wi = {
    labelIdle:
        'Arraste e solte os arquivos ou <span class="filepond--label-action"> Clique aqui </span>',
    labelInvalidField: 'Arquivos inv\xE1lidos',
    labelFileWaitingForSize: 'Calculando o tamanho do arquivo',
    labelFileSizeNotAvailable: 'Tamanho do arquivo indispon\xEDvel',
    labelFileLoading: 'Carregando',
    labelFileLoadError: 'Erro durante o carregamento',
    labelFileProcessing: 'Enviando',
    labelFileProcessingComplete: 'Envio finalizado',
    labelFileProcessingAborted: 'Envio cancelado',
    labelFileProcessingError: 'Erro durante o envio',
    labelFileProcessingRevertError: 'Erro ao reverter o envio',
    labelFileRemoveError: 'Erro ao remover o arquivo',
    labelTapToCancel: 'clique para cancelar',
    labelTapToRetry: 'clique para reenviar',
    labelTapToUndo: 'clique para desfazer',
    labelButtonRemoveItem: 'Remover',
    labelButtonAbortItemLoad: 'Abortar',
    labelButtonRetryItemLoad: 'Reenviar',
    labelButtonAbortItemProcessing: 'Cancelar',
    labelButtonUndoItemProcessing: 'Desfazer',
    labelButtonRetryItemProcessing: 'Reenviar',
    labelButtonProcessItem: 'Enviar',
    labelMaxFileSizeExceeded: 'Arquivo \xE9 muito grande',
    labelMaxFileSize: 'O tamanho m\xE1ximo permitido: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Tamanho total dos arquivos excedido',
    labelMaxTotalFileSize: 'Tamanho total permitido: {filesize}',
    labelFileTypeNotAllowed: 'Tipo de arquivo inv\xE1lido',
    fileValidateTypeLabelExpectedTypes:
        'Tipos de arquivo suportados s\xE3o {allButLastType} ou {lastType}',
    imageValidateSizeLabelFormatError: 'Tipo de imagem inv\xE1lida',
    imageValidateSizeLabelImageSizeTooSmall: 'Imagem muito pequena',
    imageValidateSizeLabelImageSizeTooBig: 'Imagem muito grande',
    imageValidateSizeLabelExpectedMinSize:
        'Tamanho m\xEDnimo permitida: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Tamanho m\xE1ximo permitido: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow: 'Resolu\xE7\xE3o muito baixa',
    imageValidateSizeLabelImageResolutionTooHigh: 'Resolu\xE7\xE3o muito alta',
    imageValidateSizeLabelExpectedMinResolution:
        'Resolu\xE7\xE3o m\xEDnima permitida: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Resolu\xE7\xE3o m\xE1xima permitida: {maxResolution}',
}
var jl = {
    labelIdle:
        'Trage \u0219i plaseaz\u0103 fi\u0219iere sau <span class="filepond--label-action"> Caut\u0103-le </span>',
    labelInvalidField:
        'C\xE2mpul con\u021Bine fi\u0219iere care nu sunt valide',
    labelFileWaitingForSize: '\xCEn a\u0219teptarea dimensiunii',
    labelFileSizeNotAvailable: 'Dimensiunea nu este diponibil\u0103',
    labelFileLoading: 'Se \xEEncarc\u0103',
    labelFileLoadError: 'Eroare la \xEEnc\u0103rcare',
    labelFileProcessing: 'Se \xEEncarc\u0103',
    labelFileProcessingComplete: '\xCEnc\u0103rcare finalizat\u0103',
    labelFileProcessingAborted: '\xCEnc\u0103rcare anulat\u0103',
    labelFileProcessingError: 'Eroare la \xEEnc\u0103rcare',
    labelFileProcessingRevertError: 'Eroare la anulare',
    labelFileRemoveError: 'Eroare la \u015Ftergere',
    labelTapToCancel: 'apas\u0103 pentru a anula',
    labelTapToRetry: 'apas\u0103 pentru a re\xEEncerca',
    labelTapToUndo: 'apas\u0103 pentru a anula',
    labelButtonRemoveItem: '\u015Eterge',
    labelButtonAbortItemLoad: 'Anuleaz\u0103',
    labelButtonRetryItemLoad: 'Re\xEEncearc\u0103',
    labelButtonAbortItemProcessing: 'Anuleaz\u0103',
    labelButtonUndoItemProcessing: 'Anuleaz\u0103',
    labelButtonRetryItemProcessing: 'Re\xEEncearc\u0103',
    labelButtonProcessItem: '\xCEncarc\u0103',
    labelMaxFileSizeExceeded: 'Fi\u0219ierul este prea mare',
    labelMaxFileSize:
        'Dimensiunea maxim\u0103 a unui fi\u0219ier este de {filesize}',
    labelMaxTotalFileSizeExceeded:
        'Dimensiunea total\u0103 maxim\u0103 a fost dep\u0103\u0219it\u0103',
    labelMaxTotalFileSize:
        'Dimensiunea total\u0103 maxim\u0103 a fi\u0219ierelor este de {filesize}',
    labelFileTypeNotAllowed: 'Tipul fi\u0219ierului nu este valid',
    fileValidateTypeLabelExpectedTypes:
        'Se a\u0219teapt\u0103 {allButLastType} sau {lastType}',
    imageValidateSizeLabelFormatError: 'Formatul imaginii nu este acceptat',
    imageValidateSizeLabelImageSizeTooSmall: 'Imaginea este prea mic\u0103',
    imageValidateSizeLabelImageSizeTooBig: 'Imaginea este prea mare',
    imageValidateSizeLabelExpectedMinSize:
        'M\u0103rimea minim\u0103 este de {maxWidth} x {maxHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'M\u0103rimea maxim\u0103 este de {maxWidth} x {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'Rezolu\u021Bia este prea mic\u0103',
    imageValidateSizeLabelImageResolutionTooHigh:
        'Rezolu\u021Bia este prea mare',
    imageValidateSizeLabelExpectedMinResolution:
        'Rezolu\u021Bia minim\u0103 este de {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Rezolu\u021Bia maxim\u0103 este de {maxResolution}',
}
var ql = {
    labelIdle:
        '\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 <span class="filepond--label-action"> \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 </span>',
    labelInvalidField:
        '\u041F\u043E\u043B\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u0430\u0439\u043B\u044B',
    labelFileWaitingForSize:
        '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440',
    labelFileSizeNotAvailable:
        '\u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
    labelFileLoading: '\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435',
    labelFileLoadError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438',
    labelFileProcessing: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    labelFileProcessingComplete:
        '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430',
    labelFileProcessingAborted:
        '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430',
    labelFileProcessingError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435',
    labelFileProcessingRevertError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435',
    labelFileRemoveError:
        '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438',
    labelTapToCancel:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B',
    labelTapToRetry:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelTapToUndo:
        '\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F',
    labelButtonRemoveItem: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
    labelButtonAbortItemLoad:
        '\u041F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u043E',
    labelButtonRetryItemLoad:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelButtonAbortItemProcessing: '\u041E\u0442\u043C\u0435\u043D\u0430',
    labelButtonUndoItemProcessing:
        '\u041E\u0442\u043C\u0435\u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F',
    labelButtonRetryItemProcessing:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443',
    labelButtonProcessItem: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    labelMaxFileSizeExceeded:
        '\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439',
    labelMaxFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440',
    labelMaxTotalFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430: {filesize}',
    labelFileTypeNotAllowed:
        '\u0424\u0430\u0439\u043B \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430',
    fileValidateTypeLabelExpectedTypes:
        '\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F {allButLastType} \u0438\u043B\u0438 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0422\u0438\u043F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435',
    imageValidateSizeLabelExpectedMinSize:
        '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043D\u0438\u0437\u043A\u043E\u0435',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u044B\u0441\u043E\u043A\u043E\u0435',
    imageValidateSizeLabelExpectedMinResolution:
        '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: {maxResolution}',
}
var Yl = {
    labelIdle:
        'Drag och sl\xE4pp dina filer eller <span class="filepond--label-action"> Bl\xE4ddra </span>',
    labelInvalidField: 'F\xE4ltet inneh\xE5ller felaktiga filer',
    labelFileWaitingForSize: 'V\xE4ntar p\xE5 storlek',
    labelFileSizeNotAvailable: 'Storleken finns inte tillg\xE4nglig',
    labelFileLoading: 'Laddar',
    labelFileLoadError: 'Fel under laddning',
    labelFileProcessing: 'Laddar upp',
    labelFileProcessingComplete: 'Uppladdning klar',
    labelFileProcessingAborted: 'Uppladdning avbruten',
    labelFileProcessingError: 'Fel under uppladdning',
    labelFileProcessingRevertError: 'Fel under \xE5terst\xE4llning',
    labelFileRemoveError: 'Fel under borttagning',
    labelTapToCancel: 'tryck f\xF6r att avbryta',
    labelTapToRetry: 'tryck f\xF6r att f\xF6rs\xF6ka igen',
    labelTapToUndo: 'tryck f\xF6r att \xE5ngra',
    labelButtonRemoveItem: 'Tabort',
    labelButtonAbortItemLoad: 'Avbryt',
    labelButtonRetryItemLoad: 'F\xF6rs\xF6k igen',
    labelButtonAbortItemProcessing: 'Avbryt',
    labelButtonUndoItemProcessing: '\xC5ngra',
    labelButtonRetryItemProcessing: 'F\xF6rs\xF6k igen',
    labelButtonProcessItem: 'Ladda upp',
    labelMaxFileSizeExceeded: 'Filen \xE4r f\xF6r stor',
    labelMaxFileSize: 'St\xF6rsta till\xE5tna filstorlek \xE4r {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximal uppladdningsstorlek uppn\xE5d',
    labelMaxTotalFileSize: 'Maximal uppladdningsstorlek \xE4r {filesize}',
    labelFileTypeNotAllowed: 'Felaktig filtyp',
    fileValidateTypeLabelExpectedTypes:
        'Godk\xE4nda filtyper {allButLastType} eller {lastType}',
    imageValidateSizeLabelFormatError: 'Bildtypen saknar st\xF6d',
    imageValidateSizeLabelImageSizeTooSmall: 'Bilden \xE4r f\xF6r liten',
    imageValidateSizeLabelImageSizeTooBig: 'Bilden \xE4r f\xF6r stor',
    imageValidateSizeLabelExpectedMinSize:
        'Minimal storlek \xE4r {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maximal storlek \xE4r {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        'Uppl\xF6sningen \xE4r f\xF6r l\xE5g',
    imageValidateSizeLabelImageResolutionTooHigh:
        'Uppl\xF6sningen \xE4r f\xF6r h\xF6g',
    imageValidateSizeLabelExpectedMinResolution:
        'Minsta till\xE5tna uppl\xF6sning \xE4r {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'H\xF6gsta till\xE5tna uppl\xF6sning \xE4r {maxResolution}',
}
var $l = {
    labelIdle:
        'Dosyan\u0131z\u0131 S\xFCr\xFCkleyin & B\u0131rak\u0131n ya da <span class="filepond--label-action"> Se\xE7in </span>',
    labelInvalidField: 'Alan ge\xE7ersiz dosyalar i\xE7eriyor',
    labelFileWaitingForSize: 'Boyut hesaplan\u0131yor',
    labelFileSizeNotAvailable: 'Boyut mevcut de\u011Fil',
    labelFileLoading: 'Y\xFCkleniyor',
    labelFileLoadError: 'Y\xFCkleme s\u0131ras\u0131nda hata olu\u015Ftu',
    labelFileProcessing: 'Y\xFCkleniyor',
    labelFileProcessingComplete: 'Y\xFCkleme tamamland\u0131',
    labelFileProcessingAborted: 'Y\xFCkleme iptal edildi',
    labelFileProcessingError: 'Y\xFCklerken hata olu\u015Ftu',
    labelFileProcessingRevertError: 'Geri \xE7ekerken hata olu\u015Ftu',
    labelFileRemoveError: 'Kald\u0131r\u0131rken hata olu\u015Ftu',
    labelTapToCancel: '\u0130ptal etmek i\xE7in t\u0131klay\u0131n',
    labelTapToRetry: 'Tekrar denemek i\xE7in t\u0131klay\u0131n',
    labelTapToUndo: 'Geri almak i\xE7in t\u0131klay\u0131n',
    labelButtonRemoveItem: 'Kald\u0131r',
    labelButtonAbortItemLoad: '\u0130ptal Et',
    labelButtonRetryItemLoad: 'Tekrar dene',
    labelButtonAbortItemProcessing: '\u0130ptal et',
    labelButtonUndoItemProcessing: 'Geri Al',
    labelButtonRetryItemProcessing: 'Tekrar dene',
    labelButtonProcessItem: 'Y\xFCkle',
    labelMaxFileSizeExceeded: 'Dosya \xE7ok b\xFCy\xFCk',
    labelMaxFileSize: 'En fazla dosya boyutu: {filesize}',
    labelMaxTotalFileSizeExceeded: 'Maximum boyut a\u015F\u0131ld\u0131',
    labelMaxTotalFileSize: 'Maximum dosya boyutu :{filesize}',
    labelFileTypeNotAllowed: 'Ge\xE7ersiz dosya tipi',
    fileValidateTypeLabelExpectedTypes:
        '\u015Eu {allButLastType} ya da \u015Fu dosya olmas\u0131 gerekir: {lastType}',
    imageValidateSizeLabelFormatError: 'Resim tipi desteklenmiyor',
    imageValidateSizeLabelImageSizeTooSmall: 'Resim \xE7ok k\xFC\xE7\xFCk',
    imageValidateSizeLabelImageSizeTooBig: 'Resim \xE7ok b\xFCy\xFCk',
    imageValidateSizeLabelExpectedMinSize:
        'Minimum boyut {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'Maximum boyut {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\xC7\xF6z\xFCn\xFCrl\xFCk \xE7ok d\xFC\u015F\xFCk',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\xC7\xF6z\xFCn\xFCrl\xFCk \xE7ok y\xFCksek',
    imageValidateSizeLabelExpectedMinResolution:
        'Minimum \xE7\xF6z\xFCn\xFCrl\xFCk {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        'Maximum \xE7\xF6z\xFCn\xFCrl\xFCk {maxResolution}',
}
var Xl = {
    labelIdle:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0444\u0430\u0439\u043B\u0438 \u0430\u0431\u043E <span class="filepond--label-action"> \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C </span>',
    labelInvalidField:
        '\u041F\u043E\u043B\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0456 \u0444\u0430\u0439\u043B\u0438',
    labelFileWaitingForSize:
        '\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440',
    labelFileSizeNotAvailable:
        '\u0420\u043E\u0437\u043C\u0456\u0440 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439',
    labelFileLoading:
        '\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F',
    labelFileLoadError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u0456',
    labelFileProcessing:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
    labelFileProcessingComplete:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E',
    labelFileProcessingAborted:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E',
    labelFileProcessingError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u0456',
    labelFileProcessingRevertError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0456',
    labelFileRemoveError:
        '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u0456',
    labelTapToCancel: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelTapToRetry:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelTapToUndo:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u0456\u044E',
    labelButtonRemoveItem: '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438',
    labelButtonAbortItemLoad:
        '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelButtonRetryItemLoad:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelButtonAbortItemProcessing:
        '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
    labelButtonUndoItemProcessing:
        '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u0456\u044E',
    labelButtonRetryItemProcessing:
        '\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0441\u043F\u0440\u043E\u0431\u0443',
    labelButtonProcessItem:
        '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
    labelMaxFileSizeExceeded:
        '\u0424\u0430\u0439\u043B \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0438\u0439',
    labelMaxFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 \u0444\u0430\u0439\u043B\u0443: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u041F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440',
    labelMaxTotalFileSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {filesize}',
    labelFileTypeNotAllowed:
        '\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F',
    fileValidateTypeLabelExpectedTypes:
        '\u041E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F {allButLastType} \u0430\u0431\u043E {lastType}',
    imageValidateSizeLabelFormatError:
        '\u0424\u043E\u0440\u043C\u0430\u0442 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F',
    imageValidateSizeLabelImageSizeTooSmall:
        '\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0435',
    imageValidateSizeLabelImageSizeTooBig:
        '\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435',
    imageValidateSizeLabelExpectedMinSize:
        '\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0456',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0456',
    imageValidateSizeLabelExpectedMinResolution:
        '\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438: {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438: {maxResolution}',
}
var Ql = {
    labelIdle:
        'K\xE9o th\u1EA3 t\u1EC7p c\u1EE7a b\u1EA1n ho\u1EB7c <span class="filepond--label-action"> T\xECm ki\u1EBFm </span>',
    labelInvalidField:
        'Tr\u01B0\u1EDDng ch\u1EE9a c\xE1c t\u1EC7p kh\xF4ng h\u1EE3p l\u1EC7',
    labelFileWaitingForSize: '\u0110ang ch\u1EDD k\xEDch th\u01B0\u1EDBc',
    labelFileSizeNotAvailable:
        'K\xEDch th\u01B0\u1EDBc kh\xF4ng c\xF3 s\u1EB5n',
    labelFileLoading: '\u0110ang t\u1EA3i',
    labelFileLoadError: 'L\u1ED7i khi t\u1EA3i',
    labelFileProcessing: '\u0110ang t\u1EA3i l\xEAn',
    labelFileProcessingComplete: 'T\u1EA3i l\xEAn th\xE0nh c\xF4ng',
    labelFileProcessingAborted: '\u0110\xE3 hu\u1EF7 t\u1EA3i l\xEAn',
    labelFileProcessingError: 'L\u1ED7i khi t\u1EA3i l\xEAn',
    labelFileProcessingRevertError: 'L\u1ED7i khi ho\xE0n nguy\xEAn',
    labelFileRemoveError: 'L\u1ED7i khi x\xF3a',
    labelTapToCancel: 'nh\u1EA5n \u0111\u1EC3 h\u1EE7y',
    labelTapToRetry: 'nh\u1EA5n \u0111\u1EC3 th\u1EED l\u1EA1i',
    labelTapToUndo: 'nh\u1EA5n \u0111\u1EC3 ho\xE0n t\xE1c',
    labelButtonRemoveItem: 'Xo\xE1',
    labelButtonAbortItemLoad: 'Hu\u1EF7 b\u1ECF',
    labelButtonRetryItemLoad: 'Th\u1EED l\u1EA1i',
    labelButtonAbortItemProcessing: 'H\u1EE7y b\u1ECF',
    labelButtonUndoItemProcessing: 'Ho\xE0n t\xE1c',
    labelButtonRetryItemProcessing: 'Th\u1EED l\u1EA1i',
    labelButtonProcessItem: 'T\u1EA3i l\xEAn',
    labelMaxFileSizeExceeded: 'T\u1EADp tin qu\xE1 l\u1EDBn',
    labelMaxFileSize:
        'K\xEDch th\u01B0\u1EDBc t\u1EC7p t\u1ED1i \u0111a l\xE0 {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u0110\xE3 v\u01B0\u1EE3t qu\xE1 t\u1ED5ng k\xEDch th\u01B0\u1EDBc t\u1ED1i \u0111a',
    labelMaxTotalFileSize:
        'T\u1ED5ng k\xEDch th\u01B0\u1EDBc t\u1EC7p t\u1ED1i \u0111a l\xE0 {filesize}',
    labelFileTypeNotAllowed:
        'T\u1EC7p thu\u1ED9c lo\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7',
    fileValidateTypeLabelExpectedTypes:
        'Ki\u1EC3u t\u1EC7p h\u1EE3p l\u1EC7 l\xE0 {allButLastType} ho\u1EB7c {lastType}',
    imageValidateSizeLabelFormatError:
        'Lo\u1EA1i h\xECnh \u1EA3nh kh\xF4ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3',
    imageValidateSizeLabelImageSizeTooSmall: 'H\xECnh \u1EA3nh qu\xE1 nh\u1ECF',
    imageValidateSizeLabelImageSizeTooBig: 'H\xECnh \u1EA3nh qu\xE1 l\u1EDBn',
    imageValidateSizeLabelExpectedMinSize:
        'K\xEDch th\u01B0\u1EDBc t\u1ED1i thi\u1EC3u l\xE0 {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        'K\xEDch th\u01B0\u1EDBc t\u1ED1i \u0111a l\xE0 {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i qu\xE1 th\u1EA5p',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i qu\xE1 cao',
    imageValidateSizeLabelExpectedMinResolution:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i t\u1ED1i thi\u1EC3u l\xE0 {minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u0110\u1ED9 ph\xE2n gi\u1EA3i t\u1ED1i \u0111a l\xE0 {maxResolution}',
}
var Zl = {
    labelIdle:
        '\u62D6\u653E\u6587\u4EF6\uFF0C\u6216\u8005 <span class="filepond--label-action"> \u6D4F\u89C8 </span>',
    labelInvalidField: '\u5B57\u6BB5\u5305\u542B\u65E0\u6548\u6587\u4EF6',
    labelFileWaitingForSize: '\u8BA1\u7B97\u6587\u4EF6\u5927\u5C0F',
    labelFileSizeNotAvailable: '\u6587\u4EF6\u5927\u5C0F\u4E0D\u53EF\u7528',
    labelFileLoading: '\u52A0\u8F7D',
    labelFileLoadError: '\u52A0\u8F7D\u9519\u8BEF',
    labelFileProcessing: '\u4E0A\u4F20',
    labelFileProcessingComplete: '\u5DF2\u4E0A\u4F20',
    labelFileProcessingAborted: '\u4E0A\u4F20\u5DF2\u53D6\u6D88',
    labelFileProcessingError: '\u4E0A\u4F20\u51FA\u9519',
    labelFileProcessingRevertError: '\u8FD8\u539F\u51FA\u9519',
    labelFileRemoveError: '\u5220\u9664\u51FA\u9519',
    labelTapToCancel: '\u70B9\u51FB\u53D6\u6D88',
    labelTapToRetry: '\u70B9\u51FB\u91CD\u8BD5',
    labelTapToUndo: '\u70B9\u51FB\u64A4\u6D88',
    labelButtonRemoveItem: '\u5220\u9664',
    labelButtonAbortItemLoad: '\u4E2D\u6B62',
    labelButtonRetryItemLoad: '\u91CD\u8BD5',
    labelButtonAbortItemProcessing: '\u53D6\u6D88',
    labelButtonUndoItemProcessing: '\u64A4\u6D88',
    labelButtonRetryItemProcessing: '\u91CD\u8BD5',
    labelButtonProcessItem: '\u4E0A\u4F20',
    labelMaxFileSizeExceeded: '\u6587\u4EF6\u592A\u5927',
    labelMaxFileSize: '\u6700\u5927\u503C: {filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u8D85\u8FC7\u6700\u5927\u6587\u4EF6\u5927\u5C0F',
    labelMaxTotalFileSize:
        '\u6700\u5927\u6587\u4EF6\u5927\u5C0F\uFF1A{filesize}',
    labelFileTypeNotAllowed: '\u6587\u4EF6\u7C7B\u578B\u65E0\u6548',
    fileValidateTypeLabelExpectedTypes:
        '\u5E94\u4E3A {allButLastType} \u6216 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u4E0D\u652F\u6301\u56FE\u50CF\u7C7B\u578B',
    imageValidateSizeLabelImageSizeTooSmall: '\u56FE\u50CF\u592A\u5C0F',
    imageValidateSizeLabelImageSizeTooBig: '\u56FE\u50CF\u592A\u5927',
    imageValidateSizeLabelExpectedMinSize:
        '\u6700\u5C0F\u503C: {minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u6700\u5927\u503C: {maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u5206\u8FA8\u7387\u592A\u4F4E',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u5206\u8FA8\u7387\u592A\u9AD8',
    imageValidateSizeLabelExpectedMinResolution:
        '\u6700\u5C0F\u5206\u8FA8\u7387\uFF1A{minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u6700\u5927\u5206\u8FA8\u7387\uFF1A{maxResolution}',
}
var Kl = {
    labelIdle:
        '\u62D6\u653E\u6A94\u6848\uFF0C\u6216\u8005 <span class="filepond--label-action"> \u700F\u89BD </span>',
    labelInvalidField: '\u4E0D\u652F\u63F4\u6B64\u6A94\u6848',
    labelFileWaitingForSize: '\u6B63\u5728\u8A08\u7B97\u6A94\u6848\u5927\u5C0F',
    labelFileSizeNotAvailable: '\u6A94\u6848\u5927\u5C0F\u4E0D\u7B26',
    labelFileLoading: '\u8B80\u53D6\u4E2D',
    labelFileLoadError: '\u8B80\u53D6\u932F\u8AA4',
    labelFileProcessing: '\u4E0A\u50B3',
    labelFileProcessingComplete: '\u5DF2\u4E0A\u50B3',
    labelFileProcessingAborted: '\u4E0A\u50B3\u5DF2\u53D6\u6D88',
    labelFileProcessingError: '\u4E0A\u50B3\u767C\u751F\u932F\u8AA4',
    labelFileProcessingRevertError: '\u9084\u539F\u932F\u8AA4',
    labelFileRemoveError: '\u522A\u9664\u932F\u8AA4',
    labelTapToCancel: '\u9EDE\u64CA\u53D6\u6D88',
    labelTapToRetry: '\u9EDE\u64CA\u91CD\u8A66',
    labelTapToUndo: '\u9EDE\u64CA\u9084\u539F',
    labelButtonRemoveItem: '\u522A\u9664',
    labelButtonAbortItemLoad: '\u505C\u6B62',
    labelButtonRetryItemLoad: '\u91CD\u8A66',
    labelButtonAbortItemProcessing: '\u53D6\u6D88',
    labelButtonUndoItemProcessing: '\u53D6\u6D88',
    labelButtonRetryItemProcessing: '\u91CD\u8A66',
    labelButtonProcessItem: '\u4E0A\u50B3',
    labelMaxFileSizeExceeded: '\u6A94\u6848\u904E\u5927',
    labelMaxFileSize: '\u6700\u5927\u503C\uFF1A{filesize}',
    labelMaxTotalFileSizeExceeded:
        '\u8D85\u904E\u6700\u5927\u53EF\u4E0A\u50B3\u5927\u5C0F',
    labelMaxTotalFileSize:
        '\u6700\u5927\u53EF\u4E0A\u50B3\u5927\u5C0F\uFF1A{filesize}',
    labelFileTypeNotAllowed: '\u4E0D\u652F\u63F4\u6B64\u985E\u578B\u6A94\u6848',
    fileValidateTypeLabelExpectedTypes:
        '\u61C9\u70BA {allButLastType} \u6216 {lastType}',
    imageValidateSizeLabelFormatError:
        '\u4E0D\u652F\u6301\u6B64\u985E\u5716\u7247\u985E\u578B',
    imageValidateSizeLabelImageSizeTooSmall: '\u5716\u7247\u904E\u5C0F',
    imageValidateSizeLabelImageSizeTooBig: '\u5716\u7247\u904E\u5927',
    imageValidateSizeLabelExpectedMinSize:
        '\u6700\u5C0F\u5C3A\u5BF8\uFF1A{minWidth} \xD7 {minHeight}',
    imageValidateSizeLabelExpectedMaxSize:
        '\u6700\u5927\u5C3A\u5BF8\uFF1A{maxWidth} \xD7 {maxHeight}',
    imageValidateSizeLabelImageResolutionTooLow:
        '\u89E3\u6790\u5EA6\u904E\u4F4E',
    imageValidateSizeLabelImageResolutionTooHigh:
        '\u89E3\u6790\u5EA6\u904E\u9AD8',
    imageValidateSizeLabelExpectedMinResolution:
        '\u6700\u4F4E\u89E3\u6790\u5EA6\uFF1A{minResolution}',
    imageValidateSizeLabelExpectedMaxResolution:
        '\u6700\u9AD8\u89E3\u6790\u5EA6\uFF1A{maxResolution}',
}
ve(Ho)
ve(qo)
ve(Xo)
ve(Zo)
ve(tl)
ve(ml)
ve(fl)
ve(wl)
ve(Oa)
window.FilePond = oa
function gf({
    acceptedFileTypes: e,
    imageEditorEmptyFillColor: t,
    imageEditorMode: i,
    imageEditorViewportHeight: a,
    imageEditorViewportWidth: n,
    deleteUploadedFileUsing: o,
    isDeletable: l,
    isDisabled: r,
    getUploadedFilesUsing: s,
    imageCropAspectRatio: p,
    imagePreviewHeight: c,
    imageResizeMode: d,
    imageResizeTargetHeight: m,
    imageResizeTargetWidth: u,
    imageResizeUpscale: f,
    isAvatar: g,
    hasImageEditor: h,
    hasCircleCropper: I,
    canEditSvgs: E,
    isSvgEditingConfirmed: T,
    confirmSvgEditingMessage: v,
    disabledSvgEditingMessage: y,
    isDownloadable: b,
    isMultiple: w,
    isOpenable: x,
    isPreviewable: _,
    isReorderable: P,
    itemPanelAspectRatio: O,
    loadingIndicatorPosition: M,
    locale: N,
    maxFiles: S,
    maxSize: D,
    minSize: R,
    maxParallelUploads: L,
    mimeTypeMap: z,
    panelAspectRatio: F,
    panelLayout: G,
    placeholder: C,
    removeUploadedFileButtonPosition: Y,
    removeUploadedFileUsing: X,
    reorderUploadedFilesUsing: Q,
    shouldAppendFiles: le,
    shouldOrientImageFromExif: k,
    shouldTransformImage: H,
    state: q,
    uploadButtonPosition: re,
    uploadingMessage: ee,
    uploadProgressIndicatorPosition: dt,
    uploadUsing: er,
}) {
    return {
        fileKeyIndex: {},
        pond: null,
        shouldUpdateState: !0,
        state: q,
        lastState: null,
        error: null,
        uploadedFileIndex: {},
        isEditorOpen: !1,
        editingFile: {},
        currentRatio: '',
        editor: {},
        init: async function () {
            Ft(Jl[N] ?? Jl.en),
                (this.pond = ft(this.$refs.input, {
                    acceptedFileTypes: e,
                    allowImageExifOrientation: k,
                    allowPaste: !1,
                    allowRemove: l,
                    allowReorder: P,
                    allowImagePreview: _,
                    allowVideoPreview: _,
                    allowAudioPreview: _,
                    allowImageTransform: H,
                    credits: !1,
                    files: await this.getFiles(),
                    imageCropAspectRatio: p,
                    imagePreviewHeight: c,
                    imageResizeTargetHeight: m,
                    imageResizeTargetWidth: u,
                    imageResizeMode: d,
                    imageResizeUpscale: f,
                    imageTransformOutputStripImageHead: !1,
                    itemInsertLocation: le ? 'after' : 'before',
                    ...(C && { labelIdle: C }),
                    maxFiles: S,
                    maxFileSize: D,
                    minFileSize: R,
                    ...(L && { maxParallelUploads: L }),
                    styleButtonProcessItemPosition: re,
                    styleButtonRemoveItemPosition: Y,
                    styleItemPanelAspectRatio: O,
                    styleLoadIndicatorPosition: M,
                    stylePanelAspectRatio: F,
                    stylePanelLayout: G,
                    styleProgressIndicatorPosition: dt,
                    server: {
                        load: async (B, W) => {
                            let Z = await (
                                await fetch(B, { cache: 'no-store' })
                            ).blob()
                            W(Z)
                        },
                        process: (B, W, $, Z, Ge, Ae) => {
                            this.shouldUpdateState = !1
                            let Qt = (
                                '10000000-1000-4000-8000' + -1e11
                            ).replace(/[018]/g, (Zt) =>
                                (
                                    Zt ^
                                    (crypto.getRandomValues(
                                        new Uint8Array(1),
                                    )[0] &
                                        (15 >> (Zt / 4)))
                                ).toString(16),
                            )
                            er(
                                Qt,
                                W,
                                (Zt) => {
                                    ;(this.shouldUpdateState = !0), Z(Zt)
                                },
                                Ge,
                                Ae,
                            )
                        },
                        remove: async (B, W) => {
                            let $ = this.uploadedFileIndex[B] ?? null
                            $ && (await o($), W())
                        },
                        revert: async (B, W) => {
                            await X(B), W()
                        },
                    },
                    allowImageEdit: h,
                    imageEditEditor: {
                        open: (B) => this.loadEditor(B),
                        onconfirm: () => {},
                        oncancel: () => this.closeEditor(),
                        onclose: () => this.closeEditor(),
                    },
                    fileValidateTypeDetectType: (B, W) =>
                        new Promise(($, Z) => {
                            let Ge = B.name.split('.').pop().toLowerCase(),
                                Ae = z[Ge] || W || Uo.getType(Ge)
                            Ae ? $(Ae) : Z()
                        }),
                })),
                this.$watch('state', async () => {
                    if (
                        this.pond &&
                        this.shouldUpdateState &&
                        this.state !== void 0
                    ) {
                        if (
                            this.state !== null &&
                            Object.values(this.state).filter((B) =>
                                B.startsWith('livewire-file:'),
                            ).length
                        ) {
                            this.lastState = null
                            return
                        }
                        JSON.stringify(this.state) !== this.lastState &&
                            ((this.lastState = JSON.stringify(this.state)),
                            (this.pond.files = await this.getFiles()))
                    }
                }),
                this.pond.on('reorderfiles', async (B) => {
                    let W = B.map(($) =>
                        $.source instanceof File
                            ? $.serverId
                            : (this.uploadedFileIndex[$.source] ?? null),
                    ).filter(($) => $)
                    await Q(le ? W : W.reverse())
                }),
                this.pond.on('initfile', async (B) => {
                    b && (g || this.insertDownloadLink(B))
                }),
                this.pond.on('initfile', async (B) => {
                    x && (g || this.insertOpenLink(B))
                }),
                this.pond.on('addfilestart', async (B) => {
                    B.status === bt.PROCESSING_QUEUED &&
                        this.dispatchFormEvent('form-processing-started', {
                            message: ee,
                        })
                })
            let V = async () => {
                this.pond
                    .getFiles()
                    .filter(
                        (B) =>
                            B.status === bt.PROCESSING ||
                            B.status === bt.PROCESSING_QUEUED,
                    ).length ||
                    this.dispatchFormEvent('form-processing-finished')
            }
            this.pond.on('processfile', V),
                this.pond.on('processfileabort', V),
                this.pond.on('processfilerevert', V),
                G === 'compact circle' &&
                    (this.pond.on('error', (B) => {
                        this.error = `${B.main}: ${B.sub}`.replace(
                            'Expects  or',
                            'Expects',
                        )
                    }),
                    this.pond.on('removefile', () => (this.error = null)))
        },
        destroy: function () {
            this.destroyEditor(), gt(this.$refs.input), (this.pond = null)
        },
        dispatchFormEvent: function (V, B = {}) {
            this.$el
                .closest('form')
                ?.dispatchEvent(
                    new CustomEvent(V, {
                        composed: !0,
                        cancelable: !0,
                        detail: B,
                    }),
                )
        },
        getUploadedFiles: async function () {
            let V = await s()
            ;(this.fileKeyIndex = V ?? {}),
                (this.uploadedFileIndex = Object.entries(this.fileKeyIndex)
                    .filter(([B, W]) => W?.url)
                    .reduce((B, [W, $]) => ((B[$.url] = W), B), {}))
        },
        getFiles: async function () {
            await this.getUploadedFiles()
            let V = []
            for (let B of Object.values(this.fileKeyIndex))
                B &&
                    V.push({
                        source: B.url,
                        options: {
                            type: 'local',
                            ...(!B.type ||
                            (_ &&
                                (/^audio/.test(B.type) ||
                                    /^image/.test(B.type) ||
                                    /^video/.test(B.type)))
                                ? {}
                                : {
                                      file: {
                                          name: B.name,
                                          size: B.size,
                                          type: B.type,
                                      },
                                  }),
                        },
                    })
            return le ? V : V.reverse()
        },
        insertDownloadLink: function (V) {
            if (V.origin !== Ct.LOCAL) return
            let B = this.getDownloadLink(V)
            B &&
                document
                    .getElementById(`filepond--item-${V.id}`)
                    .querySelector('.filepond--file-info-main')
                    .prepend(B)
        },
        insertOpenLink: function (V) {
            if (V.origin !== Ct.LOCAL) return
            let B = this.getOpenLink(V)
            B &&
                document
                    .getElementById(`filepond--item-${V.id}`)
                    .querySelector('.filepond--file-info-main')
                    .prepend(B)
        },
        getDownloadLink: function (V) {
            let B = V.source
            if (!B) return
            let W = document.createElement('a')
            return (
                (W.className = 'filepond--download-icon'),
                (W.href = B),
                (W.download = V.file.name),
                W
            )
        },
        getOpenLink: function (V) {
            let B = V.source
            if (!B) return
            let W = document.createElement('a')
            return (
                (W.className = 'filepond--open-icon'),
                (W.href = B),
                (W.target = '_blank'),
                W
            )
        },
        initEditor: function () {
            r ||
                (h &&
                    (this.editor = new ya(this.$refs.editor, {
                        aspectRatio: n / a,
                        autoCropArea: 1,
                        center: !0,
                        crop: (V) => {
                            ;(this.$refs.xPositionInput.value = Math.round(
                                V.detail.x,
                            )),
                                (this.$refs.yPositionInput.value = Math.round(
                                    V.detail.y,
                                )),
                                (this.$refs.heightInput.value = Math.round(
                                    V.detail.height,
                                )),
                                (this.$refs.widthInput.value = Math.round(
                                    V.detail.width,
                                )),
                                (this.$refs.rotationInput.value =
                                    V.detail.rotate)
                        },
                        cropBoxResizable: !0,
                        guides: !0,
                        highlight: !0,
                        responsive: !0,
                        toggleDragModeOnDblclick: !0,
                        viewMode: i,
                        wheelZoomRatio: 0.02,
                    })))
        },
        closeEditor: function () {
            ;(this.editingFile = {}),
                (this.isEditorOpen = !1),
                this.destroyEditor()
        },
        fixImageDimensions: function (V, B) {
            if (V.type !== 'image/svg+xml') return B(V)
            let W = new FileReader()
            ;(W.onload = ($) => {
                let Z = new DOMParser()
                    .parseFromString($.target.result, 'image/svg+xml')
                    ?.querySelector('svg')
                if (!Z) return B(V)
                let Ge = ['viewBox', 'ViewBox', 'viewbox'].find((Qt) =>
                    Z.hasAttribute(Qt),
                )
                if (!Ge) return B(V)
                let Ae = Z.getAttribute(Ge).split(' ')
                return !Ae || Ae.length !== 4
                    ? B(V)
                    : (Z.setAttribute('width', parseFloat(Ae[2]) + 'pt'),
                      Z.setAttribute('height', parseFloat(Ae[3]) + 'pt'),
                      B(
                          new File(
                              [
                                  new Blob(
                                      [
                                          new XMLSerializer().serializeToString(
                                              Z,
                                          ),
                                      ],
                                      { type: 'image/svg+xml' },
                                  ),
                              ],
                              V.name,
                              { type: 'image/svg+xml', _relativePath: '' },
                          ),
                      ))
            }),
                W.readAsText(V)
        },
        loadEditor: function (V) {
            if (r || !h || !V) return
            let B = V.type === 'image/svg+xml'
            if (!E && B) {
                alert(y)
                return
            }
            ;(T && B && !confirm(v)) ||
                this.fixImageDimensions(V, (W) => {
                    ;(this.editingFile = W), this.initEditor()
                    let $ = new FileReader()
                    ;($.onload = (Z) => {
                        ;(this.isEditorOpen = !0),
                            setTimeout(
                                () => this.editor.replace(Z.target.result),
                                200,
                            )
                    }),
                        $.readAsDataURL(V)
                })
        },
        getRoundedCanvas: function (V) {
            let B = V.width,
                W = V.height,
                $ = document.createElement('canvas')
            ;($.width = B), ($.height = W)
            let Z = $.getContext('2d')
            return (
                (Z.imageSmoothingEnabled = !0),
                Z.drawImage(V, 0, 0, B, W),
                (Z.globalCompositeOperation = 'destination-in'),
                Z.beginPath(),
                Z.ellipse(B / 2, W / 2, B / 2, W / 2, 0, 0, 2 * Math.PI),
                Z.fill(),
                $
            )
        },
        saveEditor: function () {
            if (r || !h) return
            let V = this.editor.getCroppedCanvas({
                fillColor: t ?? 'transparent',
                height: m,
                imageSmoothingEnabled: !0,
                imageSmoothingQuality: 'high',
                width: u,
            })
            I && (V = this.getRoundedCanvas(V)),
                V.toBlob(
                    (B) => {
                        w &&
                            this.pond.removeFile(
                                this.pond
                                    .getFiles()
                                    .find(
                                        (W) =>
                                            W.filename ===
                                            this.editingFile.name,
                                    )?.id,
                                { revert: !0 },
                            ),
                            this.$nextTick(() => {
                                this.shouldUpdateState = !1
                                let W = this.editingFile.name.slice(
                                        0,
                                        this.editingFile.name.lastIndexOf('.'),
                                    ),
                                    $ = this.editingFile.name.split('.').pop()
                                $ === 'svg' && ($ = 'png')
                                let Z = /-v(\d+)/
                                Z.test(W)
                                    ? (W = W.replace(
                                          Z,
                                          (Ge, Ae) => `-v${Number(Ae) + 1}`,
                                      ))
                                    : (W += '-v1'),
                                    this.pond
                                        .addFile(
                                            new File([B], `${W}.${$}`, {
                                                type:
                                                    this.editingFile.type ===
                                                        'image/svg+xml' || I
                                                        ? 'image/png'
                                                        : this.editingFile.type,
                                                lastModified:
                                                    new Date().getTime(),
                                            }),
                                        )
                                        .then(() => {
                                            this.closeEditor()
                                        })
                                        .catch(() => {
                                            this.closeEditor()
                                        })
                            })
                    },
                    I ? 'image/png' : this.editingFile.type,
                )
        },
        destroyEditor: function () {
            this.editor &&
                typeof this.editor.destroy == 'function' &&
                this.editor.destroy(),
                (this.editor = null)
        },
    }
}
var Jl = {
    ar: Sl,
    ca: Ll,
    ckb: Al,
    cs: Ml,
    da: Ol,
    de: Pl,
    en: Dl,
    es: Fl,
    fa: zl,
    fi: Cl,
    fr: Nl,
    hu: Bl,
    id: kl,
    it: Vl,
    km: Gl,
    nl: Ul,
    no: Wl,
    pl: Hl,
    pt_BR: wi,
    pt_PT: wi,
    ro: jl,
    ru: ql,
    sv: Yl,
    tr: $l,
    uk: Xl,
    vi: Ql,
    zh_CN: Zl,
    zh_TW: Kl,
}
export { gf as default }
/*! Bundled license information:

filepond/dist/filepond.esm.js:
  (*!
   * FilePond 4.32.7
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

cropperjs/dist/cropper.esm.js:
  (*!
   * Cropper.js v1.6.2
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2024-04-21T07:43:05.335Z
   *)

filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.js:
  (*!
   * FilePondPluginFileValidateSize 2.2.8
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js:
  (*!
   * FilePondPluginFileValidateType 1.2.9
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.js:
  (*!
   * FilePondPluginImageCrop 2.0.6
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-edit/dist/filepond-plugin-image-edit.esm.js:
  (*!
   * FilePondPluginImageEdit 1.6.3
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.js:
  (*!
   * FilePondPluginImageExifOrientation 1.0.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js:
  (*!
   * FilePondPluginImagePreview 4.6.12
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.js:
  (*!
   * FilePondPluginImageResize 2.0.10
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.js:
  (*!
   * FilePondPluginImageTransform 3.8.7
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit https://pqina.nl/filepond/ for details.
   *)

filepond-plugin-media-preview/dist/filepond-plugin-media-preview.esm.js:
  (*!
   * FilePondPluginMediaPreview 1.0.11
   * Licensed under MIT, https://opensource.org/licenses/MIT/
   * Please visit undefined for details.
   *)
*/
