var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/27.
*/
var gamemain;
(function (gamemain) {
    var MeterBoard = (function (_super) {
        __extends(MeterBoard, _super);
        function MeterBoard() {
            _super.call(this);

            var b = hitball.createBitmapByName("board");
            b.x = -50;
            this.addChild(b);

            var spriteSheet = RES.getRes("bitmapFont");
            this.meterlable = new egret.BitmapText();

            //            this.meterlable.width = 100;
            this.meterlable.scaleX = this.meterlable.scaleY = 0.6;
            this.meterlable.y = 0;

            //            this.meterlable.x = -2;
            this.meterlable.spriteSheet = spriteSheet;
            this.meterlable.text = "0";
            this.addChild(this.meterlable);
        }
        MeterBoard.prototype.setLable = function (m) {
            this.meterlable.text = m.toString() + "m";
            this.meterlable.x = -this.meterlable.width * 0.2;
        };
        return MeterBoard;
    })(egret.DisplayObjectContainer);
    gamemain.MeterBoard = MeterBoard;
    MeterBoard.prototype.__class__ = "gamemain.MeterBoard";
})(gamemain || (gamemain = {}));
