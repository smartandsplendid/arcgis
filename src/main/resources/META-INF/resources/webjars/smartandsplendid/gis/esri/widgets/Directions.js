// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper dojo/i18n!../nls/common dojo/i18n!./Directions/nls/Directions ../intl ../moment ../core/Collection ../core/events ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ../libs/sortablejs/Sortable ./Search ./Widget ./Directions/DirectionsViewModel ./Directions/support/CostSummary ./Directions/support/directionsUtils ./Directions/support/maneuverUtils ./Directions/support/RouteSections ./support/DatePicker ./support/TimePicker ./support/widget".split(" "),
function(y,Q,z,e,A,v,g,p,B,C,w,D,l,h,E,F,G,x,H,q,I,J,K,L,c){function M(c){c=c.getTimezoneOffset();var b=Math.abs(Math.floor(c)%60);return"GMT"+(0<c?"-":"+")+p.formatNumber(Math.abs(Math.floor(c/60)),u)+p.formatNumber(b,u)}var N=y.toUrl("../themes/base/images/maneuvers/"),O={hour:"numeric",minute:"numeric"},u={minimumIntegerDigits:2};return function(u){function b(a){var d=u.call(this,a)||this;d._autoStopRemovalDelay=100;d._costSummary=new H;d._departureTime="now";d._datePicker=new K;d._handles=new D;
d._newPlaceholderStop=null;d._routeSections=new J;d._stops=new C([{},{}]);d._stopsToSearches=new Map;d._timePicker=new L;d.goToOverride=null;d.iconClass="esri-icon-directions";d.label=g.widgetLabel;d.lastRoute=null;d.maxStops=null;d.routeServiceUrl=null;d.routeSymbol=null;d.searchProperties=null;d.stopSymbols=null;d.view=null;d.viewModel=new x;d._setUpDragAndDropStops=function(a){d._sortable=E.create(a,{draggable:".esri-directions__stop-row--valid",ghostClass:"esri-directions__stop-row-ghost",handle:".esri-directions__stop-handle",
onEnd:d._handleStopInputDragEnd})};d._handleStopInputDragEnd=function(a){var c=a.oldIndex,b=a.newIndex;a=a.target;if(c!==b){var k=a.children,g=k[c];a.insertBefore(k[b],0>b-c?g.nextElementSibling:g);a=d._stops;a.reorder(a.getItemAt(c),b);d._processStops()}};return d}z(b,u);b.prototype.postInitialize=function(){var a=this;this.own([l.init(this,"viewModel.lastRoute",function(){a._routeSections.routePath=a.get("viewModel.directionLines");a._activeManeuver=null;a._focusedManeuver=null;a.scheduleRender()}),
l.init(this,"viewModel.selectedTravelMode, viewModel.departureTime",function(){1<a.get("viewModel.stops.length")&&a.getDirections()}),l.when(this,"view",function(d,c){c&&(a._viewClickHandle=null,a._handles.remove(c));d&&(c=a._prepViewClick(),a._handles.add([w.on(d.surface,"mousedown",function(){return a._autoStopRemovalDelay=500}),w.on(d.surface,"mouseup",function(){return a._autoStopRemovalDelay=100}),c],a.view.surface),a._viewClickHandle=c)}),l.whenOnce(this,"routeServiceUrl",function(){return a.viewModel.load()}),
l.watch(this,"viewModel.stops.length",function(d){0===d&&(a._stops.toArray().forEach(function(d){return a._removeStop(d,!0)}),a._stops.addMany([{},{}]),a.scheduleRender())})])};b.prototype.destroy=function(){this._datePicker.destroy();this._timePicker.destroy();this._stopsToSearches.forEach(function(a){return a.destroy()});this._sortable&&this._sortable.destroy()};b.prototype.getDirections=function(){return null};b.prototype.zoomToRoute=function(){};b.prototype.render=function(){return c.tsx("div",
{class:this.classes("esri-directions esri-widget esri-widget--panel","esri-directions__scroller")},this._renderPanelContent())};b.prototype._renderPanelContent=function(){var a,d=this.viewModel.state,b="initializing"===d,n="error"===d&&!this.viewModel.serviceDescription,f="unauthenticated"===d,d=(a={},a["esri-directions__panel-content--loading"]=b,a["esri-directions__panel-content--error"]=n,a["esri-directions__panel-content--sign-in"]=f,a);a=b?"presentation":"group";b=f?this._renderSignIn():n?this._renderMessage(this._getErrorMessage()):
b?this._renderLoader():this._renderReadyContent();return c.tsx("div",{class:this.classes("esri-directions__panel-content",d),role:a},b)};b.prototype._renderReadyContent=function(){return[this._renderStopsContainer(),this._renderTravelModeOptions(),this._renderDepartureTimeControls(),this._renderSectionSplitter(),this._renderDirectionsContainer(),this._renderDisclaimer()]};b.prototype._renderSignIn=function(){return c.tsx("div",{key:"sign-in",class:"esri-directions__sign-in-content"},c.tsx("h2",{class:this.classes("esri-widget__heading",
"esri-directions__content-title")},g.widgetLabel),this._renderPlaceholder(),c.tsx("h3",{class:"esri-widget__heading"},g.signInRequired),c.tsx("button",{class:this.classes("esri-button","esri-button--secondary","esri-directions__sign-in-button"),tabIndex:0,onclick:this._handleSignInClick,bind:this},v.auth.signIn))};b.prototype._handleSignInClick=function(){this.viewModel.load().catch(function(){})};b.prototype._renderTravelModeOptions=function(){var a=this.viewModel.travelModes;if(0===a.length)return null;
var d=this.viewModel.selectedTravelMode,b=d.name||g.travelMode;return c.tsx("select",{"aria-label":b,bind:this,class:this.classes("esri-directions__travel-modes-select","esri-select"),key:"esri-directions__travel-mode-options",onchange:this._handleTravelModeChange,title:b},a.map(function(a){return c.tsx("option",{key:a,"data-mode":a,selected:a.id===d.id,value:a.id},a.name)}))};b.prototype._handleTravelModeChange=function(a){a=a.currentTarget;a=a.item(a.selectedIndex);this.viewModel.selectedTravelMode=
a["data-mode"]};b.prototype._renderStopsContainer=function(){return c.tsx("div",{class:"esri-directions__section",key:"esri-directions__stops-container",role:"group"},this._renderStops())};b.prototype._renderDepartureTimeControls=function(){var a="now"===this._departureTime,d=g.departureTime;return c.tsx("div",{class:"esri-directions__departure-time",key:"esri-directions__departure-time-controls",role:"group"},c.tsx("select",{"aria-label":d,bind:this,class:this.classes("esri-directions__departure-time-select",
"esri-select"),onchange:this._handleDepartureOptionChange,title:d},c.tsx("option",{value:"now",selected:a},g.leaveNow),c.tsx("option",{value:"depart-by",selected:!a},g.departBy)),a?null:this._renderTimeControls())};b.prototype._renderStops=function(){var a=this,d=this._stops,b=d.toArray().map(function(b,k){var n,f,e,m=d.length,h=1<k&&!b.result,P=(n={},n["esri-icon-radio-unchecked"]=0<=k&&k<m-1,n["esri-icon-radio-checked"]=k===m-1,n);n=(f={},f["esri-directions__stop-icon-container--last"]=k===m-1,
f);f=(e={},e["esri-directions__stop-row--valid"]=!h,e);var l=(e=d.getItemAt(m-1))&&e.result;e=(e=d.getItemAt(k+1))&&e.result;var r=k===m-1,t=k===m-2;e=2===m&&0===k||2<m&&!r&&!t||2<m&&t&&e||2<m&&r&&!b.result;var m=2===m||3===m&&!l||h,h=a._acquireSearch(b),l=g.removeStop,r=g.reverseStops,t=g.unlocated,t=p.substitute(g.stopLabelTemplate,{number:k+1,label:b.result?b.result.name:t}),q=a.id+"__stop--"+k;b=!!h.searchTerm&&!!h.selectedResult&&!!b.result&&h.selectedResult===b.result;return c.tsx("li",{"aria-label":t,
afterCreate:a._handleStopFieldCreation,bind:a,class:a.classes("esri-directions__stop-row",f),id:q,key:k,"data-stop-index":k},c.tsx("div",{class:"esri-directions__stop-handle"},c.tsx("span",{"aria-hidden":"true",class:a.classes("esri-directions__stop-icon","esri-icon-handle-vertical","esri-directions__stop-handle-icon","esri-directions__stop-icon--interactive")}),c.tsx("div",{bind:a,"aria-labelledby":q,class:a.classes("esri-directions__stop-icon-container",n),"data-stop-index":k,onclick:a._handleStopIconClick,
onkeydown:a._handleStopIconClick,role:"button"},c.tsx("span",{class:a.classes("esri-directions__stop-icon",P),tabindex:b?"0":null}))),c.tsx("div",{class:"esri-directions__stop-input"},h.render(),c.tsx("div",{class:"esri-directions__stop-underline"})),c.tsx("div",{class:"esri-directions__stop-options",role:"group"},c.tsx("div",{"aria-label":l,class:"esri-directions__remove-stop",bind:a,"data-stop-index":k,hidden:m,onkeydown:a._handleRemoveStop,onclick:a._handleRemoveStop,role:"button",tabIndex:0,title:l},
c.tsx("span",{"aria-hidden":"true",class:a.classes("esri-directions__stop-icon","esri-directions__remove-stop-icon","esri-icon-close","esri-directions__stop-icon--interactive")}),c.tsx("span",{class:"esri-icon-font-fallback-text"},"removeStopTitle")),c.tsx("div",{"aria-label":r,class:"esri-directions__reverse-stops",bind:a,hidden:e,onkeydown:a._handleReverseStops,onclick:a._handleReverseStops,role:"button",tabIndex:0,title:r},c.tsx("span",{"aria-hidden":"true",class:a.classes("esri-directions__stop-icon",
"esri-icon-up-down-arrows","esri-directions__stop-icon--interactive")}),c.tsx("span",{class:"esri-icon-font-fallback-text"},"removeStopTitle"))))}),n=d.every(function(d){var b=a._stopsToSearches.get(d);return d.result&&b.selectedResult===d.result}),f=this._stops.length>=this.maxStops,e=g.addStop,n=2<=d.length&&n&&!f?c.tsx("div",{"aria-label":e,bind:this,class:"esri-directions__add-stop",key:"esri-directions__add-stop",onfocus:this._handleAddStopFocus,tabIndex:0},c.tsx("span",{"aria-hidden":"true",
class:this.classes("esri-icon-plus","esri-directions__stop-icon","esri-directions__stop-icon--interactive")}),c.tsx("div",{"aria-hidden":"true",class:"esri-directions__add-stop-text"},e)):null;return c.tsx("div",null,c.tsx("ol",{class:"esri-directions__stops",role:"group",afterCreate:this._setUpDragAndDropStops},b),n)};b.prototype._handleStopIconClick=function(a){(a=this._stops.getItemAt(a.currentTarget["data-stop-index"]))&&a.result&&this._centerAtStop(a)};b.prototype._handleClearRouteClick=function(){this.viewModel.reset()};
b.prototype._centerAtStop=function(a){this.viewModel.centerAt(a.result.feature)};b.prototype._handleStopFieldCreation=function(a){var d=this._newPlaceholderStop;d&&(a=this._stops.getItemAt(a["data-stop-index"]),d===a&&this._acquireSearch(a).focus(),this._newPlaceholderStop=null)};b.prototype._handleStopInputBlur=function(a,d){var b=this;this._handles.remove("awaiting-view-click-stop");this.view.cursor=this._previousCursor;a.selectedResult&&d.result&&a.selectedResult===d.result||("none"!==a.activeMenu||
!a.searchTerm||a.selectedResult===d.result&&(a.selectedResult||d.result)?a.searchTerm||(this._viewClickHandle.resume(),clearTimeout(this._autoStopRemovalTimeoutId),this._autoStopRemovalTimeoutId=setTimeout(function(){b.destroyed||(b._viewClickHandle.pause(),"searching"!==a.viewModel.state&&(b._removeStop(d),d.result&&(d.result=null,b._processStops()),b.scheduleRender()))},this._autoStopRemovalDelay)):a.search())};b.prototype._handleStopInputFocus=function(a,d){if(!this._handles.has("awaiting-view-click-stop")){var b=
this.view,c=this.view.cursor;this._previousCursor=c;this._handles.add(l.init(a,"searchTerm",function(a){b.cursor=0===a.length?"copy":c}),"awaiting-view-click-stop");this._activeStop=d}};b.prototype._prepViewClick=function(){var a=this,d=this.get("viewModel.view"),b=w.pausable(d,"click",this._handleViewClick.bind(this)),c=w.pausable(d.surface,"click",function(){clearTimeout(a._autoStopRemovalTimeoutId);c.pause()});return{remove:function(){c.remove();b.remove()},pause:function(){c.pause();b.pause()},
resume:function(){c.resume();b.resume()}}};b.prototype._handleViewClick=function(a){var d=this,b=this._stopsToSearches.get(this._activeStop);b&&!b.searchTerm&&(b.search(a.mapPoint).then(function(a){a=a.results[0].results[0];var c=d._activeStop;c.result=a;c.result.feature.attributes.Name=a.name;b.searchTerm=a.name}),this.scheduleRender());this._viewClickHandle.pause();clearTimeout(this._autoStopRemovalTimeoutId)};b.prototype._handleAddStopFocus=function(){this._addNewPlaceholder()};b.prototype._addNewPlaceholder=
function(){if(!this._newPlaceholderStop){var a={};this._stops.add(a);this._newPlaceholderStop=a}};b.prototype._handleReverseStops=function(){this._reverseStops()};b.prototype._reverseStops=function(){this._stops.reverse();this._processStops()};b.prototype._handleRemoveStop=function(a){this._removeStop(this._stops.getItemAt(a.currentTarget["data-stop-index"]));this._processStops()};b.prototype._removeStop=function(a,b){void 0===b&&(b=!1);2>=this._stops.length&&!b||(this._disposeSearch(a),this._stops.remove(a))};
b.prototype._handleDepartureOptionChange=function(){var a=this,b=event.currentTarget,b=b.item(b.selectedIndex);"now"===b.value?(this._departureTime="now",this.viewModel.departureTime="now",this._handles.remove("departure-time-controls")):"depart-by"===b.value&&(this._departureTime="depart-by",this._handles.add([l.init(this._datePicker,"value",function(){return a._updateDepartureTime()}),l.init(this._timePicker,"value",function(){return a._updateDepartureTime()})],"departure-time-controls"))};b.prototype._updateDepartureTime=
function(){var a=this._datePicker.value,b=this._timePicker.value,a=B({date:a.date(),month:a.month(),year:a.year(),hour:b.hour(),minute:b.minute()});this.viewModel.departureTime=a.toDate()};b.prototype._renderTimeControls=function(){return c.tsx("div",{class:"esri-directions__departure-time-controls",key:"esri-directions__time-controls",role:"group"},this._datePicker.render(),this._timePicker.render())};b.prototype._renderSectionSplitter=function(){return c.tsx("div",{class:"esri-directions__section-splitter"})};
b.prototype._renderDisclaimer=function(){var a=p.substitute(g.disclaimer,{esriTerms:'\x3ca class\x3d"esri-widget__anchor" href\x3d"http://www.esri.com/legal/software-license" rel\x3d"noreferrer" target\x3d"_blank"\x3e'+g.esriTerms+"\x3c/a\x3e"});return c.tsx("div",{class:"esri-directions__disclaimer",innerHTML:a,key:"esri-directions__disclaimer"})};b.prototype._renderDirectionsContainer=function(){return c.tsx("div",{class:this.classes("esri-directions__directions-section","esri-directions__section"),
key:"esri-directions__container"},this._renderDirectionsContainerContent())};b.prototype._renderLoader=function(){return c.tsx("div",{class:"esri-directions__loader",key:"loader"})};b.prototype._renderWarningCard=function(){return c.tsx("div",{class:"esri-directions__warning-card",role:"alert"},c.tsx("div",{class:"esri-directions__warning-header"},c.tsx("span",{class:"esri-icon-notice-triangle","aria-hidden":"true"}),c.tsx("div",{class:this.classes("esri-widget__heading","esri-directions__warning-heading")},
v.warning)),c.tsx("div",{class:"esri-directions__warning-message"},this._getErrorMessage()))};b.prototype._renderDirectionsContainerContent=function(){var a=this.viewModel,b=a.lastRoute,a=a.state,k="routing"===a;return"error"===a?this._renderWarningCard():k?this._renderLoader():b?c.tsx("div",{class:"esri-directions__summary",key:"esri-directions__summary",role:"group"},this._renderCosts(),this._renderRouteActions(),this._renderManeuverSections()):c.tsx("div",{key:"esri-directions__placeholder",class:"esri-widget__content--empty"},
this._renderPlaceholder(),c.tsx("h3",{class:this.classes("esri-directions__message","esri-widget__heading")},g.directionsPlaceholder))};b.prototype._renderPlaceholder=function(){return c.tsx("svg",{class:"esri-widget__content-illustration--empty",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},c.tsx("path",{fill:"currentcolor",d:"M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"}))};
b.prototype._renderMessage=function(a){return c.tsx("h3",null,a)};b.prototype._renderRouteActions=function(){return c.tsx("div",{class:"esri-directions__route-actions"},c.tsx("button",{"aria-label":g.clearRoute,class:this.classes("esri-directions__clear-route-button","esri-button","esri-button--tertiary"),tabIndex:0,onclick:this._handleClearRouteClick,bind:this},g.clearRoute))};b.prototype._renderManeuverSections=function(){var a=this,b=this._routeSections.sections;return c.tsx("div",{class:"esri-directions__maneuvers",
role:"group"},b.map(function(d,n){var f,k,e=d.open,g;0<d.maneuvers.length&&e&&(g=c.tsx("ol",{class:"esri-directions__maneuver-list"},d.maneuvers.map(function(b){return a._renderManeuver(b)})));var h=2<b.length,l=n===b.length-1;n=(f={},f["esri-directions__maneuver-section--collapsible"]=h,f);f=(k={},k["esri-icon-right-triangle-arrow"]=!e,k["esri-icon-down-arrow"]=e,k);h&&!l?(k=e?v.open:v.close,d=c.tsx("header",{class:a.classes("esri-directions__maneuver-section-header","esri-directions__maneuver-section-toggle"),
key:"esri-directions__maneuver-section-header"},c.tsx("div",{"aria-expanded":e,"aria-label":k,bind:a,class:"esri-directions__maneuver-section-header-toggle-button","data-maneuver-section":d,onkeydown:a._handleSectionToggle,onclick:a._handleSectionToggle,role:"button",tabIndex:0,title:k},c.tsx("span",{"aria-hidden":"true",class:a.classes(f)}),c.tsx("h2",{class:a.classes("esri-widget__heading","esri-directions__maneuver-section-title")},d.name)))):d=c.tsx("header",{class:"esri-directions__maneuver-section-header",
key:"esri-directions__maneuver-section-header"},l?c.tsx("span",{"aria-hidden":"true",class:"esri-icon-radio-checked"}):null,c.tsx("h2",{class:a.classes("esri-widget__heading","esri-directions__maneuver-section-title")},d.name));return c.tsx("section",{class:a.classes("esri-directions__maneuver-section",n)},d,g)}))};b.prototype._handleSectionToggle=function(a){a=a.currentTarget["data-maneuver-section"];a.open=!a.open};b.prototype._renderCosts=function(){var a=this.get("viewModel.directionLines"),b=
new Date(a[a.length-1].attributes.arriveTimeUTC),a=this._costSummary.set({directionsViewModel:this.viewModel}),k=g.zoomToRoute,e=p.formatDate(b,O),b=p.substitute(g.etaTemplate,{time:"\x3cstrong\x3e"+e+"\x3c/strong\x3e",gmt:""+M(b)}),e=g.primaryCosts,f=g.secondaryCosts,h=g.eta;return c.tsx("div",{"aria-label":k,bind:this,class:"esri-directions__costs",onkeydown:this._handleSummaryInteraction,onclick:this._handleSummaryInteraction,role:"button",tabIndex:0,title:k},c.tsx("div",{class:"esri-directions__costs-details",
role:"group"},c.tsx("div",{"aria-label":e,class:"esri-directions__costs-value",title:e},a.primary),c.tsx("div",{class:"esri-directions__vertical-splitter"}),c.tsx("div",{"aria-label":f,class:"esri-directions__other-costs-total",title:f},a.secondary)),c.tsx("div",{"aria-label":h,innerHTML:b,title:h}))};b.prototype._handleSummaryInteraction=function(){this._focusedManeuver=this._activeManeuver=null;this.viewModel.clearHighlights();this.zoomToRoute()};b.prototype._getErrorMessage=function(){var a=this.viewModel.error;
return"directions-view-model:unable-to-route"===a.name?g.errors.unableToRoute:"directions-view-model:service-metadata-unavailable"===a.name?g.errors.unableToLoadServiceMetadata:g.errors.unknownError};b.prototype._normalizeSearchSources=function(a){this._overrideDefaultSources(a);this._ensureLocationTypeOnLocatorSources(a)};b.prototype._overrideDefaultSources=function(a){var b=a.view?g.searchFieldPlaceholder:g.viewlessSearchFieldPlaceholder;a.viewModel.defaultSources.forEach(function(a){a.placeholder=
b;a.autoNavigate=!1})};b.prototype._ensureLocationTypeOnLocatorSources=function(a){a=a.allSources;0!==a.length&&a.forEach(function(a){"locator"in a&&a.locator&&null===a.locationType&&(a.locationType="street")})};b.prototype._acquireSearch=function(a){var b=this,c=this.get("viewModel.view");if(this._stopsToSearches.has(a)){var e=this._stopsToSearches.get(a);e.view=c;this._overrideDefaultSources(e);return e}var f=new F(A({view:c,resultGraphicEnabled:!1,popupEnabled:!1},this.searchProperties));this._normalizeSearchSources(f);
this._handles.add([l.on(f,"allSources","change",function(){return b._normalizeSearchSources(f)}),f.on("select-result",function(){a.result=f.selectedResult;a.result.feature.attributes.Name=f.selectedResult.name;b._processStops();b.scheduleRender()}),f.on("search-focus",function(){return b._handleStopInputFocus(f,a)}),f.on("search-blur",function(){return b._handleStopInputBlur(f,a)})],f);this._stopsToSearches.set(a,f);return f};b.prototype._disposeSearch=function(a){this._stopsToSearches.get(a).destroy();
this._stopsToSearches.delete(a)};b.prototype._processStops=function(){var a=this.viewModel;a.stops.removeAll();a.stops.addMany(this._stops.filter(function(a){return!!a.result}).map(function(a){return a.result.feature}));1<a.stops.length&&a.getDirections()};b.prototype._renderManeuver=function(a){var b,e,h=a.attributes,f=this.get("viewModel.routeParameters.directionsLengthUnits"),f=q.formatDistance(h.length,{toUnits:f}),m=q.formatTime(h.time),l=q.getAssociatedStop(a);q.useSpatiallyLocalTime(a,this.get("viewModel.routeParameters.startTime"))?
e=q.toSpatiallyLocalTimeString(h.arriveTimeUTC,h.ETA,"now"===this._departureTime):f&&(e=m?f+"\x26nbsp;\x26middot;\x26nbsp;"+m:f);f=this._getFormattedManeuverText(a);h=this._getIconPath(h.maneuverType);if(l)return c.tsx("li",{class:"esri-directions__maneuver",key:a},c.tsx("header",null,l.attributes.Name));var l="esri-directions__maneuver-"+a.uid,m="esri-directions__cumulative-costs-"+a.uid,r="esri-directions__intermediate-costs-"+a.uid,p=(b={},b["esri-directions__maneuver--active"]=this._activeManeuver===
a,b);return c.tsx("li",{"aria-labelledby":l+" "+m+" "+r,bind:this,class:this.classes("esri-directions__maneuver",p),"data-maneuver":a,key:a,onclick:this._handleManeuverClick,onkeydown:this._handleManeuverClick,onfocus:this._handleManeuverFocus,onmouseover:this._handleManeuverMouseOver,onmouseout:this._handleManeuverMouseOut,onblur:this._handleManeuverBlur,tabIndex:0},c.tsx("img",{alt:"",class:"esri-directions__maneuver-icon",src:h}),c.tsx("div",{class:"esri-directions__maneuver-costs-container"},
c.tsx("span",{id:l,innerHTML:f}),c.tsx("div",{class:"esri-directions__maneuver-costs"},c.tsx("div",{class:"esri-directions__horizontal-splitter"}),c.tsx("div",{id:m,"aria-label":g.cumulativeCosts,class:"esri-directions__cost--cumulative",innerHTML:"",title:g.cumulativeCosts}),c.tsx("div",{id:r,"aria-label":g.intermediateCosts,class:"esri-directions__cost--intermediate",innerHTML:e,title:g.intermediateCosts}))))};b.prototype._getIconPath=function(a){a=I.toIconName(a);return""+N+a+(2===window.devicePixelRatio?
"@2x":"")+".png"};b.prototype._handleManeuverClick=function(a){a=a.currentTarget["data-maneuver"];this._activeManeuver===a?(this._activeManeuver=null,this.zoomToRoute()):(this._activeManeuver=a,this.viewModel.centerAt(a),this.viewModel.highlightSegment(a))};b.prototype._handleManeuverMouseOver=function(a){this._activeManeuver||this._focusedManeuver||this.viewModel.highlightSegment(a.currentTarget["data-maneuver"])};b.prototype._handleManeuverMouseOut=function(){this._activeManeuver||this._focusedManeuver||
this.viewModel.clearHighlights()};b.prototype._handleManeuverBlur=function(){this._activeManeuver||(this._focusedManeuver=null,this.viewModel.clearHighlights())};b.prototype._handleManeuverFocus=function(a){this._activeManeuver||(this._focusedManeuver=a=a.currentTarget["data-maneuver"],this.viewModel.highlightSegment(a))};b.prototype._getFormattedManeuverText=function(a){var b=a.attributes.text;a=a.strings;if(!a)return b;var c=b;a.forEach(function(a){c=c.replace(a.string,"\x3cstrong\x3e"+a.string+
"\x3c/strong\x3e")});return c};e([h.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);e([h.property()],b.prototype,"iconClass",void 0);e([h.property()],b.prototype,"label",void 0);e([h.aliasOf("viewModel.lastRoute")],b.prototype,"lastRoute",void 0);e([h.aliasOf("viewModel.maxStops")],b.prototype,"maxStops",void 0);e([h.aliasOf("viewModel.routeServiceUrl")],b.prototype,"routeServiceUrl",void 0);e([h.aliasOf("viewModel.routeSymbol")],b.prototype,"routeSymbol",void 0);e([h.property()],
b.prototype,"searchProperties",void 0);e([h.aliasOf("viewModel.stopSymbols")],b.prototype,"stopSymbols",void 0);e([h.aliasOf("viewModel.view")],b.prototype,"view",void 0);e([c.renderable(["lastRoute","state","travelModes"]),h.property({type:x})],b.prototype,"viewModel",void 0);e([h.aliasOf("viewModel.getDirections")],b.prototype,"getDirections",null);e([h.aliasOf("viewModel.zoomToRoute")],b.prototype,"zoomToRoute",null);e([c.accessibleHandler()],b.prototype,"_handleStopIconClick",null);e([c.accessibleHandler()],
b.prototype,"_handleClearRouteClick",null);e([c.accessibleHandler()],b.prototype,"_handleReverseStops",null);e([c.accessibleHandler()],b.prototype,"_handleRemoveStop",null);e([c.accessibleHandler()],b.prototype,"_handleSectionToggle",null);e([c.accessibleHandler()],b.prototype,"_handleSummaryInteraction",null);e([c.accessibleHandler()],b.prototype,"_handleManeuverClick",null);return b=e([h.subclass("esri.widgets.Directions")],b)}(h.declared(G))});