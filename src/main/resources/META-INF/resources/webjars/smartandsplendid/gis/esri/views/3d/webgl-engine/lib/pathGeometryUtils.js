// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat2 ../../../../core/libs/gl-matrix-2/mat2f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ./GeometryData ./GeometryUtil ./Util ../materials/PathTechnique ../materials/internal/MaterialUtil".split(" "),
function(X,Y,Z,B,C,P,Q,I,M,q,l,e,r,D,E,N,y,u,R){var w;(function(t){function w(){return{up:r.vec3f64.create(),right:r.vec3f64.create()}}t.makeFrame=w;t.profileSpaceToVertexSpace=function(c,a,b){c[0]=b[0]*a.right[0]+b[1]*a.up[0];c[1]=b[0]*a.right[1]+b[1]*a.up[1];c[2]=b[0]*a.right[2]+b[1]*a.up[2]};t.vertexSpaceToProfileSpace=function(c,a,b){q.vec2.set(c,e.vec3.dot(b,a.right),e.vec3.dot(b,a.up))};var k=function(){function c(){this.pos=r.vec3f64.create();this.posES=r.vec3f64.create();this.posGS=r.vec3f64.create();
this.vRight=r.vec3f64.create();this.vLeft=r.vec3f64.create();this.frame=w();this.rotationFrame=w();this.rotationRight=l.vec2f64.create();this.rotationAngle=0;this.miterStretch=Q.mat2f64.create()}c.prototype.setFrameFromUpVector=function(a){e.vec3.copy(this.frame.up,a);e.vec3.add(v,this.vLeft,this.vRight);e.vec3.normalize(v,v);e.vec3.scale(x,this.frame.up,e.vec3.dot(v,this.frame.up));e.vec3.subtract(F,v,x);e.vec3.normalize(F,F);e.vec3.cross(this.frame.right,F,this.frame.up)};c.prototype.computeRotationAxisAndAngleFromUpVector=
function(){e.vec3.copy(this.rotationFrame.up,this.frame.up);e.vec3.copy(this.rotationFrame.right,this.frame.right);q.vec2.set(this.rotationRight,1,0);e.vec3.scale(x,this.frame.up,e.vec3.dot(this.frame.up,this.vLeft));e.vec3.subtract(x,this.vLeft,x);e.vec3.negate(x,x);e.vec3.normalize(x,x);e.vec3.scale(v,this.frame.up,e.vec3.dot(this.frame.up,this.vRight));e.vec3.subtract(v,this.vRight,v);e.vec3.normalize(v,v);e.vec3.cross(J,this.rotationFrame.up,this.vLeft);this.rotationAngle=C.sign(e.vec3.dot(J,
this.vRight))*(Math.PI-C.acosClamped(e.vec3.dot(x,v)));if(0<Math.abs(this.rotationAngle)){var a=C.reciprocalClamped(Math.cos(.5*this.rotationAngle));P.mat2.set(this.miterStretch,1+(a-1),0,0,1)}this.maxStretchDistance=Math.abs(Math.min(this.vLeftLength,this.vRightLength)/Math.cos(.5*(Math.PI-this.rotationAngle)))};return c}();t.PathVertex=k;k=function(){function c(){this.vertices=[];this.vertexIndices=[];this.vertexNormals=[];this.poles=[];this.poleIndices=[];this.uvIndices=this.uvs=null}c.prototype.addVertex=
function(a,b){this.vertices.push(l.vec2f64.clone(a));this.vertexNormals.push(l.vec2f64.clone(b));return this.vertices.length-1};c.prototype.addUV=function(a){this.uvs||(this.uvs=[],this.uvIndices=[]);this.uvs.push(a);return this.uvs.length-1};c.prototype.addPole=function(a,b){void 0===b&&(b=null);this.poles.push({position:l.vec2f64.clone(a),normal:b?l.vec2f64.clone(b):null});return this.poles.length-1};c.prototype.addSegment=function(a,b,f){void 0===b&&(b=null);void 0===f&&(f=null);this.vertexIndices.push(a.v0);
this.vertexIndices.push(a.v1);b&&(this.uvIndices.push(b.v0),this.uvIndices.push(b.v1));f&&(this.poleIndices.push(f.v0),this.poleIndices.push(f.v1))};Object.defineProperty(c.prototype,"numSegments",{get:function(){return this.vertexIndices.length/2},enumerable:!0,configurable:!0});c.prototype.hasUV=function(){return null!=this.uvs};c.prototype.translate=function(a,b){for(var f=0,h=this.vertices;f<h.length;f++){var g=h[f];g[0]+=a;g[1]+=b}f=0;for(h=this.poles;f<h.length;f++)g=h[f],g.position[0]+=a,g.position[1]+=
b};c.circle=function(a){void 0===a&&(a=20);var b=new c,f={v0:0,v1:0};b.addPole(l.vec2f64.fromValues(0,0));for(var h=0;h<a;++h){var g=2*h*Math.PI/a,d=Math.cos(g),e=Math.sin(g),g=l.vec2f64.fromValues(.5*d,.5*e),d=l.vec2f64.fromValues(d,e);b.addVertex(g,d);b.addUV(h/a)}b.addUV(1);for(h=0;h<a-1;++h)d={v0:h,v1:h+1},b.addSegment(d,d,f);b.addSegment({v0:a-1,v1:0},{v0:a-1,v1:a},f);return b};c.rect=function(){var a=new c,b=l.vec2f64.fromValues(-.5,-.5),f=l.vec2f64.fromValues(.5,-.5),h=l.vec2f64.fromValues(.5,
.5),g=l.vec2f64.fromValues(-.5,.5),d=l.vec2f64.fromValues(0,-1),e=l.vec2f64.fromValues(1,0),m=l.vec2f64.fromValues(0,1),n=l.vec2f64.fromValues(-1,0);a.addUV(0);a.addUV(1);a.addPole(l.vec2f64.fromValues(0,.5),m);a.addPole(l.vec2f64.fromValues(0,.5));a.addPole(l.vec2f64.fromValues(0,-.5));a.addPole(l.vec2f64.fromValues(0,-.5),d);var z={v0:0,v1:1};a.addVertex(b,d);a.addVertex(f,d);a.addSegment({v0:0,v1:1},z,{v0:3,v1:3});a.addVertex(f,e);a.addVertex(h,e);a.addSegment({v0:2,v1:3},z,{v0:2,v1:1});a.addVertex(h,
m);a.addVertex(g,m);a.addSegment({v0:4,v1:5},z,{v0:0,v1:0});a.addVertex(g,n);a.addVertex(b,n);a.addSegment({v0:6,v1:7},z,{v0:1,v1:2});return a};return c}();t.Profile=k;k=function(){function c(a){this.vertices=[];this.offset=r.vec3f64.create();this.xform=M.mat4f64.create();this.vertices=a;e.vec3.copy(this.offset,this.vertices[Math.floor((a.length-1)/2)].pos);a=0;for(var b=this.vertices;a<b.length;a++){var f=b[a];e.vec3.subtract(f.pos,f.pos,this.offset)}I.mat4.translate(this.xform,this.xform,this.offset);
this.updatePathVertexInformation()}c.prototype.updatePathVertexInformation=function(){var a=this.vertices.length,b=this.vertices[0];b.index=0;e.vec3.set(b.vLeft,0,0,0);b.vLeftLength=0;e.vec3.subtract(b.vRight,this.vertices[1].pos,b.pos);b.vRightLength=e.vec3.length(b.vRight);e.vec3.normalize(b.vRight,b.vRight);for(var f=b,h=1;h<a;++h)b=this.vertices[h],b.index=h,e.vec3.copy(b.vLeft,f.vRight),b.vLeftLength=f.vRightLength,h<a-1?(e.vec3.subtract(b.vRight,this.vertices[h+1].pos,b.pos),b.vRightLength=
e.vec3.length(b.vRight),e.vec3.normalize(b.vRight,b.vRight)):(e.vec3.copy(b.vRight,b.vLeft),b.vRightLength=b.vLeftLength),f=b};return c}();t.Path=k;t.computeMinimumRotationTangentFrame=function(c,a){var b=null,f=c.vertices.length,h=r.vec3f64.create(),g=r.vec3f64.create(),d=r.vec3f64.create(),G=r.vec3f64.create(),m=r.vec3f64.create(),n=r.vec3f64.create(),z=D.plane.create(),p=c.vertices[0];e.vec3.copy(g,a);e.vec3.set(h,0,1,0);N.makeOrthoBasisDirUpFallback(p.vRight,g,h,h,d,g,.99619469809);e.vec3.copy(p.frame.up,
g);e.vec3.copy(p.frame.right,d);b=p;for(a=1;a<f;++a){p=c.vertices[a];e.vec3.add(m,p.vLeft,p.vRight);var k=e.vec3.length(m);0<k?(k=1/Math.sqrt(k),m[0]*=k,m[1]*=k,m[2]*=k):(m[0]=p.vRight[0],m[1]=p.vRight[1],m[2]=p.vRight[2]);e.vec3.add(n,b.pos,b.frame.up);D.plane.fromPositionAndNormal(p.pos,m,z);D.plane.intersectRay(z,D.ray.wrap(n,p.vLeft),G)?(e.vec3.subtract(G,G,p.pos),e.vec3.normalize(g,G),e.vec3.cross(d,m,g),e.vec3.normalize(d,d)):N.makeOrthoBasisDirUpFallback(m,b.frame.up,b.frame.right,h,d,g,.99619469809);
e.vec3.copy(p.frame.up,g);e.vec3.copy(p.frame.right,d);b=p}};k=function(){return function(){}}();t.Extruder=k;k=function(){function c(){}c.prototype.numProfilesPerJoin=function(){return 1};c.prototype.extrude=function(a,b,f){for(var h=0;h<b.vertices.length;++h)f(a.index,a.frame,b.vertices[h],b.vertexNormals[h],!1)};return c}();t.SimpleExtruder=k;k=function(){function c(a,b){void 0===a&&(a=.8*Math.PI);void 0===b&&(b=1);this.cutoffAngle=a;this.numBendSubdivisions=b}c.prototype.numProfilesPerJoin=function(){return this.numBendSubdivisions+
1};c.prototype.extrude=function(a,b,f){var h=S;if(Math.abs(a.rotationAngle)>=this.cutoffAngle)for(var g=0;g<this.numBendSubdivisions+1;++g){I.mat4.identity(H);I.mat4.rotate(H,H,.5*-a.rotationAngle+g*a.rotationAngle/this.numBendSubdivisions,a.rotationFrame.up);var d=h,c=a.frame,m=H;e.vec3.transformMat4(d.up,c.up,m);e.vec3.transformMat4(d.right,c.right,m);for(d=0;d<b.vertices.length;++d)c=q.vec2.dot(b.vertices[d],a.rotationRight),(c=0<=c*a.rotationAngle)?f(a.index,h,b.vertices[d],b.vertexNormals[d],
!1):(q.vec2.transformMat2(A,b.vertices[d],a.miterStretch),f(a.index,a.frame,A,b.vertexNormals[d],!0))}else for(g=0;g<this.numBendSubdivisions+1;++g)for(d=0;d<b.vertices.length;++d)c=q.vec2.dot(b.vertices[d],a.rotationRight),c=0<=c*a.rotationAngle,q.vec2.transformMat2(A,b.vertices[d],a.miterStretch),f(a.index,a.frame,A,b.vertexNormals[d],c?!1:!0)};return c}();t.MiterExtruder=k;var T={generateUV:!1},k=function(){function c(){}c.prototype.rebuildConnectingProfileGeometry=function(a,b,f){for(var h=0;h<
b.vertices.length;++h)f(a.index,a.frame,b.vertices[h],b.vertexNormals[h],0,0)};return c}();t.CapBuilder=k;var K=function(c){function a(){return c.call(this)||this}B(a,c);a.prototype.getNumVertices=function(){return 0};a.prototype.getNumIndices=function(){return 0};a.prototype.rebuildCapGeometry=function(){};a.prototype.buildTopology=function(){};return a}(k);t.NoCapBuilder=K;K=function(c){function a(b,a,h){void 0===a&&(a=0);void 0===h&&(h=!1);var f=c.call(this)||this;f.profile=b;f.profilePlaneOffset=
a;f.flip=h;return f}B(a,c);a.prototype.getNumVertices=function(){return this.profile.vertices.length};a.prototype.getNumIndices=function(){return 3*this.profile.numSegments};a.prototype.rebuildConnectingProfileGeometry=function(b,a,h){for(var f=0;f<a.vertices.length;++f)h(b.index,b.frame,a.vertices[f],a.vertexNormals[f],this.profilePlaneOffset,0)};a.prototype.rebuildCapGeometry=function(b,a){var f=L;q.vec2.set(f,0,0);for(var g=this.flip?1:-1,d=0;d<this.profile.vertices.length;++d)a(b.index,b.frame,
this.profile.vertices[d],f,this.profilePlaneOffset,g)};a.prototype.buildTopology=function(b,a){b=this.vertexBufferStart+this.profile.vertexIndices[0];for(var f=1;f<this.profile.numSegments;++f){var g=this.vertexBufferStart+this.profile.vertexIndices[2*f+0],d=this.vertexBufferStart+this.profile.vertexIndices[2*f+1];this.flip?a(d,g,b):a(b,g,d)}};return a}(k);t.TriangulationCapBuilder=K;k=function(c){function a(b){var a=c.call(this)||this;a.flip=!1;a.sign=0;a.breakNormals=!1;a.numSegments=3;a.profile=
b.profile;a.flip=b.flip;a.sign=a.flip?1:-1;a.breakNormals=b.breakNormals;a.numSegments=b.subdivisions;return a}B(a,c);a.prototype.getNumVertices=function(){var b=0,b=this.profile.vertices.length*(this.numSegments-1);this.breakNormals&&(b+=this.profile.vertices.length);return b+=this.profile.poles.length};a.prototype.getNumIndices=function(){var b;b=0+2*this.profile.numSegments*(this.numSegments-1);for(var a=0;a<this.profile.numSegments;++a)b=this.profile.poleIndices[this.profile.vertexIndices[2*a+
0]]===this.profile.poleIndices[this.profile.vertexIndices[2*a+1]]?b+1:b+2;return 3*b};a.prototype.rebuildCapGeometry=function(b,a){var f=b.frame,g=.5*this.sign,d=A,c=L;q.vec2.set(c,0,0);for(var e=0;e<this.profile.poles.length;++e){var n=this.profile.poles[e];n.normal?a(b.index,f,n.position,n.normal,g,0):a(b.index,f,n.position,c,g,this.sign)}if(this.breakNormals)for(e=0;e<this.profile.vertices.length;++e)a(b.index,f,this.profile.vertices[e],this.profile.vertexNormals[e],0,0);for(e=0;e<this.numSegments-
1;++e)for(var n=(1-(e+1)/this.numSegments)*Math.PI*.5,k=Math.sin(n),p=Math.cos(n),l=0;l<this.profile.vertices.length;++l)n=this.profile.poles[this.profile.poleIndices[l]],q.vec2.subtract(d,this.profile.vertices[l],n.position),q.vec2.scale(d,d,k),n.normal?(q.vec2.add(d,d,n.position),a(b.index,f,d,n.normal,g*p,0)):(q.vec2.normalize(c,d),q.vec2.scale(c,c,k),q.vec2.add(d,d,n.position),a(b.index,f,d,c,g*p,this.sign*p))};a.prototype.buildTopology=function(b,a){b=this.breakNormals?this.vertexBufferStart+
this.profile.poles.length:this.firstProfileVertexIndex;for(var f=this.breakNormals?this.vertexBufferStart+this.profile.poles.length+this.profile.vertices.length:this.vertexBufferStart+this.profile.poles.length,c=0;c<this.profile.numSegments;++c){for(var d=this.profile.vertexIndices[2*c+0],e=this.profile.vertexIndices[2*c+1],m=this.vertexBufferStart+this.profile.poleIndices[d],n=this.vertexBufferStart+this.profile.poleIndices[e],k=b+d,p=b+e,l=0;l<this.numSegments-1;++l){var q=f+l*this.profile.vertices.length+
d,r=f+l*this.profile.vertices.length+e;this.flip?(a(q,p,k),a(p,q,r)):(a(k,p,q),a(r,q,p));k=q;p=r}this.flip?(a(m,p,k),m!==n&&a(m,n,p)):(a(k,p,m),m!==n&&a(p,n,m))}};return a}(k);t.RoundCapBuilder=k;k=function(){function c(a,b,f,h,c,d){void 0===d&&(d=T);this.options=d;this.numUVTotal=this.numNormalsTotal=this.numVerticesTotal=this.numExtrusionProfiles=this._triangleCount=this._extrusionVertexCount=0;this.profile=b;this.path=a;this.extruder=f;this.startCap=h;this.endCap=c;a=this.path.vertices.length-
2;this.numExtrusionProfiles=f.numProfilesPerJoin()*a+2;this.numNormalsTotal=this.numVerticesTotal=b.vertices.length*this.numExtrusionProfiles;this.startCap.vertexBufferStart=this.numVerticesTotal;b=this.startCap.getNumVertices();this.numVerticesTotal+=b;this.numNormalsTotal+=b;this.endCap.vertexBufferStart=this.numVerticesTotal;b=this.endCap.getNumVertices();this.numVerticesTotal+=b;this.numNormalsTotal+=b;this.pathVertexData=new Float32Array(1*this.numVerticesTotal);this.profileRightAxisData=new Float32Array(4*
this.numVerticesTotal);this.profileUpAxisData=new Float32Array(4*this.numVerticesTotal);this.profileVertexAndNormalData=new Float32Array(4*this.numVerticesTotal);this.profile.hasUV()&&this.options.generateUV&&(this.numUVTotal=this.profile.uvs.length,this.uvData=new Float32Array(2*this.numUVTotal));this.originData=new Float32Array(3*this.path.vertices.length);this.rebuildGeometry();this.buildTopology()}c.prototype.emitVertex=function(a,b,f,h,c){this.profileRightAxisData[4*this._extrusionVertexCount+
0]=b.right[0];this.profileRightAxisData[4*this._extrusionVertexCount+1]=b.right[1];this.profileRightAxisData[4*this._extrusionVertexCount+2]=b.right[2];this.profileUpAxisData[4*this._extrusionVertexCount+0]=b.up[0];this.profileUpAxisData[4*this._extrusionVertexCount+1]=b.up[1];this.profileUpAxisData[4*this._extrusionVertexCount+2]=b.up[2];this.profileVertexAndNormalData[4*this._extrusionVertexCount+0]=f[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+1]=f[1];this.profileVertexAndNormalData[4*
this._extrusionVertexCount+2]=h[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+3]=h[1];this.pathVertexData[this._extrusionVertexCount]=a;c?(a=this.path.vertices[a],this.profileRightAxisData[4*this._extrusionVertexCount+3]=a.rotationRight[0]*a.maxStretchDistance,this.profileUpAxisData[4*this._extrusionVertexCount+3]=a.rotationRight[1]*a.maxStretchDistance):(this.profileRightAxisData[4*this._extrusionVertexCount+3]=0,this.profileUpAxisData[4*this._extrusionVertexCount+3]=0);++this._extrusionVertexCount};
c.prototype.emitCapVertex=function(a,b,f,c,e,d){this.profileRightAxisData[4*this._extrusionVertexCount+0]=b.right[0];this.profileRightAxisData[4*this._extrusionVertexCount+1]=b.right[1];this.profileRightAxisData[4*this._extrusionVertexCount+2]=b.right[2];this.profileUpAxisData[4*this._extrusionVertexCount+0]=b.up[0];this.profileUpAxisData[4*this._extrusionVertexCount+1]=b.up[1];this.profileUpAxisData[4*this._extrusionVertexCount+2]=b.up[2];this.profileVertexAndNormalData[4*this._extrusionVertexCount+
0]=f[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+1]=f[1];this.profileVertexAndNormalData[4*this._extrusionVertexCount+2]=c[0];this.profileVertexAndNormalData[4*this._extrusionVertexCount+3]=c[1];this.pathVertexData[this._extrusionVertexCount]=a;this.profileRightAxisData[4*this._extrusionVertexCount+3]=e;this.profileUpAxisData[4*this._extrusionVertexCount+3]=d;++this._extrusionVertexCount};c.prototype.emitTriangle=function(a,b,f){this.vertexIndices[3*this._triangleCount+0]=a;this.vertexIndices[3*
this._triangleCount+1]=b;this.vertexIndices[3*this._triangleCount+2]=f;this.pathVertexIndices[3*this._triangleCount+0]=this.pathVertexData[a];this.pathVertexIndices[3*this._triangleCount+1]=this.pathVertexData[b];this.pathVertexIndices[3*this._triangleCount+2]=this.pathVertexData[f];this.normalIndices[3*this._triangleCount+0]=a;this.normalIndices[3*this._triangleCount+1]=b;this.normalIndices[3*this._triangleCount+2]=f;++this._triangleCount};c.prototype.rebuildGeometry=function(){for(var a=this,b=
function(b,f,d,c,e){return a.emitVertex(b,f,d,c,e)},f=function(b,f,d,c,e,h){return a.emitCapVertex(b,f,d,c,e,h)},c=this._extrusionVertexCount=0,e=this.path.vertices;c<e.length;c++){var d=e[c];this.originData[3*d.index+0]=d.pos[0];this.originData[3*d.index+1]=d.pos[1];this.originData[3*d.index+2]=d.pos[2]}this.startCap.rebuildConnectingProfileGeometry(this.path.vertices[0],this.profile,f);for(c=1;c<this.path.vertices.length-1;++c)this.extruder.extrude(this.path.vertices[c],this.profile,b);this.endCap.rebuildConnectingProfileGeometry(this.path.vertices[this.path.vertices.length-
1],this.profile,f);this.startCap.rebuildCapGeometry(this.path.vertices[0],f);this.endCap.rebuildCapGeometry(this.path.vertices[this.path.vertices.length-1],f);if(this.profile.hasUV()&&this.options.generateUV)for(c=0;c<this.profile.uvs.length;++c)this.uvData[2*c+0]=this.profile.uvs[c],this.uvData[2*c+1]=0};c.prototype.buildTopology=function(){var a=this,b=function(b,f,c){return a.emitTriangle(b,f,c)};this._triangleCount=0;var f=this.profile.vertices.length,c=this.profile.numSegments,e=this.numExtrusionProfiles-
1,d=c*e*6;this.startCap.indexBufferStart=d;this.startCap.firstProfileVertexIndex=0;d+=this.startCap.getNumIndices();this.endCap.indexBufferStart=d;this.endCap.firstProfileVertexIndex=f*(this.numExtrusionProfiles-1);d+=this.endCap.getNumIndices();this.vertexIndices=new Uint32Array(d);this.normalIndices=new Uint32Array(d);this.pathVertexIndices=new Uint32Array(d);this.profile.hasUV()&&this.options.generateUV&&(this.uvIndices=new Uint32Array(d));for(d=0;d<c;++d)for(var k=this.profile.vertexIndices[2*
d],m=this.profile.vertexIndices[2*d+1],n=0;n<e;++n){var l=n*f+k,p=(n+1)*f+m,q=n*f+m;b(l,(n+1)*f+k,p);b(l,p,q)}this.startCap.buildTopology(this.path.vertices[0],b);this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],b)};c.prototype.onPathChanged=function(){this.rebuildGeometry()};return c}();t.Builder=k;k=function(){function c(a){this.builder=a}Object.defineProperty(c.prototype,"xform",{get:function(){return this.builder.path.xform},enumerable:!0,configurable:!0});c.prototype.onPathChanged=
function(){this.builder.onPathChanged()};return c}();t.PathGeometry=k;var O=function(c){function a(b){b=c.call(this,b)||this;b.vertexAttributePosition=null;b.vertexAttributeNormal=null;b.vertexAttributeColor=null;b.vertexAttributePosition=new Float32Array(3*b.builder.numVerticesTotal);b.vertexAttributeNormal=new Float32Array(3*b.builder.numNormalsTotal);b.vertexAttributeColor=new Uint8Array(4);b.vertexAttributeColor[0]=255;b.vertexAttributeColor[1]=255;b.vertexAttributeColor[2]=255;b.vertexAttributeColor[3]=
255;return b}B(a,c);a.prototype.bakeVertexColors=function(b){this.vertexAttributeColor[0]=255*b[0];this.vertexAttributeColor[1]=255*b[1];this.vertexAttributeColor[2]=255*b[2];this.vertexAttributeColor[3]=255*(3<b.length?b[3]:1)};a.prototype.bake=function(b){this.size=b;for(var a=0;a<this.builder.numVerticesTotal;++a){var c=this.builder.pathVertexData[a],g=0===c||c===this.builder.path.vertices.length-1,d=U;e.vec3.set(d,this.builder.originData[3*c+0],this.builder.originData[3*c+1],this.builder.originData[3*
c+2]);var k=x,m=A,c=v,n=J,l=V,p=0,r=0;e.vec3.set(n,this.builder.profileRightAxisData[4*a+0],this.builder.profileRightAxisData[4*a+1],this.builder.profileRightAxisData[4*a+2]);e.vec3.set(l,this.builder.profileUpAxisData[4*a+0],this.builder.profileUpAxisData[4*a+1],this.builder.profileUpAxisData[4*a+2]);q.vec2.set(m,this.builder.profileVertexAndNormalData[4*a+0]*b[0],this.builder.profileVertexAndNormalData[4*a+1]*b[1]);if(g)e.vec3.cross(c,l,n),p=this.builder.profileRightAxisData[4*a+3]*b[0],r=this.builder.profileUpAxisData[4*
a+3];else{var g=L,t=W;q.vec2.set(g,this.builder.profileRightAxisData[4*a+3],this.builder.profileUpAxisData[4*a+3]);var u=q.vec2.length(g);q.vec2.normalize(g,g);var w=q.vec2.dot(m,g);if(Math.abs(w)>u){q.vec2.set(t,-g[1],g[0]);var y=q.vec2.dot(m,t);q.vec2.scale(g,g,u*C.sign(w));q.vec2.scale(t,t,y);q.vec2.add(m,g,t)}e.vec3.set(c,0,0,0)}e.vec3.set(k,n[0]*m[0]+l[0]*m[1],n[1]*m[0]+l[1]*m[1],n[2]*m[0]+l[2]*m[1]);this.vertexAttributePosition[3*a+0]=d[0]+k[0]+c[0]*p;this.vertexAttributePosition[3*a+1]=d[1]+
k[1]+c[1]*p;this.vertexAttributePosition[3*a+2]=d[2]+k[2]+c[2]*p;d=A;q.vec2.set(d,this.builder.profileVertexAndNormalData[4*a+2],this.builder.profileVertexAndNormalData[4*a+3]);this.vertexAttributeNormal[3*a+0]=n[0]*d[0]+l[0]*d[1]+c[0]*r;this.vertexAttributeNormal[3*a+1]=n[1]*d[0]+l[1]*d[1]+c[1]*r;this.vertexAttributeNormal[3*a+2]=n[2]*d[0]+l[2]*d[1]+c[2]*r}};a.prototype.createGeometryData=function(){var b={};b[y.VertexAttrConstants.POSITION]=this.builder.vertexIndices;b[y.VertexAttrConstants.NORMAL]=
this.builder.normalIndices;this.vertexAttributeColor&&(b[y.VertexAttrConstants.COLOR]=new Uint32Array(b[y.VertexAttrConstants.POSITION].length));var a={};a[y.VertexAttrConstants.POSITION]={size:3,data:this.vertexAttributePosition};a[y.VertexAttrConstants.NORMAL]={size:3,data:this.vertexAttributeNormal};this.vertexAttributeColor&&(a[y.VertexAttrConstants.COLOR]={size:4,data:this.vertexAttributeColor});return new E.GeometryData(a,b,E.GeometryData.DefaultOffsets,"triangle")};a.prototype.onPathChanged=
function(){c.prototype.onPathChanged.call(this);this.bake(this.size)};a.prototype.intersect=function(a,c,e){var b=this.builder.vertexIndices;R.intersectTriangles(a,c,0,b.length/3,b,{size:3,offsetIdx:0,strideIdx:3,data:this.vertexAttributePosition},void 0,void 0,e)};return a}(k);t.StaticPathGeometry=O;k=function(c){function a(a,f,e,g){var b=c.call(this,a)||this;b.sizeAttributeValue=f;b.colorAttributeValue=e;b.opacityAttributeValue=g;b.vvData=null;b.baked=new O(a);b.vvData=new Float32Array(4*b.builder.path.vertices.length);
for(a=0;a<b.builder.path.vertices.length;++a)b.vvData[4*a+0]=f,b.vvData[4*a+1]=e,b.vvData[4*a+2]=g,b.vvData[4*a+3]=0===a||a===b.builder.path.vertices.length-1?1:0;return b}B(a,c);a.prototype.createGeometryData=function(){var a={};a[u.PathVertexAttrConstants.POSITION]=this.builder.pathVertexIndices;a[u.PathVertexAttrConstants.PROFILERIGHT]=this.builder.vertexIndices;a[u.PathVertexAttrConstants.PROFILEUP]=this.builder.vertexIndices;a[u.PathVertexAttrConstants.PROFILEVERTEXANDNORMAL]=this.builder.vertexIndices;
a[u.PathVertexAttrConstants.FEATUREVALUE]=this.builder.pathVertexIndices;var c={};c[u.PathVertexAttrConstants.POSITION]={size:3,data:this.builder.originData};c[u.PathVertexAttrConstants.PROFILERIGHT]={size:4,data:this.builder.profileRightAxisData};c[u.PathVertexAttrConstants.PROFILEUP]={size:4,data:this.builder.profileUpAxisData};c[u.PathVertexAttrConstants.PROFILEVERTEXANDNORMAL]={size:4,data:this.builder.profileVertexAndNormalData};c[u.PathVertexAttrConstants.FEATUREVALUE]={size:4,data:this.vvData};
return new E.GeometryData(c,a,E.GeometryData.DefaultOffsets,"triangle")};return a}(k);t.FastUpdatePathGeometry=k})(w||(w={}));var U=r.vec3f64.create(),A=l.vec2f64.create(),L=l.vec2f64.create(),W=l.vec2f64.create(),x=r.vec3f64.create(),v=r.vec3f64.create(),J=r.vec3f64.create(),V=r.vec3f64.create(),F=r.vec3f64.create(),S=w.makeFrame(),H=M.mat4f64.create();return w});