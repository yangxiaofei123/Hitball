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
    var SceneLayer = (function (_super) {
        __extends(SceneLayer, _super);
        function SceneLayer() {
            _super.call(this);

            this._treeLayer = new egret.DisplayObjectContainer();
            this.addChild(this._treeLayer);
            this._grassLayer = new egret.DisplayObjectContainer();
            this.addChild(this._grassLayer);

            this.ladder = hitball.createBitmapByName("tower");
            this.ladder.x = 288;
            this.ladder.y = 235;
            this.addChild(this.ladder);
            this.startboard = hitball.createBitmapByName("startboard");
            this.startboard.x = 148;
            this.startboard.y = 517;
            this.addChild(this.startboard);

            this._boardLayer = new egret.DisplayObjectContainer();
            this.addChild(this._boardLayer);

            this.ball = new gamemain.Ball();
            this.ball.x = 370;
            this.ball.y = 238;
            this.ball.startx = this.ball.x;
            this.ball.starty = this.ball.y;
            this.addChild(this.ball);

            //            console.log(this.ball.y);
            this.wildman = new gamemain.Wildman();
            this.wildman.x = 344;
            this.wildman.y = 519;
            this.addChild(this.wildman);

            this.slstartX = this.ball.x;

            this._plants = [];
            for (var i = 0; i < 50; i++) {
                var tree = new Object();
                tree["x"] = 480 * -i;
                tree["y"] = 457;
                tree["hasshow"] = false;
                tree["type"] = "tree";
                this._plants.push(tree);
            }

            for (var i = 1; i < 50; i++) {
                var board = new Object();
                board["x"] = 500 * -i + this.slstartX;
                board["y"] = 557;
                board["hasshow"] = false;
                board["type"] = "board";
                board["meter"] = 50 * i;
                this._plants.push(board);
            }
        }
        SceneLayer.prototype.ready = function () {
            if (this.ball.aktiv == false) {
                this.ball.aktiv = true;
                this.ball.setState("ready");
                this.wildman.setState("ready");
            } else if (this.ball.falling && !this.wildman.hitOver) {
                this.wildman.setState("hit");
            }
        };

        SceneLayer.prototype.update = function (a_timePassed) {
            //            this.ball.update(a_timePassed);
            //            console.log(this.wildman.hiting);
            if (this.wildman.hiting) {
                //                this.wildman.hiting = false;
                var dis = hitball.GameUtil.groundY - this.ball.y + ((Math.random() * 6) - 3);

                if (dis < 140 && dis > 0) {
                    console.log(this.wildman.hiting, dis);
                    this.ball.xspeed = (195 - dis) / -3;
                    this.ball.yspeed = -45 - this.ball.xspeed;
                    this.ball.xspeed = (195 - dis) / -3 + ((Math.random() * 18) - 9);
                    this.ball.setState("fly");
                }
                this.wildman.hiting = false;
            }

            if (this.ball.aktiv && this.ball.falling) {
                //                this.ball.yspeed += 16*a_timePassed;
                //                this.ball.y += this.ball.yspeed ;
                //                console.log(this.td);
                //                if(this.td >=0.030){
                //                    this.td= 0;
                var a1 = (this.slstartX - this.ball.x) / 10;
                a1 = Number(a1.toFixed(0));
                gamemain.ControlLayer.instance.showScore(a1);

                var temp = this.ball.yspeed;
                this.ball.yspeed += 0.15 * (a_timePassed / 0.016);
                this.ball.y += (this.ball.yspeed + temp) * 0.5 * (a_timePassed) * 100;

                //                }
                if (this.ball.y > hitball.GameUtil.groundY) {
                    //                    console.log(this.ball.yspeed);
                    if (this.ball.yspeed < 50) {
                        this.ball.yspeed *= -0.5;
                        this.ball.xspeed *= 0.98;
                        this.ball.rotation = 0;
                    } else {
                        if (this.ball.ballstate != "fall") {
                            this.ball.xspeed = 0;
                            this.ball.yspeed = 0;
                            this.ball.rotation = 0;
                            this.ball.setState("stop");
                            //                        this.ball.aktiv = false;
                            //                        this.ball.falling = false;
                        }
                    }

                    if (this.ball.ballstate == "fall") {
                        this.ball.xspeed = 0;
                        this.ball.yspeed = 0;
                        this.ball.rotation = 0;
                        this.ball.setState("happy");
                        this.ball.falling = false;
                        //                        gamemain.GameWorld.instance.gameover();
                        //                        gamemain.ControlLayer.instance.showScore(0);
                        //                        gamemain.ControlLayer.instance.showResult(0);
                    }

                    this.ball.y = hitball.GameUtil.groundY;
                    if (Math.abs(this.ball.xspeed) < 2) {
                        if (this.ball.ballstate != "happy") {
                            this.ball.setState("stop");
                        }
                        this.ball.xspeed = 0;
                        this.ball.yspeed = 0;
                        this.ball.rotation = 0;
                        this.ball.falling = false;
                        gamemain.GameWorld.instance.gameover();
                        var dis = this.slstartX - this.ball.x;

                        var a = (this.slstartX - this.ball.x) / 10;
                        a = Number(a.toFixed(0));
                        gamemain.ControlLayer.instance.showScore(a);
                        gamemain.ControlLayer.instance.showResult(a);
                    }
                }
                this.ball.x += this.ball.xspeed * 60 * a_timePassed;
                if (this.ball.x < 150) {
                    this.x = this.x - this.ball.xspeed * 60 * a_timePassed;
                }
            }

            if (this.ball.ballstate == "fly") {
                this.ball.rotation = this.ball.yspeed * -1;
            }

            var l = this._plants.length;
            for (var j = 0; j < l; j++) {
                var plant = this._plants[j];
                if (plant["hasshow"])
                    continue;
                if (plant[plant["type"]] != null) {
                    if (Math.abs(plant["x"] - this.ball.x) > 700) {
                        hitball.ObjectPool.instance.reclaim((plant[plant["type"]]), plant["type"]);
                        plant[plant["type"]].parent.removeChild(plant[plant["type"]]);
                        plant[plant["type"]] = null;
                        plant["hasshow"] = true;
                    }
                } else {
                    if (Math.abs(plant["x"] - this.ball.x) <= 700) {
                        var pbm = hitball.ObjectPool.instance.produce(plant["type"]);
                        pbm.x = plant["x"];
                        pbm.y = plant["y"];
                        plant[plant["type"]] = pbm;
                        if (plant["type"] == "board") {
                            (plant[plant["type"]]).setLable(plant["meter"]);

                            //                            console.log(plant["meter"])
                            this._boardLayer.addChild(pbm);
                        } else if (plant["type"] == "grass") {
                            this._grassLayer.addChild(pbm);
                        } else {
                            this._treeLayer.addChild(pbm);
                        }
                    }
                }
            }
            //            this.updatePosition(a_timePassed);
        };
        SceneLayer.prototype.updatePosition = function (a_timePassed) {
        };

        SceneLayer.prototype.reset = function () {
            this.x = 0;
            this.ball.reset();
            this.wildman.reset();
            var l = this._plants.length;
            for (var j = 0; j < l; j++) {
                var plant = this._plants[j];
                plant["hasshow"] = false;
                if (plant[plant["type"]] != null) {
                    hitball.ObjectPool.instance.reclaim((plant[plant["type"]]), plant["type"]);
                    plant[plant["type"]].parent.removeChild(plant[plant["type"]]);
                    plant[plant["type"]] = null;
                }
            }
        };
        return SceneLayer;
    })(egret.DisplayObjectContainer);
    gamemain.SceneLayer = SceneLayer;
    SceneLayer.prototype.__class__ = "gamemain.SceneLayer";
})(gamemain || (gamemain = {}));
