// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./TimeReference ./timeUtils".split(" "),function(r,t,n,e,h,f,p,k,d,q,l){return function(m){function b(a){a=m.call(this,a)||this;a.cumulative=!1;a.endField=null;a.fullTimeExtent=null;a.hasLiveData=!1;a.interval=null;a.startField=null;a.timeReference=null;a.trackIdField=null;a.useTime=!0;
return a}n(b,m);g=b;b.prototype.readFullTimeExtent=function(a,c){return c.timeExtent&&Array.isArray(c.timeExtent)&&2===c.timeExtent.length?new h({start:c.timeExtent[0],end:c.timeExtent[1]}):null};b.prototype.writeFullTimeExtent=function(a,c){c.timeExtent=a&&a.start&&a.end?[a.start.getTime(),a.end.getTime()]:null};b.prototype.readInterval=function(a,c){return c.timeInterval&&c.timeIntervalUnits?new f({value:c.timeInterval,unit:l.timeUnitKebabDictionary.fromJSON(c.timeIntervalUnits)}):c.defaultTimeInterval&&
c.defaultTimeIntervalUnits?new f({value:c.defaultTimeInterval,unit:l.timeUnitKebabDictionary.fromJSON(c.defaultTimeIntervalUnits)}):null};b.prototype.writeInterval=function(a,c){a?(a=a.toJSON(),c.timeInterval=a.value,c.timeIntervalUnits=a.unit):(c.timeInterval=null,c.timeIntervalUnits=null)};b.prototype.clone=function(){var a=this.fullTimeExtent,c=this.trackIdField,b=this.useTime;return new g({cumulative:this.cumulative,endField:this.endField,hasLiveData:this.hasLiveData,interval:this.interval,startField:this.startField,
timeReference:k.clone(this.timeReference),fullTimeExtent:k.clone(a),trackIdField:c,useTime:b})};var g;e([d.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],b.prototype,"cumulative",void 0);e([d.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],b.prototype,"endField",void 0);e([d.property({type:h,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"fullTimeExtent",
void 0);e([d.reader("fullTimeExtent",["timeExtent"])],b.prototype,"readFullTimeExtent",null);e([d.writer("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null);e([d.property({type:Boolean,json:{write:!0}})],b.prototype,"hasLiveData",void 0);e([d.property({type:f,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"interval",void 0);e([d.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],b.prototype,"readInterval",null);e([d.writer("interval")],
b.prototype,"writeInterval",null);e([d.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],b.prototype,"startField",void 0);e([d.property({type:q,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"timeReference",void 0);e([d.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],b.prototype,"trackIdField",void 0);e([d.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],b.prototype,
"useTime",void 0);return b=g=e([d.subclass("esri.layers.support.TimeInfo")],b)}(d.declared(p.JSONSupport))});