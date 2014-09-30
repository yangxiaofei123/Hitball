/**
 * Created by www on 2014/8/6.
 */
module gameworld
{

    export  class Root extends AScreen
    {
        private static m_isUpdateOn:boolean;

        private static m_gameSpeed:number;
        private m_deltaTime:number;
        private m_screenToSet:any;
        private m_timeOfLastUpdate : number;
        private m_accruedTime : number = 0;
        public static setGameSpeed( value:number ) : void
        {
            this.m_gameSpeed = value;
            if(this.m_gameSpeed < 0 ) {this.m_gameSpeed = 0; }
        }

        public static getGameSpeed() : number { return this.m_gameSpeed; }

        public static togglePause() : void
        {
            this.m_isUpdateOn = !this.m_isUpdateOn;
        }
        public constructor( parentScreen:IScreenItem=null )
        {
            super();
            Root.m_gameSpeed = 1;
            Root.m_isUpdateOn = true;

            this.m_deltaTime = 0;
            this.m_timeOfLastUpdate = egret.getTimer();
            this.addEventListener( egret.Event.ENTER_FRAME,this.onEnterFrame,this );
        }

        public setScreen(screen:any):void
        {
            this.m_screenToSet = screen;
            super.setScreen( this.m_screenToSet );
        }


        private onEnterFrame( e:egret.Event ):void
        {
            var pass:number = this.calculateDeltaTime();
            if( Root.m_isUpdateOn )
            {
                var a:Number=pass *0.001;
                a=Number(a.toFixed(3));
                this.update( <number>a);
            }
//            if( this.m_screenToSet )
//            {
//                super.setScreen( this.m_screenToSet );
//                this.m_screenToSet = null;
//            }
        }

        private calculateDeltaTime() : number
        {
            var currentTime:number = egret.getTimer();
            var deltaTime:number = currentTime - this.m_timeOfLastUpdate;
            this.m_timeOfLastUpdate = currentTime;
            return deltaTime;
        }




    }




}