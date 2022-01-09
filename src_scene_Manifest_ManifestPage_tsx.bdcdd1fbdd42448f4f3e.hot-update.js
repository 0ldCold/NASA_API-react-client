"use strict";
self["webpackHotUpdateproject"]("src_scene_Manifest_ManifestPage_tsx",{

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
/* harmony import */ var src_api_missionManifests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/api/missionManifests */ "./src/api/missionManifests.ts");
/* harmony import */ var src_entities_Manifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/entities/Manifest */ "./src/entities/Manifest.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();



var ManifestPage = function () {
    _b();
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Curiosity"), rover = _c[0], setRover = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,src_entities_Manifest__WEBPACK_IMPORTED_MODULE_2__.getEmptyManifest)()), manifest = _d[0], setManifest = _d[1];
    var handleSelectChange = function (event) {
        setRover(event.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        (0,src_api_missionManifests__WEBPACK_IMPORTED_MODULE_1__.getManifest)(rover).then(function (apiResp) {
            setManifest(apiResp);
        });
    }, [rover]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'center' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'selector' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { value: rover, onChange: handleSelectChange },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Curiosity' }, "Curiosity"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Opportunity' }, "Opportunity"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Spirit' }, "Spirit")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: 'button', onClick: handleButton }, "Load Rover's manifest"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'manifest' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Name of the Rover:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.name, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "The Rover's launch date from Earth:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.launch_date, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "The Rover's landing date on Mars:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.landing_date, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "The Rover's mission status:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.status, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "The most recent Martian sol from which photos exist:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.max_sol, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "The most recent Earth date from which photos exist:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.max_date, disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Number of photos taken by that Rover:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'text', value: manifest.photos.length, disabled: true }))));
};
_a = ManifestPage;
__webpack_require__.$Refresh$.register(_a, "ManifestPage");
_b(ManifestPage, "OZbNp6DGI4oI++ao0cnWRY1n4b0=");
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

});
//# sourceMappingURL=src_scene_Manifest_ManifestPage_tsx.bdcdd1fbdd42448f4f3e.hot-update.js.map