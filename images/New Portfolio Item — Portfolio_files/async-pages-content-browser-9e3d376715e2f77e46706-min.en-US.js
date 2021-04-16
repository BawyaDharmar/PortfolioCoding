(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([["async-pages-content-browser"],{"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/components/PanelManager.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var o=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=o(n("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var q=o(n("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var L=r(n("./common/temp/node_modules/react/index.js"));var a=o(n("./common/temp/node_modules/prop-types/index.js"));var l=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/index.js");var i=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/collections.js");var c=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/editor.js");var p=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/confirm.js");var F=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/ConfirmableActions.js");var u=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/items.js");var m=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/selectors.js");var k=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/Keys.js");var U=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/ContentBrowserSentry.js");var N=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/collectionAPIUtils.js");var V=o(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/CloneDemoCollectionModal.js"));var W=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/context/ContentBrowserPanelContext.js");var d=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/error.js");var Y=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/hooks/useRegistry.js");var G=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");var H=o(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/components/PanelManager.less"));var J=o(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/LoadingSpinner.js"));var K=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/registryStringUtils.js");var z=o(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/bundles/blog/isBlog.js"));function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),true).forEach(function(e){(0,s.default)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f=function e(t){var n=t.onWidthChange,l=t.collection,r=t.collectionId,o=t.items,s=t.isSaving,a=t.pagination,i=t.router,c=t.onLoadCollection,p=t.onLoadItemsForCollection,u=t.onCreateItem,m=t.onCopyItem,d=t.onOpenItemSettingsModal,v=t.onOpenCollectionSettingsModal,f=t.onDeleteItem,C=t.onOpenConfirmModal,g=t.onReorderItems,b=t.onOpenErrorModal,h=t.onDuplicateItem;var w=(0,L.useState)(false),y=(0,q.default)(w,2),I=y[0],j=y[1];(0,L.useEffect)(function(){r&&!l&&c(r)},[l,r,c]);var E=(0,Y.useRegistry)(k.COLLECTION_PANEL,l,{collection:l});var D=function e(t){i.replaceFrameUrl("/".concat(l.urlId,"/").concat(t.urlId))};var M=function e(t){if((0,G.isV8)()){D(t);return t}d(t,null,true)};var S=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;return u(t,r).then(n)};var A=function e(t){return m(t).then(M)};var P=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};var s=t.id,a=t.urlId;if(n)return f(s,r).then(function(){r&&j(true);o()});C(Q({confirmLabel:(0,G.t)("Delete"),confirmVariant:"danger"},(0,K.getDeleteConfirmationStrings)({contentItem:t})),F.DELETE_ITEM,[s,r],function(){G.CMSV7Events.deleteCollectionItemFromPanel({itemId:s,collectionType:l.entityType,collectionId:l.id});j(true);var e=i.getCurrentLocation(),t=e.state.frameUrl;t.includes(a)?i.replaceFrameUrl("/".concat(l.urlId)):G.FrameActions.refresh();o()})};var O=function e(t){var n=(0,z.default)(l)?(0,G.t)("Delete {numItems} selected posts?",{numItems:t.length}):(0,G.t)("Delete {numItems} selected items?",{numItems:t.length});var r=(0,z.default)(l)?(0,G.t)("These posts will be available in your recycle bin for 30 days."):(0,G.t)("This action cannot be undone.");C({title:n,message:r,confirmLabel:(0,G.t)("Delete"),confirmVariant:"danger"},F.DELETE_ITEMS,[t],function(){j(true);var e=i.getCurrentLocation(),t=e.state.frameUrl;t===l.fullUrl?G.FrameActions.refresh():i.replaceFrameUrl("/".concat(l.urlId))})};var B=function e(t){try{G.CMSV7Events.editCollectionItem({itemId:t.id,collectionType:l.typeName||l.entityType,collectionId:l.id})}catch(e){(0,U.captureMessage)("track edit collection item failed")}d(t)};var _=function e(t){h(t).then(function(e){try{G.CMSV7Events.duplicateCollectionItem({itemId:e.id,collectionType:l.typeName||l.entityType,collectionId:l.id})}catch(e){(0,U.captureMessage)("track duplicate collection item failed")}G.FrameActions.setUrl(e.fullUrl)})};var R=function e(){i.replaceFrameUrl("/".concat(l.urlId))};var x=function e(t){var n=t.title,r=t.message,o=t.typeName,s=t.id;(0,U.captureMessage)("User reached ".concat(o," item limit"),{level:"info",context:{typeName:o,id:s}});b({title:n,message:r})};if(!l)return null;var T=(0,N.isDemoCollection)(l.id);return L.default.createElement(L.Fragment,null,L.default.createElement(L.Suspense,{fallback:L.default.createElement(J.default,{height:"100%",mt:20})},L.default.createElement(G.Panel,{className:H.default.container,isSaving:s},L.default.createElement(W.PanelProvider,{onRequestItemEdit:B,onRequestItemDelete:P,onRequestItemsDelete:O,onSelectItem:D,onLoadItemsForCollection:p,hasDeletedItems:I,onDuplicateItem:_},L.default.createElement(E,{collection:l,onRequestItemAdd:S,onRequestSettingsModal:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return v(l.id,t)},onGoToCollection:R,onRequestItemCopy:A,isDemoCollection:T,itemsInCollection:o.length,onCollectionLimit:x,items:o,pagination:a,setPanelWidth:n})))),L.default.createElement(V.default,{collection:l}))};f.propTypes={onWidthChange:a.default.func,collection:a.default.object,collectionId:a.default.string,items:a.default.array,isSaving:a.default.bool,router:a.default.object,onLoadCollection:a.default.func,onLoadItemsForCollection:a.default.func,onCreateItem:a.default.func,onCopyItem:a.default.func,onOpenItemSettingsModal:a.default.func,onOpenCollectionSettingsModal:a.default.func,onDeleteItem:a.default.func,onOpenConfirmModal:a.default.func,onOpenErrorModal:a.default.func,onDuplicateItem:a.default.func};var C=(0,G.withRouter)(f);var g=(0,l.connect)(function(e){return{collection:(0,m.getCurrentCollectionResolved)(e),collectionId:(0,m.getCurrentCollectionId)(e),items:(0,m.getCurrentItems)(e),isSaving:(0,m.getIsSaving)(e),pagination:(0,m.getItemPagination)(e)}},{onCreateItem:u.createItem,onOpenCollectionSettingsModal:c.loadAndOpenCollectionSettingsModal,onOpenItemSettingsModal:c.openItemSettingsModal,onOpenConfirmModal:p.openConfirmModal,onOpenErrorModal:d.openErrorModal,onCopyItem:u.copyItemWithReplacements,onLoadCollection:i.loadCollection,onDeleteItem:u.deleteItem,onLoadItemsForCollection:u.loadItemsForCollection,onDuplicateItem:u.cloneItem})(C);t.default=g;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/components/PanelManager.less":function(e,t,n){e.exports={container:"PanelManager-container-3biyn"}},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/CloneDemoCollectionModal.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var o=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=o(n("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var a=o(n("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var l=o(n("./common/temp/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var i=o(n("./common/temp/node_modules/@babel/runtime/helpers/inherits.js"));var c=o(n("./common/temp/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var p=o(n("./common/temp/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var u=o(n("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var m=r(n("./common/temp/node_modules/react/index.js"));var d=n("./common/temp/node_modules/@sqs/rosetta-compositions/build/lib/index.js");var v=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/index.js");var f=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/confirm.js");var C=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/error.js");var g=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/actions/collections.js");var b=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/ConfirmableActions.js");var h=o(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ModalWrapper.js"));var w=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");var y=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/collectionAPIUtils.js");function I(o){var s=j();return function e(){var t=(0,p.default)(o),n;if(s){var r=(0,p.default)(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return(0,c.default)(this,n)}}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}var E=function(e){(0,i.default)(o,e);var r=I(o);function o(){var a;(0,s.default)(this,o);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a=r.call.apply(r,[this].concat(t));(0,u.default)((0,l.default)(a),"state",{isCopying:false});(0,u.default)((0,l.default)(a),"handleDeleteClick",function(){var e=a.props,i=e.collection,t=e.onShowConfirmDeleteModal,n=e.onShowErrorModal,c=e.router,p=e.Y;var u=i.id,m=i.urlId,d=i.fullUrl;if(u===w.TemplateInstallationsStore.getHomepageCollectionId()){w.CMSV7Events.deleteDemoCollectionErrorModalShown(i.typeName);n({message:(0,w.t)("This page cannot be deleted because it is your homepage. Please assign a new homepage before deleting this page."),title:(0,w.t)("Cannot Delete Homepage")})}else t({title:(0,w.t)("Remove Example Page"),message:(0,w.t)("Are you sure you wish to remove this example page?")},b.NONE,[],function(){w.CMSV7Events.userDeleteDemoCollection(i.typeName);var e=c.getCurrentLocation(),t=e.state,n=t.appUrl,r=t.frameUrl;var o=p.Squarespace.Singletons.TemplateNavigationList.getItemByCollectionId(u);o&&o.destroy({remove:true});var s=/\/pages\/.+/.test(n);s&&c.goUp();var a=d||"/".concat(m);var l=r.includes(a);l?c.replaceFrameUrl("/"):w.FrameActions.refresh()})});(0,u.default)((0,l.default)(a),"handleCopyCollectionClick",function(){var e=a.props,t=e.collection.id,n=e.router,r=e.Y;var o=r.Squarespace.Singletons.TemplateNavigationList.getItemByCollectionId(t);var s=o.get("collection");a.setState({isCopying:true});s.cloneToNewCollection().then(function(){w.CMSV7Events.userCloneDemoCollection(s.get("typeName"));w.FrameActions.refresh();n.replace("/pages/".concat(s.get("id")))}).catch(function(e){a.setState({isCopying:false})})});(0,u.default)((0,l.default)(a),"goBack",function(){var e=a.props.router;e.goUp()});return a}(0,a.default)(o,[{key:"componentDidMount",value:function e(){w.CMSV7Events.cloneDemoCollectionModalShown(this.props.collection.typeName)}},{key:"render",value:function e(){var t=this.props.collection;var n=this.state.isCopying;return m.default.createElement(h.default,{isOpen:(0,y.isDemoCollection)(t.id),onRequestClose:this.goBack},m.default.createElement(d.AlertDialog,{title:(0,w.t)("Example Page"),message:(0,w.t)("This page is an example. You can either copy it and add your own content, or remove it."),buttons:[m.default.createElement(d.AlertDialog.Button,{key:"copyPage",onClick:this.handleCopyCollectionClick,isDisabled:n},(0,w.t)("Copy Page")),m.default.createElement(d.AlertDialog.Button,{key:"remove",onClick:this.handleDeleteClick},(0,w.t)("Remove"))]}))}}]);return o}(m.Component);var D=(0,w.withRouter)((0,w.withY)(E));var M=(0,v.connect)(null,{onShowConfirmDeleteModal:f.openConfirmModal,onCloneCollection:g.cloneCollection,onShowErrorModal:C.openErrorModal})(D);t.default=M;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ModalWrapper.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var d=r(n("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var v=r(n("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var f=r(n("./common/temp/node_modules/react/index.js"));var C=n("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var g=function e(){var t=window.navigator.userAgent;return t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0};var b=230;var h={closeOnEsc:true,closeOnOverlayClicked:true};var w={position:"center"};var y=C.Modal.Transition,I=C.Modal.Overlay,j=C.Modal.Position;var o=function e(t){var n=t.onRequestClose,r=t.isOpen,o=t.positionProps,s=void 0===o?w:o,a=t.transitionDuration,l=void 0===a?b:a,i=t.modalProps,c=void 0===i?h:i,p=t.onTransitionEnd,u=void 0===p?function(){return null}:p,m=(0,v.default)(t,["onRequestClose","isOpen","positionProps","transitionDuration","modalProps","onTransitionEnd"]);return f.default.createElement(y,{duration:l,onTransitionEnd:u},r&&f.default.createElement(C.Modal,(0,d.default)({onRequestClose:function e(t){t&&"esc"===t.source&&t.event.stopImmediatePropagation();n(t)},lockFocus:!g()},c),f.default.createElement(I,null),f.default.createElement(j,s,m.children)))};t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/context/ContentBrowserPanelContext.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:true});t.PanelProvider=t.default=void 0;var c=r(n("./common/temp/node_modules/react/index.js"));var p=(0,c.createContext)();var o=p;t.default=o;var s=(0,c.memo)(function(e){var t=e.children,n=e.onRequestItemEdit,r=e.onRequestItemDelete,o=e.onSelectItem,s=e.onLoadItemsForCollection,a=e.onRequestItemsDelete,l=e.hasDeletedItems,i=e.onDuplicateItem;return c.default.createElement(p.Provider,{value:{onRequestItemEdit:n,onRequestItemDelete:r,onSelectItem:o,onLoadItemsForCollection:s,onRequestItemsDelete:a,hasDeletedItems:l,onDuplicateItem:i}},t)});t.PanelProvider=s},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/hooks/useRegistry.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.useRegistry=void 0;var a=n("./common/temp/node_modules/react/index.js");var l=r(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/registry/index.js"));var o=function e(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),s=2;s<r;s++)o[s-2]=arguments[s];return(0,a.useMemo)(function(){return l.default.get.apply(l.default,[t].concat(o))},[n])};t.useRegistry=o},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/registryStringUtils.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getDeleteConfirmationStrings=t.getString=t.getStringsForEntity=void 0;var o=r(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/registry/index.js"));var s=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/Keys.js");var a=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/MessagingStringTypes.js");var l=function e(t){return o.default.get(s.STRINGS,t)(t.collection||t.contentItem)};t.getStringsForEntity=l;var i=function e(t,n){return l(t)[n]};t.getString=i;var c=function e(t){var n=l(t);return{title:n[a.DELETE_TITLE],message:n[a.DELETE_MESSAGE]}};t.getDeleteConfirmationStrings=c}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/async-pages-content-browser-6502b853e8199e0a6d81c-min.en-US.js.map