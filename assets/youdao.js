var Suggest = function (t, n) {
    if (0 === t.length) throw new Error("输入元素不存在");
    this.el = t, this.init(n)
}, $ = function (t) {
    return document.getElementById(t)
}, trim = function (t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/gi, "")
}, $s = {newid: 0}, sugCount = 0, current$s = 0, updateId = function () {
    return $s.newid = sugCount++ + +new Date
}, currentInput = null;
Suggest.prototype = {
    init: function (t) {
        this.initContainer(t), this.initData(t), this.initInput(t)
    }, initContainer: function (t) {
        var n = this, e = t.suggestContainer, i = t.suggestId, a = document.createElement("div");
        a.id = i, a.class = i, a.innerHTML = '<ul class="container"></ul>', a.style.display = "none", e.appendChild(a), n.el.addEventListener("focus", function (t) {
            currentInput = t.target.value
        }), $("selectedLang").addEventListener("click", function () {
            n.close(t)
        }, !1)
    }, initData: function (t) {
        var n = this;
        n.getData = "function" == typeof t.data ? function (n, e) {
            t.data(n, e)
        } : t.data.length > 0 ? function (n, e) {
            e(n, t.data, t)
        } : function (n) {
            n(t.data)
        }
    }, fetchData: function (t) {
        var n = 50, e = this;
        window.clearTimeout(e.delay), current$s = updateId(), e.delay = window.setTimeout(function () {
            var n = e.el.value;
            trim(n) !== trim(currentInput) && (currentInput = n, e.getData(n, function (n, i) {
                current$s === $s.newid && e.initItem(n, i, t)
            }))
        }, n)
    }, initItem: function (t, n, e) {
        var i = this, a = "";
        if ("" === trim(t)) return void i.close(e);
        for (var u = 0; u < n.length; u++) a += '<li class="item">' + e.generateItem(t, n[u]) + "</li>";
        $(e.suggestId).style.display = "block", document.querySelector(".container").innerHTML = a, $(e.suggestId).addEventListener("click", function (t) {
            "item" === t.target.className && (e.clickItemCallback(t), i.close(e))
        }, !1), $(e.suggestId).addEventListener("touchstart", function (t) {
            if ("item" === t.target.className) {
                var n = t.target;
                e.touchstartItem(n)
            }
        }, !1), $(e.suggestId).addEventListener("touchend", function (t) {
            if ("item" === t.target.className) {
                var n = t.target;
                e.touchendItem(n)
            }
        }, !1)
    }, initInput: function (t) {
        var n = this;
        n.el.addEventListener("input", function (e) {
            n.fetchData(t), e.stopPropagation()
        }, !1)
    }, close: function (t) {
        updateId(), $(t.suggestId).style.display = "none"
    }
};
__rl_npid = "YoudaoWap";
var $ = function (e) {
    return document.getElementById(e)
}, trim = function (e) {
    return String.prototype.trim ? e.trim() : e.replace(/^\s+|\s+$/gi, "")
}, toggle = function (e) {
    for (var t, n = 0, o = e.length; o > n; n++) if (t = e[n], t.style) {
        var i = window.getComputedStyle(t, null).getPropertyValue("display");
        "none" === i ? t.style.display = "block" : "block" === i && (t.style.display = "none")
    }
}, addClassName = function (e, t) {
    if (e) {
        for (var n = 0, o = e.className.split(" "), i = o.length, a = []; i > n; n++) "" !== trim(o[n]) && a.push(o[n]);
        return a.push(t), a.join(" ")
    }
}, removeClassName = function (e, t) {
    if (e) {
        for (var n = 0, o = e.className.split(" "), i = o.length, a = []; i > n; n++) "" !== trim(o[n]) && trim(o[n]) !== t && a.push(o[n]);
        return a.join(" ")
    }
}, parseXml = function (e) {
    for (var t = 0, n = [], o = e.getElementsByTagName("item"); t < o.length; t++) {
        for (var i = o[t].childNodes, a = [], r = 0; r < i.length; r++) i[r].nodeType && 1 === i[r].nodeType && a.push(i[r].childNodes[0].nodeValue);
        n.push({title: a[0], explain: a[1]})
    }
    return n
}, initLangSel = function () {
    var e = document.querySelectorAll(".lang-select-list"), t = document.querySelector(".lang-select-list"),
        n = {eng: "中英", fr: "中法", jap: "中日", ko: "中韩"}, o = function (e) {
            var o, i = "https://m.youdao.com/dict?le=";
            "li" === e.target.nodeName.toLowerCase() && (o = e.target.getAttribute("data-value"), $("inputLang").value = o, e.target.style.background = "#fff", $("selectedLang").querySelector("span").innerHTML = n[o], t.style.display = "none", "" !== trim($("formInput").value) && (window.location.href = i + o + "&q=" + $("formInput").value)), e.stopPropagation()
        };
    $("selectedLang").addEventListener("click", function (t) {
        toggle(e), t.stopPropagation(), t.preventDefault()
    }, !1), t.addEventListener("click", function (e) {
        o(e)
    }, !1), t.addEventListener("touchstart", function (e) {
        e.preventDefault(), e.stopPropagation(), "li" === e.target.nodeName.toLowerCase() && (e.target.style.background = "#e4efff")
    }, !1), t.addEventListener("touchend", function (e) {
        o(e), e.stopPropagation()
    }, !1), document.addEventListener("click", function () {
        t.style.display = "none"
    }, !1)
};
document.addEventListener("DOMContentLoaded", function () {
    function e(e, t) {
        var n, o, i, a, l = document.body;
        n = document.createElement("div"), n.className = "shim", l.appendChild(n), n.style.height = document.documentElement.scrollHeight + "px", o = document.createElement("div"), o.className = "overlay", i = document.createElement("p"), i.innerHTML = e, a = document.createElement("p"), a.className = "confirm", a.innerHTML = "好", o.appendChild(i), o.appendChild(a), l.appendChild(o);
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        document.addEventListener("orientationchange", function () {
            c = document.documentElement.scrollTop || document.body.scrollTop, o.style.top = Math.ceil((window.innerHeight - o.offsetHeight) / 2) + c + "px"
        }, !1), o.style.top = Math.ceil((window.innerHeight - o.offsetHeight) / 2) + c + "px", document.addEventListener("touchmove", r, !1), o.onclick = function () {
            if (l.removeChild(o), l.removeChild(n), document.removeEventListener("touchmove", r, !1), "function" == typeof t) try {
                t()
            } catch (e) {
            }
        }
    }

    var t = $("formInput"), n = function () {
        document.body ? document.body.scrollTop = 0 : document.documentElement.scrollTop = 0, document.body.style.height = window.innerHeight + "px", document.addEventListener("orientationchange", function () {
            document.body.style.width = window.innerWidth + "px", document.body.style.height = window.innerHeight + "px"
        }, !1)
    };
    if (n(), t) {
        var o = $("clearInput"), i = function () {
            var e = t.value;
            "" !== trim(e) ? o.style.display = "inline-block" : o.style.display = "none"
        };
        if (i(), $("formSubmit").onsubmit = function (e) {
            var t = $("formInput").value;
            "" === trim(t) && e.preventDefault()
        }, t.addEventListener("keyup", function () {
            i()
        }, !1), !!o && o.addEventListener("click", function (e) {
            t.value = "", this.style.display = "none", document.querySelector(".lang-select-list").style.display = "none", $("suggest").style.display = "none", e.preventDefault()
        }, !1), document.querySelector("body").className.indexOf("p-dict") >= 0 || document.querySelector("body").className.indexOf("p-index_entry") >= 0) {
            var a;
            new Suggest(document.getElementById("formInput"), {
                suggestContainer: document.querySelector(".search-area"),
                suggestId: "suggest",
                data: function (e, t) {
                    a = "" == $("inputLang").value ? "eng" : $("inputLang").value;
                    var n = "https://dict.youdao.com/suggest?type=DESKDICT&num=4&q=" + e + "&ver=2.0&le=" + a,
                        o = new XMLHttpRequest;
                    o.onreadystatechange = function () {
                        if (4 == o.readyState) {
                            var n = new DOMParser, i = n.parseFromString(o.response, "text/xml"), a = parseXml(i);
                            t(e, a)
                        }
                    }, o.open("get", n, !0), o.send(null)
                },
                generateItem: function (e, t) {
                    return "<strong>" + t.title + "</strong>" + t.explain
                },
                clickItemCallback: function (e) {
                    var t = "https://m.youdao.com/dict?q=";
                    window.location.href = t + e.target.querySelector("strong").innerText + "&le=" + a
                },
                touchstartItem: function (e) {
                    e.style.background = "#e4f4ff"
                },
                touchendItem: function (e) {
                    e.className = "item";
                    var t = "https://m.youdao.com/dict?q=";
                    window.location.href = t + e.querySelector("strong").innerText
                }
            });
            initLangSel()
        }
    }
    document.addEventListener("click", function (e) {
        "pr-link-a" == e.target.className && t && (e.target.href = e.target.href + t.value)
    }, !1), !!$("report_feedback") && $("report_feedback").addEventListener("submit", function () {
        e("感谢您的反馈", function () {
            $("issueDes").value = "", $("questionDes").value = "", $("emailDes").value = ""
        })
    }, !1);
    var r = function (e) {
        e.preventDefault()
    }
}, !1);
