// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(B,t){function w(b){var d=b.definition,a=d.classificationMethod,g=d.breakCount,e=d.normalizationType,h=[],c=b.values;if(0===c.length)return[];var c=c.sort(function(a,b){return a-b}),l=c[0];b=c[c.length-1];if("equal-interval"===a)if(c.length>=g){c=(b-l)/g;a=l;for(d=1;d<g;d++){var k=Number((l+d*c).toFixed(6));h.push({minValue:a,maxValue:k,label:p(a,k,e)});a=k}h.push({minValue:a,maxValue:b,label:p(a,b,e)})}else c.forEach(function(a){h.push({minValue:a,maxValue:a,
label:p(a,a,e)})});else if("natural-breaks"===a){for(var c=u(c),n=x(c.uniqueValues,c.valueFrequency,g),a=l,d=1;d<g;d++)c.uniqueValues.length>d&&(k=Number(c.uniqueValues[n[d]].toFixed(6)),h.push({minValue:a,maxValue:k,label:p(a,k,e)}),a=k);h.push({minValue:a,maxValue:b,label:p(a,b,e)})}else if("quantile"===a)if(c.length>=g&&l!==b){a=l;l=Math.ceil(c.length/g);k=0;for(d=1;d<g;d++)n=l+k-1,n>c.length&&(n=c.length-1),0>n&&(n=0),h.push({minValue:a,maxValue:c[n],label:p(a,c[n],e)}),a=c[n],k+=l,l=Math.ceil((c.length-
k)/(g-d));h.push({minValue:a,maxValue:b,label:p(a,b,e)})}else for(a=-1,d=0;d<c.length;d++)k=c[d],k!==a&&(a=k,h.push({minValue:a,maxValue:k,label:p(a,k,e)}),a=k);else if("standard-deviation"===a)if(n=y(c),a=z(c,n),0===a)h.push({minValue:c[0],maxValue:c[0],label:p(c[0],c[0],e)});else{for(var c=A(l,b,g,n,a),c=c*a,f=0,a=l,d=g;1<=d;d--)l=Number((n-(d-.5)*c).toFixed(6)),h.push({minValue:a,maxValue:l,label:p(a,l,e)}),a=l,f++;k=Number((n+.5*c).toFixed(6));h.push({minValue:a,maxValue:k,label:p(a,k,e)});a=
k;f++;for(d=1;d<=g;d++)k=f===2*g?b:Number((n+(d+.5)*c).toFixed(6)),h.push({minValue:a,maxValue:k,label:p(a,k,e)}),a=k,f++}return h}function p(b,d,a){var g=null;return g=b===d?a&&"percent-of-total"===a?b+"%":b.toString():a&&"percent-of-total"===a?b+"% - "+d+"%":b+" - "+d}function u(b){for(var d=[],a=[],g=Number.MIN_VALUE,e=1,h=-1,c=0;c<b.length;c++){var l=b[c];l===g?(e++,a[h]=e):null!==l&&(d.push(l),g=l,e=1,a.push(e),h++)}return{uniqueValues:d,valueFrequency:a}}function x(b,d,a){var g=b.length,e=[];
a>g&&(a=g);for(var h=0;h<a;h++)e.push(Math.round(h*g/a-1));e.push(g-1);for(var h=v(e,b,d,a),g=h.mean,h=h.sdcm,c=a,l=0,k=0,n=0,f=0,p=!0,q=0;2>q&&p;q++){0===q&&(p=!1);for(var m=0;m<c-1;m++)for(;e[m+1]+1!==e[m+2];)if(e[m+1]+=1,l=r(m,e,b,d),n=l.sbMean,l=l.sbSdcm,k=r(m+1,e,b,d),f=k.sbMean,k=k.sbSdcm,l+k<h[m]+h[m+1])h[m]=l,h[m+1]=k,g[m]=n,g[m+1]=f,p=!0;else{--e[m+1];break}for(m=c-1;0<m;m--)for(;e[m]!==e[m-1]+1;)if(--e[m],l=r(m-1,e,b,d),n=l.sbMean,l=l.sbSdcm,k=r(m,e,b,d),f=k.sbMean,k=k.sbSdcm,l+k<h[m-1]+
h[m])h[m-1]=l,h[m]=k,g[m-1]=n,g[m]=f,p=!0;else{e[m]+=1;break}}p&&(h=v(e,b,d,a));return e}function v(b,d,a,g){for(var e=[],h=[],c=[],l=0,k=[],n=[],f=0;f<g;f++){var p=r(f,b,d,a);k.push(p.sbMean);n.push(p.sbSdcm);l+=n[f]}for(var q=l,m=!0;m||l<q;){m=!1;e=[];for(f=0;f<g;f++)e.push(b[f]);for(f=0;f<g;f++)for(c=b[f]+1;c<=b[f+1];c++)if(h=d[c],0<f&&c!==b[f+1]&&Math.abs(h-k[f])>Math.abs(h-k[f-1]))b[f]=c;else if(f<g-1&&b[f]!==c-1&&Math.abs(h-k[f])>Math.abs(h-k[f+1])){b[f+1]=c-1;break}q=l;l=0;h=[];c=[];for(f=
0;f<g;f++)h.push(k[f]),c.push(n[f]),p=r(f,b,d,a),k[f]=p.sbMean,n[f]=p.sbSdcm,l+=n[f]}if(l>q){for(f=0;f<g;f++)b[f]=e[f],k[f]=h[f],n[f]=c[f];l=q}return{mean:k,sdcm:n}}function A(b,d,a,g,e){b=Math.max(g-b,d-g)/e/a;return 1<=b?1:.5<=b?.5:.25}function y(b){for(var d=0,a=0;a<b.length;a++)d+=b[a];return d/=b.length}function z(b,d){for(var a=0,g=0;g<b.length;g++)var e=b[g],a=a+(e-d)*(e-d);a/=b.length;return Math.sqrt(a)}function r(b,d,a,g){for(var e=0,h=0,c=d[b]+1;c<=d[b+1];c++)var l=g[c],e=e+a[c]*l,h=h+
l;0>=h&&console.log("Exception in Natural Breaks calculation");e/=h;h=0;for(c=d[b]+1;c<=d[b+1];c++)h+=g[c]*Math.pow(a[c]-e,2);return{sbMean:e,sbSdcm:h}}Object.defineProperty(t,"__esModule",{value:!0});t.createGenerateRendererUniqueValues=function(b){b=u(b);for(var d=[],a=b.uniqueValues.length,g=0;g<a;g++){var e=b.uniqueValues[g];d.push({value:e,count:b.valueFrequency[g],label:e.toString()})}return{uniqueValues:d}};t.createGenerateRendererClassBreaks=function(b){var d=b.normalizationTotal;return{classBreaks:w(b),
normalizationTotal:d}}});