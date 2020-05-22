// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/makeTemplateObjectHelper ../core/shaderLibrary/ForwardLinearDepth.glsl ../core/shaderLibrary/Offset.glsl ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/PositionAttribute.glsl ../core/shaderLibrary/attributes/SymbolColor.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/attributes/VertexColor.glsl ../core/shaderLibrary/attributes/VertexNormal.glsl ../core/shaderLibrary/attributes/VerticalOffset.glsl ../core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../core/shaderLibrary/shading/ComputeNormalTexture.glsl ../core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderLibrary/util/AlphaDiscard.glsl ../core/shaderLibrary/util/MixExternalColor.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),
function(W,e,d,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,f,T,c,U){Object.defineProperty(e,"__esModule",{value:!0});e.build=function(a){var b=new U.ShaderBuilder,e=b.vertex.code,V=b.fragment.code;b.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3");b.include(E.PositionAttribute);b.varyings.add("vpos","vec3");b.include(S.VisualVariables,a);b.include(C.InstancedDoublePrecision,a);b.include(J.VerticalOffset,a);0===a.output&&(b.include(D.NormalAttribute,
a),b.include(B.Transform,{linearDepth:!1}),0===a.normalType&&a.offsetBackfaces&&b.include(z.Offset),b.include(L.ComputeNormalTexture,a),b.include(I.VertexNormal,a),a.instancedColor&&b.attributes.add("instanceColor","vec4"),b.varyings.add("localvpos","vec3"),b.include(G.TextureCoordinateAttribute,a),b.include(y.ForwardLinearDepth,a),b.include(F.SymbolColor,a),b.include(H.VertexColor,a),b.vertex.uniforms.add("externalColor","vec4"),b.varyings.add("vcolorExt","vec4"),e.add(c.glsl(g||(g=d(["\n      void main(void) {\n        forwardNormalizedVertexColor();\n        vcolorExt \x3d externalColor;\n        ",
"\n        vcolorExt *\x3d vvColor();\n        vcolorExt *\x3d getSymbolColor();\n        forwardColorMixMode();\n\n        if (vcolorExt.a \x3c ",") {\n          gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        }\n        else {\n          vpos \x3d calculateVPos();\n          localvpos \x3d vpos - view[3].xyz;\n          vpos \x3d subtractOrigin(vpos);\n          ","\n          vpos \x3d addVerticalOffset(vpos, localOrigin);\n          ","\n          gl_Position \x3d transformPosition(proj, view, vpos);\n          ",
"\n        }\n        forwardLinearDepth();\n        forwardTextureCoordinates();\n      }\n    "],["\n      void main(void) {\n        forwardNormalizedVertexColor();\n        vcolorExt \x3d externalColor;\n        ","\n        vcolorExt *\x3d vvColor();\n        vcolorExt *\x3d getSymbolColor();\n        forwardColorMixMode();\n\n        if (vcolorExt.a \x3c ",") {\n          gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        }\n        else {\n          vpos \x3d calculateVPos();\n          localvpos \x3d vpos - view[3].xyz;\n          vpos \x3d subtractOrigin(vpos);\n          ",
"\n          vpos \x3d addVerticalOffset(vpos, localOrigin);\n          ","\n          gl_Position \x3d transformPosition(proj, view, vpos);\n          ","\n        }\n        forwardLinearDepth();\n        forwardTextureCoordinates();\n      }\n    "])),a.instancedColor?"vcolorExt *\x3d instanceColor;":"",c.glsl.float(f.symbolAlphaCutoff),0===a.normalType?c.glsl(h||(h=d(["\n          vNormalWorld \x3d dpNormal(vvLocalNormal(normalModel()));"],["\n          vNormalWorld \x3d dpNormal(vvLocalNormal(normalModel()));"]))):
"",a.vertexTangets?"transformVertexTangent(mat3(modelNormal));":"",0===a.normalType&&a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":"")),b.include(A.Slice,a),b.include(N.EvaluateSceneLighting,a),b.include(M.EvaluateAmbientOcclusion,a),b.include(f.DiscardOrAdjustAlpha,a),a.receiveShadows&&b.include(R.ReadShadowMap,a),b.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity",
"float").add("layerOpacity","float"),a.hasColorTexture&&b.fragment.uniforms.add("tex","sampler2D"),b.include(Q.PhysicallyBasedRenderingParameters,a),b.include(P.PhysicallyBasedRendering,a),b.include(T.MixExternalColor,{stages:1}),b.include(O.Normals,a),V.add(c.glsl(k||(k=d(["\n      void main() {\n        discardBySlice(vpos);\n        ","\n        shadingParams.viewDirection \x3d normalize(vpos - camPos);\n        ","\n        ","\n        float ssao \x3d evaluateAmbientOcclusionInverse();\n        ssao *\x3d getBakedOcclusion();\n\n        float additionalAmbientScale \x3d _oldHeuristicLighting(vpos + localOrigin);\n        vec3 additionalLight \x3d ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n        ",
"\n        vec3 matColor \x3d max(ambient, diffuse);\n        ","\n        ","\n        ","\n        ","\n        gl_FragColor \x3d highlightSlice(vec4(shadedColor, opacity_), vpos);\n      }\n    "],["\n      void main() {\n        discardBySlice(vpos);\n        ","\n        shadingParams.viewDirection \x3d normalize(vpos - camPos);\n        ","\n        ","\n        float ssao \x3d evaluateAmbientOcclusionInverse();\n        ssao *\x3d getBakedOcclusion();\n\n        float additionalAmbientScale \x3d _oldHeuristicLighting(vpos + localOrigin);\n        vec3 additionalLight \x3d ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n        ",
"\n        vec3 matColor \x3d max(ambient, diffuse);\n        ","\n        ","\n        ","\n        ","\n        gl_FragColor \x3d highlightSlice(vec4(shadedColor, opacity_), vpos);\n      }\n    "])),a.hasColorTexture?c.glsl(l||(l=d(["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        ","\n        discardOrAdjustAlpha(texColor);"],["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        ","\n        discardOrAdjustAlpha(texColor);"])),a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":
""):c.glsl(m||(m=d(["vec4 texColor \x3d vec4(1.0);"],["vec4 texColor \x3d vec4(1.0);"]))),3===a.normalType?c.glsl(n||(n=d(["\n        vec3 normal \x3d screenDerivativeNormal(localvpos);"],["\n        vec3 normal \x3d screenDerivativeNormal(localvpos);"]))):c.glsl(p||(p=d(["\n        shadingParams.normalView \x3d vNormalWorld;\n        vec3 normal \x3d shadingNormal(shadingParams);"],["\n        shadingParams.normalView \x3d vNormalWorld;\n        vec3 normal \x3d shadingNormal(shadingParams);"]))),
1===a.pbrMode?"applyPBRFactors();":"",a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":0===a.viewingMode?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;",a.attributeColor?c.glsl(q||(q=d(["\n        vec3 albedo_ \x3d mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ \x3d layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));"],
["\n        vec3 albedo_ \x3d mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ \x3d layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));"]))):c.glsl(r||(r=d(["\n        vec3 albedo_ \x3d mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ \x3d layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));\n        "],
["\n        vec3 albedo_ \x3d mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ \x3d layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));\n        "]))),a.hasNormalTexture?c.glsl(t||(t=d(["\n              mat3 tangentSpace \x3d ","\n              vec3 shadedNormal \x3d computeTextureNormal(tangentSpace, vuv0);"],["\n              mat3 tangentSpace \x3d ","\n              vec3 shadedNormal \x3d computeTextureNormal(tangentSpace, vuv0);"])),
a.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"):"vec3 shadedNormal \x3d normal;",1===a.pbrMode||2===a.pbrMode?0===a.viewingMode?c.glsl(u||(u=d(["vec3 normalGround \x3d normalize(vpos + localOrigin);"],["vec3 normalGround \x3d normalize(vpos + localOrigin);"]))):c.glsl(v||(v=d(["vec3 normalGround \x3d vec3(0.0, 0.0, 1.0);"],["vec3 normalGround \x3d vec3(0.0, 0.0, 1.0);"]))):c.glsl(w||(w=d([""],[""]))),1===a.pbrMode||2===a.pbrMode?c.glsl(x||(x=d(["\n            float additionalAmbientIrradiance \x3d additionalAmbientIrradianceFactor * lightingMainIntensity[2];\n            vec3 shadedColor \x3d evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);"],
["\n            float additionalAmbientIrradiance \x3d additionalAmbientIrradianceFactor * lightingMainIntensity[2];\n            vec3 shadedColor \x3d evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);"]))):"vec3 shadedColor \x3d evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);")));b.include(K.DefaultMaterialAuxiliaryPasses,a);return b};var h,
g,l,m,n,p,q,r,t,u,v,w,x,k});