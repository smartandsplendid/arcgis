//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define("require exports tslib ../../core/Destroyable ../../shim/Map ../../shim/WeakMap".split(" "),a)})(function(a,b){Object.defineProperty(b,"__esModule",{value:!0});var g=a("tslib"),h=a("../../core/Destroyable"),k=a("../../shim/Map"),l=a("../../shim/WeakMap");a=function(a){function b(b){var e=a.call(this)||this;e._moduleMap=new l.default;
e._invalidate=b.invalidate;return e}g.__extends(b,a);b.prototype.run=function(a){var b=this;return function(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];var e=JSON.stringify(c),f=b._moduleMap.get(a);return f&&(d=f.get(e),void 0!==d)?d:(c=a.apply(void 0,g.__spread(c)))&&"function"===typeof c.then?(c.then(function(c){f||(f=new k.default,b._moduleMap.set(a,f));f.set(e,c);b._invalidate()}),null):c}};return b}(h.Destroyable);b.Block=a;b.default=a});