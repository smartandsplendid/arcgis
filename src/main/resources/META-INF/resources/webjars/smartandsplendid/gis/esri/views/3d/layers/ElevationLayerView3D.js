// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/promiseUtils ../../../core/accessorSupport/decorators ./LayerView3D ./TiledLayerView3D ./support/tiledLayerUtils ../../layers/LayerView".split(" "),function(n,p,e,c,f,g,b,h,k,l,m){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}e(a,d);a.prototype.initialize=function(){var a=this.get("view.map.allLayers"),a=a&&a.includes(this.layer),
b=this.get("view.map.ground.layers"),b=b&&b.includes(this.layer);a&&!b&&(a=new f("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground"),this.addResolvingPromise(g.reject(a)));this._addTilingSchemeMatchPromise();this.addResolvingPromise(l.checkArcGISServiceVersionCompatibility(this.layer))};c([b.property({readOnly:!0,aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);c([b.property()],a.prototype,"layer",void 0);c([b.property({readOnly:!0,
aliasOf:"layer.tileInfo"})],a.prototype,"tileInfo",void 0);return a=c([b.subclass("esri.views.3d.layers.ElevationLayerView3D")],a)}(b.declared(k.TiledLayerView3D(h.LayerView3D(m))))});