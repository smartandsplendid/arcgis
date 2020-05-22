// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(e){function a(a){a=e.call(this,a)||this;a.date=null;a.directShadowsEnabled=!1;a.displayUTCOffset=null;return a}f(a,e);d=a;a.prototype.readDate=function(a,b){return null!=b.datetime&&new Date(b.datetime)||null};a.prototype.writeDate=function(a,b,c){b[c]=a.getTime()};a.prototype.readDirectShadowsEnabled=
function(a,b){return!!b.directShadows};a.prototype.writedirectShadowsEnabled=function(a,b,c){a&&(b[c]=a)};a.prototype.writeDisplayUTCOffset=function(a,b){null!=a&&(b.displayUTCOffset=a)};a.prototype.clone=function(){return new d(this.cloneConstructProperties())};a.prototype.cloneConstructProperties=function(){var a={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};null!=this.date&&(a.date=new Date(this.date.getTime()));return a};
var d;c([b.property({type:Date,json:{type:Number,write:{target:"datetime"}}})],a.prototype,"date",void 0);c([b.reader("date",["datetime"])],a.prototype,"readDate",null);c([b.writer("date")],a.prototype,"writeDate",null);c([b.property({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],a.prototype,"directShadowsEnabled",void 0);c([b.reader("directShadowsEnabled",["directShadows"])],a.prototype,"readDirectShadowsEnabled",null);c([b.writer("directShadowsEnabled")],a.prototype,"writedirectShadowsEnabled",
null);c([b.property({type:Number,json:{write:!0}})],a.prototype,"displayUTCOffset",void 0);c([b.writer("displayUTCOffset")],a.prototype,"writeDisplayUTCOffset",null);return a=d=c([b.subclass("esri.webscene.Lighting")],a)}(b.declared(g.JSONSupport))});