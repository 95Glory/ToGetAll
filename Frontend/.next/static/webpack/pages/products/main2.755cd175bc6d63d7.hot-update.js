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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/api/chat */ \"./lib/api/chat.js\");\n/* harmony import */ var _Chats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chats */ \"./pages/products/main2/Chats.js\");\n/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapContainer */ \"./pages/products/main2/MapContainer.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LandingPage(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputText = ref[0], setInputText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), place = ref1[0], setPlace = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), location1 = ref2[0], setLocation = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), foodCategory1 = ref3[0], setFoodCategory = ref3[1];\n    // const [getLocation, setGetLocation] = useState('');\n    // const [getFoodCategory, setGetFoodCategory] = useState('');\n    // getAllChatAPI();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_lib_api_chat__WEBPACK_IMPORTED_MODULE_3__.getAllChatAPI)()), chats = ref4[0], setChats = ref4[1];\n    var locationChangeHandler = function(event) {\n        var text = \"\".concat(event.target.value, \" \").concat(foodCategory1);\n        // const location = `${event.target.value}`;\n        setInputText(text);\n        setLocation(event.target.value);\n    // setGetLocation(event.target.value);\n    // return location;\n    };\n    var categoryChangeHandler = function(event) {\n        var text = \"\".concat(location1, \" \").concat(event.target.value);\n        // const category = `${event.target.value}`;\n        setInputText(text);\n        setFoodCategory(event.target.value);\n    // setGetFoodCategory(event.target.value);\n    // return category;\n    };\n    var inputTextChangeHandler = function() {\n        setPlace(inputText);\n        setInputText(\"\");\n        // setSearchWords(getLocation + getFoodCategory);\n        // console.log(searchWords);\n        // setGetLocation(words[0]);\n        // setGetFoodCategory(words[1]);\n        // console.log(getLocation);\n        // console.log(getFoodCategory);\n        getChatAPI(location1, foodCategory1);\n    };\n    // const location = location;\n    // const foodCategory = category;\n    var getChatAPI = function() {\n        var _ref = _asyncToGenerator(C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(location, foodCategory) {\n            var res, chatsData;\n            return C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return fetch(\"http://localhost:8080/products/main2/\".concat(location, \"/\").concat(foodCategory));\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        chatsData = _ctx.sent;\n                        console.log(chatsData);\n                        setChats(chatsData);\n                        _ctx.next = 15;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                        setChats();\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function getChatAPI(location, foodCategory) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    getServerSideProps();\n    // const search = Place;\n    // console.log(search);\n    // // console.log(typeof(search));\n    // const words = search.split(' ');\n    // // console.log(words[0]);\n    // // console.log(words[1]);\n    // // console.log(getLocation);\n    // // console.log(getFoodCategory);\n    // const getLocation = words[0];\n    // const getFoodCategory = words[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"Location\",\n                id: \"Location\",\n                onChange: locationChangeHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC11C\\uC6B8\",\n                        children: \"\\uC9C0\\uC5ED \\uC120\\uD0DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uACF5\\uB989\",\n                        children: \"\\uACF5\\uB989\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uACC4\\uC591\",\n                        children: \"\\uACC4\\uC591\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uD64D\\uB300\",\n                        children: \"\\uD64D\\uB300\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uAC15\\uB0A8\",\n                        children: \"\\uAC15\\uB0A8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"Category\",\n                id: \"Category\",\n                onChange: categoryChangeHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC74C\\uC2DD \\uC885\\uB958 \\uC120\\uD0DD\",\n                        children: \"\\uC74C\\uC2DD \\uC885\\uB958 \\uC120\\uD0DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uD55C\\uC2DD\",\n                        children: \"\\uD55C\\uC2DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC911\\uC2DD\",\n                        children: \"\\uC911\\uC2DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: \"\\uC591\\uC2DD\",\n                        children: \"\\uC591\\uC2DD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: inputTextChangeHandler,\n                children: \"\\uAC80\\uC0C9\"\n            }, void 0, false, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MapContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                searchPlace: place\n            }, void 0, false, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Chats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                chats: chats\n            }, void 0, false, {\n                fileName: \"C:\\\\BigData\\\\\\uC911\\uAC04 \\uD504\\uB85C\\uC81D\\uD2B8 test\\\\Frontend\\\\pages\\\\products\\\\main2\\\\LandingPage.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LandingPage, \"udkk+tqG5whyZkJ/Nb+FvbQgGLk=\");\n_c = LandingPage;\nvar __N_SSP = true;\nvar getServerSideProps = function() {\n    var _ref = _asyncToGenerator(C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_BigData_test_Frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    ;\n                    ;\n                    return _ctx.abrupt(\"return\", {\n                        // 객체는  props라는 property를 가지고 있고, 그 property의 값은 todos\n                        props: {\n                            chats: chats\n                        }\n                    });\n                case 6:\n                    _ctx.prev = 6;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", {\n                        props: {}\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                6\n            ]\n        ]);\n    }));\n    return function getServerSideProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9tYWluMi9MYW5kaW5nUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2U7QUFDMUI7QUFDYTs7QUFFekMsU0FBU0ssV0FBVyxDQUFDQyxLQUFLLEVBQUU7O0lBRzFCLElBQWtDTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUmhELFNBUWtCLEdBQWtCQSxHQUFZLEdBQTlCLEVBUmxCLFlBUWdDLEdBQUlBLEdBQVksR0FBaEI7SUFDOUIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUeEMsS0FTYyxHQUFjQSxJQUFZLEdBQTFCLEVBVGQsUUFTd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUV0QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVg5QyxTQVdpQixHQUFpQkEsSUFBWSxHQUE3QixFQVhqQixXQVc4QixHQUFJQSxJQUFZLEdBQWhCO0lBQzVCLElBQXdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWnRELGFBWXFCLEdBQXFCQSxJQUFZLEdBQWpDLEVBWnJCLGVBWXNDLEdBQUlBLElBQVksR0FBaEI7SUFFcEMsc0RBQXNEO0lBQ3RELDhEQUE4RDtJQUU5RCxtQkFBbUI7SUFDbkIsSUFBMEJBLElBQXlCLEdBQXpCQSwrQ0FBUSxDQUFDQyw0REFBYSxFQUFFLENBQUMsRUFsQnJELEtBa0JjLEdBQWNELElBQXlCLEdBQXZDLEVBbEJkLFFBa0J3QixHQUFJQSxJQUF5QixHQUE3QjtJQUV0QixJQUFNZ0IscUJBQXFCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ3ZDLElBQU1DLElBQUksR0FBRyxFQUFDLENBQXdCTixNQUFZLENBQWxDSyxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFDLEdBQUMsQ0FBZSxRQUFiUixhQUFZLENBQUU7UUFDcEQs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QUFROzs7Ozs0QkFBcUI7a0NBQzFDLDhEQUF2QmUsUUFBTTt3QkFBQ2YsS0FBSyxFQUFDLGNBQUk7a0NBQUssY0FBRTs7Ozs7NEJBQWE7a0NBQzlCLDhEQUFQZSxRQUFNO3dCQUFDZixLQUFLLEVBQUMsY0FBSTtrQ0FBSyxjQUFFOzs7Ozs0QkFBYTtrQ0FDOUIsOERBQVBlLFFBQU07d0JBQUNmLEtBQUssRUFBQyxjQUFJO2tDQUFLLGNBQUU7Ozs7OzRCQUFhOzs7Ozs7b0JBQ3ZCOzBCQUNqQiw4REFBQ2dCLFFBQU07Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDQyxPQUFPLEVBQUVoQixzQkFBc0I7MEJBQUUsY0FBRTs7Ozs7b0JBQWE7MEJBQ3BFLDhEQUFIbkIscURBQVk7Z0JBQUNvQyxXQUFXLEVBQUUvQixLQUFLOzs7OztvQkFBSTswQkFDcEMsOERBQUNOLDhDQUFLO2dCQUFDWSxLQUFLLEVBQUlBLEtBQUs7Ozs7O29CQUFJOztvQkFDeEIsQ0FDSjtDQUNGO0dBL0dRVixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7O0FBaUhiLElBQU0wQixrQkFBa0I7ZUFBRyx3S0FBWTs7Ozs7OztpREFPbkM7d0JBQ0w7d0JBQ0F6QixLQUFLLEVBQUU7NEJBQUNTLEtBQUssRUFBTEEsS0FBSzt5QkFBQztxQkFFZjs7OztpREFJTTt3QkFDTFQsS0FBSyxFQUFFLEVBQUU7cUJBQ1Y7Ozs7Ozs7Ozs7O0tBRUo7b0JBbkJZeUIsa0JBQWtCOzs7R0FtQjlCLENBQUM7QUFFRiwrREFBZTFCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvbWFpbjIvTGFuZGluZ1BhZ2UuanM/NmE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0QWxsQ2hhdEFQSSB9IGZyb20gJy4uLy4uLy4uL2xpYi9hcGkvY2hhdCc7XHJcbmltcG9ydCBDaGF0cyBmcm9tICcuL0NoYXRzJztcclxuaW1wb3J0IE1hcENvbnRhaW5lciBmcm9tICcuL01hcENvbnRhaW5lcidcclxuXHJcbmZ1bmN0aW9uIExhbmRpbmdQYWdlKHByb3BzKSB7XHJcblxyXG5cclxuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwbGFjZSwgc2V0UGxhY2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm9vZENhdGVnb3J5LCBzZXRGb29kQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBjb25zdCBbZ2V0TG9jYXRpb24sIHNldEdldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBjb25zdCBbZ2V0Rm9vZENhdGVnb3J5LCBzZXRHZXRGb29kQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBnZXRBbGxDaGF0QVBJKCk7XHJcbiAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShnZXRBbGxDaGF0QVBJKCkpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRleHQgPSBgJHtldmVudC50YXJnZXQudmFsdWV9ICR7Zm9vZENhdGVnb3J5fWA7XHJcbiAgICAvLyBjb25zdCBsb2NhdGlvbiA9IGAke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xyXG4gICAgc2V0SW5wdXRUZXh0KHRleHQpO1xyXG4gICAgc2V0TG9jYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIHNldEdldExvY2F0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyByZXR1cm4gbG9jYXRpb247XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0gYCR7bG9jYXRpb259ICR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XHJcbiAgICAvLyBjb25zdCBjYXRlZ29yeSA9IGAke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xyXG4gICAgc2V0SW5wdXRUZXh0KHRleHQpO1xyXG4gICAgc2V0Rm9vZENhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyBzZXRHZXRGb29kQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIHJldHVybiBjYXRlZ29yeTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbnB1dFRleHRDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0UGxhY2UoaW5wdXRUZXh0KTtcclxuICAgIHNldElucHV0VGV4dCgnJyk7XHJcbiAgICAvLyBzZXRTZWFyY2hXb3JkcyhnZXRMb2NhdGlvbiArIGdldEZvb2RDYXRlZ29yeSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hXb3Jkcyk7XHJcbiAgICAvLyBzZXRHZXRMb2NhdGlvbih3b3Jkc1swXSk7XHJcbiAgICAvLyBzZXRHZXRGb29kQ2F0ZWdvcnkod29yZHNbMV0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0TG9jYXRpb24pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0Rm9vZENhdGVnb3J5KTtcclxuICAgIGdldENoYXRBUEkobG9jYXRpb24sIGZvb2RDYXRlZ29yeSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgLy8gY29uc3QgZm9vZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hhdEFQSSA9IGFzeW5jIChsb2NhdGlvbiwgZm9vZENhdGVnb3J5KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wcm9kdWN0cy9tYWluMi8ke2xvY2F0aW9ufS8ke2Zvb2RDYXRlZ29yeX1gKTtcclxuICAgICAgICAvLyAsIHtcclxuICAgICAgICAvLyAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLy8gICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgY29uc3QgY2hhdHNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGF0c0RhdGEpO1xyXG5cclxuICAgICAgICBzZXRDaGF0cyhjaGF0c0RhdGEpXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBzZXRDaGF0cygpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFNlcnZlclNpZGVQcm9wcygpO1xyXG5cclxuICBcclxuICBcclxuXHJcbiAgLy8gY29uc3Qgc2VhcmNoID0gUGxhY2U7XHJcbiAgLy8gY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAvLyAvLyBjb25zb2xlLmxvZyh0eXBlb2Yoc2VhcmNoKSk7XHJcblxyXG4gIC8vIGNvbnN0IHdvcmRzID0gc2VhcmNoLnNwbGl0KCcgJyk7XHJcblxyXG4gIC8vIC8vIGNvbnNvbGUubG9nKHdvcmRzWzBdKTtcclxuICAvLyAvLyBjb25zb2xlLmxvZyh3b3Jkc1sxXSk7XHJcblxyXG4gIC8vIC8vIGNvbnNvbGUubG9nKGdldExvY2F0aW9uKTtcclxuICAvLyAvLyBjb25zb2xlLmxvZyhnZXRGb29kQ2F0ZWdvcnkpO1xyXG5cclxuICAvLyBjb25zdCBnZXRMb2NhdGlvbiA9IHdvcmRzWzBdO1xyXG4gIC8vIGNvbnN0IGdldEZvb2RDYXRlZ29yeSA9IHdvcmRzWzFdO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiTG9jYXRpb25cIiBpZD1cIkxvY2F0aW9uXCIgb25DaGFuZ2U9e2xvY2F0aW9uQ2hhbmdlSGFuZGxlcn0gPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyEnOyauFwiID7sp4Dsl60g7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi6rO166aJXCI+6rO166aJPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi6rOE7JaRXCI+6rOE7JaRPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7ZmN64yAXCI+7ZmN64yAPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi6rCV64KoXCI+6rCV64KoPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiQ2F0ZWdvcnlcIiBpZD1cIkNhdGVnb3J5XCIgb25DaGFuZ2U9e2NhdGVnb3J5Q2hhbmdlSGFuZGxlcn0gPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuydjOyLnSDsooXrpZgg7ISg7YOdXCI+7J2M7IudIOyiheulmCDshKDtg508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLtlZzsi51cIj7tlZzsi508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLspJHsi51cIj7spJHsi508L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLslpHsi51cIj7slpHsi508L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtpbnB1dFRleHRDaGFuZ2VIYW5kbGVyfT7qsoDsg4k8L2J1dHRvbj5cclxuICAgICAgPE1hcENvbnRhaW5lciBzZWFyY2hQbGFjZT17cGxhY2V9IC8+XHJcbiAgICAgIDxDaGF0cyBjaGF0cyA9IHtjaGF0c30gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzL21haW4yXCIpO1xyXG4gICAgY29uc3QgY2hhdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hhdHMpO1xyXG5cclxuICAgIHJldHVybiB7IC8vIOqwneyytCDrsJjtmZhcclxuICAgICAgLy8g6rCd7LK064qUICBwcm9wc+udvOuKlCBwcm9wZXJ0eeulvCDqsIDsp4Dqs6Ag7J6I6rOgLCDqt7ggcHJvcGVydHnsnZgg6rCS7J2AIHRvZG9zXHJcbiAgICAgIHByb3BzOiB7Y2hhdHN9IFxyXG5cclxuICAgIH07XHJcbiAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImdldEFsbENoYXRBUEkiLCJDaGF0cyIsIk1hcENvbnRhaW5lciIsIkxhbmRpbmdQYWdlIiwicHJvcHMiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJwbGFjZSIsInNldFBsYWNlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImZvb2RDYXRlZ29yeSIsInNldEZvb2RDYXRlZ29yeSIsImNoYXRzIiwic2V0Q2hhdHMiLCJsb2NhdGlvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3J5Q2hhbmdlSGFuZGxlciIsImlucHV0VGV4dENoYW5nZUhhbmRsZXIiLCJnZXRDaGF0QVBJIiwicmVzIiwiY2hhdHNEYXRhIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImdldFNlcnZlclNpZGVQcm9wcyIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzZWFyY2hQbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/main2/LandingPage.js\n");

/***/ })

});