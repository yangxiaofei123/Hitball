var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/9/5.
*/
var GetRequest = (function (_super) {
    __extends(GetRequest, _super);
    function GetRequest(url, type, func) {
        _super.call(this);
        var url = url;
        this.onCallback = func;
        this.loader = new egret.URLLoader();
        this.loader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        this.loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        this.loader.load(new egret.URLRequest(url));
        console.log(this.GenerateGuid());
    }
    //GET请求完成
    GetRequest.prototype.onGetComplete = function (event) {
        var loader = event.target;
        var data = loader.data;
        var o = JSON.parse(data.toString());
        this.onCallback(o);
    };

    GetRequest.prototype.dispose = function () {
    };

    GetRequest.prototype.GenerateGuid = function () {
        var uid = getCookie("uid");
        if (uid == "") {
            var s = this.Guid() + this.Guid() + this.Guid() + this.Guid() + this.Guid() + this.Guid() + this.Guid() + this.Guid();
            setCookie("uid", s, 360 * 30);
            return s;
        } else {
            return uid;
        }
    };

    GetRequest.prototype.Guid = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return GetRequest;
})(egret.EventDispatcher);
GetRequest.prototype.__class__ = "GetRequest";
