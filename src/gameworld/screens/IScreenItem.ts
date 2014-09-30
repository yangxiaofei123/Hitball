/**
 * Created by www on 2014/8/6.
 */
module gameworld
{
    export interface IScreenItem extends egret.IEventDispatcher {
        setScreen(screen:any):void;
        update(timePassed:number):void;
        dispose():void;

        parentScreen():IScreenItem;
        currentScreen():IScreenItem;
    }
}