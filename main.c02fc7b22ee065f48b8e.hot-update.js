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


var Main = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_a = function () { return Promise.all(/*! import() */[__webpack_require__.e("defaultVendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_scene_Main_Main_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! scene/Main/Main */ "./src/scene/Main/Main.tsx")); });
__webpack_require__.$Refresh$.register(_a, "Main$React.lazy");
_b = Main;
__webpack_require__.$Refresh$.register(_b, "Main");
var Manifest = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_c = function () { return Promise.all(/*! import() */[__webpack_require__.e("defaultVendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_scene_Manifest_ManifestPage_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! scene/Manifest/ManifestPage */ "./src/scene/Manifest/ManifestPage.tsx")); });
__webpack_require__.$Refresh$.register(_c, "Manifest$React.lazy");
_d = Manifest;
__webpack_require__.$Refresh$.register(_d, "Manifest");
var NotFound = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_e = function () {
    return __webpack_require__.e(/*! import() */ "src_components_NotFound_NotFound_tsx").then(__webpack_require__.bind(__webpack_require__, /*! components/NotFound/NotFound */ "./src/components/NotFound/NotFound.tsx"));
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
/******/ 		return "" + chunkId + "-" + {"defaultVendors-node_modules_react-select_dist_react-select_esm_js":"0c1160bfa0546398d761","src_scene_Main_Main_tsx":"2622beb6ebd25a0933b7","src_scene_Manifest_ManifestPage_tsx":"9a1221e2ff4336516da1","src_components_NotFound_NotFound_tsx":"dcad851c41c4933f104d"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8216713a11f34a2e4150")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c02fc7b22ee065f48b8e.hot-update.js.map