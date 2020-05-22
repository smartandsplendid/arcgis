// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,g){b=function(){function a(a,d){void 0===d&&(d=.9);this._alpha=.9;this._name=a;this._alpha=d;this.reset()}a.prototype.reset=function(){this._smooth=this._sum=this._count=0;this._min=Infinity;this._max=0};Object.defineProperty(a.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"average",
{get:function(){return 0<this._count?this._sum/this._count:0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"smooth",{get:function(){return this._smooth},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"min",{get:function(){return this._min},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"max",{get:function(){return this._max},enumerable:!0,configurable:!0});a.prototype.begin=function(){this._startTime=performance.now()};a.prototype.end=function(){var a=
performance.now()-this._startTime;this._count+=1;this._sum+=a;this._smooth=this._alpha*a+(1-this._alpha)*this._smooth;this._min=Math.min(this._min,a);this._max=Math.max(this._max,a)};a.prototype.toJSON=function(){return{name:this.name,count:this.count,average:this.average,smooth:this.smooth,min:this.min,max:this.max}};return a}();(function(a){function b(e){e in c||(c[e]=new a(e));return c[e]}function d(a){console.log(b(a).toJSON())}var c={},f={};a.get=b;a.begin=function(a){b(a).begin()};a.end=function(a,
c){void 0===c&&(c=!0);b(a).end();var e=performance.now();!c||a in f&&!(e>=f[a]+1E3)||(d(a),f[a]=e)};a.log=d;a.logAll=function(){for(var a in c)d(a)}})(b||(b={}));return b});