// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../geometry ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/webMercatorUtils ../../../../support/elevationInfoUtils ../../support/geometryUtils ../../support/geometryUtils ../../support/projectionUtils ../../support/stack ../../../draw/support/drawUtils".split(" "),
function(R,g,m,S,u,K,v,L,h,n,l,p,t,w,M,q,x,y,N){function z(b,d){var a=null,c=null;return b.events.on("drag",function(e){if("cancel"===e.action)h.isSome(c)&&(c.execute({}),c=a=null);else{var f={action:e.action,screenStart:e.start,screenEnd:e.screenPoint};"start"===e.action&&h.isNone(a)&&(a=new r,c=new r,d(b,a,c,f));h.isSome(a)&&a.execute(f);"end"===e.action&&h.isSome(a)&&(c=a=null)}})}function A(b,d){var a=p.vec3f64.create(),c=p.vec3f64.create(),e=!1;return function(f){if("start"===f.action){var k=
n.screenPointObjectToArray(f.screenStart,n.castScreenPointArray(y.sv2d.get())),k=q.ray.fromScreen(b.state.camera,k,B);e=q.plane.intersectRay(d,k,a)}if(!e)return null;k=n.screenPointObjectToArray(f.screenEnd,n.castScreenPointArray(y.sv2d.get()));k=q.ray.fromScreen(b.state.camera,k,B);return q.plane.intersectRay(d,k,c)?m({},f,{renderStart:a,renderEnd:c,plane:d}):null}}function C(b,d,a,c){void 0===c&&(c=null);var e=null;return function(f){if("start"===f.action&&(e=b.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(f.screenStart.x,
f.screenStart.y),d,a),h.isSome(e)&&h.isSome(c)&&!x.pointToPoint(e,e,c))||h.isNone(e))return null;var k=b.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(f.screenEnd.x,f.screenEnd.y),d,a);return h.isSome(k)?h.isSome(c)&&!x.pointToPoint(k,k,c)?null:m({},f,{mapStart:e,mapEnd:k}):null}}function D(b,d,a,c){void 0===c&&(c=null);d=w.getZForElevationMode(d,b,a);return C(b,a,d,c)}function E(b,d,a,c){void 0===c&&(c=null);return D(b,a,w.getGraphicEffectiveElevationInfo(d),c)}function O(b,
d){var a=P,c=Q,e=q.plane.create();b.renderCoordsHelper.worldUpAtPosition(d,a);b=l.vec3.cross(e,a,l.vec3.subtract(c,d,b.state.camera.eye));l.vec3.cross(b,b,a);return q.plane.fromPositionAndNormal(d,b,e)}function F(b,d){var a=null,c=h.isSome(b[d])?b[d].spatialReference:null;return function(e){if("start"===e.action&&h.isSome(b[d])){var f=b[d],k=e.mapStart.spatialReference;a=h.isNone(f)||"mesh"===f.type?null:f.spatialReference.equals(k)?f.clone():t.canProject(f,k)?t.project(f,k):null}if(h.isNone(a))return null;
var f=e.mapEnd.x-e.mapStart.x,k=e.mapEnd.y-e.mapStart.y,g=e.mapEnd.z-e.mapStart.z,l=N.move(a.clone(),f,k,g);l.spatialReference.equals(c)?b[d]=l:b[d]=t.project(l,c);return m({},e,{translationX:f,translationY:k,translationZ:g})}}function G(b){return F(b,"geometry")}function H(b){var d=h.isSome(b.geometry)?b.geometry.clone():null;return function(a){b.geometry=d;return a}}function I(b,d){var a=p.vec3f64.create(),c=l.vec3.length(d);b.renderCoordsHelper.worldUpAtPosition(d,a);var e=p.vec3f64.create(),f=
p.vec3f64.create(),k=function(f){l.vec3.subtract(f,f,d);M.vector.projectPoint(a,f,f);"global"===b.viewingMode&&l.vec3.length(f)*L.sign(l.vec3.dot(a,f))<-c+.001&&l.vec3.subtract(f,l.vec3.scale(f,a,.001),d);l.vec3.add(f,f,d);return f};return function(a){a.renderStart=k(l.vec3.copy(e,a.renderStart));a.renderEnd=k(l.vec3.copy(f,a.renderEnd));return a}}function J(b,d){var a=b.renderCoordsHelper;return function(b){var c=a.fromRenderCoords(b.renderStart,new u.Point,d),f=a.fromRenderCoords(b.renderEnd,new u.Point,
d);return h.isSome(c)&&h.isSome(f)?m({},b,{mapStart:c,mapEnd:f}):null}}Object.defineProperty(g,"__esModule",{value:!0});g.createManipulatorDragEventPipeline=z;g.createManipulatorDragEventPipelineMany=function(b,d){for(var a=[],c=0;c<b.length;c++)a.push(z(b[c],d));return K.handlesGroup(a)};g.screenToRenderPlane=A;g.screenToMapXY=C;g.screenToMapXYAtLocation=D;g.screenToMapXYForGraphicAtLocation=E;g.screenToMapXYForGraphic=function(b,d,a,c){b=d.toMap(b.screenStart,{include:[a]});return h.isSome(b)?E(d,
a,b,c):null};g.screenToZConstrained=function(b,d,a){var c=null,e=new r;e.next(A(b,O(b,d))).next(I(b,d)).next(J(b,a)).next(function(a){a.mapEnd.x=a.mapStart.x;a.mapEnd.y=a.mapStart.y;c=a});return function(a){c=null;e.execute(a);return c}};g.constrainToMapAxis=function(b,d){var a=[b.x,b.y,b.z],c=[Math.cos(d),Math.sin(d)];b=Math.sqrt(c[0]*c[0]+c[1]*c[1]);if(0===b)return null;c[0]/=b;c[1]/=b;var e=function(b){var d=(b.x-a[0])*c[0]+(b.y-a[1])*c[1];b.x=a[0]+d*c[0];b.y=a[1]+d*c[1]};return function(a){e(a.mapStart);
e(a.mapEnd);return a}};g.dragGeometry=F;g.dragGraphic=G;g.dragGraphicMany=function(b){var d=b.map(function(a){return h.unwrap(G(a))}).filter(function(a){return h.isSome(a)});return function(a){var b=a.mapEnd.x-a.mapStart.x,e=a.mapEnd.y-a.mapStart.y,f=a.mapEnd.z-a.mapStart.z;d.forEach(function(b){return b(a)});return m({},a,{translationX:b,translationY:e,translationZ:f})}};g.resetGraphic=H;g.resetGraphicMany=function(b){var d=b.map(function(a){return h.unwrap(H(a))}).filter(function(a){return h.isSome(a)});
return function(a){d.forEach(function(b){return b(a)});return a}};g.resetSymbol=function(b){var d=h.isSome(b.symbol)?b.symbol.clone():null;return function(a){b.symbol=d;return a}};g.horizontalDegreesOfFreedom=3;g.verticalDegreesOfFreedom=4;g.allDegreesOfFreedom=7;g.addMapDelta=function(b){void 0===b&&(b=g.allDegreesOfFreedom);var d=0,a=0,c=0;return function(e){"start"===e.action&&(d=e.mapStart.x,a=e.mapStart.y,c=e.mapStart.z);var f=b&1?e.mapEnd.x-d:0,g=b&2?e.mapEnd.y-a:0,h=b&4?e.mapEnd.z-c:0;d=e.mapEnd.x;
a=e.mapEnd.y;c=e.mapEnd.z;return m({},e,{mapDeltaX:f,mapDeltaY:g,mapDeltaZ:h,mapDeltaSpatialReference:e.mapStart.spatialReference})}};g.addScreenDelta=function(b){void 0===b&&(b=g.allDegreesOfFreedom);var d=0,a=0;return function(c){"start"===c.action&&(d=c.screenStart.x,a=c.screenStart.y);var e=b&1?c.screenEnd.x-d:0,f=b&2?c.screenEnd.y-a:0;d=c.screenEnd.x;a=c.screenEnd.y;return m({},c,{screenDeltaX:e,screenDeltaY:f})}};g.dragAtLocation=function(b,d){var a=null,c=0,e=0;return function(f){"start"===
f.action&&(a=b.toScreen(d),0>a.x||a.x>b.width||0>a.y||a.y>b.height?a=null:(c=f.screenStart.x-a.x,e=f.screenStart.y-a.y));if(null==a)return null;var g=v.clamp(f.screenEnd.x-c,0,b.width),h=v.clamp(f.screenEnd.y-e,0,b.height),g=n.createScreenPoint(g,h);f.screenStart=a;f.screenEnd=g;return f}};g.projectToWorldUp=I;g.convertToMapCoordinates=J;var r=function(){function b(){this.execute=function(){}}b.prototype.next=function(d,a){void 0===a&&(a=new b);h.isSome(d)&&(this.execute=function(b){b=d(b);h.isSome(b)&&
a.execute(b)});return a};return b}();g.EventPipeline=r;var P=p.vec3f64.create(),Q=p.vec3f64.create(),B=q.ray.create()});