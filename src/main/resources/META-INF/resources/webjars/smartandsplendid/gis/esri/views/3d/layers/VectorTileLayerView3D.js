// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../2d/engine/vectorTiles/SchemaHelper ../../2d/engine/vectorTiles/TileHandler ../../2d/engine/vectorTiles/VTLPainter3D ./LayerView3D ./TiledLayerView3D ../terrain/terrainUtils ../../layers/LayerView".split(" "),function(v,w,m,d,e,n,c,p,g,h,q,r,t,u){return function(f){function b(a){return f.call(this,
a)||this}m(b,f);b.prototype.initialize=function(){var a=this,b=this._getTileInfoSupportError(t.test.force512VTL?this.layer.tileInfo:this.layer.compatibleTileInfo256,this.layer.fullExtent);if(b)this.addResolvingPromise(e.reject(b));else{var b=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var b=a.view.basemapTerrain.tilingScheme,c=b.pixelSize;a.schemaHelper=new p(c,a.view.spatialReference.isGeographic);c=256===c?a.layer.compatibleTileInfo256:a.view.spatialReference.isGeographic?
a.layer.compatibleTileInfo512:a.layer.tileInfo;if(b=a._getTileInfoCompatibilityError(c,b))throw b;a._set("tileInfo",c)}),c=e.createAbortController();this._memCache=this.view.resourceController.memoryController.getMemCache(this.layer.uid,function(b){return a.tileHandler.releaseVectorTile(b)});var d=this.view.resourceController.scheduler;this.tileHandler=new g.TileHandler(this.layer,this.view.pixelRatio,!1,null,this._memCache,!1);var f=this.tileHandler.start({signal:c.signal,scheduler:d}),k=this.tileHandler.spriteMosaic;
k.then(function(b){return a.painter=new h.default(b,a.tileHandler.glyphMosaic)});var l=function(){a._tileHandlerController.abort();a._memCache.clear();var b=new g.TileHandler(a.layer,a.view.pixelRatio,!1,null,a._memCache,!1),c=new AbortController,c=b.start({signal:c.signal,scheduler:d});a.updatingHandles.addPromise(e.all([c,b.spriteMosaic]).then(function(c){var d=a.tileHandler,e=a.painter;a.painter=new h.default(c[1],b.glyphMosaic);a.tileHandler=b;a.emit("data-changed");d.destroy();e&&e.dispose()}))};
this.updatingHandles.add(this,"layer.currentStyleInfo",l);this.updatingHandles.add(this,"view.pixelRatio",l);this._tileHandlerController=c;b=e.all([b,f,k]);this.addResolvingPromise(b)}};b.prototype.destroy=function(){this._memCache&&(this._memCache.destroy(),this._memCache=null);this.painter&&(this.painter.dispose(),this.painter=null);this.tileHandler&&(this.tileHandler.destroy(),this.tileHandler=null)};Object.defineProperty(b.prototype,"dataLevelRange",{get:function(){var a=this.tileInfo.lods,a=
this.levelRangeFromScaleRange(a[0].scale,a[a.length-1].scale);1===a.minLevel&&256===this.tileInfo.size[0]&&(a.minLevel=0);return a},enumerable:!0,configurable:!0});d([c.property({aliasOf:"layer.fullExtent"})],b.prototype,"fullExtent",void 0);d([c.property()],b.prototype,"layer",void 0);d([c.property()],b.prototype,"tileInfo",void 0);d([c.property()],b.prototype,"dataLevelRange",null);d([c.property()],b.prototype,"updatingProgressValue",void 0);return b=d([c.subclass("esri.views.3d.layers.VectorTileLayerView3D")],
b)}(c.declared(r.TiledLayerView3D(q.LayerView3D(u))))});