/**
* Created by www on 2014/8/7.
*/
var gameworld;
(function (gameworld) {
    /**/
    var AABBox = (function () {
        function AABBox(center, width, height) {
            this.center = new gameworld.Vector2D(center.x, center.y);

            this.width = width;
            this.height = height;
            this.halfWidth = width >> 1;
            this.halfHeight = height >> 1;

            this.left = center.x - this.halfWidth;
            this.right = center.x + this.halfWidth;
            this.top = center.y - this.halfHeight;
            this.bottom = center.y + this.halfHeight;

            this.topLeft = new gameworld.Vector2D(this.left, this.top);
            this.topRight = new gameworld.Vector2D(this.right, this.top);
            this.bottomRight = new gameworld.Vector2D(this.right, this.bottom);
            this.bottomLeft = new gameworld.Vector2D(this.left, this.bottom);
        }
        AABBox.prototype.Set = function (center, width, height) {
            this.center.x = center.x;
            this.center.y = center.y;

            this.width = width;
            this.height = height;
            this.halfWidth = width >> 1;
            this.halfHeight = height >> 1;

            this.left = center.x - this.halfWidth;
            this.right = center.x + this.halfWidth;
            this.top = center.y - this.halfHeight;
            this.bottom = center.y + this.halfHeight;

            this.topLeft.x = this.left;
            this.topLeft.y = this.top;
            this.topRight.x = this.right;
            this.topRight.y = this.top;
            this.bottomRight.x = this.right;
            this.bottomRight.y = this.bottom;
            this.bottomLeft.x = this.left;
            this.bottomLeft.y = this.bottom;
        };

        AABBox.prototype.setSize = function (width, height) {
            this.width = width;
            this.height = height;
            this.halfWidth = width >> 1;
            this.halfHeight = height >> 1;

            this.left = this.center.x - this.halfWidth;
            this.right = this.center.x + this.halfWidth;
            this.top = this.center.y - this.halfHeight;
            this.bottom = this.center.y + this.halfHeight;

            this.topLeft.x = this.left;
            this.topLeft.y = this.top;
            this.topRight.x = this.right;
            this.topRight.y = this.top;
            this.bottomRight.x = this.right;
            this.bottomRight.y = this.bottom;
            this.bottomLeft.x = this.left;
            this.bottomLeft.y = this.bottom;
        };

        /**
        * Centers the box at the specified point.
        * @param point Center point at which to move the box.
        *
        */
        AABBox.prototype.moveTo = function (point) {
            this.center.x = point.x;
            this.center.y = point.y;
            this.left = this.center.x - this.halfWidth;
            this.right = this.center.x + this.halfWidth;
            this.top = this.center.y - this.halfHeight;
            this.bottom = this.center.y + this.halfHeight;
            this.topLeft.x = this.left;
            this.topLeft.y = this.top;
            this.topRight.x = this.right;
            this.topRight.y = this.top;
            this.bottomRight.x = this.right;
            this.bottomRight.y = this.bottom;
            this.bottomLeft.x = this.left;
            this.bottomLeft.y = this.bottom;
        };

        AABBox.prototype.isOverlapping = function (box) {
            return !((box.top > this.bottom) || (box.bottom < this.top) || (box.left > this.right) || (box.right < this.left));
        };
        return AABBox;
    })();
    gameworld.AABBox = AABBox;
    AABBox.prototype.__class__ = "gameworld.AABBox";
})(gameworld || (gameworld = {}));
