// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils".split(" "),function(b,l,g,e,h,d,k,f){b=function(b){function c(a){a=b.call(this,a)||this;a.geometries1=null;a.geometries2=null;a.relation=null;a.relationParameter=null;return a}g(c,b);e([d.property({json:{read:{reader:function(a){return a?a.map(function(a){return f.fromJSON(a)}):
null}},write:{writer:function(a,b){b.geometries1=a.map(function(a){return a.toJSON()})}}}})],c.prototype,"geometries1",void 0);e([d.property({json:{read:{reader:function(a){return a?a.map(function(a){return f.fromJSON(a)}):null}},write:{writer:function(a,b){b.geometries2=a.map(function(a){return a.toJSON()})}}}})],c.prototype,"geometries2",void 0);e([d.property({type:String,json:{write:!0}})],c.prototype,"relation",void 0);e([d.property({type:String,json:{write:!0}})],c.prototype,"relationParameter",
void 0);return c=e([d.subclass("esri.tasks.support.RelationParameters")],c)}(d.declared(h.JSONSupport));b.from=k.default(b);return b});