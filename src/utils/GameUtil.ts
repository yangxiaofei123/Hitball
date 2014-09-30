/**
 * Created by shaorui on 14-6-6.
 */
module hitball
{
    export class GameUtil
    {
        /**基于矩形的碰撞检测*/
        public static hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
        {
            var rect1:egret.Rectangle = obj1.getBounds();
            var rect2:egret.Rectangle = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        }

        public static stageW:number;
        public static stageH:number;
        public static groundY = 660;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createMovieClipByName(jsonname:string,pngname:string):egret.MovieClip {
        var data:any = RES.getRes(jsonname);//获取描述
        var texture:any = RES.getRes(pngname);//获取大图
        var player:egret.MovieClip = new egret.MovieClip(data,texture);//创建电影剪辑
        return player;
    }


    /*
    * UI位置计算。
    * */
    export function moveToCenter(any:egret.DisplayObject,offX:number = 0,offY:number=0):void{
        any.x = ((hitball.GameUtil.stageW - any.width)>>1) + offX;
        any.y = ((hitball.GameUtil.stageH - any.height)>>1) + offY;
    }

    export function moveXYCenter(any:egret.DisplayObject,offX:number = 0,offY:number=0):void{
        any.x = ((hitball.GameUtil.stageW)>>1) + offX;
        any.y = ((hitball.GameUtil.stageH)>>1) + offY;
    }


}