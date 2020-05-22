// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ../../support/LaserLineRenderer ../../webgl-engine/shaders/Laserlines.glsl".split(" "),function(e,f,n,p,c,h,g,d,k,l){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(a){this.view=null;this._angleCutoff=l.defaultAngleCutoff;this._style={};this._heightPlane=
g.vec3f64.create();this._heightPlaneEnabled=!1;this._heightPlaneHeight=0;this._intersectsLine=d.lineSegment.create();this._intersectsLineInfinite=this._intersectsLineEnabled=!1;this._pathVerticalPlaneBuffers=null;var b=!0,c;for(c in a)c in this?"attached"===c?b=a[c]:this[c]=a[c]:console.error("Cannot set unknown property",c);this.attached=b}b.prototype.destroy=function(){this.disposeRenderer()};Object.defineProperty(b.prototype,"attached",{get:function(){return!!this.renderer},set:function(a){a?this.ensureRenderer():
this.disposeRenderer()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"angleCutoff",{get:function(){return this._angleCutoff},set:function(a){this._angleCutoff!==a&&(this._angleCutoff=a,this.syncAngleCutoff())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"style",{get:function(){return this._style},set:function(a){this._style=a;this.syncStyle()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"heightPlane",{get:function(){return this._heightPlaneEnabled?
this._heightPlane:null},set:function(a){c.isSome(a)?(h.vec3.copy(this._heightPlane,a),this._heightPlaneEnabled=!0):this._heightPlaneEnabled=!1;this.syncRenderer();this.syncHeightPlane()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"heightPlaneHeight",{get:function(){return this._heightPlaneHeight},set:function(a){a!==this._heightPlaneHeight&&(this._heightPlaneHeight=a,this.syncHeightPlane())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsWorldUpAtLocation",
{set:function(a){if(c.isNone(a))this.intersectsLine=null;else{var b=this.view.renderCoordsHelper.worldUpAtPosition(a,m);this.intersectsLine=d.lineSegment.fromValues(a,b);this.intersectsLineInfinite=!0}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsLine",{get:function(){return this._intersectsLineEnabled?this._intersectsLine:null},set:function(a){c.isSome(a)?(d.lineSegment.copy(a,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1;this.syncIntersectsLine();
this.syncRenderer()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsLineInfinite",{get:function(){return this._intersectsLineInfinite},set:function(a){this._intersectsLineInfinite=a;this.syncIntersectsLineInfinite()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pathVerticalPlane",{get:function(){return this._pathVerticalPlaneBuffers},set:function(a){this._pathVerticalPlaneBuffers=a;this.syncPathVerticalPlane();this.syncRenderer()},enumerable:!0,
configurable:!0});b.prototype.syncRenderer=function(){this.attached&&(this._intersectsLineEnabled||this._heightPlaneEnabled||c.isSome(this._pathVerticalPlaneBuffers))?this.ensureRenderer():this.disposeRenderer()};b.prototype.ensureRenderer=function(){c.isSome(this.renderer)||(this.renderer=new k.LaserLineRenderer(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this.syncStyle(),this.syncHeightPlane(),this.syncIntersectsLine(),this.syncIntersectsLineInfinite(),this.syncPathVerticalPlane(),
this.syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))};b.prototype.syncStyle=function(){c.isNone(this.renderer)||(this.renderer.setParameterValues(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))};b.prototype.syncAngleCutoff=function(){c.isNone(this.renderer)||this.renderer.setParameterValues({angleCutoff:this._angleCutoff})};b.prototype.syncHeightPlane=function(){!c.isNone(this.renderer)&&
(this.renderer.heightPlaneEnabled=this._heightPlaneEnabled)&&(this.renderer.heightPlanePosition=this._heightPlane,this.renderer.heightPlaneHeight=this._heightPlaneHeight)};b.prototype.syncIntersectsLine=function(){!c.isNone(this.renderer)&&(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled)&&(this.renderer.intersectsLineSegment=this._intersectsLine)};b.prototype.syncIntersectsLineInfinite=function(){c.isNone(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)};
b.prototype.syncPathVerticalPlane=function(){c.isNone(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=c.isSome(this._pathVerticalPlaneBuffers),c.isSome(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))};b.prototype.disposeRenderer=function(){c.isSome(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)};return b}();f.LaserlineVisualElement=e;var m=g.vec3f64.create()});