// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/has ../../../../../../core/Logger ../../definitions ../../enums ../../number ../../TileClipper ../../TurboLine ../../WGLDisplayRecord ../../materialKey/MaterialKey".split(" "),function(L,w,y,M,z,v,A,d,B,q,C,D){Object.defineProperty(w,"__esModule",{value:!0});var E=z.getLogger("esri.views.2d.engine.webgl.WGLLineTemplateBase"),t=v.TILE_SIZE+16,x=1/3.8,r=new B.TileClipper(0,0,0,1,16);r.setExtent(v.TILE_SIZE);
var h=new Uint32Array(9),b=new Uint32Array(36),n=new Uint32Array(3),m=new Uint32Array(6),F=function(a){return function(c){var u=Math.ceil(1024*a._halfWidth),e=Math.ceil(1024*a._halfReferenceWidth);c.entry0=a.offset+a.vertexCount++;var g=d.i1616to32(c.distance,u),f=d.i8888to32(Math.round(31*c.prevNormal.x),Math.round(31*c.prevNormal.y),Math.round(0),Math.round(-31)),k=d.i8888to32(0,0,0,a._bitset);b[0]=d.i1616to32(c.currentVertex.x,c.currentVertex.y);b[1]=a.id;b[2]=a._fillColor;b[3]=f;b[4]=g;b[5]=a._tl;
b[6]=a._br;b[7]=k;b[8]=d.i1616to32(e,0);c.entry2=a.offset+a.vertexCount++;g=d.i1616to32(c.distance,u);f=d.i8888to32(Math.round(31*-c.prevNormal.x),Math.round(31*-c.prevNormal.y),Math.round(0),Math.round(31));k=d.i8888to32(0,0,0,a._bitset);b[9]=d.i1616to32(c.currentVertex.x,c.currentVertex.y);b[10]=a.id;b[11]=a._fillColor;b[12]=f;b[13]=g;b[14]=a._tl;b[15]=a._br;b[16]=k;b[17]=d.i1616to32(e,0);c.exit0=a.offset+a.vertexCount++;g=d.i1616to32(c.distance,u);f=d.i8888to32(Math.round(31*c.nextNormal.x),Math.round(31*
c.nextNormal.y),Math.round(0),Math.round(-31));k=d.i8888to32(0,0,0,a._bitset);b[18]=d.i1616to32(c.currentVertex.x,c.currentVertex.y);b[19]=a.id;b[20]=a._fillColor;b[21]=f;b[22]=g;b[23]=a._tl;b[24]=a._br;b[25]=k;b[26]=d.i1616to32(e,0);c.exit2=a.offset+a.vertexCount++;g=d.i1616to32(c.distance,u);f=d.i8888to32(Math.round(31*-c.nextNormal.x),Math.round(31*-c.nextNormal.y),Math.round(0),Math.round(31));k=d.i8888to32(0,0,0,a._bitset);b[27]=d.i1616to32(c.currentVertex.x,c.currentVertex.y);b[28]=a.id;b[29]=
a._fillColor;b[30]=f;b[31]=g;b[32]=a._tl;b[33]=a._br;b[34]=k;b[35]=d.i1616to32(e,0);a.geometryBuf.writeRegion(b)}},G=function(a){return function(c){m[0]=c.leftExit0;m[1]=c.rightEntry0;m[2]=c.leftExit2;m[3]=c.rightEntry0;m[4]=c.rightEntry2;m[5]=c.leftExit2;a.indexCount+=6;a.indexBuf.writeRegion(m)}},J=function(a){return function(c,b,e,g,f,k,H,I,l){l=d.i1616to32(l,Math.ceil(1024*a._halfWidth));f=d.i8888to32(Math.round(31*f),Math.round(31*k),Math.round(31*H),Math.round(31*I));e=d.i8888to32(31*e,31*g,
0,a._bitset);h[0]=d.i1616to32(c,b);h[1]=a.id;h[2]=a._fillColor;h[3]=f;h[4]=l;h[5]=a._tl;h[6]=a._br;h[7]=e;h[8]=d.i1616to32(Math.ceil(1024*a._halfReferenceWidth),0);a.geometryBuf.writeRegion(h);return a.offset+a.vertexCount++}},K=function(a){return function(b,d,e){n[0]=b;n[1]=d;n[2]=e;a.indexCount+=3;a.indexBuf.writeRegion(n)}};w.default=function(a){return function(a){function b(){for(var b=[],g=0;g<arguments.length;g++)b[g]=arguments[g];b=a.apply(this,b)||this;b.tessellationProperties={_fillColor:null,
_tl:null,_br:null,_halfWidth:null,_bitset:null,_halfReferenceWidth:null,id:null,indexBuf:null,indexCount:null,geometryBuf:null,vertexCount:null,offset:null};b._tessellationOptions={};b.geometryType=A.WGLGeometryType.LINE;return b}y(b,a);b.prototype.writeMesh=function(b,a,f,c,d){var g=a.indexVector,e=a.get("geometry"),k=new C(c,this.geometryType,this._materialKey);a=a.getVector("geometry").vertexCount;k.vertexFrom=a;k.indexFrom=g.length;switch(f){case "esriGeometryPolyline":f=this._clipLines(d.geometry.paths);
if(0===f.length)break;this._write(k,g,e,a,c,f);b.push(k);break;case "esriGeometryPolygon":f=this._clipLines(d.geometry.rings);if(0===f.length)break;this._write(k,g,e,a,c,f);b.push(k);break;default:E.error("Unable to handle geometryType: "+f)}};b.prototype._clipLines=function(a){for(var b=[],c=!1,d=0;d<a.length;){var e=[],h=a[d];r.reset(2);var l=h[0],p=l[0],l=l[1];if(c)r.moveTo(p,l);else{if(-16>p||p>t||-16>l||l>t){c=!0;continue}e.push({x:p,y:l})}for(var m=!1,q=h.length,n=1;n<q;++n)if(p+=h[n][0],l+=
h[n][1],c)r.lineTo(p,l);else{if(-16>p||p>t||-16>l||l>t){m=!0;break}e.push({x:p,y:l})}if(m)c=!0;else{if(c){if(e=r.resultWithStarts())for(c=0;c<e.length;c++)b.push(e[c])}else b.push({line:e,start:0});d++;c=!1}}return b};b.prototype._write=function(a,b,c,d,h,m){this.tessellationProperties.id=h;this.tessellationProperties.indexBuf=b;this.tessellationProperties.indexCount=0;this.tessellationProperties.geometryBuf=c;this.tessellationProperties.vertexCount=0;this.tessellationProperties.offset=d;for(b=0;b<
m.length;b++)c=m[b],d=c.line,2>d.length||(this._tessellationOptions.initialDistance=c.start%65535,this._tessellationCallbacks instanceof q.StandardTessellationCallbacks&&(this._tessellationCallbacks.capType=this._capType,this._tessellationCallbacks.joinType=this._joinType),q.tessellate(d,this._tessellationOptions,this._tessellationCallbacks),q.cleanup());a.vertexCount=this.tessellationProperties.vertexCount;a.indexCount=this.tessellationProperties.indexCount;a.zOrder=this._zOrder};b.prototype._initializeTessellator=
function(a){var b=D.LineMaterialKey.load(this._materialKey);this._tessellationOptions.trackDistance=this._isDashed||this._hasPattern;this._tessellationOptions.thin=!a&&this.tessellationProperties._halfWidth<v.THIN_LINE_THRESHOLD/2&&!(b.vvSizeFieldStops||b.vvSizeMinMaxValue||b.vvSizeScaleStops||b.vvSizeUnitValue);this._tessellationOptions.wrapDistance=65535;this._tessellationOptions.outerBisectorAutoSplitThreshold=x;this._tessellationOptions.enableOuterBisectorSplit=this._isDashed||this._hasPattern;
this._tessellationOptions.innerBisectorAutoSplitThreshold=x;this._tessellationOptions.enableInnerBisectorSplit=this._isDashed||this._hasPattern;this._tessellationOptions.thin?this._tessellationCallbacks={vertex:F(this.tessellationProperties),bridge:G(this.tessellationProperties)}:(a=new q.StandardTessellationCallbacks(J(this.tessellationProperties),K(this.tessellationProperties)),a.miterLimitCosine=this._miterLimitCosine,a.textured=this._isDashed||this._hasPattern,a.joinOnUTurn=this._joinOnUTurn,
this._tessellationCallbacks=a)};return b}(a)}});