/**
* Created by www on 2014/8/7.
*/
var gameworld;
(function (gameworld) {
    /**/
    var EntityParams = (function () {
        function EntityParams() {
            this.radius = 0;
            this.rotation = 0;
            this.scale = 1;
            this.layer = 1;
            this.textureName = "";
            this.life = 0;
            this.score = 0;
        }
        return EntityParams;
    })();
    gameworld.EntityParams = EntityParams;
    EntityParams.prototype.__class__ = "gameworld.EntityParams";
})(gameworld || (gameworld = {}));
