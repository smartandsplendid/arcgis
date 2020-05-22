// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],function(g,h,c,e,f){return function(){function b(a){this._renderUnitOffset=this._meterUnitOffset=0;this.featureExpressionInfoContext=null;a?this.set(a):this.setDefaults()}Object.defineProperty(b.prototype,"meterUnitOffset",{get:function(){return this._meterUnitOffset},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unit",{get:function(){return this._unit},
enumerable:!0,configurable:!0});b.prototype.setUnit=function(a){this._unit=a;this._metersPerElevationInfoUnit=e.getMetersPerUnit(a)};b.prototype.setDefaults=function(){this.mode=null;this._renderUnitOffset=this._meterUnitOffset=0;this.featureExpressionInfoContext=null;this.setUnit("meters")};b.prototype.set=function(a){this.mode=a.mode;this._meterUnitOffset=a._meterUnitOffset;this._renderUnitOffset=a._renderUnitOffset;this.featureExpressionInfoContext=a.featureExpressionInfoContext;this.setUnit(a.unit)};
b.prototype.setOffsetMeters=function(a){this._meterUnitOffset=a;this._renderUnitOffset=0};b.prototype.setOffsetElevationInfoUnits=function(a){this._meterUnitOffset=a*this._metersPerElevationInfoUnit;this._renderUnitOffset=0};b.prototype.addOffsetRenderUnits=function(a){this._renderUnitOffset+=a};b.prototype.calculateOffsetRenderUnits=function(a){var b=this._meterUnitOffset,c=this.featureExpressionInfoContext;null!=c&&(b+=f.execute(c)*this._metersPerElevationInfoUnit);return b/a.unitInMeters+this._renderUnitOffset};
b.prototype.setFromElevationInfo=function(a){this.mode=a.mode;this.setUnit(a.unit||"meters");this.setOffsetElevationInfoUnits(c.unwrapOr(a.offset,0))};b.fromElevationInfo=function(a){var d=new b;c.isSome(a)&&d.setFromElevationInfo(a);return d};return b}()});