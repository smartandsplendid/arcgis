// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/arrayUtils ../../../../../core/mathUtils ../../../../../core/promiseUtils ../../../../../core/typedArrayUtil ../../../../../core/workers ../../../../../core/libs/gl-matrix-2/mat3 ../../../../../core/libs/gl-matrix-2/mat3f64 ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../support/buffer/utils ../../core/shaderLibrary/attributes/VertexPosition.glsl ../../core/util/TwoVectorPosition ../GridLocalOriginFactory ../localOriginHelper ../LocalOriginManager ../Object3D ../TextureBackedBuffer/BufferManager ./bufferLayouts ./edgeBufferWriters ./EdgeProcessingWorker ./EdgeRenderer ./strokes ./util ../../../../webgl/BufferObject ../../../../webgl/VertexArrayObject".split(" "),
function(I,J,ea,n,A,Q,K,E,R,S,D,L,T,M,B,F,U,V,W,X,Y,Z,N,aa,w,O,ba,y,ca,t,G,P){function da(d){for(var a=null,c=null,b=0;b<d.geometries.length;b++){var e=d.geometryRecords[b];if(e.material.supportsEdges){if(!a)a=e.transformation;else if(!Q.equals(a,e.transformation))return!1;if(!c&&e.origin)c=e;else if(c&&e.origin&&c.origin.id!==e.origin.id)return!1}}return!0}Object.defineProperty(J,"__esModule",{value:!0});I=function(){function d(a,c,b){this.rctx=a;this.techniqueRepository=c;this.callbacks=b;this.profilingCallback=
null;this.perObjectData=new Map;this.renderers=new Map;this.localOrigins=new Z.LocalOriginManager(new X);this.gpuMemoryUsage=this.numberOfRenderedEdges=0;this.worker=new ba;this.workerThread=null;this.destroyed=!1;this.tmpModelPosition=F.vec3f64.create();this.tmpCameraPosition=F.vec3f64.create();this.componentColorManager=new aa.BufferManager(this.rctx,2)}d.prototype.initialize=function(){var a=this;S.open("EdgeProcessingWorker").then(function(b){a.destroyed?b.close():a.workerThread=b});for(var c=
w.VertexLayout.createBuffer(4),b=0;4>b;b++)c.sideness.set(b,0,0===b||3===b?0:1),c.sideness.set(b,1,0===b||1===b?0:1);this.verticesBufferObject=G.createVertex(this.rctx,35044,c.buffer)};d.prototype.destroy=function(){this.destroyed||(this.workerThread&&(this.workerThread.close(),this.workerThread=null),this.verticesBufferObject&&(this.verticesBufferObject.dispose(),this.verticesBufferObject=null),this.perObjectData.clear(),this.renderers.clear(),this.destroyed=!0)};d.prototype.getUsedMemory=function(){return this.gpuMemoryUsage};
Object.defineProperty(d.prototype,"numberOfRenderedPrimitives",{get:function(){return this.numberOfRenderedEdges},enumerable:!0,configurable:!0});d.prototype.shouldRender=function(){return 0<this.renderers.size};d.prototype.addComponentObject=function(a,c,b,e,g,k,x,d){return n(this,void 0,void 0,function(){var h,f;return A(this,function(l){switch(l.label){case 0:if(this.hasObject(a))return[2];f={loaded:E.create(function(a){return h=a}),renderables:[],center:b};this.perObjectData.set(a,f);return[4,
this.addComponentGeometry(c,f,e,g,k,x,d)];case 1:return l.sent(),this.callbacks.setNeedsRender(),h(),[2]}})})};d.prototype.addOrUpdateObject=function(a,c,b,e,g){return n(this,void 0,void 0,function(){var k,x,d,h,f,l,q,m,u=this;return A(this,function(p){switch(p.label){case 0:k=[];d={loaded:E.create(function(a){return x=a}),renderables:[]};h=this.perObjectData.get(a);this.perObjectData.set(a,d);if(g&&g.mergeGeometries&&1<a.geometries.length&&da(a))k.push(this.addObjectMergedGeometries(a,d,c,b));else for(f=
0;f<a.geometries.length;f++)l=a.geometries[f],q=a.geometryRecords[f],m=q.material,m.supportsEdges&&k.push(this.addGeometryData(a,d,l.data,q,c[0],b,e));return[4,E.all(k)];case 1:return p.sent(),h&&h.loaded.then(function(){h.renderables.forEach(function(a){return u.removeRenderable(a)});u.callbacks.setNeedsRender()}),this.callbacks.setNeedsRender(),x(),[2]}})})};d.prototype.hasObject=function(a){return this.perObjectData.has(a)};d.prototype.updateAllComponentOpacities=function(a,c){return n(this,void 0,
void 0,function(){var b,e,g=this;return A(this,function(k){switch(k.label){case 0:return b=c instanceof Array?function(a){return c[a]}:function(){return c},[4,this.getObjectEntry(a)];case 1:return e=k.sent(),e.renderables.forEach(function(a){for(var c=a.components.meta.length,e=0;e<c;e++){var f=b(e),k=a.components.meta[e],d=k.index;k.material.opacity=f;a.components.buffer.textureBuffer.setDataElement(d,1,3,255*f)}g.updateTransparency(a)}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.updateAllComponentMaterials=
function(a,c,b,e){return n(this,void 0,void 0,function(){var g,k,d,p,h,f=this;return A(this,function(l){switch(l.label){case 0:return g=a instanceof N,k=!!b.slicePlaneEnabled,d=t.determineRendererType(c),p=y.EdgeRenderer.getKey(d,k,g),[4,this.getObjectEntry(a)];case 1:return h=l.sent(),h.renderables.forEach(function(b){if(p!==b.rendererKey){var g=f.renderers.get(b.rendererKey),h=f.acquireRenderer(d,k,a instanceof N);g.removeRenderable(b);g.refCount.decrement();b.rendererKey=p;h.addRenderable(b)}for(g=
0;g<c.length;g++)b.components.meta[g].material=c[g];e&&f.updateComponentBuffer(b.components);f.updateTransparency(b)}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.updateObjectVisibility=function(a,c){return n(this,void 0,void 0,function(){var b;return A(this,function(e){switch(e.label){case 0:return[4,this.getObjectEntry(a)];case 1:return b=e.sent(),b.renderables.forEach(function(a){return a.visible=c}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.removeObject=function(a){var c=
this,b=this.perObjectData.get(a);b&&(this.perObjectData.delete(a),b.loaded.then(function(){b.renderables.forEach(function(a){return c.removeRenderable(a)});c.callbacks.setNeedsRender()}))};d.prototype.getObjectEntry=function(a){return n(this,void 0,void 0,function(){var c;return A(this,function(b){switch(b.label){case 0:c=this.perObjectData.get(a);if(!c)throw"no object";return[4,c.loaded];case 1:return b.sent(),[2,c]}})})};d.prototype.removeAll=function(){var a=this;this.perObjectData.forEach(function(c,
b){a.removeObject(b)})};d.prototype.render=function(a,c){var b=this;this.localOrigins.updateViewMatrices(a.view);var e=a.viewInvTransp,g=F.vec3f64.create(),k=new W.TwoVectorPosition,d=new V.VertexPosition.ViewProjectionTransform,p=L.mat3f64.create();B.vec3.set(g,e[3],e[7],e[11]);k.set(g);B.vec3.copy(d.worldFromView_TH,k.high);B.vec3.copy(d.worldFromView_TL,k.low);D.mat3.fromMat4(d.viewFromCameraRelative_RS,a.view);T.mat4.copy(d.projFromView,a.proj);e=L.mat3f64.create();D.mat3.transpose(e,d.viewFromCameraRelative_RS);
D.mat3.invert(p,e);this.renderers.forEach(function(a){0===a.refCount.value&&(b.renderers.delete(a.key),a.dispose())});this.componentColorManager.garbageCollect();this.componentColorManager.updateTextures();var h=0,f=0;this.renderers.forEach(function(a){return a.forEachRenderable(function(a){h+=a.statistics.averageEdgeLength;f++},c)});if(0!==f){var e=a.view,g=40*h/f,k=t.estimateLengthAtDistance(a.viewport[3],a.fovY,1,3.5*a.pixelRatio),l={distanceFalloffFactor:g,minimumEdgeLength:k,transparency:c,viewProjectionTransform:d,
transformNormal_ViewFromGlobal:p};this.updateObjectCameraDistances(a);this.numberOfRenderedEdges=0;this.renderers.forEach(function(c){b.renderRegularEdges(c,a,l);b.renderSilhouetteEdges(c,a,l)});a.view=e}};d.prototype.updateTransparency=function(a){var c=t.determineEdgeTransparency(a.components.meta),b=t.determineObjectTransparency(a.components.meta);if(c!==a.edgeTransparency||b!==a.objectTransparency)a.edgeTransparency=c,a.objectTransparency=b,this.renderers.get(a.rendererKey).setRenderablesDirty()};
d.prototype.computeModelTransformWithLocalOrigin=function(a,c,b){a.getCombinedStaticTransformation(c,b);c.origin?this.localOrigins.register(c.origin):(a=B.vec3.set(this.tmpModelPosition,b[12],b[13],b[14]),c.origin=this.localOrigins.acquire(a));Y.applyToModelMatrix(c.origin.vec3,b);return b};d.prototype.updateComponentBuffer=function(a){var c=a.meta;a=a.buffer;for(var b=0;b<c.length;b++){var e=c[b].material,g=c[b].index,d=K.clamp(Math.round(e.size*y.LINE_WIDTH_FRACTION_FACTOR),0,255),x=K.clamp(e.extensionLength,
-y.EXTENSION_LENGTH_OFFSET,255-y.EXTENSION_LENGTH_OFFSET)+y.EXTENSION_LENGTH_OFFSET,p="solid"===e.type?0:1,h=255*e.opacity,e=e.color;a.textureBuffer.setData(g,0,255*e[0],255*e[1],255*e[2],255*e[3]);a.textureBuffer.setData(g,1,d,x,p,h)}};d.prototype.createComponentBuffers=function(a){for(var c=[],b=this.componentColorManager.getBuffer(a.length),e=0;e<a.length;e++){var g=a[e],d=b.acquireIndex();c.push({index:d,material:g})}a={meta:c,buffer:b};this.updateComponentBuffer(a);return a};d.prototype.extractEdges=
function(a,c,b,e,g){return this.worker.process({data:c,originalIndices:g,writerSettings:a,skipDeduplicate:b},e?null:this.workerThread)};d.prototype.createEdgeResources=function(a){var c={};if(0<a.regular.lodInfo.lengths.length){var b=new P(this.rctx,w.EdgeShaderAttributeLocations,{vertices:w.glVertexLayout,instances:O.RegularEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:G.createVertex(this.rctx,35044,a.regular.instancesData.buffer)});c.regular={vao:b,lod:a.regular.lodInfo}}0<
a.silhouette.lodInfo.lengths.length&&(b=new P(this.rctx,w.EdgeShaderAttributeLocations,{vertices:w.glVertexLayout,instances:O.SilhouetteEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:G.createVertex(this.rctx,35044,a.silhouette.instancesData.buffer)}),c.silhouette={vao:b,lod:a.silhouette.lodInfo});return c};d.prototype.addGeometryData=function(a,c,b,e,g,d,x){return n(this,void 0,void 0,function(){var k,h,f,l;return A(this,function(p){k=b.getAttribute("position");h=this.computeModelTransformWithLocalOrigin(a,
e,M.mat4f64.create());f=e.origin;l={position:k,indices:b.getIndices("position"),modelTransform:h,origin:f};return[2,this.addPositionData(c,l,g,d,x)]})})};d.prototype.addPositionData=function(a,c,b,e,g){void 0===g&&(g=!1);return n(this,void 0,void 0,function(){var d,x,p,h,f,l,q,m,u,v,H,z,r,C,n;return A(this,function(k){switch(k.label){case 0:d=this.acquireRenderer(b.type,e.slicePlaneEnabled||!1);x=c.modelTransform;p=c.origin;h=c.indices;f=c.position;l=f.data.length/f.strideIdx;q=w.EdgeInputBufferLayout.createBuffer(l);
for(m=0;m<l;m++)q.position.set(m,0,f.data[f.offsetIdx+m*f.strideIdx+0]),q.position.set(m,1,f.data[f.offsetIdx+m*f.strideIdx+1]),q.position.set(m,2,f.data[f.offsetIdx+m*f.strideIdx+2]);u=this.createComponentBuffers([b]);t.fillComponenBufferIndices(u.meta,[0,q.componentIndex.count],q.componentIndex);return[4,this.extractEdges(d.writerSettings,q,!1,g,h)];case 1:return v=k.sent(),H=this.createEdgeResources(v),z=H.regular,r=H.silhouette,C=(z?z.vao.size:0)+(r?r.vao.size:0),n={regular:z,silhouette:r,transform:{modelMatrix:x,
origin:p},statistics:{gpuMemoryUsage:C,averageEdgeLength:v.averageEdgeLength},components:u,visible:!0,edgeTransparency:t.determineEdgeTransparency(u.meta),objectTransparency:t.determineObjectTransparency(u.meta),distanceToCamera:0,rendererKey:d.key},a.renderables.push(n),d.addRenderable(n),this.gpuMemoryUsage+=C,[2]}})})};d.prototype.addComponentGeometry=function(a,c,b,e,d,k,x){return n(this,void 0,void 0,function(){var g,h,f,l,q,m,u,v,n,z,r;return A(this,function(p){switch(p.label){case 0:return g=
t.determineRendererType(k),h=this.acquireRenderer(g,x.slicePlaneEnabled||!1,!1),f=w.EdgeInputBufferLayout.createBuffer(b.count),U.vec3.copy(f.position,b),l=this.createComponentBuffers(k),t.fillComponenBufferIndices(l.meta,d,f.componentIndex,e),q=h.writerSettings,[4,this.extractEdges(q,f,!0,!1,e)];case 1:return m=p.sent(),u=this.createEdgeResources(m),v=u.regular,n=u.silhouette,z=(v?v.vao.size:0)+(n?n.vao.size:0),r={regular:v,silhouette:n,transform:a,statistics:{gpuMemoryUsage:z,averageEdgeLength:m.averageEdgeLength},
components:l,visible:!0,edgeTransparency:t.determineEdgeTransparency(l.meta),objectTransparency:t.determineObjectTransparency(l.meta),distanceToCamera:0,rendererKey:h.key},c.renderables.push(r),h.addRenderable(r),this.gpuMemoryUsage+=z,[2]}})})};d.prototype.addObjectMergedGeometries=function(a,c,b,e){return n(this,void 0,void 0,function(){var d,k,n,p,h,f,l,q,m,u,v,t,z,r,C,w,y,B,E,D,F;return A(this,function(g){switch(g.label){case 0:d=new Map;k=0;p=n=null;for(h=0;h<a.geometries.length;h++)if(f=a.geometries[h],
l=a.geometryRecords[h],q=l.material,q.supportsEdges&&(!p&&l.origin&&(p=l),m=f.data.getIndices("position"),k+=m?m.length:0,m&&null==n||n===Uint16Array))n=R.isUint16Array(m)?Uint16Array:Uint32Array;u=k?new n(k):null;v=[];for(h=t=0;h<a.geometries.length;h++)if(f=a.geometries[h],z=a.geometryRecords[h],q=z.material,q.supportsEdges){r=f.data.getAttribute("position");m=f.data.getIndices("position");C=d.get(r.data);if(null==C){C=v.length/3;for(w=r.offsetIdx;w<r.data.length;w+=r.strideIdx)v.push(r.data[w+
0]),v.push(r.data[w+1]),v.push(r.data[w+2]);d.set(r.data,C)}if(m)for(y=0;y<m.length;y++)u[t++]=C+m[y]}B=p||a.geometryRecords[0];E=this.computeModelTransformWithLocalOrigin(a,B,M.mat4f64.create());D=B.origin;for(h=0;h<a.geometryRecords.length;h++)a.geometryRecords[h].origin=D;F={position:{data:v,offsetIdx:0,strideIdx:3},indices:u,modelTransform:E,origin:D};return[4,this.addPositionData(c,F,b[0],e)];case 1:return g.sent(),[2]}})})};d.prototype.acquireRenderer=function(a,c,b){void 0===b&&(b=!0);var e=
y.EdgeRenderer.getKey(a,c,b),d=this.renderers.get(e);this.strokesTexture||(this.strokesTexture=ca.generateStrokesTexture(this.rctx));d||(d=new y.EdgeRenderer(this.rctx,this.techniqueRepository,{type:a,slicePlaneEnabled:c,strokesTexture:this.strokesTexture,legacy:b}),this.renderers.set(e,d));d.refCount.increment();return d};d.prototype.removeRenderable=function(a){var c=this.renderers.get(a.rendererKey);if(c){c.removeRenderable(a);c.refCount.decrement();a.regular&&(a.regular.vao.vertexBuffers.instances.dispose(),
a.regular.vao.dispose(!1),a.regular.vao=null);a.silhouette&&(a.silhouette.vao.vertexBuffers.instances.dispose(),a.silhouette.vao.dispose(!1),a.silhouette.vao=null);"origin"in a.transform&&this.localOrigins.release(a.transform.origin);this.gpuMemoryUsage-=a.statistics.gpuMemoryUsage;for(var c=0,b=a.components.meta;c<b.length;c++)a.components.buffer.releaseIndex(b[c].index)}};d.prototype.updateObjectCameraDistances=function(a){var c=this;a=a.viewInvTransp;B.vec3.set(this.tmpCameraPosition,a[3],a[7],
a[11]);this.perObjectData.forEach(function(a,d){d="getCenter"in d?d.getCenter():a.center;var b=B.vec3.distance(d,c.tmpCameraPosition);a.renderables.forEach(function(a){return a.distanceToCamera=b})})};d.prototype.renderRegularEdges=function(a,c,b){var d=this;a.bindRegularEdges(c,b);a.forEachRenderable(function(e){if(e.visible&&e.regular){var g=t.computeEdgeCount(e.regular.lod.lengths,e.distanceToCamera,b);"origin"in e.transform&&(c.view=d.localOrigins.getViewMatrix(e.transform.origin));a.renderRegularEdges(e,
c,g);d.numberOfRenderedEdges+=g}},b.transparency)};d.prototype.renderSilhouetteEdges=function(a,c,b){var d=this;a.bindSilhouetteEdges(c,b);a.forEachRenderable(function(e){if(e.visible&&e.silhouette){var g=t.computeEdgeCount(e.silhouette.lod.lengths,e.distanceToCamera,b);"origin"in e.transform&&(c.view=d.localOrigins.getViewMatrix(e.transform.origin));a.renderSilhouetteEdges(e,c,g);d.numberOfRenderedEdges+=g}},b.transparency)};return d}();J.EdgeView=I});