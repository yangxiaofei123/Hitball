var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/6.
*/
var gameworld;
(function (gameworld) {
    var Root = (function (_super) {
        __extends(Root, _super);
        function Root(parentScreen) {
            if (typeof parentScreen === "undefined") { parentScreen = null; }
            _super.call(this);
            this.m_accruedTime = 0;
            Root.m_gameSpeed = 1;
            Root.m_isUpdateOn = true;

            this.m_deltaTime = 0;
            this.m_timeOfLastUpdate = egret.getTimer();
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
        Root.setGameSpeed = function (value) {
            this.m_gameSpeed = value;
            if (this.m_gameSpeed < 0) {
                this.m_gameSpeed = 0;
            }
        };

        Root.getGameSpeed = function () {
            return this.m_gameSpeed;
        };

        Root.togglePause = function () {
            this.m_isUpdateOn = !this.m_isUpdateOn;
        };

        Root.prototype.setScreen = function (screen) {
            this.m_screenToSet = screen;
            _super.prototype.setScreen.call(this, this.m_screenToSet);
        };

        Root.prototype.onEnterFrame = function (e) {
            var pass = this.calculateDeltaTime();
            if (Root.m_isUpdateOn) {
                var a = pass * 0.001;
                a = Number(a.toFixed(3));
                this.update(a);
            }
            //            if( this.m_screenToSet )
            //            {
            //                super.setScreen( this.m_screenToSet );
            //                this.m_screenToSet = null;
            //            }
        };

        Root.prototype.calculateDeltaTime = function () {
            var currentTime = egret.getTimer();
            var deltaTime = currentTime - this.m_timeOfLastUpdate;
            this.m_timeOfLastUpdate = currentTime;
            return deltaTime;
        };
        return Root;
    })(gameworld.AScreen);
    gameworld.Root = Root;
    Root.prototype.__class__ = "gameworld.Root";
})(gameworld || (gameworld = {}));
