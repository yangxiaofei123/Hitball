/**
* Created by www on 2014/8/27.
*/
var hitball;
(function (hitball) {
    var ObjectPool = (function () {
        function ObjectPool() {
            this.cacheDict = {};
            this.cacheDict["tree"] = [];
            this.cacheDict["grass"] = [];
            this.cacheDict["board"] = [];
        }
        /**生产*/
        ObjectPool.prototype.produce = function (textureName) {
            var dict = this.cacheDict[textureName];
            var b;
            if (dict.length > 0) {
                b = dict.pop();
            } else {
                if (textureName == "board") {
                    b = new gamemain.MeterBoard();
                } else {
                    b = hitball.createBitmapByName(textureName);
                }
                //                bullet.visible = false;
            }
            return b;
        };

        /**回收*/
        ObjectPool.prototype.reclaim = function (b, textureName) {
            var dict = this.cacheDict[textureName];
            if (dict.indexOf(b) == -1)
                dict.push(b);
        };

        Object.defineProperty(ObjectPool, "instance", {
            /**
            * 获取SDK对象实例
            */
            get: function () {
                if (ObjectPool._instance == null) {
                    ObjectPool._instance = new ObjectPool();
                }
                return ObjectPool._instance;
            },
            enumerable: true,
            configurable: true
        });
        return ObjectPool;
    })();
    hitball.ObjectPool = ObjectPool;
    ObjectPool.prototype.__class__ = "hitball.ObjectPool";
})(hitball || (hitball = {}));
