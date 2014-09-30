/**
 * Created by www on 2014/8/26.
 */
module gamemain {

    export class Wildman extends egret.DisplayObjectContainer {
        public wildmanMC:egret.MovieClip;
        public manstate:string;

        public hiting:boolean;
        public hitOver:boolean;
        public constructor() {
            super();


            var fireMC:egret.MovieClip = hitball.createMovieClipByName("fire_json","fire_png");
            fireMC.gotoAndPlay("fire");
            fireMC.frameRate = 15;
            fireMC.y = -40;
            this.addChild(fireMC);
            this.wildmanMC = hitball.createMovieClipByName("chenglong_json","chenglong_png");
            this.addChild(this.wildmanMC);


            this.setState("begin");
            this.hiting = false;
            this.hitOver = false;
            this.wildmanMC.addEventListener("begin_hit", this.onHit,this);
            this.wildmanMC.addEventListener("finish", this.onFinish,this);
        }

        public setState(state:string):void
        {
            this.manstate = state;
            switch (this.manstate){
                case "begin":
                    this.wildmanMC.gotoAndPlay("begin");
                    break;
                case "ready":
                    this.wildmanMC.gotoAndPlay("ready");
                    break;
                case "hit":
                    this.wildmanMC.gotoAndPlay("hit");
                    this.wildmanMC.frameRate = 40;
                    this.wildmanMC.addEventListener("begin_hit", this.onHit,this);
                    this.wildmanMC.addEventListener("finish", this.onFinish,this);
                    break;
                default :
                    this.wildmanMC.gotoAndPlay("begin");
            }
        }

        public onHit():void
        {
            this.wildmanMC.removeEventListener("begin_hit", this.onHit,this);
            this.hiting = true;

        }

        public onFinish():void
        {
            this.wildmanMC.removeEventListener("finish", this.onFinish,this);
            this.hiting = false;
            this.hitOver = true;
//            this.setState("ready");
            this.wildmanMC.stop();
        }


        public update(a_timePassed:number):void {


        }

        public reset():void
        {this.wildmanMC.addEventListener("begin_hit", this.onHit,this);
            this.wildmanMC.addEventListener("finish", this.onFinish,this);
            this.setState("begin");
            this.hiting = false;
            this.hitOver = false;
        }


    }
}