// 2018-06-09 13:24
var _rlog = _rlog || [];
!function (a, b, c, d, e) {
    function f(a, b) {
        L.pid && 1 != L.ispvt && (L.ispvt = 1,
            L.cat = "pageview")
    }

    function h(a, b) {
        if (y)
            navigator.sendBeacon(a),
                b && b();
        else {
            var c = new Image;
            c.onload = c.onerror = function () {
                b && b()
            }
                ,
                c.src = a,
                c = null
        }
    }
    function i(b) {
        var c = b || a.event
            , d = c.target || c.srcElement;
        d.href && P.push(["_trackCustom", "click", d.href])
    }
    function j(c) {
        c = c || a.event;
        for (var d = c.target ? c.target : c.srcElement, e = b.body; d != e; d = d.parentNode || e)
            if (1 === d.nodeType && !0 !== d.disabled) {
                var f = d.getAttribute("data-rlog");
                f && P.push(["_trackEvent", f])
            }
    }
    function k() {
        return {
            pid: "",
            cat: "",
            post: [],
            ispvt: 0,
            pvcb: [],
            autopv: !0,
            autouid: !1
        }
    }
    function l(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function m(a, b) {
        var c;
        for (c in a)
            a.hasOwnProperty(c) && b(c, a[c])
    }
    function n() {
        return "https:" == c.protocol ? "https:" : "http:"
    }
    function o(a, c) {
        if (x && "mousedown" == a)
            return void b.addEventListener("touchstart", c, !1);
        b.addEventListener ? b.addEventListener(a, c, !1) : b.attachEvent("on" + a, c)
    }
    function p(a, c) {
        if (x && "mousedown" == a)
            return void b.removeEventListener("touchstart", c, !1);
        b.removeEventListener ? b.removeEventListener(a, c, !1) : b.detachEvent("on" + a, c)
    }

    function s(a) {
        l(a) || (a = []);
        var b, c, e, f = [];
        for (b = 0,
            c = a.length; b < c; ++b)
            e = a[b],
                l(e) && f.push(e[0] + "=" + d(e[1]));
        return f.join("&")
    }

}(window, document, location, encodeURIComponent, decodeURIComponent);
