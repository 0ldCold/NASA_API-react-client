"use strict";
self["webpackHotUpdateproject"]("main",{

/***/ "./src/routing/Routes.tsx":
/*!********************************!*\
  !*** ./src/routing/Routes.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a, _b, _c, _d, _e, _f, _g;


var Main = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_a = function () { return __webpack_require__.e(/*! import() */ "src_scene_Main_Main_tsx").then(__webpack_require__.bind(__webpack_require__, /*! scene/Main/Main */ "./src/scene/Main/Main.tsx")); });
__webpack_require__.$Refresh$.register(_a, "Main$React.lazy");
_b = Main;
__webpack_require__.$Refresh$.register(_b, "Main");
var Manifest = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_c = function () { return __webpack_require__.e(/*! import() */ "src_scene_Manifest_ManifestPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! scene/Manifest/ManifestPage */ "./src/scene/Manifest/ManifestPage.tsx")); });
__webpack_require__.$Refresh$.register(_c, "Manifest$React.lazy");
_d = Manifest;
__webpack_require__.$Refresh$.register(_d, "Manifest");
var NotFound = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_e = function () {
    return __webpack_require__.e(/*! import() */ "src_components_base_NotFound_NotFound_tsx").then(__webpack_require__.bind(__webpack_require__, /*! components/base/NotFound/NotFound */ "./src/components/base/NotFound/NotFound.tsx"));
});
__webpack_require__.$Refresh$.register(_e, "NotFound$React.lazy");
_f = NotFound;
__webpack_require__.$Refresh$.register(_f, "NotFound");
var Routes = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loader") },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { exact: true, path: '/', component: Main }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { exact: true, path: '/main', component: Main }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { exact: true, path: '/manifest', component: Manifest }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { component: NotFound }))));
};
_g = Routes;
__webpack_require__.$Refresh$.register(_g, "Routes");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "-" + {"src_scene_Main_Main_tsx":"b3861d2f95ba7bd9d24a","src_scene_Manifest_ManifestPage_tsx":"4301e42c347c42b89e01","src_components_base_NotFound_NotFound_tsx":"de59fc2d38b6f0ef20f1"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5116638706b75ec48833")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.933431e08ea933cd14ef.hot-update.js.map