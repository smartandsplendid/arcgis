// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64"],function(g,f,h,e,k){function m(a){for(var c in a){var b=a[c];b instanceof Function&&(a[c]=b.bind(a))}return a}Object.defineProperty(f,"__esModule",{value:!0});f.cosCapped=function(a,c){return a>c?Math.cos(c):Math.cos(a)};f.fovx2fovy=function(a,c,b){return 2*Math.atan(b*Math.tan(.5*a)/c)};f.fovy2fovx=function(a,c,b){return 2*Math.atan(c*Math.tan(.5*a)/b)};f.maxScale=
function(a){return Math.sqrt(Math.max(Math.max(a[0]*a[0]+a[4]*a[4]+a[8]*a[8],a[1]*a[1]+a[5]*a[5]+a[9]*a[9]),a[2]*a[2]+a[6]*a[6]+a[10]*a[10]))};f.scaleFromMatrix=function(a,c){e.vec3.set(a,Math.sqrt(c[0]*c[0]+c[4]*c[4]+c[8]*c[8]),Math.sqrt(c[1]*c[1]+c[5]*c[5]+c[9]*c[9]),Math.sqrt(c[2]*c[2]+c[6]*c[6]+c[10]*c[10]));return a};f.makeOrthonormal=function(a,c,b){b=b||a;var d=e.vec3.dot(a,c);e.vec3.set(b,a[0]-d*c[0],a[1]-d*c[1],a[2]-d*c[2]);e.vec3.normalize(b,b)};f.tangentFrame=function(a,c,b){Math.abs(a[0])>
Math.abs(a[1])?e.vec3.set(c,0,1,0):e.vec3.set(c,1,0,0);e.vec3.cross(b,a,c);e.vec3.normalize(c,c);e.vec3.cross(c,b,a);e.vec3.normalize(b,b)};f.moduloPositive=function(a,c){return(a%c+c)%c};f.cartesianToSpherical=function(a,c){var b=e.vec3.length(a),d=h.asinClamped(a[2]/b);e.vec3.set(c,b,d,Math.atan2(a[1]/b,a[0]/b));return c};f.sphericalToCartesian=function(a,c){var b=a[0],d=a[1];a=a[2];var f=Math.cos(d);e.vec3.set(c,b*f*Math.cos(a),b*f*Math.sin(a),b*Math.sin(d))};f.directionFromTo=function(a,c,b){var d=
b[0]-c[0],e=b[1]-c[1];c=b[2]-c[2];b=d*d+e*e+c*c;if(!b)return a[0]=0,a[1]=0,a[2]=0,a;b=1/Math.sqrt(b);a[0]=d*b;a[1]=e*b;a[2]=c*b;return a};f.bilerp=function(a,c,b,d,e,f){a+=(c-a)*e;return a+(b+(d-b)*e-a)*f};f.slerp=function(a,c,b,d){void 0===d&&(d=k.vec3f64.create());var f=e.vec3.length(a),g=e.vec3.length(c),l=e.vec3.dot(a,c)/(f*g);if(.9999999999999999>l){var l=Math.acos(l),h=((1-b)*f+b*g)/Math.sin(l),g=h/g*Math.sin(b*l);e.vec3.scale(n,a,h/f*Math.sin((1-b)*l));e.vec3.scale(p,c,g);return e.vec3.add(d,
n,p)}return e.vec3.lerp(d,a,c,b)};f.angle=function(a,c,b){a=e.vec3.normalize(n,a);c=e.vec3.normalize(p,c);var d=h.acosClamped(e.vec3.dot(a,c));return b&&(a=e.vec3.cross(t,a,c),0>e.vec3.dot(a,b))?-d:d};f.makePiecewiseLinearFunction=function(a){var c=a.length;return function(b){if(b<=a[0][0])return a[0][1];if(b>=a[c-1][0])return a[c-1][1];for(var d=1;b>a[d][0];)d++;var e=a[d][0];b=(e-b)/(e-a[d-1][0]);return b*a[d-1][1]+(1-b)*a[d][1]}};f.vectorEquals=function(a,c){if(null==a||null==c)return a!==c;if(a.length!==
c.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!==c[b])return!1;return!0};g=function(){function a(a,b){this.min=a;this.max=b;this.range=b-a}a.prototype.ndiff=function(a,b){void 0===b&&(b=0);return Math.ceil((a-b)/this.range)*this.range+b};a.prototype._normalize=function(a,b,d,e){void 0===e&&(e=0);d-=e;d<a?d+=this.ndiff(a-d):d>b&&(d-=this.ndiff(d-b));return d+e};a.prototype.normalize=function(a,b){return this._normalize(this.min,this.max,a,b)};a.prototype.clamp=function(a,b){void 0===b&&(b=0);
return h.clamp(a-b,this.min,this.max)+b};a.prototype.monotonic=function(a,b,d){return a<b?b:b+this.ndiff(a-b,d)};a.prototype.minimalMonotonic=function(a,b,d){return this._normalize(a,a+this.range,b,d)};a.prototype.center=function(a,b,d){b=this.monotonic(a,b,d);return this.normalize((a+b)/2,d)};a.prototype.diff=function(a,b,d){return this.monotonic(a,b,d)-a};a.prototype.shortestSignedDiff=function(a,b){a=this.normalize(a);b=this.normalize(b);var c=b-a;a=b<a?this.minimalMonotonic(a,b)-a:b-this.minimalMonotonic(b,
a);return Math.abs(c)<Math.abs(a)?c:a};a.prototype.contains=function(a,b,d){b=this.minimalMonotonic(a,b);d=this.minimalMonotonic(a,d);return d>a&&d<b};return a}();f.Cyclical=g;f.planeFromPoints=function(a,c,b,d){e.vec3.subtract(q,c,a);e.vec3.subtract(r,b,a);e.vec3.cross(d,q,r);e.vec3.normalize(d,d);d[3]=-e.vec3.dot(a,d)};var q=k.vec3f64.create(),r=k.vec3f64.create();f.cyclical2PI=m(new g(0,2*Math.PI));f.cyclicalPI=m(new g(-Math.PI,Math.PI));f.cyclicalDeg=m(new g(0,360));var t=k.vec3f64.create(),n=
k.vec3f64.create(),p=k.vec3f64.create()});