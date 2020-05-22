// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Collection ../../../core/collectionUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../layers/support/ClipArea ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),function(r,e,h,d,k,l,f,c,m,n,p,q){Object.defineProperty(e,"__esModule",{value:!0});var g=k.ofType({key:"type",base:m,typeMap:{rect:n,path:q,geometry:p}});
e.LayerView2D=function(e){return function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.clips=new g;b.moving=!1;b.attached=!1;b.lastUpdateId=-1;b.updateRequested=!1;return b}h(a,e);a.prototype.initialize=function(){var b=this;this.when(function(){b.requestUpdate()},function(){});var a=function(){return b.notifyChange("rendering")};this.handles.add([f.init(this,"suspended",function(a){b.container&&(b.container.visible=!a);b.view&&!a&&b.updateRequested&&b.view.requestLayerViewUpdate(b)},
!0),f.init(this,["fullOpacity","container"],function(){b.container&&(b.container.opacity=b.fullOpacity)},!0),f.on(this,"container","post-render",a),f.on(this,"container","will-render",a)])};a.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach());this.handles.remove("initialize");this.updateRequested=!1;this.view=this.layer=null};Object.defineProperty(a.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||
this.isRendering())},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0});a.prototype.isVisibleAtScale=function(b){var a=!0,c=this.layer,d=c.minScale,c=c.maxScale;if(null!=d&&null!=c){var a=!d,e=!c;!a&&b<=d&&(a=!0);!e&&b>=c&&(e=!0);a=a&&e}return a};a.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||
this.view.requestLayerViewUpdate(this))};a.prototype.processUpdate=function(a){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",a),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(a)))};a.prototype.isUpdating=function(){return!1};a.prototype.isRendering=function(){return!1};a.prototype.canResume=function(){var a=this.inherited(arguments);a&&(a=this.isVisibleAtScale(this.view.scale));return a};d([c.property({type:g,set:function(a){a=
l.referenceSetter(a,this._get("clips"),g);this._set("clips",a)}})],a.prototype,"clips",void 0);d([c.property()],a.prototype,"moving",void 0);d([c.property({dependsOn:["attached","suspended","moving"]})],a.prototype,"rendering",null);d([c.property()],a.prototype,"attached",void 0);d([c.property()],a.prototype,"container",void 0);d([c.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],a.prototype,"suspended",void 0);d([c.property({readOnly:!0})],a.prototype,"updateParameters",void 0);
d([c.property()],a.prototype,"updateRequested",void 0);d([c.property({dependsOn:["updateRequested","attached","suspended"]})],a.prototype,"updating",null);d([c.property()],a.prototype,"view",void 0);return a=d([c.subclass("esri.views.2d.layers.LayerView2D")],a)}(c.declared(e))}});