var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/8.
*/
var gameworld;
(function (gameworld) {
    var GameWorld = (function (_super) {
        __extends(GameWorld, _super);
        function GameWorld(params) {
            _super.call(this, params);
        }
        GameWorld.prototype.start = function () {
        };

        GameWorld.prototype.update = function (a_timePassed) {
            this.setInitialValues(a_timePassed);

            this.updateEntityChildren(a_timePassed);

            this.updatePosition(a_timePassed);
        };
        GameWorld.prototype.updatePosition = function (a_timePassed) {
        };

        GameWorld.prototype.clearGameWorld = function () {
        };

        GameWorld.prototype.gameover = function () {
        };

        GameWorld.prototype.showResult = function () {
        };

        //在玩一次
        GameWorld.prototype.restartGame = function () {
            gameworld.Root.togglePause();
        };

        Object.defineProperty(GameWorld, "instance", {
            /**
            * 获取SDK对象实例
            */
            get: function () {
                if (GameWorld._instance == null) {
                    var a_params = new gameworld.EntityParams();
                    GameWorld._instance = new GameWorld(a_params);
                }
                return GameWorld._instance;
            },
            enumerable: true,
            configurable: true
        });
        return GameWorld;
    })(gameworld.Entity);
    gameworld.GameWorld = GameWorld;
    GameWorld.prototype.__class__ = "gameworld.GameWorld";
})(gameworld || (gameworld = {}));
