// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/attributes/VerticalOffset.glsl ../core/shaderLibrary/util/Camera.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../materials/internal/MaterialUtil ./LineCallout.glsl ./LineCallout.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState".split(" "),
function(l,h,k,e,d,m,n,p,q,r,t,a,u,v,w,x,y,z,f){Object.defineProperty(h,"__esModule",{value:!0});d=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}k(b,a);b.prototype.initializeProgram=function(g){var a=b.shader.get(),c=this.configuration,a=a.build({occlusionTestEnabled:c.occlusionTestEnabled,verticalOffsetEnabled:c.verticalOffset,screenSizePerspectiveEnabled:c.screenSizePerspective,depthHudEnabled:c.depthHudEnabled,depthHudAlignStartEnabled:c.depthHudAlignStartEnabled,screenCenterOffsetUnitsEnabled:c.screenCenterOffsetUnitsEnabled,
slicePlaneEnabled:c.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,viewingMode:g.viewingMode});return new y(g.rctx,a.generateSource("vertex"),a.generateSource("fragment"),u.Default3D)};b.prototype.bindPass=function(b,a,c){x.LineCallout.bindUniforms(this.program,a,c);p.VerticalOffset.bindUniforms(this.program,a,c);var g=c.cameraAboveGround?1:-1;this.program.setUniform1i("hudVisibilityTexture",0);b.bindTexture(c.hudVisibilityTexture,0);this.program.setUniform1f("cameraGroundRelative",
g);this.program.setUniform1f("polygonOffset",a.shaderPolygonOffset);this.program.setUniform4fv("viewport",c.viewport);this.program.setUniform1f("perDistancePixelRatio",Math.tan(c.fovY/2)/(c.viewport[2]/2));this.program.setUniformMatrix4fv("viewNormal",c.viewInvTransp);this.program.setUniform2f("pixelToNDC",2/c.viewport[2],2/c.viewport[3]);this.program.setUniform1f("lineSize",Math.ceil(a.size)*(c.pixelRatio||1));v.bindScreenSizePerspective(a.screenSizePerspective,this.program)};b.prototype.bindDraw=
function(a){n.Transform.bindUniforms(this.program,a);q.Camera.bindUniforms(this.program,a);m.Slice.bindUniformsWithOrigin(this.program,this.configuration,a)};b.prototype.initializePipeline=function(){return this.configuration.depthHudEnabled?f.makePipelineState({depthTest:{func:513},depthWrite:z.defaultDepthWriteParams}):f.makePipelineState({blending:f.separateBlendingParams(1,770,771,771),depthTest:{func:513},colorWrite:f.defaultColorWriteParams})};b.shader=new r.ReloadableShaderModule(w,"./LineCallout.glsl",
l);return b}(t.ShaderTechnique);h.LineCalloutTechnique=d;d=function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a.occlusionTestEnabled=!0;a.verticalOffset=!1;a.screenSizePerspective=!1;a.depthHudEnabled=!1;a.depthHudAlignStartEnabled=!1;a.screenCenterOffsetUnitsEnabled=0;a.slicePlaneEnabled=!1;return a}k(b,d);e([a.parameter()],b.prototype,"occlusionTestEnabled",void 0);e([a.parameter()],b.prototype,"verticalOffset",void 0);e([a.parameter()],b.prototype,"screenSizePerspective",void 0);
e([a.parameter()],b.prototype,"depthHudEnabled",void 0);e([a.parameter()],b.prototype,"depthHudAlignStartEnabled",void 0);e([a.parameter({count:2})],b.prototype,"screenCenterOffsetUnitsEnabled",void 0);e([a.parameter()],b.prototype,"slicePlaneEnabled",void 0);return b}(a.ShaderTechniqueConfiguration);h.LineCalloutTechniqueConfiguration=d});