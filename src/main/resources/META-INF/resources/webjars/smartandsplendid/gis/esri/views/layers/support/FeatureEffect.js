// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/JSONSupport ../../../core/Logger ../../../core/maybe ../../../core/accessorSupport/decorators ./FeatureFilter ./ParsedFeatureEffect ./Transition".split(" "),function(q,r,c,l,m,n,e,b,p,d,k){var f=n.getLogger("esri.views.layers.support.FeatureEffect");return function(g){function a(){var a=null!==g&&g.apply(this,arguments)||this;a.filter=null;a.includedEffect=null;a.excludedEffect=
null;a.excludedLabelsVisible=!1;return a}l(a,g);h=a;Object.defineProperty(a.prototype,"insideEffect",{get:function(){f.warn("insideEffect is a temporary interface that will be removed. Use includedEffect instead");return this.includedEffect},set:function(a){f.warn("insideEffect is a temporary interface that will be removed. Use includedEffect instead");this.includedEffect=a},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"outsideEffect",{get:function(){f.warn("outsideEffect is a temporary interface that will be removed. Use excludedEffect instead");
return this.excludedEffect},set:function(a){f.warn("outsideEffect is a temporary interface that will be removed. Use excludedEffect instead");this.excludedEffect=a},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedIncludedEffect",{get:function(){return e.isSome(this.includedEffect)?"string"===typeof this.includedEffect?d.fromString(this.includedEffect):new k({from:d.fromString(this.includedEffect.from),to:d.fromString(this.includedEffect.to),duration:this.includedEffect.duration}):
null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedExcludedEffect",{get:function(){return e.isSome(this.excludedEffect)?"string"===typeof this.excludedEffect?d.fromString(this.excludedEffect):new k({from:d.fromString(this.excludedEffect.from),to:d.fromString(this.excludedEffect.to),duration:this.excludedEffect.duration}):null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"renderingHash",{get:function(){return this.excludedLabelsVisible+"-"+this.includedEffect+
"-"+this.excludedEffect},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"done",{get:function(){return(!e.isSome(this.parsedIncludedEffect)||this.parsedIncludedEffect.done)&&(!e.isSome(this.parsedExcludedEffect)||this.parsedExcludedEffect.done)},enumerable:!0,configurable:!0});a.prototype.clone=function(){return new h({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})};
var h;c([b.property({type:p,json:{write:!0}})],a.prototype,"filter",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"includedEffect",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"excludedEffect",void 0);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"excludedLabelsVisible",void 0);c([b.property({dependsOn:["includedEffect"]})],a.prototype,"parsedIncludedEffect",null);c([b.property({dependsOn:["excludedEffect"]})],a.prototype,"parsedExcludedEffect",
null);c([b.property({dependsOn:["includedEffect","excludedEffect"]})],a.prototype,"renderingHash",null);return a=h=c([b.subclass("esri.views.layers.support.FeatureEffect")],a)}(b.declared(m.JSONSupport))});