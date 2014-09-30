/**
* Created by shaorui on 14-6-6.
*/
var hitball;
(function (hitball) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        /**基于矩形的碰撞检测*/
        GameUtil.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        };

        GameUtil.groundY = 660;
        return GameUtil;
    })();
    hitball.GameUtil = GameUtil;
    GameUtil.prototype.__class__ = "hitball.GameUtil";

    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    hitball.createBitmapByName = createBitmapByName;

    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    */
    function createMovieClipByName(jsonname, pngname) {
        var data = RES.getRes(jsonname);
        var texture = RES.getRes(pngname);
        var player = new egret.MovieClip(data, texture);
        return player;
    }
    hitball.createMovieClipByName = createMovieClipByName;

    /*
    * UI位置计算。
    * */
    function moveToCenter(any, offX, offY) {
        if (typeof offX === "undefined") { offX = 0; }
        if (typeof offY === "undefined") { offY = 0; }
        any.x = ((hitball.GameUtil.stageW - any.width) >> 1) + offX;
        any.y = ((hitball.GameUtil.stageH - any.height) >> 1) + offY;
    }
    hitball.moveToCenter = moveToCenter;

    function moveXYCenter(any, offX, offY) {
        if (typeof offX === "undefined") { offX = 0; }
        if (typeof offY === "undefined") { offY = 0; }
        any.x = ((hitball.GameUtil.stageW) >> 1) + offX;
        any.y = ((hitball.GameUtil.stageH) >> 1) + offY;
    }
    hitball.moveXYCenter = moveXYCenter;
})(hitball || (hitball = {}));
