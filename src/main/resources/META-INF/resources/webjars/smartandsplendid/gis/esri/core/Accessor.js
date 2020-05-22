// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("./declare ./accessorSupport/Properties ./accessorSupport/get ./accessorSupport/introspection ./accessorSupport/set ./accessorSupport/watch ./accessorSupport/testSupport".split(" "),function(c,f,k,g,l,h,d){f=f.default;c.before(function(a,b){c.hasMixin(a,e)&&g.processPrototype(b)});c.after(function(a){c.hasMixin(a,e)&&(g.processClass(a),Object.defineProperties(a.prototype,{initialized:{get:function(){return this.__accessor__&&this.__accessor__.initialized||!1}},constructed:{get:function(){return this.__accessor__&&
2===this.__accessor__.lifecycle||!1}},destroyed:{get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1}}}))});var e=c(null,{declaredClass:"esri.core.Accessor","-chains-":{initialize:"after",destroy:"before"},constructor:function(){if(this.constructor===e)throw Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{value:new f(this)});if(0<arguments.length&&this.normalizeCtorArgs){for(var a=
[],b=0;b<arguments.length;b++)a.push(arguments[b]);this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,a)}if(d.interceptor)d.interceptor.onInstanceConstruct(this)},__accessor__:null,postscript:function(a){var b=this.__accessor__;a=b.ctorArgs||a;b.initialize();a&&(this.set(a),b.ctorArgs=null);b.constructed();this.initialize()},initialize:function(){},destroy:function(){if(this.destroyed)try{throw Error("instance is already destroyed");}catch(a){console.warn(a.stack)}else if(h.removeTarget(this),
this.__accessor__.destroy(),d.interceptor)d.interceptor.onInstanceDestroy(this)},get:function(a){return k.get(this,a)},hasOwnProperty:function(a){return this.__accessor__?this.__accessor__.has(a):Object.prototype.hasOwnProperty.call(this,a)},keys:function(){return this.__accessor__?this.__accessor__.keys():[]},set:function(a,b){l.set(this,a,b);return this},watch:function(a,b,c){return h.watch(this,a,b,c)},_clearOverride:function(a){return this.__accessor__.clearOverride(a)},_override:function(a,b){return this.__accessor__.override(a,
b)},_isOverridden:function(a){return this.__accessor__.isOverridden(a)},notifyChange:function(a){this.__accessor__.propertyInvalidated(a)},_get:function(a){return this.__accessor__.internalGet(a)},_set:function(a,b){return this.__accessor__.internalSet(a,b)}});return e});