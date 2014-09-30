var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/26.
*/
var gamemain;
(function (gamemain) {
    var Wildman = (function (_super) {
        __extends(Wildman, _super);
        function Wildman() {
            _super.call(this);

            var fireMC = hitball.createMovieClipByName("fire_json", "fire_png");
            fireMC.gotoAndPlay("fire");
            fireMC.frameRate = 15;
            fireMC.y = -40;
            this.addChild(fireMC);
            this.wildmanMC = hitball.createMovieClipByName("chenglong_json", "chenglong_png");
            this.addChild(this.wildmanMC);

            this.setState("begin");
            this.hiting = false;
            this.hitOver = false;
            this.wildmanMC.addEventListener("begin_hit", this.onHit, this);
            this.wildmanMC.addEventListener("finish", this.onFinish, this);
        }
        Wildman.prototype.setState = function (state) {
            this.manstate = state;
            switch (this.manstate) {
                case "begin":
                    this.wildmanMC.gotoAndPlay("begin");
                    break;
                case "ready":
                    this.wildmanMC.gotoAndPlay("ready");
                    break;
                case "hit":
                    this.wildmanMC.gotoAndPlay("hit");
                    this.wildmanMC.frameRate = 40;
                    this.wildmanMC.addEventListener("begin_hit", this.onHit, this);
                    this.wildmanMC.addEventListener("finish", this.onFinish, this);
                    break;
                default:
                    this.wildmanMC.gotoAndPlay("begin");
            }
        };

        Wildman.prototype.onHit = function () {
            this.wildmanMC.removeEventListener("begin_hit", this.onHit, this);
            this.hiting = true;
        };

        Wildman.prototype.onFinish = function () {
            this.wildmanMC.removeEventListener("finish", this.onFinish, this);
            this.hiting = false;
            this.hitOver = true;

            //            this.setState("ready");
            this.wildmanMC.stop();
        };

        Wildman.prototype.update = function (a_timePassed) {
        };

        Wildman.prototype.reset = function () {
            this.wildmanMC.addEventListener("begin_hit", this.onHit, this);
            this.wildmanMC.addEventListener("finish", this.onFinish, this);
            this.setState("begin");
            this.hiting = false;
            this.hitOver = false;
        };
        return Wildman;
    })(egret.DisplayObjectContainer);
    gamemain.Wildman = Wildman;
    Wildman.prototype.__class__ = "gamemain.Wildman";
})(gamemain || (gamemain = {}));
