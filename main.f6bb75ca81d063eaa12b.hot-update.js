self["webpackHotUpdateproject"]("main",{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n10 │ @import \"styles/scene/main.scss\";\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  D:\\projects\\NASA_API-react-client\\src\\style.scss 10:9  root stylesheet\n    at processResult (D:\\projects\\NASA_API-react-client\\node_modules\\webpack\\lib\\NormalModule.js:751:19)\n    at D:\\projects\\NASA_API-react-client\\node_modules\\webpack\\lib\\NormalModule.js:853:5\n    at D:\\projects\\NASA_API-react-client\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at D:\\projects\\NASA_API-react-client\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (D:\\projects\\NASA_API-react-client\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at D:\\projects\\NASA_API-react-client\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (D:\\projects\\NASA_API-react-client\\node_modules\\sass\\sass.dart.js:98993:16)\n    at render_closure1.call$2 (D:\\projects\\NASA_API-react-client\\node_modules\\sass\\sass.dart.js:84511:12)\n    at _RootZone.runBinary$3$3 (D:\\projects\\NASA_API-react-client\\node_modules\\sass\\sass.dart.js:29540:18)\n    at _FutureListener.handleError$1 (D:\\projects\\NASA_API-react-client\\node_modules\\sass\\sass.dart.js:28062:21)");

/***/ }),

/***/ "./src/routing/Routes.tsx":
/*!********************************!*\
  !*** ./src/routing/Routes.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a, _b, _c, _d, _e;


var Main = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_a = function () { return Promise.all(/*! import() */[__webpack_require__.e("node_modules_mui_material_AppBar_AppBar_js-node_modules_mui_material_Box_Box_js-node_modules_-081ba1"), __webpack_require__.e("node_modules_mui_system_esm_colorManipulator_js-node_modules_mui_system_esm_createBox_js-node-c6043e"), __webpack_require__.e("node_modules_react-lazy-load-image-component_src_effects_blur_css")]).then(__webpack_require__.bind(__webpack_require__, /*! scene/Main */ "./src/scene/Main.tsx")); });
__webpack_require__.$Refresh$.register(_a, "Main$React.lazy");
_b = Main;
__webpack_require__.$Refresh$.register(_b, "Main");
var NotFound = react__WEBPACK_IMPORTED_MODULE_0__.lazy(_c = function () {
    return __webpack_require__.e(/*! import() */ "src_components_base_NotFound_NotFound_tsx").then(__webpack_require__.bind(__webpack_require__, /*! components/base/NotFound/NotFound */ "./src/components/base/NotFound/NotFound.tsx"));
});
__webpack_require__.$Refresh$.register(_c, "NotFound$React.lazy");
_d = NotFound;
__webpack_require__.$Refresh$.register(_d, "NotFound");
var Routes = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loader") },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { exact: true, path: '/', component: Main }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { exact: true, path: '/main', component: Main }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, { component: NotFound }))));
};
_e = Routes;
__webpack_require__.$Refresh$.register(_e, "Routes");
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
/******/ 		return "" + chunkId + "-" + {"node_modules_mui_material_AppBar_AppBar_js-node_modules_mui_material_Box_Box_js-node_modules_-081ba1":"c139dad69fe0ec904506","node_modules_mui_system_esm_colorManipulator_js-node_modules_mui_system_esm_createBox_js-node-c6043e":"d515dc91c8d44810a7d8","node_modules_react-lazy-load-image-component_src_effects_blur_css":"27893f3d5dbcb0dd9098","src_components_base_NotFound_NotFound_tsx":"de59fc2d38b6f0ef20f1"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fd18128f543bfe6e06fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f6bb75ca81d063eaa12b.hot-update.js.map