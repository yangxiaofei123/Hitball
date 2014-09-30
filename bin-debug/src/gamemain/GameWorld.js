var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/8.
*/
var gamemain;
(function (gamemain) {
    var GameWorld = (function (_super) {
        __extends(GameWorld, _super);
        function GameWorld() {
            _super.call(this);
            this._hillOffX = 50;
            this._hillOffY = 280;

            var bg = hitball.createBitmapByName("bgImage");
            bg.y = -137;
            this.addChild(bg);
            var c1 = hitball.createBitmapByName("cloud1");
            c1.x = 330;
            c1.y = 86;
            this.addChild(c1);
            var c2 = hitball.createBitmapByName("cloud2");
            c2.x = 150;
            c2.y = 14;
            this.addChild(c2);
            var c3 = hitball.createBitmapByName("cloud3");
            c3.x = 12;
            c3.y = 116;
            this.addChild(c3);

            this._hill = hitball.createBitmapByName("farHill");
            this._hill.x = this._hillOffX;
            this._hill.y = this._hillOffY;
            this.addChild(this._hill);
            this._massif = hitball.createBitmapByName("hill");
            this._massif.x = -50 + this._hillOffX;
            this._massif.y = 50 + this._hillOffY;
            this.addChild(this._massif);

            //木板和草地
            this._scene_layer = new gamemain.SceneLayer();
            this.addChild(this._scene_layer);

            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
        }
        /**响应Touch*/
        GameWorld.prototype.touchHandler = function (evt) {
            //点击第一下企鹅就要开始跳了
            this._scene_layer.ready();
        };

        GameWorld.prototype.start = function () {
        };

        GameWorld.prototype.update = function (a_timePassed) {
            this._scene_layer.update(a_timePassed);
            this._hill.x = this._hillOffX + 0.3 * this._scene_layer.x;
            this._massif.x = -50 + this._hillOffX + 0.5 * this._scene_layer.x;
            this.updatePosition(a_timePassed);
        };
        GameWorld.prototype.updatePosition = function (a_timePassed) {
        };

        GameWorld.prototype.initTree = function () {
        };

        GameWorld.prototype.gameover = function () {
            gameworld.Root.togglePause();
        };

        GameWorld.prototype.showResult = function () {
        };

        //在玩一次
        GameWorld.prototype.restartGame = function () {
            gameworld.Root.togglePause();
            this._scene_layer.reset();
        };

        Object.defineProperty(GameWorld, "instance", {
            /**
            * 获取SDK对象实例
            */
            get: function () {
                if (GameWorld._instance == null) {
                    GameWorld._instance = new GameWorld();
                }
                return GameWorld._instance;
            },
            enumerable: true,
            configurable: true
        });
        return GameWorld;
    })(egret.DisplayObjectContainer);
    gamemain.GameWorld = GameWorld;
    GameWorld.prototype.__class__ = "gamemain.GameWorld";
})(gamemain || (gamemain = {}));
