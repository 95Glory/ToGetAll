"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/main2",{

/***/ "./pages/products/main2/LandingPage.js":
/*!*********************************************!*\
  !*** ./pages/products/main2/LandingPage.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/api/chat */ \"./lib/api/chat.js\");\n/* harmony import */ var _Chats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chats */ \"./pages/products/main2/Chats.js\");\n/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapContainer */ \"./pages/products/main2/MapContainer.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LandingPage(props) {\n    _s();\n    console.log(props.chats);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputText = ref[0], setInputText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), place = ref1[0], setPlace = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), location1 = ref2[0], setLocation = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), foodCategory1 = ref3[0], setFoodCategory = ref3[1];\n    // const [getLocation, setGetLocation] = useState('');\n    // const [getFoodCategory, setGetFoodCategory] = useState('');\n    // getAllChatAPI();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.chats), chats = ref4[0], setChats = ref4[1];\n    var locationChangeHandler = function(event) {\n        var text = \"\".concat(event.target.value, \" \").concat(foodCategory1);\n        // const location = `${event.target.value}`;\n        setInputText(text);\n        setLocation(event.target.value);\n    // setGetLocation(event.target.value);\n    // return location;\n    };\n    var categoryChangeHandler = function(event) {\n        var text = \"\".concat(location1, \" \").concat(event.target.value);\n        // const category = `${event.target.value}`;\n        setInputText(text);\n        setFoodCategory(event.target.value);\n    // setGetFoodCategory(event.target.value);\n    // return category;\n    };\n    var inputTextChangeHandler = function() {\n        setPlace(inputText);\n        setInputText(\"\");\n        // setSearchWords(getLocation + getFoodCategory);\n        // console.log(searchWords);\n        // setGetLocation(words[0]);\n        // setGetFoodCategory(words[1]);\n        // console.log(getLocation);\n        // console.log(getFoodCategory);\n        getChatAPI(location1, foodCategory1);\n    };\n    // const location = location;\n    // const foodCategory = category;\n    var getChatAPI = function() {\n        var _ref = _asyncToGenerator(C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(location, foodCategory) {\n            var res, chatsData;\n            return C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return fetch(\"http://localhost:8080/products/main2/\".concat(location, \"/\").concat(foodCategory));\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        chatsData = _ctx.sent;\n                        console.log(chatsData);\n                        setChats(chatsData);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        setChats();\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function getChatAPI(location, foodCategory) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    getServerSideProps();\n    // const search = Place;\n    // console.log(search);\n    // // console.log(typeof(search));\n    // const words = search.split(' ');\n    // // console.log(words[0]);\n    // // console.log(words[1]);\n    // // console.log(getLocation);\n    // // console.log(getFoodCategory);\n    // const getLocation = words[0];\n    // const getFoodCategory = words[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"Location\",\n                id: \"Location\",\n                onChange: locationChangeHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC11C\\uC6B8\",\n                        children: \"\\uC9C0\\uC5ED \\uC120\\uD0DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uACF5\\uB989\",\n                        children: \"\\uACF5\\uB989\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uACC4\\uC591\",\n                        children: \"\\uACC4\\uC591\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uD64D\\uB300\",\n                        children: \"\\uD64D\\uB300\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uAC15\\uB0A8\",\n                        children: \"\\uAC15\\uB0A8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"Category\",\n                id: \"Category\",\n                onChange: categoryChangeHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC74C\\uC2DD \\uC885\\uB958 \\uC120\\uD0DD\",\n                        children: \"\\uC74C\\uC2DD \\uC885\\uB958 \\uC120\\uD0DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uD55C\\uC2DD\",\n                        children: \"\\uD55C\\uC2DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC911\\uC2DD\",\n                        children: \"\\uC911\\uC2DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC591\\uC2DD\",\n                        children: \"\\uC591\\uC2DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: inputTextChangeHandler,\n                children: \"\\uAC80\\uC0C9\"\n            }, void 0, false, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MapContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                searchPlace: place\n            }, void 0, false, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Chats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                chats: chats\n            }, void 0, false, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LandingPage, \"mcw8uDnWQGQkQngkAlM46a019Nw=\");\n_c = LandingPage;\nvar __N_SSP = true;\nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ;\n                    ;\n                    return _ctx.abrupt(\"return\", {\n                        // 객체는  props라는 property를 가지고 있고, 그 property의 값은 todos\n                        props: {\n                            chats: chats\n                        }\n                    });\n                case 6:\n                    _ctx.prev = 6;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", {\n                        props: {}\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                6\n            ]\n        ]);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9tYWluMi9MYW5kaW5nUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2U7QUFDMUI7QUFDYTs7QUFFekMsU0FBU0ssV0FBVyxDQUFDQyxLQUFLLEVBQUU7O0lBRTFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUV6QixJQUFrQ1IsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVRoRCxTQVNrQixHQUFrQkEsR0FBWSxHQUE5QixFQVRsQixZQVNnQyxHQUFJQSxHQUFZLEdBQWhCO0lBQzlCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVnhDLEtBVWMsR0FBY0EsSUFBWSxHQUExQixFQVZkLFFBVXdCLEdBQUlBLElBQVksR0FBaEI7SUFFdEIsSUFBZ0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFaOUMsU0FZaUIsR0FBaUJBLElBQVksR0FBN0IsRUFaakIsV0FZOEIsR0FBSUEsSUFBWSxHQUFoQjtJQUM1QixJQUF3Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWJ0RCxhQWFxQixHQUFxQkEsSUFBWSxHQUFqQyxFQWJyQixlQWFzQyxHQUFJQSxJQUFZLEdBQWhCO0lBRXBDLHNEQUFzRDtJQUN0RCw4REFBOEQ7SUFFOUQsbUJBQW1CO0lBQ25CLElBQTBCQSxJQUFxQixHQUFyQkEsK0NBQVEsQ0FBQ0ssS0FBSyxDQUFDRyxLQUFLLENBQUMsRUFuQmpELEtBbUJjLEdBQWNSLElBQXFCLEdBQW5DLEVBbkJkLFFBbUJ3QixHQUFJQSxJQUFxQixHQUF6QjtJQUV0QixJQUFNa0IscUJBQXFCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ3ZDLElBQU1DLElBQUksR0FBRyxFQUFDLENBQXdCTCxNQUFZLENBQWxDSSxLQUFL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RVgscUJBQXFCOztrQ0FDbkUsOERBQUNZLFFBQU07d0JBQUNiLEtBQUssRUFBQyx3Q0FBVTtrQ0FBYSx3Q0FBUTs7Ozs7NEJBQXFCO2tDQUMxQyw4REFBdkJhLFFBQU07d0JBQUNiLEtBQUssRUFBQyxjQUFJO2tDQUFLLGNBQUU7Ozs7OzRCQUFhO2tDQUM5Qiw4REFBUGEsUUFBTTt3QkFBQ2IsS0FBSyxFQUFDLGNBQUk7a0NBQUssY0FBRTs7Ozs7NEJBQWE7a0NBQzlCLDhEQUFQYSxRQUFNO3dCQUFDYixLQUFLLEVBQUMsY0FBSTtrQ0FBSyxjQUFFOzs7Ozs0QkFBYTs7Ozs7O29CQUN2QjswQkFDakIsOERBQUNjLFFBQU07Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDQyxPQUFPLEVBQUVkLHNCQUFzQjswQkFBRSxjQUFFOzs7OztvQkFBYTswQkFDcEUsOERBQUhyQixxREFBWTtnQkFBQ29DLFdBQVcsRUFBRTVCLEtBQUs7Ozs7O29CQUFJOzBCQUNwQyw4REFBQ1QsOENBQUs7Z0JBQUNNLEtBQUssRUFBRUEsS0FBSzs7Ozs7b0JBQUk7O29CQUN0QixDQUNKO0NBQ0Y7R0FoSFFKLFdBQVc7QUFBWEEsS0FBQUEsV0FBVzs7QUFrSGIsSUFBTTBCLGtCQUFrQjtlQUFHLHdLQUFZOzs7Ozs7O2lEQU1uQzt3QkFDTDt3QkFDQXpCLEtBQUssRUFBRTs0QkFBQ0csS0FBSyxFQUFMQSxLQUFLO3lCQUFDO3FCQUVmOzs7O2lEQUlNO3dCQUNMSCxLQUFLLEVBQUUsRUFBRTtxQkFDVjs7Ozs7Ozs7Ozs7S0FFSjtvQkFsQll5QixrQkFBa0I7OztHQWtCOUIsQ0FBQztBQUVGLCtEQUFlMUIsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9tYWluMi9MYW5kaW5nUGFnZS5qcz82YTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRBbGxDaGF0QVBJIH0gZnJvbSAnLi4vLi4vLi4vbGliL2FwaS9jaGF0JztcclxuaW1wb3J0IENoYXRzIGZyb20gJy4vQ2hhdHMnO1xyXG5pbXBvcnQgTWFwQ29udGFpbmVyIGZyb20gJy4vTWFwQ29udGFpbmVyJ1xyXG5cclxuZnVuY3Rpb24gTGFuZGluZ1BhZ2UocHJvcHMpIHtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvcHMuY2hhdHMpO1xyXG5cclxuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwbGFjZSwgc2V0UGxhY2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm9vZENhdGVnb3J5LCBzZXRGb29kQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBjb25zdCBbZ2V0TG9jYXRpb24sIHNldEdldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBjb25zdCBbZ2V0Rm9vZENhdGVnb3J5LCBzZXRHZXRGb29kQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBnZXRBbGxDaGF0QVBJKCk7XHJcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShwcm9wcy5jaGF0cyk7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dCA9IGAke2V2ZW50LnRhcmdldC52YWx1ZX0gJHtmb29kQ2F0ZWdvcnl9YDtcclxuICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gYCR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XHJcbiAgICBzZXRJbnB1dFRleHQodGV4dCk7XHJcbiAgICBzZXRMb2NhdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gc2V0R2V0TG9jYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIHJldHVybiBsb2NhdGlvbjtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRleHQgPSBgJHtsb2NhdGlvbn0gJHtldmVudC50YXJnZXQudmFsdWV9YDtcclxuICAgIC8vIGNvbnN0IGNhdGVnb3J5ID0gYCR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XHJcbiAgICBzZXRJbnB1dFRleHQodGV4dCk7XHJcbiAgICBzZXRGb29kQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIHNldEdldEZvb2RDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gcmV0dXJuIGNhdGVnb3J5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlucHV0VGV4dENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRQbGFjZShpbnB1dFRleHQpO1xyXG4gICAgc2V0SW5wdXRUZXh0KCcnKTtcclxuICAgIC8vIHNldFNlYXJjaFdvcmRzKGdldExvY2F0aW9uICsgZ2V0Rm9vZENhdGVnb3J5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFdvcmRzKTtcclxuICAgIC8vIHNldEdldExvY2F0aW9uKHdvcmRzWzBdKTtcclxuICAgIC8vIHNldEdldEZvb2RDYXRlZ29yeSh3b3Jkc1sxXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRMb2NhdGlvbik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRGb29kQ2F0ZWdvcnkpO1xyXG4gICAgZ2V0Q2hhdEFQSShsb2NhdGlvbiwgZm9vZENhdGVnb3J5KTtcclxuICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAvLyBjb25zdCBmb29kQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuXHJcbiAgICBjb25zdCBnZXRDaGF0QVBJID0gYXN5bmMgKGxvY2F0aW9uLCBmb29kQ2F0ZWdvcnkpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzL21haW4yLyR7bG9jYXRpb259LyR7Zm9vZENhdGVnb3J5fWApO1xyXG4gICAgICAgIC8vICwge1xyXG4gICAgICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBjb25zdCBjaGF0c0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXRzRGF0YSk7XHJcblxyXG4gICAgICAgIHNldENoYXRzKGNoYXRzRGF0YSlcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHNldENoYXRzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0U2VydmVyU2lkZVByb3BzKCk7XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuICAvLyBjb25zdCBzZWFyY2ggPSBQbGFjZTtcclxuICAvLyBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gIC8vIC8vIGNvbnNvbGUubG9nKHR5cGVvZihzZWFyY2gpKTtcclxuXHJcbiAgLy8gY29uc3Qgd29yZHMgPSBzZWFyY2guc3BsaXQoJyAnKTtcclxuXHJcbiAgLy8gLy8gY29uc29sZS5sb2cod29yZHNbMF0pO1xyXG4gIC8vIC8vIGNvbnNvbGUubG9nKHdvcmRzWzFdKTtcclxuXHJcbiAgLy8gLy8gY29uc29sZS5sb2coZ2V0TG9jYXRpb24pO1xyXG4gIC8vIC8vIGNvbnNvbGUubG9nKGdldEZvb2RDYXRlZ29yeSk7XHJcblxyXG4gIC8vIGNvbnN0IGdldExvY2F0aW9uID0gd29yZHNbMF07XHJcbiAgLy8gY29uc3QgZ2V0Rm9vZENhdGVnb3J5ID0gd29yZHNbMV07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJMb2NhdGlvblwiIGlkPVwiTG9jYXRpb25cIiBvbkNoYW5nZT17bG9jYXRpb25DaGFuZ2VIYW5kbGVyfSA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7ISc7Jq4XCIgPuyngOyXrSDshKDtg508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqs7XrpolcIj7qs7Xrpok8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqs4TslpFcIj7qs4TslpE8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLtmY3rjIBcIj7tmY3rjIA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqsJXrgqhcIj7qsJXrgqg8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJDYXRlZ29yeVwiIGlkPVwiQ2F0ZWdvcnlcIiBvbkNoYW5nZT17Y2F0ZWdvcnlDaGFuZ2VIYW5kbGVyfSA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7J2M7IudIOyiheulmCDshKDtg51cIj7snYzsi50g7KKF66WYIOyEoO2DnTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIu2VnOyLnVwiPu2VnOyLnTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuykkeyLnVwiPuykkeyLnTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyWkeyLnVwiPuyWkeyLnTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2lucHV0VGV4dENoYW5nZUhhbmRsZXJ9PuqygOyDiTwvYnV0dG9uPlxyXG4gICAgICA8TWFwQ29udGFpbmVyIHNlYXJjaFBsYWNlPXtwbGFjZX0gLz5cclxuICAgICAgPENoYXRzIGNoYXRzPXtjaGF0c30gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHMvbWFpbjJcIik7XHJcbiAgICBjb25zdCBjaGF0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaGF0cyk7XHJcblxyXG4gICAgcmV0dXJuIHsgLy8g6rCd7LK0IOuwmO2ZmFxyXG4gICAgICAvLyDqsJ3ssrTripQgIHByb3Bz652864qUIHByb3BlcnR566W8IOqwgOyngOqzoCDsnojqs6AsIOq3uCBwcm9wZXJ0eeydmCDqsJLsnYAgdG9kb3NcclxuICAgICAgcHJvcHM6IHtjaGF0c30gXHJcblxyXG4gICAgfTtcclxuICAgIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge31cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0QWxsQ2hhdEFQSSIsIkNoYXRzIiwiTWFwQ29udGFpbmVyIiwiTGFuZGluZ1BhZ2UiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjaGF0cyIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsInBsYWNlIiwic2V0UGxhY2UiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiZm9vZENhdGVnb3J5Iiwic2V0Rm9vZENhdGVnb3J5Iiwic2V0Q2hhdHMiLCJsb2NhdGlvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3J5Q2hhbmdlSGFuZGxlciIsImlucHV0VGV4dENoYW5nZUhhbmRsZXIiLCJnZXRDaGF0QVBJIiwicmVzIiwiY2hhdHNEYXRhIiwiZmV0Y2giLCJqc29uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwic2VsZWN0IiwibmFtZSIsImlkIiwib25DaGFuZ2UiLCJvcHRpb24iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNlYXJjaFBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/main2/LandingPage.js\n");

/***/ })

});