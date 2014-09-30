/**
 * Created by www on 2014/7/31.
 */
module gamemain
{
    /**
     * 主游戏容器本质是screen   addChild 一个screen
     */
    export class GameContainer extends gameworld.Root
    {
        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        }
        /**初始化*/
        private onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createGameScene();
        }


        /**创建游戏场景*/
        private createGameScene():void{


            this.addChild(gamemain.GameWorld.instance);
            gamemain.GameWorld.instance.start();

            this.addChild(gamemain.ControlLayer.instance);
        }

        public update( timePassed:number ):void
        {
            gamemain.GameWorld.instance.update(timePassed);


        }


    }
}