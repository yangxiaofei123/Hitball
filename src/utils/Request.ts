/**
 * Created by www on 2014/9/5.
 */
class GetRequest extends egret.EventDispatcher
{
    private loader:egret.URLLoader;
    private onCallback:Function;
    public constructor(url:string, type:string,func:Function)
    {
        super();
        var url:string = url;
        this.onCallback = func;
        this.loader = new egret.URLLoader();
        this.loader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        this.loader.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        this.loader.load(new egret.URLRequest(url));
        console.log(this.GenerateGuid());
    }

    //GET请求完成
     private onGetComplete(event:egret.Event):void
     {
         var loader:egret.URLLoader = <egret.URLLoader> event.target;
         var data:egret.URLVariables = loader.data;
         var o:Object = JSON.parse(data.toString());
          this.onCallback(o);

     }

    public dispose():void
    {

    }

    public GenerateGuid():string{
        var uid:string =getCookie("uid");
        if( uid== ""){
            var s:string =  this.Guid()+this.Guid()+this.Guid()+this.Guid()+this.Guid()+this.Guid()+this.Guid()+this.Guid();
            setCookie("uid",s,360*30);
            return s;
        } else {
            return uid;
        }

    }

    public Guid():string{
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }




}