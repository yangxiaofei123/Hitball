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
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            _super.call(this);

            this.beginMC = hitball.createMovieClipByName("zuming_begin_json", "zuming_begin_png");
            this.readyMC = hitball.createMovieClipByName("zuming_ready_json", "zuming_ready_png");
            this.fallMC = hitball.createMovieClipByName("zuming_jump_json", "zuming_jump_png");
            this.flyMC = hitball.createMovieClipByName("zuming_fly_json", "zuming_fly_png");
            this.happyMC = hitball.createMovieClipByName("zuming_pose_json", "zuming_pose_png");
            this.stopMC = hitball.createMovieClipByName("zuming_stop_json", "zuming_stop_png");

            //            this.readyMC.x =10;
            //            this.readyMC.y = 20;
            //            this.fallMC.x = 15;
            //            this.fallMC.y = 20;
            //            this.happyMC.x = 15;
            //            this.happyMC.y = 0;
            //            this.flyMC.x = 10;
            //            this.stopMC.y = 70;
            //            this.catstate = "ready";
            this.setState("begin");

            //            this.anchorY=0.5;
            this.xspeed = 0;
            this.yspeed = (Math.random() * 50) / 40;

            this.aktiv = false;
            this.falling = false;
        }
        Ball.prototype.setState = function (state) {
            this.ballstate = state;
            this.removeCurentMC();
            switch (this.ballstate) {
                case "begin":
                    this.addChild(this.beginMC);
                    this._crrent_mc = this.beginMC;
                    this.beginMC.frameRate = 5;
                    this.beginMC.gotoAndPlay("zuming_begin");
                    break;
                case "ready":
                    this.addChild(this.readyMC);
                    this._crrent_mc = this.readyMC;
                    this.readyMC.frameRate = 20;
                    this.readyMC.gotoAndPlay("zuming_ready");
                    this.readyMC.addEventListener("finish", this.onAllReady, this);
                    break;
                case "fly":
                    this.addChild(this.flyMC);
                    this._crrent_mc = this.flyMC;
                    this.flyMC.frameRate = 20;
                    this.flyMC.gotoAndPlay("zuming_fly");
                    break;
                case "fall":
                    this.addChild(this.fallMC);
                    this._crrent_mc = this.fallMC;
                    this.fallMC.frameRate = 20;
                    this.fallMC.gotoAndPlay("zuming_jump");
                    break;
                case "happy":
                    this.addChild(this.happyMC);
                    this._crrent_mc = this.happyMC;
                    this.happyMC.frameRate = 10;
                    this.happyMC.gotoAndPlay("zuming_pose");
                    break;
                case "stop":
                    this.addChild(this.stopMC);
                    this._crrent_mc = this.stopMC;
                    this.stopMC.frameRate = 20;
                    this.stopMC.gotoAndPlay("zuming_stop");
                    break;
                default:
                    this.addChild(this.beginMC);
                    this._crrent_mc = this.beginMC;
            }
        };

        Ball.prototype.onAllReady = function () {
            this.readyMC.removeEventListener("finish", this.onAllReady, this);
            this.setState("fall");
            this.falling = true;
        };

        Ball.prototype.update = function (a_timePassed) {
        };

        Ball.prototype.removeCurentMC = function () {
            if (this._crrent_mc == null)
                return;
            this.removeChild(this._crrent_mc);
            this._crrent_mc = null;
        };

        Ball.prototype.reset = function () {
            this.setState("begin");
            this.x = this.startx;
            this.y = this.starty;

            //            this.anchorX=0.5;this.anchorY=1;
            //            console.log(this.startx,this.starty);
            this.xspeed = 0;
            this.yspeed = (Math.random() * 50) / 40;
            this.aktiv = false;
            this.falling = false;
        };
        return Ball;
    })(egret.DisplayObjectContainer);
    gamemain.Ball = Ball;
    Ball.prototype.__class__ = "gamemain.Ball";
})(gamemain || (gamemain = {}));
