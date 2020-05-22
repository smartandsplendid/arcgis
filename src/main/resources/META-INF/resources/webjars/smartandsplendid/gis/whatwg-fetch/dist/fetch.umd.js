//>>built
(function(f,h){"object"===typeof exports&&"undefined"!==typeof module?h(exports):"function"===typeof define&&define.amd?define(["exports"],h):h(f.WHATWGFetch={})})(this,function(f){function h(a){"string"!==typeof a&&(a=String(a));if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(a))throw new TypeError("Invalid character in header field name");return a.toLowerCase()}function t(a){"string"!==typeof a&&(a=String(a));return a}function p(a){var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};g.iterable&&
(b[Symbol.iterator]=function(){return b});return b}function d(a){this.map={};a instanceof d?a.forEach(function(a,c){this.append(c,a)},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],a[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])},this)}function q(a){if(a.bodyUsed)return Promise.reject(new TypeError("Already read"));a.bodyUsed=!0}function u(a){return new Promise(function(b,c){a.onload=function(){b(a.result)};a.onerror=function(){c(a.error)}})}function y(a){var b=
new FileReader,c=u(b);b.readAsArrayBuffer(a);return c}function z(a){a=new Uint8Array(a);for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=String.fromCharCode(a[c]);return b.join("")}function v(a){if(a.slice)return a.slice(0);var b=new Uint8Array(a.byteLength);b.set(new Uint8Array(a));return b.buffer}function w(){this.bodyUsed=!1;this._initBody=function(a){(this._bodyInit=a)?"string"===typeof a?this._bodyText=a:g.blob&&Blob.prototype.isPrototypeOf(a)?this._bodyBlob=a:g.formData&&FormData.prototype.isPrototypeOf(a)?
this._bodyFormData=a:g.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)?this._bodyText=a.toString():g.arrayBuffer&&g.blob&&a&&DataView.prototype.isPrototypeOf(a)?(this._bodyArrayBuffer=v(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):g.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||A(a))?this._bodyArrayBuffer=v(a):this._bodyText=a=Object.prototype.toString.call(a):this._bodyText="";this.headers.get("content-type")||("string"===typeof a?this.headers.set("content-type","text/plain;charset\x3dUTF-8"):
this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):g.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset\x3dUTF-8"))};g.blob&&(this.blob=function(){var a=q(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw Error("could not read FormData body as blob");
return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?q(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)});this.text=function(){var a=q(this);if(a)return a;if(this._bodyBlob){var a=this._bodyBlob,b=new FileReader,c=u(b);b.readAsText(a);return c}if(this._bodyArrayBuffer)return Promise.resolve(z(this._bodyArrayBuffer));if(this._bodyFormData)throw Error("could not read FormData body as text");return Promise.resolve(this._bodyText)};
g.formData&&(this.formData=function(){return this.text().then(B)});this.json=function(){return this.text().then(JSON.parse)};return this}function m(a,b){b=b||{};var c=b.body;if(a instanceof m){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url;this.credentials=a.credentials;b.headers||(this.headers=new d(a.headers));this.method=a.method;this.mode=a.mode;this.signal=a.signal;c||null==a._bodyInit||(c=a._bodyInit,a.bodyUsed=!0)}else this.url=String(a);this.credentials=b.credentials||this.credentials||
"same-origin";if(b.headers||!this.headers)this.headers=new d(b.headers);a=b.method||this.method||"GET";var x=a.toUpperCase();this.method=-1<C.indexOf(x)?x:a;this.mode=b.mode||this.mode||null;this.signal=b.signal||this.signal;this.referrer=null;if(("GET"===this.method||"HEAD"===this.method)&&c)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(c)}function B(a){var b=new FormData;a.trim().split("\x26").forEach(function(a){if(a){var c=a.split("\x3d");a=c.shift().replace(/\+/g,
" ");c=c.join("\x3d").replace(/\+/g," ");b.append(decodeURIComponent(a),decodeURIComponent(c))}});return b}function D(a){var b=new d;a.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(a){var c=a.split(":");if(a=c.shift().trim())c=c.join(":").trim(),b.append(a,c)});return b}function l(a,b){b||(b={});this.type="default";this.status=void 0===b.status?200:b.status;this.ok=200<=this.status&&300>this.status;this.statusText="statusText"in b?b.statusText:"OK";this.headers=new d(b.headers);this.url=
b.url||"";this._initBody(a)}function r(a,b){return new Promise(function(c,d){function h(){e.abort()}var k=new m(a,b);if(k.signal&&k.signal.aborted)return d(new f.DOMException("Aborted","AbortError"));var e=new XMLHttpRequest;e.onload=function(){var a={status:e.status,statusText:e.statusText,headers:D(e.getAllResponseHeaders()||"")};a.url="responseURL"in e?e.responseURL:a.headers.get("X-Request-URL");c(new l("response"in e?e.response:e.responseText,a))};e.onerror=function(){d(new TypeError("Network request failed"))};
e.ontimeout=function(){d(new TypeError("Network request failed"))};e.onabort=function(){d(new f.DOMException("Aborted","AbortError"))};e.open(k.method,k.url,!0);"include"===k.credentials?e.withCredentials=!0:"omit"===k.credentials&&(e.withCredentials=!1);"responseType"in e&&g.blob&&(e.responseType="blob");k.headers.forEach(function(a,b){e.setRequestHeader(b,a)});k.signal&&(k.signal.addEventListener("abort",h),e.onreadystatechange=function(){4===e.readyState&&k.signal.removeEventListener("abort",h)});
e.send("undefined"===typeof k._bodyInit?null:k._bodyInit)})}var E="URLSearchParams"in self,F="Symbol"in self&&"iterator"in Symbol,n;if(n="FileReader"in self&&"Blob"in self)try{new Blob,n=!0}catch(a){n=!1}var g={searchParams:E,iterable:F,blob:n,formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(g.arrayBuffer)var G="[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]".split(";"),
A=ArrayBuffer.isView||function(a){return a&&-1<G.indexOf(Object.prototype.toString.call(a))};d.prototype.append=function(a,b){a=h(a);b=t(b);var c=this.map[a];this.map[a]=c?c+", "+b:b};d.prototype["delete"]=function(a){delete this.map[h(a)]};d.prototype.get=function(a){a=h(a);return this.has(a)?this.map[a]:null};d.prototype.has=function(a){return this.map.hasOwnProperty(h(a))};d.prototype.set=function(a,b){this.map[h(a)]=t(b)};d.prototype.forEach=function(a,b){for(var c in this.map)this.map.hasOwnProperty(c)&&
a.call(b,this.map[c],c,this)};d.prototype.keys=function(){var a=[];this.forEach(function(b,c){a.push(c)});return p(a)};d.prototype.values=function(){var a=[];this.forEach(function(b){a.push(b)});return p(a)};d.prototype.entries=function(){var a=[];this.forEach(function(b,c){a.push([c,b])});return p(a)};g.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);var C="DELETE GET HEAD OPTIONS POST PUT".split(" ");m.prototype.clone=function(){return new m(this,{body:this._bodyInit})};w.call(m.prototype);
w.call(l.prototype);l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})};l.error=function(){var a=new l(null,{status:0,statusText:""});a.type="error";return a};var H=[301,302,303,307,308];l.redirect=function(a,b){if(-1===H.indexOf(b))throw new RangeError("Invalid status code");return new l(null,{status:b,headers:{location:a}})};f.DOMException=self.DOMException;try{new f.DOMException}catch(a){f.DOMException=
function(a,c){this.message=a;this.name=c;this.stack=Error(a).stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}r.polyfill=!0;self.fetch||(self.fetch=r,self.Headers=d,self.Request=m,self.Response=l);f.Headers=d;f.Request=m;f.Response=l;f.fetch=r;Object.defineProperty(f,"__esModule",{value:!0})});