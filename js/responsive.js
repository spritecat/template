(function (win) {
    var doc = win.document;
    var html = doc.documentElement;
    change();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", change, false);
    function change() {
        // var devicePixelRatio = win.devicePixelRatio || 1;
        // if (devicePixelRatio >= 3) { devicePixelRatio = 3 } else { if (devicePixelRatio >= 2 && devicePixelRatio < 3) { devicePixelRatio = 2 } }
        // html.setAttribute("data-dpr", Math.floor(devicePixelRatio));
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = 100 * (width / 750) + "px";
        setTimeout(function () {
            var width = html.getBoundingClientRect().width;
            html.style.fontSize = 100 * (width / 750) + "px";
        }, 500);
    };
})(window);