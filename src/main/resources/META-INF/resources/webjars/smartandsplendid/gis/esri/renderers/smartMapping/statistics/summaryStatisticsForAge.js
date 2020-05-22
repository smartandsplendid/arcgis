// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/restHelper ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ./summaryStatistics ./support/ageUtils ./support/ageUtils ../support/utils".split(" "),function(B,C,t,l,m,u,g,w,x,y,e,z,n){function A(c){return m(this,void 0,void 0,function(){var f,h,a,d,b,k,p,q;return l(this,function(r){switch(r.label){case 0:if(!(c&&c.layer&&
c.startTime&&c.endTime&&c.unit))throw new g("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");f=[0,2,1,3];h=c.layer;a=u(c,["layer"]);d=n.createLayerAdapter(h,f);b=t({layerAdapter:d},a);if(!d)throw new g("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(f).join(", "));k=b.view;p=w.isSome(b.signal)?{signal:b.signal}:null;return[4,x.all([k&&k.when(),d.load(p)])];case 1:r.sent();
if(q=e.verifyDates(d,b.startTime,b.endTime,"summary-statistics-for-age:invalid-parameters"))throw q;if(-1===e.supportedAgeUnits.indexOf(b.unit))throw new g("summary-statistics-for-age:invalid-parameters","Supported units are: "+e.supportedAgeUnits.join(", "));return[2,b]}})})}return function(c){return m(this,void 0,void 0,function(){var f,h,a,d,b,k,p,q,r,g,e,m,n,v;return l(this,function(l){switch(l.label){case 0:return[4,A(c)];case 1:return f=l.sent(),h=f.layerAdapter,a=u(f,["layerAdapter"]),d=a.view,
b=a.startTime,k=a.endTime,p=a.unit,q=a.minValue,r=a.maxValue,g=a.signal,e=z.getAgeExpressions({layer:h,startTime:b,endTime:k,unit:p}),m=e.valueExpression,n=e.statisticsQuery,v=t({layer:h,valueExpression:m},n,{minValue:q,maxValue:r,view:d,signal:g}),[2,y(v)]}})})}});