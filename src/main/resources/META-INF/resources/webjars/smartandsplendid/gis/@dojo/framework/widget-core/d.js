//>>built
(function(e){"object"===typeof module&&"object"===typeof module.exports?(e=e(require,exports),void 0!==e&&(module.exports=e)):"function"===typeof define&&define.amd&&define(["require","exports","tslib"],e)})(function(e,d){function n(a){return!(!a||!0===a||"string"===typeof a||a.type!==d.WNODE)}function p(a){return!(!a||!0===a||"string"===typeof a||a.type!==d.VNODE&&a.type!==d.DOMVNODE)}Object.defineProperty(d,"__esModule",{value:!0});var k=e("tslib");d.WNODE="__WNODE_TYPE";d.VNODE="__VNODE_TYPE";
d.DOMVNODE="__DOMVNODE_TYPE";d.isWNode=n;d.isVNode=p;d.isDomVNode=function(a){return!(!a||!0===a||"string"===typeof a||a.type!==d.DOMVNODE)};d.isElementNode=function(a){return!!a.tagName};d.decorate=function(a,b,c){function d(){g=[]}var m=!1,h;"function"===typeof b?h=b:(h=b.modifier,c=b.predicate,m=b.shallow||!1);for(var g=Array.isArray(a)?k.__spread(a):[a];g.length;)(b=g.shift())&&!0!==b&&(!m&&(n(b)||p(b))&&b.children&&(g=k.__spread(g,b.children)),c&&!c(b)||h(b,d));return a};d.w=function(a,b,c){n(a)&&
(b=k.__assign({},a.properties,b),c=c?c:a.children,a=a.widgetConstructor);return{children:c||[],widgetConstructor:a,properties:b,type:d.WNODE}};d.v=function(a,b,c){void 0===b&&(b={});void 0===c&&(c=void 0);var f=b,m;Array.isArray(b)&&(c=b,f={});"function"===typeof f&&(m=f,f={});if(p(a)){b=f.classes;b=void 0===b?[]:b;var h=f.styles,h=void 0===h?{}:h,f=k.__rest(f,["classes","styles"]),g=a.properties,l=g.classes,l=void 0===l?[]:l,e=g.styles,e=void 0===e?{}:e,g=k.__rest(g,["classes","styles"]),l=Array.isArray(l)?
l:[l];b=Array.isArray(b)?b:[b];h=k.__assign({},e,h);f=k.__assign({},g,f,{classes:k.__spread(l,b),styles:h});c=c?c:a.children;a=a.tag}return{tag:a,deferredPropertiesCallback:m,originalProperties:{},children:c,properties:f,type:d.VNODE}};d.dom=function(a,b){var c=a.node,f=a.attrs,f=void 0===f?{}:f,e=a.props,e=void 0===e?{}:e,h=a.on,h=void 0===h?{}:h,g=a.diffType,g=void 0===g?"none":g;a=a.onAttach;return{tag:c.tagName?c.tagName.toLowerCase():"",properties:e,attributes:f,events:h,children:b,type:d.DOMVNODE,
domNode:c,text:c.tagName?void 0:c.data,diffType:g,onAttach:a}}});