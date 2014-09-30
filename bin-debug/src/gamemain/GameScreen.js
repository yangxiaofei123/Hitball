var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/6.
*/
var gamemain;
(function (gamemain) {
    /*这里把gameword的功能写到了screen里面*/
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen(parentScreen) {
            if (typeof parentScreen === "undefined") { parentScreen = null; }
            _super.call(this, parentScreen);
            this._speed = 50;
        }
        /**响应Touch*/
        GameScreen.prototype.touchHandler = function (evt) {
            //
        };

        GameScreen.prototype.update = function (timePassed) {
        };
        return GameScreen;
    })(gameworld.AScreen);
    gamemain.GameScreen = GameScreen;
    GameScreen.prototype.__class__ = "gamemain.GameScreen";
})(gamemain || (gamemain = {}));
