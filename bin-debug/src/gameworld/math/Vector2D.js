/**
* Created by www on 2014/8/8.
*/
var gameworld;
(function (gameworld) {
    /*2维向量*/
    var Vector2D = (function () {
        function Vector2D(x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            this._length = 0;
            this.x = x;
            this.y = y;
            this._length = 0;
        }
        Object.defineProperty(Vector2D.prototype, "length", {
            get: function () {
                if (this._oldX != this.x || this._oldY != this.y) {
                    this._oldX = this.x;
                    this._oldY = this.y;
                    this._length = Math.sqrt((this.x * this.x) + (this.y * this.y));
                }
                return this._length;
            },
            enumerable: true,
            configurable: true
        });

        Vector2D.prototype.copy = function () {
            var newVector = new Vector2D(this.x, this.y);
            newVector._length = this._length;
            newVector._oldX = this.x;
            newVector._oldY = this.y;
            return newVector;
        };
        return Vector2D;
    })();
    gameworld.Vector2D = Vector2D;
    Vector2D.prototype.__class__ = "gameworld.Vector2D";
})(gameworld || (gameworld = {}));
