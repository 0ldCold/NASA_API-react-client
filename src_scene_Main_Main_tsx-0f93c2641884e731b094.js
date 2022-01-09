"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_scene_Main_Main_tsx"],{

/***/ "./src/scene/Main/Main.tsx":
/*!*********************************!*\
  !*** ./src/scene/Main/Main.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();

var Main = function () {
    _b();
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Curiosity"), rover = _c[0], setrover = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), img = _d[0], setImg = _d[1];
    var handleBytton = function (event) { };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'center' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { value: rover },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Curiosity' }, "Curiosity"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Opportunity' }, "Opportunity"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Opportunity' }, "Spirit")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: handleBytton }, "\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { alt: 'RandomRoversPhoto', src: img })));
};
_a = Main;
__webpack_require__.$Refresh$.register(_a, "Main");
_b(Main, "OFS8H8UupEQk578Gc629Q38hzIc=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


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

}]);
//# sourceMappingURL=src_scene_Main_Main_tsx-0f93c2641884e731b094.js.map