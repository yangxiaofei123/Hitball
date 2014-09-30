var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/11.
*/
var gamemain;
(function (gamemain) {
    var ControlLayer = (function (_super) {
        __extends(ControlLayer, _super);
        function ControlLayer() {
            _super.call(this);
            this._max_score = 0;

            var grass = hitball.createBitmapByName("grass");
            grass.x = 28;
            grass.y = 28;
            this.addChild(grass);

            var spriteSheet = RES.getRes("bitmapFont");
            this._scoreLabel = new egret.BitmapText();

            //            this.meterlable.width = 100;
            this._scoreLabel.y = 10;
            this._scoreLabel.x = 45;
            this._scoreLabel.spriteSheet = spriteSheet;

            //            this._scoreLabel.text = "0123456789m";
            this._scoreLabel.text = "0m";
            this.addChild(this._scoreLabel);

            this._bg_mask = new egret.Shape();
            this._bg_mask.graphics.beginFill(0x000000, 0.4);
            this._bg_mask.graphics.drawRect(0, 0, 480, 800);
            this._bg_mask.graphics.endFill();
            this._bg_mask.visible = false;
            this.addChild(this._bg_mask);

            this._result_layer = new egret.DisplayObjectContainer();
            this._result_layer.x = 50;
            this._result_layer.y = 88;
            this._result_layer.visible = false;
            this.addChild(this._result_layer);
            this._result = hitball.createBitmapByName("resultBg");
            this._result_layer.addChild(this._result);

            this._title_label = new egret.TextField();
            this._title_label.textColor = 0x463C32;
            this._title_label._size = 30;
            this._title_label.x = 60;
            this._title_label.y = 220;
            this._title_label.textAlign = "center";
            this._title_label.width = 270;
            this._title_label.bold = true;
            this._result_layer.addChild(this._title_label);

            this._next_label = new egret.TextField();
            this._next_label.textColor = 0x278258;
            this._next_label._size = 25;
            this._next_label.x = 60;
            this._next_label.y = 260;
            this._next_label.textAlign = "center";
            this._next_label.width = 270;
            this._next_label.bold = true;
            this._next_label.text = "你将龙公子打飞";
            this._result_layer.addChild(this._next_label);

            this._result_label = new egret.TextField();
            this._result_label.textColor = 0x278258;
            this._result_label.textAlign = "center";
            this._result_label.bold = true;
            this._result_label.width = 270;
            this._result_label._size = 40;
            this._result_label.x = 60;
            this._result_label.y = 293;
            this._result_layer.addChild(this._result_label);
            this._message_label = new egret.TextField();
            this._message_label.textColor = 0x463C32;
            this._message_label.bold = true;
            this._message_label._size = 25;
            this._message_label.x = 73;
            this._message_label.y = 350;
            this._message_label.height = 200;
            this._message_label.width = 260;
            this._result_layer.addChild(this._message_label);

            this._tell_friend = hitball.createBitmapByName("share_btn");
            this._tell_friend.x = 50;
            this._tell_friend.y = 480;
            this.addChild(this._tell_friend);
            this._tell_friend.visible = false;
            this._tell_friend.touchEnabled = true;
            this._tell_friend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareWeixin, this);
            this._replay = hitball.createBitmapByName("replay_btn");
            this._replay.x = 267;
            this._replay.y = 480;
            this.addChild(this._replay);
            this._replay.visible = false;
            this._replay.touchEnabled = true;
            this._replay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameReStart, this);

            this._tell_btn = hitball.createBitmapByName("tell_btn");
            this._tell_btn.x = 50;
            this._tell_btn.y = 480;
            this.addChild(this._tell_btn);
            this._tell_btn.visible = false;
            this._tell_btn.touchEnabled = true;
            this._tell_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareWeixin, this);

            this._faild = hitball.createBitmapByName("failedBg");
            this._faild.x = 50;
            this._faild.y = 240;
            this._faild.visible = false;
            this.addChild(this._faild);

            this._more = hitball.createBitmapByName("more_btn");
            this._more.x = 10;
            this._more.y = hitball.GameUtil.stageH - 120;
            this._more.visible = false;
            this.addChild(this._more);
            this._more.touchEnabled = true;
            this._more.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMore, this);

            this._arrow = hitball.createBitmapByName("arrow");
            this._arrow.visible = false;
            this.addChild(this._arrow);
            this._arrow.touchEnabled = true;
            this._arrow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclose, this);
        }
        ControlLayer.prototype.onclose = function (evt) {
            this._arrow.visible = false;
        };

        ControlLayer.prototype.onMore = function (evt) {
            window.location.href = "http://www.rekoo.com";
        };

        ControlLayer.prototype.gameReStart = function (evt) {
            this._bg_mask.visible = false;
            this._arrow.visible = false;
            gamemain.GameWorld.instance.restartGame();
            this.resetScore();
            this.closeResult();
        };

        ControlLayer.prototype.shareWeixin = function () {
            var info = new WeixinShareInfo();
            if (this._score == 0) {
                info.title = "成龙一拳将房祖名打飞250米，你能打多远？";
                info.desc = "你一拳能把房祖名打多远？";
                info.link = "www.rekoo.com";
            } else {
                info.title = "我一拳将房祖名打飞了" + this._score + "米！超过了成龙！";
                info.desc = "你一拳能把房祖名打多远？";
                info.link = "www.rekoo.com";
            }
            this._arrow.visible = true;
            WeixinApi.ready(function (api) {
                //                alert("WeixinAPI Ready!!");
                api.shareToFriend(info);
                api.shareToTimeline(info);
                //                api.closeWindow();
            });
        };

        ControlLayer.prototype.showResult = function (re) {
            this._bg_mask.visible = true;
            if (re == 0) {
                this._faild.visible = true;
                this._tell_friend.visible = true;
                this._replay.visible = true;
                this._tell_btn.visible = false;
                this._tell_friend.y = 537;
                this._replay.y = 537;
            } else {
                this._result_layer.visible = true;
                if (this._score >= this._max_score) {
                    this._max_score = this._score;
                    this._title_label.text = "哇塞！";
                    this._result_label.text = re + "米!";
                    this._message_label.text = "我太牛X了，必须分享出去！";
                } else {
                    this._title_label.text = "哎呦，不错哦！";
                    this._result_label.text = re + "米!";
                    this._message_label.text = "还差" + (this._max_score - this._score) + "分超过最高分，再来一次！";
                }
                this._tell_friend.visible = false;
                this._replay.visible = true;
                this._tell_btn.visible = true;
                this._tell_btn.y = 550;
                this._replay.y = 550;
            }
            this._more.visible = true;
        };

        ControlLayer.prototype.closeResult = function () {
            this._result_layer.visible = false;
            this._faild.visible = false;
            this._replay.visible = false;
            this._tell_friend.visible = false;
            this._more.visible = false;
            this._tell_btn.visible = false;
        };

        ControlLayer.prototype.showScore = function (add) {
            this._score = add;
            this._scoreLabel.text = this._score + "m";
        };

        ControlLayer.prototype.resetScore = function () {
            this._score = 0;
            this._scoreLabel.text = "0m";
        };

        ControlLayer.prototype.getScore = function () {
            return this._score;
        };

        Object.defineProperty(ControlLayer, "instance", {
            /**
            * 获取layer对象实例
            */
            get: function () {
                if (ControlLayer._instance == null) {
                    ControlLayer._instance = new ControlLayer();
                }
                return ControlLayer._instance;
            },
            enumerable: true,
            configurable: true
        });
        return ControlLayer;
    })(egret.DisplayObjectContainer);
    gamemain.ControlLayer = ControlLayer;
    ControlLayer.prototype.__class__ = "gamemain.ControlLayer";
})(gamemain || (gamemain = {}));
