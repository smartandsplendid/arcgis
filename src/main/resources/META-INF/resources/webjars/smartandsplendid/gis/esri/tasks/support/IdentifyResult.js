// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/assignHelper ../../geometry ../../Graphic ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(n,p,d,h,e,k,f,l,m,c){return function(g){function a(b){b=g.call(this,b)||this;b.displayFieldName=null;b.feature=null;b.layerId=null;b.layerName=null;return b}h(a,g);a.prototype.readFeature=function(b,a){return f.fromJSON({attributes:e({},
a.attributes),geometry:e({},a.geometry)})};a.prototype.writeFeature=function(b,a){if(b){var c=b.attributes;b=b.geometry;c&&(a.attributes=e({},c));m.isSome(b)&&(a.geometry=b.toJSON(),a.geometryType=k.typeKebabDictionary.toJSON(b.type))}};d([c.property({type:String,json:{write:!0}})],a.prototype,"displayFieldName",void 0);d([c.property({type:f})],a.prototype,"feature",void 0);d([c.reader("feature",["attributes","geometry"])],a.prototype,"readFeature",null);d([c.writer("feature")],a.prototype,"writeFeature",
null);d([c.property({type:Number,json:{write:!0}})],a.prototype,"layerId",void 0);d([c.property({type:String,json:{write:!0}})],a.prototype,"layerName",void 0);return a=d([c.subclass("esri.tasks.support.IdentifyResult")],a)}(c.declared(l.JSONSupport))});