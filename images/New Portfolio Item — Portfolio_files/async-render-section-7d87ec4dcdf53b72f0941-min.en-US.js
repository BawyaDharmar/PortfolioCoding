(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([["async-render-section"],{"./common/temp/node_modules/@sqs/core-components/components/ColorMap.js":function(e,t,r){"use strict";r.r(t);var n=r("./common/temp/node_modules/@sqs/core-components/build/lib/components/ColorMap/index.js");r.d(t,"default",function(){return n["a"]})},"./common/temp/node_modules/lodash/_baseNth.js":function(e,t,r){var n=r("./common/temp/node_modules/lodash/_isIndex.js");function a(e,t){var r=e.length;if(!r)return;t+=t<0?r:0;return n(t,r)?e[t]:void 0}e.exports=a},"./common/temp/node_modules/lodash/nth.js":function(e,t,r){var n=r("./common/temp/node_modules/lodash/_baseNth.js"),a=r("./common/temp/node_modules/lodash/toInteger.js");function s(e,t){return e&&e.length?n(e,a(t)):void 0}e.exports=s},"./src/main/webapp/frontend/packages/enums/MemberAreaNavigationSetting.js":function(e,t){var r={REPLACE_MAIN_NAV:"replace_main_nav",SHOW_IN_USER_ACCOUNT_PANEL:"show_in_user_account_panel",HIDE_NAV:"hide_nav"};e.exports=r},"./src/main/webapp/universal/src/apps/App/screens/Settings/screens/CustomerAccounts/shared/actions/CustomerAccountsSettingsActions.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var o=n(r("./src/main/webapp/universal/src/shared/dispatchers/alt/index.ts"));var i=n(r("./src/main/webapp/universal/src/apps/App/screens/Settings/screens/CustomerAccounts/shared/api/CustomerAccountsSettingsApi.js"));var u=r("./src/main/webapp/universal/src/shared/utils/commerce/analytics/trackCustomerAccountsSetup.ts");var c=function(){function e(){(0,a.default)(this,e);this.generateActions("loadSettingsSuccess","handleFailure","updateEnabledToggle","clearError","enableSecureSuccess")}(0,s.default)(e,[{key:"loadSettings",value:function e(){var t=this;return function(e){e();return i.default.get().then(function(e){return t.loadSettingsSuccess(e.data)}).catch(function(e){return t.handleFailure(e)})}}},{key:"saveSettings",value:function e(t){var r=this;return function(e){e();return i.default.save(t).then(function(e){return r.saveSettingsSuccess(e.data)}).catch(function(e){return r.handleFailure(e)})}}},{key:"saveSettingsSuccess",value:function e(t){return function(e){e(t);(0,u.trackIsCustomerAccountsEnabled)(t.userAccountsEnabled)}}}]);return e}();var l=o.default.createActions(c);t.default=l;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/Settings/screens/CustomerAccounts/shared/api/CustomerAccountsSettingsApi.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./src/main/webapp/universal/src/shared/utils/sqsAxios.ts"));var s="/api/settings/site-users/accounts/";var o={get:function e(){return a.default.get(s)},save:function e(t){return a.default.put(s,t)}};t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/stores/UserAccountsSettingsStore.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var o=n(r("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var i=n(r("./src/main/webapp/universal/src/shared/actions/BootstrapHelper.js"));var u=n(r("./src/main/webapp/universal/src/apps/App/screens/Settings/screens/CustomerAccounts/shared/actions/CustomerAccountsSettingsActions.js"));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),true).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p={signupAllowed:false,loginAllowed:false};var d={signupAllowed:true,loginAllowed:true};var m=function(){function e(){(0,s.default)(this,e);this.state=Object.assign({},p);this.bindListeners({onUpdateSettings:u.default.SAVE_SETTINGS_SUCCESS});this.exportPublicMethods({isUserAccountsEnabled:this.isUserAccountsEnabled})}(0,o.default)(e,[{key:"getStateFromContext",value:function e(t){var r=t.websiteSettings;return l({},r.userAccountsSettings)}},{key:"onUpdateSettings",value:function e(t){var r=t.userAccountsEnabled;r?this.setState(Object.assign({},d)):this.setState(Object.assign({},p))}},{key:"isUserAccountsEnabled",value:function e(){return this.state.loginAllowed}}]);return e}();var f=(0,i.default)(m,"UserAccountsSettingsStore");t.default=f;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/ClientRenderingApi.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getTemplateData=void 0;var a=n(r("./src/main/webapp/universal/src/shared/utils/sqsAxios.ts"));var s=function e(){return a.default.get("/api/1/client-rendering/jsont").then(function(e){var t=e.data;return t})};t.getTemplateData=s},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/IdleValue.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var o=function(){function r(e){var t=this;(0,a.default)(this,r);this.init=e;this.value=void 0;this.idleHandle=requestIdleCallback(function(){t.value=t.init()})}(0,s.default)(r,[{key:"getValue",value:function e(){if(void 0===this.value){this.cancelIdleInit();this.value=this.init()}return this.value}},{key:"setValue",value:function e(t){this.cancelIdleInit();this.value=t}},{key:"cancelIdleInit",value:function e(){if(this.idleHandle){cancelIdleCallback(this.idleHandle);this.idleHandle=null}}}]);return r}();t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/compileTemplate.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./common/temp/node_modules/@squarespace/template-engine/lib-es/index.js"));var s=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/IdleValue.js"));var o=new s.default(function(){return new a.default});var i=function e(t){return o.getValue().parse(t).code};var u=i;t.default=u;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/compileTemplates.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./common/temp/node_modules/lodash/mapValues.js"));var s=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/compileTemplate.js"));var o=r("./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts");var i=function e(t){var s=t;t.match(/<squarespace:navigation .* \/>/g).forEach(function(t){var e,r;var n=null===(e=t.match(/navigationId="(\w*)"/))||void 0===e?void 0:e[1];var a=null===(r=t.match(/template="([\w\.]*)"/))||void 0===r?void 0:r[1];a&&n?s=s.replace(t,"{navigation.".concat(n,"|apply ").concat(a,".block}")):(0,o.withScope)(function(e){e.setTag("project","frontend_rendering");e.setExtra("navigationTag",t);(0,o.captureMessage)("Failed to parse header navigation tag")})});return s};var u=function e(t){return(0,a.default)(t.partialsByFileName,function(e,t){var r=e.contents;if("header.block"===t)return(0,s.default)(i(r));return(0,s.default)(r)})};var c=u;t.default=c;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/executeTemplate.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=r("./common/temp/node_modules/@squarespace/template-engine/lib-es/index.js");var o=r("./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts");var a=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/IdleValue.js"));var i={formatters:s.Formatters,predicates:s.Predicates};var u=new a.default(function(){return new s.Engine(i)});var c=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{var a=new s.Context(r,{partials:n});u.getValue().execute(t,a);return a.render()}catch(e){(0,o.withScope)(function(e){e.setTag("project","frontend_rendering");(0,o.captureMessage)("executeTemplate failed")});throw new Error(e)}};var l=c;t.default=l;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/renderSection.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"fetchSectionRenderData",{enumerable:true,get:function e(){return m.fetchSectionRenderData}});t.renderHeader=t.renderPageSection=t.preloadHeaderRenderContext=t.preloadPageSectionRenderContext=void 0;var u=n(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var c=n(r("./common/temp/node_modules/lodash/merge.js"));var l=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/executeTemplate.js"));var p=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/index.js"));var d=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/rootSquarespaceContext.js"));var m=r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/sectionStorage.js");var s="/universal/svg/social-accounts.svg";var o=function(){var n=(0,a.default)(u.default.mark(function e(r,n){var a,s,o,i;return u.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:a=new DOMParser;t.next=3;return(0,m.getSectionTemplates)();case 3:s=t.sent;t.next=6;return p.default[r](n);case 6:o=t.sent;i=(0,l.default)(s[r],(0,c.default)(o,(0,d.default)()),s);return t.abrupt("return",a.parseFromString(i,"text/html"));case 9:case"end":return t.stop()}},e)}));return function e(t,r){return n.apply(this,arguments)}}();var i=function e(t){return p.default["section.block"](t)};t.preloadPageSectionRenderContext=i;var f=function e(t){return p.default["header.block"](t)};t.preloadHeaderRenderContext=f;var v=function e(t){return o("section.block",t)};t.renderPageSection=v;var b=function e(t){return o("header.block",t).then(function(e){var t=e.getElementsByTagName("use");t.forEach(function(e){var t=e.getAttribute("xlink:href");e.setAttribute("xlink:href",s+t)});return e})};t.renderHeader=b},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/gallery.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var u=n(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var c=n(r("./src/main/webapp/frontend/packages/enums/Flag.js"));var l=r("./src/main/webapp/frontend/packages/universal-flags/lib/index.js");var p=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/ContentItemStore.js"));function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),true).forEach(function(e){(0,s.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var m=function e(t){var r=Object.values(p.default.getState().toJS());return r.filter(function(e){return e&&e.collectionId===t}).map(function(e){var t;return d({},e,{body:null===(t=e.body)||void 0===t?void 0:t.html})}).sort(function(e,t){return e.displayIndex>t.displayIndex?1:-1})};var i=function(){var r=(0,a.default)(u.default.mark(function e(r){var n,a,s;var o,i;return u.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:o=l.legacyV6Flags.isFeatureEnabled(c.default.SEVEN_ONE_JSON_SCHEMA_SECTION_EDITOR)&&"gallery"===(null===r||void 0===r?void 0:r.sectionDefinitionName)?null===r||void 0===r?void 0:null===(n=r.jsonData)||void 0===n?void 0:null===(a=n.galleryOptions)||void 0===a?void 0:a.transientGalleryId:null===r||void 0===r?void 0:null===(s=r.galleryOptions)||void 0===s?void 0:s.transientGalleryId;t.next=3;return p.default.fetchForCollection(o);case 3:i=m(o);return t.abrupt("return",d({},r,{isGallery:true,galleryImages:i}));case 5:case"end":return t.stop()}},e)}));return function e(t){return r.apply(this,arguments)}}();var f=i;t.default=f;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/header.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var g=n(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var j=n(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var m=n(r("./common/temp/node_modules/lodash/nth.js"));var f=n(r("./src/main/webapp/frontend/packages/enums/Flag.js"));var v=n(r("./src/main/webapp/frontend/packages/enums/MemberAreaNavigationSetting.js"));var b=r("./src/main/webapp/frontend/packages/universal-flags/lib/index.js");var h=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/PageSectionsStore.js"));var w=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/ConnectedAccountsStore.js"));var y=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/WebsiteSettingsStore/index.js"));var O=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/ContentItemStore.js"));var S=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/UserAccountsSettingsStore.js"));var u=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/TemplateInstallationsStore.js"));var _=r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/sectionStorage.js");var A=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/SiteNavigationStore.js"));var E=n(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/ContentBrowserAPI.js"));var o=r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/GroupedList/index.js");var x=n(r("./src/main/webapp/universal/src/shared/constants/Constants.js"));var P=r("./src/main/webapp/universal/src/apps/App/screens/Settings/screens/ConnectedAccounts/utils/SocialAuthenticatorUtils.js");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var k=o.pathUtils.forEachItem,I=o.pathUtils.getGroupFromItemPath;function D(e){if(e.externalLink)return e;var t="/".concat(e.urlId);if(E.default.isFolder(e)||E.default.isMemberArea(e)){var r=e.items||e.children||[];var n=r.map(D);return{folderActive:n.some(function(e){return e.active}),collection:{folder:true,fullUrl:t,homepage:false,navigationTitle:e.title},items:n}}var a=window.Y.Squarespace.Singletons.Location.getFrameUrl();var s=u.default.getHomepageCollectionId();var o=e.collectionId===s;var i=t===a||"/"===a&&o;return{active:i,collection:{homepage:o,fullUrl:o?"/":t,navigationTitle:e.title}}}function N(){var r=h.default.getState().collectionId;var e=b.legacyV6Flags.isFeatureEnabled(f.default.REACT_PAGES_PANEL);var t=y.default.getState(),n=t.memberAreaNavigationSetting;var a;if(e){var s=E.default.getSiteLayout();var o={items:Object.values(s)};var i=k(o,function(e,t){if(e.collectionId===r)return t});a=I(o,i)}else a=(0,m.default)(A.default.getPathToCollection(r),-2);var u=E.default.isMemberArea(a);var c=u&&n===v.default.REPLACE_MAIN_NAV;var l=c?x.default.memberAreaNavigationName:"mainNav";var p=e?E.default.getSiteLayout()[l].items:A.default.getState()[l].links;c&&(p=p.filter(function(e){var t=e.memberAreaId;return t===a.memberAreaId}));var d=p.map(D);return{navigationItems:d,shouldReplaceNav:c}}var c=function(){var r=(0,s.default)(g.default.mark(function e(r){var n,a,s,o,i,u,c,l,p,d,m,f,v,b,h;return g.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return(0,_.getLocalizedStrings)();case 2:n=t.sent;t.next=5;return Promise.all([O.default.fetch(r.logoImageId),O.default.fetch(r.mobileLogoImageId)]);case 5:a=t.sent;s=(0,j.default)(a,2);o=s[0];i=s[1];u=N(),c=u.navigationItems,l=u.shouldReplaceNav;p=false;d=false;m=w.default.getState().connectedAccounts;f=y.default.getState(),v=f.socialAccountDisplayOrder;b=(0,P.filterConnectedAccounts)(m,{showOAuthOnly:p,showSocialLinksOnly:d});h=(0,P.sortConnectedAccounts)(b,v);return t.abrupt("return",C({},r,{squarespace:{"cart-classes":"sqs-custom-cart",siteHeaderFooter:{header:C({},r.header,{showButton:r.header.showButton&&!l,showSocial:r.header.showSocial&&!l})}},userAccountsContext:{showSignInLink:S.default.isUserAccountsEnabled()},localizedStrings:n,website:{logoImageUrl:null===o||void 0===o?void 0:o.get("assetUrl"),mobileLogoImageUrl:null===i||void 0===i?void 0:i.get("assetUrl"),socialAccounts:h},navigation:{mainNav:{items:c}}}));case 17:case"end":return t.stop()}},e)}));return function e(t){return r.apply(this,arguments)}}();var l=c;t.default=l;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/index.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/header.js"));var s=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/section.js"));var o={"header.block":a.default,"section.block":s.default};var i=o;t.default=i;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/layoutEngine.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var o=n(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var i=r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/partialContextResolvers.js");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),true).forEach(function(e){(0,s.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l=function(){var r=(0,o.default)(a.default.mark(function e(r){var n;return a.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return(0,i.resolveSectionBackground)(r);case 2:n=t.sent;return t.abrupt("return",c({},r,{content:'<div class="sqs-layout" data-type="page-section"></div>',styles:c({},r.styles,{},n)}));case 4:case"end":return t.stop()}},e)}));return function e(t){return r.apply(this,arguments)}}();var p=l;t.default=p;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/partialContextResolvers.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.resolveSectionBackground=void 0;var a=n(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var s=n(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var o=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/ContentItemStore.js"));var i=function(){var r=(0,s.default)(a.default.mark(function e(r){var n;return a.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:if(!("image"===r.styles.backgroundMode&&r.backgroundImageId)){t.next=5;break}t.next=3;return o.default.fetch(r.backgroundImageId);case 3:n=t.sent;return t.abrupt("return",{backgroundImage:n.toJS()});case 5:return t.abrupt("return",{});case 6:case"end":return t.stop()}},e)}));return function e(t){return r.apply(this,arguments)}}();t.resolveSectionBackground=i},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/rootSquarespaceContext.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./src/main/webapp/frontend/packages/enums/Flag.js"));var s=r("./src/main/webapp/frontend/packages/universal-flags/lib/index.js");var o=function e(){return{sevenOneHeaderEditorWithMobileOptions:s.legacyV6Flags.isFeatureEnabled(a.default.SEVEN_ONE_HEADER_EDITOR_WITH_MOBILE_OPTIONS),sevenOneHeaderEditorWithPromotedElement:s.legacyV6Flags.isFeatureEnabled(a.default.SEVEN_ONE_HEADER_PROMOTED_ELEMENTS),sevenOneMenuOverlayThemeSwitcher:s.legacyV6Flags.isFeatureEnabled(a.default.SEVEN_ONE_MENU_OVERLAY_THEME_SWITCHER),sevenOneMobileHeaderFontTweaks:s.legacyV6Flags.isFeatureEnabled(a.default.SEVEN_ONE_MOBILE_HEADER_FONT_TWEAKS),sevenOneQuickViewLightboxColors:s.legacyV6Flags.isFeatureEnabled(a.default.SEVEN_ONE_QUICK_VIEW_LIGHTBOX_COLORS),sevenOneMenuOverlayAnimations:s.legacyV6Flags.isFeatureEnabled(a.default.SEVEN_ONE_MENU_OVERLAY_ANIMATIONS)}};var i=function e(){return{squarespace:{betaFeatureFlags:o()}}};var u=i;t.default=u;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/section.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/gallery.js"));var s=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/layoutEngine.js"));var o=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/userItemsList.js"));var i=n(r("./src/main/webapp/universal/src/apps/App/shared/constants/SectionTypes.js"));var u=function e(t){if(t.sectionName===i.default.GALLERY)return(0,a.default)(t);if(t.sectionName===i.default.LAYOUT_ENGINE)return(0,s.default)(t);if(t.sectionName===i.default.USER_ITEMS_LIST)return(0,o.default)(t);throw new Error("Unable to render section of type ".concat(t.sectionName))};var c=u;t.default=c;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/userItemsList.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=n(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var u=n(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var c=n(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var l=n(r("./src/main/webapp/universal/src/apps/App/shared/stores/ContentItemStore.js"));var p=r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/resolveContext/partialContextResolvers.js");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),true).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var o=function(){var r=(0,c.default)(i.default.mark(function e(r){var n,a,s,o;return i.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return Promise.all([(0,p.resolveSectionBackground)(r),Promise.all(r.userItems.map(function(){var t=(0,c.default)(i.default.mark(function e(r){var n;return i.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:if(!r.imageId){t.next=6;break}t.next=3;return l.default.fetch(r.imageId);case 3:t.t0=t.sent;t.next=7;break;case 6:t.t0=null;case 7:n=t.t0;return t.abrupt("return",d({},r,{image:null===n||void 0===n?void 0:n.toJS()}));case 9:case"end":return t.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()))]);case 2:n=t.sent;a=(0,u.default)(n,2);s=a[0];o=a[1];return t.abrupt("return",d({},r,{isUserItemsList:true,userItems:o,styles:d({},r.styles,{},s)}));case 7:case"end":return t.stop()}},e)}));return function e(t){return r.apply(this,arguments)}}();var m=o;t.default=m;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/sectionStorage.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getLocalizedStrings=t.getSectionTemplates=t.fetchSectionRenderData=void 0;var l=a(r("./common/temp/node_modules/@babel/runtime/regenerator/index.js"));var s=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var p=a(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var o=a(r("./common/temp/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var i=a(r("./common/temp/node_modules/dexie/dist/dexie.es.js"));var u=r("./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts");var c=a(r("./src/main/webapp/universal/src/apps/App/shared/stores/WebsiteStore/index.js"));var d=a(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/compileTemplates.js"));var m=a(r("./src/main/webapp/universal/src/apps/Frame/src/shared/storage/utils/tableOperation.js"));var f=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/renderSection/ClientRenderingApi.js"));function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),true).forEach(function(e){(0,s.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var h="SectionRenderData";var g=1;var j="".concat(h,"_").concat(g);var w=new i.default(j);w.version(1).stores({templates:"cacheKey",localizedStrings:"cacheKey"});var y=function e(t,r){return"".concat(t,"_").concat(r)};var O=function e(t){return(0,m.default)({operation:function e(){return w.templates.get("".concat(t))},errorMessage:"Error retrieving cached section templates",fallbackValue:null}).then(function(e){if(!e)return;return e.templates})};var S=function e(t,r){return(0,m.default)({operation:function e(){return w.templates.clear().then(function(){return w.templates.put({cacheKey:t,templates:r})})},errorMessage:"Error storing section templates",fallbackValue:null})};var _=function e(t,r){return(0,m.default)({operation:function e(){return w.localizedStrings.get(y(t,r))},errorMessage:"Error retrieving cached localized strings",fallbackValue:null}).then(function(e){if(!e)return;return e.localizedStrings})};var A=function e(t,r,n){return(0,m.default)({operation:function e(){return w.localizedStrings.clear().then(function(){return w.localizedStrings.put({cacheKey:y(t,r),localizedStrings:n})})},errorMessage:"Error storing localized strings",fallbackValue:null})};var E;var x=function(){var n=(0,o.default)(l.default.mark(function e(r,n){var a,s,o,i,u,c;return l.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return Promise.all([O(r),_(r,n)]);case 2:a=t.sent;s=(0,p.default)(a,2);o=s[0];i=s[1];if(!(o&&i)){t.next=8;break}return t.abrupt("return",{templates:o,localizedStrings:i});case 8:t.next=10;return f.getTemplateData();case 10:u=t.sent;c=(0,d.default)(u);S(u.templateRevisionNumber,c);A(u.templateRevisionNumber,u.locale,u.localizedStrings);return t.abrupt("return",b({},u,{templates:c}));case 15:case"end":return t.stop()}},e)}));return function e(t,r){return n.apply(this,arguments)}}();var P=function e(){E=E||x(window.Static.SQUARESPACE_CONTEXT.templateRevisionNumber,c.default.getState().get("language"))};t.fetchSectionRenderData=P;var C=function(){var t=(0,o.default)(l.default.mark(function e(){return l.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:if(!E){(0,u.withScope)(function(e){e.setTag("project","frontend_rendering");(0,u.captureMessage)("Section render data was not fetched before needed")});P()}return t.abrupt("return",E);case 2:case"end":return t.stop()}},e)}));return function e(){return t.apply(this,arguments)}}();var k=function(){var t=(0,o.default)(l.default.mark(function e(){var r,n;return l.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return C();case 2:r=t.sent;n=r.templates;return t.abrupt("return",n);case 5:case"end":return t.stop()}},e)}));return function e(){return t.apply(this,arguments)}}();t.getSectionTemplates=k;var I=function(){var t=(0,o.default)(l.default.mark(function e(){var r,n;return l.default.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.next=2;return C();case 2:r=t.sent;n=r.localizedStrings;return t.abrupt("return",n);case 5:case"end":return t.stop()}},e)}));return function e(){return t.apply(this,arguments)}}();t.getLocalizedStrings=I},"./src/main/webapp/universal/src/apps/Frame/node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(e,t){function r(e){return e&&e.__esModule?e:{default:e}}e.exports=r},"./src/main/webapp/universal/src/apps/Frame/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":function(e,t,r){var o=r("./src/main/webapp/universal/src/apps/Frame/node_modules/@babel/runtime/helpers/typeof.js");function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;i=function e(){return t};return t}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={};var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r["default"]=e;t&&t.set(e,r);return r}e.exports=n},"./src/main/webapp/universal/src/apps/Frame/node_modules/@babel/runtime/helpers/typeof.js":function(t,e){function r(e){"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function e(t){return typeof t}:t.exports=r=function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return r(e)}t.exports=r},"./src/main/webapp/universal/src/apps/Frame/src/shared/storage/utils/tableOperation.js":function(e,t,r){"use strict";var n=r("./src/main/webapp/universal/src/apps/Frame/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=r("./src/main/webapp/universal/src/apps/Frame/src/externals/index.js");var s=n(r("./src/main/webapp/universal/src/shared/utils/isIndexedDbSupported.js"));var o=(0,a.createErrorLogger)("Bootstrap/IndexedDB","v8_frame");var i=function e(t){var r=t.operation,n=t.errorMessage,a=t.fallbackValue;if(!(0,s.default)())return Promise.resolve(a);return r().catch(function(e){o(n,e);return Promise.resolve(a)})};var u=i;t.default=u;e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/commerce/analytics/trackCustomerAccountsSetup.ts":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.trackIsCustomerAccountsEnabled=void 0;var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var s=n(r("./common/temp/node_modules/@sqs/track-events/v1.js"));var o=n(r("./common/temp/node_modules/lodash/get.js"));var i=n(r("./src/main/webapp/universal/src/shared/i18n/eventsData.ts"));var u=r("./src/main/webapp/universal/src/shared/utils/commerce/analytics/utils.ts");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),true).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p="customer-accounts-panel";var d=new s.default({customSchemaName:"commerce_setup"},l({event_owner_team:"commerce",event_source:"web",product_area:"commerce-core",user_website_id:(0,o.default)(window,"Static.SQUARESPACE_CONTEXT.website.id",null)},(0,i.default)()));var m=function e(t){d.track({actor:"user",action:"change",object_identifier:"customer-accounts-enable",object_type:"setting",object_value:(0,u.createEventBoolean)(t),product_page:p})};t.trackIsCustomerAccountsEnabled=m}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/async-render-section-09eb3587841e4c32ffd3f-min.en-US.js.map