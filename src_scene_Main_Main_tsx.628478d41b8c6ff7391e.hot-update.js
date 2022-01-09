"use strict";
self["webpackHotUpdateproject"]("src_scene_Main_Main_tsx",{

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
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var entities_Manifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/Manifest */ "./src/entities/Manifest.ts");
/* harmony import */ var components_custom_RoverSelector_roverSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/custom/RoverSelector/roverSelector */ "./src/components/custom/RoverSelector/roverSelector.tsx");
/* harmony import */ var entities_RoversName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities/RoversName */ "./src/entities/RoversName.ts");
/* harmony import */ var api_missionManifests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/missionManifests */ "./src/utils/api/missionManifests.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _a, _b;
var _c;
_c = __webpack_require__.$Refresh$.signature();




















function Copyright() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: 'body2', color: 'text.secondary', align: 'center' },
        "Copyright © ",
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__["default"], { color: 'inherit', href: 'https://mui.com/' }, "Your Website"),
        " ",
        new Date().getFullYear(),
        "."));
}
_a = Copyright;
__webpack_require__.$Refresh$.register(_a, "Copyright");
var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["default"])({
    palette: {
        primary: {
            main: "#aa593e"
        },
        secondary: {
            main: "#693118"
        },
        background: {
            paper: "#fba87e",
            default: "#fedbca"
        },
        action: {
            selectedOpacity: 0.2
        }
    }
});
var Main = function () {
    _c();
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,entities_Manifest__WEBPACK_IMPORTED_MODULE_1__.getEmptyManifest)()), roverManifest = _d[0], setRoverManifest = _d[1];
    var handleSelector = function (roverName) {
        (0,api_missionManifests__WEBPACK_IMPORTED_MODULE_4__.getManifest)(roverName).then(function (apiResp) {
            setRoverManifest(apiResp);
        });
    };
    var photos = [
        {
            key: "1",
            imgSrc: ""
        },
        {
            key: "2",
            imgSrc: ""
        }
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__["default"], { theme: theme },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_10__["default"], { position: 'relative' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: 'h6', color: 'inherit', noWrap: true }, "Mars rovers"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: {
                    bgcolor: "background.paper",
                    pt: 8,
                    pb: 6
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], { maxWidth: 'md' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { component: 'h1', variant: 'h2', align: 'center', color: 'text.primary', gutterBottom: true }, roverManifest.name),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_14__["default"], { sx: { pt: 4 }, direction: 'row', spacing: 2, justifyContent: 'center' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_custom_RoverSelector_roverSelector__WEBPACK_IMPORTED_MODULE_2__["default"], { options: entities_RoversName__WEBPACK_IMPORTED_MODULE_3__["default"], onSelect: handleSelector })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: {
                        py: 8
                    }, maxWidth: 'md' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], { container: true, spacing: 4 }, photos.map(function (photo) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], { item: true, key: photo.key, xs: 12, sm: 6, md: 4 },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], { sx: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_17__["default"], { component: 'img', sx: {}, image: photo.imgSrc, alt: photo.key }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { flexGrow: 1 } },
                                photo.heading != null && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: 'h5', component: 'h2' }, "Heading")),
                                photo.description != null && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], null, "This is a media card. You can use this section to describe the content."))),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_19__["default"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_20__["default"], { size: 'small' }, "View"))))); }))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { bgcolor: "background.paper", p: 6 }, component: 'footer' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: 'h6', align: 'center', gutterBottom: true }, "Footer"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: 'subtitle1', align: 'center', color: 'text.secondary', component: 'p' }, "Something here to give the footer a purpose!"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Copyright, null))));
};
_b = Main;
__webpack_require__.$Refresh$.register(_b, "Main");
_c(Main, "cY2Xpj4rBliK4QdUNytUW/H3sT0=");
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

});
//# sourceMappingURL=src_scene_Main_Main_tsx.628478d41b8c6ff7391e.hot-update.js.map