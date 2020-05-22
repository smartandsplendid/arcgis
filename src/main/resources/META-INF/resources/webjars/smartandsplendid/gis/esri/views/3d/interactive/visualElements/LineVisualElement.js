// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f32 ./LaserlineVisualElement ./VisualElementResources ../../support/geometryUtils ../../support/geometryUtils/clipRay ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/RibbonLineMaterial ../../webgl-engine/shaders/RibbonLineTechnique".split(" "),
function(p,q,C,D,e,t,h,k,l,n,u,v,f,m,w,x,y,z){Object.defineProperty(q,"__esModule",{value:!0});p=function(){function b(a){var b=this;this.view=null;this._ray=f.ray.create();this._isWorldDown=!1;this._start=k.vec3f64.create();this._end=k.vec3f64.fromValues(1,0,0);this._width=1;this._color=n.vec4f32.fromValues(1,0,1,1);this._innerWidth=1;this._innerColor=n.vec4f32.fromValues(1,1,1,1);this._stippleOffColor=this._stipplePattern=null;this._infinite=this._falloff=0;this._laserlineStyle=null;this._laserlineEnabled=
!1;this._occludedMode=4;this.resources=new v.VisualElementResources({view:a.view,cameraChanged:function(){return b.updateGeometry()},createResources:function(a){return b.createResources(a)}});this._laserline=new u.LaserlineVisualElement({view:a.view});var d=!0,c;for(c in a)c in this?"attached"===c?d=a[c]:this[c]=a[c]:console.error("Cannot set unknown property",c);this.attached=d}b.prototype.destroy=function(){this.resources.destroy();this._laserline.destroy()};Object.defineProperty(b.prototype,"laserlineAttached",
{get:function(){return this.attached&&!this.hidden&&this._laserlineEnabled&&e.isSome(this._laserlineStyle)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hidden",{get:function(){return this.resources.hidden},set:function(a){this.resources.hidden=a;this._laserline.attached=this.laserlineAttached},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"attached",{get:function(){return this.resources.attached},set:function(a){this.resources.attached=a;this._laserline.attached=
this.laserlineAttached},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"worldDownAtLocation",{set:function(a){this._isWorldDown=!0;h.vec3.copy(this._start,a);this.view.renderCoordsHelper.worldUpAtPosition(a,this._end);h.vec3.subtract(this._end,a,this._end);f.ray.fromPoints(this._start,this._end,this._ray);this.updateGeometry()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"start",{get:function(){return this._start},set:function(a){this._isWorldDown=!1;h.vec3.exactEquals(this._start,
a)||(h.vec3.copy(this._start,a),f.ray.fromPoints(this._start,this._end,this._ray),this.updateGeometry())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"end",{get:function(){return this._end},set:function(a){this._isWorldDown=!1;h.vec3.exactEquals(this._end,a)||(h.vec3.copy(this._end,a),f.ray.fromPoints(this._start,this._end,this._ray),this.updateGeometry())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"width",{get:function(){return this._width},set:function(a){a!==
this._width&&(this._width=a,this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"color",{get:function(){return this._color},set:function(a){l.vec4.exactEquals(a,this._color)||(l.vec4.copy(this._color,a),this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"innerWidth",{get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"innerColor",{get:function(){return this._innerColor},set:function(a){l.vec4.exactEquals(a,this._innerColor)||(l.vec4.copy(this._innerColor,a),this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"stipplePattern",{get:function(){return this._stipplePattern},set:function(a){var b=e.isSome(a)!==e.isSome(this._stipplePattern);this._stipplePattern=a;b?this.resources.recreate():this.updateMaterial()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"stippleOffColor",{get:function(){return this._stippleOffColor},set:function(a){if(e.isNone(a)||e.isNone(this._stippleOffColor)||!l.vec4.exactEquals(a,this._stippleOffColor))this._stippleOffColor=e.isSome(a)?n.vec4f32.clone(a):null,this.updateMaterial()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"falloff",{get:function(){return this._falloff},set:function(a){a!==this._falloff&&(this._falloff=a,this.updateMaterial())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"infinite",{get:function(){return this._infinite},set:function(a){a!==this._infinite&&(this._infinite=a,this.updateGeometry())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"laserlineStyle",{get:function(){return this._laserlineStyle},set:function(a){this._laserlineStyle=a;this._laserline.attached=this.laserlineAttached;e.isSome(a)&&(this._laserline.style=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"laserlineEnabled",{get:function(){return this._laserlineEnabled},
set:function(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,this._laserline.attached=this.laserlineAttached)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"occludedMode",{get:function(){return this._occludedMode},set:function(a){a!==this._occludedMode&&(this._occludedMode=a,e.isSome(this.resources.resources)&&(this.resources.resources.material.renderOccluded=a))},enumerable:!0,configurable:!0});b.prototype.updateMaterial=function(){var a=this.resources.resources;e.isNone(a)||
a.material.setParameterValues(this.materialParameters)};Object.defineProperty(b.prototype,"materialParameters",{get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff}},enumerable:!0,configurable:!0});b.prototype.updateGeometry=function(){var a=this.resources.object;e.isNone(a)||this.updateVertices(a)};b.prototype.updateVertices=function(a){if(this._infinite){var b=
this.view.state.camera;m.fromRay(this._ray,g);switch(this._infinite){case 2:g.c0=-Number.MAX_VALUE;break;case 1:case 3:var d=this._ray.origin,c=this.view.elevationProvider.getElevation(d[0],d[1],d[2],this.view.renderCoordsHelper.spatialReference,"ground"),d=this.view.renderCoordsHelper.getAltitude(d);this._isWorldDown&&d<c&&h.vec3.negate(g.ray.direction,g.ray.direction);3===this._infinite&&null!=c&&(g.c1=Math.abs(d-c))}f.frustum.intersectClipRay(b.frustum.planes,g)?(b=m.getStart(g,A),c=m.getEnd(g,
B),this.updateVertexAttributes(a,b,c),this._laserline.intersectsLine=f.lineSegment.fromPoints(b,c,r)):this.updateVertexAttributes(a,this._start,this._end)}else this.updateVertexAttributes(a,this._start,this._end),this._laserline.intersectsLine=f.lineSegment.fromPoints(this._start,this._end,r)};b.prototype.updateVertexAttributes=function(a,b,d){var c=a.geometryRecords[0].geometry.data.getVertexAttr()[z.RibbonVertexAttributeConstants.POSITION].data;c[0]=b[0];c[1]=b[1];c[2]=b[2];c[3]=d[0];c[4]=d[1];
c[5]=d[2];a.geometryVertexAttrsUpdated(0)};b.prototype.createResources=function(a){var b=[k.vec3f64.create(),k.vec3f64.create()],d=new w(x.createPolylineGeometry(b),"lineVisualElement"),c=new y(this.materialParameters,"lineVisualElement");c.renderOccluded=this._occludedMode;a.addGeometry(d,c,t.mat4f64.IDENTITY);this.updateVertices(a);return{material:c,geometry:d,forEach:function(a){return a(c),a(d)}}};return b}();q.LineVisualElement=p;var g=m.create(),A=k.vec3f64.create(),B=k.vec3f64.create(),r=f.lineSegment.create()});