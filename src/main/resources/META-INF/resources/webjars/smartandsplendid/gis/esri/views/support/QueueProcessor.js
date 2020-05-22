// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/maybe ../../core/promiseUtils ../../core/Queue ../../core/scheduling".split(" "),function(k,l,m,f,n,p){Object.defineProperty(l,"__esModule",{value:!0});var q=function(){return function(b,a){this.item=b;this.controller=a;this.promise=null}}();k=function(){function b(a){var g=this;this._deferreds=new Map;this._controllers=new Map;this._processingItems=new Map;this._isPaused=!1;this._task=this._schedule=null;this.concurrency=1;a.concurrency&&(this.concurrency=a.concurrency);
this._queue=new n.default(a.peeker);this.process=a.process;var b=a.scheduler;a.task&&m.isSome(b)&&(this._task=b.registerTask(a.task,function(a){return g.update(a)},function(){return g.needsUpdate()}))}b.prototype.destroy=function(){this.clear();this._schedule&&(this._schedule.remove(),this._schedule=null);this._task&&(this._task.remove(),this._task=null)};Object.defineProperty(b.prototype,"length",{get:function(){return this._processingItems.size+this._queue.length},enumerable:!0,configurable:!0});
b.prototype.abort=function(a){(a=this._controllers.get(a))&&a.abort()};b.prototype.clear=function(){this._queue.clear();var a=[];this._controllers.forEach(function(b){return a.push(b)});this._controllers.clear();a.forEach(function(a){return a.abort()});this._processingItems.clear();this._cancelNext()};b.prototype.get=function(a){return(a=this._deferreds.get(a))?a.promise:void 0};b.prototype.isOngoing=function(a){return this._processingItems.has(a)};b.prototype.has=function(a){return this._deferreds.has(a)};
b.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())};b.prototype.push=function(a){var b=this,c=this.get(a);if(c)return c;var e,c=f.createAbortController(),d=function(){h.remove();b._deferreds.delete(a);b._controllers.delete(a);b._queue.remove(a);b._processingItems.delete(a);b._scheduleNext()},h=f.onAbortOrThrow(c.signal,function(){var g=b._processingItems.get(a);g&&g.controller.abort();d();e.reject(f.createAbortError())});e=f.createDeferred();this._deferreds.set(a,
e);this._controllers.set(a,c);e.promise.then(d,d);this._queue.push(a);this._scheduleNext();return e.promise};b.prototype.reset=function(){var a=[];this._processingItems.forEach(function(b){return a.push(b)});this._processingItems.clear();for(var b=0;b<a.length;b++){var c=a[b];this._queue.push(c.item);c.controller.abort()}this._scheduleNext()};b.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())};b.prototype.needsUpdate=function(){return!this._isPaused&&0<this._queue.length&&
this._processingItems.size<this.concurrency};b.prototype.update=function(a){for(;!a.done&&0<this._queue.length&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),a.madeProgress()};b.prototype._scheduleNext=function(){var a=this;this._task||this._isPaused||this._schedule||(this._schedule=p.schedule(function(){a._schedule=null;a._next()}))};b.prototype._next=function(){for(;0<this._queue.length&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())};
b.prototype._cancelNext=function(){this._schedule&&(this._schedule.remove(),this._schedule=null)};b.prototype._processResult=function(a,b){this._canProcessFulfillment(a)&&(this._scheduleNext(),this._deferreds.get(a.item).resolve(b))};b.prototype._processError=function(a,b){this._canProcessFulfillment(a)&&(this._scheduleNext(),this._deferreds.get(a.item).reject(b))};b.prototype._canProcessFulfillment=function(a){return this._deferreds.get(a.item)&&this._processingItems.get(a.item)===a?!0:!1};b.prototype._process=
function(a){var b=this;if(!m.isNone(a)){var c,e=f.createAbortController(),d=new q(a,e);this._processingItems.set(a,d);try{c=this.process(a,e.signal)}catch(h){this._processError(d,h)}c&&"function"===typeof c.then?(d.promise=c,c.then(function(a){return b._processResult(d,a)},function(a){return b._processError(d,a)})):this._processResult(d,c)}};Object.defineProperty(b.prototype,"test",{get:function(){var a=this;return{update:function(b){return a.update(b)}}},enumerable:!0,configurable:!0});return b}();
l.QueueProcessor=k});