// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,b){function d(a){if(a)return null!=a.listMode?a.listMode:void 0}function e(a){if(a)return null!=a.minScale?a.minScale:void 0}function f(a){if(a)return null!=a.maxScale?a.maxScale:void 0}Object.defineProperty(b,"__esModule",{value:!0});b.findLayerListMode=d;b.findLayerMinScale=e;b.findLayerMaxScale=f;b.findLayerVisibilityMode=function(a){if(!a)return"inherited";var c=a.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"===typeof c)return c?
"independent":"inherited";c=a.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"===typeof c?c?"independent":"inherited":null!=a.visibilityMode?a.visibilityMode:"independent"};b.getNormalizedChildLayerProperty=function(a){if(a&&"hide-children"!==a.listMode&&"wmts"!==a.type)return"group"===a.type?"layers":"sublayers"};b.canDisplayLayer=function(a){return"hide"!==d(a)};b.isLayerOutsideScaleRange=function(a,c){if(!a||isNaN(c))return!1;var b=e(a);a=f(a);b=!isNaN(b)&&0<b&&c>=b;c=!isNaN(a)&&
0<a&&c<=a;return b||c}});