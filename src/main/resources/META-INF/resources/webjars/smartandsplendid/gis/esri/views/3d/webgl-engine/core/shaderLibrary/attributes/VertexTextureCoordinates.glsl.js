// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/makeTemplateObjectHelper ./TextureCoordinateAttribute.glsl ../util/TextureAtlasLookup.glsl ../../shaderModules/interfaces".split(" "),function(m,e,c,k,l,d){Object.defineProperty(e,"__esModule",{value:!0});e.VertexTextureCoordinates=function(a,b){a.include(k.TextureCoordinateAttribute,b);a.fragment.code.add(d.glsl(f||(f=c(["\n  struct TextureLookupParameter {\n    vec2 uv;\n    ","\n  } vtc;\n  "],["\n  struct TextureLookupParameter {\n    vec2 uv;\n    ",
"\n  } vtc;\n  "])),b.supportsTextureAtlas?"vec2 size;":""));1===b.attributeTextureCoordinates&&a.fragment.code.add(d.glsl(g||(g=c(["\n      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return texture2D(tex, params.uv);\n      }\n    "],["\n      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return texture2D(tex, params.uv);\n      }\n    "]))));2===b.attributeTextureCoordinates&&(a.include(l.TextureAtlasLookup),a.fragment.code.add(d.glsl(h||
(h=c(["\n    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);\n      }\n    "],["\n    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);\n      }\n    "])))))};var f,g,h});