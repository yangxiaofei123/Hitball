var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by www on 2014/8/7.
*/
var gameworld;
(function (gameworld) {
    var Entity = (function (_super) {
        __extends(Entity, _super);
        function Entity(params) {
            _super.call(this);
            this.m_entityMap = {};
            this.actualPos = new gameworld.Vector2D();
            this.newPos = this.actualPos.copy();

            this.radius = params.radius;
            this.rotation = params.rotation;
            this.entityscale = params.scale;

            if (params.id == null) {
                this.m_id = "" + Entity.m_nextID++;
            } else {
                this.m_id = params.id;
            }

            this.entityparent = (params.parent);
        }
        Entity.prototype.setBoundSize = function (width, height) {
            this.bounds = new gameworld.AABBox(this.actualPos, width, height);
        };

        Entity.prototype.update = function (a_timePassed) {
            this.setInitialValues(a_timePassed);

            this.updateEntityChildren(a_timePassed);
        };

        Object.defineProperty(Entity.prototype, "entityscale", {
            get: function () {
                return this.m_scale;
            },
            set: function (a_value) {
                this.m_scale = a_value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Entity.prototype, "id", {
            get: function () {
                return this.m_id;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Entity.prototype, "entityparent", {
            get: function () {
                return this._entityParent;
            },
            //
            set: function (a_value) {
                if (this._entityParent != null) {
                    this._entityParent.removeEntityChild(this.id);
                }

                this._entityParent = a_value;

                if (this._entityParent && this._entityParent.getEntityChildByID(this.m_id) == null)
                    this._entityParent.addEntityChild(this);
            },
            enumerable: true,
            configurable: true
        });


        Entity.prototype.addEntityChild = function (a_entity) {
            if (this.m_entityMap[a_entity.id] != null) {
                //                throw new Error("<Entity> There is an entity with this id already. Ensure ids are unique.");
                return;
            }

            this.m_entityMap[a_entity.id] = a_entity;
            a_entity.entityparent = this;
        };

        Entity.prototype.removeEntityChild = function (a_id) {
            if ((this.m_entityMap[a_id]) == null) {
                //                throw new Error("<Entity> There was no entity with a matching id.");
                return;
            }

            //            console.log("remove:++"+a_id+this.m_entityMap[ a_id ]);
            this.m_entityMap[a_id]._entityParent = null;
            delete this.m_entityMap[a_id];
            //            this.m_entityMap[ a_id ] = null;
        };

        Entity.prototype.clearEntityChildren = function (a_classType) {
            if (typeof a_classType === "undefined") { a_classType = null; }
            for (var i in this.m_entityMap) {
                var entity = this.m_entityMap[i];
                if (a_classType) {
                    if (!(entity instanceof a_classType)) {
                        continue;
                    }
                }
                delete this.m_entityMap[entity.id];

                //                this.m_entityMap[ entity.id ] = null;
                entity.entityparent = null;
            }
        };

        Entity.prototype.getEntityChildByID = function (a_id) {
            return (this.m_entityMap[a_id]);
        };

        Entity.prototype.getEntityChildren = function () {
            var tempArray = [];

            for (var i in this.m_entityMap) {
                var entity = this.m_entityMap[i];
                tempArray.push(entity);
            }

            return tempArray;
        };

        Entity.prototype.updateEntityChildren = function (a_timePassed) {
            for (var i1 in this.m_entityMap) {
                var entity = this.m_entityMap[i1];

                //                console.log(i1+"---"+entity);
                entity.update(a_timePassed);
            }
        };

        Entity.prototype.setInitialValues = function (a_timePassed) {
            if (typeof a_timePassed === "undefined") { a_timePassed = 0; }
            this._stepSize = a_timePassed;
            this.actualPos.x = this.newPos.x;
            this.actualPos.y = this.newPos.y;

            // .. Update bounds ...
            this.bounds.center.x = this.actualPos.x;
            this.bounds.center.y = this.actualPos.y;
            this.bounds.left = this.bounds.center.x - this.bounds.halfWidth;
            this.bounds.right = this.bounds.center.x + this.bounds.halfWidth;
            this.bounds.top = this.bounds.center.y - this.bounds.halfHeight;
            this.bounds.bottom = this.bounds.center.y + this.bounds.halfHeight;
            this.bounds.topLeft.x = this.bounds.left;
            this.bounds.topLeft.y = this.bounds.top;
            this.bounds.bottomRight.x = this.bounds.right;
            this.bounds.bottomRight.y = this.bounds.bottom;
            this.bounds.topRight.x = this.bounds.right;
            this.bounds.topRight.y = this.bounds.top;
            this.bounds.bottomLeft.x = this.bounds.left;
            this.bounds.bottomLeft.y = this.bounds.bottom;
        };

        Entity.prototype.dispose = function () {
            this.newPos = null;
            this.actualPos = null;
            this.bounds = null;

            for (var i1 in this.m_entityMap) {
                var entity = this.m_entityMap[i1];
                delete this.m_entityMap[entity.id];

                //                this.m_entityMap[ entity.id ] = null;
                entity.dispose();
            }

            this.m_entityMap = null;

            this.entityparent = null;
        };
        Entity.m_nextID = 0;
        return Entity;
    })(egret.DisplayObjectContainer);
    gameworld.Entity = Entity;
    Entity.prototype.__class__ = "gameworld.Entity";
})(gameworld || (gameworld = {}));
