// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../webgl ../definitions ./WGLBrush".split(" "),function(g,h,k,l,d,m){Object.defineProperty(h,"__esModule",{value:!0});g=function(e){function c(){return null!==e&&e.apply(this,arguments)||this}k(c,e);c.prototype.prepareState=function(a,b,f){a=a.context;f=f&&-1!==f.indexOf("id");a.setBlendingEnabled(!f);a.setBlendFunctionSeparate(1,771,1,771);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0);
a.setStencilFunction(514,b.stencilRef,255)};c.prototype.draw=function(a,b,f){var n=this;if(b.isReady&&b.hasData){b.commitChanges();var c=this.getGeometryType(),d=b.getDisplayList(),e=b.getGeometry(c);e&&d&&(a.timeline.begin(this.name),d.byType(c,function(c){n.drawGeometry(a,b,c,e,f)}),a.timeline.end(this.name))}};c.prototype._getVAO=function(a,b,c,d){d.vao||(d.vao=new l.VertexArrayObject(a,c,b,d.vertexBufferMap,d.indexBuffer));return d.vao};c.prototype._setSharedUniforms=function(a,b,c){a.setUniform1f("u_pixelRatio",
b.pixelRatio);a.setUniformMatrix3fv("u_dvsMat3",c.transforms.dvs);a.setUniformMatrix3fv("u_displayViewMat3",b.state.displayViewMat3);a.setUniformMatrix4fv("u_insideEffectMat4",b.rendererInfo.insideEffect);a.setUniformMatrix4fv("u_outsideEffectMat4",b.rendererInfo.outsideEffect);a.setUniform1fv("u_insideOpacities",b.rendererInfo.insideOpacities);a.setUniform1fv("u_outsideOpacities",b.rendererInfo.outsideOpacities);a.setUniform1i("u_attributeTextureSize",b.attributeView.size);a.setUniform1i("u_attributeData0",
d.TEXTURE_BINDING_ATTRIBUTE_DATA_0);a.setUniform1i("u_attributeData1",d.TEXTURE_BINDING_ATTRIBUTE_DATA_1);a.setUniform1i("u_attributeData2",d.TEXTURE_BINDING_ATTRIBUTE_DATA_2);a.setUniform1i("u_attributeData3",d.TEXTURE_BINDING_ATTRIBUTE_DATA_3)};return c}(m.default);h.default=g});