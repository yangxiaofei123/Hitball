/**
 * Created by www on 2014/8/27.
 */
module gamemain {

    export class MeterBoard extends egret.DisplayObjectContainer {
        public meterlable:egret.BitmapText;
        public constructor() {
            super();

            var b:egret.Bitmap= hitball.createBitmapByName("board");
            b.x = -50;
            this.addChild(b);

            var spriteSheet = RES.getRes("bitmapFont");
            this.meterlable = new egret.BitmapText();

//            this.meterlable.width = 100;
            this.meterlable.scaleX = this.meterlable.scaleY= 0.6;
            this.meterlable.y = 0;
//            this.meterlable.x = -2;
            this.meterlable.spriteSheet = spriteSheet;
            this.meterlable.text = "0";
            this.addChild( this.meterlable );
        }

        public setLable(m:number):void
        {
            this.meterlable.text = m.toString()+"m";
            this.meterlable.x = -this.meterlable.width*0.2;
        }


    }
}