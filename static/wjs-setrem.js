!
function(a, b) {
    function h() {
        var a = d.getBoundingClientRect().width,
        c = 100 * a / g;
        c = c > 58 ? 58 : 50 > c ? 50 : c,
        b.rem = c,
        d.style.fontSize = c + "px"
    }
    var e, c = a.document,
    d = c.documentElement,
    f = c.querySelector("#wjs-setrem") || d,
    g = f.getAttribute("data-design-width") || 750;
    a.addEventListener("pageshow",
    function(a) {
        a.persisted && (clearTimeout(e), e = setTimeout(h, 300))
    },
    !1),
    a.addEventListener("resize",
    function() {
        clearTimeout(e),
        e = setTimeout(h, 300)
    },
    !1),
    h()
} (window, window.wjs || (window.wjs = {}));