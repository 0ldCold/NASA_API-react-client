"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_scene_Manifest_ManifestPage_tsx"],{

/***/ "./src/components/custom/ManifestInfo/ManifestInfo.tsx":
/*!*************************************************************!*\
  !*** ./src/components/custom/ManifestInfo/ManifestInfo.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a, _b;



var GridItem = function (_c) {
    var text = _c.text, value = _c.value;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], { item: true, xs: 8 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: 'h5', align: 'left', color: 'text.secondary', paragraph: true }, text)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], { item: true, xs: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: 'h5', align: 'left', color: 'text.secondary', paragraph: true }, value))));
};
_a = GridItem;
__webpack_require__.$Refresh$.register(_a, "GridItem");
var ManifestInfo = function (_c) {
    var roverManifest = _c.roverManifest;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], { container: true, columnSpacing: 1, rowSpacing: 1 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridItem, { text: "The Rover's launch date from Earth:", value: roverManifest.launch_date }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridItem, { text: "The Rover's landing date on Mars:", value: roverManifest.landing_date }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridItem, { text: "The Rover's mission status:", value: roverManifest.status }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridItem, { text: 'The most recent Martian sol from which photos exist:', value: roverManifest.max_sol.toString() }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridItem, { text: 'The most recent Earth date from which photos exist:', value: roverManifest.max_date }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(GridItem, { text: 'Number of photos taken by that Rover:', value: roverManifest.photos.length.toString() })));
};
_b = ManifestInfo;
__webpack_require__.$Refresh$.register(_b, "ManifestInfo");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManifestInfo);


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

/***/ }),

/***/ "./src/scene/Manifest/ManifestPage.tsx":
/*!*********************************************!*\
  !*** ./src/scene/Manifest/ManifestPage.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_custom_ManifestInfo_ManifestInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/custom/ManifestInfo/ManifestInfo */ "./src/components/custom/ManifestInfo/ManifestInfo.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a;


var ManifestPage = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_custom_ManifestInfo_ManifestInfo__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};
_a = ManifestPage;
__webpack_require__.$Refresh$.register(_a, "ManifestPage");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManifestPage);


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
//# sourceMappingURL=src_scene_Manifest_ManifestPage_tsx-ba47b38dc4b2efc837c3.js.map