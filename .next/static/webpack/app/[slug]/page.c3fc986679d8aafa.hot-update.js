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

/***/ "(app-pages-browser)/./app/components/TabProducts.tsx":
/*!****************************************!*\
  !*** ./app/components/TabProducts.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PopupCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupCarousel */ \"(app-pages-browser)/./app/components/PopupCarousel.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst TabProducts = (props)=>{\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openPopup = ()=>{\n        setIsPopupOpen(true);\n    };\n    const closePopup = ()=>{\n        setIsPopupOpen(false);\n    };\n    const images = [\n        \"2.jpeg\",\n        \"2.jpeg\",\n        \"2.jpeg\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-lg mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded mb-4 cursor-pointer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/\" + props.tabs[activeTab].content,\n                    alt: \"\",\n                    width: 500,\n                    onClick: openPopup\n                }, void 0, false, {\n                    fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4 grid-cols-4 product-library\",\n                children: props.tabs.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(activeTab === index ? \"border-2 border-[#6fa400] opacity-100\" : \"border-2 border-white opacity-50\", \" rounded-lg px-2 py-4 col-span-1 cursor-pointer\"),\n                        onClick: ()=>setActiveTab(index),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/\" + tab.label,\n                            alt: \"\",\n                            width: 100,\n                            className: \"rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            isPopupOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopupCarousel__WEBPACK_IMPORTED_MODULE_2__.PopupCarousel, {\n                images: images,\n                onClose: closePopup\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n                lineNumber: 33,\n                columnNumber: 29\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabProducts.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TabProducts, \"RFEvQCRFdw/4xrj2eUtiyIo35LY=\");\n_c = TabProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabProducts);\nvar _c;\n$RefreshReg$(_c, \"TabProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RhYlByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQzJCO0FBRTVELE1BQU1FLGNBQWMsQ0FBQ0M7O0lBQ2pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVEsWUFBWTtRQUNkRCxlQUFlO0lBQ25CO0lBQ0EsTUFBTUUsYUFBYTtRQUNmRixlQUFlO0lBQ25CO0lBQ0EsTUFBTUcsU0FBUztRQUFDO1FBQVM7UUFBUztLQUFTO0lBQzNDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJQyxLQUFLLE1BQU1YLE1BQU1ZLElBQUksQ0FBQ1gsVUFBVSxDQUFDWSxPQUFPO29CQUFFQyxLQUFJO29CQUFHQyxPQUFPO29CQUFLQyxTQUFTWDs7Ozs7Ozs7Ozs7MEJBRS9FLDhEQUFDRztnQkFBSUMsV0FBVTswQkFDVlQsTUFBTVksSUFBSSxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsS0FBVUMsc0JBQ3ZCLDhEQUFDWDt3QkFFR0MsV0FBVyxHQUdWLE9BSGFSLGNBQWNrQixRQUN0QiwwQ0FDQSxvQ0FDTDt3QkFDREgsU0FBUyxJQUFNZCxhQUFhaUI7a0NBRTVCLDRFQUFDVDs0QkFBSUMsS0FBSyxNQUFNTyxJQUFJRSxLQUFLOzRCQUFFTixLQUFJOzRCQUFHQyxPQUFPOzRCQUFLTixXQUFVOzs7Ozs7dUJBUG5EVTs7Ozs7Ozs7OztZQVdoQmhCLDZCQUFlLDhEQUFDTCxvRUFBYUE7Z0JBQUNTLFFBQVFBO2dCQUFRYyxTQUFTZjs7Ozs7Ozs7Ozs7O0FBR3BFO0dBaENNUDtLQUFBQTtBQWtDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UYWJQcm9kdWN0cy50c3g/NjJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvcHVwQ2Fyb3VzZWwgfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwQ2Fyb3VzZWwnO1xuXG5jb25zdCBUYWJQcm9kdWN0cyA9IChwcm9wczogYW55KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0SXNQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNQb3B1cE9wZW4odHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1BvcHVwT3BlbihmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWFnZXMgPSBbJzIuanBlZycsJzIuanBlZycsJzIuanBlZyddO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIG1iLTQgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvXCIgKyBwcm9wcy50YWJzW2FjdGl2ZVRhYl0uY29udGVudH0gYWx0PVwiXCIgd2lkdGg9ezUwMH0gb25DbGljaz17b3BlblBvcHVwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBncmlkLWNvbHMtNCBwcm9kdWN0LWxpYnJhcnlcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGFicy5tYXAoKHRhYjogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmVUYWIgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLTIgYm9yZGVyLVsjNmZhNDAwXSBvcGFjaXR5LTEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItMiBib3JkZXItd2hpdGUgb3BhY2l0eS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gcm91bmRlZC1sZyBweC0yIHB5LTQgY29sLXNwYW4tMSBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvXCIgKyB0YWIubGFiZWx9IGFsdD1cIlwiIHdpZHRoPXsxMDB9IGNsYXNzTmFtZT1cInJvdW5kZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzUG9wdXBPcGVuICYmIDxQb3B1cENhcm91c2VsIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtjbG9zZVBvcHVwfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlByb2R1Y3RzO1xuXG5cblxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQb3B1cENhcm91c2VsIiwiVGFiUHJvZHVjdHMiLCJwcm9wcyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImlzUG9wdXBPcGVuIiwic2V0SXNQb3B1cE9wZW4iLCJvcGVuUG9wdXAiLCJjbG9zZVBvcHVwIiwiaW1hZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidGFicyIsImNvbnRlbnQiLCJhbHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJtYXAiLCJ0YWIiLCJpbmRleCIsImxhYmVsIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TabProducts.tsx\n"));

/***/ })

});