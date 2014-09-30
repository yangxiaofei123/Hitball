var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/7/31.
*/
var gamemain;
(function (gamemain) {
    /**
    * 主游戏容器本质是screen   addChild 一个screen
    */
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            _super.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /**初始化*/
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };

        /**创建游戏场景*/
        GameContainer.prototype.createGameScene = function () {
            this.addChild(gamemain.GameWorld.instance);
            gamemain.GameWorld.instance.start();

            this.addChild(gamemain.ControlLayer.instance);
        };

        GameContainer.prototype.update = function (timePassed) {
            gamemain.GameWorld.instance.update(timePassed);
        };
        return GameContainer;
    })(gameworld.Root);
    gamemain.GameContainer = GameContainer;
    GameContainer.prototype.__class__ = "gamemain.GameContainer";
})(gamemain || (gamemain = {}));
