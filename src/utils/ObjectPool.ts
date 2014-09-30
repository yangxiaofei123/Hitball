/**
 * Created by www on 2014/8/27.
 */
module hitball {

    export class ObjectPool {
        private cacheDict:Object = {};
        private static _instance:ObjectPool;
        public constructor() {
            this.cacheDict["tree"] = [];
            this.cacheDict["grass"] = [];
            this.cacheDict["board"] = [];
        }
        /**生产*/
        public produce(textureName:string):egret.DisplayObject {

            var dict:egret.DisplayObject[] = this.cacheDict[textureName];
            var b:egret.DisplayObject;
            if (dict.length > 0) {
                b = dict.pop();
            } else {
                if(textureName == "board"){
                    b = new gamemain.MeterBoard();
                } else {
                    b = hitball.createBitmapByName(textureName);
                }
//                bullet.visible = false;
            }
            return <egret.DisplayObject>b;
        }

        /**回收*/
        public reclaim(b:egret.DisplayObject, textureName:string):void {
            var dict:egret.DisplayObject[] = this.cacheDict[textureName];
            if (dict.indexOf(b) == -1)
                dict.push(b);
        }

        /**
         * 获取SDK对象实例
         */
        public static get instance():ObjectPool
        {
            if (ObjectPool._instance == null)
            {
                ObjectPool._instance = new ObjectPool();
            }
            return ObjectPool._instance;
        }

    }
}