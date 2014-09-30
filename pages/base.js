/**
 * Created by rex on 2014/8/5.
 */
(function(j, b) {
    var a, d, f, l, n, e, k, c, m, h;
    a = j;
    d = j.document;
    f = d.body;
    l = a.devicePixelRatio;
    n = 1 / l;
    h = navigator.userAgent;
    e = function(o) {
        return d.getElementById(o);
    };
    $$$ = function(o) {
        return d.querySelectorAll(o);
    };
    k = '<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=' + n + ",maximum-scale=" + n + ",minimum-scale=" + n + ', user-scalable=no" />';
    c = function() {
        var o = $$$("head")[0];
        o.innerHTML = o.innerHTML + k;
    };
    m = function(o) {
        var p, q;
        p = o || a.innerWidth;
        f.style.width = p + "px";
        f.style.fontSize = 62.5 * l + "%";
    };
    if (/Gkuwan/.test(h)) {
        _hmt.push(["_trackEvent", "visiter", "visiter_index_gkuwan"]);
        var g = document.querySelectorAll("dd a");
        for (i = g.length; i--;) {
            
            g[i].href = g[i].href.replace(/\?f\=gamecenter/gi, "?f=gkuwan");
        }
        document.querySelectorAll(".banner")[0].innerHTML = '<a target=_blank href="http://www.liebao.cn/game/hitCat/?f=gkuwan"> <img src="img/banner03.png" alt="" /> </a>';
    }
}(window, undefined));
(function(){
	var $=function(id){return document.getElementById(id);}
	var ua=window.navigator.userAgent;
	if(/MicroMessenger/.test(ua) && /Android/.test(ua)){
		$("j-ad").style.display="block";
	}
	$("j-ad").addEventListener("click",function(){
		_hmt.push(["_trackEvent", "click", "listbanner"]);
	},false)
})();