// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/JSONSupport ./core/accessorSupport/decorators ./layers/support/timeUtils".split(" "),function(k,l,g,d,h,c,b){return function(f){function a(a){a=f.call(this,a)||this;a.value=0;a.unit="milliseconds";return a}g(a,f);e=a;a.prototype.toMilliseconds=function(){return this.value*b.millisecondsPerTimeUnit[this.unit]};a.prototype.clone=function(){return new e({value:this.value,unit:this.unit})};var e;d([c.property({type:Number,
json:{write:!0},nonNullable:!0})],a.prototype,"value",void 0);d([c.property({type:b.timeUnitKebabDictionary.apiValues,json:{type:b.timeUnitKebabDictionary.jsonValues,read:b.timeUnitKebabDictionary.read,write:b.timeUnitKebabDictionary.write},nonNullable:!0})],a.prototype,"unit",void 0);return a=e=d([c.subclass("esri.TimeInterval")],a)}(c.declared(h.JSONSupport))});