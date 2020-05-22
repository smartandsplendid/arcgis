// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/assignHelper ../../core/arrayUtils ../../core/compilerUtils ../../core/maybe ../../core/promiseUtils ../../core/screenUtils ../../core/accessorSupport/diffUtils ../../layers/support/fieldUtils ../../renderers/support/clickToleranceUtils ../../renderers/support/utils ../../renderers/visualVariables/support/sizeVariableUtils ../../renderers/visualVariables/support/visualVariableUtils ../../symbols/support/symbolConversion ../../symbols/support/symbolLayerUtils ../../symbols/support/symbolUtils ../../views/support/drapedUtils".split(" "),
function(R,h,n,p,B,C,y,w,r,u,D,z,E,F,G,H,I,A,J,K){function L(a,d){var c="heading"===(a.axis||"heading")&&"arithmetic"===a.rotationType?-1:1,b=a.field,e=(a=d.fields&&d.fields.filter(function(a){return a.name===b}))&&1===a.length?a[0].type:"double",f=0,g=0;return{field:b,getDefault:function(){return r.resolve(0)},getValue:function(a){g=f-c*a;return t((g+360)%360,e)},initValue:function(a){f=null!=a?a:g;g=0},isUpdatingInteractively:!1}}function M(a,d){switch(d){case "width":return a[0];case "depth":return a[1];
case "height":return a[2];default:return a[2]||a[1]||a[0]}}function N(a,d,c){return p(this,void 0,void 0,function(){var b,e,f,g,m,q,k,l;return n(this,function(v){switch(v.label){case 0:if(w.isNone(d))return[2,0];b=I.to3D(d).symbol;if(w.isNone(b)||"web-style"===b.type)return[2,0];e=b.symbolLayers.getItemAt(0);if(!e)return[2,0];f=e.type;switch(f){case "icon":return[3,1];case "text":return[3,4];case "line":return[3,5];case "object":return[3,6];case "path":return[3,8];case "extrude":return[3,8];case "fill":return[3,
9];case "water":return[3,9]}return[3,10];case 1:if(g=e.size)return[3,3];q=(m=Math).min;k=[h.sizeDefaults.icon];return[4,A.computeIconLayerResourceSize(e,h.sizeDefaults.icon)];case 2:g=q.apply(m,k.concat([v.sent()[0]])),v.label=3;case 3:return[2,g||h.sizeDefaults.icon];case 4:return[2,e.size||h.sizeDefaults.text];case 5:return[2,e.size||h.sizeDefaults.line];case 6:return[4,A.computeObjectLayerResourceSize(e,a.scale/h.sizeDefaults.viewScaleSizeFactor)];case 7:return l=v.sent(),[2,M(l,c)];case 8:return[2,
e.size||a.scale/h.sizeDefaults.viewScaleSizeFactor];case 9:return[2,0];case 10:return y.neverReached(e),[2,0]}})})}function O(a,d){var c=this,b=a.field,e=a.axis,f=(d=d.fields&&d.fields.filter(function(a){return a.name===b}))&&1===d.length?d[0].type:"double",g=0,m=0,q=F.meterIn[a.valueUnit],k;k="area"===a.valueRepresentation?function(a){return Math.pow(a*q/2,2)*Math.PI}:"radius"===a.valueRepresentation||"distance"===a.valueRepresentation?function(a){return a*q/2}:function(a){return a*q};return{field:b,
getDefault:function(a,g){return p(c,void 0,void 0,function(){var b,d;return n(this,function(c){switch(c.label){case 0:return b=t,d=k,[4,N(g,a,e)];case 1:return[2,b.apply(void 0,[d.apply(void 0,[c.sent()]),f])]}})})},getValue:function(a,b){g||(g=b.pixelSizeAt(b.center));m=g*a;return t(m,f)},initValue:function(a){g=null!=a?a:m;m=0},isUpdatingInteractively:!1}}function t(a,d){switch(d){case "small-integer":case "integer":case "long":return Math.round(a);case "double":case "single":return a;default:return 0}}
function x(a){return p(this,void 0,void 0,function(){var d,c;return n(this,function(b){switch(b.label){case 0:return[4,J.getDisplayedSymbol(a,{ignoreGraphicSymbol:!0})];case 1:return d=b.sent(),c=D.diff(a.symbol,d),w.isSome(c)&&(a.symbol=d),[2]}})})}function P(a,d,c){return p(this,void 0,void 0,function(){var b,e;return n(this,function(f){switch(f.label){case 0:return 0===a.length?[2,[]]:[4,d.hitTest(c)];case 1:b=f.sent();if(0===b.results.length)return[2,[]];e=new Map;b.results.forEach(function(a){a=
a.graphic;var b=a.layer;e.has(b)||e.set(b,[]);e.get(b).push(a)});return[2,r.eachAlways(a.items.filter(function(a){var b=a.layer;return-1<a.supports.indexOf("update")&&e.has(b)}).map(function(a){a=a.layer;var b=a.displayField,d=[a.objectIdField];z.hasField(a.fields,b)&&d.push(b);b=e.get(a);if(b.some(function(a){return d.some(function(b){return!(b in a.attributes)})})){var c=a.createQuery();c.outFields=d;c.returnGeometry=!1;c.objectIds=b.map(function(a){return a.getObjectId()});return a.queryFeatures(c).then(function(a){return a.features})}return r.resolve(b)}))]}})})}
function Q(a,d,c){return p(this,void 0,void 0,function(){var b,e;return n(this,function(f){switch(f.label){case 0:return 0===a.length?[2,[]]:[4,d.hitTest(c)];case 1:b=f.sent();if(0===b.results.length)return[2,[]];e=new Set;b.results.forEach(function(a){return e.add(a.graphic.layer)});return[2,r.eachAlways(a.items.filter(function(a){var b=a.layer;return-1<a.supports.indexOf("update")&&e.has(b)}).map(function(a){a=a.layer;var b=a.displayField,e=[a.objectIdField];z.hasField(a.fields,b)&&e.push(b);b=
a.createQuery();b.outFields=e;b.returnGeometry=!1;e=E.calculateTolerance({renderer:a.renderer,event:c});b.geometry=K.createQueryGeometry(c.mapPoint,e,d);return a.queryFeatures(b).then(function(a){return a.features})}))]}})})}Object.defineProperty(h,"__esModule",{value:!0});h.getVisualVariableAttributes=function(a){var d=a.layer,c;a:switch(d.renderer.type){case "class-breaks":case "simple":case "unique-value":case "dot-density":case "dictionary":c=!0;break a;default:c=!1}var b=(a=c&&H.getVisualVariableValues(d.renderer,
a))?a.map(function(a){return a.variable}):[];c=b.filter(function(a){return"rotation"===a.type&&(!a.axis||"heading"===a.axis)});a=c[0];c=1===c.length&&a.field&&!a.valueExpression;var e=b.filter(function(a){return"size"===a.type}),b=e[0],e=1===e.length&&"real-world-size"===G.getTransformationType(b)&&b.field&&!b.useSymbolValue&&!b.valueExpression;return{rotation:c&&L(a,d),size:e&&O(b,d)}};h.setUpFeatureAdd=function(a,d,c,b,e){var f=this,g=d.layer;a.layer.elevationInfo=g.elevationInfo;a.create(g.geometryType,
{hasZ:g.capabilities.data.supportsZ});var h=a.on("create",function(c){var k=c.state,l=c.graphic;return p(f,void 0,void 0,function(){var c;return n(this,function(f){switch(f.label){case 0:if("cancel"===k)return e(),[2];if("complete"!==k)return[3,2];c=l.clone();c.attributes=B({},d.template.prototype.attributes);c.layer=g;a.layer.remove(l);return[4,x(c)];case 1:f.sent(),b(c),f.label=2;case 2:return[2]}})})});c.map.add(a.layer);return{remove:function(){h.remove();c.map.remove(a.layer);a.cancel()}}};h.findLayerInfo=
function(a,d){return a&&C.find(a,function(a){return a.layer===d})};h.fetchCandidates=function(a,d,c){return p(this,void 0,void 0,function(){return n(this,function(b){switch(d.type){case "3d":return[2,P(a,d,c)];case "2d":return[2,Q(a,d,c)];default:return y.neverReached(d),[2,null]}})})};h.fetchFullFeature=function(a,d,c){var b=a.layer,e=b.createQuery();e.objectIds=[a.getAttribute(b.objectIdField)];e.outFields=["*"];e.outSpatialReference=d.spatialReference;e.returnM=b.capabilities.data.supportsM;e.returnZ=
b.capabilities.data.supportsZ;return b.queryFeatures(e,c).then(function(a){return a.features[0]})};h.setUpGeometryUpdate=function(a,d,c,b,e){return p(this,void 0,void 0,function(){var f,g,h,q,k,l,v,r,w,u,t=this;return n(this,function(m){switch(m.label){case 0:return f=a.clone(),[4,x(f)];case 1:return m.sent(),c.layer.add(f),f.sourceLayer=a.layer,g=function(){var c=a.layer;if("graphics"===c.type)return{remove:function(){}};var d=a.attributes[c.objectIdField],e=b.whenLayerView(c);e.then(function(a){return a.setVisibility(d,
!1)});return{remove:function(){e.then(function(a){return a.setVisibility(d,!0)})}}},h=g(),q=a.layer,k=d.size,l=d.rotation,v={multipleSelectionEnabled:!1},"point"===q.geometryType&&(v.enableRotation=!!l,v.enableScaling=!!k),c.layer.elevationInfo=q.elevationInfo,c.update(f,v),r=(!!k||!!l)&&a.watch("attributes",function(a){return p(t,void 0,void 0,function(){var c,d,e;return n(this,function(g){switch(g.label){case 0:c=!1;for(d in a)e=a[d],e!==f.attributes[d]&&(f.setAttribute(d,e),c=!0,k&&!k.isUpdatingInteractively&&
k.field===d&&k.initValue(e),l&&!l.isUpdatingInteractively&&l.field===d&&l.initValue(e));return c&&"3d"===b.type?[4,x(f)]:[3,2];case 1:g.sent(),g.label=2;case 2:return[2]}})})}),[l,k].forEach(function(c){return p(t,void 0,void 0,function(){var d,e;return n(this,function(g){switch(g.label){case 0:if(!c)return[2];d=a.attributes[c.field];if(null==d)return[3,1];c.initValue(d);return[3,4];case 1:return[4,c.getDefault(f.symbol,b)];case 2:return e=g.sent(),c.initValue(e),f.setAttribute(c.field,e),"3d"!==
b.type?[3,4]:[4,x(f)];case 3:g.sent(),g.label=4;case 4:return[2]}})})}),w=c.on("update",function(a){return p(t,void 0,void 0,function(){var d,g,h,p,m,q,r,u,t;return n(this,function(n){switch(n.label){case 0:d=a.graphics[0];g=a.state;h=a.aborted;p=a.toolEventInfo;if("complete"===g&&h)return c.update(d,v),[2];m=p;l&&m&&(q=l.field,r=l.getValue,u=l.initValue,"rotate-stop"===m.type?(l.isUpdatingInteractively=!1,u()):null!=m.angle&&(l.isUpdatingInteractively=!0,f.attributes[q]=r(m.angle/Math.PI*180,b)));
t=p;k&&t&&(q=k.field,r=k.getValue,u=k.initValue,"scale-stop"===t.type?(k.isUpdatingInteractively=!1,u()):null!=t.xScale&&(k.isUpdatingInteractively=!0,f.attributes[q]=r(t.xScale,b)));return"3d"!==b.type?[3,2]:[4,x(f)];case 1:n.sent(),n.label=2;case 2:return e(d.clone()),[2]}})})}),b.map.add(c.layer),u=function(){},[2,{interactive:{remove:function(){w.remove();c.cancel();r&&r.remove();this.remove=u}},visual:{remove:function(){h.remove();b.map.remove(c.layer);c.layer.removeAll();this.remove=u}}}]}})})};
h.sizeDefaults={icon:u.px2pt(24),text:u.px2pt(12),line:u.px2pt(1),viewScaleSizeFactor:100}});