/**
 * Created by www on 2014/8/8.
 */
module gamemain {

    export class GameWorld extends egret.DisplayObjectContainer{
        private static _instance:GameWorld;
        private _scene_layer:gamemain.SceneLayer;

        private _hill:egret.Bitmap;
        private _massif:egret.Bitmap;
        private _hillOffX:number = 50;
        private _hillOffY:number = 280;

        public constructor() {
            super();

            var bg:egret.Bitmap = hitball.createBitmapByName("bgImage");
            bg.y = -137;
            this.addChild(bg);
            var c1:egret.Bitmap = hitball.createBitmapByName("cloud1");
            c1.x = 330;
            c1.y = 86;
            this.addChild(c1);
            var c2:egret.Bitmap = hitball.createBitmapByName("cloud2");
            c2.x = 150;
            c2.y = 14;
            this.addChild(c2);
            var c3:egret.Bitmap = hitball.createBitmapByName("cloud3");
            c3.x = 12;
            c3.y = 116;
            this.addChild(c3);

            this._hill = hitball.createBitmapByName("farHill");
            this._hill.x = this._hillOffX;
            this._hill.y = this._hillOffY;
            this.addChild(this._hill);
            this._massif = hitball.createBitmapByName("hill");
            this._massif.x = -50+this._hillOffX;
            this._massif.y = 50+this._hillOffY;
            this.addChild(this._massif);


            //木板和草地


            this._scene_layer= new gamemain.SceneLayer();
            this.addChild(this._scene_layer);


            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchHandler,this);
        }

        /**响应Touch*/
        private touchHandler(evt:egret.TouchEvent):void{
           //点击第一下企鹅就要开始跳了
            this._scene_layer.ready();
        }

        public start():void
        {

        }

        public update(a_timePassed:number):void
        {
            this._scene_layer.update(a_timePassed);
            this._hill.x=this._hillOffX+0.3*this._scene_layer.x;
            this._massif.x=-50+this._hillOffX+0.5*this._scene_layer.x;
            this.updatePosition(a_timePassed);


        }
        public updatePosition(a_timePassed:number):void
        {


        }

        public initTree():void
        {

        }



        public gameover():void
        {
            gameworld.Root.togglePause();
        }

        public showResult():void
        {

        }


        //在玩一次
        public restartGame():void
        {
            gameworld.Root.togglePause();
            this._scene_layer.reset();
        }



        /**
         * 获取SDK对象实例
         */
        public static get instance():GameWorld
        {
            if (GameWorld._instance == null)
            {
                GameWorld._instance = new GameWorld();
            }
            return GameWorld._instance;
        }

    }

}