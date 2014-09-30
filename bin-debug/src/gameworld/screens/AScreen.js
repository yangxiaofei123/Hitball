/**
* Created by www on 2014/8/6.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var gameworld;
(function (gameworld) {
    /*此类主要是为了addChild一个sprite而且保证有一个父类，子类setScreen都会添加到父类里*/
    var AScreen = (function (_super) {
        __extends(AScreen, _super);
        function AScreen(parentScreen) {
            if (typeof parentScreen === "undefined") { parentScreen = null; }
            _super.call(this);
            this.m_parentScreen = parentScreen;
            this.m_parentScreen == null ? this.m_currentScreen = null : this.m_currentScreen = this.currentScreen();
        }
        AScreen.prototype.parentScreen = function () {
            return this.m_parentScreen;
        };

        AScreen.prototype.dispose = function () {
        };

        AScreen.prototype.update = function (timePassed) {
            if (this.m_parentScreen == null && this.m_currentScreen != null) {
                this.m_currentScreen.update(timePassed);
            }
        };

        AScreen.prototype.currentScreen = function () {
            if (this.m_parentScreen != null) {
                return this.m_parentScreen.currentScreen();
            }
            return this.m_currentScreen;
        };

        AScreen.prototype.setScreen = function (screen) {
            if (this.m_parentScreen != null) {
                this.m_parentScreen.setScreen(screen);
                return;
            }
            if (this.m_currentScreen != null) {
                this.removeChild((this.m_currentScreen));
                this.m_currentScreen.dispose();
            }
            this.m_currentScreen = new screen(this);
            this.addChild((this.m_currentScreen));
        };
        return AScreen;
    })(egret.DisplayObjectContainer);
    gameworld.AScreen = AScreen;
    AScreen.prototype.__class__ = "gameworld.AScreen";
})(gameworld || (gameworld = {}));
