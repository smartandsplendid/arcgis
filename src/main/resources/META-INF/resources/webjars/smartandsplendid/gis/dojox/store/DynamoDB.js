//>>built
define("dojo/_base/declare dojo/Stateful dojo/request dojo/store/util/QueryResults dojo/store/util/SimpleQueryEngine dojo/_base/lang dojo/_base/array dojo/errors/RequestError dojo/Deferred ../encoding/digests/SHA256 ../encoding/digests/_base require".split(" "),function(A,B,w,C,D,q,g,E,x,t,l,F){function k(b,a,c){c=c||l.outputTypes.String;return t._hmac(a,b,c)}function G(b,a,c){this._signingDate=b;b=k("AWS4"+a,b);c=k(b,c);c=k(c,"dynamodb");return k(c,"aws4_request")}function H(b){function a(a){a=String(a);
return 1===a.length?"0"+a:a}var c=String(b.getUTCFullYear()),d=a(b.getUTCMonth()+1),e=a(b.getUTCDate()),h=a(b.getUTCHours()),I=a(b.getUTCMinutes());b=a(b.getUTCSeconds());return c+d+e+"T"+h+I+b+"Z"}function J(b){if("undefined"!==typeof document){var a=document.createElement("a");a.href=b;return a.hostname}b=F.parse(b);return b.hostname}function y(b){if(null==b)return"NULL";var a=typeof b;return"string"===a?"S":"boolean"===a?"BOOL":"number"===a?"N":b instanceof Array?"L":"M"}function f(b){var a=y(b),
c={},d;switch(a){case "BOOL":case "S":d=b;break;case "N":d=String(b);break;case "NULL":d=!0;break;case "M":d={};for(var e in b)d[e]=f(b[e]);break;case "L":d=[];for(e=0;e<b.length;e++)d[e]=f(b[e]);break;default:throw Error("Unknown Dynamo type: "+a);}c[a]=d;return c}function u(b){function a(a){if("N"===c)return Number(a);if("NULL"===c)return null;if("L"===c)return g.map(a,function(a){return u(a)});if("M"===c){var b={},d;for(d in a)b[d]=u(a[d]);return b}return a}var c,d;for(c in b)d=b[c];return"S"===
c.charAt(1)?(c=c.charAt(0),g.map(d,a)):a(d)}function z(b){var a={},c;for(c in b)a[c]=f(b[c]);return a}function v(b){if(!b)return null;var a={},c;for(c in b)a[c]=u(b[c]);return a}return A(B,{tableName:"",attributesToGet:null,consistentRead:!1,maxRetries:5,idProperty:"id",queryEngine:D,region:null,endpointUrl:null,credentials:null,_signRequest:function(b,a){a=H(a||new Date);var c=a.slice(0,8),d=this.credentials.SecretAccessKey,e=this.credentials.AccessKeyId,h=this.credentials.SessionToken,f="",g="";
b.headers["x-amz-date"]=a;h&&(f="x-amz-security-token:"+h+"\n",g=";x-amz-security-token",b.headers["x-amz-security-token"]=h);h=b.method+"\n/\n\nhost:"+b.host+"\nx-amz-date:"+a+"\n"+f+"x-amz-target:"+b.headers["x-amz-target"]+"\n\nhost;x-amz-date"+g+";x-amz-target\n"+t(b.body,l.outputTypes.Hex);d=G(c,d,this.region);a="AWS4-HMAC-SHA256\n"+a+"\n"+c+"/"+this.region+"/dynamodb/aws4_request\n"+t(h,l.outputTypes.Hex);a=k(d,a,l.outputTypes.Hex);b.headers.authorization="AWS4-HMAC-SHA256 Credential\x3d"+e+
"/"+c+"/"+this.region+"/dynamodb/aws4_request,SignedHeaders\x3dhost;x-amz-date;x-amz-target"+g+",Signature\x3d"+a},_rpc:function(b,a){var c,d,e=new x(function(){d&&d.cancel.apply(w,arguments);clearTimeout(c)}),h={"Content-Type":"application/x-amz-json-1.0","x-amz-target":"DynamoDB_20120810."+b};a.TableName=this.tableName;a=JSON.stringify(a);this.endpointUrl||(this.endpointUrl="https://dynamodb."+this.region+".amazonaws.com");this.credentials&&this._signRequest({body:a,host:J(this.endpointUrl),method:"POST",
headers:h});var f=this.endpointUrl,g=this.maxRetries,m=0;(function n(){d=w.post(f,{data:a,headers:h,handleAs:"json"}).then(q.hitch(e,"resolve"),function(a){var b=a.response;++m===g?e.reject(a):500<=b.status||400>b.status||400===b.status&&b.data&&b.data.__type&&(-1<b.data.__type.indexOf("#ProvisionedThroughputExceededException")||-1<b.data.__type.indexOf("#ThrottlingException"))?c=setTimeout(n,50*Math.pow(2,m)):e.reject(a)})})();return e.promise.then(function(a){return a},function(a){var b=a.response&&
a.response.data;if(b)throw new E(b.__type+": "+b.message,a.response);throw a;})},_getKeyFromId:function(b){var a={};this.idProperty instanceof Array?("string"===typeof b&&(b=g.map(b.split("/"),function(a){var b=a.charAt(0);a=a.slice(1);"N"===b&&(a=+a);return a})),g.forEach(b,function(b,d){a[this.idProperty[d]]=f(b)},this)):a[this.idProperty]=f(b);return a},get:function(b){b={Key:this._getKeyFromId(b),ConsistentRead:this.consistentRead};this.attributesToGet&&(b.AttributesToGet=this.attributesToGet);
return this._rpc("GetItem",b).then(function(a){return v(a.Item)})},getIdentity:function(b){return this.idProperty instanceof Array?g.map(this.idProperty,function(a){return y(b[a])+b[a]}).join("/"):b[this.idProperty]},query:function(b,a){function c(a){var b={},c;for(c in a)b[c]=f(a[c]);return b}a=a||{};var d={KeyConditions:{},ConsistentRead:this.consistentRead};this.attributesToGet&&(d.AttributesToGet=this.attributesToGet);a.indexName&&(d.IndexName=a.indexName);if(a.sort&&a.sort.length){if(1<a.sort.length)throw Error("Cannot sort by more than one dimension");
d.IndexName||(d.IndexName=a.sort[0].attribute);d.ScanIndexForward=!a.sort[0].descending}for(var e in b){var h=b[e];d.KeyConditions[e]={AttributeValueList:h instanceof Array?g.map(h,f):[f(h)],ComparisonOperator:"EQ"}}a.filter&&(b=a.filter,d.FilterExpression=b.FilterExpression,b.ExpressionAttributeValues&&(d.ExpressionAttributeValues=c(b.ExpressionAttributeValues)),b.ExpressionAttributeNames&&(d.ExpressionAttributeNames=b.ExpressionAttributeNames));var k=new x(function(){r&&r.cancel.apply(r,arguments)});
b=C(k.promise);!1!==a.fetchTotal&&(b.total=this._rpc("Query",q.mixin({},d,{Select:"COUNT"})).then(function(a){return a.Count}));var l=this,m=[],p="number"===typeof a.start?a.start:0,n=p+(a.count||0)||Infinity,r;(function K(a){d.Limit=Infinity>n?n:void 0;d.ExclusiveStartKey=a;r=l._rpc("Query",d).then(function(a){if(a.Items.length){var b=g.map(a.Items.slice(p),v);0<p&&(p=Math.max(p-b.length,0));n-=b.length;m=m.concat(b)}0<n&&a.LastEvaluatedKey?K(a.LastEvaluatedKey):k.resolve(m)},q.hitch(k,"reject"))})("object"===
typeof a.start?z(a.start):void 0);return b},remove:function(b,a){a=a||{};b={Key:this._getKeyFromId(b),ReturnValues:"ALL_OLD"};if(a.expected){b.Expected={};for(var c in a.expected)b.Expected[c]={Value:f(a.expected[c])}}return this._rpc("DeleteItem",b).then(function(a){return v(a.Attributes)})},put:function(b,a){a=a||{};var c={Item:z(b)};a.id&&q.mixin(c.Item,this._getKeyFromId(a.id));if(!1===a.overwrite)c.Expected={},g.forEach(this.idProperty instanceof Array?this.idProperty:[this.idProperty],function(a){c.Expected[a]=
{Exists:!1}});else if(a.expected){c.Expected={};for(var d in a.expected)c.Expected[d]={Value:f(a.expected[d])}}return this._rpc("PutItem",c).then(function(){})},add:function(b,a){a=a||{};a.overwrite=!1;return this.put(b,a)}})});