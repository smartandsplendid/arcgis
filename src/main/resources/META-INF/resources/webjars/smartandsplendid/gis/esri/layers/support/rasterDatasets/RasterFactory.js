// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper @dojo/framework/shim/Set ../../../core/Error ./CloudRaster ./ImageServerRaster ./MRFRaster ./TIFFRaster".split(" "),function(z,A,q,r,t,u,v,w,x,y){var d=new Map;d.set("CRF",{desc:"Cloud Raster Format",constructor:v});d.set("MRF",{desc:"Meta Raster Format",constructor:x});d.set("TIFF",{desc:"GeoTIFF",constructor:y});d.set("RasterTileServer",{desc:"Raster Tile Server",constructor:w});return function(){function f(){}
Object.defineProperty(f,"supportedFormats",{get:function(){for(var b=d.keys(),c=new t.default,e=b.next();!e.done;)c.add(e.value),e=b.next();return c},enumerable:!0,configurable:!0});f.open=function(b){return r(this,void 0,void 0,function(){var c,e,a,f,k,h,g,m,n,l;return q(this,function(p){switch(p.label){case 0:c=b.url;e=b.ioConfig;a=b.datasetFormat;null==a&&c.lastIndexOf(".")&&(a=c.slice(c.lastIndexOf(".")+1).toUpperCase());"OVR"===a||"TIF"===a?a="TIFF":-1<c.toLowerCase().indexOf("/imageserver")&&
(a="RasterTileServer");f={resolution:null,bandIds:null,sampling:null};k={url:c,datasetFormat:a,ioConfig:e||f};if(!this.supportedFormats.has(a))return[3,2];h=d.get(a).constructor;g=new h(k);return[4,g.open({signal:b.signal})];case 1:return p.sent(),[2,g];case 2:if(a)throw new u("rasterfactory:open","not a supported format "+a);m=Array.from(d.keys());n=0;l=function(){a=m[n++];if(!a)return null;h=d.get(a).constructor;g=new h(k);return g.open({signal:b.signal}).then(function(){return g}).catch(function(){return l()})};
return[2,l()]}})})};f.register=function(b,c,e){d.has(b.toUpperCase())||d.set(b.toUpperCase(),{desc:c,constructor:e})};return f}()});