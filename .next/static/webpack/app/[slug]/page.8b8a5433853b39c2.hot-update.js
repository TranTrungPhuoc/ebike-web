"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./app/components/TabContents.tsx":
/*!****************************************!*\
  !*** ./app/components/TabContents.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import Image from 'next/image';\nconst TabContents = (props)=>{\n    _s();\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handeShowClick = ()=>{\n        setShowContent(!showContent);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 product-library relative product-content\",\n                children: props.tabs.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(activeTab === index ? \"border-t-2 border-[#6fa400] opacity-100\" : \"border-t-2 border-white opacity-50\", \" py-2 col-span-1 cursor-pointer uppercase text-[#6fa400] text-xs md:text-base text-center font-semibold\"),\n                        onClick: ()=>setActiveTab(index),\n                        children: tab.label\n                    }, index, false, {\n                        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white text-[#666] rounded mb-4 mt-4\" + (!showContent ? \" h-[500px] overflow-hidden\" : \"\"),\n                dangerouslySetInnerHTML: {\n                    __html: props.tabs[activeTab].content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center relative\" + (!showContent ? \" readmore\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white\",\n                    onClick: ()=>handeShowClick(),\n                    children: !showContent ? \"Xem Th\\xeam\" : \"R\\xfat Gọn\"\n                }, void 0, false, {\n                    fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TabContents, \"YbLcfJAMcglicAfvG01MVUOmOuo=\");\n_c = TabContents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabContents);\nvar _c;\n$RefreshReg$(_c, \"TabContents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RhYkNvbnRlbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUM7QUFDakMsa0NBQWtDO0FBQ2xDLE1BQU1DLGNBQWMsQ0FBQ0M7O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTU8saUJBQWlCO1FBQ25CSCxlQUFlLENBQUNEO0lBQ3BCO0lBQ0EscUJBQ0ksOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVlAsTUFBTVEsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsS0FBVUMsc0JBQ3ZCLDhEQUFDTDt3QkFFR0MsV0FBVyxHQUdWLE9BSGFKLGNBQWNRLFFBQ3RCLDRDQUNBLHNDQUNMO3dCQUNEQyxTQUFTLElBQU1SLGFBQWFPO2tDQUUzQkQsSUFBSUcsS0FBSzt1QkFQTEY7Ozs7Ozs7Ozs7MEJBV2pCLDhEQUFDTDtnQkFBSUMsV0FBVywyQ0FBNEMsRUFBQ04sY0FBWSwrQkFBOEIsRUFBQztnQkFBSWEseUJBQXlCO29CQUFFQyxRQUFRZixNQUFNUSxJQUFJLENBQUNMLFVBQVUsQ0FBQ2EsT0FBTztnQkFBQzs7Ozs7OzBCQUM3Syw4REFBQ1Y7Z0JBQUlDLFdBQVcseUJBQTBCLEVBQUNOLGNBQVksY0FBYSxFQUFDOzBCQUNqRSw0RUFBQ2dCO29CQUFPQyxNQUFLO29CQUFTWCxXQUFVO29CQUErREssU0FBUyxJQUFNUDs4QkFDdkcsQ0FBQ0osY0FBWSxnQkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7R0E5Qk1GO0tBQUFBO0FBZ0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RhYkNvbnRlbnRzLnRzeD8xN2MwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5jb25zdCBUYWJDb250ZW50cyA9IChwcm9wczogYW55KSA9PiB7XG4gICAgY29uc3QgW3Nob3dDb250ZW50LCBzZXRTaG93Q29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGhhbmRlU2hvd0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93Q29udGVudCghc2hvd0NvbnRlbnQpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIHByb2R1Y3QtbGlicmFyeSByZWxhdGl2ZSBwcm9kdWN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGFicy5tYXAoKHRhYjogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmVUYWIgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXQtMiBib3JkZXItWyM2ZmE0MDBdIG9wYWNpdHktMTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci10LTIgYm9yZGVyLXdoaXRlIG9wYWNpdHktNTAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9IHB5LTIgY29sLXNwYW4tMSBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2UgdGV4dC1bIzZmYTQwMF0gdGV4dC14cyBtZDp0ZXh0LWJhc2UgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFiLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYmctd2hpdGUgdGV4dC1bIzY2Nl0gcm91bmRlZCBtYi00IG10LTRcIiArICghc2hvd0NvbnRlbnQ/JyBoLVs1MDBweF0gb3ZlcmZsb3ctaGlkZGVuJzogJycpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnRhYnNbYWN0aXZlVGFiXS5jb250ZW50IH19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widGV4dC1jZW50ZXIgcmVsYXRpdmVcIiArICghc2hvd0NvbnRlbnQ/JyByZWFkbW9yZSc6ICcnKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYm9yZGVyIHB5LTIgcHgtOCByb3VuZGVkIGhvdmVyOmJnLVsjNmZhNDAwXSBob3Zlcjp0ZXh0LXdoaXRlJyBvbkNsaWNrPXsoKSA9PiBoYW5kZVNob3dDbGljaygpfT5cbiAgICAgICAgICAgICAgICAgICAgeyAoIXNob3dDb250ZW50PydYZW0gVGjDqm0nOiAnUsO6dCBH4buNbicpIH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udGVudHM7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGFiQ29udGVudHMiLCJwcm9wcyIsInNob3dDb250ZW50Iiwic2V0U2hvd0NvbnRlbnQiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJoYW5kZVNob3dDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInRhYnMiLCJtYXAiLCJ0YWIiLCJpbmRleCIsIm9uQ2xpY2siLCJsYWJlbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudCIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TabContents.tsx\n"));

/***/ })

});