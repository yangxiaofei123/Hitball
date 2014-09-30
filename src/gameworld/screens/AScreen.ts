/**
 * Created by www on 2014/8/6.
 */

module gameworld
{
    /*此类主要是为了addChild一个sprite而且保证有一个父类，子类setScreen都会添加到父类里*/
    export class AScreen extends egret.DisplayObjectContainer implements IScreenItem{
        private m_parentScreen:IScreenItem;
        private m_currentScreen:IScreenItem;
        public constructor( parentScreen:IScreenItem=null )
        {
            super();
            this.m_parentScreen = parentScreen;
            this.m_parentScreen == null ? this.m_currentScreen = null : this.m_currentScreen = this.currentScreen();
        }

        public parentScreen():IScreenItem{ return this.m_parentScreen; }

        public dispose():void{}

        public update( timePassed:number ):void
        {
            if( this.m_parentScreen==null && this.m_currentScreen!=null ){ this.m_currentScreen.update( timePassed ); }
        }

        public currentScreen():IScreenItem
        {
            if( this.m_parentScreen != null )
            {
                return this.m_parentScreen.currentScreen();
            }
            return this.m_currentScreen;
        }

        public setScreen( screen:any ):void
        {
            if ( this.m_parentScreen != null )
            {
                this.m_parentScreen.setScreen(screen);
                return;
            }
            if( this.m_currentScreen!= null )
            {
                this.removeChild( <egret.DisplayObjectContainer><any>(this.m_currentScreen));
                this.m_currentScreen.dispose();
            }
            this.m_currentScreen = new screen(this);
            this.addChild(<egret.DisplayObjectContainer><any>(this.m_currentScreen));
        }
    }
}