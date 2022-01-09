"use strict";
self["webpackHotUpdateproject"]("src_scene_Main_Main_tsx",{

/***/ "./node_modules/@mui/material/styles/styled.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/styles/styled.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootShouldForwardProp": () => (/* binding */ rootShouldForwardProp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export slotShouldForwardProp */
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/createStyled.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@mui/material/styles/defaultTheme.js");


const rootShouldForwardProp = prop => (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp)(prop) && prop !== 'classes';
const slotShouldForwardProp = _mui_system__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp;
const styled = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__["default"])({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"],
  rootShouldForwardProp
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ "./src/components/custom/RandomPhoto/randomPhoto.tsx":
/*!***********************************************************!*\
  !*** ./src/components/custom/RandomPhoto/randomPhoto.tsx ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var api_photosEndPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/photosEndPoint */ "./src/utils/api/photosEndPoint.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./src/utils/utils.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();










var RandomPhoto = function (_c) {
    var roverManifest = _c.roverManifest;
    _b();
    var photosQuantity = 9;
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), photos = _d[0], setPhotos = _d[1];
    var getRandomPhoto = function (manifest) { return __awaiter(void 0, void 0, Promise, function () {
        var randomSol, apiResp, randUniqInts, photosSrc;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    randomSol = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(1, manifest.max_sol);
                    return [4, (0,api_photosEndPoint__WEBPACK_IMPORTED_MODULE_0__.getPhotosEndPoint)(manifest.name, randomSol)];
                case 1:
                    apiResp = _c.sent();
                    _c.label = 2;
                case 2:
                    if (!(apiResp.length < 9)) return [3, 4];
                    randomSol = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(1, manifest.max_sol);
                    return [4, (0,api_photosEndPoint__WEBPACK_IMPORTED_MODULE_0__.getPhotosEndPoint)(manifest.name, randomSol)];
                case 3:
                    apiResp = _c.sent();
                    return [3, 2];
                case 4:
                    randUniqInts = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.getArrayOfRandomUniqueInt)(0, apiResp.length - 1, photosQuantity);
                    photosSrc = [];
                    randUniqInts.forEach(function (randomInt, index) {
                        photosSrc.push({
                            key: index.toString(),
                            imgSrc: apiResp[randomInt].img_src
                        });
                    });
                    return [2, photosSrc];
            }
        });
    }); };
    var memoGetRandomPhoto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(getRandomPhoto, [roverManifest]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (roverManifest.name !== "") {
            memoGetRandomPhoto(roverManifest).then(function (result) {
                setPhotos(result);
            });
        }
    }, [memoGetRandomPhoto, roverManifest]);
    var handleButtonView = function (imgSrc) {
        window.open(imgSrc);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], { container: true, spacing: 4 }, photos.map(function (photo) { return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], { item: true, key: photo.key, xs: 12, sm: 6, md: 4 },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: {
                height: "100%",
                display: "flex",
                flexDirection: "column"
            } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], { component: 'img', sx: {}, image: photo.imgSrc, alt: photo.key }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: { flexGrow: 1 } },
                photo.heading != null && (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { gutterBottom: true, variant: 'h5', component: 'h2' }, "Heading")),
                photo.description != null && (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], null, "This is a media card. You can use this section to describe the content."))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 'small' }, "View"))))); })));
};
_a = RandomPhoto;
__webpack_require__.$Refresh$.register(_a, "RandomPhoto");
_b(RandomPhoto, "5RcmukGLwNgOPThymPAVMjcYKDg=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomPhoto);


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
//# sourceMappingURL=src_scene_Main_Main_tsx.6038a08c78cd06c7eee6.hot-update.js.map