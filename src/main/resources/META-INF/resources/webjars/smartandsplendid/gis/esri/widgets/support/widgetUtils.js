// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/ArrayPool ../../core/arrayUtils ../../core/has ../../core/Logger ../../libs/sanitizer/Sanitizer maquette-css-transitions".split(" "),function(c,a,g,h,m,k,l,f){Object.defineProperty(a,"__esModule",{value:!0});k.getLogger("esri.widgets.support.widgetUtils");a.join=function(){for(var d=[],b=0;b<arguments.length;b++)d[b]=arguments[b];return d.join(" ")};a.classes=function(d){for(var b=g.acquire(),a=0;a<arguments.length;a++){var e=arguments[a],c=typeof e;if("string"===
c)b.push(e);else if(Array.isArray(e))b.push.apply(b,e);else if("object"===c)for(var f in e)e[f]&&b.push(f)}a=b.join(" ");g.release(b);return a};a.isRTL=function(){return"rtl"===document.dir};a.discardNode=function(a){this[a.getAttribute("data-node-ref")]=null};a.storeNode=function(a){this[a.getAttribute("data-node-ref")]=a};a.cssTransition=function(a,b){return("enter"===a?f.createEnterCssTransition:f.createExitCssTransition)(b)};a.additionalWhiteListedTags="h1 h2 h3 h4 h5 h6 sub sup".split(" ").concat("animate animatetransform circle clippath defs ellipse g image line lineargradient marker mask path pattern polygon polyline radialgradient rect stop svg switch symbol text textpath tspan use".split(" "));
c=a.additionalWhiteListedTags.reduce(function(a,b){a[b]=[];return a},{});a.safeAttrs="align alink alt bgcolor border cellpadding cellspacing class color cols colspan coords dir face height hspace ismap lang marginheight marginwidth multiple nohref noresize noshade nowrap ref rel rev rows rowspan scrolling shape span summary tabindex title usemap valign value vlink vspace width".split(" ");a.renderingSanitizer=new l({whiteList:c,onTagAttr:function(d,b,c){d=b+'\x3d"'+c+'"';if(h.includes(a.safeAttrs,
b))return d},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0)});