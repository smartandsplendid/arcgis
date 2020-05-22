// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/assignHelper ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/vec4 ../../../../../geometry/support/aaBoundingBox ../../lib/ComponentUtils ../../lib/screenSizePerspectiveUtils ../../lib/Util".split(" "),function(ga,h,ha,P,H,ba,ca,
C,J,K,I,Q,da,R){function S(a,b,c,d,q,e){var g=N(b,c,T);I.setMin(x,a.getBBMin());I.setMax(x,a.getBBMax());H.isSome(q)&&q.applyToAABB(x);if(L(x,b,g,d)){var g=a.getPrimitiveIndices(),r=a.getIndices(),h=a.getPosition(),f=g?g.length:r.length/3;if(f>ea&&(a=a.getChildren(),void 0!==a)){for(g=0;8>g;++g)void 0!==a[g]&&S(a[g],b,c,d,q,e);return}M(b,c,0,f,r,h,g,q,e)}}function M(a,b,c,d,q,e,g,r,h){var f,m,k;if(g){var n,l,z=e.data,E=e.offsetIdx;e=e.strideIdx;var x=a[0],B=a[1];a=a[2];var F=b[0]-x,G=b[1]-B;for(b=
b[2]-a;c<d;++c){var A=g[c],u=3*A;l=E+e*q[u++];var t=z[l++],p=z[l++];f=z[l];l=E+e*q[u++];var w=z[l++];m=z[l++];n=z[l];l=E+e*q[u];u=z[l++];k=z[l++];l=z[l];H.isSome(r)&&(f=r.applyToVertex(t,p,f),t=f[0],p=f[1],f=f[2],n=r.applyToVertex(w,m,n),w=n[0],m=n[1],n=n[2],l=r.applyToVertex(u,k,l),u=l[0],k=l[1],l=l[2]);w-=t;m-=p;n-=f;u-=t;k-=p;l-=f;var y=G*l-k*b,D=b*u-l*F,C=F*k-u*G,v=w*y+m*D+n*C;if(!(Math.abs(v)<=U)){t=x-t;p=B-p;f=a-f;y=t*y+p*D+f*C;if(0<v){if(0>y||y>v)continue}else if(0<y||y<v)continue;D=p*n-m*
f;f=f*w-n*t;p=t*m-w*p;t=F*D+G*f+b*p;if(0<v){if(0>t||y+t>v)continue}else if(0<t||y+t<v)continue;p=(u*D+k*f+l*p)/v;0<=p&&(w=O(w,m,n,u,k,l,V),h(p,w,A))}}}else for(g=e.data,z=e.offsetIdx,E=e.strideIdx,e=a[0],x=a[1],B=a[2],a=b[0]-e,F=b[1]-x,G=b[2]-B,b=c,c*=3;b<d;++b)if(k=z+E*q[c++],t=g[k++],p=g[k++],f=g[k],k=z+E*q[c++],A=g[k++],w=g[k++],m=g[k],k=z+E*q[c++],n=g[k++],u=g[k++],k=g[k],H.isSome(r)&&(f=r.applyToVertex(t,p,f),t=f[0],p=f[1],f=f[2],m=r.applyToVertex(A,w,m),A=m[0],w=m[1],m=m[2],k=r.applyToVertex(n,
u,k),n=k[0],u=k[1],k=k[2]),A-=t,w-=p,m-=f,n-=t,u-=p,k-=f,v=F*k-u*G,y=G*n-k*a,D=a*u-n*F,l=A*v+w*y+m*D,!(Math.abs(l)<=U)){t=e-t;p=x-p;f=B-f;v=t*v+p*y+f*D;if(0<l){if(0>v||v>l)continue}else if(0<v||v<l)continue;y=p*m-w*f;f=f*A-m*t;p=t*w-A*p;t=a*y+F*f+G*p;if(0<l){if(0>t||v+t>l)continue}else if(0<t||v+t<l)continue;p=(n*y+u*f+k*p)/l;0<=p&&(A=O(A,w,m,n,u,k,V),h(p,A,b))}}function O(a,b,c,d,q,e,g){C.vec3.set(W,a,b,c);C.vec3.set(X,d,q,e);C.vec3.cross(g,W,X);C.vec3.normalize(g,g);return g}function N(a,b,c){return C.vec3.set(c,
1/(b[0]-a[0]),1/(b[1]-a[1]),1/(b[2]-a[2]))}function L(a,b,c,d){return Y(a,b,c,d,Infinity)}function Y(a,b,c,d,q){var e=(a[0]-d-b[0])*c[0],g=(a[3]+d-b[0])*c[0],r=Math.min(e,g),e=Math.max(e,g),g=(a[1]-d-b[1])*c[1],h=(a[4]+d-b[1])*c[1],e=Math.min(e,Math.max(g,h));if(0>e)return!1;r=Math.max(r,Math.min(g,h));if(r>e)return!1;g=(a[2]-d-b[2])*c[2];a=(a[5]+d-b[2])*c[2];e=Math.min(e,Math.max(g,a));if(0>e)return!1;r=Math.max(r,Math.min(g,a));return r>e?!1:r<q}function Z(a,b){b=b?Z(b):{};for(var c in a){var d=
a[c];d&&d.forEach&&(d=fa(d));null==d&&c in b||(b[c]=d)}return b}function fa(a){var b=[];a.forEach(function(a){return b.push(a)});return b}Object.defineProperty(h,"__esModule",{value:!0});var aa=ca.mat4f64.create(),x=I.create(),B=R.VertexAttrConstants;h.intersectTriangleGeometry=function(a,b,c,d,q,e,g){b=b&&b.componentVisibilities;c=c.tolerance;if(1<a.componentCount)a:{var r=N(d,q,T),h=a.componentCount,f=a.componentOffsets,m=a.getIndices(B.POSITION),k=a.getAttribute(B.POSITION),n=a.boundingInfo;if(n&&
(I.setMin(x,n.getBBMin()),I.setMax(x,n.getBBMax()),H.isSome(e)&&e.applyToAABB(x),!L(x,d,r,c)))break a;for(n=0;n<h;n++)if(!b||Q.getVisibility(b,n)){if(a.getComponentAABB){var l=a.getComponentAABB(n,x);H.isSome(e)&&e.applyToAABB(l);if(!L(l,d,r,c))continue}M(d,q,f[n]/3,f[n+1]/3,m,k,void 0,e,g)}}else if(!b||Q.getVisibility(b,0))a.boundingInfo?(R.assert("triangle"===a.data.primitiveType),S(a.boundingInfo,d,q,c,e,g)):(b=a.getIndices(B.POSITION),a=a.getAttribute(B.POSITION),M(d,q,0,b.length/3,b,a,void 0,
e,g))};var T=J.vec3f64.create(),U=Math.pow(2,-52),V=J.vec3f64.create();h.intersectTriangles=M;var W=J.vec3f64.create(),X=J.vec3f64.create();h.computeNormal=O;h.computeInvDir=N;h.intersectAabbInvDir=L;h.intersectAabbInvDirBefore=Y;h.transformToWorld=function(a,b,c){return K.vec4.set(c,a[0]-b[0],a[1]-b[1],a[2]-b[2],1)};h.transformToView=function(a,b,c,d){ba.mat4.translate(aa,c,b);return K.vec4.transformMat4(d,a,aa)};h.transformToProjection=function(a,b,c,d){d[0]=a[0]+c[0];d[1]=a[1]+c[1];d[2]=a[2]+c[2];
d[3]=a[3];return K.vec4.transformMat4(d,d,b)};h.transformToNDC=function(a,b){return K.vec4.scale(b,a,1/Math.abs(a[3]))};h.verticalOffsetAtDistance=function(a,b,c,d,q){var e=(c.screenLength||0)*a.pixelRatio;q&&(e=da.scale(e,d,b,q));return P.glClamp(e*Math.tan(.5*a.fovY)/(.5*a.fullHeight)*b,c.minWorldLength||0,null!=c.maxWorldLength?c.maxWorldLength:Infinity)};h.acquireIfNotUndefined=function(a,b,c){if(void 0!==a)return b.acquire(a,c)};h.releaseIfNotUndefined=function(a,b){void 0!==a&&b.release(a)};
h.bindScreenSizePerspective=function(a,b,c){void 0===c&&(c="screenSizePerspectiveAlignment");if(a){var d=a.parameters;b.setUniform4f(c,d.divisor,d.offset,d.minPixelSize,a.paddingPixelsOverride)}};h.copyParameters=Z;h.updateParameters=function(a,b){var c=!1,d;for(d in b){var q=b[d];void 0!==q&&(c=!0,Array.isArray(q)?a[d]=q.slice():a[d]=q)}return c};h.intersectDrapedRenderLineGeometry=function(a,b,c,d,q){if(b.options.selectionMode){b=a.getAttribute(B.POSITION).data;var e=a.getAttribute(B.SIZE),g=c[0];
c=c[1];a=(((e&&e.data[0])+d)/2+4)*a.pixelRatio;d=Number.MAX_VALUE;for(e=0;e<b.length-5;e+=3){var r=b[e],h=b[e+1],f=g-r,m=c-h,r=b[e+3]-r,h=b[e+4]-h,k=P.clamp((r*f+h*m)/(r*r+h*h),0,1),f=r*k-f,m=h*k-m,m=f*f+m*m;m<d&&(d=m)}d<a*a&&q()}};h.colorMixModes={multiply:1,ignore:2,replace:3,tint:4};var ea=1E3});